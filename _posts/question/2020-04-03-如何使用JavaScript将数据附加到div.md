---
layout: question
title:  如何使用JavaScript将数据附加到div？
date:   2020-04-03T03:36:14.000Z
description: 我正在使用AJAX将数据附加到div元素，从JavaScript填充div，如何在不丢失div中找到的先前数据的情况下将新数据附加到div？...
img: 
author: Mandy
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用AJAX将数据附加到div元素，从JavaScript填充div，如何在不丢失div中找到的先前数据的情况下将新数据附加到div？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3968篇《如何使用JavaScript将数据附加到div？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用jQuery。</font><font style="vertical-align: inherit;">这使其非常简单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需下载jQuery文件，即可将jQuery添加到您的HTML中</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
，也可以在线用户链接：</font></font></p>

<pre><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试这个：</font></font></p>

<pre><code> $("#divID").append(data);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗达蒙小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE9 +（Vista +）解决方案，无需创建新的文本节点：</font></font></p>

<pre><code>var div = document.getElementById("divID");<font></font>
div.textContent += data + " ";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这对我来说并没有什么用处，因为在每条消息后都需要换一行，因此我的DIV变成了带有以下代码的样式化UL：</font></font></p>

<pre><code>var li = document.createElement("li");<font></font>
var text = document.createTextNode(data);<font></font>
li.appendChild(text);<font></font>
ul.appendChild(li);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与innerHTML的区别</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">innerHTML返回其名称所指示的HTML。</font><font style="vertical-align: inherit;">通常，为了检索或写入元素内的文本，人们使用innerHTML。</font><font style="vertical-align: inherit;">应该使用textContent代替。</font><font style="vertical-align: inherit;">因为文本没有被解析为HTML，所以它可能具有更好的性能。</font><font style="vertical-align: inherit;">此外，这避免了XSS攻击媒介。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Java脚本</font></font></strong></p>

<pre><code>document.getElementById("divID").html("this text will be added to div");
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></strong></p>

<pre><code>$("#divID").html("this text will be added to div");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font></font><code>.html()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不带任何参数即可查看是否已输入。</font><font style="vertical-align: inherit;">您可以使用浏览器控制台快速测试这些功能，然后再在代码中使用它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用appendChild：</font></font></p>

<pre><code>var theDiv = document.getElementById("&lt;ID_OF_THE_DIV&gt;");<font></font>
var content = document.createTextNode("&lt;YOUR_CONTENT&gt;");<font></font>
theDiv.appendChild(content);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用innerHTML：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这种方法将删除@BiAiB提到的现有元素的所有侦听器。</font><font style="vertical-align: inherit;">因此，如果您打算使用此版本，请谨慎使用。</font></font></p>

<pre><code>var theDiv = document.getElementById("&lt;ID_OF_THE_DIV&gt;");<font></font>
theDiv.innerHTML += "&lt;YOUR_CONTENT&gt;"; <font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
