module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['styles.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            build: {
                src: ['js/*.js'],
                dest: 'js/app.min.js'
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: 'js/*.js',
                tasks: ['uglify']
            },
            options: {
                reload: true
            }
        }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
    grunt.registerTask('dev', ['watch']);
};