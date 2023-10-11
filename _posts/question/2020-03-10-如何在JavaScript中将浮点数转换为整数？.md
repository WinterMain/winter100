---
layout: question
title:  如何在JavaScript中将浮点数转换为整数？
date:   2020-03-09T16:53:23.000Z
description: 我想将浮点数转换为JavaScript中的整数。实际上，我想知道如何同时进行标准转换：截断和舍入。而且有效，而不是通过转换为字符串和解析。...
img: 
author: 逆天GO
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将浮点数转换为JavaScript中的整数。</font><font style="vertical-align: inherit;">实际上，我想知道如何同时进行标准转换：截断和舍入。</font><font style="vertical-align: inherit;">而且有效，而不是通过转换为字符串和解析。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第385篇《如何在JavaScript中将浮点数转换为整数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是angularjs，则简单的解决方案如下所示：HTML模板绑定
</font></font><br></p>

<p><code>{{val | number:0}}</code> <br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将val转换为整数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此链接</font></font><a href="http://docs.angularjs.org/api/ng/filter/number" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs.angularjs.org/api/ng/filter/number</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomNear前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想指出，您想通过货币进行舍入，而不是舍弃。</font><font style="vertical-align: inherit;">一分钱的可能性很小，因为4.999452 * 100的四舍五入将为您5提供更具代表性的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的是，不要忘了</font></font><a href="https://en.wikipedia.org/wiki/Rounding#Round_half_to_even" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">银行家的舍入</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一种对付舍入产生的轻微积极偏差的方法-您的财务申请可能会要求这样做。</font></font></p>

<p><em><a href="https://stackoverflow.com/questions/3108986/gaussian-bankers-rounding-in-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高斯/银行家的JavaScript四舍五入</font></font></a></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，当您想在字符串的末尾（以插入逗号）时，也可以只使用该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" rel="nofollow noreferrer"><code>Number.toFixed()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，但是，它将执行舍入。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截断</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// Math.trunc() is part of the ES6 spec<font></font>
Math.trunc( 1.5 );  // returns 1<font></font>
Math.trunc( -1.5 ); // returns -1<font></font>
// Math.floor( -1.5 ) would return -2, which is probably not what you wanted<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">圆</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Math.round( 1.5 );  // 2<font></font>
Math.round( 1.49 ); // 1<font></font>
Math.round( -1.6 ); // -2<font></font>
Math.round( -1.3 ); // -1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可能的方式-使用XOR操作：</font></font></p>

<pre><code>console.log(12.3 ^ 0); // 12<font></font>
console.log("12.3" ^ 0); // 12<font></font>
console.log(1.2 + 1.3 ^ 0); // 2<font></font>
console.log(1.2 + 1.3 * 2 ^ 0); // 3<font></font>
console.log(-1.2 ^ 0); // -1<font></font>
console.log(-1.2 + 1 ^ 0); // 0<font></font>
console.log(-1.2 - 1.3 ^ 0); // -2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按位运算的优先级小于数学运算的优先级，这很有用。</font><font style="vertical-align: inherit;">尝试</font></font><a href="https://jsfiddle.net/au51uj3r/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/au51uj3r/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果查看</font></font><code>Math</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的</font><font style="vertical-align: inherit;">本机</font><font style="vertical-align: inherit;">对象，您会获得一整套处理数字和值等的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您想要做的是非常简单的JavaScript本机...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有以下电话号码：</font></font></p>

<pre><code>const myValue = 56.4534931;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果您想将其四舍五入到最接近的数字，只需执行以下操作：</font></font></p>

<pre><code>const rounded = Math.floor(myValue);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你会得到：</font></font></p>

<pre><code>56
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想将其四舍五入到最接近的数字，请执行以下操作：</font></font></p>

<pre><code>const roundedUp = Math.ceil(myValue);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你会得到：</font></font></p>

<pre><code>57
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font><code>Math.round</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以将其四舍五入为更高或更低的数字，取决于哪个更接近浮点数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浮点数后面</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">将浮点数转换为整数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像</font></font><code>~~myValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... </font><font style="vertical-align: inherit;">一样使用它</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位移0等于除以1</font></font></em></strong></p>

<pre><code>// &gt;&gt; or &gt;&gt;&gt;<font></font>
2.0 &gt;&gt; 0; // 2<font></font>
2.0 &gt;&gt;&gt; 0; // 2<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Near阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://www.w3schools.com/jsref/jsref_parseInt.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">parseInt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法不进行舍入。</font><font style="vertical-align: inherit;">由于0x（十六进制）和0（八进制）前缀选项，用户输入时要小心。</font></font></p>

<pre><code>var intValue = parseInt(floatValue, 10);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按位或运算符</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用按位或运算符截断浮点数，它既可以用于正数也可以用于负数：</font></font></p>

<pre><code>function float2int (value) {<font></font>
    return value | 0;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果</font></font></p>

<pre><code>float2int(3.1) == 3<font></font>
float2int(-3.1) == -3<font></font>
float2int(3.9) == 3<font></font>
float2int(-3.9) == -3<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能比较？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个</font></font><a href="http://jsperf.com/float-to-int-conversion-comparison" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSPerf测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于比较以下两者之间的性能：</font></font></p>

<ul>
<li><code>Math.floor(val)</code></li>
<li><code>val | 0</code> <sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按位</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></strong></sup></li>
<li><code>~~val</code> <sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按位</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非</font></font></strong></sup></li>
<li><code>parseInt(val)</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于正数。</font><font style="vertical-align: inherit;">在这种情况下，可以安全地使用按位运算以及</font></font><code>Math.floor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您需要代码同时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用正数和负数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么按位运算是最快的（或首选）。</font></font><a href="http://jsperf.com/truncating-decimals" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个JSPerf测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行了比较，很明显，由于进行了额外的符号检查，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Math现在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是这四个中</font><strong><font style="vertical-align: inherit;">最慢</font></strong><font style="vertical-align: inherit;">的。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></h2>

<p>As stated in comments, BITWISE operators operate on signed 32bit integers, therefore large numbers will be converted, example:</p>

<pre><code>1234567890  | 0 =&gt; 1234567890<font></font>
12345678901 | 0 =&gt; -539222987<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于截断：</font></font></p>

<pre><code>var intvalue = Math.floor(value);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于回合：</font></font></p>

<pre><code>var intvalue = Math.round(value);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var intvalue = Math.floor( floatvalue );<font></font>
var intvalue = Math.ceil( floatvalue ); <font></font>
var intvalue = Math.round( floatvalue );<font></font>
<font></font>
// `Math.trunc` was added in ECMAScript 6<font></font>
var intvalue = Math.trunc( floatvalue );<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数学对象参考</font></font></a></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></h3>

<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正</font></font></strong>

<pre><code>// value=x        //  x=5          5&lt;x&lt;5.5      5.5&lt;=x&lt;6  <font></font>
<font></font>
Math.floor(value) //  5            5            5<font></font>
Math.ceil(value)  //  5            6            6<font></font>
Math.round(value) //  5            5            6<font></font>
Math.trunc(value) //  5            5            5<font></font>
parseInt(value)   //  5            5            5<font></font>
~~value           //  5            5            5<font></font>
value | 0         //  5            5            5<font></font>
value &gt;&gt; 0        //  5            5            5<font></font>
value &gt;&gt;&gt; 0       //  5            5            5<font></font>
value - value % 1 //  5            5            5<font></font>
</code></pre>

<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负</font></font></strong>

<pre><code>// value=x        // x=-5         -5&gt;x&gt;=-5.5   -5.5&gt;x&gt;-6<font></font>
<font></font>
Math.floor(value) // -5           -6           -6<font></font>
Math.ceil(value)  // -5           -5           -5<font></font>
Math.round(value) // -5           -5           -6<font></font>
Math.trunc(value) // -5           -5           -5<font></font>
parseInt(value)   // -5           -5           -5<font></font>
value | 0         // -5           -5           -5<font></font>
~~value           // -5           -5           -5<font></font>
value &gt;&gt; 0        // -5           -5           -5<font></font>
value &gt;&gt;&gt; 0       // 4294967291   4294967291   4294967291<font></font>
value - value % 1 // -5           -5           -5<font></font>
</code></pre>

<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正数-更大的数字</font></font></strong>

<pre><code>// x = Number.MAX_SAFE_INTEGER/10 // =900719925474099.1<font></font>
<font></font>
// value=x            x=900719925474099    x=900719925474099.4  x=900719925474099.5<font></font>
<font></font>
Math.floor(value) //  900719925474099      900719925474099      900719925474099<font></font>
Math.ceil(value)  //  900719925474099      900719925474100      900719925474100<font></font>
Math.round(value) //  900719925474099      900719925474099      900719925474100<font></font>
Math.trunc(value) //  900719925474099      900719925474099      900719925474099<font></font>
parseInt(value)   //  900719925474099      900719925474099      900719925474099<font></font>
value | 0         //  858993459            858993459            858993459<font></font>
~~value           //  858993459            858993459            858993459<font></font>
value &gt;&gt; 0        //  858993459            858993459            858993459<font></font>
value &gt;&gt;&gt; 0       //  858993459            858993459            858993459<font></font>
value - value % 1 //  900719925474099      900719925474099      900719925474099<font></font>
</code></pre>

<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负数-较大的数字</font></font></strong>

<pre><code>// x = Number.MAX_SAFE_INTEGER/10 * -1 // -900719925474099.1<font></font>
<font></font>
// value = x      // x=-900719925474099   x=-900719925474099.5 x=-900719925474099.6<font></font>
<font></font>
Math.floor(value) // -900719925474099     -900719925474100     -900719925474100<font></font>
Math.ceil(value)  // -900719925474099     -900719925474099     -900719925474099<font></font>
Math.round(value) // -900719925474099     -900719925474099     -900719925474100<font></font>
Math.trunc(value) // -900719925474099     -900719925474099     -900719925474099<font></font>
parseInt(value)   // -900719925474099     -900719925474099     -900719925474099<font></font>
value | 0         // -858993459           -858993459           -858993459<font></font>
~~value           // -858993459           -858993459           -858993459<font></font>
value &gt;&gt; 0        // -858993459           -858993459           -858993459<font></font>
value &gt;&gt;&gt; 0       //  3435973837           3435973837           3435973837<font></font>
value - value % 1 // -900719925474099     -900719925474099     -900719925474099<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您不能将</font></font><code>Math.floor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其用作截断的替代品，因为</font></font><code>Math.floor(-3.1) = -4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>-3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">!!</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截断的正确替代是：</font></font></p>

<pre><code>function truncate(value)<font></font>
{<font></font>
    if (value &lt; 0) {<font></font>
        return Math.ceil(value);<font></font>
    }<font></font>
<font></font>
    return Math.floor(value);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">双</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Operators/Bitwise_Operators#.7E_%28Bitwise_NOT%29"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按位not</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符截断浮点数。</font><font style="vertical-align: inherit;">你提到的其他操作都可以通过</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/floor"><code>Math.floor</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/ceil"><code>Math.ceil</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round"><code>Math.round</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&gt; ~~2.5<font></font>
2<font></font>
&gt; ~~(-1.4)<font></font>
-1<font></font>
</code></pre>

<p><a href="http://james.padolsey.com/javascript/double-bitwise-not/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多细节由James Padolsey提供。</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
