// vue.config.js file to be place in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/pokemon-vue-tailwind/' // usage explained in my vue.js deployment notes.
        : '/'
}
