<!--
  Vuetifyの v-btn のラッパーコンポーネント
-->
<template>
  <v-btn v-bind="attrs" :color="color" class="ma-2" v-on="listeners">
    <!-- @todo:scopeには対応してない -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "MyButton",
  inheritAttrs: false,
  setup(props, { attrs, listeners }) {
    const color = ref(attrs.color ?? "primary");

    return {
      attrs,
      listeners,
      color,
    };
  },
});
</script>
