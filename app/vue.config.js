module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  // GitHubPages用に以下変更
  publicPath: "/vue-typescript-practice",
  outputDir: "/docs",
};
