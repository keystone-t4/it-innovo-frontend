import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    css: [
        join(currentDir, './app/assets/css/main.scss'),
    ],
})
