<template>
  <q-page class="flex flex-center">
    <div class="column items-center" style="height: 150px">
      <div class="col">{{ $t("common.tipology_user") }}</div>

      <div class="col">
        <q-btn
          color="primary"
          :label="$t('common.private_user')"
          :to="{ name: 'LoginPage' }"
        />
      </div>
      <div class="col">
        <q-btn
          color="primary"
          :label="$t('common.customs_user')"
          @click="GoToLogin"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TipologyPage",
  // methods: {
  //   GoToLoginUser() {
  //     this.$router.push({
  //       name: "LoginPage",
  //     });
  //   },
  // },
});
</script>
