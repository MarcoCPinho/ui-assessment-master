import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
});
