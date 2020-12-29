import axios from 'axios';

const api = axios.create({
    baseURL: 'https://u77f93sj99.execute-api.us-east-1.amazonaws.com/DEV'
});

export default api;