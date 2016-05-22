'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  var js = {
    core: [
      'execute.js',
      'systems.js',
      'system.js',
      'system/index.js',
    ],
  }; // EOF js

  var config = {

    pkg: pkg,

    jscs: {
      options: {
        config: '.jscsrc',
      }, // EOF options
      src: [
        // Systems js:
        './systems.js',
        './execute.js',

        // All System js:
        'system/**/*.js',

        // Tests:
        'test/**/*.js',
      ], // EOF src
    },  // EOF jscs

  }; // EOF config

  grunt.initConfig(config);

  grunt.registerTask('test:code-style', ['jscs']);
  grunt.registerTask('test', ['test:code-style']);

}; // EOF module