<template>
  <v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
