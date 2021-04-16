const path = require('path')

module.exports = {
  assetsDir: "static",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Market Mix";
      return args;
    });
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        // path.resolve(__dirname, "./src/styles/mixins.styl"),
        path.resolve(__dirname, "./src/styles/vars.styl")
      ]
    });
}
