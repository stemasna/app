<template>
  <q-page class="flex flex-top">
    <div class="row">
      <div>
        <q-btn
          unelevated
          icon="cancel"
          :to="{ name: 'ScansPage' }"
          :loading="loading"
        />
      </div>
      <div class="justify-center text-weight-bold text-h6">
        {{ $t("common.title_tutorial") }}
      </div>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          padding
          arrows
          class="text-black shadow-1 rounded-borders text-center"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_1") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_1") }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="2" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_2") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_2") }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="3" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_3") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_3") }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="4" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_4") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_4") }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="5" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_5") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_5") }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="6" class="column no-wrap flex-center">
            <div class="text-weight-bold text-h6">
              {{ $t("common.title_tutorial_page_6") }}
            </div>
            <div class="q-mt-md text-center">
              {{ $t("common.body_tutorial_page_6") }}
            </div>
            <q-btn
              unelevated
              :to="{ name: 'ScansPage' }"
              :loading="loading"
              text-color="blue"
              :label="$t('common.GoToApp')"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TutorialPage",
  methods: {
    GoToScansPage() {
      this.router.push({
        name: "ScansPage",
      });
    },
  },
  setup() {
    return {
      slide: ref("style"),
    };
  },
});
</script>
