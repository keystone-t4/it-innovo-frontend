<script setup lang="ts">

</script>

<template>
  <section class="main__base base block">
    <h1 class="base__title">
      Базовый модуль —<br>
      <span class="accent-text">Электронная очередь</span>
    </h1>
    <p class="base__description paragraph">
      Прозрачная загрузка. Управляемые смены. Контролируемый ФОТ.
    </p>
    <div class="base__banner">
      <p class="base__banner-text paragraph">
        Электронная очередь формирует понятный график въезда и обслуживания транспорта.
      </p>
    </div>
    <div class="base__grid">
      <div class="base__grid-column">
        <p class="base__grid-item">
          Предприятие заранее видит:
        </p>
        <p class="base__grid-item base__grid-item--card">
          количество машин на каждый временной слот
        </p>
        <p class="base__grid-item base__grid-item--card">
          периоды пиковой нагрузки
        </p>
        <p class="base__grid-item base__grid-item--card">
          периоды низкой загрузки
        </p>
        <p class="base__grid-item base__grid-item--card">
          фактическое время въезда и выезда
        </p>
      </div>

      <div class="base__grid-column">
        <p class="base__grid-item">
          Это создаёт основу для:
        </p>
        <p class="base__grid-item base__grid-item--card">
          гибкого планирования смен
        </p>
        <p class="base__grid-item base__grid-item--card">
          отмены или переноса избыточных смен
        </p>
        <p class="base__grid-item base__grid-item--card">
          перераспределения персонала
        </p>
        <p class="base__grid-item base__grid-item--card">
          снижения сверхурочных выплат
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.base {
  &__description {
    max-width: 543px;
  }

  &__banner {
    position: relative;
    width: 100%;
    height: 487px;
    border-radius: 10px;
    background-image: url("/img/background.png");
    background-position: right bottom;
    background-blend-mode: normal;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
      background-position: 85% bottom;
    }
    @media (max-width: 576px) {
      background-position: 80% bottom;
    }
    &:before {
      border-radius: 10px;
      content: '';
      position: absolute;
      background: linear-gradient(
              90deg,
              rgba(61, 61, 59, 1) 0%,
              rgba(61, 61, 59, 0) 86%,
      );
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        background: linear-gradient(
                90deg,
                rgba(61, 61, 59, 1) 0%,
                rgba(61, 61, 59, 0) 86%,
        );
      }

    }
  }

  &__banner-text {
    position: absolute;
    bottom: 30px;
    left: 40px;
    max-width: 629px;
    color: white;
    @media (max-width: 1024px) {
      bottom: 20px;
      left: 30px;
    }
    @media (max-width: 576px) {
      bottom: 15px;
      left: 25px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--cards-gap);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__grid-column {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }
  &__grid-item {
    font-family: 'Manrope', 'sans-serif';
    font-weight: 700;
    font-size: 1.563rem;
    @media (max-width: 1024px) {
      font-size: 1.375rem;
    }
    @media (max-width: 576px) {
      font-size: 1.25rem;
    }
    @media (max-width: 360px) {
      word-break: break-word;
    }

    &--card {
      font-weight: 400;
      background-color: #F5F5FA;
      border-radius: 10px;
      flex: 1;
      display: flex;
      align-items: flex-start;
      padding: 30px 40px;

      @media (max-width: 1024px) {
        padding: 20px 30px;
      }
      @media (max-width: 576px) {
        padding: 15px 25px;
      }

      &::before {
        color: #69C7E1;
        font-size: 0.875rem;
        content: "◆";
        margin-right: 15px;
        flex-shrink: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>