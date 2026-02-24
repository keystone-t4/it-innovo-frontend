export const sortByDateTimeDesc = <
    T extends Record<string, unknown>,
    D extends keyof T,
    U extends keyof T
>(
    items: T[],
    dateKey: D,
    timeKey: U
): T[] => {
    return [...items].sort((a, b) => {
        const dateA = new Date(`${a[dateKey]}T${a[timeKey]}`).getTime()
        const dateB = new Date(`${b[dateKey]}T${b[timeKey]}`).getTime()
        return dateB - dateA
    })
}