---
layout: question
title:  如何使用Jade / Pug渲染内联JavaScript？
date:   2020-03-23T03:42:11.000Z
description: 我正在尝试使用Jade（http //jade-lang.com/）使JavaScript呈现在页面上我的项目在带有Express的NodeJS中，在...
img: 
author: LEY老丝樱
category: question
answer: 5
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Jade（http://jade-lang.com/）使JavaScript呈现在页面上</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目在带有Express的NodeJS中，在我想在头中编写一些内联JavaScript之前，传送功能都可以正常工作。</font><font style="vertical-align: inherit;">即使从Jade文档中获取示例，我也无法使其正常工作，我还缺少什么？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">玉模板</font></font></h2>

<pre><code>!!! 5<font></font>
html(lang="en")<font></font>
  head<font></font>
    title "Test"<font></font>
    script(type='text/javascript')<font></font>
      if (10 == 10) {<font></font>
        alert("working")<font></font>
      }<font></font>
  body<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中生成的呈现HTML</font></font></h2>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;title&gt;"Test"&lt;/title&gt;<font></font>
  &lt;script type="text/javascript"&gt;<font></font>
    &lt;if&gt;(10 == 10) {&lt;alert working&gt;&lt;/alert&gt;&lt;/if&gt;}<font></font>
  &lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里肯定有什么想念的想法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>:javascript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器。</font><font style="vertical-align: inherit;">这将生成一个脚本标记，并将脚本内容转义为CDATA：</font></font></p>

<pre><code>!!! 5<font></font>
html(lang="en")<font></font>
  head<font></font>
    title "Test"<font></font>
    :javascript<font></font>
      if (10 == 10) {<font></font>
        alert("working")<font></font>
      }<font></font>
  body<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于多行内容，玉通常使用“ |”，但是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅接受文本（例如脚本，样式和文本区域）的标签不需要前导| </font><font style="vertical-align: inherit;">字符</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是说，我无法重现您遇到的问题。</font><font style="vertical-align: inherit;">当我将该代码粘贴到Jade模板中时，它会产生正确的输出，并在页面加载时提示我。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用指定类型的脚本标记，只需将其包括在点号之前：</font></font></p>

<pre><code>script(type="text/javascript").<font></font>
  if (10 == 10) {<font></font>
    alert("working");<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将编译为：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
  if (10 == 10) {<font></font>
    alert("working");<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅不使用脚本标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font><code>|</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>script<font></font>
  | if (10 == 10) {<font></font>
  |   alert("working")<font></font>
  | }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或搭配</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>script.<font></font>
  if (10 == 10) {<font></font>
    alert("working")<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在后面加上点号即可使用“脚本”标签。</font></font></p>

<pre><code>script.<font></font>
  var users = !{JSON.stringify(users).replace(/&lt;\//g, "&lt;\\/")}<font></font>
</code></pre>

<p><a href="https://github.com/pugjs/pug/blob/master/examples/dynamicscript.pug" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/pugjs/pug/blob/master/examples/dynamicscript.pug</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
