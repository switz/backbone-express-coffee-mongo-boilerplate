// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {

  grunt.initConfig({

    // The clean task ensures all files are removed from the dump/ directory so
    // that no files linger from previous builds.
    clean: ["dump/","production/"],

    coffee: {
      app: {
        src: ['app/**/*.coffee'],
        dest: 'dump/javascript',
        options: {
          bare: true,
          preserve_dirs: true
        }
      }
    },

    // The handlebars task compiles all application templates into JavaScript
    // functions using Handlebars templating engine.
    //
    // Since this task defaults to writing to the same file as the jst task,
    // edit the debug task replacing jst with handlebars.
    //
    // The concat task depends on this file to exist, so if you decide to
    // remove this, ensure concat is updated accordingly.
    handlebars: {
      all: {
        options: {
          wrapped: true,
          processName: function(path) {
            var pieces = path.split("/");
            return pieces[pieces.length - 1].replace(/\.hbs$/, '');
          }
        },
        files: {
          "dump/javascript/templates.js": ["app/views/templates/*.hbs"]
        }
      }
    },

    // The concatenate task is used here to merge the almond require/define
    // shim and the templates into the application code.  It's named
    // dump/debug/require.js, because we want to only load one script file in
    // index.html.
    concat: {
      app: {
        src: [
          "dump/javascript/templates.js",
          "dump/javascript/app/init.js",
          "dump/javascript/app/application.js",
          "dump/javascript/app/router.js",
          "dump/javascript/app/utils/**/*.js",
          "dump/javascript/app/controllers/**/*.js",
          "dump/javascript/app/models/**/*.js",
          "dump/javascript/app/collections/**/*.js",
          "dump/javascript/app/views/base/*.js",
          "dump/javascript/app/views/*.js"
        ],
        dest: "public/javascript/app.js"
      },
      vendor: {
        src: [
          "vendor/scripts/jquery-1.8.3.js",
          "vendor/scripts/underscore-1.4.3.js",
          "vendor/scripts/backbone-0.9.9.js",
          "vendor/scripts/handlebars.js",
          "vendor/scripts/handlebars-helpers.js",
          "vendor/scripts/console-helper.js",
          "vendor/scripts/jquery.serializeToJSON.js"
        ],
        dest: "public/javascript/vendor.js"
      }
    },

    // This task uses the MinCSS Node.js project to take all your CSS files in
    // order and concatenate them into a single CSS file named index.css.  It
    // also minifies all the CSS as well.  This is named index.css, because we
    // only want to load one stylesheet in index.html.
    mincss: {
      "public/css/index.css": [
        "public/css/index.css",
      ]
    },

    // The stylus task is used to compile Stylus stylesheets into a single
    // CSS file for debug and release deployments.
    stylus: {
      compile: {
        files: {
          'public/css/index.css': [
            'app/views/styles/bootstrap.styl',
            'app/views/styles/application.styl',
            'app/views/styles/header.styl',
            'app/views/styles/footer.styl',
            'app/views/styles/home-page.styl',
            'app/views/styles/login-page.styl'
          ],
        }
      }
    },

    min: {
      "public/javascript/tweezer.js": [
        "public/javascript/vendor.js",
        "public/javascript/app.js"
      ]
    },

    // The watch task can be used to monitor the filesystem and execute
    // specific tasks when files are modified.  By default, the watch task is
    // available to compile stylus templates if you are unable to use the
    // runtime builder (use if you have a custom server, PhoneGap, Adobe Air,
    // etc.)
    watch: {
      compile: {
        files: ['app/**/*.coffee'],
        tasks: ['compile:coffee']
      },
      vendor: {
        files: ['vendor/**/*.js'],
        tasks: ['concat:vendor', 'clean']
      },
      handlebars: {
        files: ['app/views/templates/*.hbs'],
        tasks: ['compile:coffee']
      },
      stylus: {
        files: ['app/views/styles/**/*.styl'],
        tasks: ['stylus']
      }
    },
    copy: {
       production: {
        files: [
          {src: ['public/css/*'], dest: 'production/'},
          {src: ['public/javascript/app.min.js'], dest: 'production/'},
          {src: ['public/img/*'], dest: 'production/img/'},
          {src: ['public/index.html'], dest: 'production/index.html'},
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-mincss');


  grunt.registerTask("compile", "coffee handlebars concat stylus clean");
  grunt.registerTask("compile:coffee", "coffee handlebars concat clean");
  grunt.registerTask("production", "coffee handlebars concat min stylus mincss clean copy");
};
