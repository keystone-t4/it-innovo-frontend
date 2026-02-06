<script setup lang="ts">

</script>

<template>
  <div class="default">
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
</template>

<style lang="scss" scoped>
.default {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>