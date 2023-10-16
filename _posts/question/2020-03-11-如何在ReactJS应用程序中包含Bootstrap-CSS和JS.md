---
layout: question
title:  如何在ReactJS应用程序中包含Bootstrap CSS和JS？
date:   2020-03-11T15:14:09.000Z
description: 我是reactjs的新手，我想在我的react应用程序中包含引导程序我已经安装了引导程序 npm install bootstrap --save...
img: 
author: 村村LEY
category: question
answer: 3
tags: twitter-bootstrap Bootstrap
topic: Bootstrap
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是reactjs的新手，我想在我的react应用程序中包含引导程序</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经安装了引导程序 </font></font><code>npm install bootstrap --save</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，要在我的react应用程序中加载bootstrap css和js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></em></strong></p>

<pre><code>var config = {<font></font>
    entry: './src/index',<font></font>
<font></font>
    output: {<font></font>
        path: './',<font></font>
        filename: 'index.js'<font></font>
    },<font></font>
<font></font>
    devServer: {<font></font>
        inline: true,<font></font>
        port: 8080,<font></font>
        historyApiFallback: true,<font></font>
        contentBase:'./src'<font></font>
    },<font></font>
<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {<font></font>
                test: /\.js?$/,<font></font>
                exclude: /node_modules/,<font></font>
                loader: 'babel',<font></font>
<font></font>
                query: {<font></font>
                    presets: ['es2015', 'react']<font></font>
                }<font></font>
            }<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是“如何在node_modules的reactjs应用程序中包含引导CSS和js？” </font><font style="vertical-align: inherit;">如何设置引导程序以包含在我的React应用程序中？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第831篇《如何在ReactJS应用程序中包含Bootstrap CSS和JS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在项目中使用CRA（create-react-app），则可以添加以下内容：</font></font></p>

<pre><code>npm install react-bootstrap bootstrap
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在应用程序中使用引导程序，并且无法正常工作，请在index.html中使用它：</font></font></p>

<pre><code>&lt;link<font></font>
  rel="stylesheet"<font></font>
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"<font></font>
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"<font></font>
  crossorigin="anonymous"<font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了上面的工作来解决类似的问题。</font><font style="vertical-align: inherit;">希望这对您有用:-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知何故，已接受的答案只是在谈论包含引导程序中的CSS文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我认为这个问题与这里的问题有关
 </font></font><a href="https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react/52251319#52251319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-Bootstrap Dropdown在React中不起作用</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几个答案可以帮助您- </font></font></p>

<ol>
<li><a href="https://stackoverflow.com/a/52251319/4266842"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/52251319/4266842</font></font></a></li>
<li><a href="https://stackoverflow.com/a/54188034/4266842"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/54188034/4266842</font></font></a></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请点击以下链接以在React中使用引导程序。 
</font></font><a href="https://react-bootstrap.github.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://react-bootstrap.github.io/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于安装：</font></font></p>

<pre><code>$ npm install --save react react-dom<font></font>
$ npm install --save react-bootstrap<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 要么 -  -  -  -  -  - - ------------------------</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将React的CSS的Bootstrap CDN放入react.index文件的标记中，并将Js的Bootstrap CDN放入index.html文件的标记中。</font><font style="vertical-align: inherit;">使用className而不是class遵循index.html</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;<font></font>
    &lt;meta name="theme-color" content="#000000"&gt;<font></font>
<font></font>
    &lt;link rel="manifest" href="%PUBLIC_URL%/manifest.json"&gt;<font></font>
    &lt;link rel="shortcut icon" href="../src/images/dropbox_logo.svg"&gt;<font></font>
    &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;<font></font>
<font></font>
<font></font>
<font></font>
<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
<font></font>
    &lt;div id="root"&gt;&lt;/div&gt;<font></font>
<font></font>
     &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
    &lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
    &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
