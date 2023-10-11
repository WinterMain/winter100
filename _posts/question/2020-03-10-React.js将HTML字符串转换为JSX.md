---
layout: question
title:  React.js将HTML字符串转换为JSX
date:   2020-03-10T14:35:29.000Z
description: 我在处理Facebook的ReactJS时遇到问题。每当我执行ajax并想要显示html数据时，ReactJS会将其显示为文本。（见下图）通过jq...
img: 
author: 猴子蛋蛋
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在处理Facebook的ReactJS时遇到问题。</font><font style="vertical-align: inherit;">每当我执行ajax并想要显示html数据时，ReactJS会将其显示为文本。</font><font style="vertical-align: inherit;">（见下图）</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/7187/images/thumbnails/1583850801791.png" data-src="https://www.samyoc.com//uploads/users/7187/images/1583850801791.png" alt="ReactJS渲染字符串"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过jquery Ajax的成功回调函数显示数据。</font></font></p>

<pre><code>$.ajax({<font></font>
   url: url here,<font></font>
   dataType: "json",<font></font>
   success: function(data) {<font></font>
      this.setState({<font></font>
           action: data.action<font></font>
      })<font></font>
   }.bind(this)<font></font>
});<font></font>
</code></pre>

<p><img src="https://www.samyoc.com//uploads/users/7187/images/thumbnails/1583850801814.png" data-src="https://www.samyoc.com//uploads/users/7187/images/1583850801814.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有简单的方法可以将其转换为html？</font><font style="vertical-align: inherit;">我应该如何使用ReactJS？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第525篇《React.js将HTML字符串转换为JSX》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
