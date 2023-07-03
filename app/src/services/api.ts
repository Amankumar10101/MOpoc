import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'process';
import { baseURL } from './apiconstants';

const axiosInst = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//Request intercepor
axiosInst.interceptors.request.use(
    (config )=> {
        // config.headers['Authorization'] = 'Bearer your_token'
        return config;
    },
   (error) => {
    return Promise.reject(error)
   }
);


//Response Interceptor
axiosInst.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const fetchdata = (url: string) => {
    axiosInst.get(url);
}

export const postData = (url: string, data: any) => {
    return axiosInst.post(url,data)
}



