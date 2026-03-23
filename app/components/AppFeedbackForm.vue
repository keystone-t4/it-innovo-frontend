<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUiStore} from "~/stores/AppUiStore";
import {
  feedbackValidator, type FeedbackFields
} from "~/validators/feedbackFormValidation";
const uiStore = useUiStore()

const isSubmit = ref(false)

const name = ref('')
const phone = ref('')
const email = ref('')
const comment = ref('')
const isAgreePrivacy = ref(false)
const isAgreePersonalData = ref(false)

const errors = reactive<Record<FeedbackFields, string>>({
  name: '',
  phone: '',
  email: '',
  comment: '',
  privacyPolicy: '',
  personalDataPolicy: ''
})

const clearError = (field: FeedbackFields) => {
  errors[field] = ''
}

const handleSubmitForm = () => {
  const validation = feedbackValidator(
      name.value,
      email.value,
      phone.value,
      comment.value,
      isAgreePrivacy.value,
      isAgreePersonalData.value,
      errors
  )

  if (!validation.hasError) {
    const payload = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      comment: comment.value,
      privacyPolicy: isAgreePrivacy.value,
      personalDataPolicy: isAgreePersonalData.value
    }



    name.value = ''
    phone.value = ''
    email.value = ''
    comment.value = ''
    isAgreePrivacy.value = false
    isAgreePersonalData.value = false

    isSubmit.value = true
  } else {
    Object.assign(errors, validation.newErrors)
  }
}


watch(
    () => uiStore.isDialogOpen,
    (open) => {
      if (!open) {
        isSubmit.value = false
      }
    }
)
</script>

<template>
  <div class="feedback">
    <div v-if="!isSubmit" class="feedback__dialog grid-2fr">
      <div class="feedback__info">
        <h1 class="feedback__title">
          Оставить заявку <span class="accent-text">на&nbsp;консультацию</span>
        </h1>
        <p class="feedback__description paragraph">
          Обсудим вашу текущую ситуацию, проанализируем процессы и покажем,
          где можно повысить эффективность.
        </p>
        <p class="feedback__comment">
          Без спама. Только по&nbsp;делу. Ответим в&nbsp;течение 1&nbsp;рабочего дня.
        </p>
      </div>

      <form @submit.prevent="handleSubmitForm" class="feedback__form form">
        <div class="form__field">
          <input
              v-model="name"
              type="text"
              class="form__input paragraph"
              :class="errors.name ? 'form__input--error' : ''"
              placeholder="Имя&nbsp;*"
              aria-required="true"
              :aria-invalid="!!errors.name"
              @focusin="clearError('name')"
          />
          <span v-if="errors.name" class="form__error">{{ errors.name }}</span>
        </div>

        <div class="form__field">
          <input
              v-model="phone"
              type="tel"
              class="form__input paragraph"
              :class="errors.phone ? 'form__input--error' : ''"
              placeholder="Номер телефона"
              @focusin="clearError('phone')"
          />
          <span v-if="errors.phone" class="form__error">{{ errors.phone }}</span>
        </div>

        <div class="form__field">
          <input
              v-model="email"
              class="form__input paragraph"
              :class="errors.email ? 'form__input--error' : ''"
              placeholder="E-mail&nbsp;*"
              aria-required="true"
              :aria-invalid="!!errors.email"
              @focusin="clearError('email')"
          />
          <span v-if="errors.email" class="form__error">{{ errors.email }}</span>
        </div>

        <div class="form__field">
          <textarea
              v-model="comment"
              class="form__input paragraph"
              :class="errors.comment ? 'form__input--error' : ''"
              placeholder="Комментарий"
              @focusin="clearError('comment')"
          ></textarea>
          <span v-if="errors.comment" class="form__error">{{ errors.comment }}</span>
        </div>

        <div class="form__field">
          <div class="form__policy">
            <input
                v-model="isAgreePrivacy"
                type="checkbox"
                id="checkbox1"
                aria-required="true"
                :aria-checked="isAgreePrivacy ? 'true' : 'false'"
                :aria-invalid="!!errors.privacyPolicy"
                @focusin="clearError('privacyPolicy')"
            />
            <label class="form__policy-text" for="checkbox1">
              Я согласен
              <NuxtLink to="/privacy-policy" class="accent-text" @click="uiStore.closeDialog">
                с политикой конфиденциальности&nbsp;<span class="required-star">*</span>
              </NuxtLink>
            </label>
          </div>
          <span v-if="errors.privacyPolicy" class="form__error">{{ errors.privacyPolicy }}</span>
        </div>

        <div class="form__field">
          <div class="form__policy">
            <input
                v-model="isAgreePersonalData"
                type="checkbox"
                id="checkbox2"
                aria-required="true"
                :aria-checked="isAgreePersonalData ? 'true' : 'false'"
                :aria-invalid="!!errors.personalDataPolicy"
                @focusin="clearError('personalDataPolicy')"
            />
            <label class="form__policy-text" for="checkbox2">
              Я даю согласие на
              <NuxtLink to="/personal-data-processing-policy" class="accent-text" @click="uiStore.closeDialog">
                обработку персональных данных&nbsp;<span class="required-star">*</span>
              </NuxtLink>
            </label>
          </div>
          <span v-if="errors.personalDataPolicy" class="form__error">{{ errors.personalDataPolicy }}</span>
        </div>

        <div class="form__buttons">
          <button class="form__submit-button button" type="submit">
            Обсудить проект
          </button>
          <button class="form__cancel-button button button--transparent" type="button" @click="uiStore.closeDialog">
            Отмена
          </button>
        </div>
      </form>
    </div>
    <div v-else class="feedback__submitted">
      <h1 class="feedback__title">
        Спасибо, мы получили вашу заявку!
      </h1>
      <p class="feedback__description paragraph">
        Свяжемся с вами в ближайшее время, чтобы разобраться в вашей задаче.
      </p>
      <div class="feedback__telegram">
        <p class="feedback__comment">
          Хотите быстрее? Напишите нам в
        </p>
        <a class="feedback__telegram-link"
           href="https://t.me/innovo_visiting_bot"
           target="_blank"
           rel="noopener noreferrer"
        >
          <svg class="feedback__telegram-icon" aria-hidden="true">
            <use href="/sprite.svg#telegram" />
          </svg>
          Telegram
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback {
  &__dialog {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    max-width: var(--layout-width);

    @media (max-width: 1290px) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
    max-width: 450px;

    @media (max-width: 1220px) {
      max-width: 700px;
    }
  }

  &__comment {
    color: var(--color-dark-gray);
    font-size: var(--text-s);
    max-width: 330px;

    @media (max-width: 1220px) {
      max-width: 690px;
    }
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

  &__submitted {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
    max-width: 500px;
  }
  &__telegram {
    display: flex;
    gap: var(--cards-gap);
    align-items: center;
    margin-top: 80px;
    @media (max-width: 1024px) {
      margin-top: 60px;
    }
    @media (max-width: 576px) {
      margin-top: 40px;
    }
    @media (max-width: 320px) {
      flex-direction: column;
      align-items: start;
    }
  }
  &__telegram-link {
    font-size: var(--text-s);
    border: 1px solid var(--color-accent);
    border-radius: 10px;
    padding: 6px 12px;
    text-decoration: none;
    color: var(--color-accent);
    display: flex;
    align-items: center;
    gap: 6px;
    @media (max-width: 1024px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }

  }
  &__telegram-icon {
    color: var(--color-accent);
    width: 11px;
    height: 11px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__input {
    border: none;
    border-bottom: 1px solid var(--text-muted-gray);
    background: none;
    padding-bottom: 14px;
    width: min(100%, 700px);
    height: 53px;
    min-height: 53px;

    @media (max-width: 1024px) {
      padding-bottom: 0;
    }

    &::placeholder {
      color: var(--text-muted-gray);
    }

    &:focus {
      outline: 3px solid var(--color-accent);
      outline-offset: 2px;
      border-radius: 2px;
    }

    &--error {
      border-bottom-color: var(--color-error, #e53935);
    }
  }

  textarea {
    resize: vertical;
  }

  &__error {
    color: var(--color-error, #e53935);
    font-size: 12px;
    line-height: 1.3;
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
      min-width: 16px;
      height: 16px;
      min-height: 16px;
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
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }

      &:focus {
        outline: 3px solid var(--color-accent);
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

  .accent-text {
    text-decoration: none;

    .required-star {
      color: var(--text-dark);
    }
  }

  &__buttons {
    display: flex;
    gap: 22px;

    @media (max-width: 480px) {
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }
}
</style>