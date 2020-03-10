import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/src/styles/main.sass'
// import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  themes: {
    light: {
      primary: colors.green,
      secondary: colors.grey.darken1,
      accent: colors.blue.black,
      error: colors.orange.accent3,
    },
    dark: {
      primary: colors.blue.lighten3,
    },
  },
});
