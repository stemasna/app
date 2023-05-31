<template>
  <div class="row">
    <div>
      <q-btn unelevated :to="{ name: 'HistoricalPage' }" icon="chevron_left" />
    </div>
    <div class="justify-right text-weight-bold text-h4">
      {{ $t("common.details_art") }}
    </div>
  </div>
  <!-- inizio body -->
  <q-card
    flat
    class="col-12 col-md-4 q-pa-md q-py-lg"
    bordered
    style="border-radius: 0.5rem"
  >
    <div class="row q-col-gutter-md q-mt-md" v-if="loaded">
      <q-input
        class="col-12 col-md-12"
        v-model="art.Titolo"
        outlined
        dense
        readonly
      />
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.artist')"
        v-model="art.NomeArtista"
        outlined
        dense
        readonly
      />

      <q-input
        class="col-12 col-md-12"
        :label="$t('common.nationality')"
        v-model="art.NazionalitaArtista"
        readonly
        outlined
        dense
      />
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.date_registration')"
        outlined
        v-model="art.DataRegistrazione"
        dense
        readonly
      />
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.date_scansion')"
        outlined
        v-model="date"
        dense
        readonly
      />
      <!-- <q-input
        class="col-12 col-md-12"
        :label="$t('common.series')"
        outlined
        v-model="qr"
        dense
        readonly
      /> -->
    </div>
  </q-card>
  <!-- fine body -->
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
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "ArtWorkDetailPage",

  setup() {
    return {
      router: useRouter(),
      route: useRoute(),
      $q: useQuasar(),
    };
  },
  data() {
    return {
      art: {
        Titolo: undefined,
        NomeArtista: undefined,
        NazionalitaArtista: undefined,
        DataRegistrazione: undefined,
      },
      date: undefined,
      qr: undefined,
      loaded: false,
    };
  },
  methods: {
    async getDetailsArt() {
      try {
        this.loaded = false;
        const { data } = await api.get(`scan/${this.$route.params.id}`);
        console.log(data);
        this.art = data.painting;
        this.date = data.date;
        this.qr = data.qr;
        this.loaded = true;
        return data;
      } catch (e) {
        console.error({ e });
      }
    },
  } /*
  async ChangeData() {
    this.date = thisDate;
    console.log(this.date);
    return (
      new Date(thisDate).toLocaleString("it-IT", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }) || " - "
    );
  },*/,
  async created() {
    await this.getDetailsArt();
    //this.ChangeData();
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
