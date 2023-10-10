---
layout: question
title:  <script type =“ text / template”>…</ script>的说明
date:   2020-03-13T10:14:06.000Z
description: 我偶然发现了以前从未见过的东西。在Backbone.js的示例TODO应用程序（Backbone TODO Example）的源代码中，他们将模板<scr...
img: 
author: 神无LEYMandy
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我偶然发现了以前从未见过的东西。</font><font style="vertical-align: inherit;">在Backbone.js的示例TODO应用程序（</font></font><a href="http://documentcloud.github.com/backbone/examples/todos/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone TODO Example</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">的源代码中，</font><font style="vertical-align: inherit;">他们将模板</font></font><code>&lt;script type = "text/template"&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font><font style="vertical-align: inherit;">在中</font><font style="vertical-align: inherit;">，其中包含看起来像PHP之外但带有JavaScript标记的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁可以给我解释一下这个？</font><font style="vertical-align: inherit;">这是合法的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1512篇《<script type =“ text / template”>…</ script>的说明》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>jQuery Templates is an example of something that uses this method to store HTML that will not be rendered directly (that’s the whole point) inside other HTML:
<a href="http://api.jquery.com/jQuery.template/" rel="nofollow">http://api.jquery.com/jQuery.template/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">An</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;script type = “text/template”&gt; … &lt;/script&gt;</code> is obsolete. Use <code>&lt;template&gt;</code> tag instead. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种将文本添加到HTML而不进行渲染或标准化的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像添加它一样没有什么不同：</font></font></p>

<pre><code> &lt;textarea style="display:none"&gt;&lt;span&gt;{{name}}&lt;/span&gt;&lt;/textarea&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加到Box9的答案中：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.js依赖于underscore.js，后者本身实现了John Resig的原始微模板。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您决定将Backbone.js与Rails一起使用，请务必查看Jammit gem。</font><font style="vertical-align: inherit;">它提供了一种非常干净的方法来管理模板的资产打包。 
</font></font><a href="http://documentcloud.github.com/jammit/#jst" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://documentcloud.github.com/jammit/#jst</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，Jammit还使用JResig的微模板，但是它也允许您替换模板引擎。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过设置</font></font><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除以外的</font><font style="vertical-align: inherit;">脚本标签</font></font><code>text/javascript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，浏览器将不会执行脚本标签的内部代码。</font><font style="vertical-align: inherit;">这称为微型模板。</font><font style="vertical-align: inherit;">此概念已在单页应用程序（又名SPA）中广泛使用。</font></font></p>

<pre><code>&lt;script type="text/template"&gt;I am a Micro template. <font></font>
  I am going to make your web page faster.&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于微型模板，脚本标签的类型为</font></font><code>text/template</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">jQuery创建者John Resig对此进行了很好的解释，网址为</font></font><a href="http://ejohn.org/blog/javascript-micro-templating/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ejohn.org/blog/javascript-micro-templating/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
