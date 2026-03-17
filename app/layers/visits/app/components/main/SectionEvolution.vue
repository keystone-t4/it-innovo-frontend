<script setup lang="ts">

</script>

<template>
  <section class="main__evolution evolution block">
    <h1 class="evolution__title">
      Развитие системы «Визиты»
    </h1>
    <p class="evolution__description paragraph">
      Электронная очередь — базовый модуль системы.
      При&nbsp;необходимости система расширяется.
    </p>
    <div class="evolution__cards">
      <div class="evolution__card card grid-2fr">
        <h1 class="evolution__accent-title">
          Интеграция с весовым комплексом
        </h1>
        <ul class="evolution__list">
          <li class="evolution__item paragraph">
            автоматическая фиксация брутто/нетто
          </li>
          <li class="evolution__item paragraph">
            привязка веса к конкретному визиту
          </li>
          <li class="evolution__item paragraph">
            исключение ручного ввода
          </li>
          <li class="evolution__item paragraph">
            снижение спорных ситуаций с перевозчиками
          </li>
        </ul>
      </div>
      <div class="evolution__card card grid-2fr">
        <h1 class="evolution__accent-title">
          Модуль документооборота
        </h1>
        <ul class="evolution__list">
          <li class="evolution__item paragraph">
            автоматическое формирование актов
          </li>
          <li class="evolution__item paragraph">
            генерация товарных накладных
          </li>
          <li class="evolution__item paragraph">
            фиксация времени обслуживания
          </li>
          <li class="evolution__item paragraph">
            сокращение бумажной работы
          </li>
        </ul>
      </div>
      <div class="evolution__card card grid-2fr">
        <h1 class="evolution__accent-title">
          RFID-учёт движения груза
        </h1>
        <ul class="evolution__list">
          <li class="evolution__item paragraph">
            автоматическая фиксация перемещения паллет
          </li>
          <li class="evolution__item paragraph">
            контроль сырья и готовой продукции
          </li>
          <li class="evolution__item paragraph">
            прозрачность складских операций
          </li>
          <li class="evolution__item paragraph">
            снижение потерь и ошибок инвентаризации
          </li>
        </ul>
      </div>
      <div class="evolution__card card grid-2fr">
        <h1 class="evolution__accent-title">
          «Лаборатория»
        </h1>
        <ul class="evolution__list">
          <li class="evolution__item paragraph">
            цифровая фиксация результатов анализов
          </li>
          <li class="evolution__item paragraph">
            привязка лабораторных данных к конкретному визиту
          </li>
          <li class="evolution__item paragraph">
            автоматическая отчётность
          </li>
          <li class="evolution__item paragraph">
            исключение ручных протоколов
          </li>
          <li class="evolution__item paragraph">
            снижение спорных ситуаций по качеству
          </li>
        </ul>
      </div>
      <div class="evolution__card card grid-2fr">
        <h1 class="evolution__accent-title">
          Интеграция с&nbsp;1С&nbsp;и&nbsp;ERP
        </h1>
        <ul class="evolution__list">
          <li class="evolution__item paragraph">
            синхронизация данных
          </li>
          <li class="evolution__item paragraph">
            исключение двойного ввода
          </li>
          <li class="evolution__item paragraph">
            сквозной учёт визитов, веса, качества и документов
          </li>
          <li class="evolution__item paragraph">
            формирование управленческой отчётности
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.evolution {
  &__description {
    max-width: 671px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }

  &__card {
    background-color: var(--color-light-blue);
  }

  &__accent-title {
    max-width: 570px;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    &::before {
      color: #69C7E1;
      font-size: 0.875rem;
      content: "◆";
      margin-right: 15px;
      flex-shrink: 0;
      margin-top: 11px;
    }
  }
}
</style>