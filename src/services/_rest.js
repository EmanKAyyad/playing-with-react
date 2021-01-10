import axios from 'axios';

export default class restService {
    static getPosts = () => axios.get(`https://jsonplaceholder.typicode.com/posts`);
}