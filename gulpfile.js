var gulp = require('gulp'),
	sass = require('gulp-sass'),
	compass = require('gulp-compass'),
	ejs = require('gulp-ejs'),
	imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;
	plumber = require('gulp-plumber');
	uglify = require('gulp-uglify');


gulp.task('ejs', function() {
	gulp.src('./src/single/ejs/**')
		.pipe(plumber())
		.pipe(ejs({},{},{ext: '.html'}))
		.pipe(gulp.dest('./dist/single/html/'));
});

gulp.task('compass', function() {
	return gulp.src('./src/single/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(plumber())
		.pipe(gulp.dest('./dist/single/css/'))
		.pipe(reload({
			stream: true
		}))
});

gulp.task('testImagemin', function() {
	gulp.src('./src/single/images/*.{png,jpg,gif,ico}')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/single/images/'));
});
gulp.task('jsmin', function() {
    gulp.src('./src/single/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/single/script/'))
})

gulp.task('browserSync', function() {
	var files = [
		'./dist/single/css/**',
		"./src/single/ejs/**",
		"./src/single/script/**",
	];
	browserSync.init(files, {
		server: {
			baseDir: "./dist/single/"
		}
	});
});

gulp.task('default', function() {
	gulp.start(["compass", "ejs", "browserSync", "testImagemin", "jsmin"]);
	gulp.watch(["src/single/ejs/**"], ["ejs"]);
	gulp.watch(["src/single/sass/**"], ["compass"]);
	gulp.watch(["src/single/img/**"], ["testImagemin"]);
	gulp.watch(['src/single/script/**'],['jsmin']);
});