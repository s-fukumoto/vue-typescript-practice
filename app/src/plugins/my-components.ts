/**
 * Myコンポーネントをグローバルコンポーネントとして登録するプラグイン
 */
import { VueConstructor } from "vue/types/vue";

export default function install(Vue: VueConstructor): void {
  // Myコンポーネントフォルダ配下の拡張子vue、tsファイルを取得
  const requireContext = require.context(
    "@/components/my",
    true,
    /[A-Z]\w+\.(vue|ts)$/
  );

  // コンポーネントをグローバル登録する
  requireContext.keys().forEach(fileName => {
    const component = requireContext(fileName).default;
    Vue.component(component.name, component);
  });
}
