const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const gulpClean = require("gulp-clean-css");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const image = require("gulp-image");

// compile sass file to CSS
gulp.task("sass", function () {
  return (
    gulp
      .src("./public/scss/*.scss")
      .pipe(gulpSass())
      // .pipe(gulpAutoprefixer({
      //     browsers: 'last 6 versions'
      // }))
      .pipe(
        gulpClean({
          compatibility: "ie11",
        })
      )
      .pipe(gulp.dest("./public/css/"))
  );
});

// concat all css files in one file
gulp.task("css", function () {
  // Tache permettant de minifier toutes les feuilles de style en un seul fichier min "style.min.css"
  return (
    gulp
      .src([
        "./public/css/fontawesome-all.min.css",
        "./public/css/fa-brands.min.css",
        "./public/css/fa-light.min.css",
        "./public/css/fa-regular.min.css",
        "./public/css/fa-solid.min.css",
        "./public/css/font-face.css",
        "./public/css/base.css",
      ])
      // .pipe(gulpAutoprefixer({ // Tache ajoutant les autopréfixer
      //     browsers: 'last 6 versions'
      // }))
      .pipe(
        gulpClean({
          compatibility: "ie11",
        })
      )
      .pipe(concat("style.min.css")) // On concaténe tous nos fichiers css en un fichier css "style.min.js"
      .pipe(gulp.dest("./public/dist/css/"))
  );
});

// minify js files
gulp.task("js", function () {
  return gulp
    .src("./public/js/*.js")

    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./public/dist/js/"));
  // .pipe(uglify())
  // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
});

// Fonts
gulp.task("fonts", function () {
  return gulp.src("./public/fonts/*").pipe(gulp.dest("./public/dist/fonts/"));
});

// Minify Images
gulp.task("image", function () {
  return gulp
    .src("./public/images/**/*")
    .pipe(image())
    .pipe(gulp.dest("./public/dist/images/"));
});

gulp.task("watch", function () {
  // Détecter tous les changements en tapant la commande "gulp watch" dans le terminal
  gulp.watch("./public/scss/*.scss", gulp.series("sass"));
  gulp.watch("./public/css/*", gulp.series("css"));
  gulp.watch("./public/js/*", gulp.series("js"));
  gulp.watch("./public/fonts/*", gulp.series("fonts"));
});

gulp.task("default", gulp.series("sass", "css", "js", "fonts", "image"));
