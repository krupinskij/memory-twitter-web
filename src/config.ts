import axios from 'axios';
import env from 'env';

axios.defaults.baseURL = `${env.URL}/api`;
axios.defaults.withCredentials = true;
