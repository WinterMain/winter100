---
layout: question
title:  如何在Windows的Node.js中运行hello.js文件？
date:   2020-03-18T10:20:49.000Z
description: 我正在尝试在一个名为hello.js的单独文件中运行用javascript编写的hello world程序当前正在运行Windows版本的node.j...
img: 
author: 猴子达蒙A
category: question
answer: 0
tags: windows Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在一个名为hello.js的单独文件中运行用javascript编写的hello world程序</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前正在运行Windows版本的node.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码可以在控制台窗口中完美运行，但是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Windows环境中引用该路径</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>C:\abc\zyx\hello.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Unix中，我猜它显示的是$ node hello.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我绝对不是Node.js的新手，如果我做错了什么，请纠正我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了 </font></font></p>

<p><code>&gt; node  C:\abc\zyx\hello.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ----没工作</font></font></p>

<p><code>&gt; C:\abc\zyx\hello.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -没用</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPDATE1：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将node.exe添加到了hello.js文件所在的文件夹中。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
添加了指向文件夹c：\ abc \ zyx \的路径，但出现错误提示</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReferenceError：您好未定义</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看hello.js的内容 </font></font></p>

<pre><code>setTimeout(function() {<font></font>
console.log('World!');<font></font>
}, 2000);<font></font>
console.log('Hello');<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我已经尝试了所有这些版本，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但似乎都没有用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可能是我做错了什么。</font></font></p>

<pre><code>&gt;node hello.js<font></font>
&gt;$ node hello.js<font></font>
&gt;node.exe hello.js<font></font>
&gt;node /hello.js<font></font>
&gt;node \hello.js<font></font>
&gt; \node \hello.js<font></font>
&gt; /node /hello.js<font></font>
&gt; C:\abc\xyz\node.exe C:\abc\xyz\hello.js<font></font>
&gt; C:\abc\xyz\node.exe C:/abc/xyz/hello.js<font></font>
&gt; hello.js<font></font>
&gt; /hello.js<font></font>
&gt; \hello.js<font></font>
&gt;node hello<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考我的文件结构</font></font></strong></p>

<p><img src="https://www.samyoc.com//uploads/users/21838/images/thumbnails/1584526722406.jpg" data-src="https://www.samyoc.com//uploads/users/21838/images/1584526722406.jpg" alt="在此处输入图片说明"></p>

<p><strong>RESOLVED:</strong>
Instead of running node.exe, try running in command prompt with the following option and it worked.</p>

<pre><code>c:\&gt;node c:\abc\hello.js<font></font>
Hello<font></font>
World! (after 2 secs)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2142篇《如何在Windows的Node.js中运行hello.js文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
