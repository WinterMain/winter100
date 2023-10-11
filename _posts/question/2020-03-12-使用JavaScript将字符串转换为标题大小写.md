---
layout: question
title:  使用JavaScript将字符串转换为标题大小写
date:   2020-03-12T08:14:13.000Z
description: 有一种简单的方法可以将字符串转换为标题大小写吗？例如john smith变为John Smith。我不是在寻找像John Resig的解决方案那样复杂的东...
img: 
author: 老丝泡芙
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种简单的方法可以将字符串转换为标题大小写吗？</font><font style="vertical-align: inherit;">例如</font></font><code>john smith</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变为</font></font><code>John Smith</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我不是在寻找像</font></font><a href="http://ejohn.org/blog/title-capitalization-in-javascript/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那样复杂的东西</font><font style="vertical-align: inherit;">，只是（希望）某种一线或两线。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1114篇《使用JavaScript将字符串转换为标题大小写》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>For those of us who are scared of regular expressions (lol):</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function titleCase(str)<font></font>
{<font></font>
    var words = str.split(" ");<font></font>
    for ( var i = 0; i &lt; words.length; i++ )<font></font>
    {<font></font>
        var j = words[i].charAt(0).toUpperCase();<font></font>
        words[i] = j + words[i].substr(1);<font></font>
    }<font></font>
    return words.join(" ");<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>"john f. kennedy".replace(/\b\S/g, t =&gt; t.toUpperCase())
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Taking the "lewax00" solution I created this simple solution that force to "w" starting with space or "w" that initiate de word, but is not able   to remove the extra intermediate spaces.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>"SOFÍA vergara".toLowerCase().replace(/\b(\s\w|^\w)/g, function (txt) { return txt.toUpperCase(); });</code></pre>
</div>
</div>
<p></p>

<p>The result is "Sofía Vergara".</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Use <code>/\S+/g</code> to support diacritics:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function toTitleCase(str) {<font></font>
  return str.replace(/\S+/g, str =&gt; str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());<font></font>
}<font></font>
<font></font>
console.log(toTitleCase("a city named örebro")); // A City Named Örebro</code></pre>
</div>
</div>
<p></p>

<p>However: "<strong>s</strong>unshine (<strong>y</strong>ellow)" ⇒ "<strong>S</strong>unshine (<strong>y</strong>ellow)"</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Try this, shortest way:</p>

<pre><code>str.replace(/(^[a-z])|(\s+[a-z])/g, txt =&gt; txt.toUpperCase());
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near卡卡西小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var toMatch = "john w. smith";<font></font>
var result = toMatch.replace(/(\w)(\w*)/g, function (_, i, r) {<font></font>
      return i.toUpperCase() + (r != null ? r : "");<font></font>
    }<font></font>
)<font></font>
</code></pre>

<p>Seems to work...
Tested with the above, "the quick-brown, fox? /jumps/ ^over^ the ¡lazy! dog..." and "C:/program files/some vendor/their 2nd application/a file1.txt".</p>

<p>If you want 2Nd instead of 2nd, you can change to <code>/([a-z])(\w*)/g</code>.</p>

<p>The first form can be simplified as:</p>

<pre><code>function toTitleCase(toTransform) {<font></font>
  return toTransform.replace(/\b([a-z])/g, function (_, initial) {<font></font>
      return initial.toUpperCase();<font></font>
  });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>ES 6</p>

<pre><code>str.split(' ')<font></font>
   .map(s =&gt; s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())<font></font>
   .join(' ')<font></font>
</code></pre>

<p>else</p>

<pre><code>str.split(' ').map(function (s) {<font></font>
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();<font></font>
}).join(' ')<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If regex used in the above solutions is getting you confused, try this code:</p>

<pre><code>function titleCase(str) {<font></font>
  return str.split(' ').map(function(val){ <font></font>
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();<font></font>
  }).join(' ');<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的版本，IMO，也很容易理解和优雅。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var str = "foo bar baz"<font></font>
<font></font>
console.log(<font></font>
<font></font>
str.split(' ')<font></font>
   .map(w =&gt; w[0].toUpperCase() + w.substr(1).toLowerCase())<font></font>
   .join(' ')<font></font>
<font></font>
)<font></font>
// returns "Foo Bar Baz"</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将</font></font><a href="http://www.w3.org/TR/CSS2/text.html#caps-prop" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本转换的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> CSS样式应用于控件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如： </font></font><code>(text-transform: capitalize);</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在绝对必要时才使用JS方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    function toTitleCase(str) {<font></font>
        return str.replace(<font></font>
            /\w\S*/g,<font></font>
            function(txt) {<font></font>
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();<font></font>
            }<font></font>
        );<font></font>
    }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;form&gt;<font></font>
Input:<font></font>
&lt;br /&gt;&lt;textarea name="input" onchange="form.output.value=toTitleCase(this.value)"  onkeyup="form.output.value=toTitleCase(this.value)"&gt;&lt;/textarea&gt;<font></font>
&lt;br /&gt;Output:<font></font>
&lt;br /&gt;&lt;textarea name="output" readonly onclick="select(this)"&gt;&lt;/textarea&gt;<font></font>
&lt;/form&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稍微更优雅的方式，可以适应Greg Dean的功能：</font></font></p>

<pre><code>String.prototype.toProperCase = function () {<font></font>
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样称呼它：</font></font></p>

<pre><code>"pascal".toProperCase();
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
