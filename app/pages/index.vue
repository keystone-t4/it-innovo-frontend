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

    <section class="directions">
      <div class="directions__inner block">
        <h1 class="directions__title">
          Наши направления
        </h1>
        <div class="directions__articles">
          <article class="directions__article article">
            <div class="article__about">
              <div class="article__text">
                <h1 class="article__title">
                  Управляемая логистика — система
                  <span class="accent-text">«Визиты»</span>
                </h1>
                <p class="article__description">
                  Флагманское решение Инново.<br>Базовый модуль —
                  Электронная очередь<br>— даёт прозрачную картину загрузки
                  на сутки вперёд и создаёт основу для эффективного
                  планирования смен.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title">
                  Результат:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      устранение хаотичного въезда
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      снижение пустых смен
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      подготовка к пиковым нагрузкам
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      контроль фонда оплаты труда
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="article__additional-info">
              <div class="article__info">
                <p class="article__additional-text">
                  При необходимости система расширяется:<br>весовой контроль,
                  лаборатория, документооборот, RFID, интеграция с 1С и ERP.
                </p>
                <NuxtLink to="/visits/" class="article__button button">
                  Подробнее о «Визитах»
                  <svg class="article__button-icon" aria-hidden="true">
                    <use href="/sprite.svg#arrow-bold" />
                  </svg>
                </NuxtLink>
              </div>
              <div class="article__video">
                <!--              <video autoplay muted loop playsinline>-->
                <!--                <source src="/video/???.mp4" type="video/mp4">-->
                <!--              </video>-->
              </div>
            </div>
          </article>
          <article class="directions__article article">
            <div class="article__about">
              <div class="article__text">
                <h1 class="article__title">
                  Фундаментальная <span class="accent-text">автоматизация
                  (1С)</span>
                </h1>
                <p class="article__description">
                  Надёжная основа управляемости.
                  Мы внедряем, дорабатываем и сопровождаем решения на платформе
                  1С, объединяя разрозненные данные в единую систему учёта.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title">
                  Что это даёт:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      прозрачную финансовую картину
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      контроль себестоимости
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      сквозной документооборот
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      снижение ручных операций
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="article__additional-info">
              <p class="article__additional-text">
                Для многих предприятий это необходимый базовый уровень<br>
                зрелости процессов.
              </p>
            </div>
          </article>
          <article class="directions__article article">
            <div class="article__about">
              <div class="article__text">
                <h1 class="article__title">
                  Практическое <span class="accent-text">внедрение ИИ</span>
                </h1>
                <p class="article__description">
                  Мы используем искусственный интеллект не&nbsp;как&nbsp;тренд,
                  а как понятный инструмент для&nbsp;конкретных задач.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title">
                  Проводим аудит процессов и внедряем ИИ там, где он
                  даёт измеримый эффект:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      обработка и распознавание документов
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      прогнозирование загрузки
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      аналитика данных
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text">
                      выявление операционных отклонений
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="article__additional-info">
              <p class="article__additional-text">
                ИИ становится частью цифровой инфраструктуры предприятия,
                а&nbsp;не&nbsp;отдельным экспериментом.
              </p>
            </div>
          </article>
        </div>
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

.hero, .directions {
  max-width: 1920px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 35px;
  background-color: var(--color-light-gray);
}

.hero__inner, .directions__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero {
  max-height: 890px;
  height: 80dvh;
  background-image: url("/img/hero-background.png");
  background-position: right bottom;
  background-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: cover;

  &__title, &__description {
    max-width: 760px;
  }

  &__buttons {
    display: flex;
    gap: 18px;
  }
}

.about {
  &__title {
    max-width: 750px;
    margin-bottom: 30px;
  }

  &__cards {
    max-width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    @media (max-width: 1220px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 668px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    padding: 30px 40px;
    background-color: var(--color-light-gray);
    border-radius: 10px;
    display: flex;
    gap: 10px;
    @media (max-width: 1220px) {
      padding: 20px 30px;
    }
    @media (max-width: 668px) {
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
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__footer-text {
    display: flex;
    flex-direction: column;
    gap: 15px;

  }

  &__footer-icon {
    margin: auto 0;
    color: var(--color-accent);
    width: 136px;
    height: 136px;
    @media (max-width: 1220px) {
      width: 110px;
      height: 110px;
    }
    @media (max-width: 768px) {
      display: none
    }
  }
}

.directions {
  &__articles {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}

.article {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 90px 100px 90px 50px;
  border-radius: 10px;

  &__about, &__additional-info {
    display: grid;
    grid-template-columns: 1.22fr 0.78fr;
    gap: 40px;
    @media (max-width: 1220px) {
      grid-template-columns: 1.1fr 0.9fr;
    }
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    margin-top: 40px;
    font-size: var(--text-lg);
    max-width: 590px;
  }

  &__result {
    border-radius: 10px;
    border: 1px solid var(--color-accent);
  }

  &__result-title {
    padding: 25px 30px;
    background-color: var(--color-accent);
    border-radius: 10px;
    color: white;
    font-size: var(--text-lg);
    font-weight: 700;
  }

  &__result-list {
    padding: 30px 30px 30px 43px; ;
  }

  &__result-item:nth-child(n+2) {
    margin-top: 10px;
  }

  &__result-item::marker {
    color: var(--color-accent);
    font-size: 1rem;
    content: "◆";
  }

  &__result-item-text {
    font-size: var(--text-lg);
    margin-left: 12px;
  }


  &__additional-info {
    align-items: end;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__video {
    width: 100%;
    height: 200px;
    background-color: var(--dark-gray);
    border-radius: 10px;
  }

  &__additional-text {
    font-size: var(--text-xs);
    color: var(--dark-gray);
  }

  &__button {
    width: fit-content;
  }

  &__button-icon {
    width: 28px;
    height: 12px;
    margin: auto 0 auto 20px;
    color: white;
  }
}
</style>