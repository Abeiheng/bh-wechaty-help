import { Conf } from 'electron-conf/renderer'
export interface IData {
  data: any
  expire?: number
}

export default () => {
  const conf = new Conf()
  async function set(key: string, data: any, expire?: number): Promise<void> {
    let cache: IData = { data, expire }
    if (expire) {
      cache.expire = new Date().getTime() + expire * 1000
    }
    await conf.set(key, cache)
    localStorage.setItem(key, JSON.stringify(cache))
  }
  function get(key: string, defaultValue: any = null): any {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expire
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return defaultValue
      }
      return cache.data
    }
    return defaultValue
  }
  function remove(key: string) {
    localStorage.removeItem(key)
  }
  return { set, get, remove }
}
