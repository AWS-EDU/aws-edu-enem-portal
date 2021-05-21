import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.edu.awsunicorn.com/dev/'
});

export default api;