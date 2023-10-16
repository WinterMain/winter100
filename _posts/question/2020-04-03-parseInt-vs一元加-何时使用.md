---
layout: question
title:  parseInt vs一元加-何时使用
date:   2020-04-03T04:16:12.000Z
description: 这行之间有什么区别：var a = parseInt("1", 10); // a === 1这条线var a = +"1"; // a =...
img: 
author: APro小胖
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这行之间有什么区别：</font></font></p>

<pre><code>var a = parseInt("1", 10); // a === 1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这条线</font></font></p>

<pre><code>var a = +"1"; // a === 1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font><a href="http://jsperf.com/parseint-vs-unary-operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsperf测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表明，假设适用于node.js !，在当前的chrome版本中，一元运算符要快得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我尝试转换不是数字的字符串，都将返回</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var b = parseInt("test" 10); // b === NaN<font></font>
var b = +"test"; // b === NaN<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我什么时候应该更喜欢使用</font></font><code>parseInt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一元加号（尤其是在node.js中）？？？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：和双波浪号运算符有</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4014篇《parseInt vs一元加-何时使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也要</font><font style="vertical-align: inherit;">考虑</font></font><a href="http://jsperf.com/parseint-vs-unary-operator" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">令我感到惊讶的是，</font></font><code>parseInt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iOS上胜过一进制：)这仅对CPU消耗大的Web应用程序有用。</font><font style="vertical-align: inherit;">作为一种经验法则，我建议JS opt-guy从当今的移动性能角度考虑将JS运算符放在另一个运算符上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请先移动版</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ;）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
