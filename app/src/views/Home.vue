<template>
  <v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
