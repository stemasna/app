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

  <!-- fine body -->
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArtWorkDetailPage",
  // methods: {
  //   GoToLoginUser() {
  //     this.$router.push({
  //       name: "LoginPage",
  //     });
  //   },
  // },
});
</script>
