---
layout: question
title:  如何在JavaScript中将字符串编码为Base64？
date:   2020-03-11T02:33:46.000Z
description: 我有一个PHP脚本，可以将PNG图像编码为Base64字符串。我想使用JavaScript做同样的事情。我知道如何打开文件，但不确定如何进行编码。我不...
img: 
author: 乐米亚
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个PHP脚本，可以将PNG图像编码为Base64字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用JavaScript做同样的事情。</font><font style="vertical-align: inherit;">我知道如何打开文件，但不确定如何进行编码。</font><font style="vertical-align: inherit;">我不习惯使用二进制数据。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第549篇《如何在JavaScript中将字符串编码为Base64？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一个</font></font><a href="https://codverter.com/src/webeditor?query=f1851dbe-a3fa-43ca-ae26-fab26ec50903" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>atob()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>btoa()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置函数JS：</font></font></p>

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
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，如果您使用的是dojo，它为我们提供了直接编码或解码为base64的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用dojox.encoding.base64编码字节数组：</font></font></p>

<pre><code>var str = dojox.encoding.base64.encode(myByteArray);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解码base64编码的字符串：</font></font></p>

<pre><code>var bytes = dojox.encoding.base64.decode(str);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管需要更多工作，但是如果您需要高性能的本机解决方案，则可以使用一些HTML5函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以将数据放入中</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" rel="noreferrer"><code>Blob</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FileReader.readAsDataURL（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数获取一个</font></font><code>data://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL，然后将其切掉以获取base64数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可能需要做进一步的处理才能对数据</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font></font><code>data://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">url </font><font style="vertical-align: inherit;">解码，因为我不确定</font><font style="vertical-align: inherit;">URL </font><font style="vertical-align: inherit;">是否对</font><font style="vertical-align: inherit;">字符进行了转义</font><font style="vertical-align: inherit;">，但这应该很简单。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我的项目，我仍然需要支持IE7并使用大量输入进行编码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Joe Dyndale提出的代码以及Marius的评论中的建议，可以通过使用数组而不是字符串构造结果来提高IE7的性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是编码的示例：</font></font></p>

<pre><code>var encode = function (input) {<font></font>
    var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;<font></font>
<font></font>
    input = _utf8_encode(input);<font></font>
<font></font>
    while (i &lt; input.length) {<font></font>
<font></font>
        chr1 = input.charCodeAt(i++);<font></font>
        chr2 = input.charCodeAt(i++);<font></font>
        chr3 = input.charCodeAt(i++);<font></font>
<font></font>
        enc1 = chr1 &gt;&gt; 2;<font></font>
        enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);<font></font>
        enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);<font></font>
        enc4 = chr3 &amp; 63;<font></font>
<font></font>
        if (isNaN(chr2)) {<font></font>
            enc3 = enc4 = 64;<font></font>
        } else if (isNaN(chr3)) {<font></font>
            enc4 = 64;<font></font>
        }<font></font>
<font></font>
        output.push(_keyStr.charAt(enc1));<font></font>
        output.push(_keyStr.charAt(enc2));<font></font>
        output.push(_keyStr.charAt(enc3));<font></font>
        output.push(_keyStr.charAt(enc4));<font></font>
<font></font>
    }<font></font>
<font></font>
    return output.join("");<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我宁愿使用来自bas64编码/解码方法</font></font><a href="https://code.google.com/p/crypto-js/#Encoders" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CryptoJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，利用最佳实践和模式JavaScript实现标准和安全的加密算法最流行的库。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿AJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这不适用于原始Unicode字符串！</font><font style="vertical-align: inherit;">请参阅Unicode节</font></font><a href="https://developer.mozilla.org/en-US/docs/DOM/window.btoa" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码语法</font></font></p>

<p><code>var encodedData = window.btoa(stringToEncode);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解码语法</font></font></p>

<p><code>var decodedData = window.atob(encodedData);</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨岑宝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要对HTML图像对象进行编码，则可以编写简单的函数，例如：</font></font></p>

<pre><code>function getBase64Image(img) {  <font></font>
  var canvas = document.createElement("canvas");  <font></font>
  canvas.width = img.width;  <font></font>
  canvas.height = img.height;  <font></font>
  var ctx = canvas.getContext("2d");  <font></font>
  ctx.drawImage(img, 0, 0);  <font></font>
  var dataURL = canvas.toDataURL("image/png");  <font></font>
  // escape data:image prefix<font></font>
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");  <font></font>
  // or just return dataURL<font></font>
  // return dataURL<font></font>
}  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要通过id获取图像的base64：</font></font></p>

<pre><code>function getBase64ImageById(id){  <font></font>
  return getBase64Image(document.getElementById(id));  <font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><a href="http://drcreazy.com/art/61/base64-javascript.aspx" rel="noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">更多</font></font><a href="http://drcreazy.com/art/61/base64-javascript.aspx" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经重新写手，这些编码和解码与十六进制一个例外方法转化为跨平台/浏览器的兼容性，并与真正的私人作用域模块化格式，并采用</font></font><code>btoa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>atob</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们是否因存在速度，而不是利用自己的编码：</font></font></p>

<p><a href="https://gist.github.com/Nijikokun/5192472" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/Nijikokun/5192472</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>base64.encode(/* String */);<font></font>
base64.decode(/* String */);<font></font>
<font></font>
utf8.encode(/* String */);<font></font>
utf8.decode(/* String */);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTom神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的两种实现都有两个错误</font></font><code>_utf8_decode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>c1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>c2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被指定为全局变量，由于碎使用的</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句，并</font></font><code>c3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有未初始化或声明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以工作，但是这些变量将覆盖此函数之外具有相同名称的任何现有变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个不会执行此操作的版本：</font></font></p>

<pre><code>// private method for UTF-8 decoding<font></font>
_utf8_decode : function (utftext) {<font></font>
    var string = "";<font></font>
    var i = 0;<font></font>
    var c = 0, c1 = 0, c2 = 0;<font></font>
<font></font>
    while ( i &lt; utftext.length ) {<font></font>
<font></font>
        c = utftext.charCodeAt(i);<font></font>
<font></font>
        if (c &lt; 128) {<font></font>
            string += String.fromCharCode(c);<font></font>
            i++;<font></font>
        }<font></font>
        else if((c &gt; 191) &amp;&amp; (c &lt; 224)) {<font></font>
            c1 = utftext.charCodeAt(i+1);<font></font>
            string += String.fromCharCode(((c &amp; 31) &lt;&lt; 6) | (c1 &amp; 63));<font></font>
            i += 2;<font></font>
        }<font></font>
        else {<font></font>
            c1 = utftext.charCodeAt(i+1);<font></font>
            c2 = utftext.charCodeAt(i+2);<font></font>
            string += String.fromCharCode(((c &amp; 15) &lt;&lt; 12) | ((c1 &amp; 63) &lt;&lt; 6) | (c2 &amp; 63));<font></font>
            i += 3;<font></font>
        }<font></font>
<font></font>
    }<font></font>
    return string;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小卤蛋Tom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.webtoolkit.info/javascript-base64.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>/**<font></font>
*<font></font>
*  Base64 encode / decode<font></font>
*  http://www.webtoolkit.info/<font></font>
*<font></font>
**/<font></font>
var Base64 = {<font></font>
<font></font>
// private property<font></font>
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",<font></font>
<font></font>
// public method for encoding<font></font>
encode : function (input) {<font></font>
    var output = "";<font></font>
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;<font></font>
    var i = 0;<font></font>
<font></font>
    input = Base64._utf8_encode(input);<font></font>
<font></font>
    while (i &lt; input.length) {<font></font>
<font></font>
        chr1 = input.charCodeAt(i++);<font></font>
        chr2 = input.charCodeAt(i++);<font></font>
        chr3 = input.charCodeAt(i++);<font></font>
<font></font>
        enc1 = chr1 &gt;&gt; 2;<font></font>
        enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);<font></font>
        enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);<font></font>
        enc4 = chr3 &amp; 63;<font></font>
<font></font>
        if (isNaN(chr2)) {<font></font>
            enc3 = enc4 = 64;<font></font>
        } else if (isNaN(chr3)) {<font></font>
            enc4 = 64;<font></font>
        }<font></font>
<font></font>
        output = output +<font></font>
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +<font></font>
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);<font></font>
<font></font>
    }<font></font>
<font></font>
    return output;<font></font>
},<font></font>
<font></font>
// public method for decoding<font></font>
decode : function (input) {<font></font>
    var output = "";<font></font>
    var chr1, chr2, chr3;<font></font>
    var enc1, enc2, enc3, enc4;<font></font>
    var i = 0;<font></font>
<font></font>
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");<font></font>
<font></font>
    while (i &lt; input.length) {<font></font>
<font></font>
        enc1 = this._keyStr.indexOf(input.charAt(i++));<font></font>
        enc2 = this._keyStr.indexOf(input.charAt(i++));<font></font>
        enc3 = this._keyStr.indexOf(input.charAt(i++));<font></font>
        enc4 = this._keyStr.indexOf(input.charAt(i++));<font></font>
<font></font>
        chr1 = (enc1 &lt;&lt; 2) | (enc2 &gt;&gt; 4);<font></font>
        chr2 = ((enc2 &amp; 15) &lt;&lt; 4) | (enc3 &gt;&gt; 2);<font></font>
        chr3 = ((enc3 &amp; 3) &lt;&lt; 6) | enc4;<font></font>
<font></font>
        output = output + String.fromCharCode(chr1);<font></font>
<font></font>
        if (enc3 != 64) {<font></font>
            output = output + String.fromCharCode(chr2);<font></font>
        }<font></font>
        if (enc4 != 64) {<font></font>
            output = output + String.fromCharCode(chr3);<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    output = Base64._utf8_decode(output);<font></font>
<font></font>
    return output;<font></font>
<font></font>
},<font></font>
<font></font>
// private method for UTF-8 encoding<font></font>
_utf8_encode : function (string) {<font></font>
    string = string.replace(/\r\n/g,"\n");<font></font>
    var utftext = "";<font></font>
<font></font>
    for (var n = 0; n &lt; string.length; n++) {<font></font>
<font></font>
        var c = string.charCodeAt(n);<font></font>
<font></font>
        if (c &lt; 128) {<font></font>
            utftext += String.fromCharCode(c);<font></font>
        }<font></font>
        else if((c &gt; 127) &amp;&amp; (c &lt; 2048)) {<font></font>
            utftext += String.fromCharCode((c &gt;&gt; 6) | 192);<font></font>
            utftext += String.fromCharCode((c &amp; 63) | 128);<font></font>
        }<font></font>
        else {<font></font>
            utftext += String.fromCharCode((c &gt;&gt; 12) | 224);<font></font>
            utftext += String.fromCharCode(((c &gt;&gt; 6) &amp; 63) | 128);<font></font>
            utftext += String.fromCharCode((c &amp; 63) | 128);<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    return utftext;<font></font>
},<font></font>
<font></font>
// private method for UTF-8 decoding<font></font>
_utf8_decode : function (utftext) {<font></font>
    var string = "";<font></font>
    var i = 0;<font></font>
    var c = c1 = c2 = 0;<font></font>
<font></font>
    while ( i &lt; utftext.length ) {<font></font>
<font></font>
        c = utftext.charCodeAt(i);<font></font>
<font></font>
        if (c &lt; 128) {<font></font>
            string += String.fromCharCode(c);<font></font>
            i++;<font></font>
        }<font></font>
        else if((c &gt; 191) &amp;&amp; (c &lt; 224)) {<font></font>
            c2 = utftext.charCodeAt(i+1);<font></font>
            string += String.fromCharCode(((c &amp; 31) &lt;&lt; 6) | (c2 &amp; 63));<font></font>
            i += 2;<font></font>
        }<font></font>
        else {<font></font>
            c2 = utftext.charCodeAt(i+1);<font></font>
            c3 = utftext.charCodeAt(i+2);<font></font>
            string += String.fromCharCode(((c &amp; 15) &lt;&lt; 12) | ((c2 &amp; 63) &lt;&lt; 6) | (c3 &amp; 63));<font></font>
            i += 3;<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    return string;<font></font>
}<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在</font></font><a href="http://www.google.com/search?q=javascript+base64+encode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ javascript base64编码”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上搜索</font><font style="vertical-align: inherit;">会变成很多其他选项，以上是第一个。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO老丝LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>btoa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以base-64为基础）和（以base-64 </font></font><code>atob</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为基础）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于IE 9及更低版本，请尝试使用</font></font><a href="https://github.com/carlo/jquery-base64"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jquery-base64</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件：</font></font></p>

<pre><code>$.base64.encode("this is a test");<font></font>
$.base64.decode("dGhpcyBpcyBhIHRlc3Q=");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa" rel="noreferrer"><code>btoa()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob" rel="noreferrer"><code>atob()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来与base64编码进行相互转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于这些功能接受/返回的内容，评论中似乎有些混乱，所以……</font></font></p>

<ul>
<li><p><code>btoa()</code> accepts a “string” where each character represents an 8-bit byte – if you pass a string containing characters that can’t be represented in 8 bits, <a href="https://developer.mozilla.org/en-US/docs/Web/API/window.btoa#Unicode_Strings" rel="noreferrer">it will probably break</a>. This isn’t a problem <em>if</em> you’re actually treating the string as a byte array, but if you’re trying to do something else then you’ll have to encode it first.</p></li>
<li><p><code>atob()</code> returns a “string” where each character represents an 8-bit byte – that is, its value will be between <code>0</code> and <code>0xff</code>. This does <em>not</em> mean it’s ASCII – presumably if you’re using this function at all, you expect to be working with binary data and not text.</p></li>
</ul>

<h3>See also:</h3>

<ul>
<li><a href="https://stackoverflow.com/questions/1095102/how-do-i-load-binary-image-data-using-javascript-and-xmlhttprequest">How do I load binary image data using Javascript and XMLHttpRequest?</a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sunny的代码很棒，除了在IE7中由于引用“ this”而中断。</font><font style="vertical-align: inherit;">通过将此类引用替换为“ Base64”来解决：</font></font></p>

<pre><code>var Base64 = {<font></font>
// private property<font></font>
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",<font></font>
<font></font>
// public method for encoding<font></font>
encode : function (input) {<font></font>
    var output = "";<font></font>
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;<font></font>
    var i = 0;<font></font>
<font></font>
    input = Base64._utf8_encode(input);<font></font>
<font></font>
    while (i &lt; input.length) {<font></font>
<font></font>
        chr1 = input.charCodeAt(i++);<font></font>
        chr2 = input.charCodeAt(i++);<font></font>
        chr3 = input.charCodeAt(i++);<font></font>
<font></font>
        enc1 = chr1 &gt;&gt; 2;<font></font>
        enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);<font></font>
        enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);<font></font>
        enc4 = chr3 &amp; 63;<font></font>
<font></font>
        if (isNaN(chr2)) {<font></font>
            enc3 = enc4 = 64;<font></font>
        } else if (isNaN(chr3)) {<font></font>
            enc4 = 64;<font></font>
        }<font></font>
<font></font>
        output = output +<font></font>
        Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +<font></font>
        Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);<font></font>
<font></font>
    }<font></font>
<font></font>
    return output;<font></font>
},<font></font>
<font></font>
// public method for decoding<font></font>
decode : function (input) {<font></font>
    var output = "";<font></font>
    var chr1, chr2, chr3;<font></font>
    var enc1, enc2, enc3, enc4;<font></font>
    var i = 0;<font></font>
<font></font>
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");<font></font>
<font></font>
    while (i &lt; input.length) {<font></font>
<font></font>
        enc1 = Base64._keyStr.indexOf(input.charAt(i++));<font></font>
        enc2 = Base64._keyStr.indexOf(input.charAt(i++));<font></font>
        enc3 = Base64._keyStr.indexOf(input.charAt(i++));<font></font>
        enc4 = Base64._keyStr.indexOf(input.charAt(i++));<font></font>
<font></font>
        chr1 = (enc1 &lt;&lt; 2) | (enc2 &gt;&gt; 4);<font></font>
        chr2 = ((enc2 &amp; 15) &lt;&lt; 4) | (enc3 &gt;&gt; 2);<font></font>
        chr3 = ((enc3 &amp; 3) &lt;&lt; 6) | enc4;<font></font>
<font></font>
        output = output + String.fromCharCode(chr1);<font></font>
<font></font>
        if (enc3 != 64) {<font></font>
            output = output + String.fromCharCode(chr2);<font></font>
        }<font></font>
        if (enc4 != 64) {<font></font>
            output = output + String.fromCharCode(chr3);<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    output = Base64._utf8_decode(output);<font></font>
<font></font>
    return output;<font></font>
<font></font>
},<font></font>
<font></font>
// private method for UTF-8 encoding<font></font>
_utf8_encode : function (string) {<font></font>
    string = string.replace(/\r\n/g,"\n");<font></font>
    var utftext = "";<font></font>
<font></font>
    for (var n = 0; n &lt; string.length; n++) {<font></font>
<font></font>
        var c = string.charCodeAt(n);<font></font>
<font></font>
        if (c &lt; 128) {<font></font>
            utftext += String.fromCharCode(c);<font></font>
        }<font></font>
        else if((c &gt; 127) &amp;&amp; (c &lt; 2048)) {<font></font>
            utftext += String.fromCharCode((c &gt;&gt; 6) | 192);<font></font>
            utftext += String.fromCharCode((c &amp; 63) | 128);<font></font>
        }<font></font>
        else {<font></font>
            utftext += String.fromCharCode((c &gt;&gt; 12) | 224);<font></font>
            utftext += String.fromCharCode(((c &gt;&gt; 6) &amp; 63) | 128);<font></font>
            utftext += String.fromCharCode((c &amp; 63) | 128);<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    return utftext;<font></font>
},<font></font>
<font></font>
// private method for UTF-8 decoding<font></font>
_utf8_decode : function (utftext) {<font></font>
    var string = "";<font></font>
    var i = 0;<font></font>
    var c = c1 = c2 = 0;<font></font>
<font></font>
    while ( i &lt; utftext.length ) {<font></font>
<font></font>
        c = utftext.charCodeAt(i);<font></font>
<font></font>
        if (c &lt; 128) {<font></font>
            string += String.fromCharCode(c);<font></font>
            i++;<font></font>
        }<font></font>
        else if((c &gt; 191) &amp;&amp; (c &lt; 224)) {<font></font>
            c2 = utftext.charCodeAt(i+1);<font></font>
            string += String.fromCharCode(((c &amp; 31) &lt;&lt; 6) | (c2 &amp; 63));<font></font>
            i += 2;<font></font>
        }<font></font>
        else {<font></font>
            c2 = utftext.charCodeAt(i+1);<font></font>
            c3 = utftext.charCodeAt(i+2);<font></font>
            string += String.fromCharCode(((c &amp; 15) &lt;&lt; 12) | ((c2 &amp; 63) &lt;&lt; 6) | (c3 &amp; 63));<font></font>
            i += 3;<font></font>
        }<font></font>
<font></font>
    }<font></font>
    return string;<font></font>
}<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
