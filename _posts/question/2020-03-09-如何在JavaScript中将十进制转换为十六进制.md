---
layout: question
title:  如何在JavaScript中将十进制转换为十六进制
date:   2020-03-09T12:57:33.000Z
description: 如何在JavaScript中将十进制值转换为等效的十六进制值？...
img: 
author: 
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中将十进制值转换为等效的十六进制值？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are looking for converting Large integers i.e. Numbers greater than Number.MAX_SAFE_INTEGER -- 9007199254740991, then you can use the following code</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const hugeNumber = "9007199254740991873839" // Make sure its in String<font></font>
const hexOfHugeNumber = BigInt(hugeNumber).toString(16);<font></font>
console.log(hexOfHugeNumber)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can do something like this in <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" rel="nofollow noreferrer">ECMAScript&nbsp;6</a>:</p>

<pre><code>const toHex = num =&gt; (num).toString(16).toUpperCase();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小小Tony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>As the accepted answer states, the easiest way to convert from decimal to hexadecimal is <code>var hex = dec.toString(16)</code>. However, you may prefer to add a string conversion, as it ensures that string representations like <code>"12".toString(16)</code> work correctly.</p>

<pre><code>// Avoids a hard-to-track-down bug by returning `c` instead of `12`<font></font>
(+"12").toString(16);<font></font>
</code></pre>

<p>To reverse the process you may also use the solution below, as it is even shorter.</p>

<pre><code>var dec = +("0x" + hex);
</code></pre>

<p>It seems to be slower in Google Chrome and Firefox, but is significantly faster in Opera. See <a href="http://jsperf.com/hex-to-dec" rel="nofollow noreferrer">http://jsperf.com/hex-to-dec</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>AFAIK <a href="https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript/57807#57807">comment 57807</a> is wrong and should be something like:
<strong>var hex = Number(d).toString(16);</strong>
instead of
<strong>var hex = parseInt(d, 16);</strong></p>

<pre><code>function decimalToHex(d, padding) {<font></font>
    var hex = Number(d).toString(16);<font></font>
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;<font></font>
<font></font>
    while (hex.length &lt; padding) {<font></font>
        hex = "0" + hex;<font></font>
    }<font></font>
<font></font>
    return hex;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function dec2hex(i)<font></font>
{<font></font>
  var result = "0000";<font></font>
  if      (i &gt;= 0    &amp;&amp; i &lt;= 15)    { result = "000" + i.toString(16); }<font></font>
  else if (i &gt;= 16   &amp;&amp; i &lt;= 255)   { result = "00"  + i.toString(16); }<font></font>
  else if (i &gt;= 256  &amp;&amp; i &lt;= 4095)  { result = "0"   + i.toString(16); }<font></font>
  else if (i &gt;= 4096 &amp;&amp; i &lt;= 65535) { result =         i.toString(16); }<font></font>
  return result<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YLD</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Constrained/padded to a set number of characters:</p>

<pre><code>function decimalToHex(decimal, chars) {<font></font>
    return (decimal + Math.pow(16, chars)).toString(16).slice(-chars).toUpperCase();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var number = 3200;<font></font>
var hexString = number.toString(16);<font></font>
</code></pre>

<p>The 16 is the radix and there are 16 values in a hexadecimal number :-)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Combining some of these good ideas for an RGB-value-to-hexadecimal function (add the <code>#</code> elsewhere for HTML/CSS):</p>

<pre><code>function rgb2hex(r,g,b) {<font></font>
    if (g !== undefined)<font></font>
        return Number(0x1000000 + r*0x10000 + g*0x100 + b).toString(16).substring(1);<font></font>
    else<font></font>
        return Number(0x1000000 + r[0]*0x10000 + r[1]*0x100 + r[2]).toString(16).substring(1);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function toHex(d) {<font></font>
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>With padding:</p>

<pre><code>function dec2hex(i) {<font></font>
   return (i+0x10000).toString(16).substr(-4).toUpperCase();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完整</font></font><a href="http://en.wikipedia.org/wiki/Two%27s_complement" rel="noreferrer" title="二进制补码[Wikipedia]"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起见</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果要用</font><font style="vertical-align: inherit;">负数</font><font style="vertical-align: inherit;">的</font><a href="http://en.wikipedia.org/wiki/Two%27s_complement" rel="noreferrer" title="二进制补码[Wikipedia]"><font style="vertical-align: inherit;">二进制补码</font></a><font style="vertical-align: inherit;">十六进制表示形式，则可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_%28Zero-fill_right_shift%29" rel="noreferrer" title="零填充右移[MDN]"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">zero-fill-right shift </font></font><code>&gt;&gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>



<pre><code>&gt; (-1).toString(16)<font></font>
"-1"<font></font>
<font></font>
&gt; ((-2)&gt;&gt;&gt;0).toString(16)<font></font>
"fffffffe"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，存在一个局限性：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Summary" rel="noreferrer" title="按位运算符[MDN]"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript按位运算符将其操作数视为32位序列</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也就是说，您获得了32位二进制补码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要处理位字段或32位颜色之类的内容，则需要处理带符号的数字。</font><font style="vertical-align: inherit;">JavaScript函数</font></font><code>toString(16)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回负十六进制数，通常这不是您想要的。</font><font style="vertical-align: inherit;">此功能做了一些疯狂的添加，使其成为正数。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function decimalToHexString(number)<font></font>
{<font></font>
  if (number &lt; 0)<font></font>
  {<font></font>
    number = 0xFFFFFFFF + number + 1;<font></font>
  }<font></font>
<font></font>
  return number.toString(16).toUpperCase();<font></font>
}<font></font>
<font></font>
console.log(decimalToHexString(27));<font></font>
console.log(decimalToHexString(48.6));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鸣人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码会将十进制值d转换为十六进制。</font><font style="vertical-align: inherit;">它还允许您将填充添加到十六进制结果中。</font><font style="vertical-align: inherit;">因此，默认情况下0将变为00。</font></font></p>

<pre><code>function decimalToHex(d, padding) {<font></font>
    var hex = Number(d).toString(16);<font></font>
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;<font></font>
<font></font>
    while (hex.length &lt; padding) {<font></font>
        hex = "0" + hex;<font></font>
    }<font></font>
<font></font>
    return hex;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令将数字转换为十六进制字符串：</font></font></p>

<pre><code>hexString = yourNumber.toString(16);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并通过以下步骤逆转该过程：</font></font></p>

<pre><code>yourNumber = parseInt(hexString, 16);
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
