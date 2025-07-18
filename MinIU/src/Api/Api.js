import axios from "axios";
import EnvironmentConfig, { initializeEnvironment } from '../Common/EnvironmentConfig';

const api = axios.create({
  headers: {
    'ngrok-skip-browser-warning': 'true' 
  }
});

api.interceptors.request.use(async (config) => {
  if (!EnvironmentConfig.isInitialized) {
    await initializeEnvironment();
  }
  config.baseURL = EnvironmentConfig.NGROK_BASE_URL;
  
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized - có thể token hết hạn');
    }
    return Promise.reject(error);
  }
);

export const userApi = {
  getUsers: (page, limit) => api.get('/users', { params: { page, limit } }),
};

export const curriApi = {
  getLastedCurri: () => api.get('/curricula/latest'),
};

export const authApi = {
  getProfile: () => api.get('/auth/profile'),
  logout: () => api.post('/auth/logout'),
};

export default authApi;