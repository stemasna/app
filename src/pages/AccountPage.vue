<template>
  <div class="row">
    <div>
      <q-btn unelevated :to="{ name: 'HistoricalPage' }" icon="chevron_left" />
    </div>
    <div class="justify-right text-weight-bold text-h4">
      {{ $t("common.account") }}
    </div>
  </div>

  <q-card
    flat
    class="col-12 col-md-4 q-pa-md q-py-lg"
    bordered
    style="border-radius: 0.5rem"
  >
    <div class="row q-col-gutter-md q-mt-md">
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.email')"
        v-model="user.email"
        outlined
        dense
        disable
      />
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.surname')"
        v-model="user.surname"
        outlined
        dense
        disable
      />

      <q-input
        class="col-12 col-md-12"
        :label="$t('common.name')"
        v-model="user.name"
        disable
        outlined
        dense
      />
      <q-input
        class="col-12 col-md-12"
        :label="$t('common.telephone')"
        outlined
        v-model="user.phone"
        dense
        disable
      />
    </div>
  </q-card>
  <div>
    <div class="justify-right text-weight-bold">
      {{ $t("common.help") }}
    </div>
    <div>
      <q-icon name="settings" />
      <q-btn flat color="blue" :label="$t('common.assistence')" />
    </div>
    <div>
      <q-icon name="refresh" /><q-btn
        flat
        color="blue"
        :label="$t('common.change_password')"
      />
    </div>
    <div>
      <q-icon name="delete" /><q-btn
        flat
        color="blue"
        :label="$t('common.delete_account')"
        @click="() => deleteUser(user)"
      />
    </div>
  </div>
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
import _ from "lodash";
import { computed, defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { t } from "boot/i18n";
import { useStore } from "vuex";

export default defineComponent({
  name: "AccountPage",
  setup() {
    return {
      store: useStore(),
      router: useRouter(),
      route: useRouter(),
    };
  },
  data() {
    return {
      user: {
        email: undefined,
        surname: undefined,
        name: undefined,
        phone: undefined,
      },
    };
  },
  methods: {
    /*
    async deleteUser(user) {
      console.log(user);
      await this.$api.delete("user/remove/" + user);
      this.router.push({ name: "TipologyPage" });
    },*/
  },
  async created() {
    const currentUser = _.cloneDeep(await this.$store.getters.getDetails);
    this.user = currentUser;
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
