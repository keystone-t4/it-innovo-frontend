export type FeedbackFields =
    | 'name'
    | 'email'
    | 'phone'
    | 'comment'
    | 'privacyPolicy'
    | 'personalDataPolicy'

interface ValidationResult {
    hasError: boolean
    newErrors: Record<FeedbackFields, string>
}

const phoneRegex = /^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function feedbackValidator(
    name: string,
    email: string,
    phone: string,
    comment: string,
    isAgreePrivacy: boolean,
    isAgreePersonalData: boolean,
    errors: Record<FeedbackFields, string>
): ValidationResult {
    let hasError = false

    // Имя
    if (!name.trim()) {
        errors.name = 'Введите имя'
        hasError = true
    } else if (name.length > 300) {
        errors.name = 'Слишком длинное имя (макс. 300 символов)'
        hasError = true
    } else {
        errors.name = ''
    }

    // E-mail
    if (!email.trim()) {
        errors.email = 'Введите e-mail'
        hasError = true
    } else if (!emailRegex.test(email)) {
        errors.email = 'Введите корректный e-mail'
        hasError = true
    } else if (email.length > 254) {
        errors.email = 'Слишком длинный e-mail'
        hasError = true
    } else {
        errors.email = ''
    }

    // Телефон (опционально)
    if (phone.trim() && !phoneRegex.test(phone)) {
        errors.phone = 'Введите корректный номер телефона'
        hasError = true
    } else {
        errors.phone = ''
    }

    // Комментарий
    if (comment.length > 1000) {
        errors.comment = 'Слишком длинный комментарий (макс. 1000 символов)'
        hasError = true
    } else {
        errors.comment = ''
    }

    // Политика конфиденциальности
    if (!isAgreePrivacy) {
        errors.privacyPolicy = 'Нужно согласиться с политикой конфиденциальности'
        hasError = true
    } else {
        errors.privacyPolicy = ''
    }

    // Персональные данные
    if (!isAgreePersonalData) {
        errors.personalDataPolicy = 'Нужно дать согласие на обработку персональных данных'
        hasError = true
    } else {
        errors.personalDataPolicy = ''
    }

    return {
        hasError,
        newErrors: errors,
    }
}