---
layout: question
title:  什么时候应该使用转义而不是encodeURI / encodeURIComponent？
date:   2020-03-09T13:01:21.000Z
description: 编码要发送到Web服务器的查询字符串时-您escape()何时使用以及何时使用encodeURI()或encodeURIComponent()：使用转...
img: 
author: LGil泡芙
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码要发送到Web服务器的查询字符串时-您</font></font><code>escape()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">以及何时使用</font></font><code>encodeURI()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>encodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用转义：</font></font></p>

<pre><code>escape("% +&amp;=");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用encodeURI（）/ encodeURIComponent（）</font></font></p>

<pre><code>encodeURI("http://www.google.com?var1=value1&amp;var2=value2");<font></font>
<font></font>
encodeURIComponent("var1=value1&amp;var2=value2");<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第267篇《什么时候应该使用转义而不是encodeURI / encodeURIComponent？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ johann-echavarria的答案的现代重写：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(<font></font>
    Array(256)<font></font>
        .fill()<font></font>
        .map((ignore, i) =&gt; String.fromCharCode(i))<font></font>
        .filter(<font></font>
            (char) =&gt;<font></font>
                encodeURI(char) !== encodeURIComponent(char)<font></font>
                    ? {<font></font>
                          character: char,<font></font>
                          encodeURI: encodeURI(char),<font></font>
                          encodeURIComponent: encodeURIComponent(char)<font></font>
                      }<font></font>
                    : false<font></font>
        )<font></font>
)</code></pre>
</div>
</div>
<p></p>

<p>Or if you can use a table, replace <code>console.log</code> with <code>console.table</code> (for the prettier output).</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现即使对各种方法的各种用途和功能都有很好的了解，对各种方法进行试验也是一项很好的检查。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我发现</font></font><a href="http://www.the-art-of-web.com/javascript/escape/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该网站</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于证实我怀疑自己在做适当的事情非常有用。</font><font style="vertical-align: inherit;">事实证明，它对于解码encodeURIComponent的字符串很有用，这可能很难解释。</font><font style="vertical-align: inherit;">一个很棒的书签：</font></font></p>

<p><a href="http://www.the-art-of-web.com/javascript/escape/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.the-art-of-web.com/javascript/escape/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要记住，它们都编码不同的字符集，并适当选择所需的字符集。</font><font style="vertical-align: inherit;">encodeURI（）编码的字符要少于encodeURIComponent（）的编码，而encodeURIComponent（）所编码的字符要比escape（）少（而且与丹尼普相同）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilA</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">encodeURI（）-escape（）函数用于javascript转义，而不是HTTP。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">nick</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The difference between <code>encodeURI()</code> and <code>encodeURIComponent()</code> are exactly 11 characters encoded by encodeURIComponent but not by encodeURI:</p>

<p><img src="https://i.imgur.com/rHWC1r1.png" alt="该表包含encodeURI和encodeURIComponent的十个区别"></p>

<p>I generated this table easily with <strong>console.table</strong> in Google Chrome with this code:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [];<font></font>
for(var i=0;i&lt;256;i++) {<font></font>
  var char=String.fromCharCode(i);<font></font>
  if(encodeURI(char)!==encodeURIComponent(char)) {<font></font>
    arr.push({<font></font>
      character:char,<font></font>
      encodeURI:encodeURI(char),<font></font>
      encodeURIComponent:encodeURIComponent(char)<font></font>
    });<font></font>
  }<font></font>
}<font></font>
console.table(arr);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这篇文章很有启发性：
 </font></font><a href="http://unixpapa.com/js/querystring.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript Madness：查询字符串解析</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试理解为什么为什么decodeURIComponent无法正确解码“ +”时找到了它。</font><font style="vertical-align: inherit;">这是摘录：</font></font></p>

<pre><code>String:                         "A + B"<font></font>
Expected Query String Encoding: "A+%2B+B"<font></font>
escape("A + B") =               "A%20+%20B"     Wrong!<font></font>
encodeURI("A + B") =            "A%20+%20B"     Wrong!<font></font>
encodeURIComponent("A + B") =   "A%20%2B%20B"   Acceptable, but strange<font></font>
<font></font>
Encoded String:                 "A+%2B+B"<font></font>
Expected Decoding:              "A + B"<font></font>
unescape("A+%2B+B") =           "A+++B"       Wrong!<font></font>
decodeURI("A+%2B+B") =          "A+++B"       Wrong!<font></font>
decodeURIComponent("A+%2B+B") = "A+++B"       Wrong!<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
