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
            // Retina Image support
            require('postcss-at2x'),
            // sprite Generator
            require('postcss-sprites')({
                stylesheetPath: 'dist/css',
	            spritePath: 'dist/images',
                filterBy: function(image) {
                    // Allow only png files
                    if (!/\.png$/.test(image.url)) {
                        return Promise.reject();
                    }
		            return Promise.resolve();
                },
                basePath: 'dist/',
                retina: true
            })
        ]
    })
   .js('src/js/app.js', 'dist/js')
   // .browserSync({
   //    proxy: 'scaf.dev',
   //    files: ["dist/css/*.css", "dist/js/*.js"]
   // });
