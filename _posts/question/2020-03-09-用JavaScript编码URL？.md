---
layout: question
title:  用JavaScript编码URL？
date:   2020-03-09T09:26:46.000Z
description: 如何使用JavaScript安全地编码URL，以便可以将其放入GET字符串中？var myUrl = "http //example.com/inde...
img: 
author: Stafan小哥
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript安全地编码URL，以便可以将其放入GET字符串中？</font></font></p>

<pre><code>var myUrl = "http://example.com/index.html?param=1&amp;anotherParam=2";<font></font>
var myOtherUrl = "http://example.com/index.html?url=" + myUrl;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您需要</font></font><code>myUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二行</font><font style="vertical-align: inherit;">编码该</font><font style="vertical-align: inherit;">变量？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一个</font></font><a href="https://codverter.com/src/webeditor?query=64199300-c557-4048-b924-c2561dcfbf17" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>encodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>decodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置函数JS：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;style&gt;<font></font>
      textarea{<font></font>
        width:30%;<font></font>
        height:100px;<font></font>
      }<font></font>
    &lt;/style&gt;<font></font>
    &lt;script&gt;<font></font>
      // encode string to base64<font></font>
      function encode()<font></font>
      {<font></font>
        var txt = document.getElementById("txt1").value;<font></font>
        var result = btoa(txt);<font></font>
        document.getElementById("txt2").value = result;<font></font>
      }<font></font>
      // decode base64 back to original string<font></font>
      function decode()<font></font>
      {<font></font>
        var txt = document.getElementById("txt3").value;<font></font>
        var result = atob(txt);<font></font>
        document.getElementById("txt4").value = result;<font></font>
      }<font></font>
    &lt;/script&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;textarea id="txt1"&gt;Some text to decode<font></font>
      &lt;/textarea&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;input type="button" id="btnencode" value="Encode" onClick="encode()"/&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;textarea id="txt2"&gt;<font></font>
      &lt;/textarea&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;br/&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;textarea id="txt3"&gt;U29tZSB0ZXh0IHRvIGRlY29kZQ==<font></font>
      &lt;/textarea&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;input type="button" id="btndecode" value="Decode" onClick="decode()"/&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;textarea id="txt4"&gt;<font></font>
      &lt;/textarea&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用esapi库并使用以下功能对url进行编码。</font><font style="vertical-align: inherit;">该函数可确保在对其余文本内容进行编码时，不会丢失“ /”：</font></font></p>

<pre><code>function encodeUrl(url)<font></font>
{<font></font>
    String arr[] = url.split("/");<font></font>
    String encodedUrl = "";<font></font>
    for(int i = 0; i&lt;arr.length; i++)<font></font>
    {<font></font>
        encodedUrl = encodedUrl + ESAPI.encoder().encodeForHTML(ESAPI.encoder().encodeForURL(arr[i]));<font></font>
        if(i&lt;arr.length-1) encodedUrl = encodedUrl + "/";<font></font>
    }<font></font>
    return url;<font></font>
}<font></font>
</code></pre>

<p><a href="https://www.owasp.org/index.php/ESAPI_JavaScript_Readme" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.owasp.org/index.php/ESAPI_JavaScript_Readme</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了防止双重编码，最好在编码之前对url进行解码（例如，如果要处理用户输入的url，这些URL可能已经编码了）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说我们有</font></font><code>abc%20xyz 123</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入（已经编码了一个空格）：</font></font></p>

<pre><code>encodeURI("abc%20xyz 123")            //   wrong: "abc%2520xyz%20123"<font></font>
encodeURI(decodeURI("abc%20xyz 123")) // correct: "abc%20xyz%20123"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坚持下去</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" rel="noreferrer"><code>encodeURIComponent()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该功能</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" rel="noreferrer"><code>encodeURI()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会麻烦编码许多在URL中具有语义重要性的字符（例如“＃”，“？”和“＆”）。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape" rel="noreferrer"><code>escape()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已弃用，并且不会费心地对“ +”字符进行编码，后者将被解释为服务器上的编码空格（并且，如此处其他人所指出的那样，不会正确地对非ASCII字符进行URL编码）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个很好</font></font><a href="https://stackoverflow.com/questions/75980/best-practice-escape-or-encodeuri-encodeuricomponent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的区别的解释</font></font><code>encodeURI()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>encodeURIComponent()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他地方。</font><font style="vertical-align: inherit;">如果您想对某些内容进行编码，以便可以安全地将其作为URI的组成部分（例如，作为查询字符串参数），请使用</font></font><code>encodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery，我将寻求</font></font><a href="http://api.jquery.com/jquery.param/"><code>$.param</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">它使用URL编码将对象映射到值的对象，这比在每个值上调用转义方法更容易阅读。</font></font></p>

<pre><code>$.param({a:"1=2", b:"Test 1"}) // gets a=1%3D2&amp;b=Test+1
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出内置函数</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">encodeURIComponent（str）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">encodeURI（str）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在您的情况下，这应该起作用：</font></font></p>

<pre><code>var myOtherUrl = <font></font>
       "http://example.com/index.html?url=" + encodeURIComponent(myUrl);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
