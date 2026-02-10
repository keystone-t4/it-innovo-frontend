<script setup lang="ts">

</script>

<template>
<div class="demo">
  <DemoRolesNav/>
  <div class="demo__content">

  </div>
</div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__content {
    width: 100%;
    min-height: 600px;
    background-color: var(--bg-color);
    border-radius: 5px;
  }
}
</style>