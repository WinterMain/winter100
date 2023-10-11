---
layout: question
title:  Bootstrap4依赖项PopperJs在Angular上引发错误
date:   2020-03-23T02:48:09.000Z
description: 我刚刚创建了一个全新的angular-cli项目，然后运行npm install bootstrap\`4.0.0-beta jquery popper....
img: 
author: 蛋蛋猿
category: question
answer: 5
tags: angular-cli Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚创建了一个全新的</font></font><a href="/questions/tagged/angular-cli" class="post-tag" title="显示标记为“ angular-cli”的问题" rel="tag"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-cli</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后运行</font></font><code>npm install bootstrap@4.0.0-beta jquery popper.js --save</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
并更改了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.angular-cli.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的相关部分，如下所示</font></font></p>

<pre><code>  "styles": [<font></font>
    "../node_modules/bootstrap/dist/css/bootstrap.css"<font></font>
  ],<font></font>
  "scripts": [<font></font>
    "../node_modules/jquery/dist/jquery.js",<font></font>
    "../node_modules/popper.js/dist/popper.js",<font></font>
    "../node_modules/bootstrap/dist/js/bootstrap.js"<font></font>
  ],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是收到下面的错误</font></font></p>

<pre><code>10:2287 Uncaught SyntaxError: Unexpected token export<font></font>
    at eval (&lt;anonymous&gt;)<font></font>
    at webpackJsonp.../../../../script-loader/addScript.js.module.exports (addScript.js:9)<font></font>
    at Object.../../../../script-loader/index.js!../../../../popper.js/dist/popper.js (popper.js?4b43:1)<font></font>
    at __webpack_require__ (bootstrap 4403042439558687cdd6:54)<font></font>
    at Object.2 (scripts.bundle.js:66)<font></font>
    at __webpack_require__ (bootstrap 4403042439558687cdd6:54)<font></font>
    at webpackJsonpCallback (bootstrap 4403042439558687cdd6:25)<font></font>
    at scripts.bundle.js:1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法如何解决？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2686篇《Bootstrap4依赖项PopperJs在Angular上引发错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">我的解决方案</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入dist文件夹（./node_modules/popper.js/dist/popper.js），而是导入umd文件夹（./node_modules/popper.js/dist/ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">umd</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> /popper.js）。</font><font style="vertical-align: inherit;">获取js文件的迷你版还是普通版都没关系。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪A</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/#js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.2/getting-started/introduction/#js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的文档，</font><font style="vertical-align: inherit;">您会发现它们导入了以下内容：</font></font></p>

<pre><code>&lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意命名：jquery。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苗条的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .min.js，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">umd</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> /popper.min.js！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我在以下代码中使用了以下内容</font></font><code>.angular-cli.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>      "styles": [<font></font>
        "../node_modules/bootstrap/dist/css/bootstrap.css"<font></font>
      ],<font></font>
      "scripts": [<font></font>
        "../node_modules/jquery/dist/jquery.slim.min.js",<font></font>
        "../node_modules/popper.js/dist/umd/popper.min.js",<font></font>
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"<font></font>
      ],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，它现在似乎可以工作了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要运行模式，请在tsconfig.ts中将目标从“ es2015”更改为“ es5”</font></font></p>

<pre><code>"styles": [ "src/styles.css", <font></font>
            "node_modules/bootstrap/dist/css/bootstrap.min.css" ], <font></font>
"scripts": ["node_modules/jquery/dist/jquery.min.js", <font></font>
            "node_modules/popper.js/dist/umd/popper.min.js", <font></font>
            "node_modules/bootstrap/dist/js/bootstrap.min.js"] <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以看到许多人都在努力添加和正确包含Bootstrap 4依赖项（jQuery，popper.js等）。</font><font style="vertical-align: inherit;">但是，还有一个更简单的解决方案，形式为</font></font><a href="https://ng-bootstrap.github.io" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ng-bootstrap.github.io</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bootstrap提供</font><font style="vertical-align: inherit;">了从头开始编写的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Angular指令。</font><font style="vertical-align: inherit;">积极的结果是：*您不需要包括和担心jQuery，popper.js等。*指令提供了在Angular世界中“有意义”的API。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何试图将Bootstrap 4.beta与Angular结合使用的人-ng-bootstrap刚刚发布了它的第一个Beta，它与Bootstrap 4.beta CSS完全兼容</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Asp.net中工作，Mvc </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">umd</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以执行此操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如</font></font><a href="https://stackoverflow.com/a/50839939/8497522"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/50839939/8497522中所示，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加BundleConfig.cs：</font></font></p>

<pre><code>bundles.Add(new ScriptBundle("~/bundles/popper").Include("~/Scripts/umd/popper.js"));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了：</font></font></p>

<pre><code>bundles.Add(new ScriptBundle("~/bundles/popper").Include("~/Scripts/popper.js"));
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
