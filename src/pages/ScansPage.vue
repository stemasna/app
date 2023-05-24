<template>
  <q-banner class="text-black">
    <div class="row">
      <div class="col">
        <q-img unelevated src="../assets/title.png" />
      </div>
      <q-space />
      <div class="col">
        <q-splitter v-model="splitterModel">
          <q-avatar>
            <img src="../assets/icon.png" />
            <q-popup-proxy>
              <q-banner>
                <template v-slot:avatar> </template>
                {{ $t("common.info_scan") }}
              </q-banner>
            </q-popup-proxy>
          </q-avatar>

          <q-btn unelevated :to="{ name: 'AccountPage' }">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/user_setting.png" /> </q-avatar
          ></q-btn>
        </q-splitter>
      </div>
    </div>
  </q-banner>

  <!-- qui parte il body -->
  <h4>{{ $t("common.title_scan") }}</h4>
  <q-input
    class="col-12 col-md-12"
    ref="codeRef"
    :rules="[notEmpty]"
    v-model="code"
    :label="$t('common.insert_code')"
    outlined
    dense
  />
  <!-- <q-spinner-ios size="2em" /> -->
  <!-- qui finisce il body -->
  <q-footer reveal elevated class="text-black" style="background-color: white">
    <div class="row">
      <div class="col justify-center">
        <q-btn unelevated :to="{ name: 'HistoricalPage' }">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/list_icon.png" /> </q-avatar
        ></q-btn>
      </div>
      <div class="col justify-center">
        <q-btn unelevated :to="{ name: 'ScansPage' }">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/scan_icon.png" /> </q-avatar
        ></q-btn>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { t } from "boot/i18n";
import { useStore } from "vuex";

export default defineComponent({
  name: "ScansPage",

  setup() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const loading = ref(false);
    const codeRef = ref(null);

    const notEmpty = (val) => !!val || t("common.requiredField");

    const isValid = () => {
      const fieldsIsValid = [];
      fieldsIsValid.push(codeRef.value.validate());

      return fieldsIsValid.every((f) => f === true);
    };

    return {
      router,
      route,
      loading,
      notEmpty,
      codeRef,
    };
  },
});
</script>
