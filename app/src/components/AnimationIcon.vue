<template>
  <v-sheet
    :height="size.height"
    :width="size.width"
    :color="color"
    class="relative"
  >
    <v-icon
      v-for="(icon, index) in icons"
      :key="icon.id"
      :class="`absolute icons-anime-${index}`"
      large
    >
      {{ icon }}
    </v-icon>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";

interface IconSize {
  height: number;
  width: number;
}

export default defineComponent({
  name: "AnimationIcon",

  setup() {
    // prettier-ignore
    const icons = ref<string[]>(["mdi-human-handsup", "mdi-human", "mdi-human-handsdown"]);
    // prettier-ignore
    const size = reactive<IconSize>({ height: 36, width: 36 });
    const color = ref<string>("rgba(0, 0, 0, 0.0)");

    return {
      icons,
      size,
      color,
    };
  },
});
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute !important;
  top: 0px;
  left: 0px;
}

$icon-count: 3; // アイコン数
$duration: 2s; // アニメーション間隔

/* prettier-ignore */
@keyframes fade-0 {
  0% { opacity: 0; }
  25% { opacity: 1; }
  50% { opacity: 0; }
  75% { opacity: 0; }
  100% { opacity: 0; }
}
/* prettier-ignore */
@keyframes fade-1 {
  0% { opacity: 0; }
  25% { opacity: 0; }
  50% { opacity: 1; }
  75% { opacity: 0; }
  100% { opacity: 0; }
}
/* prettier-ignore */
@keyframes fade-2 {
  0% { opacity: 0; }
  25% { opacity: 0; }
  50% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 0; }
}
/* prettier-ignore */
@keyframes jump-0 {
  from { transform: translateY(0); }
  to { transform: translateY(-20%); }
}
/* prettier-ignore */
@keyframes gradation {
  0% { color: orangered; }
  100% { color: yellow; }
}

@mixin icons-anime($idx) {
  animation-name: fade-#{$idx}, jump-#{$idx}, gradation;
  animation-duration: $duration;
  animation-timing-function: ease;
  // 各アイコン毎にアニメーション開始時間を0.5秒ずつずらす
  animation-delay: $idx * $duration * 0.5;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: both;
}

@for $idx from 0 to $icon-count {
  .icons-anime-#{$idx} {
    @include icons-anime($idx);
  }
}
</style>
