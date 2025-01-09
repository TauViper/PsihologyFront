import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://psychologyservice.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
