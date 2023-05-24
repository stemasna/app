<template>
  <q-banner class="text-black">
    <div class="row">
      <div class="col">
        <q-img src="../assets/title.png" />
      </div>
      <q-space />
      <div class="col">
        <q-splitter v-model="splitterModel">
          <q-avatar>
            <img src="../assets/icon.png" />
            <q-popup-proxy>
              <q-banner>
                <template v-slot:avatar> </template>
                {{ $t("common.info_historical") }}
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
  <h4>{{ $t("common.list") }} {{ $t("common.scans") }}</h4>
  <!-- lista card delle scansioni

  inizio prova card-->
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />

      <q-card-section>
        {{ "titolo" }}
        <div>{{ "autore" }}</div>
        <div>{{ "codice_ident" }}</div>
        <div>{{ "autenticità" }}</div>
        <div>{{ "data scansione" }}</div>
      </q-card-section>
      <q-card-section>
        <q-btn
          unelevated
          :to="{ name: 'ArtWorkDetailPage' }"
          icon="chevron_right"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />
  </q-card>

  <!-- <div
    class="row"
    style="display: flex; flex-wrap: wrap; gap: 20px"
    v-if="resultsArray.length > 0"
  >
    <Card
      v-for="result in resultsArray"
      :key="result[`#IMDB_ID`]"
      :title-prop="result[`#TITLE`]"
      :actors-prop="result[`#ACTORS`]"
      :year-prop="result[`#YEAR`]"
      :image-prop="result[`#IMG_POSTER`]"
    >
    </Card>
  </div>

fine prova card-->

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
        <q-btn
          unelevated
          style="align-items: center"
          :to="{ name: 'ScansPage' }"
        >
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/scan_icon.png" /> </q-avatar
        ></q-btn>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { mapGetters } from "vuex";
//import ConfirmModal from "components/modals/ConfirmModal";

export default defineComponent({
  name: "HistoricalPage",
  setup() {
    return {
      router: useRouter(),
    };
  },
  //sopra per il metod nel bottone metto
  //@click="GoToDetail"
  // methods: {
  //   GoToDetail() {
  //     this.router.push({
  //       name: "ArtWorkDetail",
  //       params: {
  //         id: "new",
  //       },
  //     });
  //   },
  // },
});
</script>
