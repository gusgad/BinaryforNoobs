module.exports = function(grunt) {
 
  grunt.initConfig({
 // postcss
    postcss: {
 
      options: {
        processors: [
          require('autoprefixer')(),
          require('cssnext')(),
          require('precss')()
        ]
      },
      dist: {
         src: 'style.css',
         dest: 'main.css'
      }
 
    },
      
//imagemin
      imagemin: {
         dynamic: {
            options: {
               optimizationLevel: 3,
               cache: false
            },
            files: [{
               // Set to true to enable following options
               expand: true,
               // cwd: current working directory
               cwd: "img",
               src: ["*.{png,jpg,gif}"],
               dest: "images_optimized"
            }]
         }
      },
      
//uncss
      uncss: {
          dist: {
            files: {
              'assets/css/style.css': ['index.html']
            }
          }
      },
  
    
//sass
      sass: {
		dist: {
			files: {
				'assets/css/style.css': 'assets/css/style.sass'
			}
		}
	},
      
//watch
      watch: {
			sass: {
				files: 'assets/css/*.sass',
				tasks: ['sass']
			},
            jade: {
                files: 'assets/*.jade',
                tasks: ['jade']
            }
		},
      
//jade
       jade: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              "index.html": ["assets/*.jade"]
            }
          }
       },
      
//server
      connect: {
        server: {
            options: {
                keepalive: true,
                debug: true,
                base: "",
                open: true
            }
        }
      },
      
//css min
      cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'main.css': ['style.css']
            }
          }
      }
});
    
    
    
    
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  grunt.registerTask('default', ['watch']);
};
