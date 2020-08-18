<!--
  Vuetifyの v-text-field のラッパーコンポーネント
-->
<template>
  <v-text-field v-bind="attrs" outlined dense v-on="$listeners">
    <!-- @todo:scopeには対応してない -->
    <slot v-for="slot in Object.keys(slots)" :slot="slot" :name="slot" />
  </v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MyTextField",
  inheritAttrs: false,

  setup(props, { attrs, slots }) {
    return {
      attrs,
      slots,
    };
  },
});
</script>
