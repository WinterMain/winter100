---
layout: question
title:  Yeoman中使用Sass文件的工作流程是什么？
date:   2020-03-19T04:43:25.000Z
description: 我尝试使用yeoman，但我不知道如何将其与自己的sass文件一起使用。用grunt server 监视Sass文件并将其编译为.tmp/...
img: 
author: 村村达蒙
category: question
answer: 1
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用yeoman，但我不知道如何将其与自己的sass文件一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font></p>

<p><code>grunt server</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">监视Sass文件并将其编译为</font></font></p>

<p><code>.tmp/styles/</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是除了编译样式表以外，没有任何参考 </font></font><code>&lt;link rel="stylesheet" href="styles/main.css"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，在开发过程中使用index.html中的已编译sass文件的推荐方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font><code>grunt server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果我将样式更改</font></font><code>app/styles/my.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>.tmp/styles/my.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则该</font><font style="vertical-align: inherit;">样式</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">被覆盖，并且位于服务器外部（localhost：9000）。</font><font style="vertical-align: inherit;">因此，不可能将其链接到中</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着</font></font><code>grunt build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切内</font></font><code>main.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括</font></font><code>my.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但发展过程中，我不知道如何使用我自己的SASS文件</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能给我一个简单的例子吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是默认的yeoman安装。</font><font style="vertical-align: inherit;">我这样做：</font></font></p>

<ol>
<li><code>yo angular test</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我加 </font></font><code>app/styles/style.sass</code></li>
<li><code>grunt server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译</font></font><code>style.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成</font></font><code>.tmp/styles/style.css</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我不知道如何</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在html中</font><font style="vertical-align: inherit;">包含</font><font style="vertical-align: inherit;">它</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（很抱歉，这可能是一个愚蠢的问题，但我是风俗新手，也很咕also）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是来自yeoman的Gruntfile.js：</font></font></p>

<pre class="lang-js prettyprint-override"><code>'use strict';<font></font>
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;<font></font>
var mountFolder = function (connect, dir) {<font></font>
  return connect.static(require('path').resolve(dir));<font></font>
};<font></font>
<font></font>
module.exports = function (grunt) {<font></font>
  // load all grunt tasks<font></font>
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);<font></font>
<font></font>
  // configurable paths<font></font>
  var yeomanConfig = {<font></font>
    app: 'app',<font></font>
    dist: 'dist'<font></font>
  };<font></font>
<font></font>
  try {<font></font>
    yeomanConfig.app = require('./component.json').appPath || yeomanConfig.app;<font></font>
  } catch (e) {}<font></font>
<font></font>
  grunt.initConfig({<font></font>
    yeoman: yeomanConfig,<font></font>
    watch: {<font></font>
      coffee: {<font></font>
        files: ['&lt;%= yeoman.app %&gt;/scripts/{,*/}*.coffee'],<font></font>
        tasks: ['coffee:dist']<font></font>
      },<font></font>
      coffeeTest: {<font></font>
        files: ['test/spec/{,*/}*.coffee'],<font></font>
        tasks: ['coffee:test']<font></font>
      },<font></font>
      compass: {<font></font>
        files: ['&lt;%= yeoman.app %&gt;/styles/{,*/}*.{scss,sass}'],<font></font>
        tasks: ['compass']<font></font>
      },<font></font>
      livereload: {<font></font>
        files: [<font></font>
          '&lt;%= yeoman.app %&gt;/{,*/}*.html',<font></font>
          '{.tmp,&lt;%= yeoman.app %&gt;}/styles/{,*/}*.css',<font></font>
          '{.tmp,&lt;%= yeoman.app %&gt;}/scripts/{,*/}*.js',<font></font>
          '&lt;%= yeoman.app %&gt;/images/{,*/}*.{png,jpg,jpeg,gif,webp}'<font></font>
        ],<font></font>
        tasks: ['livereload']<font></font>
      }<font></font>
    },<font></font>
    connect: {<font></font>
      livereload: {<font></font>
        options: {<font></font>
          port: 9000,<font></font>
          // Change this to '0.0.0.0' to access the server from outside.<font></font>
          hostname: 'localhost',<font></font>
          middleware: function (connect) {<font></font>
            return [<font></font>
              lrSnippet,<font></font>
              mountFolder(connect, '.tmp'),<font></font>
              mountFolder(connect, yeomanConfig.app)<font></font>
            ];<font></font>
          }<font></font>
        }<font></font>
      },<font></font>
      test: {<font></font>
        options: {<font></font>
          port: 9000,<font></font>
          middleware: function (connect) {<font></font>
            return [<font></font>
              mountFolder(connect, '.tmp'),<font></font>
              mountFolder(connect, 'test')<font></font>
            ];<font></font>
          }<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    open: {<font></font>
      server: {<font></font>
        url: 'http://localhost:&lt;%= connect.livereload.options.port %&gt;'<font></font>
      }<font></font>
    },<font></font>
    clean: {<font></font>
      dist: ['.tmp', '&lt;%= yeoman.dist %&gt;/*'],<font></font>
      server: '.tmp'<font></font>
    },<font></font>
    jshint: {<font></font>
      options: {<font></font>
        jshintrc: '.jshintrc'<font></font>
      },<font></font>
      all: [<font></font>
        'Gruntfile.js',<font></font>
        '&lt;%= yeoman.app %&gt;/scripts/{,*/}*.js'<font></font>
      ]<font></font>
    },<font></font>
    karma: {<font></font>
      unit: {<font></font>
        configFile: 'karma.conf.js',<font></font>
        singleRun: true<font></font>
      }<font></font>
    },<font></font>
    coffee: {<font></font>
      dist: {<font></font>
        files: {<font></font>
          '.tmp/scripts/coffee.js': '&lt;%= yeoman.app %&gt;/scripts/*.coffee'<font></font>
        }<font></font>
      },<font></font>
      test: {<font></font>
        files: [{<font></font>
          expand: true,<font></font>
          cwd: '.tmp/spec',<font></font>
          src: '*.coffee',<font></font>
          dest: 'test/spec'<font></font>
        }]<font></font>
      }<font></font>
    },<font></font>
    compass: {<font></font>
      options: {<font></font>
        sassDir: '&lt;%= yeoman.app %&gt;/styles',<font></font>
        cssDir: '.tmp/styles',<font></font>
        imagesDir: '&lt;%= yeoman.app %&gt;/images',<font></font>
        javascriptsDir: '&lt;%= yeoman.app %&gt;/scripts',<font></font>
        fontsDir: '&lt;%= yeoman.app %&gt;/styles/fonts',<font></font>
        importPath: '&lt;%= yeoman.app %&gt;/components',<font></font>
        relativeAssets: true<font></font>
      },<font></font>
      dist: {},<font></font>
      server: {<font></font>
        options: {<font></font>
          debugInfo: true<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    concat: {<font></font>
      dist: {<font></font>
        files: {<font></font>
          '&lt;%= yeoman.dist %&gt;/scripts/scripts.js': [<font></font>
            '.tmp/scripts/{,*/}*.js',<font></font>
            '&lt;%= yeoman.app %&gt;/scripts/{,*/}*.js'<font></font>
          ]<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    useminPrepare: {<font></font>
      html: '&lt;%= yeoman.app %&gt;/index.html',<font></font>
      options: {<font></font>
        dest: '&lt;%= yeoman.dist %&gt;'<font></font>
      }<font></font>
    },<font></font>
    usemin: {<font></font>
      html: ['&lt;%= yeoman.dist %&gt;/{,*/}*.html'],<font></font>
      css: ['&lt;%= yeoman.dist %&gt;/styles/{,*/}*.css'],<font></font>
      options: {<font></font>
        dirs: ['&lt;%= yeoman.dist %&gt;']<font></font>
      }<font></font>
    },<font></font>
    imagemin: {<font></font>
      dist: {<font></font>
        files: [{<font></font>
          expand: true,<font></font>
          cwd: '&lt;%= yeoman.app %&gt;/images',<font></font>
          src: '{,*/}*.{png,jpg,jpeg}',<font></font>
          dest: '&lt;%= yeoman.dist %&gt;/images'<font></font>
        }]<font></font>
      }<font></font>
    },<font></font>
    cssmin: {<font></font>
      dist: {<font></font>
        files: {<font></font>
          '&lt;%= yeoman.dist %&gt;/styles/main.css': [<font></font>
            '.tmp/styles/{,*/}*.css',<font></font>
            '&lt;%= yeoman.app %&gt;/styles/{,*/}*.css'<font></font>
          ]<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    htmlmin: {<font></font>
      dist: {<font></font>
        options: {<font></font>
          /*removeCommentsFromCDATA: true,<font></font>
          // https://github.com/yeoman/grunt-usemin/issues/44<font></font>
          //collapseWhitespace: true,<font></font>
          collapseBooleanAttributes: true,<font></font>
          removeAttributeQuotes: true,<font></font>
          removeRedundantAttributes: true,<font></font>
          useShortDoctype: true,<font></font>
          removeEmptyAttributes: true,<font></font>
          removeOptionalTags: true*/<font></font>
        },<font></font>
        files: [{<font></font>
          expand: true,<font></font>
          cwd: '&lt;%= yeoman.app %&gt;',<font></font>
          src: ['*.html', 'views/*.html'],<font></font>
          dest: '&lt;%= yeoman.dist %&gt;'<font></font>
        }]<font></font>
      }<font></font>
    },<font></font>
    cdnify: {<font></font>
      dist: {<font></font>
        html: ['&lt;%= yeoman.dist %&gt;/*.html']<font></font>
      }<font></font>
    },<font></font>
    ngmin: {<font></font>
      dist: {<font></font>
        files: [{<font></font>
          expand: true,<font></font>
          cwd: '&lt;%= yeoman.dist %&gt;/scripts',<font></font>
          src: '*.js',<font></font>
          dest: '&lt;%= yeoman.dist %&gt;/scripts'<font></font>
        }]<font></font>
      }<font></font>
    },<font></font>
    uglify: {<font></font>
      dist: {<font></font>
        files: {<font></font>
          '&lt;%= yeoman.dist %&gt;/scripts/scripts.js': [<font></font>
            '&lt;%= yeoman.dist %&gt;/scripts/scripts.js'<font></font>
          ],<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    copy: {<font></font>
      dist: {<font></font>
        files: [{<font></font>
          expand: true,<font></font>
          dot: true,<font></font>
          cwd: '&lt;%= yeoman.app %&gt;',<font></font>
          dest: '&lt;%= yeoman.dist %&gt;',<font></font>
          src: [<font></font>
            '*.{ico,txt}',<font></font>
            '.htaccess',<font></font>
            'components/**/*',<font></font>
            'images/{,*/}*.{gif,webp}'<font></font>
          ]<font></font>
        }]<font></font>
      }<font></font>
    }<font></font>
  });<font></font>
<font></font>
  grunt.renameTask('regarde', 'watch');<font></font>
  // remove when mincss task is renamed<font></font>
  grunt.renameTask('mincss', 'cssmin');<font></font>
<font></font>
  grunt.registerTask('server', [<font></font>
    'clean:server',<font></font>
    'coffee:dist',<font></font>
    'compass:server',<font></font>
    'livereload-start',<font></font>
    'connect:livereload',<font></font>
    'open',<font></font>
    'watch'<font></font>
  ]);<font></font>
<font></font>
  grunt.registerTask('test', [<font></font>
    'clean:server',<font></font>
    'coffee',<font></font>
    'compass',<font></font>
    'connect:test',<font></font>
    'karma'<font></font>
  ]);<font></font>
<font></font>
  grunt.registerTask('build', [<font></font>
    'clean:dist',<font></font>
    'jshint',<font></font>
    'test',<font></font>
    'coffee',<font></font>
    'compass:dist',<font></font>
    'useminPrepare',<font></font>
    'imagemin',<font></font>
    'cssmin',<font></font>
    'htmlmin',<font></font>
    'concat',<font></font>
    'copy',<font></font>
    'cdnify',<font></font>
    'usemin',<font></font>
    'ngmin',<font></font>
    'uglify'<font></font>
  ]);<font></font>
<font></font>
  grunt.registerTask('default', ['build']);<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2383篇《Yeoman中使用Sass文件的工作流程是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你只是像这样包含它</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="styles/style.css"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yeoman / grunt将在运行服务器时知道它应该从temp文件夹中获取sass文件。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
