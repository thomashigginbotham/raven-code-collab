# Raven Code Collab

Ensure your coding style is consistent by using these optimized linting rules for HTML, Sass, and JavaScript.

Grunt and Gulp configurations are also included to help automate your linting.

## Linting Configurations

* [EditorConfig](http://editorconfig.org/)
* [HTMLHint](https://github.com/yaniswang/HTMLHint/wiki)
* [scss-lint](https://github.com/brigade/scss-lint)
* [JSHint](http://jshint.com/docs/)
* [JSCS](http://jscs.info/)

Make sure to install the necessary linting plugins into your favorite code editor to get immediate feedback while you code.

## Using Grunt or Gulp

If you would like to lint your files as part of a build process, follow these steps:

1. Update **package.json** to remove the dependencies you do not need. For example, if you will be using Grunt, you may delete all the references to Gulp packages and vice-versa.
2. Run `npm install` from the root directory.
3. Update your config file (either **Gruntfile.js** or **gulpfile.js**) to lint the correct file paths. By default, files in an **html**, **scss**, or **js** directory will be linted.
4. Use either `grunt lint` or `gulp lint` respectively.
