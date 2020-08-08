const gulp = require("gulp"),
   server = require("browser-sync").create(),
   scss = require("gulp-sass"),
   plumber = require("gulp-plumber"),
   csso = require("gulp-csso"),
   minify = require("gulp-minify"),
   rename = require("gulp-rename"),
   imagemin = require("gulp-imagemin"),
   svgmin = require("gulp-svgmin"),
   webp = require("gulp-webp"),
   postcss = require("gulp-postcss"),
   autoprefixer = require("autoprefixer"),
   del = require("del");

gulp.task("style", () => {
   return gulp
      .src("source/styles/styles.scss")
      .pipe(plumber())
      .pipe(
         scss({
            outputStyle: "expanded",
         }).on("error", scss.logError)
      )
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest("app/styles/"))
      .pipe(csso())
      .pipe(rename("styles.min.css"))
      .pipe(gulp.dest("app/styles/"))
      .pipe(server.stream());
});

gulp.task("js", () => {
   return gulp
      .src("source/scripts/*.js")
      .pipe(
         minify({
            ext: {
               min: ".min.js",
            },
            noSource: true,
         })
      )
      .pipe(gulp.dest("app/scripts/"));
});

gulp.task("image", () => {
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

gulp.task("webp", () => {
   return gulp
      .src("source/images/cards/**/*.{png,jpg}")
      .pipe(webp())
      .pipe(gulp.dest("app/images/cards/"));
});

gulp.task("svg", () => {
   return gulp
      .src("source/images/**/*.svg")
      .pipe(
         svgmin({
            plugins: [
               {
                  cleanupIDs: false,
               },
            ],
         })
      )
      .pipe(gulp.dest("app/images/"));
});

gulp.task("html", () => {
   return gulp.src("index.html").pipe(server.stream());
});

gulp.task("serve", () => {
   server.init({
      server: "./",
   });

   gulp.watch("source/styles/**/*.scss", gulp.series("style"));
   gulp.watch("index.html", gulp.series("html"));
});

gulp.task("clean", () => {
   return del("app/");
});

gulp.task("build", gulp.series("clean", "style", "js", "svg", "image", "webp"));
