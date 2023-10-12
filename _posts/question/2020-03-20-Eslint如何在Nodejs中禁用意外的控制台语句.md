---
layout: question
title:  Eslint：如何在Node.js中禁用“意外的控制台语句”？
date:   2020-03-20T02:39:45.000Z
description: 我将eslint与Sublime Text 3结合使用，正在编写gulpfile.js。/\*eslint-env node\*/var gulp = ...
img: 
author: Davaid米亚
category: question
answer: 0
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将eslint与Sublime Text 3结合使用，正在编写</font></font><code>gulpfile.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>/*eslint-env node*/<font></font>
var gulp = require('gulp');<font></font>
<font></font>
gulp.task('default', function(){<font></font>
    console.log('default task');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是eslint不断显示错误：“错误：意外的控制台语句。（无控制台）”
</font></font><a href="https://www.samyoc.com//uploads/users/23869/images/thumbnails/1584671857586.png" data-src="https://www.samyoc.com//uploads/users/23869/images/1584671857586.png" rel="noreferrer"><img src="https://i.stack.imgur.com/2xAV1.png" alt="陪同错误"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://eslint.org/docs/rules/no-console.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了</font><a href="http://eslint.org/docs/rules/no-console.html" rel="noreferrer"><font style="vertical-align: inherit;">官方文档</font></a><font style="vertical-align: inherit;">，但是我仍然不知道如何禁用它。</font></font></p>

<pre><code>/*eslint-env node*/<font></font>
var gulp = require('gulp');<font></font>
<font></font>
/*eslint no-console: 2*/<font></font>
gulp.task('default', function(){<font></font>
    console.log('default task');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Sublime Text 3插件：SublimeLinter和SublimeLinter-contrib-eslint。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>.eslintrc.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>module.exports = {<font></font>
    "rules": {<font></font>
        "no-console":0,<font></font>
        "indent": [<font></font>
            2,<font></font>
            "tab"<font></font>
        ],<font></font>
        "quotes": [<font></font>
            2,<font></font>
            "single"<font></font>
        ],<font></font>
        "linebreak-style": [<font></font>
            2,<font></font>
            "unix"<font></font>
        ],<font></font>
        "semi": [<font></font>
            2,<font></font>
            "always"<font></font>
        ]<font></font>
    },<font></font>
    "env": {<font></font>
        "browser": true,<font></font>
        "node": true<font></font>
    },<font></font>
    "extends": "eslint:recommended"<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2452篇《Eslint：如何在Node.js中禁用“意外的控制台语句”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
