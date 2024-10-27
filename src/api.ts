// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5226/api', // Update with your .NET Core API URL
});

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}

export function logout() {
    localStorage.removeItem('token');
    setAuthToken(null);
    window.location.href = '/login';
  }

export default api;