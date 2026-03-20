export function useClickOutside(
    elementRef: Ref<HTMLElement | null>,
    callback: () => void
) {
    const handleClick = (event: MouseEvent) => {
        // Если элемент не задан или клик был внутри него — игнорируем
        if (!elementRef.value || elementRef.value.contains(event.target as Node)) {
            return;
        }
        callback();
    };

    onMounted(() => {
        document.addEventListener('click', handleClick);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClick);
    });
}