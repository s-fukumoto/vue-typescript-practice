module.exports = {
  transpileDependencies: ["vuetify"],

  // ソースマップ
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,

  // ファイル名のハッシング
  filenameHashing: false,

  // productionをGitHubPages用に以下変更
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-typescript-practice" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "/docs" : "dist",
};
