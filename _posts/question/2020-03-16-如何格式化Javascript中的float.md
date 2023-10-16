---
layout: question
title:  如何格式化Javascript中的float？
date:   2020-03-16T04:10:09.000Z
description: 在JavaScript中，从浮点数转换为字符串时，小数点后仅能获得2位数字吗？例如，用0.34代替0.3445434。...
img: 
author: 十三西门
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，从浮点数转换为字符串时，小数点后仅能获得2位数字吗？</font><font style="vertical-align: inherit;">例如，用0.34代替0.3445434。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1708篇《如何格式化Javascript中的float？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>The key here I guess is to round up correctly first, then you can convert it to String.</p>

<pre class="lang-js prettyprint-override"><code>function roundOf(n, p) {<font></font>
    const n1 = n * Math.pow(10, p + 1);<font></font>
    const n2 = Math.floor(n1 / 10);<font></font>
    if (n1 &gt;= (n2 * 10 + 5)) {<font></font>
        return (n2 + 1) / Math.pow(10, p);<font></font>
    }<font></font>
    return n2 / Math.pow(10, p);<font></font>
}<font></font>
<font></font>
// All edge cases listed in this thread<font></font>
roundOf(95.345, 2); // 95.35<font></font>
roundOf(95.344, 2); // 95.34<font></font>
roundOf(5.0364342423, 2); // 5.04<font></font>
roundOf(0.595, 2); // 0.60<font></font>
roundOf(0.335, 2); // 0.34<font></font>
roundOf(0.345, 2); // 0.35<font></font>
roundOf(551.175, 2); // 551.18<font></font>
roundOf(0.3445434, 2); // 0.34<font></font>
</code></pre>

<p>Now you can safely format this value with toFixed(p).
So with your specific case:</p>

<pre class="lang-js prettyprint-override"><code>roundOf(0.3445434, 2).toFixed(2); // 0.34
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些使用乘法器的解决方案都存在问题。</font><font style="vertical-align: inherit;">不幸的是，kyky和Christoph的解决方案都是错误的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请测试您的代码</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">551.175</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的两位小数位-它会四舍五入为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">551.17，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而它应该是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">551.18</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">但是，如果您测试前。</font><font style="vertical-align: inherit;">451.175可以-451.18。</font><font style="vertical-align: inherit;">因此，乍一看很难发现此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于相乘：尝试551.175 * 100 = 55117.49999999999（ups！）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的想法是在使用Math.round（）之前，先用toFixed（）处理它；</font></font></p>

<pre><code>function roundFix(number, precision)<font></font>
{<font></font>
    var multi = Math.pow(10, precision);<font></font>
    return Math.round( (number * multi).toFixed(precision + 1) ) / multi;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小哥Tom</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的另一个问题是，</font></font><code>toFixed()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数字末尾可能会产生不必要的零。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var x=(23-7.37)<font></font>
x<font></font>
15.629999999999999<font></font>
x.toFixed(6)<font></font>
"15.630000"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法是使用以下命令清理输出</font></font><code>RegExp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function humanize(x){<font></font>
  return x.toFixed(6).replace(/\.?0*$/,'');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>RegExp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尾随零（和可选小数点）匹配，以确保它看起来整数一样好。</font></font></p>

<pre><code>humanize(23-7.37)<font></font>
"15.63"<font></font>
humanize(1200)<font></font>
"1200"<font></font>
humanize(1200.03)<font></font>
"1200.03"<font></font>
humanize(3/4)<font></font>
"0.75"<font></font>
humanize(4/3)<font></font>
"1.333333"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>var x = 0.3445434<font></font>
x = Math.round (x*100) / 100 // this will make nice rounding<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚ItachiL</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些函数可以四舍五入。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var x = 5.0364342423;<font></font>
print(x.toFixed(2));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将打印5.04。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong>
<a href="http://jsfiddle.net/TM7DQ/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱西里猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>var result = Math.round(original*100)/100;
</code></pre>

<p><a href="http://www.javascriptkit.com/javatutors/round.shtml" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体细节</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以防代码不言自明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：...或</font></font><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer">toFixed</a></code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font></font><a href="https://stackoverflow.com/questions/661562/comma-format-in-javascript/661579#661579"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TimBüthe的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">忘了那个，谢谢（和赞扬）:)</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
