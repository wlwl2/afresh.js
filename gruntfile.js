module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/sass',
          src: ['style.scss'],
          dest: 'public/css',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['public/sass/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
