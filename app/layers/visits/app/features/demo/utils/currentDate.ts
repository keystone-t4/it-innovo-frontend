export function getToday() {
    return new Date().toISOString().split('T')[0];
}

export function getCurrentTime() {
    return new Date().toTimeString().slice(0, 5);
}

export function isPastDate(date: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selected = new Date(date);
    selected.setHours(0, 0, 0, 0);

    return selected < today;
}

export function isPastDateTime(date: string, time: string) {
    const now = new Date();
    const selected = new Date(`${date}T${time}`);

    return selected < now;
}