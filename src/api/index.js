import axios from 'axios'

const axiosInstance = axios.create({ baseURL:" https://api.themoviedb.org/3/" })

axiosInstance.interceptors.request.use((config) => {
    console.log(config);
    config.params = config.params || {};
    config.params['api_key'] = process.env.REACT_APP_API_KEY;
    return config;
});

export default axiosInstance