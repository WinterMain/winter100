---
layout: question
title:  CORS：当凭据标志为true时，不能在Access-Control-Allow-Origin中使用通配符
date:   2020-03-19T04:38:01.000Z
description: 我有一个涉及的设置前端服务器（Node.js，域：localhost：3000）<--->后端（Django，Ajax，域：localhost：800...
img: 
author: 神奇乐猪猪
category: question
answer: 2
tags: ajax Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个涉及的设置</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端服务器（Node.js，域：localhost：3000）&lt;---&gt;后端（Django，Ajax，域：localhost：8000）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器&lt;-webapp &lt;-Node.js（为应用提供服务）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器（webapp）-&gt; Ajax-&gt; Django（服务ajax POST请求）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我的问题是CORS设置，Web应用程序使用它来对后端服务器进行Ajax调用。</font><font style="vertical-align: inherit;">在Chrome中，我不断</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当凭据标志为true时，不能在Access-Control-Allow-Origin中使用通配符。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox上也不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Node.js设置是：</font></font></p>

<pre><code>var allowCrossDomain = function(req, res, next) {<font></font>
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000/');<font></font>
    res.header('Access-Control-Allow-Credentials', true);<font></font>
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');<font></font>
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");<font></font>
    next();<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而在Django我使用</font></font><a href="https://gist.github.com/strogonoff/1369619" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个中间件</font></font></a> <a href="https://github.com/ottoyiu/django-cors-headers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与此相伴</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webapp发出这样的请求：</font></font></p>

<pre><code>$.ajax({<font></font>
    type: "POST",<font></font>
    url: 'http://localhost:8000/blah',<font></font>
    data: {},<font></font>
    xhrFields: {<font></font>
        withCredentials: true<font></font>
    },<font></font>
    crossDomain: true,<font></font>
    dataType: 'json',<font></font>
    success: successHandler<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，webapp发送的请求标头如下所示：</font></font></p>

<pre><code>Access-Control-Allow-Credentials: true<font></font>
Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept"<font></font>
Access-Control-Allow-Methods: 'GET,PUT,POST,DELETE'<font></font>
Content-Type: application/json <font></font>
Accept: */*<font></font>
Accept-Encoding: gzip,deflate,sdch<font></font>
Accept-Language: en-US,en;q=0.8<font></font>
Cookie: csrftoken=***; sessionid="***"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是响应头：</font></font></p>

<pre><code>Access-Control-Allow-Headers: Content-Type,*<font></font>
Access-Control-Allow-Credentials: true<font></font>
Access-Control-Allow-Origin: *<font></font>
Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE<font></font>
Content-Type: application/json<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要去哪里错了？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1：我一直在使用</font></font><code>chrome --disable-web-security</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是现在希望事情能够实际进行。</font></font></p>

<p>Edit 2: Answer:</p>

<p>So, solution for me <code>django-cors-headers</code> config:</p>

<pre><code>CORS_ORIGIN_ALLOW_ALL = False<font></font>
CORS_ALLOW_CREDENTIALS = True<font></font>
CORS_ORIGIN_WHITELIST = (<font></font>
    'http://localhost:3000' # Here was the problem indeed and it has to be http://localhost:3000, not http://localhost:3000/<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2367篇《CORS：当凭据标志为true时，不能在Access-Control-Allow-Origin中使用通配符》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想允许所有来源并保留真实的凭据，那么这对我有用：</font></font></p>

<pre><code>app.use(cors({<font></font>
  origin: function(origin, callback){<font></font>
    return callback(null, true);<font></font>
  },<font></font>
  optionsSuccessStatus: 200,<font></font>
  credentials: true<font></font>
}));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是安全的一部分，您不能这样做。</font><font style="vertical-align: inherit;">如果要允许凭据，则</font></font><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不得使用</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您将必须指定确切的协议+域+端口。</font><font style="vertical-align: inherit;">供参考，请参阅以下问题：</font></font></p>

<ol>
<li><a href="https://stackoverflow.com/questions/14003332/access-control-allow-origin-wildcard-subdomains-ports-and-protocols"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Access-Control-Allow-Origin通配符子域，端口和协议</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/8074665/cross-origin-resource-sharing-with-credentials"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨源资源共享凭证</font></font></a></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此以外</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它们太宽松了，会打败使用凭据。</font><font style="vertical-align: inherit;">因此，将其设置为</font></font><code>http://localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>http://localhost:8000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为allow origin标头。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
