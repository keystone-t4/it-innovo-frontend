<script setup>

</script>

<template>
  <main class="main">
<!--    todo: вынести в компонент с пропсами и слотами-->
    <div class="hero grey-section">

      <div class="video-wrapper hero__bg-video" aria-hidden="true">
        <video class="video" autoplay muted loop playsinline preload="auto">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div class="video-overlay" />
      </div>

      <div class="hero__inner block inner">
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

      <div class="about__cards grid-3fr">
        <div class="about__card card">
          <p class="about__card-description">
            смены работают в&nbsp;режиме ожидания
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card card">
          <p class="about__card-description">
            появляются авралы и&nbsp;сверхурочные
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card card">
          <p class="about__card-description">
            теряется прозрачность загрузки
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card card">
          <p class="about__card-description">
            учёт становится фрагментарным
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card card">
          <p class="about__card-description">
            решения принимаются «вручную»
          </p>
          <svg class="about__card-icon" aria-hidden="true">
            <use href="/sprite.svg#arrow" />
          </svg>
        </div>
        <div class="about__card-conclusion card">
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

    <section class="directions grey-section">
      <div class="inner block">
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
                <p class="article__description paragraph">
                  Флагманское решение Инново.<br>Базовый модуль —
                  Электронная очередь<br>— даёт прозрачную картину загрузки
                  на сутки вперёд и создаёт основу для эффективного
                  планирования смен.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title paragraph">
                  Результат:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      устранение хаотичного въезда
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      снижение пустых смен
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      подготовка к пиковым нагрузкам
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
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
              <div class="article__video-wrapper">
                <video class="article__video" autoplay muted loop playsinline>
                  <source src="/video/visits.mp4" type="video/mp4">
                </video>
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
                <p class="article__description paragraph">
                  Надёжная основа управляемости.
                  Мы внедряем, дорабатываем и сопровождаем решения на платформе
                  1С, объединяя разрозненные данные в единую систему учёта.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title paragraph">
                  Что это даёт:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      прозрачную финансовую картину
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      контроль себестоимости
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      сквозной документооборот
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
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
                <p class="article__description paragraph">
                  Мы используем искусственный интеллект не&nbsp;как&nbsp;тренд,
                  а как понятный инструмент для&nbsp;конкретных задач.
                </p>
              </div>
              <div class="article__result">
                <h4 class="article__result-title paragraph">
                  Проводим аудит процессов и внедряем ИИ там, где он
                  даёт измеримый эффект:
                </h4>
                <ul class="article__result-list">
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      обработка и распознавание документов
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      прогнозирование загрузки
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
                      аналитика данных
                    </p>
                  </li>
                  <li class="article__result-item">
                    <p class="article__result-item-text paragraph">
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

    <section class="approach block">
      <h1 class="approach__title">
        Наш <span class="accent-text">Подход</span>
      </h1>
      <p class="approach__description">
        Мы не предлагаем «универсальную платформу»<br>
        и абстрактную «цифровизацию». Мы:
      </p>
      <div class="approach__cards grid-2fr">
        <div class="approach__card card">
          <p class="approach__card-description paragraph">
            <strong>Анализируем</strong> процессы предприятия
          </p>
          <div class="approach__card-label">
            01
          </div>
        </div>
        <div class="approach__card card">
          <p class="approach__card-description paragraph">
            <strong>Выявляем</strong> точки операционных потерь
          </p>
          <div class="approach__card-label">
            02
          </div>
        </div>
        <div class="approach__card card">
          <p class="approach__card-description paragraph">
            <strong>Предлагаем</strong> решение, которое оправдано экономикой
          </p>
          <div class="approach__card-label">
            03
          </div>
        </div>
        <div class="approach__card card">
          <p class="approach__card-description paragraph">
            <strong>Развиваем</strong> систему по&nbsp;мере роста задач
          </p>
          <div class="approach__card-label">
            04
          </div>
        </div>
      </div>
    </section>

    <section class="benefits grey-section">
      <div class="inner block">
        <h1 class="benefits__title">
          Где наши решения дают
          <span class="accent-text">максимальный</span> эффект
        </h1>
        <div class="benefits__cards grid-3fr">
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
          <div class="benefits__card card">
            <p class="benefits__card-description paragraph">
              Выявляем точки операционных потерь
            </p>
            <svg class="benefits__card-icon" aria-hidden="true">
              <use href="/sprite.svg#logo-beige-cut"/>
            </svg>
          </div>
        </div>
        <h2 class="benefits__conclusion">
          Мы помогаем компаниям переходить от ручного управления
          к системной управляемости.
        </h2>
      </div>
    </section>

    <AppSectionContacts/>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding: 0 1.5rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}

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

  &__buttons {
    display: flex;
    gap: 18px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.about {
  &__title {
    max-width: 750px;
    margin-bottom: var(--layout-gap);
  }

  &__cards {
    max-width: 100%;
    margin-top: var(--layout-gap);
  }

  &__card {
    background-color: var(--color-light-gray);
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  &__card-icon {
    margin-top: auto;
    width: 34px;
    height: 20px;
    @media (max-width: 1220px) {
      margin-top: 0;
      width: 25px;
      height: 11px;
    }
  }

  &__card-conclusion {
    border: 3px solid var(--color-accent);
  }

  &__card-conclusion-text {
    font-weight: 600;
  }

  &__footer {
    margin-top: var(--layout-gap);
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
    gap: var(--layout-gap);
  }
}
.article {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
  padding: 90px 100px 90px 50px;
  border-radius: 10px;
  @media (max-width: 1220px) {
    padding: var(--layout-indent);
  }

  &__about, &__additional-info {
    display: grid;
    grid-template-columns: 1.22fr 0.78fr;
    gap: var(--layout-gap);
    @media (max-width: 1060px) {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    margin-top: var(--layout-gap);
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
    font-weight: 700;
    @media (max-width: 1024px) {
      padding: 15px 20px;
    }
    @media (max-width: 576px) {
      padding: 10px 15px;

    }
  }

  &__result-list {
    padding: 30px 30px 30px 43px; ;
    @media (max-width: 1024px) {
      padding: 20px 33px;
    }
    @media (max-width: 576px) {
      padding: 15px 28px;
    }
  }

  &__result-item {

    &:nth-child(n+2) {
      margin-top: 10px;
    }
    &::marker {
      color: var(--color-accent);
      font-size: 1rem;
      content: "◆";
    }
  }

  &__result-item-text {
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

  &__video-wrapper {
    width: 100%;
    height: 200px;
    background-color: var(--dark-gray);
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      pointer-events: none;
      z-index: 1;
    }

    .article__video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      position: relative;
      z-index: 0;
    }
  }

  &__additional-text {
    font-size: var(--text-xs);
    color: var(--dark-gray);
    @media (max-width: 1024px) {
      font-size: var(--text-xxs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-3xs);
    }
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

.approach {
  &__title, &__description {
    margin-bottom: var(--layout-gap);
  }

  &__card {
    background-color: var(--color-light-gray);
    position: relative;
    height: 217px;
    @media (max-width: 1024px) {
      height: 160px;
    }
    @media (max-width: 576px) {
      height: 110px;
    }
  }

  &__card-description {
    max-width: 340px;
  }

  &__card-label {
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    padding-top: 30px;
    padding-left: 30px;
    border-top-left-radius: 10px;
    font-size: 4.375rem;
    font-weight: 600;
    color: var(--color-accent);
    line-height: 1;
    @media (max-width: 1024px) {
      padding-top: 20px;
      padding-left: 20px;
      font-size: 3.375rem;
    }
    @media (max-width: 576px) {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 2.375rem;
    }
  }
}

.benefits {
  &__title {
    max-width: 600px
  }

  &__cards {
    margin-bottom: var(--layout-gap);
  }

  &__card {
    background-color: white;
    position: relative;
  }

  &__card-description {
    max-width: 330px;
    position: relative;
    z-index: 5;
  }

  &__card-icon {
    z-index: 0;
    width: 90px;
    height: 90px;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1024px) {

    }
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  &__conclusion {
    max-width: 1070px;
  }
}
</style>