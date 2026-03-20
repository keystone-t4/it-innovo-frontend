<script setup lang="ts">
const activeIndex = ref<number | null>(0);
const setActive = (i: number) => {
  const isClosing = activeIndex.value === i
  activeIndex.value = isClosing ? null : i

  if (!isClosing) {
    setTimeout(() => {
      const el = document.getElementById(`question-${i}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350) // должно совпадать с duration transition
  }
}

// События анимации
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
  <section class="questions block">
      <h1 class="questions__title">
        Часто задаваемые вопросы
      </h1>

      <div class="questions__list">

        <article class="questions__question question"
                 :class="{ 'question--active': activeIndex === 0 }"
                 @click="setActive(0)"
        >
          <div class="question__header">
            <h1 id="question-0" class="question__header-title">
              Можно ли интегрировать платформу с нашим существующим ПО?
            </h1>
            <div class="question__header-button" aria-hidden="true">
              <svg class="question__header-button-icon"
                   :class="{ 'question__header-button-icon--active': activeIndex === 0 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
              </svg>
            </div>
          </div>

          <transition name="question" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="question__body paragraph" v-show="activeIndex === 0">
              Да. «Визиты» легко интегрируется с внешними системами: ERP (включая 1С), CRM,
              BI, СКУД, RFID, IIoT и другими. Интеграции реализуются через API и
              настраиваются под инфраструктуру заказчика.
            </div>
          </transition>
        </article>

        <article class="questions__question question"
                 :class="{ 'question--active': activeIndex === 1 }"
                 @click="setActive(1)"
        >
          <div class="question__header">
            <h1 id="question-1" class="question__header-title">
              Есть ли техническая поддержка после запуска?
            </h1>
            <div class="question__header-button" aria-hidden="true">
              <svg class="question__header-button-icon"
                   :class="{ 'question__header-button-icon--active': activeIndex === 1 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
              </svg>
            </div>
          </div>
          <transition name="question" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="question__body" v-show="activeIndex === 1">
              <p class="paragraph">
                Да. Мы сопровождаем проект на всех этапах:
              </p>
              <ul class="question__list">
                <li class="question__list-item paragraph">
                  обучение пользователей
                </li>
                <li class="question__list-item paragraph">
                  обновления и доработки
                </li>
                <li class="question__list-item paragraph">
                  техническая поддержка
                </li>
                <li class="question__list-item paragraph">
                  помощь в масштабировании
                </li>
              </ul>
              <p class="paragraph">
                Работаем по SLA. Поддержка — часть внедрения.
              </p>
            </div>
          </transition>
        </article>

        <article class="questions__question question"
                 :class="{ 'question--active': activeIndex === 2 }"
                 @click="setActive(2)"
        >
          <div class="question__header">
            <h1 id="question-2" class="question__header-title">
              Как обеспечивается безопасность данных?
            </h1>
            <div class="question__header-button" aria-hidden="true">
              <svg class="question__header-button-icon"
                   :class="{ 'question__header-button-icon--active': activeIndex === 2 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
              </svg>
            </div>
          </div>
          <transition name="question" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="question__body" v-show="activeIndex === 2">
              <ul class="question__list">
                <li class="question__list-item paragraph">
                  разграничение доступа и ролей
                </li>
                <li class="question__list-item paragraph">
                  шифрование каналов
                </li>
                <li class="question__list-item paragraph">
                  журналирование действий
                </li>
                <li class="question__list-item paragraph">
                  возможность размещения на серверах заказчика
                </li>
              </ul>
              <p class="paragraph">
                Платформа соответствует требованиям корпоративной безопасности.
              </p>
            </div>
          </transition>
        </article>

      </div>
  </section>
</template>

<style scoped lang="scss">
.questions {
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
  padding-bottom: 0;

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }

  &__question {
    background-color: var(--color-light-blue);
    border-radius: 10px;
    padding: var(--layout-indent);
  }
}


.question {
  &:hover {
    box-shadow:
        0 7px 9px -1px rgba(0, 0, 0, 0.10),
        0 5px 7px -2px rgba(0, 0, 0, 0.10);
    cursor: pointer;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__header-title {
    max-width: 1000px;
    scroll-margin-top: 120px;
  }

  &__header-button {
    border-radius: 10px;
    background-color: white;
    border: none;
    height: fit-content;
    display: flex;
  }

  &__header-button-icon {
    margin: 35px;

    color: var(--color-accent);
    width: 32px;
    height: 32px;

    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-origin: center center;
    display: block;
    &--active {
      transform: rotate(45deg);
    }

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
    gap: var(--layout-gap);
    margin-top: var(--layout-gap);
  }

  &__list {
    columns: 2;
    column-gap: 24px;
    @media (max-width: 683px) {
      columns: 1;
    }
  }

  &__list-item {
    display: flex;
    align-items: flex-start;

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

.question-enter-active,
.question-leave-active {
  transition: height 0.35s ease;
  overflow: hidden;
}
</style>