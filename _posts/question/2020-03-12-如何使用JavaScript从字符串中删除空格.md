---
layout: question
title:  如何使用JavaScript从字符串中删除空格？
date:   2020-03-12T07:37:26.000Z
description: 如何删除字符串中的空格？例如：输入：'/var/www/site/Brand new document.docx'输出：'/var/ww...
img: 
author: 西里小哥
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何删除字符串中的空格？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong></p>

<pre><code>'/var/www/site/Brand new document.docx'
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong></p>

<pre><code>'/var/www/site/Brandnewdocument.docx'
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1070篇《如何使用JavaScript从字符串中删除空格？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管可以使用正则表达式删除空格，但是有一个简单的函数可以删除所有空白</font></font><code>.trim();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var str = "abr a cadab ra";<font></font>
str = str.trim();<font></font>
//str = "abracadabra"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = b = " /var/www/site/Brand new   document.docx ";<font></font>
<font></font>
console.log( a.split(' ').join('') );<font></font>
console.log( b.replace( /\s/g, '') ); </code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方法可以做到这一点！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下@rsplak答案：实际上，使用拆分/联接方式比使用regexp更快。</font><font style="vertical-align: inherit;">查看性能</font></font><a href="https://jsperf.com/best-remove-spaces" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试案例</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以 </font></font></p>

<p><code>var result = text.split(' ').join('')</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行速度比</font></font></p>

<p><code>var result = text.replace(/\s+/g, '')</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在小文本上这无关紧要，但是对于时间很重要的情况（例如在文本分析器中，尤其是在与用户交互时）而言，这很重要。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，</font></font><code>\s+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理各种各样的空格字符。</font><font style="vertical-align: inherit;">在</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和之间</font></font><code>\t</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它还与</font></font><code>\u00a0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符</font><font style="vertical-align: inherit;">匹配</font><font style="vertical-align: inherit;">，这就是</font></font><code>&amp;nbsp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用来获取文本时所输入的字符</font></font><code>textDomNode.nodeValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我认为这里的结论可以如下：如果只需要替换</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空格</font></font></em> <code>' '</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用split / join。</font><font style="vertical-align: inherit;">如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号类</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以有不同的</font><em><font style="vertical-align: inherit;">符号</font></em><font style="vertical-align: inherit;"> -使用</font></font><code>replace(/\s+/g, '')</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong>SHORTEST and FASTEST</strong>: <code>str.replace(/ /g, '');</code></p>

<hr>

<p>Benchmark:</p>

<p>Here my results - (2018.07.13) MacOs High Sierra 10.13.3 on Chrome 67.0.3396 (64-bit), Safari 11.0.3 (13604.5.6), Firefox 59.0.2 (64-bit) ):</p>

<h3>SHORT strings</h3>

<p>Short string similar to examples from OP question</p>

<p><a href="https://i.stack.imgur.com/RcsMa.png" rel="noreferrer"><img src="https://i.stack.imgur.com/RcsMa.png" alt="在此处输入图片说明"></a></p>

<p>The fastest solution on all browsers is <code>/ /g</code> (regexp1a) -  Chrome 17.7M (operation/sec), Safari 10.1M, Firefox 8.8M. The slowest for all browsers was <code>split-join</code> solution. Change <code></code> to <code>\s</code> or add <code>+</code> or <code>i</code> to regexp slows down processing.</p>

<h3>LONG strings</h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大约300万个字符的字符串，结果为：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">regexp1a</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：Safari 50.14 ops / sec，Firefox 18.57，Chrome 8.95</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">regexp2b</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：Safari 38.39，Firefox 19.45，Chrome 9.26</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">split-join</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：Firefox 26.41，Safari 23.10，Chrome 7.98，</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在计算机上运行它：</font><a href="https://jsperf.com/remove-string-spaces/1" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsperf.com/remove-string-spaces/1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsperf.com/remove-string-spaces/1</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
