const { src, dest } = require("gulp");
const jsMinify = require("gulp-js-minify");
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


const scripts = () => {
    return src("./src/js/*.js")
    .pipe(concat('scripts.min.js'))
    .pipe(jsMinify())
    .pipe(dest("./dist/js/"))
    .pipe(browserSync.stream());
};

exports.scripts = scripts;
