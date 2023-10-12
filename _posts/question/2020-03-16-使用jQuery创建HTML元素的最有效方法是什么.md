---
layout: question
title:  使用jQuery创建HTML元素的最有效方法是什么？
date:   2020-03-16T03:59:16.000Z
description: 最近，我一直在做很多模态窗口弹出窗口，而我没有使用jQuery。我用来在页面上创建新元素的方法绝大多数都是这样的：$("<div></div>");...
img: 
author: 小胖蛋蛋
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我一直在做很多模态窗口弹出窗口，而我没有使用jQuery。</font><font style="vertical-align: inherit;">我用来在页面上创建新元素的方法绝大多数都是这样的：</font></font></p>

<pre><code>$("&lt;div&gt;&lt;/div&gt;");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我感到这不是执行此操作的最佳或最有效的方法。</font><font style="vertical-align: inherit;">从性能的角度来看，在jQuery中创建元素的最佳方法是什么？</font></font></p>

<p><a href="https://stackoverflow.com/a/268520/32943"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有以下建议的基准。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1703篇《使用jQuery创建HTML元素的最有效方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人已经做了一个基准测试：
 </font></font><a href="https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery document.createElement是否等效？</font></font></a></p>

<p><code>$(document.createElement('div'))</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是最大的赢家。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您正在使用最佳方法，尽管可以将其优化为：</font></font></p>

<pre><code> $("&lt;div/&gt;");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从CPU的角度来看，您不需要从原始操作中获得很少性能的原始性能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>$(document.createElement('div'));</code>  <a href="http://jsperf.com/jquery-vs-createelement" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基准测试表明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该技术是最快的。</font><font style="vertical-align: inherit;">我推测这是因为jQuery不必将其标识为元素并创建元素本身。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该真正使用不同的Javascript引擎运行基准测试，并用结果权衡受众。</font><font style="vertical-align: inherit;">从那里做出决定。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是问题的正确答案，但我还是想分享一下...</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>document.createElement('div')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您要动态制作大量元素并追加到DOM时，</font><font style="vertical-align: inherit;">使用just </font><font style="vertical-align: inherit;">和skip JQuery将大大提高性能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有很多HTML内容（不只是一个div），则可以考虑将HTML构建到隐藏容器内的页面中，然后对其进行更新并在需要时使其可见。</font><font style="vertical-align: inherit;">这样，您的标记的很大一部分就可以由浏览器预先解析，并且避免在调用时陷入JavaScript的泥潭。</font><font style="vertical-align: inherit;">希望这可以帮助！</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
