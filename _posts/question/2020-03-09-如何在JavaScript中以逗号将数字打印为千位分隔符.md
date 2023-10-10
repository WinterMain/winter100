---
layout: question
title:  如何在JavaScript中以逗号将数字打印为千位分隔符
date:   2020-03-09T11:56:56.000Z
description: 我正在尝试在JavaScript中使用逗号将整数打印为数千个分隔符。例如，我想将数字1234567显示为“ 1,234,567”。我将如何去做呢？这是...
img: 
author: 卡卡西逆天
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在</font></font><a href="http://en.wikipedia.org/wiki/JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用逗号</font><font style="vertical-align: inherit;">将整数打印</font><font style="vertical-align: inherit;">为数千个分隔符。</font><font style="vertical-align: inherit;">例如，我想将数字1234567显示为“ 1,234,567”。</font><font style="vertical-align: inherit;">我将如何去做呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的做法：</font></font></p>

<pre><code>function numberWithCommas(x) {<font></font>
    x = x.toString();<font></font>
    var pattern = /(-?\d+)(\d{3})/;<font></font>
    while (pattern.test(x))<font></font>
        x = x.replace(pattern, "$1,$2");<font></font>
    return x;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更简单或更优雅的方法？</font><font style="vertical-align: inherit;">如果它也可以与浮点数一起使用，那就太好了，但这不是必需的。</font><font style="vertical-align: inherit;">在句点和逗号之间进行决策不需要特定于区域设置。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">流云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1>My <strong>“<em>true</em>”</strong> regular-expressions-only solution <sub>for those love one-liners</sub></h1>

<p>You see those enthusiastic players above? Maybe you can golf out of it. Here’s my stroke.</p>

<pre><code>n =&gt; `${n}`.replace(/(?&lt;!\.\d+)\B(?=(\d{3})+\b)/g, " ").replace(/(?&lt;=\.(\d{3})+)\B/g, " ")
</code></pre>

<p><sub>Uses a <code> </code><sub>THIN SPACE</sub> (U+2009) for a thousands separator, as the <em>International System of Units</em> said to do in <a href="https://www.bipm.org/utils/common/pdf/si_brochure_8.pdf" rel="nofollow noreferrer">the eighth edition<sub>(2006)</sub> of their publication “<em>SI Brochure: The International System of Units (SI)</em>”</a> (See §5.3.4.). <a href="https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9.pdf" rel="nofollow noreferrer">The ninth edition<sub>(2019)</sub></a> suggests to use a <em>space</em> for it (See §5.4.4.). You can use whatever you want, including a comma.</sub></p>

<hr>

<h2>See.</h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const integer_part_only = n =&gt; `${n}`.replace(/(?&lt;!\.\d+)\B(?=(\d{3})+\b)/g, " I ");<font></font>
const fractional_part_only = n =&gt; `${n}`.replace(/(?&lt;=\.(\d{3})+)\B/g, " F ");<font></font>
const both = n =&gt; fractional_part_only(integer_part_only(n));<font></font>
<font></font>
function demo(number) { // I’m using Chrome 74.<font></font>
	console.log(`${number}<font></font>
		→ "${integer_part_only(number)}" (integer part only)<font></font>
		→ "${fractional_part_only(number)}" (fractional part only)<font></font>
		→ "${both(number)}" (both)<font></font>
	`);<font></font>
}<font></font>
demo(Math.random() * 10e5);<font></font>
demo(123456789.01234567);<font></font>
demo(123456789);<font></font>
demo(0.0123456789);</code></pre>
</div>
</div>
<p></p>

<hr>

<h2>How does it work?</h2>

<h3>For an integer part</h3>

<pre><code>.replace(/(?&lt;!\.\d+)\B(?=(\d{3})+\b)/g, " I ")
</code></pre>

<ul>
<li><code>.replace(……, " I ")</code> Put “ I ”

<ul>
<li><code>/……/g</code> at each of

<ul>
<li><code>\B</code> the in-between of two adjacent digits

<ul>
<li><code>(?=……)</code><sub>POSITIVE LOOKAHEAD</sub> whose right part is

<ul>
<li><code>(\d{3})+</code> one or more three-digit chunks</li>
<li><code>\b</code> followed by a non-digit, such as, a period, the ending of the string, et cetera,</li>
</ul></li>
<li><code>(?&lt;!……)</code><sub>NEGATIVE LOOKBEHIND</sub> excluding ones whose left part

<ul>
<li><code>\.\d+</code> is a dot followed by digits (“has a decimal separator”).</li>
</ul></li>
</ul></li>
</ul></li>
</ul></li>
</ul>

<h3>For a decimal part</h3>

<pre><code>.replace(/(?&lt;=\.(\d{3})+)\B/g, " F ")
</code></pre>

<ul>
<li><code>.replace(……, " F ")</code> Put “ F ”

<ul>
<li><code>/……/g</code> at each of

<ul>
<li><code>\B</code> the in-between of two adjacent digits

<ul>
<li><code>(?&lt;=……)</code><sub>POSITIVE LOOKBEHIND</sub> whose left part is

<ul>
<li><code>\.</code> a decimal separator</li>
<li><code>(\d{3})+</code> followed by one or more three-digit chunks.</li>
</ul></li>
</ul></li>
</ul></li>
</ul></li>
</ul>

<hr>

<h2><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes" rel="nofollow noreferrer">Character classes</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries" rel="nofollow noreferrer">boundaries</a></h2>

<blockquote>
  <h3><code>\d</code></h3>
  
  <p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>.</p>
  
  <p>For example,</p>
  
  <ul>
  <li><code>/\d/</code> or <code>/[0-9]/</code> matches <code>2</code> in <code>B2 is the suite number</code>.</li>
  </ul>
  
  <h3><code>\b</code></h3>
  
  <p>Matches a <strong>word boundary</strong>. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p>
  
  <p>Examples:</p>
  
  <ul>
  <li><code>/\bm/</code> matches the <code>m</code> in <code>moon</code> ;</li>
  <li><code>/oo\b/</code> does not match the <code>oo</code> in <code>moon</code>, because <code>oo</code> is followed by <code>n</code> which is a word character;</li>
  <li><code>/oon\b/</code> matches the <code>oon</code> in <code>moon</code>, because <code>oon</code> is the end of the string, thus not followed by a word character;</li>
  <li><code>/\w\b\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li>
  </ul>
  
  <h3><code>\B</code></h3>
  
  <p>Matches a <strong>non-word boundary</strong>. This is a position where the previous and next character are of the same type: either both must be words, or both must be non-words. Such as between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match.</p>
  
  <p>For example,</p>
  
  <ul>
  <li><code>/\Bon/</code> matches <code>on</code> in <code>at noon</code>;</li>
  <li><code>/ye\B/</code> matches <code>ye</code> in <code>possibly yesterday</code>.</li>
  </ul>
</blockquote>

<hr>

<h2>Browser compatibility</h2>

<ul>
<li><a href="https://caniuse.com/#feat=js-regexp-lookbehind" rel="nofollow noreferrer">https://caniuse.com/#feat=js-regexp-lookbehind</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>if you are dealing with currency values and formatting a lot then it might be worth to add tiny <a href="http://josscrowcroft.github.io/accounting.js/">accounting.js</a> which handles lot of edge cases and localization:</p>

<pre><code>// Default usage:<font></font>
accounting.formatMoney(12345678); // $12,345,678.00<font></font>
<font></font>
// European formatting (custom symbol and separators), could also use options object as second param:<font></font>
accounting.formatMoney(4999.99, "€", 2, ".", ","); // €4.999,99<font></font>
<font></font>
// Negative values are formatted nicely, too:<font></font>
accounting.formatMoney(-500000, "£ ", 0); // £ -500,000<font></font>
<font></font>
// Simple `format` string allows control of symbol position [%v = value, %s = symbol]:<font></font>
accounting.formatMoney(5318008, { symbol: "GBP",  format: "%v %s" }); // 5,318,008.00 GBP<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I think this is the shortest regular expression that does it:</p>

<pre><code>/\B(?=(\d{3})+\b)/g<font></font>
<font></font>
"123456".replace(/\B(?=(\d{3})+\b)/g, ",")<font></font>
</code></pre>

<p>I checked it on a few numbers and it worked.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是@ mikez302答案的一种变体，但已修改为支持带小数的数字（根据@ neu-rah的反馈，即numberWithCommas（12345.6789）-&gt;“ 12,345.6,789”而不是“ 12,345.6789”</font></font></p>

<pre><code>function numberWithCommas(n) {<font></font>
    var parts=n.toString().split(".");<font></font>
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Harry神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function formatNumber (num) {<font></font>
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")<font></font>
}<font></font>
<font></font>
print(formatNumber(2665));      // 2,665<font></font>
print(formatNumber(102665));    // 102,665<font></font>
print(formatNumber(111102665)); // 111,102,665<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var number = 1234567890; // Example number to be converted
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⚠记住javascript的</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大整数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">9007199254740991</font></font></strong></p>

<hr>

<p><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toLocaleString</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>number.toLocaleString(); // "1,234,567,890"<font></font>
<font></font>
// A more complex example: <font></font>
var number2 = 1234.56789; // floating point example<font></font>
number2.toLocaleString(undefined, {maximumFractionDigits:2}) // "1,234.57"<font></font>
</code></pre>

<p><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NumberFormat</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">不支持</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Safari</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>var nf = new Intl.NumberFormat();<font></font>
nf.format(number); // "1,234,567,890"<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的检查（至少是Firefox），它们在性能上或多或少都相同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶没有人提到</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Number.prototype.toLocaleString</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它是在JavaScript 1.5（于1999年推出）中实现的，因此基本上所有主流浏览器都支持它。</font></font></p>

<pre class="lang-js prettyprint-override"><code>var n = 34523453.345<font></font>
n.toLocaleString()<font></font>
"34,523,453.345"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过包含</font><a href="https://github.com/andyearnshaw/Intl.js" rel="noreferrer"><font style="vertical-align: inherit;">Intl，</font></a><font style="vertical-align: inherit;">它也可以从v0.12版本开始在Node.js中工作。</font></font><a href="https://github.com/andyearnshaw/Intl.js" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此函数返回的是字符串，而不是数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要不同的东西，</font></font><a href="http://numeraljs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Numeral.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会很有趣。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了Kerry的回答中的想法，但是由于我只是为了自己的特定目的寻找简单的东西，所以简化了它。</font><font style="vertical-align: inherit;">这是我所做的：</font></font></p>

<pre><code>function numberWithCommas(x) {<font></font>
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");<font></font>
}<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function numberWithCommas(x) {<font></font>
    return x.toString().replace(/\B(?&lt;!\.\d*)(?=(\d{3})+(?!\d))/g, ",");<font></font>
}<font></font>
<font></font>
function test(x, expect) {<font></font>
    const result = numberWithCommas(x);<font></font>
    const pass = result === expect;<font></font>
    console.log(`${pass ? "✓" : "ERROR ====&gt;"} ${x} =&gt; ${result}`);<font></font>
    return pass;<font></font>
}<font></font>
<font></font>
let failures = 0;<font></font>
failures += !test(0,        "0");<font></font>
failures += !test(100,      "100");<font></font>
failures += !test(1000,     "1,000");<font></font>
failures += !test(10000,    "10,000");<font></font>
failures += !test(100000,   "100,000");<font></font>
failures += !test(1000000,  "1,000,000");<font></font>
failures += !test(10000000, "10,000,000");<font></font>
if (failures) {<font></font>
    console.log(`${failures} test(s) failed`);<font></font>
} else {<font></font>
    console.log("All tests passed");<font></font>
}</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.as-console-wrapper {<font></font>
    max-height: 100% !important;<font></font>
}</code></pre>
</div>
</div>
<p></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式使用2个前瞻性断言： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个正值，用于查找字符串中任何连续三位数的点， </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否定断言，以确保该点仅具有3位数的整数倍。</font><font style="vertical-align: inherit;">替换表达式在此处放置逗号。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果传递它</font></font><code>123456789.01</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则肯定断言将匹配7位左侧的每个点（因为它</font></font><code>789</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是3位数</font></font><code>678</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的倍数</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">3位数</font><font style="vertical-align: inherit;">的倍数，依此</font></font><code>567</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类推）。</font><font style="vertical-align: inherit;">否定断言检查3位数的倍数后是否没有任何数字。</font></font><code>789</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其后有一个句点，因此它恰好是3位数的倍数，因此逗号在此处。</font></font><code>678</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是3位数的倍数，但是</font></font><code>9</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后面</font><font style="vertical-align: inherit;">有一个数字</font><font style="vertical-align: inherit;">，因此这3位数是4位数的一部分，并且逗号不在该位置。</font><font style="vertical-align: inherit;">同样适用于</font></font><code>567</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>456789</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是6位数字，是3的倍数，因此在此之前加逗号。</font></font><code>345678</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是3的倍数，但是</font></font><code>9</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后面</font><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">后缀，所以那里没有逗号。</font><font style="vertical-align: inherit;">等等。</font><font style="vertical-align: inherit;">的</font></font><code>\B</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 防止正则表达式在字符串的开头放置逗号。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ </font></font><a href="https://stackoverflow.com/users/1329075/neu-rah"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">neu-rah</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提到，如果小数点后有3位以上的数字，则此函数在不希望的位置添加逗号。</font><font style="vertical-align: inherit;">如果有问题，可以使用此功能：</font></font></p>

<pre><code>function numberWithCommas(x) {<font></font>
    var parts = x.toString().split(".");<font></font>
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");<font></font>
    return parts.join(".");<font></font>
}<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function numberWithCommas(x) {<font></font>
    var parts = x.toString().split(".");<font></font>
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");<font></font>
    return parts.join(".");<font></font>
}<font></font>
<font></font>
function test(x, expect) {<font></font>
    const result = numberWithCommas(x);<font></font>
    const pass = result === expect;<font></font>
    console.log(`${pass ? "✓" : "ERROR ====&gt;"} ${x} =&gt; ${result}`);<font></font>
    return pass;<font></font>
}<font></font>
<font></font>
let failures = 0;<font></font>
failures += !test(0              , "0");<font></font>
failures += !test(0.123456       , "0.123456");<font></font>
failures += !test(100            , "100");<font></font>
failures += !test(100.123456     , "100.123456");<font></font>
failures += !test(1000           , "1,000");<font></font>
failures += !test(1000.123456    , "1,000.123456");<font></font>
failures += !test(10000          , "10,000");<font></font>
failures += !test(10000.123456   , "10,000.123456");<font></font>
failures += !test(100000         , "100,000");<font></font>
failures += !test(100000.123456  , "100,000.123456");<font></font>
failures += !test(1000000        , "1,000,000");<font></font>
failures += !test(1000000.123456 , "1,000,000.123456");<font></font>
failures += !test(10000000       , "10,000,000");<font></font>
failures += !test(10000000.123456, "10,000,000.123456");<font></font>
if (failures) {<font></font>
    console.log(`${failures} test(s) failed`);<font></font>
} else {<font></font>
    console.log("All tests passed");<font></font>
}</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.as-console-wrapper {<font></font>
    max-height: 100% !important;<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ </font></font><a href="https://stackoverflow.com/users/157247/t-j-crowder"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tjcrowder</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出，现在JavaScript已经</font><a href="https://stackoverflow.com/users/157247/t-j-crowder"><font style="vertical-align: inherit;">落后</font></a><font style="vertical-align: inherit;">了（</font></font><a href="https://caniuse.com/#feat=js-regexp-lookbehind" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持信息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），可以在正则表达式本身中解决它：</font></font></p>

<pre><code>function numberWithCommas(x) {<font></font>
    return x.toString().replace(/\B(?&lt;!\.\d*)(?=(\d{3})+(?!\d))/g, ",");<font></font>
}<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function numberWithCommas(x) {<font></font>
    return x.toString().replace(/\B(?&lt;!\.\d*)(?=(\d{3})+(?!\d))/g, ",");<font></font>
}<font></font>
<font></font>
function test(x, expect) {<font></font>
    const result = numberWithCommas(x);<font></font>
    const pass = result === expect;<font></font>
    console.log(`${pass ? "✓" : "ERROR ====&gt;"} ${x} =&gt; ${result}`);<font></font>
    return pass;<font></font>
}<font></font>
<font></font>
let failures = 0;<font></font>
failures += !test(0,               "0");<font></font>
failures += !test(0.123456,        "0.123456");<font></font>
failures += !test(100,             "100");<font></font>
failures += !test(100.123456,      "100.123456");<font></font>
failures += !test(1000,            "1,000");<font></font>
failures += !test(1000.123456,     "1,000.123456");<font></font>
failures += !test(10000,           "10,000");<font></font>
failures += !test(10000.123456,    "10,000.123456");<font></font>
failures += !test(100000,          "100,000");<font></font>
failures += !test(100000.123456,   "100,000.123456");<font></font>
failures += !test(1000000,         "1,000,000");<font></font>
failures += !test(1000000.123456,  "1,000,000.123456");<font></font>
failures += !test(10000000,        "10,000,000");<font></font>
failures += !test(10000000.123456, "10,000,000.123456");<font></font>
if (failures) {<font></font>
    console.log(`${failures} test(s) failed`);<font></font>
} else {<font></font>
    console.log("All tests passed");<font></font>
}</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.as-console-wrapper {<font></font>
    max-height: 100% !important;<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><code>(?&lt;!\.\d*)</code><font style="vertical-align: inherit;"></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后面</font><font style="vertical-align: inherit;">有一个否定性的含义，表示匹配之前不能</font><font style="vertical-align: inherit;">有零个或多个数字。</font><font style="vertical-align: inherit;">至少在V8中，</font><font style="vertical-align: inherit;">负向后看比</font></font><code>split</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>join</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案（</font></font><a href="http://jsben.ch/umq99" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">快</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
