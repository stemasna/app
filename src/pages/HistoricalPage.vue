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
      <q-card-section v-if="resultsArray && resultsArray.length > 0">
        <!-- {{ "titolo" }}
        <div>{{ "autore" }}</div>
        <div>{{ "codice_ident" }}</div>
        <div>{{ "autenticità" }}</div>
        <div>{{ "data scansione" }}</div> -->

        <ArtCard
          v-for="result in resultsArray"
          :id="result.id"
          :painting="result.painting"
          :qr="result.qr"
          :date="result.date"
          :key="result.id"
        >
        </ArtCard>
      </q-card-section>
    </q-card-section>

    <q-separator />
  </q-card>

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
import _ from "lodash";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { mapGetters } from "vuex";
import ArtCard from "src/components/modal/ArtCard.vue";

//import ConfirmModal from "components/modals/ConfirmModal";

export default defineComponent({
  name: "HistoricalPage",
  components: {
    ArtCard,
  },
  data() {
    return {
      loading: false,
      resultsArray: undefined,
    };
  },

  setup() {
    return {
      router: useRouter(),
    };
  },
  computed: {
    ...mapGetters(["token"]),

    resultsNumber: function () {
      return this.resultsArray.length;
    },
  },
  methods: {
    async getAllArt() {
      try {
        this.loading = true;
        const { data: result } = await api.get("scan/get", {});
        this.resultsArray = result;
        console.log({ arr: this.resultsArray });
        this.loading = false;
        //this.rows = data;
      } catch (e) {
        this.loading = false;
        console.error({ e });
      }
    },
  },
  // watch: {
  //   token(newValue) {
  //     newValue && this.getAllArt();
  //   },
  // },
  async created() {
    await this.getAllArt();
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
