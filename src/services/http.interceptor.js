import axios from 'axios';

axios.interceptors.request.use(
    (req) => {
        console.log(req);
        return req;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (req) => {
        console.log(req);
        return req;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)