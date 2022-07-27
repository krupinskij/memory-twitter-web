import axios from 'axios';

import { Level, Order, Players, Result, User } from 'model';

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

const getLevels = async () => {
  const { data } = await axios.get<Level[]>('user/levels');

  return data;
};

const getFollowings = async (level: Level) => {
  const { data } = await axios.get<User[]>(`user/followings?level=${level}`);

  return data;
};

const saveResult = async ({ clicks, time, level }: UserResult) => {
  await axios.post(`result?level=${level}`, { clicks, time });
};

const getResults = async (level: Level, order: Order, users: Players, lastItemId?: string) => {
  const lastItemQuery = lastItemId ? `&lastItem=${lastItemId}` : '';
  const { data } = await axios.get<Result[]>(
    `result?level=${level}&order=${order}&users=${users}${lastItemQuery}`
  );

  return data;
};

const API = {
  getCurrentUser,
  authenticate,
  logout,
  getLevels,
  getFollowings,
  saveResult,
  getResults,
};

export default API;
export { QUERY } from './query';
