---
layout: question
title:  在ReasonReact中继承Nextjs App组件（pages / _app.js）
date:   2020-03-24T07:50:34.000Z
description: 我正在尝试使用ReasonReact在我的Nextjs应用程序中实现React Context API，但被扣脚本编译器推断模块名称的方式所困扰。为了...
img: 
author: 斯丁Jim
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用ReasonReact在我的Nextjs应用程序中实现React Context API，但被扣脚本编译器推断模块名称的方式所困扰。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使上下文可用于整个树，我需要从Nextjs App组件继承。</font><font style="vertical-align: inherit;">问题是，Next按照约定寻找</font></font><code>pages/_app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App组件的继承关系，但是当我使用</font></font><code>_app.re</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件名时，</font></font><code>bsb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会产生一个名为“ App”的Reason模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，</font></font><code>bsb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印以下消息并忽略该文件：</font></font></p>

<p><code>IGNORED: file _app.re under pages is ignored because it can't be turned into a valid module name. The build system transforms a file name into a module name by upper-casing the first letter</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法告诉Nextjs在其他地方寻找App组件？</font><font style="vertical-align: inherit;">还是一种</font></font><code>bsb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font><font style="vertical-align: inherit;">调整</font><font style="vertical-align: inherit;">一个文件的方法？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个似乎很远，但是除非</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要，</font><font style="vertical-align: inherit;">否则我不想涉足javascript </font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3472篇《在ReasonReact中继承Nextjs App组件（pages / _app.js）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
