---
layout: question
title:  JavaScript数学，四舍五入到小数点后两位\[重复\]
date:   2020-04-03T03:20:48.000Z
description:                                                                          ...
img: 
author: 梅飞云
category: question
answer: 8
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
                            <a href="/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">四舍五入至小数点后两位（仅在必要时）</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （76个答案）
                                </font></font></span>
                        </div>
                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-10-16 11：28：42Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
        </aside>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下JavaScript语法：</font></font></p>

<pre><code>var discount = Math.round(100 - (price / listprice) * 100);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这四舍五入为整数。</font><font style="vertical-align: inherit;">如何返回两位小数的结果？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3960篇《JavaScript数学，四舍五入到小数点后两位\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个工作示例</font></font></p>

<pre><code>var value=200.2365455;<font></font>
result=Math.round(value*100)/100    //result will be 200.24<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神奇飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案略有不同。
</font></font><code>toFixed(2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个字符串，并且您将始终获得两个小数位。</font><font style="vertical-align: inherit;">这些可能为零。</font><font style="vertical-align: inherit;">如果您想取消最后的零，只需执行以下操作：</font></font></p>

<pre><code>var discount = + ((price / listprice).toFixed(2));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我刚刚发现了Firefox 35.0.1中的一个bug，这意味着以上内容可能为NaN提供了一些值。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我已将代码更改为</font></font></p>

<pre><code>var discount = Math.round(price / listprice * 100) / 100;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这给出了一个最多有两个小数位的数字。</font><font style="vertical-align: inherit;">如果要三个，则将乘以1000，以此类推。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
OP始终希望保留两位小数，但是如果toFixed（）在Firefox中损坏，则需要先修复。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
参见</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1134388" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bugzilla.mozilla.org/show_bug.cgi?id=1134388</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我看过的最好方法是将10乘以数字的幂，然后进行Math.round，最后将10除以数字的幂。</font><font style="vertical-align: inherit;">这是我在 TypeScript中使用的简单函数：</font></font></p>

<pre><code>function roundToXDigits(value: number, digits: number) {<font></font>
    value = value * Math.pow(10, digits);<font></font>
    value = Math.round(value);<font></font>
    value = value / Math.pow(10, digits);<font></font>
    return value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是普通的javascript：</font></font></p>

<pre><code>function roundToXDigits(value, digits) {<font></font>
    if(!digits){<font></font>
        digits = 2;<font></font>
    }<font></font>
    value = value * Math.pow(10, digits);<font></font>
    value = Math.round(value);<font></font>
    value = value / Math.pow(10, digits);<font></font>
    return value;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -比toFixed（）更快：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个小数</font></font></h2>

<pre><code>x      = .123456<font></font>
result = Math.round(x * 100) / 100  // result .12<font></font>
</code></pre>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三小数</font></font></h2>

<pre><code>x      = .123456<font></font>
result = Math.round(x * 1000) / 1000      // result .123<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用 </font></font><code>discount.toFixed(2);</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用一元加号将字符串转换</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为MDN中记录</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的数字</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font><code>+discount.toFixed(2)</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获得两个小数点的结果，可以这样：</font></font></p>

<pre><code>var discount = Math.round((100 - (price / listprice) * 100) * 100) / 100;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将四舍五入的值乘以100以保留前两位，然后将其除以100得到实际结果。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注-如果3位数精度很重要，请参阅编辑4</font></font></strong></p>

<pre><code>var discount = (price / listprice).toFixed(2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toFixed将根据超过2个小数的值为您舍入或舍入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font><a href="http://jsfiddle.net/calder12/tv9HY/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/calder12/tv9HY/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/calder12/tv9HY/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -正如其他人所提到的，它将结果转换为字符串。</font><font style="vertical-align: inherit;">为了避免这种情况：</font></font></p>

<pre><code>var discount = +((price / listprice).toFixed(2));
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如注释中所提到的，此函数在某种程度上会失败，例如在1.005的情况下，它将返回1.00而不是1.01。</font><font style="vertical-align: inherit;">如果准确性在这个程度上很重要，那么我已经找到了这个答案：</font></font><a href="https://stackoverflow.com/a/32605063/1726511"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://stackoverflow.com/a/32605063/1726511"><font style="vertical-align: inherit;">//stackoverflow.com/a/32605063/1726511</font></a><font style="vertical-align: inherit;">这似乎与我尝试过的所有测试都很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，需要进行一些小的修改，上面链接的答案中的函数在四舍五入时将返回整数，因此例如99.004将返回99而不是99.00，这对于显示价格而言并不理想。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑3-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎在实际收益表上固定了TOST仍在搞砸一些数字，此最终编辑似乎有效。</font><font style="vertical-align: inherit;">哎呀，这么多返工！</font></font></p>

<pre><code>   var discount = roundTo((price / listprice), 2);<font></font>
<font></font>
   function roundTo(n, digits) {<font></font>
     if (digits === undefined) {<font></font>
       digits = 0;<font></font>
     }<font></font>
<font></font>
     var multiplicator = Math.pow(10, digits);<font></font>
     n = parseFloat((n * multiplicator).toFixed(11));<font></font>
     var test =(Math.round(n) / multiplicator);<font></font>
     return +(test.toFixed(digits));<font></font>
   }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此处的小提琴示例：</font><a href="https://jsfiddle.net/calder12/3Lbhfy5s/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/calder12/3Lbhfy5s/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/calder12/3Lbhfy5s/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑4-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你们杀了我。</font><font style="vertical-align: inherit;">Edit 3对负数失败，而没有深入研究为什么在进行舍入之前将负数变为正数更容易处理，然后在返回结果之前将其变回正好。</font></font></p>

<pre><code>function roundTo(n, digits) {<font></font>
    var negative = false;<font></font>
    if (digits === undefined) {<font></font>
        digits = 0;<font></font>
    }<font></font>
        if( n &lt; 0) {<font></font>
        negative = true;<font></font>
      n = n * -1;<font></font>
    }<font></font>
    var multiplicator = Math.pow(10, digits);<font></font>
    n = parseFloat((n * multiplicator).toFixed(11));<font></font>
    n = (Math.round(n) / multiplicator).toFixed(2);<font></font>
    if( negative ) {    <font></font>
        n = (n * -1).toFixed(2);<font></font>
    }<font></font>
    return n;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴：</font><a href="https://jsfiddle.net/3Lbhfy5s/79/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/3Lbhfy5s/79/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/3Lbhfy5s/79/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
