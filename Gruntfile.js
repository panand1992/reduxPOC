const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
    grunt.initConfig({
        clean: ['public/dist'],
        sass: {                              
            dist: {                           
                files: [{
                    expand: true,
                    cwd: 'public/app/styles/scss',
                    src: ['main.scss'],
                    dest: 'public/dist/styles/css/',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'public/app/fonts',
                src: '**',
                dest: 'public/dist/fonts/',
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/dist/styles/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/dist/styles/css',
                    ext: '.min.css'
                }]
            }
        },
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('prod', ['clean', 'copy:main', 'sass:dist', 'cssmin', 'webpack:prod']);
};