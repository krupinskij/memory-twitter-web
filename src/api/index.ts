import axios from 'axios';

import { User } from 'model';

import { AuthLink } from './model';

const getCurrentUser = async () => {
  const { data } = await axios.get<User>('user/me');

  return data;
};

const authenticate = async () => {
  const { data } = await axios.get<AuthLink>('auth/link');

  return data;
};

const logout = async () => {
  const { data } = await axios.post('auth/logout');

  return data;
};

const API = {
  getCurrentUser,
  authenticate,
  logout,
};

export default API;
export { QUERY } from './query';
