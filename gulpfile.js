"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
  return gulp
    .src("src/assets/sass/App.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/assets/css"));
});
gulp.task("watch", () => {
  gulp.watch("src/assets/sass/**/*.scss", gulp.series("sass"));
});
gulp.task("default", gulp.series("watch"));
