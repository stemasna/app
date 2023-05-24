<template>
  <q-page padding class="full-height row flex justify-center">
    <q-card
      flat
      class="col-12 col-md-4 q-pa-md q-py-lg"
      bordered
      style="border-radius: 0.5rem"
    >
      <div class="row">
        <div>
          <q-btn
            unelevated
            icon="chevron_left"
            round
            @click="() => router.back()"
          />
        </div>
        <div class="justify-right text-weight-bold text-h4">
          {{ $t("common.login") }}
        </div>
      </div>

      <div class="row justify-center">
        <!--  -->
      </div>
      <div class="row q-col-gutter-md q-mt-md">
        <q-input
          class="col-12 col-md-12"
          ref="emailRef"
          :rules="[notEmpty, validEmail]"
          v-model="user.email"
          :label="$t('common.email')"
          outlined
          dense
        />
        <q-input
          class="col-12 col-md-12"
          ref="passwordRef"
          :rules="[notEmpty]"
          v-model="user.password"
          :label="$t('common.password')"
          :type="isPwd ? 'password' : 'text'"
          outlined
          dense
          ><template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            /> </template
        ></q-input>
      </div>
      <q-btn
        text-color="blue"
        unelevated
        :label="$t('common.forgot_password')"
        @click="GoToForgotPassword"
      />
      <div>
        <q-checkbox
          v-model="right"
          :rules="[notEmpty]"
          :label="$t('common.accept_conditions')"
        />
      </div>
      <div class="row q-mt-md justify-center">
        <q-btn
          :label="$t('common.login')"
          color="primary"
          @click="onClickLogin"
          :loading="loading"
        />
      </div>
      <div class="row q-mt-md justify-center">
        <q-btn
          :label="$t('common.registration')"
          color="primary"
          :to="{ name: 'RegistrationPage' }"
          :loading="loading"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { t } from "boot/i18n";
import { useStore } from "vuex";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const loading = ref(false);
    const emailRef = ref(null);
    //const checkRef = ref(null);
    const passwordRef = ref(null);

    const user = ref({
      email: undefined,
      password: undefined,
    });

    const notEmpty = (val) => !!val || t("common.requiredField");
    const validEmail = (val) =>
      emailRegex.test(val) || t("common.invalidEmail");

    const isValid = () => {
      const fieldsIsValid = [];
      fieldsIsValid.push(emailRef.value.validate());
      fieldsIsValid.push(passwordRef.value.validate());

      return fieldsIsValid.every((f) => f === true);
    };

    const onClickLogin = async () => {
      if (!isValid()) return;
      try {
        loading.value = true;
        await store.dispatch("login", user.value);
        await router.push({ name: "TutorialPage" });
        loading.value = false;
      } catch (e) {
        console.error({ e });
        loading.value = false;
      }
    };
    return {
      router,
      route,
      user,
      loading,
      notEmpty,
      validEmail,
      onClickLogin,
      emailRef,
      passwordRef,
      isPwd: ref(true),
      right: ref(false),
    };
  },
});
</script>
