<template>
  <v-app>
    <AppToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AppToolBar from "@/components/AppToolBar.vue";

export default defineComponent({
  name: "App",
  components: {
    AppToolBar,
  },
});
</script>
