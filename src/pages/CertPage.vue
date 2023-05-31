<template>
  <q-banner class="text-black">
    <div class="row centro">
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
  <h4>{{ $t("common.title_cert") }}</h4>
  <q-input
    class="col-12 col-md-12"
    ref="codeRef"
    :rules="[notEmpty]"
    v-model="code"
    :label="$t('common.insert_code')"
    outlined
    dense
  />
  <div class="row q-mt-md justify-center">
    <q-btn
      :label="$t('common.goToScan')"
      color="primary"
      @click="getCertQr"
      :loading="loading"
    />
  </div>
  <!-- <q-spinner-ios size="2em" /> -->
  <h8 class="text-bold">{{ $t("common.procedure") }}</h8>
  <div>
    <div class="text-caption">{{ $t("common.cert_body") }}</div>
  </div>
  <!-- qui finisce il body -->
  <q-footer reveal elevated class="text-black" style="background-color: white">
    <div class="row">
      <div class="col centro">
        <q-btn unelevated :to="{ name: 'HistoricalPage' }">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/list_icon.png" /> </q-avatar
        ></q-btn>
      </div>
      <div class="col centro">
        <q-btn unelevated :to="{ name: 'ScansPage' }">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/scan_icon.png" /> </q-avatar
        ></q-btn>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";
import { t } from "boot/i18n";
import { useStore } from "vuex";
import CertApprovate from "src/components/modal/CertApprovate.vue";
import CertNegate from "src/components/modal/CertNegate.vue";

export default defineComponent({
  name: "ScansPage",
  setup() {
    return {
      router: useRouter(),
      route: useRoute(),
      store: useStore(),
      $q: useQuasar(),
    };
  },
  data() {
    return {
      loading: false,
      code: undefined,
      codeRef: undefined,
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
      fieldsIsValid.push(this.codeRef.value.validate());

      return fieldsIsValid.every((f) => f === true);
    },

    async getCertQr() {
      try {
        //console.log(this.code);
        const qr = this.code;
        const { data } = await api.get(`paintings/findbycertqr/${qr}`);
        console.log({ data });

        this.$q.dialog({
          component: CertApprovate,
          componentProps: { lista: data },
        });
      } catch (e) {
        this.$q.dialog({ component: CertNegate });
        console.error({ e });
      }
    },
  },
});
</script>
<style scoped lang="scss">
.centro {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Aggiungi altri stili desiderati */
}
</style>
