---
layout: question
title:  将SVG嵌入到ReactJS中
date:   2020-03-11T09:58:27.000Z
description: 是否可以将SVG标记嵌入到ReactJS组件中？ render  function() {  return (    <span>      <...
img: 
author: 达蒙理查德
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以将SVG标记嵌入到ReactJS组件中？ </font></font></p>

<pre><code>render: function() {<font></font>
  return (<font></font>
    &lt;span&gt;<font></font>
      &lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmln ...<font></font>
    &lt;/span&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果错误： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持命名空间属性。</font><font style="vertical-align: inherit;">ReactJSX不是XML。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是这样做。</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/facebook/react-art" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React React之类的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">东西</font><font style="vertical-align: inherit;">对于我想做的</font><font style="vertical-align: inherit;">事情来说</font><font style="vertical-align: inherit;">是过大的手段。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第790篇《将SVG嵌入到ReactJS中》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是想包含一个静态svg字符串，则可以使用</font></font><code>dangerouslySetInnerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>render: function() {<font></font>
    return &lt;span dangerouslySetInnerHTML={{__html: "&lt;svg&gt;...&lt;/svg&gt;"}} /&gt;;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React将直接包含标记而不进行任何处理。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
