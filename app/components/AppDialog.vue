<script setup lang="ts">
import { useUiStore } from '~/stores/AppUiStore';

const uiStore = useUiStore();
const dialogRef = ref<HTMLDialogElement | null>(null);

watch(
    () => uiStore.isDialogOpen,
    async (isOpen) => {
      await nextTick();

      const dialog = dialogRef.value;
      if (!dialog) return;

      if (isOpen && !dialog.open) {
        dialog.showModal();

        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
        dialog.focus();
      }

      if (!isOpen && dialog.open) {
        const scrollY = -parseInt(document.body.style.top || '0');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);

        dialog.close();
      }
    },
    { immediate: true }
);

function closeFromUi() {
  uiStore.closeDialog();
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    closeFromUi();
  }
}

function handleCancel(e: Event) {
  e.preventDefault();
  closeFromUi();
}
</script>

<template>
  <Teleport to="body">
    <dialog
        ref="dialogRef"
        class="modal"
        @click="handleBackdropClick"
        @cancel="handleCancel"
    >
      <div class="modal__content block">
        <button
            class="modal__close"
            type="button"
            @click="closeFromUi"
            aria-label="Закрыть модальное окно"
        >
          <svg class="modal__close-icon" aria-hidden="true">
            <use href="/sprite.svg#cross" />
          </svg>
        </button>

        <div class="modal__body">
          <slot />
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  inset: 0;
  z-index: 5000;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;

  &[open] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  &__content {
    position: relative;
    background: #fff;
    width: auto;
    min-height: min-content;
    display: flex;
    flex-direction: column;
    padding: var(--layout-indent);
    box-sizing: border-box;
    border-radius: 24px;

    @media (max-width: 1220px) {
    }

    @media (max-width: 767px) {
      width: 100%;
      min-height: 100dvh;
      border-radius: 0;
    }

    @media (max-width: 480px) {
    }
  }

  &__close {
    position: absolute;
    top: var(--layout-indent);
    right: var(--layout-indent);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  &__close-icon {
    width: 17px;
    height: 17px;
    display: block;
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    @media (max-width: 768px) {
      margin-top: 32px;
    }
  }
}
</style>