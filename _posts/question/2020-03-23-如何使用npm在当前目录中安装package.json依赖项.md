---
layout: question
title:  如何使用npm在当前目录中安装package.json依赖项
date:   2020-03-23T11:55:57.000Z
description: 我有一个Web应用程序：fooapp。我有package.json根。我想将所有依赖项安装在特定的中node_modules directory。我该怎么...
img: 
author: 猴子村村
category: question
answer: 1
tags: 部署 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个Web应用程序：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fooapp</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根。</font><font style="vertical-align: inherit;">我想将所有依赖项安装在特定的中</font></font><code>node_modules directory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我该怎么做呢？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的是</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说我有两个</font></font><code>widget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项。</font><font style="vertical-align: inherit;">我想以这样的目录结构结束：</font></font></p>

<pre><code>node_modules/<font></font>
  widgetA<font></font>
  widgetB<font></font>
fooapp/<font></font>
  package.js<font></font>
  lib<font></font>
  ..<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到什么</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我跑步时，</font></font><code>npm install fooapp/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  我得到以下信息：</font></font></p>

<pre><code>node_modules/<font></font>
  fooapp/<font></font>
    node_modules/<font></font>
      widgetA<font></font>
      widgetB<font></font>
    package.js<font></font>
    lib/<font></font>
    ..<font></font>
fooapp/<font></font>
  package.js<font></font>
  lib/<font></font>
  ..<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm在node_modules目录中复制我的应用程序目录，并将软件包安装在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> node_modules目录中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解这对于安装软件包很有意义。</font><font style="vertical-align: inherit;">但是我不在</font></font><code>require()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他地方使用Web应用程序，而是直接运行它。</font><font style="vertical-align: inherit;">我正在寻找一种将依赖项安装到特定node_modules目录的简单方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3000篇《如何使用npm在当前目录中安装package.json依赖项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我需要做 </font></font></p>

<pre><code>sudo npm install  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目在/ var / www内部，因此我还需要设置适当的权限。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
