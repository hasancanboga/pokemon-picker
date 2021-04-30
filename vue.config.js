// vue.config.js file to be place in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        // ? '/pokemon-vue-tailwind/' // this is the 'GitHub Pages' path. normally we use "/" when deploying on root of a normal server (apache, nginx or node server). but it is bugged so we need to use "./" instead.
        : '/'
}
