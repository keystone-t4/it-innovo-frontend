<script setup lang="ts">
const activeIndex = ref<number>(0);
const setActive = (i: number) => {
  if (activeIndex.value === i) return;
  activeIndex.value = i;
};


const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
}

const enter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'
}

const leave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'

  requestAnimationFrame(() => {
    element.style.height = '0'
  })
}
</script>

<template>
  <section class="cases grey-section">
    <div class="cases__inner inner block">
      <h1 class="cases__title">
        Визиты в действии — <br><span class="accent-text">кейсы</span>
      </h1>

      <div class="cases__list">

        <article class="cases__case case"
                 :class="{ 'case--active': activeIndex === 0 }"
                 @click="setActive(0)"
        >
          <div class="case__header">
            <h1 class="case__header-title">
              Комплексная управляемость логистики и контроля качества (СЗБТ)
            </h1>
            <div class="case__header-button" aria-hidden="true">
              <svg class="case__header-button-icon">
                <use href="/sprite-visits.svg#plus" />
              </svg>
            </div>
          </div>

          <transition name="case" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="case__body" v-show="activeIndex === 0">
            <hr class="case__line">

            <div class="case__table" role="table">
              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Проблемы:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list">
                    <li class="paragraph">хаотичный въезд транспорта</li>
                    <li class="paragraph">ручное ведение реестров</li>
                    <li class="paragraph">разрозненный лабораторный контроль</li>
                    <li class="paragraph">спорные ситуации по весу</li>
                    <li class="paragraph">отсутствие прозрачной картины загрузки</li>
                  </ul>
                </div>
              </div>

              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Решение:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list">
                    <li class="paragraph">Электронная очередь</li>
                    <li class="paragraph">интеграция с весовым комплексом</li>
                    <li class="paragraph">модуль документооборота</li>
                    <li class="paragraph">«Лаборатория»</li>
                    <li class="paragraph">интеграция с учётной системой</li>
                  </ul>
                </div>
              </div>

              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Результат:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list">
                    <li class="paragraph">прозрачная загрузка на сутки вперёд</li>
                    <li class="paragraph">планирование смен под фактический объём</li>
                    <li class="paragraph">автоматизирован контроль качества</li>
                    <li class="paragraph">исключены споры по весу</li>
                    <li class="paragraph">экономия ~1,5 млн ₽ в год только на приёмке</li>
                  </ul>
                </div>
              </div>

            </div>

            <a class="case__body-button button"
                    href="https://t.me/innovo_visiting_bot"
                    target="_blank"
                    rel="noopener noreferrer"
            >
              Рассчитать вашу экономическую выгоду
            </a>
          </div>
          </transition>
        </article>

        <article class="cases__case case"
                 :class="{ 'case--active': activeIndex === 1 }"
                 @click="setActive(1)"
        >
          <div class="case__header">
            <h1 class="case__header-title">
              Производственная компания
              (деревообработка) - NDA
            </h1>
            <div class="case__header-button" aria-hidden="true">
              <svg class="case__header-button-icon">
                <use href="/sprite-visits.svg#plus" />
              </svg>
            </div>
          </div>
          <transition name="case" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="case__body" v-show="activeIndex === 1">
              <hr class="case__line">

              <div class="case__table" role="table">
                <div class="case__row" role="row">
                  <div class="case__cell case__cell--label paragraph" role="rowheader">
                    Задача:
                  </div>
                  <div class="case__cell" role="cell">
                    <ul class="case__list case__list--single">
                      <li class="paragraph">Потеря прозрачности движения сырья и готовой продукции между складом и цехами</li>
                    </ul>
                  </div>
                </div>

                <div class="case__row" role="row">
                  <div class="case__cell case__cell--label paragraph" role="rowheader">
                    Решение:
                  </div>
                  <div class="case__cell" role="cell">
                    <ul class="case__list">
                      <li class="paragraph">интеграция с учётной системой</li>
                      <li class="paragraph">RFID-учёт паллет</li>
                      <li class="paragraph">Электронная очередь для управления въездом</li>
                    </ul>
                  </div>
                </div>

                <div class="case__row" role="row">
                  <div class="case__cell case__cell--label paragraph" role="rowheader">
                    Результат:
                  </div>
                  <div class="case__cell" role="cell">
                    <ul class="case__list">
                      <li class="paragraph">прозрачность движения материалов</li>
                      <li class="paragraph">исключение потерь</li>
                      <li class="paragraph">ускорение отгрузки</li>
                      <li class="paragraph">контроль производственных показателей</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </transition>
        </article>

        <article class="cases__case case"
                 :class="{ 'case--active': activeIndex === 2 }"
                 @click="setActive(2)"
        >
          <div class="case__header">
            <h1 class="case__header-title">
              Нефтегазовая<br>компания
            </h1>
            <div class="case__header-button">
              <svg class="case__header-button-icon" aria-hidden="true">
                <use href="/sprite-visits.svg#plus" />
              </svg>
            </div>
          </div>
          <transition name="case" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="case__body" v-show="activeIndex === 2">
            <hr class="case__line">

            <div class="case__table" role="table">
              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Задача:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list case__list--single">
                    <li class="paragraph">
                      Потеря прозрачности движения сырья и готовой продукции между складом и цехами
                    </li>
                  </ul>
                </div>
              </div>

              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Решение:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list">
                    <li class="paragraph">интеграция с учётной системой</li>
                    <li class="paragraph">RFID-учёт паллет</li>
                    <li class="paragraph">Электронная очередь для управления въездом</li>
                  </ul>
                </div>
              </div>

              <div class="case__row" role="row">
                <div class="case__cell case__cell--label paragraph" role="rowheader">
                  Результат:
                </div>
                <div class="case__cell" role="cell">
                  <ul class="case__list">
                    <li class="paragraph">прозрачность движения материалов</li>
                    <li class="paragraph">исключение потерь</li>
                    <li class="paragraph">ускорение отгрузки</li>
                    <li class="paragraph">контроль производственных показателей</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          </transition>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cases {
  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }

  &__case {
    background-color: white;
    border-radius: 10px;
    padding: var(--layout-indent);
  }
}


.case {
  &:hover {
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.10),
        0 2px 4px -2px rgba(0, 0, 0, 0.10);
    cursor: pointer;
  }

  &--active {
    &:hover {
      box-shadow: none;
      cursor: default;
      background-color: white;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__header-title {
    max-width: 1000px;
  }

  &__header-button {
    border-radius: 10px;
    background-color: var(--color-light-blue);
    border: none;
    height: fit-content;
    display: flex;
  }

  &__header-button-icon {
    margin: 35px;

    color: var(--color-accent);
    width: 32px;
    height: 32px;
    @media (max-width: 1024px) {
      margin: 25px;
    }
    @media (max-width: 1024px) {
      margin: 20px;
      width: 20px;
      height: 20px;
    }
    @media (max-width: 576px) {
      margin: 10px;
      width: 10px;
      height: 10px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--layout-gap)
  }

  &__line {
    width: 100%;
    border: 1px solid var(--text-muted-gray);
    margin-top: var(--layout-gap);
    margin-bottom: 0;
  }



  &__table {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 1024px) {
      gap: 30px;
    }
    @media (max-width: 576px) {
      gap: 25px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    @media (max-width: 576px) {
      gap: 5px;
    }
  }

  &__list {
    columns: 2;
    column-gap: 24px;
    @media (max-width: 683px) {
      columns: 1;
    }

    &--single {
      columns: 1;
    }

    li {
      break-inside: avoid;
      display: flex;
      align-items: flex-start;
      max-width: 700px;

      &::before {
        color: #69C7E1;
        font-size: 1.2rem;
        content: "◆";
        margin-right: 10px;
        margin-top: 6px;
        flex-shrink: 0;
        @media (max-width: 1024px) {
          font-size: 1rem;
        }
        @media (max-width: 576px) {
          font-size: 0.875rem;
        }
      }
    }
  }

  &__body-button {
    width: fit-content;
    margin-top: var(--layout-gap)
  }
}


.case-enter-active,
.case-leave-active {
  transition: height 0.35s ease;
  overflow: hidden;
}
</style>