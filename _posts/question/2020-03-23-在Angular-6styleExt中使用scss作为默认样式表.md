---
layout: question
title:  在Angular 6+（styleExt）中使用scss作为默认样式表
date:   2020-03-23T12:03:59.000Z
description: 显然，声明默认样式表扩展名的方式已从Angular 6开始更改。中的styleExt属性angular.json不再被识别。对于新项目，可以--sty...
img: 
author: 伽罗JinJin西门
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，声明默认样式表扩展名的方式已从Angular 6开始更改。</font><font style="vertical-align: inherit;">中的</font></font><code>styleExt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再被识别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于新项目，可以</font></font><code>--style=scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">的CLI </font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用选项进行设置</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果存在我从Angular &lt;5迁移的项目，或者在项目创建过程中忘记这样做，您如何更改此设置？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题与Angular版本5到6的重大更改密切相关。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3013篇《在Angular 6+（styleExt）中使用scss作为默认样式表》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的位置已更改</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在有2种方法可以设置此选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Angular CLI：</font></font></p>

<pre><code>ng config schematics.@schematics/angular:component.styleext scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接在</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"schematics": {<font></font>
    "@schematics/angular:component": {<font></font>
      "styleext": "scss"<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从去</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个现有的项目，请按照下列步骤操作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></strong></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分和</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分取代：</font></font></p>

<p><code>"styles": ["src/styles.css"],</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 通过 </font></font><code>"styles": ["src/styles.scss"],</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换：</font></font></p>

<p><code>"schematics": {},</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 通过 </font></font><code>"schematics": { "@schematics/angular:component": { "style": "scss" } },</code></p></li>
</ol>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>ng config schematics.@schematics/angular:component.styleext
  scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令有效，但是不能将配置放在同一位置。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的项目中，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">重命名</font><font style="vertical-align: inherit;">为</font></font><code>.scss</code> </p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
