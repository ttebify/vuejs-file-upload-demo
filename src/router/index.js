import Vue from "vue";
import VueRouter from "vue-router";
import VueFileUploadExample from "../views/VueFileUploadExample.vue"
import ImageKitExample from "../views/ImageKitExample.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    { path: "/",  component: VueFileUploadExample },
    {
      path: "/vue-file-upload",
      component: VueFileUploadExample,
    },
    { path: "/imagekit", name: "imagekit", component: ImageKitExample },
  ],
});

export default router;
