---
layout: question
title:  在angular 2组件中访问bootstrap scss变量
date:   2020-03-23T12:07:25.000Z
description: 我正在使用Angular CLI构建新的Angular2项目，并且已将该项目配置为使用SCSS。我已经将Bootstrap 4成功加载到我的styles....
img: 
author: Jim猪猪
category: question
answer: 1
tags: 角 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Angular CLI构建新的Angular2项目，并且已将该项目配置为使用SCSS。</font><font style="vertical-align: inherit;">我已经将Bootstrap 4成功加载到我的</font></font><code>styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，但是，如果尝试访问任何Bootstrap的文件（或</font></font><code>styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从组件中</font><font style="vertical-align: inherit;">定义的我自己的变量，则会</font></font><code>Undefined Variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现构建错误）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的样式文件是否在</font></font><code>styles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font><font style="vertical-align: inherit;">的主条目之前进行编译</font></font><code>angular-cli.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我如何才能使在全局级别定义的任何变量可用于应用程序中的所有组件？</font><font style="vertical-align: inherit;">谢谢！</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-cli.json</font></font></strong></p>

<pre><code>"apps": [<font></font>
  {<font></font>
    ...<font></font>
    "styles": [<font></font>
      "styles/styles.scss"<font></font>
    ],<font></font>
    ...<font></font>
  }<font></font>
]<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">styles.scss</font></font></strong></p>

<pre><code>// Bootstrap<font></font>
$enable-flex: true; // Enable Flexbox mode<font></font>
@import "../../node_modules/bootstrap/scss/bootstrap";<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件</font></font></strong></p>

<pre><code>.navbar {<font></font>
  background: $brand-primary; // Undefined variable here<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3021篇《在angular 2组件中访问bootstrap scss变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个_colors.scss文件，复制其中的所有颜色变量，然后将该文件导入您的component.scss文件中。 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
