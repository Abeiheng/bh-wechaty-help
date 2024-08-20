import Axios from './axios'

const http = new Axios({
  baseURL: 'https://bot.bhsr922.cn/api',
  timeout: 10000,
})
const setup = () => {}
export { http, setup }