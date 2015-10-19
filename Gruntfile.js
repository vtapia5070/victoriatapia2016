module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: [
          'public/lib/*.js',
          'public/javascripts/*.js'
        ],
        dest: 'public/dist/concat.js'
      }
    },

    uglify: {
      dist: { 
        src: [
           'public/dist/concat.js'], 
        dest: 'public/dist/uglify.js'
      }
    },

    jshint: {
      files: [
      'public/javascripts/*.js'
      ],
    },

    cssmin: {
      dist: {
        src: [
          'public/stylesheets/*.css',
          'bootstrap.css'
        ], 
        dest:'public/dist/cssmin.css'
      }
    },

    watch: {
      source: {
        files: ['public/javascripts/*.js'],
        tasks: [
        'jshint'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  // grunt.registerTask('server-dev', function (target) {
  //   var nodemon = grunt.util.spawn({
  //     cmd: 'grunt',
  //     grunt: true,
  //     args: 'nodemon'
  //   });
  //   nodemon.stdout.pipe(process.stdout);
  //   nodemon.stderr.pipe(process.stderr);

  // });

  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);

  // grunt.registerTask('upload', function(n) {
  //   if(grunt.option('prod')) {
  //     grunt.task.run([ 'shell:prodServer' ]);
  //   } else {
  //     grunt.task.run([ 'server-dev' ]);
  //   }
  // });

  // grunt.registerTask('default', function() {
  //   grunt.task.run(["watch"]);
  // });

  // grunt.registerTask('deploy', [
  //   'build',
  //   'upload'
  //   ]);

};