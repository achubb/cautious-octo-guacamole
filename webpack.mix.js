let mix = require('laravel-mix');

mix.stylus('src/stylus/app.styl', 'dist/css')
   .js('src/js/app.js', 'dist/js')
   .browserSync({
      proxy: 'scaf.dev',
      files: ["dist/css/*.css", "dist/js/*.js"]
   });
