import axios from 'axios';

import { User } from 'model';

import { AuthLink } from './model';

const getCurrentUser = async () => {
  const response = await axios.get<User>('/user/me');

  return response.data;
};

const authenticate = async () => {
  const response = await axios.get<AuthLink>('auth/link');

  return response.data;
};

const API = {
  getCurrentUser,
  authenticate,
};

export default API;
export { QUERY } from './query';
