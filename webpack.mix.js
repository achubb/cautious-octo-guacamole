let mix = require('laravel-mix');

mix.stylus('src/stylus/app.styl', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [
            // autoprefixer - does what it says on the tin!
            require('autoprefixer'),
            // add content='' to psuedo elements
            require('postcss-pseudo-elements-content'),
            // postcss - assets
            require('postcss-assets')({
                loadPaths: ['images/'],
                basePath: 'dist/',
                cachebuster: true
            })
        ]
    })
   .js('src/js/app.js', 'dist/js')
   // .browserSync({
   //    proxy: 'scaf.dev',
   //    files: ["dist/css/*.css", "dist/js/*.js"]
   // });
