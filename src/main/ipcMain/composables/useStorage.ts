import { Conf } from 'electron-conf/main'
export default () => {
  const conf = new Conf()
  function set(key: string, data: any): void {
    conf.set(key, data)
  }
  function get(key: string): any {
    const cacheStore: any = conf.get(key)
    return cacheStore.data
  }
  function remove(key: string) {
    conf.delete(key)
  }
  return { set, get, remove }
}
