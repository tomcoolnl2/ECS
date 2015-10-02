
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-include-source');

  grunt.config('includeSource', {
    options : {
      basePath : '',
      baseUrl : '',
      templates : {
        html : {
          js : '<script src="{filePath}"></script>'
        }
      }
    },
    target : {
      files : {
        'index.html' : 'tpl/index.tpl.html'
      }
    }
  });

  grunt.registerTask('default', ['includeSource:target']);

};
