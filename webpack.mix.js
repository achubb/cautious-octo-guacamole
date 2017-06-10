let mix = require('laravel-mix');

mix.stylus('src/stylus/app.styl', 'dist/css')
    .options({
        postCss: [
            // autoprefixer - does what it says on the tin!
            require('autoprefixer')
        ]
    })
   .js('src/js/app.js', 'dist/js')
   .browserSync({
      proxy: 'scaf.dev',
      files: ["dist/css/*.css", "dist/js/*.js"]
   });
