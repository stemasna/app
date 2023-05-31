<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col">
        <div class="card-body">
          <h5 class="card-title">{{ painting.Titolo }}</h5>
          <p class="card-text">{{ painting.NomeArtista }}</p>
          <p class="card-text">{{ qr }}</p>
          <p class="card-text">
            <small class="text-muted"
              >{{ $t("common.date_scan") }} {{ date }}</small
            >
          </p>
        </div>
      </div>
      <div class="col approvated">
        <q-btn unelevated @click="() => goToRoute()" icon="chevron_right" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
export default defineComponent({
  name: "ArtCard",

  props: ["painting", "date", "qr", "id"],
  setup() {
    return {
      router: useRouter(),
      route: useRoute(),
      $q: useQuasar(),
    };
  },
  methods: {
    goToRoute() {
      this.$router.push({
        name: "ArtWorkDetailPage",
        params: { id: this.id },
      });
    },
  },
  created() {
    console.log(this.id);
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
