<!--
  Vuetifyの v-btn のラッパーコンポーネント
-->
<template>
  <v-btn v-bind="$attrs" :color="color" class="ma-2" v-on="$listeners">
    <!-- @todo:scopeには対応してない -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MyButton",
  inheritAttrs: false,
  data() {
    return {
      color: this.$attrs.color ?? "primary"
    };
  }
});
</script>
