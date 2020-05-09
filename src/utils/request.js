import axios from 'axios'

const request = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 1000,
  withCredentials: true,
})

// request controller
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
});


// response controller
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default request