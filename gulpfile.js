
const gulp = require('gulp'),

    sass = require('gulp-sass'),

    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>

    gulp.src('./scss/*.scss')

        .pipe(sass({

            outputStyle: 'compressed'

        }))

        .pipe(autoprefixer({

            versions: ['last 2 browsers']

        }))

        .pipe(gulp.dest('./css'))

);

gulp.task('default', () => {

    gulp.watch(['./scss/*.scss', './scss/**/*.scss' ], gulp.series('sass'));

});