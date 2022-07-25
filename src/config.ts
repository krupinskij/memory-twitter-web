import axios from 'axios';
import { nanoid } from 'nanoid/non-secure';
import { QueryClient } from 'react-query';

import API, { QUERY } from 'api';
import { notification$ } from 'components/Notifications';
import env from 'env';
import { HttpResponse } from 'model';

export const queryClient = new QueryClient();

axios.defaults.baseURL = `${env.URL}/api`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (value) => value,
  async (error: any) => {
    const data = error.response?.data as HttpResponse;

    const notification = {
      id: nanoid(),
      message: data.message,
    };

    if (data.verbose) {
      notification$.next(notification);
    }

    if (data.logout) {
      await API.logout();
      queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined);
    }

    return Promise.reject(error);
  }
);
