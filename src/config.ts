import axios from 'axios';
import { nanoid } from 'nanoid/non-secure';
import { QueryClient } from 'react-query';

import API, { QUERY } from 'api';
import env from 'env';
import { HttpResponse } from 'model';
import { notification$ } from 'providers/NotificationProvider';

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } });

axios.defaults.baseURL = `${env.URL}/api`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (value) => {
    if (value.data.data) {
      value.data = value.data.data;
    }

    if (value.data.message) {
      const notification = {
        id: nanoid(),
        message: value.data.message,
      };

      notification$.next(notification);
    }

    return value;
  },
  async (error: any) => {
    const data = error.response?.data as HttpResponse;

    if (data.verbose) {
      const notification = {
        id: nanoid(),
        message: data.message,
      };

      // notification$.next(notification);
    }

    if (data.logout) {
      await API.logout();
      queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined);
    }

    return Promise.reject(error);
  }
);
