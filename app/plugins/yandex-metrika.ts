import { defineNuxtPlugin } from '#app'

declare global {
    interface Window {
        ym?: (...args: any[]) => void;
        [key: string]: any;
    }
}

export default defineNuxtPlugin(() => {
    if (process.client) {
        const m: any = window
        const e: Document = document
        const t: string = 'script'
        const r: string = 'https://mc.yandex.ru/metrika/tag.js'
        const i: string = 'ym'

        if (!m[i]) {
            m[i] = function (...args: any[]) {
                (m[i].a = m[i].a || []).push(args)
            }
            m[i].l = +new Date()
        }

        const k = document.createElement('script') as HTMLScriptElement
        k.async = true
        k.src = r

        const a = e.getElementsByTagName('script')[0] as HTMLScriptElement | undefined
        if (a && a.parentNode) {
            a.parentNode.insertBefore(k, a)
        }

        m[i](105120989, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        })
    }
})