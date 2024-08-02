import appMiddleware from '@renderer/middleware/appMiddleware'
export default {
  middleware: [appMiddleware],
  router: {
    prefix: '',
  },
}
