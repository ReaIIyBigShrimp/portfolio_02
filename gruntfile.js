// The "wrapper" function
module.exports = function(grunt) {
    

    // Load first, before init config
    // Loads all grunt plugins
    require('load-grunt-config')(grunt);
    
    // Do grunt-related things in here
    grunt.initConfig({
        // Metadata from the this file
        pkg: grunt.file.readJSON('package.json'),

        /*
        Grunt Sass
        Compile Sass to CSS
        https://www.npmjs.com/package/grunt-sass
        */
        sass: {
            
            options: {
                // Reference to Sass source files
                // for debugging.
                sourceMap: true
            },
            dist: {
                files: {
                    // Destination : Source
                    'css/style.css': 'assets/sass/style.scss'
                }
            }
        },

        /*
        * Grunt Contrib Watch
        * Monitor files and execute tasks
        * https://www.npmjs.com/package/grunt-contrib-watch
        */

        watch: {
            sass: {
                files: [
                    'assets/sass/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts: {
                files: [
                    'assets/js/*.js'
                ],
                tasks: [
                    'uglify'
                ]
            }
        },
        
        /*
        Grunt Uglify
        Minimises JS file
        https://www.npmjs.com/package/grunt-contrib-uglify
        */
        uglify: {
            my_target: {
                files: {
                    'js/script.js' : ['assets/js/script.js']
                }
            }
        }
    });
    // Project and task configuration
    
    // Loading Grunt plugins and tasks
    
    // Custom tasks

    // Default task(s).
    // Runs 'watch' function when alongside the 'grunt' command
    grunt.registerTask('default', ['watch']);
};




