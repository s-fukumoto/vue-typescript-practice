/**
 * Myコンポーネントをグローバルコンポーネントとして登録するプラグイン
 */
import Vue from "vue";

// Myコンポーネントフォルダ配下の拡張子vue、tsファイルを取得
const requireContext = require.context(
  "@/components/my",
  true,
  /[A-Z]\w+\.(vue|ts)$/
);

// コンポーネントをグローバル登録する
requireContext.keys().forEach((fileName) => {
  const component = requireContext(fileName).default;
  Vue.component(component.name, component);
});
