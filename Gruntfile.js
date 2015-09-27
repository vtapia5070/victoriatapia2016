module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: [
      'public/javascripts/*.js'
      ],
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

  // Don't worry about this one - it just works. You'll see when you run `grunt`.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////


  grunt.registerTask('default', function() {
    grunt.task.run(["watch"]);
  });

};