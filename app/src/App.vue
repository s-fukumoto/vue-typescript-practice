<template>
  <v-app>
    <AppToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppToolBar from "@/components/AppToolBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppToolBar
  }
});
</script>
