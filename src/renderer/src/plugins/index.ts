import { App } from 'vue'
import { setup as axios } from './axios'
import { setup as dayjs } from './dayjs'
import { setup as elementui } from './elementui'
import { setup as iconpark } from './iconpark'
import { setup as tailwindcss } from './tailwindcss'
import { setup as router } from './router'
import { setup as pinia } from './pinia'

const modules = [axios, dayjs, elementui, iconpark, tailwindcss, router, pinia]

export default function register(app: App) {
  modules.map((setup) => setup(app))
}