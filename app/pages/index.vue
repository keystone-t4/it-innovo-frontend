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

    <section class="about block">
      <h1 class="about__title">
        Когда бизнес перерастает
        <span class="accent-text">ручное управление</span>
      </h1>
      <p class="about__description">
        Бизнес растёт.<br>Объём поставок увеличивается.<br>Штат расширяется.
        <br><br>И в какой-то момент:
      </p>
      <div class="about__cards">
        <div class="about__card">
          <p class="about__card-description">
            смены работают в&nbsp;режиме ожидания
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card">
          <p class="about__card-description">
            появляются авралы и&nbsp;сверхурочные
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card">
          <p class="about__card-description">
            теряется прозрачность загрузки
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card">
          <p class="about__card-description">
            учёт становится фрагментарным
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card">
          <p class="about__card-description">
            решения принимаются «вручную»
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card-conclusion">
          <p class="about__card-conclusion-text">
            В результате бизнес начинает нести операционные потери.
          </p>
        </div>
      </div>

      <div class="about__footer">
        <div class="about__footer-text">
          <p class="about__description">
            Именно на этом этапе требуется системное решение.
          </p>
          <h2 class="about__conclusion">
            Инново анализирует процессы предприятия и выстраивает систему,
            которая делает загрузку, смены и учёт прозрачными и управляемыми.
          </h2>
        </div>
        <svg class="about__footer-icon" aria-hidden="true">
          <use href="/sprite.svg#logo-transparent"></use>
        </svg>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding: 0 1.5rem;
}

section {
  padding-top: 100px;
  padding-bottom: 100px;
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



.about {
  margin: 0 auto;

  &__title {
    max-width: 750px;
    margin-bottom: 30px;
  }

  &__cards {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    padding: 30px 40px;
    background-color: var(--color-light-gray);
    border-radius: 10px;
    display: flex;
    gap: 10px;
    @media (max-width: 1024px) {
      padding: 20px 30px;
    }
    @media (max-width: 576px) {
      padding: 15px 25px;
    }
  }

  &__card-icon {
    margin-top: auto;
    width: 34px;
    height: 20px;
  }

  &__card-conclusion {
    padding: 30px 40px;
    border: 3px solid var(--color-accent);
    border-radius: 10px;
    @media (max-width: 1024px) {
      padding: 20px 30px;
    }
    @media (max-width: 576px) {
      padding: 15px 25px;
    }
  }

  &__card-conclusion-text {
    font-weight: 600;
  }

  &__footer {
    margin-top: 70px;
    display: flex;
    gap: 20px;
  }

  &__footer-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>