---
layout: question
title:  在JavaScript中从base64字符串创建Blob
date:   2020-03-16T04:04:39.000Z
description: 我在字符串中有base64编码的二进制数据。const contentType = 'image/png';const b64Data = 'iVB...
img: 
author: 神无Davaid
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在字符串中有base64编码的二进制数据。</font></font></p>

<pre class="lang-javascript prettyprint-override"><code>const contentType = 'image/png';<font></font>
const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想创建一个</font></font><code>blob:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含此数据</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">URL并将其显示给用户。</font></font></p>

<pre class="lang-javascript prettyprint-override"><code>const blob = new Blob(????, {type: contentType});<font></font>
const blobUrl = URL.createObjectURL(blob);<font></font>
<font></font>
window.location = blobUrl;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直无法弄清楚如何创建</font></font><code>Blob</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，我可以通过使用</font></font><code>data:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL </font><font style="vertical-align: inherit;">来避免这种情况</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-javascript prettyprint-override"><code>const dataUrl = `data:${contentType};base64,${b64Data}`;<font></font>
<font></font>
window.location = dataUrl;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在大多数情况下，</font></font><code>data:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL太大了。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>Blob</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中将</font><font style="vertical-align: inherit;">base64字符串解码为</font><font style="vertical-align: inherit;">对象？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1706篇《在JavaScript中从base64字符串创建Blob》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于像我这样的所有复制粘贴爱好者，这里有一个可在Chrome，FireFox和Edge上使用的煮熟下载功能：</font></font></p>

<pre><code>    window.saveFile = function (bytesBase64, mimeType, fileName) {<font></font>
    var fileUrl = "data:" + mimeType + ";base64," + bytesBase64;<font></font>
    fetch(fileUrl)<font></font>
        .then(response =&gt; response.blob())<font></font>
        .then(blob =&gt; {<font></font>
            var link = window.document.createElement("a");<font></font>
            link.href = window.URL.createObjectURL(blob, { type: mimeType });<font></font>
            link.download = fileName;<font></font>
            document.body.appendChild(link);<font></font>
            link.click();<font></font>
            document.body.removeChild(link);<font></font>
        });<font></font>
     }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Itachi</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优化（但可读性较差）的实现：</font></font></p>

<pre class="lang-js prettyprint-override"><code>function base64toBlob(base64Data, contentType) {<font></font>
    contentType = contentType || '';<font></font>
    var sliceSize = 1024;<font></font>
    var byteCharacters = atob(base64Data);<font></font>
    var bytesLength = byteCharacters.length;<font></font>
    var slicesCount = Math.ceil(bytesLength / sliceSize);<font></font>
    var byteArrays = new Array(slicesCount);<font></font>
<font></font>
    for (var sliceIndex = 0; sliceIndex &lt; slicesCount; ++sliceIndex) {<font></font>
        var begin = sliceIndex * sliceSize;<font></font>
        var end = Math.min(begin + sliceSize, bytesLength);<font></font>
<font></font>
        var bytes = new Array(end - begin);<font></font>
        for (var offset = begin, i = 0; offset &lt; end; ++i, ++offset) {<font></font>
            bytes[i] = byteCharacters[offset].charCodeAt(0);<font></font>
        }<font></font>
        byteArrays[sliceIndex] = new Uint8Array(bytes);<font></font>
    }<font></font>
    return new Blob(byteArrays, { type: contentType });<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
