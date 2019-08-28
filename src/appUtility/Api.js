import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.paylix.net/api/admin'
});