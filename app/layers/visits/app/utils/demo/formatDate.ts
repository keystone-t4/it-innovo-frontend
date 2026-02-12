export function formatDate(dateStr: string, withTime = true) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '-';

    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();

    if (!withTime) return `${dd}.${mm}.${yyyy}`;

    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');

    return `${dd}.${mm}.${yyyy} ${hh}:${min}:${ss}`;
}