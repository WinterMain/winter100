---
layout: question
title:  如何允许webpack-dev-server允许来自react-router的入口点
date:   2020-03-12T04:39:56.000Z
description: 我正在创建一个使用webpack-dev-server和react-router进行开发的应用程序。似乎webpack-dev-server是建立在一...
img: 
author: 斯丁JinJinHarry
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在创建一个使用webpack-dev-server和react-router进行开发的应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎webpack-dev-server是建立在一个位置上有一个公共入口点（即“ /”）的假设之上的，而react-router允许无限数量的入口点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要webpack-dev-server的好处，特别是对生产力非常有用的热重载功能，但是我仍然希望能够加载react-router中设置的路由。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个人如何实现它以使其协同工作？</font><font style="vertical-align: inherit;">您能以这种方式在webpack-dev-server前面运行一个Express服务器吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第947篇《如何允许webpack-dev-server允许来自react-router的入口点》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能并非在所有情况下都如此，但是</font></font><code>publicPath: '/'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devServer中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">似乎</font><font style="vertical-align: inherit;">是解决深层路由问题的最简单解决方案，请参阅：</font><a href="https://github.com/ReactTraining/react-router/issues/676" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/issues/676" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/issues/676</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用CLI运行webpack-dev-server，则可以通过传递devServer对象的webpack.config.js对其进行配置：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>module.exports = {<font></font>
  entry: "index.js",<font></font>
  output: {<font></font>
    filename: "bundle.js"<font></font>
  },<font></font>
  devServer: {<font></font>
    historyApiFallback: true<font></font>
  }<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当遇到404时，它将重定向到index.html。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果您使用publicPath，则也需要将其传递给devServer：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>module.exports = {<font></font>
  entry: "index.js",<font></font>
  output: {<font></font>
    filename: "bundle.js",<font></font>
    publicPath: "admin/dashboard"<font></font>
  },<font></font>
  devServer: {<font></font>
    historyApiFallback: {<font></font>
      index: "admin/dashboard"<font></font>
    }<font></font>
  }<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过查看输出的前几行来验证所有设置是否正确（带有“ 404s的部分将回退到：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">path</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”）。</font></font></p>

<p><a href="https://i.stack.imgur.com/ZiK6T.png" rel="noreferrer"><img src="https://i.stack.imgur.com/ZiK6T.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
