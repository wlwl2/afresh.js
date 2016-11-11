module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        src: ['sass/*.scss'],
        dest: 'css/style.css',
      },
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['sass/*.scss'],
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