import axios from 'axios';
const token = localStorage.getItem('user-token');

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
export default axios;