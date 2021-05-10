module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Ghandi Road';
      return args;
    });
  },
};
