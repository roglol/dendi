import axios from 'axios';

export default axios.create({
    baseURL: 'http://paylix.loc/api/admin'
});