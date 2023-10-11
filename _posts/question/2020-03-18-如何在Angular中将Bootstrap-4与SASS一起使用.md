---
layout: question
title:  如何在Angular中将Bootstrap 4与SASS一起使用
date:   2020-03-18T10:30:30.000Z
description: 我想在通过Angular CLI创建的Angular（4+）项目中将Bootstrap 4与SASS一起使用。特别是我需要：使用SASS代替CS...
img: 
author: 宝儿A
category: question
answer: 4
tags: 角 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在通过Angular CLI创建的Angular（4+）项目中将Bootstrap 4与SASS一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特别是我需要：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SASS代替CSS作为全局样式和组件样式</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译Bootstrap SASS源以及我的自定义* .scss样式</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保我的自定义样式覆盖了Bootstrap源，因此我可以在需要时覆盖Bootstrap源，而无需编辑Bootstrap源本身（使升级Bootstrap源版本变得容易）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我的任何* .scss文件更改（对于组件和全局样式）都添加到</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font><font style="vertical-align: inherit;">时，都添加watch和自动重新编译</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2150篇《如何在Angular中将Bootstrap 4与SASS一起使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从版本6开始</font></font></p>

<pre><code>"styles": [<font></font>
   "node_modules/bootstrap/scss/bootstrap.scss",<font></font>
   "src/styles.scss",<font></font>
   "src/assets/scss/main.scss"<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有适合我的自定义主题，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只在styles.scss中添加lib</font></font></p>

<pre><code>@import "./assets/scss/mytheme";<font></font>
@import "~bootstrap/scss/bootstrap";<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我成功构建的另一种方法</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-安装引导程序 </font></font></p>

<pre><code>npm install bootstrap 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该在node_modules下添加boostrap scss文件。</font><font style="vertical-align: inherit;">（步骤2-6来自</font></font><a href="https://code.visualstudio.com/docs/languages/css" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://code.visualstudio.com/docs/languages/css</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-安装node-sass</font></font></p>

<pre><code>nmp install -g node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这需要将Sass转换为CSS</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3-在适合您放置scss和生成的css文件的位置创建一个文件夹。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>your-project/<font></font>
├── scss<font></font>
│   └── custom.scss   <font></font>
└── node_modules/<font></font>
    └── bootstrap<font></font>
        ├── js<font></font>
        └── scss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4-创建具有以下内容的custom.scss文件：</font></font></p>

<pre><code>@import "../node_modules/bootstrap/scss/bootstrap";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5-通过Ctrl + Shift + B&gt;配置任务&gt;从模板创建task.json文件在VSCode中创建任务&gt;其他</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.vscode下的task.json文件是使用默认内容创建的。</font><font style="vertical-align: inherit;">将内容替换为</font></font></p>

<pre><code>// Sass configuration<font></font>
{<font></font>
  // See https://go.microsoft.com/fwlink/?LinkId=733558<font></font>
  // for the documentation about the tasks.json format<font></font>
  "version": "2.0.0",<font></font>
  "tasks": [{<font></font>
    "label": "Sass Compile",<font></font>
    "type": "shell",<font></font>
    "command": "node-sass scss/custom.scss scss/custom-bootstrap.css",<font></font>
    "group": "build",<font></font>
    "problemMatcher": [<font></font>
      "$eslint-stylish"<font></font>
    ]<font></font>
  }]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：根据需要修改文件名和路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6-运行任务以生成CSS：Ctrl + Shift + B&gt;“ Sass编译”或 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7-遵循引导主题过程中的步骤：（</font></font><a href="https://getbootstrap.com/docs/4.1/getting-started/theming/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.1/getting-started/theming/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva小哥理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人遇到我在使用angular-cli运行Bootstrap 4时遇到的Javascript依赖问题，还需要让angular-cli编译器知道您已经安装了boostrap 4需要的其他依赖： </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery，popper.js和bootstrap.js</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，您需要将.angular-cli.json配置文件上的scripts数组修改为如下所示： </font></font></p>

<pre><code>"scripts": [<font></font>
    "../node_modules/jquery/dist/jquery.slim.js", <font></font>
    "../node_modules/popper.js/dist/umd/popper.js",<font></font>
    "../node_modules/bootstrap/dist/js/bootstrap.js"]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜想您已经使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save jquery popper.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装了jquery和popper，</font><font style="vertical-align: inherit;">因此这些包在node_modules文件夹中可用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一泡芙猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了@ShinDarth的</font></font><a href="https://stackoverflow.com/a/45660803/1998086"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案外</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可能还想寻求更简单的解决方案，仅导入所需的Bootstrap模块，而不是全部导入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您将替换为：</font></font></p>

<pre><code>"styles": [<font></font>
  "../node_modules/bootstrap/scss/bootstrap.scss",<font></font>
  "assets/scss/main.scss"<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有：</font></font></p>

<pre><code>"styles": [<font></font>
  "assets/scss/main.scss"<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您</font></font><code>main.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将看起来像：</font></font></p>

<pre><code>// import only the Bootstrap modules you need, e.g.<font></font>
@import "~bootstrap/scss/functions";<font></font>
@import "~bootstrap/scss/variables";<font></font>
@import "~bootstrap/scss/mixins";<font></font>
@import "~bootstrap/scss/grid";<font></font>
@import "~bootstrap/scss/navbar";<font></font>
@import "~bootstrap/scss/forms";<font></font>
// import your own custom files, e.g.<font></font>
@import "variables";<font></font>
@import "global";<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
