import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import useStorage from '../composables/useStorage'
export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request(config)
        resolve(response.data)
      } catch (error) {
        console.log('报错了')
      }
    }) as Promise<T>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const storage = useStorage()
      config.headers.Accept = 'application/json'
      config.headers.Authorization = `Bearer ${storage.get('login_token')}`
      return config
    })
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response): AxiosResponse => {
        return response
      },
      (error: any) => {
        console.log('报错了')
      },
    )
  }
}
