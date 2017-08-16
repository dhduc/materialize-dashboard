module.exports = function (grunt) {
    var key;
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
        },
        eslint: {
            options: {
                configFile: '.eslintrc.js'
            },
            target: ['js/*.js']
        }
    });

    // Loading dependencies
    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    // Register Grunt tasks
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('ci', ['eslint']);
};