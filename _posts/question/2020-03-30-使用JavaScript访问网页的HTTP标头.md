---
layout: question
title:  使用JavaScript访问网页的HTTP标头
date:   2020-03-30T09:11:28.000Z
description: 如何通过JavaScript访问页面的HTTP响应标头？与此问题相关，该问题已修改为询问有关访问两个特定HTTP标头的信息。  相关：  如何...
img: 
author: Harry小小
category: question
answer: 8
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何通过JavaScript访问页面的HTTP响应标头？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://stackoverflow.com/questions/220149/how-do-i-access-the-http-request-header-fields-via-javascript"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关，</font><a href="https://stackoverflow.com/questions/220149/how-do-i-access-the-http-request-header-fields-via-javascript"><strong><font style="vertical-align: inherit;">该问题</font></strong></a><font style="vertical-align: inherit;">已修改为询问有关访问两个特定HTTP标头的信息。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关：</font></font></strong><br>
  <a href="https://stackoverflow.com/questions/220149/how-do-i-access-the-http-request-header-fields-via-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何通过JavaScript访问HTTP请求标头字段？</font></font></a></p>
</blockquote></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3831篇《使用JavaScript访问网页的HTTP标头》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为问题出了错，如果您想从JQuery / JavaScript中获取Request标头，答案就是“否”。其他解决方案是创建aspx页或jsp页，那么我们可以轻松地访问请求标头。</font><font style="vertical-align: inherit;">在aspx页面中接受所有请求，并放入会话/ cookie，然后可以在JavaScript页面中访问cookie。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个老问题。</font><font style="vertical-align: inherit;">不知道什么时候支持变得更加广泛，但</font></font><code>getAllResponseHeaders()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>getResponseHeader()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎现在是相当标准：</font></font><a href="http://www.w3schools.com/xml/dom_http.asp" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/xml/dom_http.asp</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用mootools，您可以使用this.xhr.getAllResponseHeaders（）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们谈论的是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Request</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头，则可以在执行XmlHttpRequests时创建自己的标头。</font></font></p>

<pre><code>var request = new XMLHttpRequest();<font></font>
request.setRequestHeader("X-Requested-With", "XMLHttpRequest");<font></font>
request.open("GET", path, true);<font></font>
request.send(null);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法访问http标头，但是DOM中提供了其中提供的某些信息。</font><font style="vertical-align: inherit;">例如，如果要查看http引用（原文如此），请使用document.referrer。</font><font style="vertical-align: inherit;">对于其他http标头，可能还有其他类似的内容。</font><font style="vertical-align: inherit;">尝试谷歌搜索所需的特定内容，例如“ http Referer javascript”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这很明显，但是当我真正想要的只是引荐来源时，我一直在搜索“ http headers javascript”之类的东西，但没有得到任何有用的结果。</font><font style="vertical-align: inherit;">我不知道自己怎么能做出更具体的查询。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员的解决方案</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员可以访问网络信息，包括标头。</font><font style="vertical-align: inherit;">好消息是它可以处理任何类型的请求，而不仅限于XMLHttpRequest。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么运行的：</font></font></h2>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的网站上添加服务人员。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看正在发送的每个请求。</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>respondWith</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">向服务人员</font><font style="vertical-align: inherit;">提出请求</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应到达时，读取标题。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用功能将标头从服务工作者发送到页面</font></font><code>postMessage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员的理解有点复杂，因此我建立了一个小型库来完成所有这些工作。</font><font style="vertical-align: inherit;">它可以在github上找到：</font></font><a href="https://github.com/gmetais/sw-get-headers" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/gmetais/sw-get-headers" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/gmetais/sw-get-headers</font></a><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">局限性：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该网站必须使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTPS</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器需要支持</font></font><a href="https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Service Workers</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同域/跨域策略正在执行，就像XMLHttpRequest一样</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将标头信息发送到JavaScript的另一种方法是通过cookie。</font><font style="vertical-align: inherit;">服务器可以从请求标头中提取所需的任何数据，并将其发送回</font></font><code>Set-Cookie</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应标头中，并且可以在JavaScript中读取cookie。</font><font style="vertical-align: inherit;">但是，正如keparo所说，最好只对一个或两个标头执行此操作，而不要对所有标头执行此操作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>XmlHttpRequest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以拉出当前页面，然后检查响应的http标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的情况是只发出</font></font><code>HEAD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求，然后检查标题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关执行此操作的一些示例，请访问</font></font><a href="http://www.jibbering.com/2002/4/httprequest.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jibbering.com/2002/4/httprequest.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是我的2美分。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
