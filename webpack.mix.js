let mix = require('laravel-mix');

mix.stylus('src/stylus/app.styl', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [
            // autoprefixer - does what it says on the tin!
            require('autoprefixer'),
            // add content='' to psuedo elements
            require('postcss-pseudo-elements-content'),
            // svg inliner
            require('postcss-inline-svg')({
                path: 'dist/images/',
                removeFill: true
            }),
            // postcss - assets
            require('postcss-assets')({
                loadPaths: ['images/'],
                basePath: 'dist/',
                cachebuster: true
            }),
            // sprite Generator
            require('postcss-sprites')({
                stylesheetPath: 'dist/css',
	            spritePath: 'dist/images',
                basePath: 'dist/'
            })
        ]
    })
   .js('src/js/app.js', 'dist/js')
   // .browserSync({
   //    proxy: 'scaf.dev',
   //    files: ["dist/css/*.css", "dist/js/*.js"]
   // });
