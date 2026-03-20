<script setup lang="ts">

</script>

<template>
<div class="feedback grid-2fr">
  <div class="feedback__info">
    <h1 class="feedback__title">
      Оставить заявку <span class="accent-text">на&nbsp;консультацию</span>
    </h1>
    <p class="feedback__description paragraph">
      Обсудим вашу текущую ситуацию, проанализируем процессы и покажем,
      где можно повысить эффективность.
    </p>
    <p class="feedback__comment">
      Без спама. Только по&nbsp;делу. Ответим в&nbsp;течение
      1&nbsp;рабочего дня.
    </p>
  </div>
  <form @submit="" class="feedback__form form">
    <input type="text"
           class="form__input form__input--required paragraph"
           placeholder="Имя"
    >
    <input type="tel"
           class="form__input paragraph"
           placeholder="Номер телефона"
    >
    <input type="email"
           class="form__input form__input--required paragraph"
           placeholder="E-mail"
    >
    <textarea class="form__input paragraph"
              placeholder="Комментарий"
    ></textarea>

    <div class="form__policy">
      <input type="checkbox" id="checkbox1">
      <label class="form__policy-text form__policy-text--required"
             for="checkbox1"
      >
        Я согласен <a class="accent-text">
        с политикой конфиденциальности</a>
      </label>
    </div>

    <div class="form__policy">
      <input type="checkbox" id="checkbox2">
      <label class="form__policy-text form__policy-text--required"
             for="checkbox2"
      >
        Я даю согласие на <a class="accent-text">
        обработку персональных данных</a>
      </label>
    </div>
  </form>
</div>
</template>

<style scoped lang="scss">
.feedback {
  max-width: var(--layout-width);

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
    max-width: 450px;
  }
  &__comment {
    color: var(--color-dark-gray);
    font-size: var(--text-s);
    max-width: 330px;
    @media (max-width: 1024px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
    @media (max-width: 480px) {
      font-size: var(--text-3xs);
    }
  }

}

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__input {
    border: none;
    border-bottom: 1px solid var(--text-muted-gray);
    background: none;
    padding-bottom: 14px;
    width: 680px;
    height: 53px;

    &::placeholder {
      color: var(--text-muted-gray)
    }
  }

  &__policy {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--text-xxs);
    color: var(--text-accent);

    input[type="checkbox"] {
      appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid var(--text-muted-gray);
      border-radius: 2px;
      background: #fff;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;

      &:checked {
        background-color: var(--color-accent);
        border-color: var(--color-accent);

        &::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 5px;
          width: 4px;
          height: 8px;
          border: solid #fff;       // цвет галочки
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }

      &:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
      }
    }

    label {
      font-weight: 400;
      line-height: 1.2;
      a {
        text-underline-offset: 3px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>