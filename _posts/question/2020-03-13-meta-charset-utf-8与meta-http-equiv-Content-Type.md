---
layout: question
title:  <meta charset =“ utf-8”>与<meta http-equiv =“ Content-Type”>
date:   2020-03-13T09:44:10.000Z
description: 为了为HTML5 Doctype定义字符集，我应该使用哪种表示法？短：<meta charset="utf-8" /> 长：<meta ...
img: 
author: 猴子小小Mandy
category: question
answer: 6
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 Doctype</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义字符集，</font><font style="vertical-align: inherit;">我应该使用哪种表示法？</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短：</font></font></p>

<pre><code>&lt;meta charset="utf-8" /&gt; 
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长：</font></font></p>

<pre><code>&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
</code></pre></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1495篇《<meta charset =“ utf-8”>与<meta http-equiv =“ Content-Type”>》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Jim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><code>&lt;meta charset="utf-8"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是随HTML5一起引入的。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如文档中所述，两者均有效。</font><font style="vertical-align: inherit;">但是，</font></font><code>&lt;meta charset="utf-8"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于HTML5（更易于键入/记住）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不久的将来</font><strong><font style="vertical-align: inherit;">，旧样式必定会过时</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我会坚持新的</font></font><code>&lt;meta charset="utf-8"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><br><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有一种方法，但是向上。</font><font style="vertical-align: inherit;">以技术为例，那是淘汰旧的（真的，真的很快）</font></font></em></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font></font></strong> <a href="https://www.w3schools.com/tags/att_meta_charset.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML元字符集属性-W3Schools</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿LEY理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种形式的</font></font><a href="http://www.w3schools.com/tags/att_meta_charset.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">meta charset</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明都是等效的，并且在浏览器之间应相同。</font><font style="vertical-align: inherit;">但是，在将Web文件的字符集声明为UTF-8时，需要记住一些事项：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存文件（S）以UTF-8编码</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://www.w3.org/International/questions/qa-byte-order-mark" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字节顺序标记</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（BOM）。</font></font></li>
<li>Declare the encoding in your HTML files using <a href="http://www.w3schools.com/tags/att_meta_charset.asp" rel="noreferrer">meta charset</a> (like above).</li>
<li>Your web server <em>must</em> serve your files, declaring the UTF-8 encoding in the Content-Type HTTP header.</li>
</ol>

<p>Apache servers are configured to serve files in ISO-8859-1 by default, so you need to add the following line to your <code>.htaccess</code> file:</p>

<pre><code>AddDefaultCharset UTF-8
</code></pre>

<p>This will configure Apache to serve your files declaring UTF-8 encoding in the Content-Type response header, but your files <em>must</em> be saved in UTF-8 (without BOM) to begin with.</p>

<p>Notepad cannot save your files in UTF-8 without the BOM. A free editor that can is <a href="http://notepad-plus-plus.org/" rel="noreferrer">Notepad++</a>. On the program menu bar, select "Encoding &gt; Encode in UTF-8 without BOM". You can also open files and re-save them in UTF-8 using "Encoding &gt; Convert to UTF-8 without BOM".</p>

<p>More on the <a href="http://en.wikipedia.org/wiki/Byte_order_mark" rel="noreferrer">Byte Order Mark (BOM) at Wikipedia</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将签名嵌入到电子邮件中，我将使用长版本：</font></font></p>

<pre><code>&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因是使用html5的电子邮件阅读器并不多，因此始终最好使用旧的html样式。</font><font style="vertical-align: inherit;">实际上，使用表比使用divs + css更好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user"> ....</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>&lt;meta charset="utf-8" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5时用于Web浏览器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用HTML4和XHTML时，或过时的DOM解析器，像</font></font><code>DOMDocument</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP 5.3</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些基于</font></font><a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/meta" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Foundation</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="https://www.sitepoint.com/meta-tags-html-basics-best-practices/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">sitepoint的</font></a><font style="vertical-align: inherit;">新闻</font></font><a href="https://www.sitepoint.com/meta-tags-html-basics-best-practices/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请勿使用该值（</font></font><code>http-equiv=content-type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因为它已过时。</font><font style="vertical-align: inherit;">优先使用</font></font><code>charset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt; </font></font><code>meta</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;元素</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。
  </font></font><a href="https://i.stack.imgur.com/4alVf.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/4alVf.png" alt="在此处输入图片说明"></a></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML5中，它们是等效的。</font><font style="vertical-align: inherit;">使用较短的一个，更容易记住和键入。</font></font><a href="http://code.google.com/p/doctype-mirror/wiki/MetaCharsetAttribute"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持很好，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它是为向后兼容而设计的。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
