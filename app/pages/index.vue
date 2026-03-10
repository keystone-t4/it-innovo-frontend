<script setup>

</script>

<template>
  <main class="main">
    <div class="hero">
      <div class="hero__inner block">
        <h1 class="hero__title">
          Управляемость процессов вместо операционного хаоса
        </h1>
        <p class="hero__description">
          Мы помогаем промышленным предприятиям навести порядок в логистике,
          учёте и производстве — чтобы рост бизнеса сопровождался ростом
          управляемости.
        </p>
        <div class="hero__buttons">
          <button class="hero__button button">
            Обсудить проект
          </button>
          <NuxtLink to="/visits/" class="hero__button button button--transparent">
            Система «Визиты»
          </NuxtLink>
        </div>
      </div>
    </div>


  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding: 0 1.5rem;
}

.hero {
  max-width: 1920px;
  max-height: 890px;
  height: 80dvh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-image: url("/img/hero-background.png");
  background-position: right bottom;
  background-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 35px;

  &__inner {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title, &__description {
    max-width: 760px;
  }

  &__buttons {
    display: flex;
    gap: 18px;
  }
}
</style>