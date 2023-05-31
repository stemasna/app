<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card flat bordered style="border-radius: 0.5rem" class="q-pa-md">
        <div class="row justify-center">
          <div class="row text-weight-bold text-h6">
            <q-btn
              unelevated
              icon="chevron_left"
              @click="() => router.back()"
              :loading="loading"
            />
            <div class="row">{{ $t("common.negate_cert_title") }}</div>
          </div>
        </div>
        <div class="col">
          <div class="row justify-center">
            <q-avatar>
              <img src="../../assets/negate.png" />
            </q-avatar>
          </div>
          <div class="row">
            {{ $t("common.negate_cert_body") }}
          </div>
        </div>
        <div class="row justify-center">
          <q-btn
            color="primary"
            :label="$t('common.scan_cert')"
            @click="onClickScanCert"
            :loading="loading"
          />
          <q-btn
            color="primary"
            :label="$t('common.scan_new_opera')"
            @click="onClickScanNewOpera"
            :loading="loading"
          />
        </div>
      </q-card>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent, useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { t } from "boot/i18n";
import { useStore } from "vuex";
import { api } from "boot/axios";

export default defineComponent({
  name: "OperaApprovate",
  props: ["id"],
  props: ["lista"],
  emits: [...useDialogPluginComponent.emits],
  setup() {
    return {
      dialogRef: useDialogPluginComponent(),
      onDialogHide: useDialogPluginComponent(),
      onDialogOK: useDialogPluginComponent(),
      onDialogCancel: useDialogPluginComponent(),
      $q: useQuasar(),
      router: useRouter(),
      store: useStore(),
      route: useRoute(),
    };
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },

    async onClickScanCert() {
      await this.router.push({ name: "CertPage" });
    },
    onClickScanNewOpera() {
      this.router.push({ name: "ScansPage" });
    },
  },
});
</script>

<style scoped lang="scss"></style>
