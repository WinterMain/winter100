---
layout: question
title:  设置Cookie并使用JavaScript获取Cookie \[重复\]
date:   2020-03-12T08:37:20.000Z
description:                                                                          ...
img: 
author: 飞云神奇
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/4825683/how-do-i-create-and-read-a-value-from-cookie" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何创建和读取Cookie中的值？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （18个回答）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-09-05 13：14：05Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图根据我在HTML中选择的CSS文件来设置Cookie。</font><font style="vertical-align: inherit;">我有一个带有选项列表的表单，以及不同的CSS文件作为值。</font><font style="vertical-align: inherit;">当我选择一个文件时，应将其保存到Cookie大约一周。</font><font style="vertical-align: inherit;">下次打开HTML文件时，它应该是您选择的上一个文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript代码：</font></font></p>

<pre><code>function cssLayout() {<font></font>
    document.getElementById("css").href = this.value;<font></font>
}<font></font>
<font></font>
<font></font>
function setCookie(){<font></font>
    var date = new Date("Februari 10, 2013");<font></font>
    var dateString = date.toGMTString();<font></font>
    var cookieString = "Css=document.getElementById("css").href" + dateString;<font></font>
    document.cookie = cookieString;<font></font>
}<font></font>
<font></font>
function getCookie(){<font></font>
    alert(document.cookie);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML代码：</font></font></p>

<pre><code>&lt;form&gt;<font></font>
    Select your css layout:&lt;br&gt;<font></font>
    &lt;select id="myList"&gt;<font></font>
        &lt;option value="style-1.css"&gt;CSS1&lt;/option&gt;<font></font>
        &lt;option value="style-2.css"&gt;CSS2&lt;/option&gt;  <font></font>
        &lt;option value="style-3.css"&gt;CSS3&lt;/option&gt;<font></font>
        &lt;option value="style-4.css"&gt;CSS4&lt;/option&gt;<font></font>
    &lt;/select&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1153篇《设置Cookie并使用JavaScript获取Cookie [重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确信这个问题应该有一个更通用的答案，其中包含一些可重复使用的代码，这些代码可将Cookie作为键值对使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该摘录取自</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/document.cookie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能是可信的。</font><font style="vertical-align: inherit;">这是用于Cookie的UTF安全对象：</font></font></p>

<pre><code>var docCookies = {<font></font>
  getItem: function (sKey) {<font></font>
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&amp;") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;<font></font>
  },<font></font>
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {<font></font>
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }<font></font>
    var sExpires = "";<font></font>
    if (vEnd) {<font></font>
      switch (vEnd.constructor) {<font></font>
        case Number:<font></font>
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;<font></font>
          break;<font></font>
        case String:<font></font>
          sExpires = "; expires=" + vEnd;<font></font>
          break;<font></font>
        case Date:<font></font>
          sExpires = "; expires=" + vEnd.toUTCString();<font></font>
          break;<font></font>
      }<font></font>
    }<font></font>
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");<font></font>
    return true;<font></font>
  },<font></font>
  removeItem: function (sKey, sPath, sDomain) {<font></font>
    if (!sKey || !this.hasItem(sKey)) { return false; }<font></font>
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");<font></font>
    return true;<font></font>
  },<font></font>
  hasItem: function (sKey) {<font></font>
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&amp;") + "\\s*\\=")).test(document.cookie);<font></font>
  },<font></font>
  keys: /* optional method: you can safely remove it! */ function () {<font></font>
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);<font></font>
    for (var nIdx = 0; nIdx &lt; aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }<font></font>
    return aKeys;<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla进行了一些测试，以证明此方法在所有情况下均有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个另外的片段</font></font><a href="http://mdn.beonex.com/en/DOM/document.cookie.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
