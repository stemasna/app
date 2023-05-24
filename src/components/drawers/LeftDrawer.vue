<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LeftDrawer",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRouter();
    const toggleLeftDrawer = (v) => store.commit("setLeftDrawer", v);

    const open = ref();

    return {
      router,
      route,
      toggleLeftDrawer,
      open,
      leftDrawerOpen: computed(() => store.getters.leftDrawerOpen),
    };
  },
  watch: {
    leftDrawerOpen: {
      deep: true,
      handler(newValue) {
        this.open = newValue;
        console.log(newValue, this.open);
      },
    },
    open: {
      deep: true,
      handler(newValue) {
        this.toggleLeftDrawer(newValue);
      },
    },
  },
});
</script>

<style scoped lang="scss"></style>
