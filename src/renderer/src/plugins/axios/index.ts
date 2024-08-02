import Axios from './axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
})
const setup = () => {}
export { http, setup }