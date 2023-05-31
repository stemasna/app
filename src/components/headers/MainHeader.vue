<template>
  <div class="q-pa-md q-gutter-sm">
    <q-bar class="text-black" style="background-color: white">
      <div>9:41</div>
      <q-space />
      <q-icon :name="fasSignal" />
      <q-icon :name="fasWifi" />
      <q-icon :name="fasBatteryFull" />
    </q-bar>
  </div>
</template>

<script>
import {
  fasSignal,
  fasWifi,
  fasBatteryFull,
} from "@quasar/extras/fontawesome-v6";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
//import LoginModal from "components/modals/LoginModal";
import { t } from "boot/i18n";

export default defineComponent({
  name: "MainHeader",
  setup() {
    return {
      store: useStore(),
      $q: useQuasar(),
      fasSignal,
      fasWifi,
      fasBatteryFull,
    };
  },
  data() {
    const token = computed(() => store.getters.token);

    const toggleLeftDrawer = () => store.commit("toggleLeftDrawer");

    const logout = async () => {
      await store.dispatch("logout");
      $q.notify({
        message: t("common.disconnected"),
        color: "warning",
      });
    };

    const login = () => {
      $q.dialog({ component: LoginModal });
    };

    return {
      toggleLeftDrawer,
      logout,
      login,
      token,
    };
  },
  methods: {},
  computed: {},
  created() {},
});
</script>

<style scoped lang="scss"></style>
