import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.11:3333' // porta do servidor node
});

export default api;