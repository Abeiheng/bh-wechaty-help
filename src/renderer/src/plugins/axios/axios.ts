import useStorage from '@renderer/composables/useStorage'
import { CacheEnum } from '@renderer/enum/CacheEnum'
import { HttpCodeEnum } from '@renderer/enum/HttpCodeEnum'
import router from '@renderer/plugins/router'
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
interface IOptions {
  loading?: boolean
  message?: boolean
  clearValidateError?: boolean
}
export default class Axios {
  private instance
  private loading: any
  private options: IOptions = { loading: true, message: true, clearValidateError: true }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T>(config: AxiosRequestConfig, options?: IOptions) {
    this.options = Object.assign(this.options, options ?? {})
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<T>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!this.loading && this.options.loading) {
          this.loading = ElLoading.service({
            background: 'rgba(255,255,255,0.1)',
            fullscreen: true,
          })
        }
        config.headers.Accept = 'application/json'
        config.headers.Authorization = `Bearer ${useStorage().get(CacheEnum.TOKEN_NAME)}`
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        if (this.loading) {
          this.loading.close()
          this.loading = undefined
        }
        const message = response.data?.success ?? response.data?.success
        if (message && this.options.message) {
          ElMessage({
            type: 'success',
            message,
            grouping: true,
            duration: 2000,
          })
        }

        this.options = { loading: true, message: true, clearValidateError: true }
        return response
      },
      (error) => {
        console.log(error)
        if (this.loading) {
          this.loading.close()
          this.loading = undefined
        }
        this.options = { loading: true, message: true, clearValidateError: true }
        const {
          response: { status, data },
        } = error
        const message = data.error ?? data.message
        switch (status) {
          case HttpCodeEnum.FORBIDDEN:
            ElMessage({ type: 'error', message: message ?? '没有操作权限' })
            break
          case HttpCodeEnum.NOT_FOUND:
            ElMessage.error('请求资源不存在')
            break
          case HttpCodeEnum.TOO_MANY_REQUESTS:
            ElMessage({ type: 'error', message: '请求过于频繁，请稍候再试' })
            break
          case HttpCodeEnum.UNAUTHORIZED:
            ElMessage({ type: 'error', message: 'Token出现错误' })
            router.push({ name: 'login' })
            break
          case HttpCodeEnum.UNPROCESSABLE_ENTITY:
            ElMessage({ type: 'error', message: '提交的内容不允许为空' })
            break
          case HttpCodeEnum.BAD_REQUEST:
            ElMessage({ type: 'error', message: data.message })
            break
          default:
            if (message) {
              ElMessage({ type: 'error', message: message ?? '服务器错误' })
            }
        }
        return Promise.reject(error)
      },
    )
  }
}
