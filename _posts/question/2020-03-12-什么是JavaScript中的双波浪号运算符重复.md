---
layout: question
title:  什么是JavaScript中的“双波浪号”（~~）运算符？\[重复\]
date:   2020-03-12T07:42:15.000Z
description:                                                                          ...
img: 
author: GreenMandy
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b>This question already has answers here</b>:
                            
                        </div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/4055633/what-does-double-tilde-do-in-javascript" dir="ltr">What does ~~ (“double tilde”) do in Javascript?</a>
                                <span class="question-originals-answer-count">
                                    (9 answers)
                                </span>
                        </div>
                                <div class="grid--cell mb0 mt8">Closed <span title="2013-04-28 15：59：21Z" class="relativetime">6 years ago</span>.</div>
            </div>
                    </aside>
<p>I'm seeing this in some code, and I have no idea what it does:</p>

<pre><code>var jdn = function(y, m, d) {<font></font>
  var tmp = (m &lt;= 2 ? -1 : 0);<font></font>
  return ~~((1461 * (y + 4800 + tmp)) / 4) + <font></font>
         ~~((367 * (m - 2 - 12 * tmp)) / 12) - <font></font>
         ~~((3 * ((y + 4900 + tmp) / 100)) / 4) + <font></font>
         d - 2483620;<font></font>
};<font></font>
</code></pre>

<p>What's the <code>~~</code> operator do?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1076篇《什么是JavaScript中的“双波浪号”（~~）运算符？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>~(5.5)   // =&gt; -6<font></font>
~(-6)    // =&gt; 5<font></font>
~~5.5    // =&gt; 5  (same as Math.floor(5.5))<font></font>
~~(-5.5) // =&gt; -5 (NOT the same as Math.floor(-5.5), which would give -6 )<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参见：</font></font></p>

<ul>
<li><a href="http://dreaminginjavascript.wordpress.com/2008/07/04/28/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dreaminginjavascript.wordpress.com/2008/07/04/28/</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别很简单：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长版</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要提高可读性，请使用</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，如果要将其最小化，请使用tilde </font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">互联网上有许多消息来源说</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速度更快，但是有时</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我不建议您考虑速度，因为在运行代码时不会注意到速度。</font><font style="vertical-align: inherit;">也许正在测试等中，但是没有人可以看到这里的差异。</font><font style="vertical-align: inherit;">更快的方法是使用</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更快的加载时间。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">精简版</font></font></strong></p>

<p><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较短/占用较少的空间。</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提高了可读性。</font><font style="vertical-align: inherit;">有时波浪号会更快，有时</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会更快，但并不引人注意。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它隐藏了代码的意图。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是两个单一的波浪号运算符，因此它会执行两次按位补码（按位取反）。</font><font style="vertical-align: inherit;">这些操作相互抵消，因此唯一剩下的效果是在应用第一个运算符之前进行的转换，即将值转换为整数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人将其用作的更快替代品</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但速度差异并不那么显着，在大多数情况下只是微优化。</font><font style="vertical-align: inherit;">除非您确实需要优化一段代码，否则应使用描述其功能的代码，而不是使用非操作的副作用的代码。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2011-08更新：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过优化浏览器中的JavaScript引擎，操作员和函数的性能会发生变化。</font><font style="vertical-align: inherit;">在当前的浏览器中，使用</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些浏览器</font><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">会更快，而在某些浏览器中根本不会更快。</font><font style="vertical-align: inherit;">如果您确实需要额外的性能，则需要为每个浏览器编写不同的优化代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请：</font></font><a href="http://jsperf.com/tilde-vs-floor" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">波浪线与地板</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个双重的非按位运算符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作的</font></font><a href="http://rocha.la/JavaScript-bitwise-operators-in-practice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更快替代品</font></font><code>Math.floor()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
