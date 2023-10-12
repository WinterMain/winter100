---
layout: question
title:  如何将npm install与webpack一起使用normalize.css？
date:   2020-03-24T06:23:17.000Z
description: 我正在将Webpack与ReactJS一起使用，并试图找出如何在npm安装它之后使用normalize.css（https //necolas.githu...
img: 
author: 番长猴子古一
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将Webpack与ReactJS一起使用，并试图找出如何在npm安装它之后使用normalize.css（</font></font><a href="https://necolas.github.io/normalize.css/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://necolas.github.io/normalize.css/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装后是否立即应用了normalize.css？</font><font style="vertical-align: inherit;">如果需要，我将如何对其进行编辑？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预先谢谢您，一定会投票并接受答案</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3365篇《如何将npm install与webpack一起使用normalize.css？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加：如果您使用的是WebPack 4，则无法导入normalize.less，请尝试normalize.css。</font></font></p>

<pre><code>@import "../node_modules/normalize.css/normalize.css";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的规则是：</font></font></p>

<pre><code>module: {<font></font>
    rules: [{<font></font>
            test: /\.css$/,<font></font>
            use: [MiniCssExtractPlugin.loader,<font></font>
                "css-loader"<font></font>
            ]<font></font>
        },<font></font>
        {<font></font>
            test: /\.less$/,<font></font>
            use: [<font></font>
                MiniCssExtractPlugin.loader,<font></font>
                "css-loader",<font></font>
                "less-loader"<font></font>
            ]<font></font>
        }<font></font>
    ]<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>First, install or download normalize.css from GitHub.I would recommend download it.Then, There are then 2 main ways to make use of it.</p>

<p>Approach 1: use normalize.css as a starting point for your own project’s base CSS, customising the values to match the design’s requirements.</p>

<p>Approach 2: include normalize.css untouched and build upon it, overriding the defaults later in your CSS if necessary.</p>

<p>i.e Just put these downloaded files into the project folder and add link to it by link tag</p>

<blockquote>
  <p>link rel="stylesheet" type="text/css" href="normalize.css"</p>
</blockquote>

<p><strong>NOTE  href content should point to the folder where normalize is stored.</strong></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
