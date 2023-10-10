---
layout: question
title:  为什么复选框事件处理程序中的\`MouseEvent\`不是通用的？
date:   2020-03-16T07:18:43.000Z
description: 我有一个复选框TSX（JSX）元素：<input type="checkbox" name={i.toString()} onClick={this....
img: 
author: L西里
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个复选框TSX（JSX）元素：</font></font></p>

<pre><code>&lt;input type="checkbox" name={i.toString()} onClick={this.handleCheckboxClick} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">借助VS代码，我知道的输入参数类型</font></font><code>this.handleCheckboxClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>MouseEvent&lt;HTMLInputElement&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我实现了：</font></font></p>

<pre><code>private handleCheckboxClick(event: MouseEvent&lt;HTMLInputElement&gt;) {<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我收到一条错误消息</font></font><code>[ts] Type 'MouseEvent' is not generic.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下图所示：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6321/images/thumbnails/1584342995825.jpg" data-src="https://www.samyoc.com//uploads/users/6321/images/1584342995825.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/2xdvK.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的软件包的版本：</font></font></p>

<pre><code>"@types/react": "^15.0.29",<font></font>
"@types/react-dom": "^15.5.0",<font></font>
"react": "^15.6.1",<font></font>
"react-dom": "^15.6.1",<font></font>
"typescript": "^2.3.4",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1787篇《为什么复选框事件处理程序中的`MouseEvent`不是通用的？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
