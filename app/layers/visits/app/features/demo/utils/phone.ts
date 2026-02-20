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

// +7 (321) 215-43-42 -> 73212154342
export function normalizePhone(input: string) {
    return onlyDigits(input);
}

export function formatPhoneForUI(input: string | null | undefined): string {
    if (!input) return '';

    const digits = input.replace(/\D/g, '');

    if (digits.length !== 11) return input;

    let country = digits[0];
    if (country === '8') country = '7';
    const main = digits.slice(1);

    // +7 (XXX) XXX-XX-XX
    return `+${country} (${main.slice(0,3)}) ${main.slice(3,6)}-${main.slice(6,8)}-${main.slice(8,10)}`;
}