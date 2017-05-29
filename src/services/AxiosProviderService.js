import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  console.log('Request Intercepted');
  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
  // Do something with response data
  console.log('Response Intercepted');
  return response;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});

class AxiosProviderService {

  get = (url) => {
    return axios.get(url)
  }

  post = (url, data) => {
    return axios.post(url, data)
  }

  put = (url, data) => {
    return axios.put(url, data)
  }

  delete = (url) => {
    return axios.delete(url)
  }

}
export let axiosService = new AxiosProviderService();
