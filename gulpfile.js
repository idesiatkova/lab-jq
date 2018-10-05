var gulp = require('gulp'),
    sass = require('gulp-sass');
    bless = require('gulp-bless'),
    sourcemaps = require('gulp-sourcemaps'),
    prefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'), // minify CSS
    include = require("gulp-include"),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

var path = {
    src: { 
        html: 'templates/*.html',
        js: '',
        scss: 'assets/styles/styles.scss'
    },
    build: { 
        html: '',
        js: '',
        css: ''
    },
    watch: { 
        html: '',
        js: '',
        scss: 'assets/styles/'
    },
    clean: './build'
};

gulp.task('html', function () {
    gulp.src(path.src.html) // берем файлы по нужному пути
        .pipe(include())
        .on('error', notify.onError({
            message: 'Error: <%= error.message %>',
            title: "html",
            sound: false
        }))
        .pipe(gulp.dest(path.build.html)); // складываем их в корень
});

gulp.task('sass', function () {
        gulp.src(path.src.scss)
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sass()
                .on('error', notify.onError({
                    message: 'Error: <%= error.message %>',
                    title: "Sass",
                    sound: false
                }))
            )
            .pipe(prefixer({
                browsers: ['last 2 versions', 'ie >= 9'],
            }))
            .pipe(cleanCSS())
            .pipe(bless({suffix: '-part'}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(path.build.css));
    });

gulp.task('start', function () {
    browserSync.init({
        port: 3000,
        open: true,
        notify: false,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('server-reload', ['sass', 'html'], function () {
    browserSync.init({
        port: 3000,
        open: true,
        notify: false,
        reloadThrottle: 200,
        reloadDebounce: 1500,
        server: {
            baseDir: "./"
        }
    });
    gulp.watch([path.watch.scss + '*.scss'], { interval: 2000 }, ['sass']);
    gulp.watch(path.build.css + '*.css').on("change", browserSync.reload);
    gulp.watch([path.watch.html + '*.html'], ['html']).on('change', browserSync.reload);
    gulp.watch([path.watch.js + '*.js']).on('change', browserSync.reload);
});

gulp.task('server', ['sass', 'html', 'start']);
gulp.task('run', ["server-reload"]); 
gulp.task('default', ["server"]);