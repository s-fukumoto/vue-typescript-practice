import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: true,
    /** default
    themes: {
      light: {
        primary: colors.blue.darken2,
        secondary: colors.grey.darken3,
        accent: colors.blue.accent2,
        error: colors.red.accent2,
        info: colors.blue.base,
        success: colors.green.base,
        warning: colors.orange.darken1
      },
      dark: {
        primary: colors.blue.base,
        secondary: colors.grey.darken3,
        accent: colors.pink.accent2,
        error: colors.red.accent2,
        info: colors.blue.base,
        success: colors.green.base,
        warning: colors.orange.darken1
      },
    },
    */
    themes: {
      light: {
        primary: colors.green.darken2,
      },
      dark: {
        primary: colors.lightGreen.darken1,
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
  lang: {
    current: "ja",
  },
});

export default vuetify;
