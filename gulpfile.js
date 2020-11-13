const { parallel, series } = require("gulp");

const cleanDistTask = require("./gulp-tasks/del");
const serveTask = require("./gulp-tasks/serve");
const watchTask = require("./gulp-tasks/watch");
const scriptsTask = require("./gulp-tasks/scripts");
const stylesTask = require("./gulp-tasks/styles");
const imagesTask = require("./gulp-tasks/images");

exports.dev = parallel(
  serveTask.serve,
  watchTask.watch,
  series(
    cleanDistTask.cleanDist,
    imagesTask.images,
    stylesTask.styles,
    scriptsTask.scripts
  )
);
exports.build = series(
  cleanDistTask.cleanDist,
  stylesTask.styles,
  scriptsTask.scripts,
  imagesTask.images
);
