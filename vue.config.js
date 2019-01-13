const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "src/styles/global.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('prefetch')
    }
};
