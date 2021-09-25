import axios from 'axios';
// import router from '@/router';

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axios;