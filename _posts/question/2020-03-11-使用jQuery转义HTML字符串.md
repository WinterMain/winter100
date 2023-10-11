---
layout: question
title:  使用jQuery转义HTML字符串
date:   2020-03-11T15:33:18.000Z
description: 有谁知道一种简单的方法来从jQuery的字符串中转义HTML ？我需要能够传递任意字符串并正确地对其进行转义以显示在HTML页面中（防止JavaScrip...
img: 
author: 逆天西里
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道一种简单的方法来从</font></font><a href="http://jquery.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串中转义HTML </font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我需要能够传递任意字符串并正确地对其进行转义以显示在HTML页面中（防止JavaScript / HTML注入攻击）。</font><font style="vertical-align: inherit;">我敢肯定可以扩展jQuery来做到这一点，但是目前我对框架还不了解。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第857篇《使用jQuery转义HTML字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用vanilla js轻松实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在文档中添加文本节点即可。</font><font style="vertical-align: inherit;">浏览器会将其转义。</font></font></p>

<pre><code>var escaped = document.createTextNode("&lt;HTML TO/ESCAPE/&gt;")<font></font>
document.getElementById("[PARENT_NODE]").appendChild(escaped)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很好的例子。</font></font></p>

<pre><code>function escapeHtml(str) {<font></font>
    if (typeof(str) == "string"){<font></font>
        try{<font></font>
            var newStr = "";<font></font>
            var nextCode = 0;<font></font>
            for (var i = 0;i &lt; str.length;i++){<font></font>
                nextCode = str.charCodeAt(i);<font></font>
                if (nextCode &gt; 0 &amp;&amp; nextCode &lt; 128){<font></font>
                    newStr += "&amp;#"+nextCode+";";<font></font>
                }<font></font>
                else{<font></font>
                    newStr += "?";<font></font>
                }<font></font>
             }<font></font>
             return newStr;<font></font>
        }<font></font>
        catch(err){<font></font>
        }<font></font>
    }<font></font>
    else{<font></font>
        return str;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西里神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过最后的测试后，我可以推荐</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和完全</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨浏览器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（DOM）解决方案：</font></font></p>

<pre><code>function HTMLescape(html){<font></font>
    return document.createElement('div')<font></font>
        .appendChild(document.createTextNode(html))<font></font>
        .parentNode<font></font>
        .innerHTML<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您重复多次，则可以使用一次准备好的变量进行操作：</font></font></p>

<pre><code>//prepare variables<font></font>
var DOMtext = document.createTextNode("test");<font></font>
var DOMnative = document.createElement("span");<font></font>
DOMnative.appendChild(DOMtext);<font></font>
<font></font>
//main work for each case<font></font>
function HTMLescape(html){<font></font>
  DOMtext.nodeValue = html;<font></font>
  return DOMnative.innerHTML<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看我的最终性能</font></font><a href="http://jsperf.com/htmlencoderegex/35" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://stackoverflow.com/a/17450136/1828986"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到我参加这个聚会有多晚，但是我有一个非常简单的解决方案，不需要jQuery。</font></font></p>

<pre><code>escaped = new Option(unescaped).innerHTML;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这不会转义引号。</font><font style="vertical-align: inherit;">唯一需要转义引号的情况是将内容内联粘贴到HTML字符串中的属性上。</font><font style="vertical-align: inherit;">对于我来说，很难想象这样做会是一个好的设计。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2：如果性能至关重要，则性能最高的解决方案（大约50％）仍然是一系列正则表达式的替代品。</font><font style="vertical-align: inherit;">现代浏览器会检测到正则表达式不包含任何运算符，仅包含一个字符串，并将它们全部折叠为一个操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您转义使用HTML，那么我认为只有三点是真正必要的：</font></font></p>

<pre><code>html.replace(/&amp;/g, "&amp;amp;").replace(/&lt;/g, "&amp;lt;").replace(/&gt;/g, "&amp;gt;");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据你的使用情况，您可能还需要做这样的事情</font></font><code>"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font></font><code>&amp;quot;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果列表足够大，我将使用一个数组：</font></font></p>

<pre><code>var escaped = html;<font></font>
var findReplace = [[/&amp;/g, "&amp;amp;"], [/&lt;/g, "&amp;lt;"], [/&gt;/g, "&amp;gt;"], [/"/g, "&amp;quot;"]]<font></font>
for(var item in findReplace)<font></font>
    escaped = escaped.replace(findReplace[item][0], findReplace[item][1]);<font></font>
</code></pre>

<p><code>encodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 只会针对网址而不是HTML进行转义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于使用的下划线：</font></font></p>

<pre><code>_.escape(string) 
</code></pre>

<p><a href="http://underscorejs.org"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个实用程序库，提供了许多本机js不提供的功能。</font><font style="vertical-align: inherit;">还有</font></font><a href="https://lodash.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是与下划线相同的API，但被重写以提高性能。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
