import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const colorTheme = {
  primary: colors.deepOrange
};

export default new Vuetify({
  breakpoint: {
    //   mobileBreakpoint: 'xs' // This is equivalent to a value of 960
  },
  theme: {
    themes: {
      light: colorTheme,
      dark: colorTheme
    }
  }
});
