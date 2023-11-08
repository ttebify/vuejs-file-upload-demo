import Vue from "vue";
import VueRouter from "vue-router";
import VueUploadComponentExample from "../views/VueUploadComponentExample.vue";
import ImageKitExample from "../views/ImageKitExample.vue";
import NativeHTML5Example from "../views/NativeHTML5Example.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    { path: "/", component: VueUploadComponentExample },
    {
      path: "/vue-upload-component",
      component: VueUploadComponentExample,
    },
    {
      path: "/native-html5",
      component: NativeHTML5Example,
    },
    { path: "/imagekit", name: "imagekit", component: ImageKitExample },
  ],
});

export default router;
