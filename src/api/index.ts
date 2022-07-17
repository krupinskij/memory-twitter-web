import axios from 'axios';
import { QueryKey, QueryFunctionContext } from 'react-query';

import { User } from 'model';

import { AuthLink, UserResult } from './model';

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

const getFollowings = async ({ queryKey }: QueryFunctionContext) => {
  const [, level] = queryKey;
  const { data } = await axios.get(`user/followings?level=${level}`);

  return data;
};

const saveResult = async ({ clicks, time, level }: UserResult) => {
  await axios.post(`result?level=${level}`, { clicks, time });
};

const API = {
  getCurrentUser,
  authenticate,
  logout,
  getFollowings,
  saveResult,
};

export default API;
export { QUERY } from './query';
