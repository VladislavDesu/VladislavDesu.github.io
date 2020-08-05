const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const svgmin = require("gulp-svgmin");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const minify = require("gulp-minify");
const del = require("del");


gulp.task("minjs", () => {
   return gulp.src("source/scripts/*.js")
      .pipe(minify({
         ext: {
            min: ".min.js"
         },
         noSource: true
      }))
      .pipe(gulp.dest("app/scripts/"));
});

gulp.task("mincss", () => {
   return gulp.src("source/styles/styles.css")
      .pipe(csso())
      .pipe(rename("styles.min.css"))
      .pipe(gulp.dest("app/styles/"));
});

gulp.task("minimages", () => {
   return gulp
      .src("source/images/**/*.{png,jpg}")
      .pipe(
         imagemin([
            imagemin.optipng({
               optimizationLevel: 3,
            }),
            imagemin.mozjpeg({
               progressive: true,
            }),
         ])
      )
      .pipe(gulp.dest("app/images/"));
});

gulp.task("minsvg", () => {
   return gulp
      .src("source/images/**/*.svg")
      .pipe(svgmin({
         plugins: [{
            cleanupIDs: false
         }]
      }))

      .pipe(gulp.dest("app/images/"));
});


gulp.task("clean", () => {
   return del("app/");
});

gulp.task("build", gulp.series(
   "clean",
   "mincss",
   "minjs",
   "minsvg",
   "minimages"
));