---
layout: question
title:  localStorage，sessionStorage，session和cookie之间有什么区别？
date:   2020-03-19T02:54:37.000Z
description: localStorage，sessionStorage，session和cookie的技术优缺点是什么，何时可以在另一个之上使用？...
img: 
author: 西里小哥
category: question
answer: 4
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">localStorage，sessionStorage，session和cookie的技术优缺点是什么，何时可以在另一个之上使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2280篇《localStorage，sessionStorage，session和cookie之间有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地存储</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web存储可以简单地视为对Cookie的一种改进，它提供了更大的存储容量。</font><font style="vertical-align: inherit;">可用大小为5MB，与典型的4KB Cookie相比，可使用的空间要大得多。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会针对每个HTTP请求（HTML，图像，JavaScript，CSS等）将数据发送回服务器，从而减少了客户端与服务器之间的通信量。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储在localStorage中的数据将一直保留到明确删除为止。</font><font style="vertical-align: inherit;">所做的更改将被保存，并且可用于当前和将来对该站点的所有访问。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于同源策略。</font><font style="vertical-align: inherit;">因此，存储的数据仅在相同的来源可用。</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">饼干：</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以为每个cookie设置过期时间</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4K限制适用于整个cookie，包括名称，值，有效期等。要支持大多数浏览器，请将该名称保持在4000字节以下，并将整体cookie大小保持在4093字节以下。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个HTTP请求（HTML，图像，JavaScript，CSS等）会将数据发送回服务器，从而增加了客户端与服务器之间的通信量。</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionStorage：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它类似于localStorage。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改仅适用于每个窗口（或Chrome和Firefox等浏览器中的标签）。</font><font style="vertical-align: inherit;">所做的更改将被保存，并且可用于当前页面，以及以后在同一窗口上对该站点的访问。</font><font style="vertical-align: inherit;">关闭窗口后，存储将被删除。数据仅在设置它的窗口/选项卡内可用。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据不是持久性的，即，一旦关闭窗口/选项卡，它将丢失。</font><font style="vertical-align: inherit;">与localStorage一样，它适用于同源策略。</font><font style="vertical-align: inherit;">因此，存储的数据仅在相同的来源可用。</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LocalStorage</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是您浏览器的本地存储，它可以节省多达</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">10MB的空间</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SessionStorage可以</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做到这一点，但是顾名思义，它是基于会话的，在关闭浏览器后将被删除，也可以节省不到LocalStorage的费用，例如最大</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5MB</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cookies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是浏览器中存储的非常小的数据，最多可以节省</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4KB，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且可以通过服务器或浏览器访问...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还创建了以下图像，以一眼看出差异：</font></font></p>

<p><a href="https://i.stack.imgur.com/cI5kT.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/cI5kT.jpg" alt="LocalStorage，SessionStorage和Cookies"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><strong><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地存储</font></font></a></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web存储可以简单地视为对Cookie的一种改进，它提供了更大的存储容量。</font><font style="vertical-align: inherit;">如果您查看Mozilla的源代码，我们会看到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5120KB</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5MB</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">在Chrome上</font><font style="vertical-align: inherit;">等于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">250万个字符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）是整个域的默认存储大小。</font><font style="vertical-align: inherit;">与典型的4KB Cookie相比，这为您提供了更多的处理空间。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会针对每个HTTP请求（HTML，图像，JavaScript，CSS等）将数据发送回服务器，从而减少了客户端与服务器之间的通信量。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储在localStorage中的数据将一直保留到明确删除为止。</font><font style="vertical-align: inherit;">所做的更改将被保存，并且可用于当前和将来对该站点的所有访问。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同源策略</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，存储的数据仅在相同的来源可用。</font></font></li>
</ol></li>
<li><p><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">饼干</font></font></a></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他人相比，没有AFAIK。 </font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4K限制适用于整个cookie，包括名称，值，有效期等。要支持大多数浏览器，请将该名称保持在4000字节以下，并将整体cookie大小保持在4093字节以下。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个HTTP请求（HTML，图像，JavaScript，CSS等）会将数据发送回服务器，从而增加了客户端与服务器之间的通信量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，允许以下操作：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总共</font><strong><font style="vertical-align: inherit;">300个</font></strong><font style="vertical-align: inherit;"> Cookie</font></font></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个Cookie </font><strong><font style="vertical-align: inherit;">4096个字节</font></strong></font></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个域</font><strong><font style="vertical-align: inherit;">20个Cookie</font></strong></font></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个域</font><strong><font style="vertical-align: inherit;">81920字节</font></strong><font style="vertical-align: inherit;">（给出20个最大大小为4096的cookie = 81920字节。）</font></font></li>
</ul></li>
</ol></li>
<li><p><strong><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionStorage</font></font></a></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它类似于</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据不是永久性的，即，仅每个窗口（或Chrome和Firefox等浏览器中的标签）提供数据。</font><font style="vertical-align: inherit;">数据仅在页面会话期间可用。</font><font style="vertical-align: inherit;">所做的更改将被保存，并且可用于当前页面，以及以后在同一窗口上对该站点的访问。</font><font style="vertical-align: inherit;">关闭窗口后，将删除存储。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据仅在设置它的窗口/选项卡内可用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它适用于</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同源政策</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，存储的数据仅在相同的来源可用。</font></font></li>
</ol></li>
</ol>

<p><font style="vertical-align: inherit;"></font><a href="https://github.com/wingify/across-tabs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨标签</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出</font><font style="vertical-align: inherit;">-如何简化跨源浏览器标签之间的交流。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个范围极为广泛的问题，很多利弊都取决于具体情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有情况下，这些存储机制都将特定于单个计算机/设备上的单个浏览器。</font><font style="vertical-align: inherit;">跨会话持续存储数据的任何要求都将涉及您的应用服务器端-最有可能使用数据库，但可能使用XML或文本/ CSV文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">localStorage，sessionStorage和cookie都是客户端存储解决方案。</font><font style="vertical-align: inherit;">会话数据保存在您直接控制的服务器上。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">localStorage和sessionStorage</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">localStorage和sessionStorage是相对较新的API（意味着，并非所有旧版浏览器都支持它们），并且几乎完全相同（API和功能都相同），唯一的例外是持久性。</font><font style="vertical-align: inherit;">sessionStorage（顾名思义）仅在浏览器会话期间可用（并在关闭选项卡或窗口时删除）-但是，它确实可以在页面重新加载后幸存（源</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM存储指南-Mozilla开发人员网络</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p>Clearly, if the data you are storing needs to be available on an ongoing basis then localStorage is preferable to sessionStorage - although you should note both can be cleared by the user so you should not rely on the continuing existence of data in either case.</p>

<p>localStorage and sessionStorage are perfect for persisting non-sensitive data needed within client scripts between pages (for example: preferences, scores in games). The data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser so should not be relied upon for storage of sensitive or security-related data within applications. </p>

<h1>Cookies</h1>

<p>This is also true for cookies, these can be trivially tampered with by the user, and data can also be read from them in plain text - so if you are wanting to store sensitive data then the session is really your only option. If you are not using SSL, cookie information can also be intercepted in transit, especially on an open wifi.</p>

<p>On the positive side cookies can have a degree of protection applied from security risks like Cross-Site Scripting (XSS)/Script injection by setting an HTTP only flag which means modern (supporting) browsers will prevent access to the cookies and values from JavaScript (this will also prevent your own, legitimate, JavaScript from accessing them). This is especially important with authentication cookies, which are used to store a token containing details of the user who is logged on - if you have a copy of that cookie then for all intents and purposes you <em>become</em> that user as far as the web application is concerned, and have the same access to data and functionality the user has.</p>

<p>As cookies are used for authentication purposes and persistence of user data, <strong>all</strong> cookies valid for a page are sent from the browser to the server for <strong>every</strong> request to the same domain - this includes the original page request, any subsequent Ajax requests, all images, stylesheets, scripts, and fonts. For this reason, cookies should not be used to store large amounts of information. The browser may also impose limits on the size of information that can be stored in cookies. Typically cookies are used to store identifying tokens for authentication, session, and advertising tracking. The tokens are typically not human readable information in and of themselves, but encrypted identifiers linked to your application or database.</p>

<h1>localStorage vs. sessionStorage vs. Cookies</h1>

<p>In terms of capabilities, cookies, sessionStorage, and localStorage only allow you to store strings - it is possible to implicitly convert primitive values when setting (these will need to be converted back to use them as their type after reading) but not Objects or Arrays (it is possible to JSON serialise them to store them using the APIs). Session storage will generally allow you to store any primitives or objects supported by your Server Side language/framework.</p>

<h1>Client-side vs. Server-side</h1>

<p>As HTTP is a stateless protocol - web applications have no way of identifying a user from previous visits on returning to the web site - session data usually relies on a cookie token to identify the user for repeat visits (although rarely URL parameters may be used for the same purpose). Data will usually have a sliding expiry time (renewed each time the user visits), and depending on your server/framework data will either be stored in-process (meaning data will be lost if the web server crashes or is restarted) or externally in a state server or database. This is also necessary when using a web-farm (more than one server for a given website).</p>

<p>As session data is completely controlled by your application (server side) it is the best place for anything sensitive or secure in nature.</p>

<p>The obvious disadvantage of server-side data is scalability - server resources are required for each user for the duration of the session, and that any data needed client side must be sent with each request. As the server has no way of knowing if a user navigates to another site or closes their browser, session data must expire after a given time to avoid all server resources being taken up by abandoned sessions. When using session data you should, therefore, be aware of the possibility that data will have expired and been lost, especially on pages with long forms. It will also be lost if the user deletes their cookies or switches browsers/devices.</p>

<p>Some web frameworks/developers use hidden HTML inputs to persist data from one page of a form to another to avoid session expiration.</p>

<p>localStorage, sessionStorage, and cookies are all subject to "same-origin" rules which means browsers should prevent access to the data except the domain that set the information to start with.</p>

<p>For further reading on client storage technologies see <a href="http://diveintohtml5.info/storage.html" rel="noreferrer">Dive Into Html 5</a>.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
