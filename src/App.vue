<template>
  <!-- <router-view /> -->
  <landing />
  <about />
  <prowork />
  <contact />
</template>
<script>
import { defineComponent } from "vue";
import landing from "./pages/landing.vue";
import about from "./pages/about.vue";
import prowork from "./pages/prowork.vue";
import contact from "./pages/contact.vue";

export default defineComponent({
  name: "App",
  components: {
    landing,
    about,
    prowork,
    contact,
  },
});
</script>
