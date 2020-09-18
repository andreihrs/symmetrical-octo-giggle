module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     '.src/**/*.js',
    //     '.public/index.html'
    //   ], 
    //   css: [
    //     './src/styles/orgchart.css',
    //     './src/styles/userprofile.css'
    //   ],
    //   defaultExtractor: content => content.match(/[A-za-z0-9-_:/]+/g) || []
    // })
    // ...
  ]
};