import axios from 'axios';

const api_url = String(process.env.API_URL)
console.log(api_url)

export const instance = axios.create({
    withCredentials: false,
    baseURL: api_url
})

instance.interceptors.request.use(config => {
    config.params = {
        api_key: '4237669ebd35e8010beee2f55fd45546'
    };
    return config;
});