import config from '@config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: config.CHUCK_NORRIS_API,
});

export default axiosInstance;

