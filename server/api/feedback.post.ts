import nodemailer from "nodemailer"
import { defineEventHandler, readBody, sendError } from "h3"

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { name, phone, email, comment } = body

        if (!name || !email) {
            return sendError(event, createError({ statusCode: 400, statusMessage: "Заполните все обязательные поля" }))
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.yandex.ru",
            port: Number(process.env.EMAIL_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || "info@it-innovo.ru",
            replyTo: email,
            subject: "Сообщение с it-innovo.com",
            text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКомментарий: ${comment}`,
        })

        return { message: "Сообщение отправлено!" }
    } catch (err: any) {
        console.error(err)
        return sendError(event, createError({ statusCode: 500, statusMessage: err.message || "Ошибка сервера" }))
    }
})