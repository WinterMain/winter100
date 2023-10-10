---
layout: question
title:  如何解析浮点数在JavaScript中的两位小数？
date:   2020-04-03T03:30:32.000Z
description: 我有以下代码。我想要这样，如果price_result等于一个整数，比如说10，那么我想加两个小数位。所以10将是10.00。如果等于10.6，则等于10...
img: 
author: 神乐小哥Near
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下代码。</font><font style="vertical-align: inherit;">我想要这样，如果price_result等于一个整数，比如说10，那么我想加两个小数位。</font><font style="vertical-align: inherit;">所以10将是10.00。</font><font style="vertical-align: inherit;">如果等于10.6，则等于10.60。</font><font style="vertical-align: inherit;">不确定如何执行此操作。</font></font></p>

<pre><code>price_result = parseFloat(test_var.split('$')[1].slice(0,-1));
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3964篇《如何解析浮点数在JavaScript中的两位小数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还有其他解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以用来</font></font><code>round()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>toFixed()</code></p>

<pre><code>var twoPlacedFloat = parseFloat(yourString).round(2)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于我的解决方案如下</font></font></p>

<pre><code>parseFloat(value)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的JavaScript，浮点数的字符串：</font></font></p>

<pre><code>var it_price = chief_double($("#ContentPlaceHolder1_txt_it_price").val());<font></font>
<font></font>
function chief_double(num){<font></font>
    var n = parseFloat(num);<font></font>
    if (isNaN(n)) {<font></font>
        return "0";<font></font>
    }<font></font>
    else {<font></font>
        return parseFloat(num);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于它的价值：十进制数字是十进制数字，您可以将其四舍五入为其他值。</font><font style="vertical-align: inherit;">在内部，它将根据浮点合成和处理规则近似为小数点后一位。</font><font style="vertical-align: inherit;">无论要显示多少位数，它在内部都保留一个十进制数字（浮点数，在JS中为双精度）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要显示它以进行显示，您可以通过字符串转换将显示的精度选择为所需的精度。</font><font style="vertical-align: inherit;">演示是一个显示问题，而不是存储问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自lodash的ceil可能是最好的 </font></font></p>

<pre><code>_.ceil("315.9250488",2) <font></font>
_.ceil(315.9250488,2) <font></font>
_.ceil(undefined,2)<font></font>
_.ceil(null,2)<font></font>
_.ceil("",2)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以与数字一起使用，这是安全的</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的目标是解析，并且您的输入可能是文字，那么您会期望a </font></font><code>float</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>toFixed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会提供它，因此这里有两个简单的函数可以提供此功能：</font></font></p>

<pre><code>function parseFloat2Decimals(value) {<font></font>
    return parseFloat(parseFloat(value).toFixed(2));<font></font>
}<font></font>
<font></font>
function parseFloat2Decimals(value,decimalPlaces) {<font></font>
    return parseFloat(parseFloat(value).toFixed(decimalPlaces));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要返回数字，请添加另一层括号。</font><font style="vertical-align: inherit;">保持清洁。</font></font></p>

<pre><code>var twoPlacedFloat = parseFloat((10.02745).toFixed(2));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryItachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font></font><code>toFixed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它始终以字符串形式返回值。</font><font style="vertical-align: inherit;">这有时会使代码复杂化。</font><font style="vertical-align: inherit;">为避免这种情况，可以为Number设置另一种方法。</font></font></p>

<pre><code>Number.prototype.round = function(p) {<font></font>
  p = p || 10;<font></font>
  return parseFloat( this.toFixed(p) );<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用：</font></font></p>

<pre><code>var n = 22 / 7; // 3.142857142857143<font></font>
n.round(3); // 3.143<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者简单地：</font></font></p>

<pre><code>(22/7).round(3); // 3.143
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要性能（例如在游戏中）：</font></font></p>

<pre><code>Math.round(number * 100) / 100
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大约是parseFloat（number.toFixed（2））的100倍</font></font></p>

<p><a href="http://jsperf.com/parsefloat-tofixed-vs-math-round" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/parsefloat-tofixed-vs-math-round</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toFixed（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来做到这一点</font></font></p>

<pre><code>var twoPlacedFloat = parseFloat(yourString).toFixed(2)
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
