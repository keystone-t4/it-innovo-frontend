import { defineNuxtPlugin } from '#app'

declare global {
    interface Window {
        ym?: (...args: any[]) => void
    }
}

export default defineNuxtPlugin(() => {
    if (process.client) {
        // Вставка скрипта метрики
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){ (m[i].a=m[i].a||[]).push(arguments) };
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        // Инициализация метрики
        window.ym?.(105120989, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    }
});