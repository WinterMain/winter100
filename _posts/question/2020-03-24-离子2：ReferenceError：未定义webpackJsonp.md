---
layout: question
title:  离子2：ReferenceError：未定义webpackJsonp
date:   2020-03-24T01:58:58.000Z
description: 我是Ionic的新手。我已经开始使用超级模板进行项目。但是，当我尝试在浏览器中运行该应用程序时。它抛出一个错误，说：ReferenceError  w...
img: 
author: 番长
category: question
answer: 5
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Ionic的新手。</font><font style="vertical-align: inherit;">我已经开始使用超级模板进行项目。</font><font style="vertical-align: inherit;">但是，当我尝试在浏览器中运行该应用程序时。</font><font style="vertical-align: inherit;">它抛出一个错误，说：</font></font></p>

<pre><code>ReferenceError: webpackJsonp is not defined<font></font>
    at http://localhost:8100/build/main.js:1:1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过将vendor.js放到index.html中，但是没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是index.html文件。</font><font style="vertical-align: inherit;">我删除了vendor.js，因为它不起作用。</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en" dir="ltr"&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;meta charset="UTF-8"&gt;<font></font>
  &lt;title&gt;Ionic App&lt;/title&gt;<font></font>
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;<font></font>
  &lt;meta name="format-detection" content="telephone=no"&gt;<font></font>
  &lt;meta name="msapplication-tap-highlight" content="no"&gt;<font></font>
<font></font>
  &lt;link rel="icon" type="image/x-icon" href="assets/icon/favicon.ico"&gt;<font></font>
  &lt;link rel="manifest" href="manifest.json"&gt;<font></font>
  &lt;meta name="theme-color" content="#4e8ef7"&gt;<font></font>
<font></font>
  &lt;!-- cordova.js required for cordova apps --&gt;<font></font>
  &lt;script src="cordova.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;!-- un-comment this code to enable service worker<font></font>
  &lt;script&gt;<font></font>
    if ('serviceWorker' in navigator) {<font></font>
      navigator.serviceWorker.register('service-worker.js')<font></font>
        .then(() =&gt; console.log('service worker installed'))<font></font>
        .catch(err =&gt; console.log('Error', err));<font></font>
    }<font></font>
  &lt;/script&gt;--&gt;<font></font>
<font></font>
  &lt;link href="build/main.css" rel="stylesheet"&gt;<font></font>
<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
  &lt;!-- Ionic's root component and where the app will load --&gt;<font></font>
  &lt;ion-app&gt;&lt;/ion-app&gt;<font></font>
<font></font>
  &lt;!-- The polyfills js is generated during the build process --&gt;<font></font>
  &lt;script src="build/polyfills.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;!-- The bundle js is generated during the build process --&gt;<font></font>
  &lt;script src="build/main.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到此错误时，我正在从事ReactJs项目。</font><font style="vertical-align: inherit;">这可能是缺少</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">相关性的情况</font><font style="vertical-align: inherit;">，最终这些相关性最终以OP报告的错误形式冒泡。</font><font style="vertical-align: inherit;">在我们的案例中</font><font style="vertical-align: inherit;">，缺少</font><font style="vertical-align: inherit;">对</font></font><a href="https://www.npmjs.com/package/omit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">omitJs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm软件包</font><font style="vertical-align: inherit;">的引用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件的“ </font><font style="vertical-align: inherit;">依赖项”部分中添加以下内容的那一刻</font><font style="vertical-align: inherit;">，所有内容开始起作用：</font></font></p>

<pre><code>"dependencies": {<font></font>
.....other dependencies<font></font>
"omit.js": "1.0.0"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是遇到了这个问题，在我的情况下，文件polyfills / vendor / main的顺序并不需要做任何事情，但这只是vendor.js文件的大小。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这一点是因为它可以在我的本地计算机上运行，​​因此，我确实发现vendor.js为5MB，因此，我再次使用--prod参数构建了该应用程序：</font></font></p>

<pre><code>ionic cordova build ios --prod
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">离子版本问题兄弟。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查版本。</font></font></p>

<pre><code>npm install -g ionic@v3.0.1<font></font>
npm install -g ionic@v2.0.1<font></font>
npm install -g ionic@v1<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install -g ionic@v3.0.1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 </font></font></p>

<pre><code>yarn add -g ionic@v3.0.1
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从字面上看，您经历了同样的事情。</font><font style="vertical-align: inherit;">我在/src/index.html中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前添加了vendor.js脚本</font><font style="vertical-align: inherit;">-现在它在本地运行。</font></font></p>

<pre><code>  &lt;!-- The polyfills js is generated during the build process --&gt;<font></font>
  &lt;script src="build/polyfills.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;script src="build/vendor.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;!-- The bundle js is generated during the build process --&gt;<font></font>
  &lt;script src="build/main.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
