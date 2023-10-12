---
layout: question
title:  自动HTTPS连接/与node.js / express重定向
date:   2020-03-24T06:09:59.000Z
description: 我一直在尝试通过正在处理的node.js项目来设置HTTPS。对于该示例，我基本上遵循了node.js文档：// curl -k https //lo...
img: 
author: 十三
category: question
answer: 6
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在尝试通过正在处理的node.js项目来设置HTTPS。</font><font style="vertical-align: inherit;">对于该示例，</font><font style="vertical-align: inherit;">我基本上遵循了</font></font><a href="http://nodejs.org/docs/v0.4.11/api/https.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// curl -k https://localhost:8000/<font></font>
var https = require('https');<font></font>
var fs = require('fs');<font></font>
<font></font>
var options = {<font></font>
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),<font></font>
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')<font></font>
};<font></font>
<font></font>
https.createServer(options, function (req, res) {<font></font>
  res.writeHead(200);<font></font>
  res.end("hello world\n");<font></font>
}).listen(8000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当我做 </font></font></p>

<pre><code>curl -k https://localhost:8000/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我懂了 </font></font></p>

<pre><code>hello world
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如预期的那样。</font><font style="vertical-align: inherit;">但是如果我这样做</font></font></p>

<pre><code>curl -k http://localhost:8000/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我懂了 </font></font></p>

<pre><code>curl: (52) Empty reply from server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回想起来，这样做似乎很明显，但与此同时，最终访问我项目的人不会输入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：// yadayada，我希望从点击起就将所有流量都设为https网站。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何获得节点（以及Express，因为我正在使用的框架）将所有传入流量传递给https，而不管是否指定了它？</font><font style="vertical-align: inherit;">我还没有找到解决此问题的任何文档。</font><font style="vertical-align: inherit;">还是只是假设在生产环境中，节点位于它前面的东西（例如nginx）可以处理这种重定向？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我第一次涉足Web开发，所以如果这很明显，请原谅我的无知。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3346篇《自动HTTPS连接/与node.js / express重定向》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天宝儿米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以实例化2个Node.js服务器-一个用于HTTP和HTTPS</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以定义两个服务器都将执行的设置功能，因此您不必编写太多重复的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的方法：（使用restify.js，但也应该适用于express.js或节点本身）</font></font></p>

<p><a href="http://qugstart.com/blog/node-js/node-js-restify-server-with-both-http-and-https/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://qugstart.com/blog/node-js/node-js-restify-server-with-both-http-and-https/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>app.use(function(req,res,next) {<font></font>
    if(req.headers["x-forwarded-proto"] == "http") {<font></font>
        res.redirect("https://[your url goes here]" + req.url, next);<font></font>
    } else {<font></font>
        return next();<font></font>
    } <font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪L</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的大多数答案都建议使用req.headers.host标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Host标头是HTTP 1.1所必需的，但实际上是可选的，因为标头可能实际上不是由HTTP客户端发送的，并且node / express将接受此请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会问：哪个HTTP客户端（例如：浏览器）可以发送缺少该标头的请求？</font><font style="vertical-align: inherit;">HTTP协议非常简单。</font><font style="vertical-align: inherit;">您可以用几行代码编写HTTP请求，而不发送主机头，并且，如果每次收到格式错误的请求时，都会引发异常，并根据如何处理此类异常而使服务器宕机。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，请</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终验证所有输入</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这不是偏执狂，我收到的请求缺少服务中的主机头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切勿将URL视为string</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用节点url模块来修改字符串的特定部分。</font><font style="vertical-align: inherit;">将URL视为字符串可以通过多种方式加以利用。</font><font style="vertical-align: inherit;">不要这样</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用express时发现req.protocol有效（未经测试，但我怀疑它有效）。</font><font style="vertical-align: inherit;">在Express 3.4.3中使用当前节点0.10.22</font></font></p>

<pre><code>app.use(function(req,res,next) {<font></font>
  if (!/https/.test(req.protocol)){<font></font>
     res.redirect("https://" + req.headers.host + req.url);<font></font>
  } else {<font></font>
     return next();<font></font>
  } <font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从0.4.12版本开始，我们还没有使用Node的HTTP / HTTPS服务器在同一端口上侦听HTTP和HTTPS的真正干净方法。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些人通过让Node的HTTPS服务器（也可以与Express.js一起使用）侦听443（或其他端口），并且使小型http服务器绑定到80并将用户重定向到安全端口，从而解决了此问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果绝对必须能够在单个端口上处理两个协议，则需要在该端口上放置nginx，lighttpd，apache或其他Web服务器，并充当Node的反向代理。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Nginx，您可以利用“ x-forwarded-proto”标头：</font></font></p>

<pre><code>function ensureSec(req, res, next){<font></font>
    if (req.headers["x-forwarded-proto"] === "https"){<font></font>
       return next();<font></font>
    }<font></font>
    res.redirect("https://" + req.headers.host + req.url);  <font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
