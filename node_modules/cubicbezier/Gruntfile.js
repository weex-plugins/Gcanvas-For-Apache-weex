'use strict';

module.exports = function (grunt) {
    // Project configuration.
    var path = require('path');

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        assetsPath: 'assets',
        srcPath: 'src',
        libPath: 'lib',
        distPath: 'build',

        clean: ['<%= distPath%>/*'],
        
        copy : {
            package: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['package.json'],
                    dest: '<%= distPath %>'
                }]
            }
        },

        depconcat: {
            main: {
                src: ['<%= srcPath%>/cubicbezier.js'],
                dest: '<%= distPath%>/cubicbezier.debug.js'
            }
        },

        uglify: {
            main:{
                files: [{
                    expand: true,
                    cwd: '<%= distPath%>',
                    src: ['**/*.debug.js'],
                    dest: '<%= distPath %>',
                    ext: '.js'
                }]
            }
        },

        watch: {

            js: {
                files: ['<%= srcPath %>/*.js'],
                tasks: ['depconcat', 'uglify']
            }

        },

        commonizor: {
            main: {
                files: {
                    '<%= distPath%>/cubicbezier.common.js': ['<%=distPath%>/cubicbezier.js']
                }
            }
        }

    });

    // grunt plugins
    grunt.loadNpmTasks('grunt-depconcat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-commonizor');

    // Default grunt
    grunt.registerTask('default', ['clean', 'copy','depconcat','uglify', 'commonizor']);
    grunt.registerTask('dev', ['clean', 'depconcat', 'uglify', 'watch']);
};