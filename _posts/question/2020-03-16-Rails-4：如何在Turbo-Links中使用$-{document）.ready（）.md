---
layout: question
title:  Rails 4：如何在Turbo-Links中使用$ {document）.ready（）
date:   2020-03-16T07:02:56.000Z
description: 尝试以“ rails方式”组织JS文件时，我在Rails 4应用程序中遇到了问题。它们以前分散在不同的视图中。我将它们组织到单独的文件中，并通过资产管道进...
img: 
author: 伽罗L
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试以“ rails方式”组织JS文件时，我在Rails 4应用程序中遇到了问题。</font><font style="vertical-align: inherit;">它们以前分散在不同的视图中。</font><font style="vertical-align: inherit;">我将它们组织到单独的文件中，并通过资产管道进行编译。</font><font style="vertical-align: inherit;">但是，我刚刚了解到，在打开Turbo链接时，jQuery的“就绪”事件不会在随后的点击中触发。</font><font style="vertical-align: inherit;">首次加载页面时，它可以工作。</font><font style="vertical-align: inherit;">但是，当您单击链接时，其中的任何内容</font></font><code>ready( function($) {</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都不会执行（因为该页面实际上不会再次加载）。</font><font style="vertical-align: inherit;">好的解释：</font></font><a href="https://stackoverflow.com/questions/18769109/rails-4-turbo-link-error-uncaught-typeerror-cannot-read-property-position-of/18770219?noredirect=1#18770219"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是：在涡轮链接打开时，确保jQuery事件正常工作的正确方法是什么？</font><font style="vertical-align: inherit;">您是否将脚本包装在特定于Rails的侦听器中？</font><font style="vertical-align: inherit;">或者，也许rails具有某种使它不必要的魔力？</font><font style="vertical-align: inherit;">该文档对如何工作有点含糊不清，尤其是在通过清单（如application.js）加载多个文件方面。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1775篇《Rails 4：如何在Turbo-Links中使用$ {document）.ready（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云达蒙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上都不适合我，我通过不使用jQuery的$ {document）.ready来解决此问题，而是使用addEventListener来解决。</font></font></p>

<pre><code>document.addEventListener("turbolinks:load", function() {<font></font>
  // do something<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用：</font></font></p>

<pre><code>document.addEventListener("turbolinks:load", function() {<font></font>
  // your code here<font></font>
})<font></font>
</code></pre>

<p><a href="https://github.com/turbolinks/turbolinks#running-javascript-when-a-page-loads" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自turbolinks doc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ADavaid</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚了解了解决此问题的另一种选择。</font><font style="vertical-align: inherit;">如果加载</font></font><a href="https://github.com/kossnocorp/jquery.turbolinks"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>jquery-turbolinks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宝石</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将绑定Rails的Turbolinks事件的</font></font><code>document.ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件，这样你就可以用通常的方式写你的jQuery。</font><font style="vertical-align: inherit;">您只需</font><font style="vertical-align: inherit;">在js清单文件（默认为：）</font></font><code>jquery.turbolinks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font><font style="vertical-align: inherit;">添加即可</font><font style="vertical-align: inherit;">。</font></font><code>jquery</code><font style="vertical-align: inherit;"></font><code>application.js</code><font style="vertical-align: inherit;"></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
