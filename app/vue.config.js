module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  // productionをGitHubPages用に以下変更
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-typescript-practice" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "/docs" : "dist",
};
