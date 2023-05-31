import createPersistedState from "vuex-persistedstate";
import { createStore, createLogger } from "vuex";
import user from "./user";
import app from "./app";
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const store = createStore({
  modules: {
    user,
    app,
  },
  plugins: [
    createLogger(),
    createPersistedState({
      key: "app",
      paths: ["user"],
    }),
  ],

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
});

export default store;
