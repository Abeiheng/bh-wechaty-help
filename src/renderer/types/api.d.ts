//请求响应结构
interface ApiData<T> {
  message?: string
  code: number
  status?: 'success' | 'error'
  data: T
}

//分页请求响应结构
interface ApiPage<T> {
  data: T[]
  meta: {
    current_page: number
    page_row: number
    total: number
    total_page: number
  }
}
