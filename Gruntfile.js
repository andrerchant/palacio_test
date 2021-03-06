module.exports = function(grunt){

  grunt.initConfig({

    concat: {
      basic: {
        src: ['prod/less/*.less'],
        dest: 'assets/css/general.less',
      },
    },

    less: {
      development: {
        files: {
          'assets/css/totalmente.css': 'assets/css/general.less'
        }
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/totalmente.min.css': ['assets/css/totalmente.css']
        }
      }
    },

    watch: {
      scripts: {
        files: ['prod/less/*.less'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },    

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','less','cssmin']);
  grunt.registerTask('observar', ['watch:scripts']);

};
