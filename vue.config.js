module.exports = {

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Di3goCS - Desenvolvedor de Software";
                return args;
            })
    },

    
}