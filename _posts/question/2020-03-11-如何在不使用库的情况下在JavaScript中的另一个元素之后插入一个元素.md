---
layout: question
title:  如何在不使用库的情况下在JavaScript中的另一个元素之后插入一个元素？
date:   2020-03-11T04:04:14.000Z
description: 还有insertBefore()在JavaScript，但我怎么能插入一个元素后，另一种元素，而不使用jQuery或其他库？...
img: 
author: 蛋蛋伽罗猿
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有</font></font><code>insertBefore()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript，但我怎么能插入一个元素</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种元素，而不使用jQuery或其他库？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第638篇《如何在不使用库的情况下在JavaScript中的另一个元素之后插入一个元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>appendChild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数在元素之后插入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://www.w3schools.com/jsref/met_node_appendchild.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.w3schools.com/jsref/met_node_appendchild.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/jsref/met_node_appendchild.asp</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>if( !Element.prototype.insertAfter ) {<font></font>
    Element.prototype.insertAfter = function(item, reference) {<font></font>
        if( reference.nextSibling )<font></font>
            reference.parentNode.insertBefore(item, reference.nextSibling);<font></font>
        else<font></font>
            reference.parentNode.appendChild(item);<font></font>
    };<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您可以简单地执行以下操作：</font></font></p>

<pre><code>referenceNode.parentNode.insertBefore( newNode, referenceNode )<font></font>
referenceNode.parentNode.insertBefore( referenceNode, newNode )<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁逆天A</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>node1.after(node2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生</font></font><code>&lt;node1/&gt;&lt;node2/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中node1和node2是DOM节点。</font></font></p>

<p><code>.after()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较旧的浏览器</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[1]</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持</font><font style="vertical-align: inherit;">，因此您可能需要应用polyfill。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/API/ChildNode/after</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐飞云逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>referenceNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要放置的节点</font><font style="vertical-align: inherit;">在哪里</font></font><code>newNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">If </font></font><code>referenceNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是其父元素中的最后一个子元素，这很好，因为</font></font><code>referenceNode.nextSibling</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将是，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-952280727" rel="noreferrer"><code>insertBefore</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加到列表的末尾来处理这种情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以：</font></font></p>

<pre><code>function insertAfter(newNode, referenceNode) {<font></font>
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/UqDJk/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里尝试。</font></font></strong></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
