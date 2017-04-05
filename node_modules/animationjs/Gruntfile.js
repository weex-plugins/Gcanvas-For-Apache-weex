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
        apidocPath: 'api',

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
                src: ['<%= srcPath%>/animation.js'],
                dest: '<%= distPath%>/animation.debug.js'
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

        commonizor: {
            main: {
                files: {
                    '<%= distPath%>/animation.common.js': ['<%=distPath%>/animation.js']
                }
            }
        },
        
        watch: {

            js: {
                files: ['<%= srcPath %>/*.js'],
                tasks: ['depconcat', 'uglify']
            }
        },

        commonizor: {
            js: {
                files: [{
                    expand: true,
                    cwd: '<%=distPath%>',
                    src: ['animation.js'],
                    dest: '<%=distPath%>',
                    ext: '.common.js'
                }]
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

    grunt.registerTask('default', ['clean', 'copy','depconcat','uglify', 'commonizor']);
    grunt.registerTask('dev', ['clean', 'depconcat', 'uglify', 'watch']);

};