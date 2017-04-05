var gulp = require('gulp')
var named = require('vinyl-named')
var gulpWebpack = require('gulp-webpack')
var rimraf = require('gulp-rimraf')
var jscs = require('gulp-jscs')

gulp.task('default', ['build'])

var sourceFiles = ['./src/index.js']
var stylesFiles = ['./src/styles/*.scss']
var distPath = ['./build']
var outputName = 'modal'

gulp.task('clean', function () {
  return gulp.src(distPath, { read: false })
    .pipe(rimraf({ force: true }))
})

gulp.task('build', ['clean'], function () {
  return gulp.src(sourceFiles)
    .pipe(named(function (file) {
      return outputName
    }))
    .pipe(gulpWebpack({
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest('build/'))
})

gulp.task('watch', ['clean'], function () {
  return gulp.src(sourceFiles)
    .pipe(named(function (file) {
      return outputName
    }))
    .pipe(gulpWebpack({
      watch: true,
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('jscs', function () {
  return gulp.src([
      'src/**/*.js',
      '*.js',
      'test/**/*.js'
    ])
    .pipe(jscs())
    .pipe(jscs.reporter())
})
