---
layout: question
title:  HtmlWebpackPlugin注入相对路径文件，该路径文件在加载非根网站路径时会中断
date:   2020-03-23T02:46:18.000Z
description: 我正在使用webpack和HtmlWebpackPlugin将捆绑的js和css注入html模板文件中。new HtmlWebpackPlugin({...
img: 
author: LEY宝儿神奇
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack和HtmlWebpackPlugin将捆绑的js和css注入html模板文件中。</font></font></p>

<pre><code>new HtmlWebpackPlugin({<font></font>
   template: 'client/index.tpl.html',<font></font>
   inject: 'body',<font></font>
   filename: 'index.html'<font></font>
}),<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并生成以下html文件。</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
  &lt;head&gt;<font></font>
    ...<font></font>
    &lt;link href="main-295c5189923694ec44ac.min.css" rel="stylesheet"&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="app"&gt;&lt;/div&gt;<font></font>
    &lt;script src="main-295c5189923694ec44ac.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当访问应用程序的根目录时，此方法工作正常</font></font><code>localhost:3000/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是当我尝试从另一个URL访问应用程序时，此方法将失败，例如，</font></font><code>localhost:3000/items/1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为捆绑的文件未注入绝对路径。</font><font style="vertical-align: inherit;">加载html文件时，它将在不存在的</font></font><code>/items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中</font><font style="vertical-align: inherit;">查找js文件，</font><font style="vertical-align: inherit;">因为react-router尚未加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获得HtmlWebpackPlugin以绝对路径注入文件，所以express将在我的</font></font><code>/dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">的根</font><font style="vertical-align: inherit;">目录而不是在目录</font><font style="vertical-align: inherit;">的根</font><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">查找文件</font></font><code>/dist/items/main-...min.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">或者，也许我可以更改我的快速服务器以解决此问题？</font></font></p>

<pre><code>app.use(express.static(__dirname + '/../dist'));<font></font>
<font></font>
app.get('*', function response(req, res) {<font></font>
  res.sendFile(path.join(__dirname, '../dist/index.html'));<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，我只需要了解以下内容：</font></font></p>

<pre><code>&lt;script src="main...js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在源代码的开头加上斜线。</font></font></p>

<pre><code>&lt;script src="/main...js&gt;&lt;/script&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2680篇《HtmlWebpackPlugin注入相对路径文件，该路径文件在加载非根网站路径时会中断》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack配置中 </font></font></p>

<pre><code>config.output.publicPath = ''
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的index.html中 </font></font></p>

<pre><code>&lt;base href="/someurl/" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该做到。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试在webpack配置中设置publicPath：</font></font></p>

<pre><code>output.publicPath = '/'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HtmlWebpackPlugin使用publicPath来添加注入的URL。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是在</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html模板的中</font><font style="vertical-align: inherit;">设置基本href </font><font style="vertical-align: inherit;">，以指定文档中所有相对URL的基本URL。</font></font></p>

<pre><code>&lt;base href="http://localhost:3000/"&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
