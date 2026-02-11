import postcssPxToRem from 'postcss-pxtorem'

export default ({evn}) =>{
    const isProd = evn ==='production'
    const plugins = []

    if (isProd) {
        plugins.push(
            postcssPxToRem({
                propList: ['*'],
                mediaQuery: true,
            })
        )
    }

    return {
        plugins,
    }
}
