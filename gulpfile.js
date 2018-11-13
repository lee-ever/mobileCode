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
	gulp.src('./src/signup/ejs/**')
		.pipe(plumber())
		.pipe(ejs({},{},{ext: '.html'}))
		.pipe(gulp.dest('./dist/signup/html/'));
});

gulp.task('compass', function() {
	return gulp.src('./src/signup/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(plumber())
		.pipe(gulp.dest('./dist/signup/css/'))
		.pipe(reload({
			stream: true
		}))
});

gulp.task('testImagemin', function() {
	gulp.src('./src/signup/images/*.{png,jpg,gif,ico}')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/signup/images/'));
});
gulp.task('jsmin', function() {
    gulp.src('./src/signup/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/signup/script/'))
})

gulp.task('browserSync', function() {
	var files = [
		'./dist/signup/css/**',
		"./src/signup/ejs/**",
		"./src/signup/script/**",
	];
	browserSync.init(files, {
		server: {
			baseDir: "./dist/signup/"
		}
	});
});

gulp.task('default', function() {
	gulp.start(["compass", "ejs", "browserSync", "testImagemin", "jsmin"]);
	gulp.watch(["src/signup/ejs/**"], ["ejs"]);
	gulp.watch(["src/signup/sass/**"], ["compass"]);
	gulp.watch(["src/signup/img/**"], ["testImagemin"]);
	gulp.watch(['src/signup/script/**'],['jsmin']);
});