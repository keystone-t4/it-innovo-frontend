export function dateTimeFormat(
    value: string | Date,
    withTime = true
): string {
    const d = value instanceof Date ? value : new Date(value);

    if (isNaN(d.getTime())) return '-';

    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();

    if (!withTime) return `${dd}.${mm}.${yyyy}`;

    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');

    return `${dd}.${mm}.${yyyy} ${hh}:${min}`;
}

export function combineDateAndTime(
    dateStr: string,
    timeStr: string
): Date {
    const datePart = dateStr.split('T')[0];
    const rawTime = timeStr.includes('T')
        ? timeStr.split('T')[1]
        : timeStr;

    const timePart =
        rawTime?.length === 5 ? `${rawTime}:00` : rawTime;

    return new Date(`${datePart}T${timePart}`);
}

export function timeDifference(
    fromISO: string,
    toISO: string
): string {
    const from = new Date(fromISO);
    const to = new Date(toISO);

    if (isNaN(from.getTime()) || isNaN(to.getTime())) {
        return '00:00';
    }

    const diffMs = to.getTime() - from.getTime();
    const sign = diffMs >= 0 ? '+' : '-';

    const absMs = Math.abs(diffMs);

    const totalMinutes = Math.floor(absMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');

    return `${sign}${hh}:${mm}`;
}