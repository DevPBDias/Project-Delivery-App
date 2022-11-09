import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint)
    .catch((error) => error.response.data);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body)
    .catch((error) => error.response.data);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body)
    .catch((error) => error.response.data);
  console.log('Register:', data);
  return data;
};

export const requestCheckout = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body)
    .catch((error) => error.response.data);
  console.log('Checkout:', data);
  return data.id;
};

export const requestOrderDetails = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body)
    .catch((error) => error.response.data);
  console.log('OrderDetails:', data);
  return data;
};
