---
layout: question
title:  如何在JavaScript中更改span元素的文本
date:   2020-03-23T06:14:18.000Z
description: 如果我有跨度，请说：<span id="myspan"> hereismytext </span>如何使用JavaScript将“ hereis...
img: 
author: 泡芙
category: question
answer: 3
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我有跨度，请说：</font></font></p>

<pre><code>&lt;span id="myspan"&gt; hereismytext &lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript将“ hereismytext”更改为“ newtext”？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2810篇《如何在JavaScript中更改span元素的文本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>Jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且以上方法均无济于事，我不知道为什么，但这有效：</font></font></p>

<pre><code> $("#span_id").text("new_value");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的innerHTML</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SO不推荐</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">相反，您应该创建一个textNode。</font><font style="vertical-align: inherit;">这样，您就可以“绑定”您的文本，并且至少在这种情况下，您不容易受到XSS攻击。</font></font></p>

<pre><code>document.getElementById("myspan").innerHTML = "sometext"; //INSECURE!!
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方式：</font></font></p>

<pre><code>span = document.getElementById("myspan");<font></font>
txt = document.createTextNode("your cool text");<font></font>
span.appendChild(txt);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此漏洞的更多信息：
 </font></font><a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨站点脚本（XSS）-OWASP</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2017年11月4日编辑：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://stackoverflow.com/users/2460883/mumush"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@mumush</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font><font style="vertical-align: inherit;">修改的第三行代码</font><font style="vertical-align: inherit;">：“改为使用appendChild（）;”。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
顺便说一句，根据</font></font><a href="https://stackoverflow.com/users/1293622/jimbo-jonny"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Jimbo Jonny所说，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为应该通过应用“分层安全性”原则将所有内容都视为用户输入。</font><font style="vertical-align: inherit;">这样，您就不会遇到任何惊喜。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于现代浏览器，您应该使用：</font></font></p>

<pre><code>document.getElementById("myspan").textContent="newtext";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管较旧的浏览器可能不知道</font></font><code>textContent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不建议使用，</font></font><code>innerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为当用户输入新文本时，它会引入XSS漏洞（有关更多详细讨论，请参见下面的其他答案）：</font></font></p>

<pre><code>//POSSIBLY INSECURE IF NEWTEXT BECOMES A VARIABLE!!<font></font>
document.getElementById("myspan").innerHTML="newtext";<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
