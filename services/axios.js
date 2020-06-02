import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-anonibus-416c4.cloudfunctions.net',
});

export default api;
