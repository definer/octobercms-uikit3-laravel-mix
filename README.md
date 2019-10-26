# October CMS Uikit v3 on laravel-mix
Starter development template for building UIkit v3 themed OctoberCMS sites on Laravel mix..

## Installation
Add the theme to existing project while logged into OctoberCMS account online,
or interactively by searching it inside Settings/System/Updates/Themes in backend,
or with the following command-line instructions inside *project root*:

```bash
php artisan theme:install definer.ui3kitmix ui3kitmix
php artisan theme:use ui3kitmix
```
Install [NodeJS and Node Package Manager](https://nodejs.org/en/).
Run the following command-line instructions inside *theme root*:
```bash
npm i
```

## Webpack command list
```bash
npm run dev
npm run development
npm run watch
npm run watch-poll
npm run hot
npm run prod
npm run production
```

## Customizing UIkit

### Styles
Comment out unwanted components for leaner and faster UIkit custom build
- [assets/scss/components.scss](https://github.com/definer/octobercms-uikit3-laravel-mix/blob/master/assets/scss/components.scss)

Override global framework/theme styling parameters in the following SCSS files, just don't forget to remove *!default* from variables:
- [assets/scss/variables.scss](https://github.com/definer/octobercms-uikit3-laravel-mix/blob/master/assets/scss/variables.scss)

Extend uikit yourself with your own styles using hooks
- [assets/scss/hooks.scss](https://github.com/definer/octobercms-uikit3-laravel-mix/blob/master/assets/scss/hooks.scss)

### Scripts
Comment out unwanted components for leaner and faster UIkit custom build
- [assets/scripts/theme.js](https://github.com/definer/octobercms-uikit3-laravel-mix/blob/master/assets/scripts/theme.js)
