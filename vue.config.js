module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/settings/_variables.scss";`,
          prependData: `@import "@/assets/scss/settings/_mixins.scss";`
        }
      }
    },
  };