<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  src: String
})
</script>

<template>
  <div class="hero grey-section">

    <div class="video-wrapper hero__bg-video" aria-hidden="true">
      <video class="video" autoplay muted loop playsinline preload="auto">
        <source :src="src" type="video/mp4" />
      </video>
      <div class="video-overlay" />
    </div>

    <div class="hero__inner block inner">
      <h1 class="hero__title">
        {{title}}
      </h1>
      <p class="hero__description paragraph">
        {{description}}
      </p>

      <slot/>

    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: 890px;
  height: 80dvh;

  position: relative;
  overflow: hidden;

  &__bg-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    display: block;

    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right bottom;
      display: block;
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  &__inner {
    position: relative;
    z-index: 2;
    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  }

  &__title, &__description {
    max-width: 760px;
    color: var(--text-light)
  }
}
</style>