---
layout: question
title:  如何将sass-lint添加到我的angular-cli.json文件中？
date:   2020-04-03T04:22:32.000Z
description: 我正在使用这个种子应用程序：https   //github.com/2sic/app-tutorial-angular4-hello-dnn我已经安...
img: 
author: 伽罗
category: question
answer: 0
tags: 角 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用这个种子应用程序：</font><a href="https://github.com/2sic/app-tutorial-angular4-hello-dnn" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/2sic/app-tutorial-angular4-hello-dnn" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/2sic/app-tutorial-angular4-hello-dnn</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经安装了sass-lint：</font><a href="https://www.npmjs.com/package/sass-lint" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.npmjs.com/package/sass-lint" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.npmjs.com/package/sass-lint</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不确定如何将其添加到我的angular-cli.json文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的角度版本4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的WebPack</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">青菜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的这个例子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已使用默认设置将“ sass-lint.yml”文件添加到我的根目录。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的angular-cli.json文件：</font></font></strong></p>

<pre><code>{<font></font>
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",<font></font>
  "project": {<font></font>
    "name": "my-app"<font></font>
  },<font></font>
  "apps": [<font></font>
    {<font></font>
      "root": "src",<font></font>
      "outDir": "dist",<font></font>
      "assets": [<font></font>
        "assets",<font></font>
        "favicon.ico"<font></font>
      ],<font></font>
      "index": "index.html",<font></font>
      "main": "main.ts",<font></font>
      "polyfills": "polyfills.ts",<font></font>
      "test": "test.ts",<font></font>
      "tsconfig": "tsconfig.app.json",<font></font>
      "testTsconfig": "tsconfig.spec.json",<font></font>
      "prefix": "app",<font></font>
      "styles": [<font></font>
        "styles.scss"<font></font>
      ],<font></font>
      "scripts": [<font></font>
        "../node_modules/lodash/lodash.js"<font></font>
      ],<font></font>
      "environmentSource": "environments/environment.ts",<font></font>
      "environments": {<font></font>
        "dev": "environments/environment.ts",<font></font>
        "prod": "environments/environment.prod.ts"<font></font>
      }<font></font>
    }<font></font>
  ],<font></font>
  "e2e": {<font></font>
    "protractor": {<font></font>
      "config": "./protractor.conf.js"<font></font>
    }<font></font>
  },<font></font>
  "lint": [<font></font>
    {<font></font>
      "project": "src/tsconfig.app.json"<font></font>
    },<font></font>
    {<font></font>
      "project": "src/tsconfig.spec.json"<font></font>
    },<font></font>
    {<font></font>
      "project": "e2e/tsconfig.e2e.json"<font></font>
    }<font></font>
  ],<font></font>
  "test": {<font></font>
    "karma": {<font></font>
      "config": "./karma.conf.js"<font></font>
    }<font></font>
  },<font></font>
  "defaults": {<font></font>
    "styleExt": "scss",<font></font>
    "component": {<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4024篇《如何将sass-lint添加到我的angular-cli.json文件中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
