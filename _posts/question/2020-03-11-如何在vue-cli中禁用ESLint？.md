---
layout: question
title:  如何在vue-cli中禁用ESLint？
date:   2020-03-11T04:23:59.000Z
description: 我如何禁用ESlint在生成的项目vue-cli？preLoaders  \[  {    test  /\.vue$/,    loader  ...
img: 
author: 西门达蒙Davaid
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何禁用</font></font><code>ESlint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生成的项目</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>preLoaders: [<font></font>
  {<font></font>
    test: /\.vue$/,<font></font>
    loader: 'eslint',<font></font>
    include: projectRoot,<font></font>
    exclude: /node_modules/<font></font>
  },<font></font>
  {<font></font>
    test: /\.js$/,<font></font>
    loader: 'eslint',<font></font>
    include: projectRoot,<font></font>
    exclude: /node_modules/<font></font>
  }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果删除该</font></font><code>loader: 'eslint'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行，它将无法编译，与将其设置为空字符串相同。</font><font style="vertical-align: inherit;">我知道我可以</font></font><code>ESLint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在初始化阶段</font><font style="vertical-align: inherit;">选择退出</font><font style="vertical-align: inherit;">，但是在创建项目后如何禁用它呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第665篇《如何在vue-cli中禁用ESLint？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法之一是只设置</font></font><code>.eslintignore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要禁用的文件夹和文件的文件。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></p>
</blockquote>

<pre><code>/build/<font></font>
/config/<font></font>
/dist/<font></font>
/*.js<font></font>
/test/unit/coverage/<font></font>
<font></font>
/000-xyz/<font></font>
<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://github.com/vuejs-templates/webpack/issues/73#issuecomment-355149342" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/vuejs-templates/webpack/issues/73#issuecomment-355149342" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuejs-templates/webpack/issues/73#issuecomment-355149342</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置 
 </font></font><code>useEslint: false,</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>config/index.js</code></p>

<p><a href="https://i.stack.imgur.com/4ZpyA.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这张图片</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入文件“ tslint.json”，并排除linterOptions中的所有文件。</font><font style="vertical-align: inherit;">默认设置仅排除文件夹node_modules。</font><font style="vertical-align: inherit;">您还可以在tsconfig.json中设置“ strict”：false</font></font></p>

<pre><code>  "linterOptions": {<font></font>
    "exclude": [<font></font>
      "*/**"<font></font>
    ]<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 </font></font></p>

<pre><code>  "linterOptions": {<font></font>
    "exclude": [<font></font>
      "node_modules/**"<font></font>
    ]<font></font>
  },<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue的入门项目本身都是使用模板语言构建的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/vuejs-templates/webpack/blob/cbcba9268dbfb277497bcdde6409dab4398eed8e/template/build/webpack.base.conf.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>{{#lint}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位），您可以删除整个</font></font><code>preLoaders</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多解决方案：</font><a href="https://github.com/vuejs-templates/webpack/issues/73" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/vuejs-templates/webpack/issues/73" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuejs-templates/webpack/issues/73</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是最好的方法是：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在</font></font><code>**/*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.eslintignore中</font><font style="vertical-align: inherit;">添加一行</font><font style="vertical-align: inherit;">，它将忽略所有文件。</font><font style="vertical-align: inherit;">如果是网络应用程序，然后重新运行！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至</font></font><code>2019, March</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>vue.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = {<font></font>
  ...<font></font>
  lintOnSave: false<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最新版本中，打开“ .eslintrc.js”文件，然后设置“ root：false”。</font></font><a href="https://i.stack.imgur.com/s8PVB.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/s8PVB.jpg" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一些过时的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为vue-cli 3使用零配置方法，所以禁用它的方法是仅卸载模块：</font></font></p>

<pre><code>npm remove @vue/cli-plugin-eslint
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门ItachiL</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从当前版本（^ 3.0？）开始，您可以设置：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useEslint：否， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在config / index.js中</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
