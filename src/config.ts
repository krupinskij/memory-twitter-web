import axios from 'axios';
import { QueryClient } from 'react-query';

import { QUERY } from 'api';
import env from 'env';

export const queryClient = new QueryClient();

axios.defaults.baseURL = `${env.URL}/api`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (value) => {
    return value;
  },
  (error: any) => {
    const status = error.response?.status;

    if (status === 401) {
      queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined);
    }

    return Promise.reject(error);
  }
);
