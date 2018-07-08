module.exports = function(grunt){

  grunt.initConfig({

    concat: {
      basic: {
        src: ['prod/less/*.less'],
        dest: 'dev/assets/css/general.less',
      },
    },

    less: {
      development: {
        files: {
          'dev/assets/css/totalmente.css': 'dev/assets/css/general.less'
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
          'dev/assets/css/totalmente.min.css': ['dev/assets/css/totalmente.css']
        }
      }
    },


    watch: {
      css: {
        files: 'prod/less/*.less',
        tasks: ['cocinando'],
        // options: {
        //   livereload: true,
        // },
      },
    },

    // uglify: {
    //     my_target: {
    //       files: {
    //         'css/totalmente.min.css': ['css/totalmente.css']
    //       }
    //     }
    //   }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('cocinando', ['concat','less','cssmin']);

};
