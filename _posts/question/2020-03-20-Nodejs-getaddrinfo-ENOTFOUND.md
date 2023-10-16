---
layout: question
title:  Node.js getaddrinfo ENOTFOUND
date:   2020-03-20T02:43:08.000Z
description: 使用Node.js尝试获取以下网页的html内容时：eternagame.wikia.com/wiki/EteRNA_Dictionary我收到以...
img: 
author: 樱阿飞
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Node.js尝试获取以下网页的html内容时：</font></font></p>

<p><code>eternagame.wikia.com/wiki/EteRNA_Dictionary</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到以下错误：</font></font></p>

<pre><code>events.js:72<font></font>
    throw er; // Unhandled 'error' event<font></font>
          ^<font></font>
Error: getaddrinfo ENOTFOUND<font></font>
    at errnoException (dns.js:37:11)<font></font>
    at Object.onanswer [as oncomplete] (dns.js:124:16)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实已经在stackoverflow上查找了此错误，并意识到这是因为node.js无法从DNS找到服务器（我认为）。</font><font style="vertical-align: inherit;">但是，我不确定为什么会这样，因为我的代码可以完美地在上工作</font></font><code>www.google.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码（实际上是从一个非常类似的问题复制并粘贴的，除了更改了主机）：</font></font></p>

<pre><code>var http = require("http");<font></font>
<font></font>
var options = {<font></font>
    host: 'eternagame.wikia.com/wiki/EteRNA_Dictionary'<font></font>
};<font></font>
<font></font>
http.get(options, function (http_res) {<font></font>
    // initialize the container for our data<font></font>
    var data = "";<font></font>
<font></font>
    // this event fires many times, each time collecting another piece of the response<font></font>
    http_res.on("data", function (chunk) {<font></font>
        // append this chunk to our growing `data` var<font></font>
        data += chunk;<font></font>
    });<font></font>
<font></font>
    // this event fires *one* time, after all the `data` events/chunks have been gathered<font></font>
    http_res.on("end", function () {<font></font>
        // you can use res.send instead of console.log to output via express<font></font>
        console.log(data);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我复制和粘贴的来源：</font></font><a href="https://stackoverflow.com/questions/6695143/how-to-make-web-service-calls-in-expressjs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Expressjs中进行Web服务调用？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有在node.js中使用任何模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢阅读。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2453篇《Node.js getaddrinfo ENOTFOUND》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小胖</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Try using the server IP address rather than the hostname.
This worked for me. Hope it will work for you too.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>I got this issue resolved by removing non-desirable characters from the password for the connection. For example, I had these characters: &lt;##% and it caused the problem (most probably hash tag was the root cause of the problem).</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>I was getting the same error and used below below link to get help:</p>

<p><a href="https://nodejs.org/api/http.html#http_http_request_options_callback" rel="nofollow noreferrer">https://nodejs.org/api/http.html#http_http_request_options_callback</a></p>

<p>I was not having in my code: </p>

<p><strong><code>req.end();</code></strong></p>

<p><strong>(NodeJs V: 5.4.0)</strong>
once added above <code>req.end();</code> line, I was able to get rid of the error and worked fine for me.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>I fixed this error with this</p>

<pre><code>$ npm info express --verbose<font></font>
# Error message: npm info retry will retry, error on last attempt: Error: getaddrinfo ENOTFOUND registry.npmjs.org registry.npmjs.org:443<font></font>
$ nslookup registry.npmjs.org<font></font>
Server:     8.8.8.8<font></font>
Address:    8.8.8.8#53<font></font>
<font></font>
Non-authoritative answer:<font></font>
registry.npmjs.org  canonical name = a.sni.fastly.net.<font></font>
a.sni.fastly.net    canonical name = prod.a.sni.global.fastlylb.net.<font></font>
Name:   prod.a.sni.global.fastlylb.net<font></font>
Address: 151.101.32.162<font></font>
$ sudo vim /etc/hosts <font></font>
# Add "151.101.32.162 registry.npmjs.org` to hosts file<font></font>
$ npm info express --verbose<font></font>
# Works now!<font></font>
</code></pre>



<p>Original source: <a href="https://github.com/npm/npm/issues/6686" rel="nofollow noreferrer">https://github.com/npm/npm/issues/6686</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>I got this error when going from development environment to production environment. I was obsessed with putting <code>https://</code> on all links. This is not necessary, so it may be a solution for some.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Note that this issue can also occur if the domain you are referencing goes down (EG. no longer exists.)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阳光</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是我的OS X（Mavericks）DNS服务需要</font></font><a href="http://www.hongkiat.com/blog/how-to-clear-flush-dns-cache-in-os-x-yosemite/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
