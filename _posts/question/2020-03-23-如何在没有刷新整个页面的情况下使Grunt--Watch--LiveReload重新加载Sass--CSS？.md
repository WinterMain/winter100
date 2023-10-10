---
layout: question
title:  如何在没有刷新整个页面的情况下使Grunt / Watch / LiveReload重新加载Sass / CSS？
date:   2020-03-23T01:31:18.000Z
description: 到目前为止，除我希望能够对Sass / CSS进行修改并使其刷新之外，我已经使所有事情都能按我想要的方式进行（即监视我想要的所有文件并在发生更改时刷新）。...
img: 
author: Gil番长Stafan
category: question
answer: 0
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，除我希望能够对Sass / CSS进行修改并使其刷新之外，我已经使所有事情都能按我想要的方式进行（即监视我想要的所有文件并在发生更改时刷新）。在没有页面加载的浏览器中。</font><font style="vertical-align: inherit;">这没什么大不了的，但是有时候在页面交互之后，我试图修改某些东西的样式，如果页面刷新，我必须重新进行整个过程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相当确定这是可能的，但到目前为止，这还没有使我明白。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>Gruntfile.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = function(grunt) {<font></font>
<font></font>
  // Project configuration.<font></font>
  grunt.initConfig({<font></font>
    pkg: grunt.file.readJSON('package.json'),<font></font>
    connect: {<font></font>
      server: {<font></font>
        options: {},<font></font>
      }<font></font>
    },<font></font>
    sass: {<font></font>
      dist: {<font></font>
        options: {<font></font>
          style: 'compressed'<font></font>
        },<font></font>
        files: {<font></font>
          'css/main.css': 'css/scss/main.scss',<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    jshint: {<font></font>
      files: ['js/*.js'],<font></font>
    },<font></font>
    watch: {<font></font>
      options: {<font></font>
        livereload: true,<font></font>
      },<font></font>
      html: {<font></font>
        files: ['index.html'],<font></font>
      },<font></font>
      js: {<font></font>
        files: ['js/**/*.js'],<font></font>
        tasks: ['jshint'],<font></font>
      },<font></font>
      css: {<font></font>
        files: ['css/scss/**/*.scss'],<font></font>
        tasks: ['sass'],<font></font>
      },<font></font>
    }<font></font>
  });<font></font>
<font></font>
  // Actually running things.<font></font>
  grunt.loadNpmTasks('grunt-contrib-sass');<font></font>
  grunt.loadNpmTasks('grunt-contrib-watch');<font></font>
  grunt.loadNpmTasks('grunt-contrib-connect');<font></font>
  grunt.loadNpmTasks('grunt-contrib-jshint');<font></font>
<font></font>
  // Default task(s).<font></font>
  grunt.registerTask('default', ['connect', 'watch']);<font></font>
<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想提及有关设置的一件奇怪的事情：运行时，</font></font><code>grunt watch --verbose</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到它</font></font><code>.git</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也在</font><font style="vertical-align: inherit;">监视</font></font><code>.sass-cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看起来对吗？</font><font style="vertical-align: inherit;">我不知道该怎么做。</font></font></p>

<pre><code>Watching .git for changes.<font></font>
Watching .sass-cache for changes.<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2595篇《如何在没有刷新整个页面的情况下使Grunt / Watch / LiveReload重新加载Sass / CSS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
