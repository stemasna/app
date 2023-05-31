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
            <div class="row">{{ $t("common.approvate_opera_title") }}</div>
          </div>
        </div>
        <div class="row q-col-gutter-md q-mt-md">
          <q-input
            class="col-12 col-md-12"
            ref="nameRef"
            :rules="[notEmpty]"
            v-model="thisLista.Titolo"
            :label="$t('common.name_artwork')"
            outlined
            disable
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
      thisLista: {
        Titolo: undefined,
        NomeArtista: undefined,
        NazionalitaArtista: undefined,
      },
      loading: false,
    };
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
    } /*
    methods: {
      async fetchImage() {
        try {
          const response = await axios.get("/image"); // Sostituisci con l'URL corretto per la richiesta dell'immagine
          this.imageUrl = response.data.imageUrl; // Sostituisci con la proprietà corretta nell'oggetto di risposta che contiene l'URL dell'immagine
        } catch (error) {
          console.error(error);
          // Gestisci l'errore durante la richiesta dell'immagine
        }
      },
    } /*
    async createCodTag() {
      const id = this.id;
      const { data } = await api.post(`securekits/${id}`, {
        cod: this.code,
      });
      return data;
    },
    async onClickSave() {
      try {
        this.loading = true;
        await this.createCodTag().then((elem) => {
          console.log({ elem });
          this.router.back();
        });
        this.loading = false;
      } catch (e) {
        console.error({ e });
        this.loading = false;
      }
    },*/,
    async onClickScanCert() {
      await this.router.push({ name: "CertPage" });
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

<style scoped lang="scss"></style>
