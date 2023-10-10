---
layout: question
title:  在JavaScript中用前导零填充数字\[重复\]
date:   2020-03-13T10:17:22.000Z
description:                                                                          ...
img: 
author: 
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/1267283/how-can-i-pad-a-value-with-leading-zeros" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何用前导零填充值？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （70个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2020-01-31 06：51：03Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上个月</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，我需要填充。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我有数字9，它将是“ 0009”。</font><font style="vertical-align: inherit;">如果我有10个数字，则为“ 0010”。</font><font style="vertical-align: inherit;">请注意，它将始终包含四个数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种方法是减去数字减4以获得我需要输入的0。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一种轻松的方法？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了娱乐，不要使用循环来创建额外的零：</font></font></p>

<pre><code>function zeroPad(n,length){<font></font>
  var s=n+"",needed=length-s.length;<font></font>
  if (needed&gt;0) s=(Math.pow(10,needed)+"").slice(1)+s;<font></font>
  return s;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A逆天猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>function padToFour(number) {<font></font>
  if (number&lt;=9999) { number = ("000"+number).slice(-4); }<font></font>
  return number;<font></font>
}<font></font>
</code></pre>

<p>Something like that?</p>

<p><em>Bonus incomprehensible-but-slicker single-line ES6 version:</em></p>

<pre><code>let padToFour = number =&gt; number &lt;= 9999 ? `000${number}`.slice(-4) : number;
</code></pre>

<p>ES6isms:</p>

<ul>
<li><code>let</code> is a block scoped variable (as opposed to <code>var</code>’s functional scoping)</li>
<li><code>=&gt;</code> is an arrow function that among other things replaces <code>function</code> and is prepended by its parameters</li>
<li>If a arrow function takes a single parameter you can omit the parentheses (hence <code>number =&gt;</code>)</li>
<li>If an arrow function body has a single line that starts with <code>return</code> you can omit the braces and the <code>return</code> keyword and simply use the expression</li>
<li>To get the function body down to a single line I cheated and used a ternary expression</li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEY米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以执行以下操作：</font></font></p>

<pre><code>function pad ( num, size ) {<font></font>
  return ( Math.pow( 10, size ) + ~~num ).toString().substring( 1 );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这只是一个函数的基本思想，但是要增加对较大数字（以及无效输入）的支持，可能会更好：</font></font></p>

<pre><code>function pad ( num, size ) {<font></font>
  if (num.toString().length &gt;= size) return num;<font></font>
  return ( Math.pow( 10, size ) + Math.floor(num) ).toString().substring( 1 );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有两件事：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果该数字大于指定的大小，它将仅返回该数字。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Math.floor(num)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>~~num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将支持更大的数字。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，我最近不得不这样做。</font></font></p>

<pre><code>function padDigits(number, digits) {<font></font>
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用方式如下：</font></font></p>

<pre><code>padDigits(9, 4);  // "0009"<font></font>
padDigits(10, 4); // "0010"<font></font>
padDigits(15000, 4); // "15000"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不漂亮，但有效。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
