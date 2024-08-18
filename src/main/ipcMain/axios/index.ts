import Axios from './axios'

const http = new Axios({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})
export { http}