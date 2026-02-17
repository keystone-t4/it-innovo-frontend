export function onlyDigits(input: string) {
    return input.replace(/\D/g, '');
}

export function containsOnlyAllowedPhoneChars(input: string) {
    return /^[0-9+()\-\s]+$/.test(input);
}

export function isValidPhone(input: string) {
    if (!input.trim()) return false;

    if (!containsOnlyAllowedPhoneChars(input)) return false;

    const digits = onlyDigits(input);
    return digits.length >= 10 && digits.length <= 15;
}

export function normalizePhone(input: string) {
    return onlyDigits(input);
}
