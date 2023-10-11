---
layout: question
title:  如何在不使用Try / Catch的情况下检查字符串在JavaScript中是否为有效的JSON字符串
date:   2020-03-12T08:18:36.000Z
description: 就像是：var jsonString = '{ "Id"  1, "Name"  "Coke" }';//should be trueIsJso...
img: 
author: 十三小哥
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>var jsonString = '{ "Id": 1, "Name": "Coke" }';<font></font>
<font></font>
//should be true<font></font>
IsJsonString(jsonString);<font></font>
<font></font>
//should be false<font></font>
IsJsonString("foo");<font></font>
IsJsonString("&lt;div&gt;foo&lt;/div&gt;")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案不应包含try / catch。</font><font style="vertical-align: inherit;">我们中的一些人打开“打破所有错误”，他们不喜欢调试器打破那些无效的JSON字符串。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1117篇《如何在不使用Try / Catch的情况下检查字符串在JavaScript中是否为有效的JSON字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>if(resp) {<font></font>
    try {<font></font>
        resp = $.parseJSON(resp);<font></font>
        console.log(resp);<font></font>
    } catch(e) {<font></font>
        alert(e);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>hope this works for you too</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也是 TypeScript版本：</font></font></p>

<pre><code>JSONTryParse(input) {<font></font>
    try {<font></font>
        //check if the string exists<font></font>
        if (input) {<font></font>
            var o = JSON.parse(input);<font></font>
<font></font>
            //validate the result too<font></font>
            if (o &amp;&amp; o.constructor === Object) {<font></font>
                return o;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    catch (e) {<font></font>
    }<font></font>
<font></font>
    return false;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我知道您为什么要避免这种情况。</font><font style="vertical-align: inherit;">但是也许尝试并抓住！==尝试并抓住。</font><font style="vertical-align: inherit;">; o）这在我脑海中浮现：</font></font></p>

<pre><code>var json_verify = function(s){ try { JSON.parse(s); return true; } catch (e) { return false; }};
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可能还会弄脏剪辑到JSON对象，例如：</font></font></p>

<pre><code>JSON.verify = function(s){ try { JSON.parse(s); return true; } catch (e) { return false; }};
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于已尽可能概括，它可能不会因错误而中断。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许会有用：</font></font></p>

<pre><code>    function parseJson(code)<font></font>
{<font></font>
    try {<font></font>
        return JSON.parse(code);<font></font>
    } catch (e) {<font></font>
        return code;<font></font>
    }<font></font>
}<font></font>
function parseJsonJQ(code)<font></font>
{<font></font>
    try {<font></font>
        return $.parseJSON(code);<font></font>
    } catch (e) {<font></font>
        return code;<font></font>
    }<font></font>
}<font></font>
<font></font>
var str =  "{\"a\":1,\"b\":2,\"c\":3,\"d\":4,\"e\":5}";<font></font>
alert(typeof parseJson(str));<font></font>
alert(typeof parseJsonJQ(str));<font></font>
var str_b  = "c";<font></font>
alert(typeof parseJson(str_b));<font></font>
alert(typeof parseJsonJQ(str_b));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE7：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对象，字符串，字符串</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CHROME：对象，对象，字符串，字符串</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON解析器，例如</font></font><code>JSON.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function IsJsonString(str) {<font></font>
    try {<font></font>
        JSON.parse(str);<font></font>
    } catch (e) {<font></font>
        return false;<font></font>
    }<font></font>
    return true;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在prototypeJS中，我们有</font></font><a href="http://api.prototypejs.org/language/String/prototype/isJSON/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isJSON</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">你可以试试看。</font><font style="vertical-align: inherit;">甚至</font></font><a href="http://www.prototypejs.org/learn/json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可能有帮助。</font></font></p>

<pre><code>"something".isJSON();<font></font>
// -&gt; false<font></font>
"\"something\"".isJSON();<font></font>
// -&gt; true<font></font>
"{ foo: 42 }".isJSON();<font></font>
// -&gt; false<font></font>
"{ \"foo\": 42 }".isJSON();<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
