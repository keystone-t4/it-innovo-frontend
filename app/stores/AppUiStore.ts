export const useUiStore = defineStore('uiStore', () => {
    const isDialogOpen = ref(false);
    const initialData = ref<any>(null);

    function openDialog(data: any = null) {
        initialData.value = data;
        isDialogOpen.value = true;
    }

    function closeDialog() {
        isDialogOpen.value = false;
        initialData.value = null;
    }

    return { isDialogOpen, initialData, openDialog, closeDialog };
})