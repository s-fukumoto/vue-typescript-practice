/**
 * Myコンポーネントをグローバルコンポーネントとして登録するプラグイン
 */
import { VueConstructor } from "vue/types/vue";

//import Button from "@/components/my/Button.vue";
//import TextField from "@/components/my/TextField.vue";

//Vue.component('MyBtn', Button);
//Vue.component('MyTextField', TextField);

export function install(Vue: VueConstructor): void {
  const requireComponent = require.context(
    // Myコンポーネントフォルダ
    "@/components/my",
    // サブフォルダ内を調べるかどうか
    true,
    // コンポーネントのファイル名に一致させるのに使う正規表現
    /[A-Z]\w+\.(vue|ts)$/
  );

  requireComponent.keys().forEach(fileName => {
    // コンポーネント設定を取得する
    const componentConfig = requireComponent<VueConstructor>(fileName); // @todo 型定義見直し

    // コンポーネント名をファイル名から取得する(My***形式)
    // @todo コンポーネントのnameから取得できないか
    const componentName = fileName.replace(/^.*\//, "My").replace(/\.\w+$/, "");

    // コンポーネントをグローバル登録する
    Vue.component(
      componentName,
      // `export default` を使ってコンポーネントがエクスポートされた場合に存在する
      // `.default` でコンポーネントオプションを期待していて
      // 存在しない場合にはモジュールのルートにフォールバックします。
      componentConfig.default || componentConfig
    );
  });
}
