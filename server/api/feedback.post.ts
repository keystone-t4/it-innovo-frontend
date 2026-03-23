import nodemailer from "nodemailer"
import { defineEventHandler, readBody, sendError } from "h3"

const runtimeConfig = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { name, phone, email, comment } = body

        if (!name || !email) {
            return sendError(event, createError({ statusCode: 400, statusMessage: "Заполните все обязательные поля" }))
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: runtimeConfig.emailUser,
                pass: runtimeConfig.emailPass,
            },
        })

        await transporter.sendMail({
            from: runtimeConfig.emailUser,
            to: runtimeConfig.emailUser,
            replyTo: email,
            subject: "Сообщение с it-innovo.ru",
            text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКомментарий: ${comment}`,
        })

        return { message: "Сообщение отправлено!" }
    } catch (err: any) {
        console.error(err)
        return sendError(event, createError({ statusCode: 500, statusMessage: err.message || "Ошибка сервера" }))
    }
})