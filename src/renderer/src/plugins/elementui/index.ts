import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { App } from 'vue'
const setup = (app: App) => {
    app.use(ElementPlus)
}
export { setup }