---
layout: question
title:  如何获取JavaScript中的查询字符串值？
date:   2020-03-09T08:08:05.000Z
description:                                                                          ...
img: 
author: A村村
category: question
answer: 7
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
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有</font><font style="vertical-align: inherit;">通过jQuery（或不通过jQuery）</font><font style="vertical-align: inherit;">检索</font></font><a href="http://en.wikipedia.org/wiki/Query_string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值的无</font><font style="vertical-align: inherit;">插件方法</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，怎么办？</font><font style="vertical-align: inherit;">如果没有，是否有可以做到的插件？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第174篇《如何获取JavaScript中的查询字符串值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function GET() {<font></font>
        var data = [];<font></font>
        for(x = 0; x &lt; arguments.length; ++x)<font></font>
            data.push(location.href.match(new RegExp("/\?".concat(arguments[x],"=","([^\n&amp;]*)")))[1])<font></font>
                return data;<font></font>
    }<font></font>
<font></font>
<font></font>
example:<font></font>
data = GET("id","name","foo");<font></font>
query string : ?id=3&amp;name=jet&amp;foo=b<font></font>
returns:<font></font>
    data[0] // 3<font></font>
    data[1] // jet<font></font>
    data[2] // b<font></font>
or<font></font>
    alert(GET("id")[0]) // return 3<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我经常使用正则表达式，但并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，在应用程序中读取一次查询字符串，然后从所有键/值对构建对象似乎更容易和更有效，例如：</font></font></p>

<pre><code>var search = function() {<font></font>
  var s = window.location.search.substr(1),<font></font>
    p = s.split(/\&amp;/), l = p.length, kv, r = {};<font></font>
  if (l === 0) {return false;}<font></font>
  while (l--) {<font></font>
    kv = p[l].split(/\=/);<font></font>
    r[kv[0]] = decodeURIComponent(kv[1] || '') || true;<font></font>
  }<font></font>
  return r;<font></font>
}();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于类似的URL，</font></font><code>http://domain.com?param1=val1&amp;param2=val2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以稍后在代码中使用</font></font><code>search.param1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">获得它们的值</font></font><code>search.param2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/URLUtils/search#Get_the_value_of_a_single_search_param"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function loadPageVar (sVar) {<font></font>
&nbsp;&nbsp;return unescape(window.location.search.replace(new RegExp("^(?:.*[&amp;\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&amp;") + "(?:\\=([^&amp;]*))?)?.*$", "i"), "$1"));<font></font>
}<font></font>
<font></font>
alert(loadPageVar("name"));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖前端逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高尔夫代码：</font></font></p>

<pre><code>var a = location.search&amp;&amp;location.search.substr(1).replace(/\+/gi," ").split("&amp;");<font></font>
for (var i in a) {<font></font>
    var s = a[i].split("=");<font></font>
    a[i]  = a[unescape(s[0])] = unescape(s[1]);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示它！</font></font></p>

<pre><code>for (i in a) {<font></font>
    document.write(i + ":" + a[i] + "&lt;br/&gt;");   <font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Mac上：</font></font><code>test.htm?i=can&amp;has=cheezburger</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示</font></font></p>

<pre><code>0:can<font></font>
1:cheezburger<font></font>
i:can<font></font>
has:cheezburger<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢</font></font><a href="https://stackoverflow.com/a/3867610/632117"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ryan Phelan的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我没有看到为此扩展jQuery的任何意义？</font><font style="vertical-align: inherit;">没有使用jQuery功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，我喜欢Google Chrome中的内置功能：window.location.getParameter。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么为什么不使用它呢？</font><font style="vertical-align: inherit;">好的，其他浏览器没有。</font><font style="vertical-align: inherit;">因此，如果此函数不存在，请创建它：</font></font></p>

<pre><code>if (!window.location.getParameter ) {<font></font>
  window.location.getParameter = function(key) {<font></font>
    function parseParams() {<font></font>
        var params = {},<font></font>
            e,<font></font>
            a = /\+/g,  // Regex for replacing addition symbol with a space<font></font>
            r = /([^&amp;=]+)=?([^&amp;]*)/g,<font></font>
            d = function (s) { return decodeURIComponent(s.replace(a, " ")); },<font></font>
            q = window.location.search.substring(1);<font></font>
<font></font>
        while (e = r.exec(q))<font></font>
            params[d(e[1])] = d(e[2]);<font></font>
<font></font>
        return params;<font></font>
    }<font></font>
<font></font>
    if (!this.queryStringParams)<font></font>
        this.queryStringParams = parseParams(); <font></font>
<font></font>
    return this.queryStringParams[key];<font></font>
  };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能或多或少与Ryan Phelan相同，但是它的包装方式有所不同：名称清晰且不依赖其他javascript库。</font></font><a href="http://sharepointkunskap.wordpress.com/2012/01/11/get-url-parameters-with-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此功能的更多信息，请访问我的博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tl; dr</font></font></em></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种快速，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多值键</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码字符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var qd = {};<font></font>
if (location.search) location.search.substr(1).split("&amp;").forEach(function(item) {var s = item.split("="), k = s[0], v = s[1] &amp;&amp; decodeURIComponent(s[1]); (qd[k] = qd[k] || []).push(v)})<font></font>
<font></font>
//using ES6   (23 characters cooler)<font></font>
var qd = {};<font></font>
if (location.search) location.search.substr(1).split`&amp;`.forEach(item =&gt; {let [k,v] = item.split`=`; v = v &amp;&amp; decodeURIComponent(v); (qd[k] = qd[k] || []).push(v)})<font></font>
</code></pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

多行：

</font></font><pre><code>var qd = {};<font></font>
if (location.search) location.search.substr(1).split("&amp;").forEach(function(item) {<font></font>
    var s = item.split("="),<font></font>
        k = s[0],<font></font>
        v = s[1] &amp;&amp; decodeURIComponent(s[1]); //  null-coalescing / short-circuit<font></font>
    //(k in qd) ? qd[k].push(v) : qd[k] = [v]<font></font>
    (qd[k] = qd[k] || []).push(v) // null-coalescing / short-circuit<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些代码是什么... </font></font><br>
<em><a href="https://stackoverflow.com/q/476436/985454"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ null-coalescing”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-Circuit_Evaluation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短路评估</font></font></a><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
ES6解构</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板字符串</font></font></a></em></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

例：

</font></font><pre><code>"?a=1&amp;b=0&amp;c=3&amp;d&amp;e&amp;a=5&amp;a=t%20e%20x%20t&amp;e=http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dståle%26car%3Dsaab"<font></font>
&gt; qd<font></font>
a: ["1", "5", "t e x t"]<font></font>
b: ["0"]<font></font>
c: ["3"]<font></font>
d: [undefined]<font></font>
e: [undefined, "http://w3schools.com/my test.asp?name=ståle&amp;car=saab"]<font></font>
<font></font>
&gt; qd.a[1]    // "5"<font></font>
&gt; qd["a"][1] // "5"<font></font>
</code></pre>

<p><br></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多关于Vanilla JavaScript解决方案的信息。</font></font></h1>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要访问URL的不同部分，请使用 </font></font><code>location.(search|hash)</code></em></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的（虚拟）解决方案</font></font></h2>

<pre><code>var queryDict = {};<font></font>
location.search.substr(1).split("&amp;").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font><font style="vertical-align: inherit;">处理</font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空键</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font><font style="vertical-align: inherit;">找到的</font><b><font style="vertical-align: inherit;">最后一个</font></b><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">覆盖</font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多键</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><b><font style="vertical-align: inherit;"></font></b><font style="vertical-align: inherit;"></font></li>
</ul>

<pre><code>"?a=1&amp;b=0&amp;c=3&amp;d&amp;e&amp;a=5"<font></font>
&gt; queryDict<font></font>
a: "5"<font></font>
b: "0"<font></font>
c: "3"<font></font>
d: undefined<font></font>
e: undefined<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多值键</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的按键检查 </font></font><code>(item in dict) ? dict.item.push(val) : dict.item = [val]</code></p>

<pre><code>var qd = {};<font></font>
location.search.substr(1).split("&amp;").forEach(function(item) {(item.split("=")[0] in qd) ? qd[item.split("=")[0]].push(item.split("=")[1]) : qd[item.split("=")[0]] = [item.split("=")[1]]})<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在返回</font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>qd.key[index]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">访问值</font></font><code>qd[key][index]</code></li>
</ul>

<pre><code>&gt; qd<font></font>
a: ["1", "5"]<font></font>
b: ["0"]<font></font>
c: ["3"]<font></font>
d: [undefined]<font></font>
e: [undefined]<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码字符？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>decodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或两个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分裂。</font></font></p>

<pre><code>var qd = {};<font></font>
location.search.substr(1).split("&amp;").forEach(function(item) {var k = item.split("=")[0], v = decodeURIComponent(item.split("=")[1]); (k in qd) ? qd[k].push(v) : qd[k] = [v]})<font></font>
</code></pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

例：

</font></font><pre><code>"?a=1&amp;b=0&amp;c=3&amp;d&amp;e&amp;a=5&amp;a=t%20e%20x%20t&amp;e=http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dståle%26car%3Dsaab"<font></font>
&gt; qd<font></font>
a: ["1", "5", "t e x t"]<font></font>
b: ["0"]<font></font>
c: ["3"]<font></font>
d: ["undefined"]  // decodeURIComponent(undefined) returns "undefined" !!!*<font></font>
e: ["undefined", "http://w3schools.com/my test.asp?name=ståle&amp;car=saab"]<font></font>
</code></pre>

<p><br>
</p><hr><p></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自评论</font></font></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">* !!! </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它</font></font><code>decodeURIComponent(undefined)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回string </font></font><code>"undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">解决方案在于的简单用法</font></font><a href="https://stackoverflow.com/a/476445/985454"><code>&amp;&amp;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以确保</font></font><code>decodeURIComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会在未定义的值上调用。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参见顶部的“完整解决方案”。）</font></font></em></p>

<pre><code>v = v &amp;&amp; decodeURIComponent(v);
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果querystring为空（</font></font><code>location.search == ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则结果会产生误导</font></font><code>qd == {"": undefined}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">建议像下面这样启动解析功能之前检查查询字符串：</font></font></p>

<pre><code>if (location.search) location.search.substr(1).split("&amp;").forEach(...)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里发布的一些解决方案效率低下。</font><font style="vertical-align: inherit;">完全不需要每次脚本需要访问参数时都重复进行正则表达式搜索，只需一个函数即可将参数拆分为关联数组样式的对象。</font><font style="vertical-align: inherit;">如果您不使用HTML 5历史记录API，则每个页面加载仅需要一次。</font><font style="vertical-align: inherit;">此处的其他建议也无法正确解码URL。</font></font></p>

<pre><code>var urlParams;<font></font>
(window.<a href="https://developer.mozilla.org/en-US/docs/DOM/window.onpopstate" rel="noreferrer">onpopstate</a> = function () {<font></font>
    var match,<font></font>
        pl     = /\+/g,  // Regex for replacing addition symbol with a space<font></font>
        search = /([^&amp;=]+)=?([^&amp;]*)/g,<font></font>
        decode = function (s) { return <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURIComponent" rel="noreferrer">decodeURIComponent</a>(s.replace(pl, " ")); },<font></font>
        query  = window.<a href="https://developer.mozilla.org/en-US/docs/DOM/window.location" rel="noreferrer">location</a>.search.<a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer">substring</a>(1);<font></font>
<font></font>
    urlParams = {};<font></font>
    while (match = search.<a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/exec" rel="noreferrer">exec</a>(query))<font></font>
       urlParams[decode(match[1])] = decode(match[2]);<font></font>
})();</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例查询字符串： </font></font></p>

<blockquote>
  <p><code>?i=main&amp;mode=front&amp;sid=de8d49b78a85a322c4155015fdce22c4&amp;enc=+Hello%20&amp;empty</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre class="lang-js prettyprint-override"><code> urlParams = {<font></font>
    enc: " Hello ",<font></font>
    i: "main",<font></font>
    mode: "front",<font></font>
    sid: "de8d49b78a85a322c4155015fdce22c4",<font></font>
    empty: ""<font></font>
}<font></font>
<font></font>
alert(urlParams["mode"]);<font></font>
// -&gt; "front"<font></font>
<font></font>
alert("empty" in urlParams);<font></font>
// -&gt; true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也可以轻松地改进以处理数组样式的查询字符串。</font><font style="vertical-align: inherit;">这方面的一个例子是</font></font><a href="http://jsbin.com/adali3/2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但由于阵列式的参数没有定义</font></font><a href="http://tools.ietf.org/html/rfc3986" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 3986</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会污染这个答案的源代码。</font></font><a href="https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/23401756#23401756"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些对“污染”版本感兴趣的人，请查看下面的Campbeln的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，正如评论中指出的那样，这</font></font><code>;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>key=value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成对</font><font style="vertical-align: inherit;">的合法分隔符</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将需要更复杂的正则表达式来处理</font></font><code>;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我认为这是不必要的，因为很少</font></font><code>;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">正则表达式，</font><font style="vertical-align: inherit;">并且我说这两种情况都不太可能使用。</font><font style="vertical-align: inherit;">如果您需要支持</font></font><code>;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需在正则表达式中交换它们即可。</font></font></p>

<p></p><hr><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如果使用服务器端预处理语言，则可能要使用其本机JSON函数为您完成繁重的工作。</font><font style="vertical-align: inherit;">例如，在PHP中，您可以编写：</font></font><p></p>

<pre><code>&lt;script&gt;var urlParams = &lt;?php echo <a href="http://php.net/manual/en/function.json-encode.php" rel="noreferrer">json_encode</a>($_GET, JSON_HEX_TAG);?&gt;;&lt;/script&gt;</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单得多！</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
