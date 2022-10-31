import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint)
    .catch((error) => error.response.data);
  console.log('Data:', data);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body)
    .catch((error) => error.response.data);
  console.log('Login:', data);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body)
    .catch((error) => error.response.data);
  console.log('Register:', data);
  return data;
};
