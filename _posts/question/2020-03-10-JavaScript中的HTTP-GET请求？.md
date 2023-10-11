---
layout: question
title:  JavaScript中的HTTP GET请求？
date:   2020-03-10T14:20:22.000Z
description: 我需要在JavaScript中执行HTTP GET请求。最好的方法是什么？我需要在Mac OS X破折号小部件中执行此操作。...
img: 
author: 番长LA
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要</font><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">执行</font></font><a href="http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP GET</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求。</font><font style="vertical-align: inherit;">最好的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在Mac OS X破折号小部件中执行此操作。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第514篇《JavaScript中的HTTP GET请求？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Harry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;button type="button" onclick="loadXMLDoc()"&gt; GET CONTENT&lt;/button&gt;<font></font>
<font></font>
 &lt;script&gt;<font></font>
        function loadXMLDoc() {<font></font>
            var xmlhttp = new XMLHttpRequest();<font></font>
            var url = "&lt;Enter URL&gt;";``<font></font>
            xmlhttp.onload = function () {<font></font>
                if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == "200") {<font></font>
                    document.getElementById("demo").innerHTML = this.responseText;<font></font>
                }<font></font>
            }<font></font>
            xmlhttp.open("GET", url, true);<font></font>
            xmlhttp.send();<font></font>
        }<font></font>
    &lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿贾克斯</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好使用</font></font><a href="http://en.wikipedia.org/wiki/Prototype_JavaScript_Framework" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prototype</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的库</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>To refresh best answer from joann with promise this is my code:</p>

<pre><code>let httpRequestAsync = (method, url) =&gt; {<font></font>
    return new Promise(function (resolve, reject) {<font></font>
        var xhr = new XMLHttpRequest();<font></font>
        xhr.open(method, url);<font></font>
        xhr.onload = function () {<font></font>
            if (xhr.status == 200) {<font></font>
                resolve(xhr.responseText);<font></font>
            }<font></font>
            else {<font></font>
                reject(new Error(xhr.responseText));<font></font>
            }<font></font>
        };<font></font>
        xhr.send();<font></font>
    });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要为Dashboard小部件使用代码，并且不想在创建的每个小部件中都包含JavaScript库，则可以使用Safari原生支持的XMLHttpRequest对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Andrew Hedges的报告，默认情况下，小部件无法访问网络。</font><font style="vertical-align: inherit;">您需要在与小部件关联的info.plist中更改该设置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的异步请求：</font></font></p>

<pre><code>function get(url, callback) {<font></font>
  var getRequest = new XMLHttpRequest();<font></font>
<font></font>
  getRequest.open("get", url, true);<font></font>
<font></font>
  getRequest.addEventListener("readystatechange", function() {<font></font>
    if (getRequest.readyState === 4 &amp;&amp; getRequest.status === 200) {<font></font>
      callback(getRequest.responseText);<font></font>
    }<font></font>
  });<font></font>
<font></font>
  getRequest.send();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过两种方式获取HTTP GET请求：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法基于xml格式。</font><font style="vertical-align: inherit;">您必须传递请求的URL。  </font></font></p>

<pre><code>xmlhttp.open("GET","URL",true);<font></font>
xmlhttp.send();<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是基于jQuery的。</font><font style="vertical-align: inherit;">您必须指定要调用的URL和function_name。</font></font></p>

<pre><code>$("btn").click(function() {<font></font>
  $.ajax({url: "demo_test.txt", success: function_name(result) {<font></font>
    $("#innerdiv").html(result);<font></font>
  }});<font></font>
}); <font></font>
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Davaid</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是使用AJAX（您可以在本页</font></font><a href="http://www.tizag.com/&quot;Tizag&quot;" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tizag</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上找到一个简单的教程</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">原因是您可能使用的任何其他技术都需要更多代码，不能保证无需重做就可以跨浏览器工作，并且需要通过在传递URL解析其数据的URL的框架内打开隐藏页面并关闭它们来使用更多客户端内存。</font><font style="vertical-align: inherit;">在这种情况下，AJAX是解决之道。</font><font style="vertical-align: inherit;">那是我这两年对javascript重度开发的讲。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不熟悉Mac OS的Dashcode窗口小部件，但是如果它们允许您使用JavaScript库并支持</font></font><a href="http://en.wikipedia.org/wiki/XMLHttpRequest" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequests</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么我将使用</font></font><a href="http://docs.jquery.com/Ajax/jQuery.get#examples" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并执行以下操作：</font></font></p>

<pre><code>var page_content;<font></font>
$.get( "somepage.php", function(data){<font></font>
    page_content = data;<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种支持较旧浏览器的解决方案：</font></font></p>

<pre><code>function httpRequest() {<font></font>
    var ajax = null,<font></font>
        response = null,<font></font>
        self = this;<font></font>
<font></font>
    this.method = null;<font></font>
    this.url = null;<font></font>
    this.async = true;<font></font>
    this.data = null;<font></font>
<font></font>
    this.send = function() {<font></font>
        ajax.open(this.method, this.url, this.asnyc);<font></font>
        ajax.send(this.data);<font></font>
    };<font></font>
<font></font>
    if(window.XMLHttpRequest) {<font></font>
        ajax = new XMLHttpRequest();<font></font>
    }<font></font>
    else if(window.ActiveXObject) {<font></font>
        try {<font></font>
            ajax = new ActiveXObject("Msxml2.XMLHTTP.6.0");<font></font>
        }<font></font>
        catch(e) {<font></font>
            try {<font></font>
                ajax = new ActiveXObject("Msxml2.XMLHTTP.3.0");<font></font>
            }<font></font>
            catch(error) {<font></font>
                self.fail("not supported");<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
    if(ajax == null) {<font></font>
        return false;<font></font>
    }<font></font>
<font></font>
    ajax.onreadystatechange = function() {<font></font>
        if(this.readyState == 4) {<font></font>
            if(this.status == 200) {<font></font>
                self.success(this.responseText);<font></font>
            }<font></font>
            else {<font></font>
                self.fail(this.status + " - " + this.statusText);<font></font>
            }<font></font>
        }<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许有些矫kill过正，但是使用此代码绝对可以放心。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></strong>
<br></p>

<pre><code>//create request with its porperties<font></font>
var request = new httpRequest();<font></font>
request.method = "GET";<font></font>
request.url = "https://example.com/api?parameter=value";<font></font>
<font></font>
//create callback for success containing the response<font></font>
request.success = function(response) {<font></font>
    console.log(response);<font></font>
};<font></font>
<font></font>
//and a fail callback containing the error<font></font>
request.fail = function(error) {<font></font>
    console.log(error);<font></font>
};<font></font>
<font></font>
//and finally send it away<font></font>
request.send();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在小部件的Info.plist文件中，不要忘记将</font></font><code>AllowNetworkAccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">密钥</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为true。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是直接使用JavaScript进行操作的代码。</font><font style="vertical-align: inherit;">但是，如前所述，使用JavaScript库会更好。</font><font style="vertical-align: inherit;">我最喜欢的是jQuery。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下情况下，将调用ASPX页（作为穷人的REST服务提供服务）以返回JavaScript JSON对象。</font></font></p>

<pre><code>var xmlHttp = null;<font></font>
<font></font>
function GetCustomerInfo()<font></font>
{<font></font>
    var CustomerNumber = document.getElementById( "TextBoxCustomerNumber" ).value;<font></font>
    var Url = "GetCustomerInfoAsJson.aspx?number=" + CustomerNumber;<font></font>
<font></font>
    xmlHttp = new XMLHttpRequest(); <font></font>
    xmlHttp.onreadystatechange = ProcessRequest;<font></font>
    xmlHttp.open( "GET", Url, true );<font></font>
    xmlHttp.send( null );<font></font>
}<font></font>
<font></font>
function ProcessRequest() <font></font>
{<font></font>
    if ( xmlHttp.readyState == 4 &amp;&amp; xmlHttp.status == 200 ) <font></font>
    {<font></font>
        if ( xmlHttp.responseText == "Not found" ) <font></font>
        {<font></font>
            document.getElementById( "TextBoxCustomerName"    ).value = "Not found";<font></font>
            document.getElementById( "TextBoxCustomerAddress" ).value = "";<font></font>
        }<font></font>
        else<font></font>
        {<font></font>
            var info = eval ( "(" + xmlHttp.responseText + ")" );<font></font>
<font></font>
            // No parsing necessary with JSON!        <font></font>
            document.getElementById( "TextBoxCustomerName"    ).value = info.jsonData[ 0 ].cmname;<font></font>
            document.getElementById( "TextBoxCustomerAddress" ).value = info.jsonData[ 0 ].cmaddr1;<font></font>
        }                    <font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短而干净：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const http = new XMLHttpRequest()<font></font>
<font></font>
http.open("GET", "https://api.lyrics.ovh/v1/toto/africa")<font></font>
http.send()<font></font>
<font></font>
http.onload = () =&gt; console.log(http.responseText)</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯老丝</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有回调的版本</font></font></p>

<pre><code>var i = document.createElement("img");<font></font>
i.src = "/your/GET/url?params=here";<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的</font></font><a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en" rel="noreferrer"><code>window.fetch</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API是</font></font><code>XMLHttpRequest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6承诺</font><font style="vertical-align: inherit;">的更干净的替代品</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有一个很好的解释</font></font><a href="https://jakearchibald.com/2015/thats-so-fetch/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但它归结为（文章）：</font></font></p>

<pre><code>fetch(url).then(function(response) {<font></font>
  return response.json();<font></font>
}).then(function(data) {<font></font>
  console.log(data);<font></font>
}).catch(function() {<font></font>
  console.log("Booo");<font></font>
});<font></font>
</code></pre>

<p><a href="http://caniuse.com/#feat=fetch" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前最新的版本好（在Chrome，火狐，边缘（V14）的作品，Safari浏览器（10.1），歌剧，Safari浏览器的iOS（10.3），Android浏览器和Android版Chrome），然而IE会可能无法获得官方支持。</font></font><a href="https://github.com/github/fetch" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上有</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用</font><a href="https://github.com/github/fetch" rel="noreferrer"><font style="vertical-align: inherit;">的polyfill</font></a><font style="vertical-align: inherit;">，建议它支持仍在大量使用的旧版浏览器（2017年3月之前的esp版本的Safari和同一时期的移动浏览器）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想这是否比jQuery或XMLHttpRequest更方便取决于项目的性质。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是规范的链接</font></font><a href="https://fetch.spec.whatwg.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fetch.spec.whatwg.org/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES7 async / await，这变得很简单（基于</font></font><a href="https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gist</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>async function fetchAsync (url) {<font></font>
  let response = await fetch(url);<font></font>
  let data = await response.json();<font></font>
  return data;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器（和Dashcode）提供XMLHttpRequest对象，该对象可用于从JavaScript发出HTTP请求：</font></font></p>

<pre><code>function httpGet(theUrl)<font></font>
{<font></font>
    var xmlHttp = new XMLHttpRequest();<font></font>
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request<font></font>
    xmlHttp.send( null );<font></font>
    return xmlHttp.responseText;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，不鼓励同步请求，并且将按照以下方式生成警告：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：从Gecko 30.0（Firefox 30.0 / Thunderbird 30.0 / SeaMonkey 2.27）开始，</font><font style="vertical-align: inherit;">由于对用户体验的负面影响，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主线程上的同步请求已被弃用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p>You should make an asynchronous request and handle the response inside an event handler.</p>

<pre><code>function httpGetAsync(theUrl, callback)<font></font>
{<font></font>
    var xmlHttp = new XMLHttpRequest();<font></font>
    xmlHttp.onreadystatechange = function() { <font></font>
        if (xmlHttp.readyState == 4 &amp;&amp; xmlHttp.status == 200)<font></font>
            callback(xmlHttp.responseText);<font></font>
    }<font></font>
    xmlHttp.open("GET", theUrl, true); // true for asynchronous <font></font>
    xmlHttp.send(null);<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
