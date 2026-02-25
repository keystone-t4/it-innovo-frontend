export const sortByDatetime = <
    T extends Record<string, unknown>,
    K extends keyof T
>(
    items: T[],
    datetimeKey: K,
    isDesc: boolean = true
): T[] => {
    return [...items].sort((a, b) => {
        const timeA = new Date(a[datetimeKey] as string).getTime();
        const timeB = new Date(b[datetimeKey] as string).getTime();
        return isDesc ? timeB - timeA : timeA - timeB;
    });
};