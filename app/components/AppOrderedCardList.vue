<script setup lang="ts">
interface OrderListItem {
  firstStrongText: string
  text: string
}

defineProps<{
  items: OrderListItem[]
}>()
</script>

<template>
  <div class="ordered-list grid-2fr">
    <div
        v-for="(item, index) in items"
        :key="index"
        class="ordered-list__card card"
    >
      <p class="ordered-list__card-description paragraph">
        <strong>{{ item.firstStrongText }}</strong> {{ item.text }}
      </p>
      <div class="ordered-list__card-label">
        {{ String(index + 1).padStart(2, '0') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ordered-list {
  &__card {
    background-color: var(--color-light-blue);
    position: relative;
    min-height: 217px;
    @media (max-width: 1024px) {
      min-height: 160px;
    }
    @media (max-width: 576px) {
      min-height: 110px;
    }
  }

  &__card-description {
    position: relative;
    max-width: 340px;
    margin-right: 75px;
    @media (max-width: 1024px) {
      margin-right: 55px;
    }
    @media (max-width: 576px) {
      margin-right: 30px;
    }
  }

  &__card-label {
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    padding-top: 30px;
    padding-left: 30px;
    border-top-left-radius: 10px;
    font-size: 4.375rem;
    font-weight: 600;
    color: var(--color-accent);
    line-height: 1;
    @media (max-width: 1024px) {
      padding-top: 20px;
      padding-left: 20px;
      font-size: 3.375rem;
    }
    @media (max-width: 576px) {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 2.375rem;
    }
  }
}
</style>