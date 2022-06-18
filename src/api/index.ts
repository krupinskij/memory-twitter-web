import axios from 'axios';

import { User } from 'model';

const getCurrentUser = async () => {
  const response = await axios.get<User>('/me');

  return response.data;
};

const API = {
  getCurrentUser,
};

export default API;
export { QUERY } from './query';
