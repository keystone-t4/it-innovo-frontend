<script setup lang="ts">
const activeIndex = ref<number | null>(0);
const setActive = (i: number) => {
  const isClosing = activeIndex.value === i
  activeIndex.value = isClosing ? null : i

  if (!isClosing) {
    setTimeout(() => {
      const el = document.getElementById(`case-${i}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350) // должно совпадать с duration transition
  }
}

const popoverActive = ref(false)
const popoverPos = ref({ x: 0, y: 0 })
const popoverTransform = ref('translate(-50%, -110%)')

const interactPopover = (e: MouseEvent) => {
  e.stopPropagation()
  popoverActive.value = !popoverActive.value
  if (!popoverActive.value) return

  // Получаем ширину popover из computed styles или задаём фиксированную
  // для текущего viewport (более надёжно чем временный элемент)
  const viewportWidth = window.innerWidth

  // Определяем ширину popover в зависимости от breakpoint (как в CSS)
  let popoverWidth = 620
  if (viewportWidth <= 480) {
    popoverWidth = 250
  } else if (viewportWidth <= 576) {
    popoverWidth = 300
  } else if (viewportWidth <= 756) {
    popoverWidth = 500
  } else if (viewportWidth <= 1024) {
    popoverWidth = 550
  }

  const popoverHeight = 300 // примерная высота, можно вычислить динамически

  const padding = 16 // отступ от края экрана

  // Центр popover должен быть на позиции клика
  let left = e.clientX
  let top = e.clientY

  // Проверяем и корректируем горизонтальную позицию
  // popover центрируется через transform: translate(-50%, ...)
  // значит левый край = left - popoverWidth / 2
  const leftEdge = left - popoverWidth / 2
  const rightEdge = left + popoverWidth / 2

  if (leftEdge < padding) {
    // Сдвигаем вправо, чтобы левый край не выходил за границу
    left = popoverWidth / 2 + padding
  } else if (rightEdge > viewportWidth - padding) {
    // Сдвигаем влево, чтобы правый край не выходил за границу
    left = viewportWidth - popoverWidth / 2 - padding
  }

  // Вертикальная позиция — открываем сверху или снизу
  if (e.clientY < window.innerHeight / 2) {
    // Открываем снизу от точки клика
    top = e.clientY + padding
    popoverTransform.value = 'translate(-50%, 0)'

    // Проверка выхода за низ экрана
    if (top + popoverHeight > window.innerHeight - padding) {
      top = window.innerHeight - popoverHeight - padding
    }
  } else {
    // Открываем сверху от точки клика
    top = e.clientY - padding
    popoverTransform.value = 'translate(-50%, -100%)'

    // Проверка выхода за верх экрана
    if (top - popoverHeight < padding) {
      top = popoverHeight + padding
    }
  }

  popoverPos.value = { x: left, y: top }
}
const closePopover = () => { popoverActive.value = false }

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    popoverActive.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', closePopover)
  document.addEventListener('scroll', closePopover)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', closePopover)
  document.removeEventListener('scroll', closePopover)
  document.removeEventListener('keydown', onKeydown)
})



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
            <h1 id="case-0" class="case__header-title">
              Комплексная управляемость логистики и контроля качества (СЗБТ)
            </h1>
            <div class="case__header-button" aria-hidden="true">
              <svg class="case__header-button-icon"
                   :class="{ 'case__header-button-icon--active': activeIndex === 0 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
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
                    <li class="paragraph">
                      <button
                          class="case__popover-button paragraph"
                          @click.stop="interactPopover"
                          :aria-expanded="popoverActive"
                          aria-haspopup="dialog"
                          aria-controls="case-popover"
                      >
                        экономия ~1,5 млн ₽ в год только на приёмке
                      </button>
                      <template v-if="popoverActive">
                        <div class="case__popover"
                             :style="{ left: popoverPos.x + 'px', top: popoverPos.y + 'px', transform: popoverTransform }"
                        >
                          <strong>Откуда взялась эта цифра?</strong><br>
                          Из простого расчёта на основе наших кейсов:<br>
                          Средний фонд оплаты труда сотрудника:<br>
                          80 000 ₽ × 1,44 = 115 200 ₽ в месяц.<br>
                          При среднем рабочем времени 144 часа в месяц получаем:<br>
                          800 ₽ за час работы сотрудника<br>
                          Допустим, что в смене работает 5 человек.<br>
                          Для ночной работы применяется коэффициент 1,5, т.е.<br>
                          800 ₽ × 1,5 = 1200 ₽ за час<br>
                          Стоимость часа всей смены:<br>
                          1200 ₽ × 5 = 6000 ₽, а стоимость одной ночной смены<br>
                          8 часов × 6000 ₽ = 48 000 ₽<br>
                          Получается, что сокращение даже 3 ночных смен в месяц,
                          экономит предприятию около 144 000 в месяц, и 1 728 000
                          рублей в год.
                        </div>
                      </template>
                    </li>
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
            <h1 id="case-1" class="case__header-title">
              Производственная компания
              (деревообработка) - NDA
            </h1>
            <div class="case__header-button" aria-hidden="true">
              <svg class="case__header-button-icon"
                   :class="{ 'case__header-button-icon--active': activeIndex === 1 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
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
            <h1 id="case-2" class="case__header-title">
              Нефтегазовая<br>компания
            </h1>
            <div class="case__header-button" aria-hidden="true">
              <svg class="case__header-button-icon"
                   :class="{ 'case__header-button-icon--active': activeIndex === 2 }"
              >
                <use href="/sprite-visits.svg#plus" xlink:href="/sprite-visits.svg#plus"></use>
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



.case__popover {
  position: fixed;
  z-index: 9999;
  background: white;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: 20px;
  border-radius: 8px;
  width: 620px;

  font-size: var(--text-s);
  @media (max-width: 1024px) {
    font-size: var(--text-xs);
    width: 550px;
  }
  @media (max-width: 756px) {
    width: 500px;
  }
  @media (max-width: 576px) {
    font-size: var(--text-xxs);
    width: 300px;
  }
  @media (max-width: 480px) {
    font-size: var(--text-3xs);
  }
  @media (max-width: 340px) {
    width: 250px;
  }
}

.case__popover-button {
  position: relative;
  text-align: left;
  background-color: white;
  max-width: fit-content;
  border: none;
  padding-inline: 0;
  &:hover {
    background-color: var(--color-light-gray);
  }
  &::before {
    border: 1px solid var(--color-accent);
    border-radius: 10px;
    margin-left: -5px;
    position: absolute;
    width: 102%;
    height: 100%;
    content: "";
  }
}
</style>