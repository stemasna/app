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
        <div class="text-weight-bold text-h4">
          {{ $t("common.registration") }}
        </div>
      </div>
      <!--  -->
      <div class="row justify-center text-weight-bold text-h4"></div>

      <div class="row q-col-gutter-md q-mt-md">
        <q-select
          class="col-12 col-md-12"
          v-model="user.role"
          ref="roleRef"
          :options="options"
          :label="$t('common.choose_role')"
          outlined
          disable
          readonly
          dense
        />
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
          ref="surnameRef"
          :rules="[notEmpty]"
          v-model="user.surname"
          :label="$t('common.surname')"
          outlined
          dense
        />
        <q-input
          class="col-12 col-md-12"
          ref="nameRef"
          :rules="[notEmpty]"
          v-model="user.name"
          :label="$t('common.name')"
          outlined
          dense
        />
        <q-input
          class="col-12 col-md-12"
          ref="phoneRef"
          :rules="[notEmpty]"
          v-model="user.phone"
          :label="$t('common.telephone')"
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
      <div>
        <q-checkbox v-model="rightRead" :label="$t('common.i_read')" />
      </div>
      <div>
        <q-checkbox v-model="right" :label="$t('common.privacy_information')" />
      </div>

      <div class="row q-mt-md justify-center">
        <q-btn
          :label="$t('common.registration')"
          color="primary"
          @click="onClickRegister"
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
import { api } from "boot/axios";

export default defineComponent({
  name: "RegistrationPage",

  setup() {
    return {
      router: useRouter(),
      route: useRoute(),
      store: useStore(),
    };
  },
  data() {
    return {
      emailRegex: /^\S+@\S+\.\S+$/,
      active: false,
      admin: false,
      register: false,
      loading: false,
      user: {
        name: undefined,
        surname: undefined,
        email: undefined,
        phone: undefined,
        password: undefined,
        role: "user",
      },

      nameRef: undefined,
      surnameRef: undefined,
      emailRef: undefined,
      passwordRef: undefined,
      phoneRef: undefined,
      roleRef: undefined,
      isPwd: true,
      right: false,
      rightRead: false,
    };
  },
  methods: {
    async notEmpty(val) {
      return !!val || (await t("common.requiredField"));
    },
    async validEmail(val) {
      return emailRegex.test(val) || (await t("common.invalidEmail"));
    },
    isValid() {
      const fieldsIsValid = [];
      fieldsIsValid.push(this.nameRef.value.validate());
      fieldsIsValid.push(this.surnameRef.value.validate());
      fieldsIsValid.push(this.emailRef.value.validate());
      fieldsIsValid.push(this.passwordRef.value.validate());
      fieldsIsValid.push(this.phoneRef.value.validate());
      this.isAdd.value;

      return fieldsIsValid.every((f) => f === true);
    },

    async createUserApp() {
      const { data } = await api.post("user/create", this.user);
      return data;
    },
    async onClickRegister() {
      try {
        this.loading = true;
        await this.createUserApp().then((elem) => {
          this.isAdd = elem;
          console.log({ elem });
          this.router.back();
          //this.router.push({ name: "LoginPage" });
        });
        this.loading = false;
      } catch (e) {
        console.error({ e });
        this.loading = false;
      }
    },
  },
  /*

    const onClickRegister = async () => {
      if (!isValid()) return;
      try {
        loading.value = true;
        await store.dispatch("/user/register", user.value);
        await router.push({ name: "TutorialPage" });
        loading.value = false;
      } catch (e) {
        console.error({ e });
        loading.value = false;
      }
    };*/
});
</script>
