---
layout: question
title:  Access-Control-Allow-Origin标头如何工作？
date:   2020-03-09T15:53:12.000Z
description: 显然，我完全误解了它的语义。我想到了这样的事情：客户端从http：// siteA- origin下载javascript代码MyCode.js 。...
img: 
author: 十三西里GO
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，我完全误解了它的语义。</font><font style="vertical-align: inherit;">我想到了这样的事情：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端从http：// siteA- </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">origin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载javascript代码MyCode.js </font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MyCode.js的响应标头包含</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Access-Control-Allow-Origin：http：// siteB</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我认为这意味着MyCode.js被允许对站点B进行跨域引用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端触发了MyCode.js的某些功能，该功能继而向http：// siteB发出了请求，尽管这是跨域请求，但仍然可以。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我错了。</font><font style="vertical-align: inherit;">它根本不像这样工作。</font><font style="vertical-align: inherit;">因此，我已经阅读了</font></font><a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨域资源共享，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试阅读</font></font><a href="http://www.w3.org/TR/cors/."><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3c建议中的跨域资源共享</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以肯定的是-我仍然不明白我应该如何使用此标头。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对站点A和站点B都拥有完全控制权。如何使用此标头使从站点A下载的javascript代码能够访问站点B上的资源？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">聚苯乙烯</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想利用JSONP。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第380篇《Access-Control-Allow-Origin标头如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>The Access-Control-Allow-Origin response header indicates whether the
  response can be shared with requesting code from the given origin.</p>
</blockquote>

<pre><code>Header type Response       header<font></font>
Forbidden header name      no<font></font>
</code></pre>

<blockquote>
  <p>A response that tells the browser to allow code from any origin to
  access a resource will include the following:</p>
</blockquote>

<pre><code>Access-Control-Allow-Origin: *
</code></pre>

<p>For more info, visit <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin" rel="nofollow noreferrer">here</a>....</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simply paste the following code in your web.config file.</p>

<p>Noted that, you have to paste the following code under <code>&lt;system.webServer&gt;</code> tag</p>

<pre><code>    &lt;httpProtocol&gt;  <font></font>
    &lt;customHeaders&gt;  <font></font>
     &lt;add name="Access-Control-Allow-Origin" value="*" /&gt;  <font></font>
     &lt;add name="Access-Control-Allow-Headers" value="Content-Type" /&gt;  <font></font>
     &lt;add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" /&gt;  <font></font>
    &lt;/customHeaders&gt;  <font></font>
  &lt;/httpProtocol&gt;  <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are using PHP, try adding the following code at the beginning of the php file:</p>

<p>If you are using localhost, try this:</p>

<pre><code>header("Access-Control-Allow-Origin: *");
</code></pre>

<p>If you are using external domains such as server, try this:</p>

<pre><code>header("Access-Control-Allow-Origin: http://www.website.com");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you want just to test a cross domain application in which the browser blocks your request, then you can just open your browser in unsafe mode and test your application without changing your code and without making your code unsafe.
From MAC OS you can do this from the terminal line:</p>

<pre><code>open -a Google\ Chrome --args --disable-web-security --user-data-dir
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨域资源共享- </font></font><code>CORS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（AKA跨域AJAX请求）是大多数Web开发人员可能遇到的问题，根据Same-Origin-Policy，浏览器将客户端JavaScript限制在安全沙箱中，通常JS无法直接与远程服务器通信来自其他域。</font><font style="vertical-align: inherit;">过去，开发人员创建了许多棘手的方法来实现跨域资源请求，最常用的方法是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Flash / Silverlight或服务器端作为“代理”与远程通信。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有填充的JSON（</font></font><a href="http://en.wikipedia.org/wiki/JSONP" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSONP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将远程服务器嵌入到iframe中，并通过fragment或window.name进行通信，请参见</font></font><a href="http://www.ibm.com/developerworks/library/wa-crossdomaincomm/#N10120" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些棘手的方式或多或少都存在一些问题，例如，如果开发人员简单地“评估”，JSONP可能会导致安全漏洞；以及上面的＃3，尽管它起作用了，但两个域之间应该建立严格的契约，既不灵活也不优雅恕我直言：）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C引入了跨域资源共享（CORS）作为标准解决方案，以提供安全，灵活和推荐的标准方式来解决此问题。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">机制</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从较高的层次上，我们可以简单地认为CORS是域A的客户端AJAX调用与域B上托管的页面之间的合同，典型的跨域请求/响应为：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DomainA AJAX请求标头</font></font></strong></p>

<pre><code>Host DomainB.com<font></font>
User-Agent Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0) Gecko/20100101 Firefox/4.0<font></font>
Accept text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json<font></font>
Accept-Language en-us;<font></font>
Accept-Encoding gzip, deflate<font></font>
Keep-Alive 115<font></font>
Origin http://DomainA.com <font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DomainB响应标头</font></font></strong></p>

<pre><code>Cache-Control private<font></font>
Content-Type application/json; charset=utf-8<font></font>
Access-Control-Allow-Origin DomainA.com<font></font>
Content-Length 87<font></font>
Proxy-Connection Keep-Alive<font></font>
Connection Keep-Alive<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在上面标记的蓝色部分是核心事实，“ Origin”请求标头“指示跨域请求或预检请求的来源”，“ Access-Control-Allow-Origin”响应标头指示此页面允许远程请求DomainA（如果值为*，则表示允许来自任何域的远程请求）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我上面提到的，W3建议浏览器在</font><font style="vertical-align: inherit;">提交实际的跨域HTTP请求之前</font><font style="vertical-align: inherit;">实现一个“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预检请求</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，简而言之，它是一个HTTP </font></font><code>OPTIONS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求：</font></font></p>

<pre><code>OPTIONS DomainB.com/foo.aspx HTTP/1.1
</code></pre>

<p>If foo.aspx supports OPTIONS HTTP verb, it might return response like below:</p>

<pre><code>HTTP/1.1 200 OK<font></font>
Date: Wed, 01 Mar 2011 15:38:19 GMT<font></font>
Access-Control-Allow-Origin: http://DomainA.com<font></font>
Access-Control-Allow-Methods: POST, GET, OPTIONS, HEAD<font></font>
Access-Control-Allow-Headers: X-Requested-With<font></font>
Access-Control-Max-Age: 1728000<font></font>
Connection: Keep-Alive<font></font>
Content-Type: application/json<font></font>
</code></pre>

<p>Only if the response contains "Access-Control-Allow-Origin" AND its value is "*" or contain the domain who submitted the CORS request, by satisfying this mandtory condition browser will submit the actual Cross-Domain request, and cache the result in "<strong>Preflight-Result-Cache</strong>".</p>

<p>I blogged about CORS three years ago: <a href="http://wayneye.com/Blog/Ajax-Cross-Origin-HTTP-request" rel="nofollow noreferrer">AJAX Cross-Origin HTTP request</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="http://www.html5rocks.com/en/tutorials/cors/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CORS（跨源资源共享）标头</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当站点A尝试从站点B获取内容时，站点B可以发送</font></font><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应标头以告知浏览器某些原始来源可以访问此页面的内容。</font><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="https://stackoverflow.com/a/19542686/710446"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">域，再加上方案和端口号</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）默认情况下，</font></font><a href="https://en.wikipedia.org/wiki/Same-origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他任何来源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都</font><a href="https://en.wikipedia.org/wiki/Same-origin_policy" rel="noreferrer"><font style="vertical-align: inherit;">无法访问</font></a><font style="vertical-align: inherit;">站点B的页面</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头会打开一扇门，可以按特定的请求来源进行跨域访问。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于站点B希望站点A可以访问的每个资源/页面，站点B应该为其页面提供响应头：</font></font></p>

<pre><code>Access-Control-Allow-Origin: http://siteA.com
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代浏览器不会完全阻止跨域请求。</font><font style="vertical-align: inherit;">如果站点A从站点B请求一个页面，则浏览器实际上将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在网络级别上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取请求的页面</font><em><font style="vertical-align: inherit;">，</font></em><font style="vertical-align: inherit;">并检查响应头是否将站点A列为允许的请求者域。</font><font style="vertical-align: inherit;">如果网站B尚未指示允许网站A访问此页面，则浏览器将触发</font></font><code>XMLHttpRequest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件，并拒绝对请求JavaScript代码的响应数据。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非简单请求</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么发生在网络层面可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">略微</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比上述解释更加复杂。</font><font style="vertical-align: inherit;">如果该请求是</font></font><a href="http://www.html5rocks.com/en/tutorials/cors/#toc-handling-a-not-so-simple-request" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“非简单”请求</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则浏览器首先发送一个无数据的“预检” OPTIONS请求，以验证服务器将接受该请求。</font><font style="vertical-align: inherit;">当一个（或两个）同时发生时，请求是不简单的：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用GET或POST以外的HTTP动词（例如PUT，DELETE）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用非简单的请求标头；</font><font style="vertical-align: inherit;">仅有的简单请求标头是：

</font></font><ul>
<li><code>Accept</code></li>
<li><code>Accept-Language</code></li>
<li><code>Content-Language</code></li>
<li><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（当它的值是这仅仅是简单的</font></font><code>application/x-www-form-urlencoded</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>multipart/form-data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>text/plain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果服务器使用与</font><font style="vertical-align: inherit;">非简单动词和/或非简单头匹配的</font><font style="vertical-align: inherit;">适当响应头（</font></font><code>Access-Control-Allow-Headers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于非简单头，</font></font><code>Access-Control-Allow-Methods</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于非简单动词）来</font><font style="vertical-align: inherit;">响应OPTIONS预检</font><font style="vertical-align: inherit;">，则浏览器将发送实际请求。</font></font></p>

<p>Supposing that Site A wants to send a PUT request for <code>/somePage</code>, with a non-simple <code>Content-Type</code> value of <code>application/json</code>, the browser would first send a preflight request:</p>

<pre><code>OPTIONS /somePage HTTP/1.1<font></font>
Origin: http://siteA.com<font></font>
Access-Control-Request-Method: PUT<font></font>
Access-Control-Request-Headers: Content-Type<font></font>
</code></pre>

<p>Note that <code>Access-Control-Request-Method</code> and <code>Access-Control-Request-Headers</code> are added by the browser automatically; you do not need to add them. This OPTIONS preflight gets the successful response headers:</p>

<pre><code>Access-Control-Allow-Origin: http://siteA.com<font></font>
Access-Control-Allow-Methods: GET, POST, PUT<font></font>
Access-Control-Allow-Headers: Content-Type<font></font>
</code></pre>

<p>When sending the actual request (after preflight is done), the behavior is identical to how a simple request is handled. In other words, a non-simple request whose preflight is successful is treated the same as a simple request (i.e., the server must still send <code>Access-Control-Allow-Origin</code> again for the actual response).</p>

<p>The browsers sends the actual request:</p>

<pre><code>PUT /somePage HTTP/1.1<font></font>
Origin: http://siteA.com<font></font>
Content-Type: application/json<font></font>
<font></font>
{ "myRequestContent": "JSON is so great" }<font></font>
</code></pre>

<p>And the server sends back an <code>Access-Control-Allow-Origin</code>, just as it would for a simple request:</p>

<pre><code>Access-Control-Allow-Origin: http://siteA.com
</code></pre>

<p>See <a href="https://stackoverflow.com/a/13400954/710446">Understanding XMLHttpRequest over CORS</a> for a little more information about non-simple requests.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
