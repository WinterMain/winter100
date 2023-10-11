---
layout: question
title:  将整个Javascript文件包装在匿名函数（例如“（function（）{…}}（）”）中的目的是什么？
date:   2020-03-12T03:15:28.000Z
description: 最近，我阅读了很多Javascript，并且注意到整个文件的包装方式如下所示，在要导入的.js文件中。(function() {    ...  ...
img: 
author: ItachiSam
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我阅读了很多Javascript，并且注意到整个文件的包装方式如下所示，在要导入的.js文件中。</font></font></p>

<pre><code>(function() {<font></font>
    ... <font></font>
    code<font></font>
    ...<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么这样做而不是使用一组简单的构造函数呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第935篇《将整个Javascript文件包装在匿名函数（例如“（function（）{…}}（）”）中的目的是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了将变量保留在本地之外，一种非常方便的用法是在使用全局变量编写库时，可以给它一个较短的变量名，以在库中使用。</font><font style="vertical-align: inherit;">它经常用于编写jQuery插件，因为jQuery允许您使用jQuery.noConflict（）禁用指向jQuery的$变量。</font><font style="vertical-align: inherit;">如果禁用它，您的代码仍然可以使用$并且只要您这样做就不会中断：</font></font></p>

<pre><code>(function($) { ...code...})(jQuery);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免与同一窗口中的其他方法/库发生冲突，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免使用全局范围，而将其设置为本地范围，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了加快调试速度（本地范围），</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript仅具有功能范围，因此也将有助于代码的编译。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC36540264</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是所谓的关闭。</font><font style="vertical-align: inherit;">它基本上将代码密封在函数内部，以便其他库不会干扰它。</font><font style="vertical-align: inherit;">这类似于以编译语言创建名称空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例。</font><font style="vertical-align: inherit;">假设我写：</font></font></p>

<pre><code>(function() {<font></font>
<font></font>
    var x = 2;<font></font>
<font></font>
    // do stuff with x<font></font>
<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，其他库无法访问</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建的要在库中使用</font><font style="vertical-align: inherit;">的变量</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器中的JavaScript实际上仅具有两个有效范围：函数范围和全局范围。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果变量不在函数范围内，则在全局范围内。</font><font style="vertical-align: inherit;">而且全局变量通常是不好的，因此这是一种将库的变量保留给自己的构造。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
