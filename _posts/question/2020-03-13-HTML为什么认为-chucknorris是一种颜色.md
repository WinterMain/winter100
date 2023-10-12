---
layout: question
title:  HTML为什么认为“ chucknorris”是一种颜色？
date:   2020-03-13T08:01:43.000Z
description: 在HTML中作为背景色输入时，某些随机字符串如何产生颜色？例如：<body bgcolor="chucknorris"> test </body>...
img: 
author: 路易神奇Itachi
category: question
answer: 6
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中作为背景色输入时，某些随机字符串如何产生颜色？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body bgcolor="chucknorris"&gt; test &lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... </font><font style="vertical-align: inherit;">在所有浏览器和平台上</font><font style="vertical-align: inherit;">产生</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font><strong><font style="vertical-align: inherit;">红色</font></strong><font style="vertical-align: inherit;">的文档</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，虽然</font></font><code>chucknorri</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也会产生红色背景，但也会</font></font><code>chucknorr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生黄色背景。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里发生了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1425篇《HTML为什么认为“ chucknorris”是一种颜色？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-a-legacy-color-value" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析旧属性上的颜色</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-a-legacy-color-value" rel="noreferrer"><font style="vertical-align: inherit;">规则</font></a><font style="vertical-align: inherit;">涉及到比现有答案中提到的步骤更多的步骤。</font><font style="vertical-align: inherit;">将截断部分转换为2位数部分描述为：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丢弃除最后8个字符以外的所有字符</font></font></li>
<li><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">只要所有组件都具有前导零</font></strong><font style="vertical-align: inherit;">，则一一丢弃</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前导零。</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丢弃除前两个字符外的所有字符</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子：</font></font></p>

<pre class="lang-none prettyprint-override"><code>oooFoooFoooF<font></font>
000F 000F 000F                &lt;- replace, pad and chunk<font></font>
0F 0F 0F                      &lt;- leading zeros truncated<font></font>
0F 0F 0F                      &lt;- truncated to 2 characters from right<font></font>
<font></font>
oooFooFFoFFF<font></font>
000F 00FF 0FFF                &lt;- replace, pad and chunk<font></font>
00F 0FF FFF                   &lt;- leading zeros truncated<font></font>
00 0F FF                      &lt;- truncated to 2 characters from right<font></font>
<font></font>
ABCooooooABCooooooABCoooooo<font></font>
ABC000000 ABC000000 ABC000000 &lt;- replace, pad and chunk<font></font>
BC000000 BC000000 BC000000    &lt;- truncated to 8 characters from left<font></font>
BC BC BC                      &lt;- truncated to 2 characters from right<font></font>
<font></font>
AoCooooooAoCooooooAoCoooooo<font></font>
A0C000000 A0C000000 A0C000000 &lt;- replace, pad and chunk<font></font>
0C000000 0C000000 0C000000    &lt;- truncated to 8 characters from left<font></font>
C000000 C000000 C000000       &lt;- leading zeros truncated<font></font>
C0 C0 C0                      &lt;- truncated to 2 characters from right<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是该算法的部分实现。</font><font style="vertical-align: inherit;">它不处理错误或用户输入有效颜色的情况。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="false" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function parseColor(input) {<font></font>
  // todo: return error if input is ""<font></font>
  input = input.trim();<font></font>
  // todo: return error if input is "transparent"<font></font>
  // todo: return corresponding #rrggbb if input is a named color<font></font>
  // todo: return #rrggbb if input matches #rgb<font></font>
  // todo: replace unicode code points greater than U+FFFF with 00<font></font>
  if (input.length &gt; 128) {<font></font>
    input = input.slice(0, 128);<font></font>
  }<font></font>
  if (input.charAt(0) === "#") {<font></font>
    input = input.slice(1);<font></font>
  }<font></font>
  input = input.replace(/[^0-9A-Fa-f]/g, "0");<font></font>
  while (input.length === 0 || input.length % 3 &gt; 0) {<font></font>
    input += "0";<font></font>
  }<font></font>
  var r = input.slice(0, input.length / 3);<font></font>
  var g = input.slice(input.length / 3, input.length * 2 / 3);<font></font>
  var b = input.slice(input.length * 2 / 3);<font></font>
  if (r.length &gt; 8) {<font></font>
    r = r.slice(-8);<font></font>
    g = g.slice(-8);<font></font>
    b = b.slice(-8);<font></font>
  }<font></font>
  while (r.length &gt; 2 &amp;&amp; r.charAt(0) === "0" &amp;&amp; g.charAt(0) === "0" &amp;&amp; b.charAt(0) === "0") {<font></font>
    r = r.slice(1);<font></font>
    g = g.slice(1);<font></font>
    b = b.slice(1);<font></font>
  }<font></font>
  if (r.length &gt; 2) {<font></font>
    r = r.slice(0, 2);<font></font>
    g = g.slice(0, 2);<font></font>
    b = b.slice(0, 2);<font></font>
  }<font></font>
  return "#" + r.padStart(2, "0") + g.padStart(2, "0") + b.padStart(2, "0");<font></font>
}<font></font>
<font></font>
$(function() {<font></font>
  $("#input").on("change", function() {<font></font>
    var input = $(this).val();<font></font>
    var color = parseColor(input);<font></font>
    var $cells = $("#result tbody td");<font></font>
    $cells.eq(0).attr("bgcolor", input);<font></font>
    $cells.eq(1).attr("bgcolor", color);<font></font>
<font></font>
    var color1 = $cells.eq(0).css("background-color");<font></font>
    var color2 = $cells.eq(1).css("background-color");<font></font>
    $cells.eq(2).empty().append("bgcolor: " + input, "&lt;br&gt;", "getComputedStyle: " + color1);<font></font>
    $cells.eq(3).empty().append("bgcolor: " + color, "&lt;br&gt;", "getComputedStyle: " + color2);<font></font>
  });<font></font>
});</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>body { font: medium monospace; }<font></font>
input { width: 20em; }<font></font>
table { table-layout: fixed; width: 100%; }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;p&gt;&lt;input id="input" placeholder="Enter color e.g. chucknorris"&gt;&lt;/p&gt;<font></font>
&lt;table id="result"&gt;<font></font>
  &lt;thead&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;th&gt;Left Color&lt;/th&gt;<font></font>
      &lt;th&gt;Right Color&lt;/th&gt;<font></font>
    &lt;/tr&gt;<font></font>
  &lt;/thead&gt;<font></font>
  &lt;tbody&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;td&gt;&amp;nbsp;&lt;/td&gt;<font></font>
      &lt;td&gt;&amp;nbsp;&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;td&gt;&amp;nbsp;&lt;/td&gt;<font></font>
      &lt;td&gt;&amp;nbsp;&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
  &lt;/tbody&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chucknorris</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">c</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开头，</font><font style="vertical-align: inherit;">浏览器将其读取为十六进制值。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为A，B，C，D，E和F是</font></font><a href="https://en.wikipedia.org/wiki/Hexadecimal" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十六进制字符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器将转换</font></font><code>chucknorris</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为十六进制值</font></font><code>C00C00000000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将</font></font><code>C00C00000000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十六进制值转换为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RGB</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式（除以3）：</font></font></p>

<blockquote>
  <p><code>C00C00000000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt; </font></font><code>R:C00C, G:0000, B:0000</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器仅需要两位数字来指示颜色：</font></font></p>

<blockquote>
  <p><code>R:C00C, G:0000, B:0000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=&gt; </font></font><code>R:C0, G:00, B:00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=&gt;</font></font><code>C00000</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，</font></font><code>bgcolor = C00000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Web浏览器中</font><font style="vertical-align: inherit;">显示</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个演示它的示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td bgcolor="chucknorris" cellpadding="10" width="150" align="center"&gt;chucknorris&lt;/td&gt;<font></font>
    &lt;td bgcolor="c00c00000000" cellpadding="10" width="150" align="center"&gt;c00c00000000&lt;/td&gt;<font></font>
    &lt;td bgcolor="c00000" cellpadding="10" width="150" align="center"&gt;c00000&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝LEY西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答：</font></font></strong> </p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器将尝试将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chucknorris</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为十六进制值。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是唯一有效的十六进制字符</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查克·诺里斯</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，值会变成：</font></font><code>c00c00000000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0为无效的所有值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，浏览器将所述结果为3个groupds： ，</font></font><code>Red = c00c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">。</font></font><code>Green = 0000</code><font style="vertical-align: inherit;"></font><code>Blue = 0000</code><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于html背景的有效十六进制值对于每种颜色类型（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">r</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">g</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">仅包含2位数字，因此每组</font><font style="vertical-align: inherit;">都将截断最后2位数字，而剩下的rgb值为</font></font><code>c00000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">砖红色调的颜色。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很抱歉，我不同意，但是根据解析</font></font><a href="https://stackoverflow.com/a/12630675/282110"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Yuhong Bao</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布的旧色值的规则</font><font style="vertical-align: inherit;">，</font></font><code>chucknorris</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不等于</font></font><code>#CC0000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是</font><font style="vertical-align: inherit;">等同于</font></font><code>#C00000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常相似但略有不同的红***调。</font><font style="vertical-align: inherit;">我使用</font></font><a href="https://addons.mozilla.org/en-us/firefox/addon/colorzilla/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox ColorZilla加载项进行</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则规定：  </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加0，使字符串的长度是3的倍数： </font></font><code>chucknorris0</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将字符串分成3个相等长度的字符串： </font></font><code>chuc knor ris0</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将每个字符串截断为2个字符： </font></font><code>ch kn ri</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留十六进制值，并在必要时添加0： </font></font><code>C0 00 00</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够使用这些规则正确解释以下字符串：</font></font></p>

<ul>
<li><code>LuckyCharms</code></li>
<li><code>Luck</code></li>
<li><code>LuckBeALady</code></li>
<li><code>LuckBeALadyTonight</code></li>
<li><code>GangnamStyle</code> </li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说颜色是原来的原始</font></font><code>#CC0000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答复者已经编辑了他们的答案以包括更正。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WHATWG HTML规范具有解析旧版颜色值的确切算法：</font><a href="https://html.spec.whatwg.org/multipage/infrastructure.html#rules-for-parsing-a-legacy-colour-value" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://html.spec.whatwg.org/multipage/infrastructure.html#rules-for-parsing-a-legacy-colour-value" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//html.spec.whatwg.org/multipage/infrastructure.html#rules-for-parsing-a-legacy-colour-value</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于解析颜色字符串的Netscape Classic代码是开源的：</font><a href="https://dxr.mozilla.org/classic/source/lib/layout/layimage.c#155" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://dxr.mozilla.org/classic/source/lib/layout/layimage.c#155" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//dxr.mozilla.org/classic/source/lib/layout/layimage.c#155</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，请注意，每个字符都被解析为十六进制数字，然后在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不检查overflow的情况下</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被转换为32位整数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">32位整数只能容纳8个十六进制数字，这就是为什么只考虑最后8个字符的原因。</font><font style="vertical-align: inherit;">将十六进制数字解析为32位整数后，然后将它们除以16，直到它们适合8位，然后将其截断为8位整数，这就是为什么忽略前导零的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：此代码与规范中定义的代码不完全匹配，但唯一的区别是几行代码。</font><font style="vertical-align: inherit;">我认为是添加了以下几行（在Netscape 4中）：</font></font></p>

<pre><code>if (bytes_per_val &gt; 4)<font></font>
{<font></font>
      bytes_per_val = 4;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Netscape时代的遗留物：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丢失的数字被视为0 [...]。</font><font style="vertical-align: inherit;">不正确的数字被简单地解释为0。例如，值＃F0F0F0，F0F0F0，F0F0F，＃FxFxFx和FxFxFx都相同。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘自博客文章</font></font><em><a href="http://scrappy-do.blogspot.com/2004/08/little-rant-about-microsoft-internet.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于Microsoft Internet Explorer的颜色解析的一点怨言</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它详细介绍了它，包括不同长度的颜色值等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们从博客文章中依次应用规则，则会得到以下信息：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有无效的十六进制字符替换为0</font></font></p>

<pre><code>chucknorris becomes c00c0000000
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充到下一个可被3整除的字符总数（11-&gt; 12）</font></font></p>

<pre><code>c00c 0000 0000
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分为三个相等的组，每个分量代表RGB颜色的相应颜色分量：</font></font></p>

<pre><code>RGB (c00c, 0000, 0000)
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将每个参数从右向下截断为两个字符</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到以下结果：</font></font></p>

<pre><code>RGB (c0, 00, 00) = #C00000 or RGB(192, 0, 0)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是一个示例，演示了该</font></font><code>bgcolor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性的实际用途，以产生此“惊人的”颜色样本：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td bgcolor="chucknorris" cellpadding="8" width="100" align="center"&gt;chuck norris&lt;/td&gt;<font></font>
    &lt;td bgcolor="mrt"         cellpadding="8" width="100" align="center" style="color:#ffffff"&gt;Mr T&lt;/td&gt;<font></font>
    &lt;td bgcolor="ninjaturtle" cellpadding="8" width="100" align="center" style="color:#ffffff"&gt;ninjaturtle&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td bgcolor="sick"  cellpadding="8" width="100" align="center"&gt;sick&lt;/td&gt;<font></font>
    &lt;td bgcolor="crap"  cellpadding="8" width="100" align="center"&gt;crap&lt;/td&gt;<font></font>
    &lt;td bgcolor="grass" cellpadding="8" width="100" align="center"&gt;grass&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p>

<p>This also answers the other part of the question; why does <code>bgcolor="chucknorr"</code> produce a yellow colour? Well, if we apply the rules, the string is:</p>

<pre><code>c00c00000 =&gt; c00 c00 000 =&gt; c0 c0 00 [RGB(192, 192, 0)]
</code></pre>

<p>Which gives a light yellow gold colour. As the string starts off as 9 characters, we keep the second C this time around hence it ends up in the final colour value.</p>

<p>I originally encountered this when someone pointed out you could do <code>color="crap"</code> and, well, it comes out brown.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
