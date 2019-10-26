const mix = require('laravel-mix');

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

mix.setPublicPath('assets/')

.webpackConfig({
    resolve: {
        alias: {
            'uikit-util': path.resolve(__dirname, 'node_modules/uikit/src/js/util')
        }
    }
})

.browserSync({
    proxy: '',
    host: '', // your local URL site
    notify: false,
    files:  [
        "./assets/scripts/*.js",
        "./assets/scss/*.scss"
    ]
})

.js('./assets/scripts/theme.js', 'public/js')
  .sass('./assets/scss/theme.scss', 'public/css').options({
    processCssUrls: false
})

.version();

// Full API
// .js(src, output);
// .react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// .preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// .coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// .ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// .extract(vendorLibs);
// .sass(src, output);
// .less(src, output);
// .stylus(src, output);
// .postCss(src, output, [require('postcss-some-plugin')()]);
// .browserSync('my-site.test');
// .combine(files, destination);
// .babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// .copy(from, to);
// .copyDirectory(fromDir, toDir);
// .minify(file);
// .sourceMaps(); // Enable sourcemaps
// .version(); // Enable versioning.
// .disableNotifications();
// .setPublicPath('path/to/public');
// .setResourceRoot('prefix/for/resource/locators');
// .autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// .webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// .babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// .then(function () {}) <-- Will be triggered each time Webpack finishes building.
// .dump(); <-- Dump the generated webpack config object to the console.
// .extend(name, handler) <-- Extend Mix's API with your own components.
// .options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });

// For fonts
// .copyDirectory(from, to);
