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
            <div class="row">{{ $t("common.cert_title") }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col approvated">
            <q-avatar>
              <img src="../../assets/approve.png" />
            </q-avatar>
          </div>
          <div class="col text-bold">
            {{ $t("common.body_approved") }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              class="col-12 col-md-12"
              ref="nameRef"
              :rules="[notEmpty]"
              v-model="thisLista.Titolo"
              :label="$t('common.name_artwork')"
              disable
              outlined
              dense
            />
            <q-input
              class="col-12 col-md-12"
              ref="certRef"
              :rules="[notEmpty]"
              v-model="thisLista.NomeArtista"
              :label="$t('common.name_artist')"
              disable
              outlined
              dense
            />
            <q-input
              class="col-12 col-md-12"
              ref="serieRef"
              :rules="[notEmpty]"
              v-model="thisLista.NazionalitaArtista"
              :label="$t('common.nationality_artist')"
              outlined
              disable
              dense
            />
          </div>
          <!-- <div class="col justify-center items-center"> -->
          <div class="col approvated">
            <q-avatar>
              <img src="../../assets/check.png" />
            </q-avatar>
          </div>
        </div>
        <div class="row justify-center">
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
import { mapGetters } from "vuex";

export default defineComponent({
  name: "OperaApprovate",
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
    return {
      loading: false,
      thisLista: {
        Titolo: undefined,
        NomeArtista: undefined,
        NazionalitaArtista: undefined,
      },
    };
  },
  computed: {
    ...mapGetters(["token"]),
  },
  methods: {
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    async notEmpty(val) {
      return !!val || (await t("common.requiredField"));
    },
    isValid() {
      const fieldsIsValid = [];
      fieldsIsValid.push(nameRef.value.validate());
      this.isAdd.value;

      return fieldsIsValid.every((f) => f === true);
    },

    onClickScanNewOpera() {
      this.router.push({ name: "ScansPage" });
    },
  },
  created() {
    this.thisLista = this.lista;
    console.log({ lista: this.lista });
  },
});
</script>

<style scoped lang="scss">
.approvated {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Aggiungi altri stili desiderati */
}
</style>
