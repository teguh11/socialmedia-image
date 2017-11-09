let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 // mix.browserSync('plugin.tk/socialmedia/public');

// js combine
mix.js('resources/assets/js/app.js', 'public/js/app.js');


// change sass to css
mix.sass('resources/assets/sass/app.scss', 'public/css/app.css').
	sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/css/bootstrap.css');
	// sass('node_modules/materialize-css/sass/materialize.scss', 'public/css/materialize.css');

// copy font
// mix.copy('node_modules/materialize-css/dist/fonts', 'publ')