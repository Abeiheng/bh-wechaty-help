<<<<<<< HEAD
import Axios from './axios'
=======
import Axios from './Axios'
>>>>>>> 766feb282a2d5c8c69d5ff637d6f7ce894d7f883

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
})
const setup = () => {}
export { http, setup }