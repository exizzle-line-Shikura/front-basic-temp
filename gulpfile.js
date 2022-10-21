const gulp = require('gulp')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename');
const fs = require('fs')

// ----------------------------------------- EJS

const src = './_src'

gulp.task('ejs', (done) => {
    const jsonData = '_src/assets/json/_pages.json';
    const json = JSON.parse(fs.readFileSync(jsonData));
    const pagesDir = json;
    const template = '_src/template/template.ejs';

    for (let i = 0; i < pagesDir.length; i++) {
      gulp.src(template)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ejs({
          jsonData: pagesDir[i],
          dir: pagesDir[i].dir
        }))
        .pipe(rename((path) => {
          path.dirname += pagesDir[i].dir;
          path.basename = pagesDir[i].name;
          path.extname = '.html';
        }))
        .pipe(gulp.dest('./dist'));
    }
    done();
})

gulp.task('copy', (done) => {
  gulp.src('_src/assets/img/**')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulp.dest(`./dist/assets/img`));
  done();
})

gulp.task('json', (done) => {
  gulp.src('_src/assets/json/**')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulp.dest(`./dist/assets/json`));
  done();
})

gulp.task('watch', (done) => {
  gulp.watch(src + '/template/**/*.ejs', gulp.series('ejs'));
  gulp.watch(src + '/assets/img/**', gulp.series('copy'));
  gulp.watch(src + '/assets/json/**', gulp.series('json'));
  done();
})

gulp.task('default', gulp.series('ejs', 'copy', 'json', 'watch'))
gulp.task('build', gulp.series('ejs', 'copy', 'json'))