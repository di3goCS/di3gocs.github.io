module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Di3goCS - Desenvolvedor Web";
                return args;
            })
    },

    publicPath: '/'
}