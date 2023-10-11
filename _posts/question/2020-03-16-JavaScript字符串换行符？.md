---
layout: question
title:  JavaScript字符串换行符？
date:   2020-03-16T07:08:39.000Z
description: 是\n在Javascript中所有平台的通用换行字符序列？如果不是，我如何确定当前环境的角色？我不是在问HTML换行符（<BR/>）。我在问JavaS...
img: 
author: JimEva
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Javascript中所有平台的通用换行字符序列？</font><font style="vertical-align: inherit;">如果不是，我如何确定当前环境的角色？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是在问HTML换行符（</font></font><code>&lt;BR/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我在问JavaScript字符串中使用的换行符序列。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1781篇《JavaScript字符串换行符？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>document.write/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>document.writeln</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>printAccountSummary: function()<font></font>
        {return "Welcome!" + "\n" + "Your balance is currently $1000 and your interest rate is 1%."}<font></font>
};<font></font>
console.log(savingsAccount.printAccountSummary()); // method<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">印刷品：</font></font></p>

<pre><code>Welcome!<font></font>
Your balance is currently $1000 and your interest rate is 1%.<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我遇到的所有情况就好了。</font><font style="vertical-align: inherit;">如果您正在使用Web，请使用它</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不用担心（除非您有与换行有关的问题）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GONear</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信是-当您使用JS字符串时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果要生成HTML，则必须使用</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签（不是</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为您不再使用JS了）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">\ n</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">\ r \ n</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示换行的问题</font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
神奇的</font><font style="vertical-align: inherit;">是，用于回车</font><font style="vertical-align: inherit;">的字符</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">\ r</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像换行符一样为我工作。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，在某些情况下，考虑\ r也很有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO老丝LEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取当前浏览器的行分隔符：</font></font></p>

<pre><code>function getLineSeparator() {<font></font>
  var textarea = document.createElement("textarea");<font></font>
  textarea.value = "\n"; <font></font>
  return textarea.value;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端梅</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在ES6中使用``引号（Esc按钮下方的引号）。</font><font style="vertical-align: inherit;">所以你可以这样写：</font></font></p>

<pre><code>var text = `fjskdfjslfjsl<font></font>
skfjslfkjsldfjslfjs<font></font>
jfsfkjslfsljs`;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaEva斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">电子邮件链接功能我使用“％0D％0A”</font></font></p>

<pre><code>function sendMail() {   <font></font>
var bodydata="Before "+ "%0D%0A";<font></font>
    bodydata+="After"<font></font>
<font></font>
var MailMSG = "mailto:aaa@sss.com" <font></font>
         + "?cc=07@sss.com" <font></font>
         + "&amp;subject=subject" <font></font>
         + "&amp;body=" + bodydata; <font></font>
window.location.href = MailMSG; <font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[HTML]</font></font></p>

<pre><code>&lt;a href="#" onClick="sendMail()"&gt;Contact Us&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗达蒙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅处理换行符的所有情况而不是先检查哪种情况然后再应用它，可能是最简单的。</font><font style="vertical-align: inherit;">例如，如果您需要替换换行符，请执行以下操作：</font></font></p>

<pre><code>htmlstring = stringContainingNewLines.replace(/(\r\n|\n|\r)/gm, "&lt;br&gt;");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用“ \ n”。</font><font style="vertical-align: inherit;">尝试一下：</font></font></p>

<pre><code>var string = "this\<font></font>
is a multi\<font></font>
line\<font></font>
string";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需输入反斜杠并继续进行即可！</font><font style="vertical-align: inherit;">奇迹般有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神奇</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，请使用\ n，除非要生成要在其中使用的html代码 </font></font><code>&lt;br /&gt;</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
