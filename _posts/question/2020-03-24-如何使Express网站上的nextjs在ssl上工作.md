---
layout: question
title:  如何使Express网站上的nextjs在ssl上工作
date:   2020-03-24T02:03:41.000Z
description: 我们有一个在Next.js和Express上运行的网站。这是在具有Aapche的cPanel服务器上，并与nginx一起用作反向代理。我需要在网站上使...
img: 
author: 神无
category: question
answer: 2
tags: apache React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有一个在Next.js和Express上运行的网站。</font><font style="vertical-align: inherit;">这是在具有Aapche的cPanel服务器上，并与nginx一起用作反向代理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在网站上使用ssl。</font><font style="vertical-align: inherit;">但是我对应该如何配置感到很困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的server.js：</font></font></p>

<pre><code>const express = require('express')<font></font>
const next = require('next')<font></font>
const https = require('https');<font></font>
const fs = require('fs');<font></font>
//const forceSSL = require('express-force-ssl')<font></font>
<font></font>
var ssl_options = {<font></font>
 key: fs.readFileSync('/home/myreactsite.key'),<font></font>
 cert: fs.readFileSync('/home/myreactsite.crt'),<font></font>
};<font></font>
<font></font>
const dev = process.env.NODE_ENV !== 'production'<font></font>
const app = next({ dev })<font></font>
const handle = app.getRequestHandler()<font></font>
<font></font>
const favicon = require('serve-favicon')<font></font>
const path = require('path')<font></font>
<font></font>
app.prepare()<font></font>
.then(() =&gt; {<font></font>
 const server = express()<font></font>
 server.use(favicon(path.join(__dirname, 'static', 'images', 'favicon.ico')))<font></font>
<font></font>
 server.get('*', (req, res) =&gt; {<font></font>
  return handle(req, res)<font></font>
})<font></font>
<font></font>
server.listen(3007, (err) =&gt; {<font></font>
   if (err) throw err<font></font>
   console.log('&gt; Ready on http://localhost:3007')<font></font>
 })<font></font>
<font></font>
var httpsServer = https.createServer(ssl_options,server).listen('8445', (err) =&gt; {<font></font>
  if (err) throw err<font></font>
  console.log('&gt; Ready on https://localhost:8445')<font></font>
})<font></font>
})<font></font>
.catch((ex) =&gt; {<font></font>
 console.error(ex.stack)<font></font>
 process.exit(1)<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Apache在8080上运行Nginx在80 Next上运行.js在3007和8445上运行（我更喜欢ssl）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Apache配置包含以下内容以隐藏端口3007</font></font></p>

<pre><code>&lt;Proxy *&gt;<font></font>
   Order deny,allow<font></font>
   Allow from all<font></font>
&lt;/Proxy&gt;<font></font>
ProxyPass / http://myreactsite.com:3007/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我以</font></font><a href="http://myreactsite.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://myreactsite.com进行</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问，则该站点可以正常运行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，</font><font style="vertical-align: inherit;">尽管我可以通过将端口号指定为</font><a href="https://myreactsite.com:8445" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://myreactsite.com:8445</font></a><font style="vertical-align: inherit;">来访问https版本，</font><font style="vertical-align: inherit;">但是当我访问</font></font><a href="https://myreactsite.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://myreactsite.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时它会失败。</font></font><a href="https://myreactsite.com:8445" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使其工作而无需指定https端口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在不指定端口的情况下使网站强制所有页面进入https？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3209篇《如何使Express网站上的nextjs在ssl上工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryHarry</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能要使用Apache进行所有SSL处理并监听</font></font><code>443</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口，然后代理到您的</font></font><code>3007</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口。</font><font style="vertical-align: inherit;">试试这个配置：</font></font></p>

<pre class="lang-bsh prettyprint-override"><code>&lt;VirtualHost *:443&gt;<font></font>
  ProxyPreserveHost On<font></font>
  ProxyRequests Off<font></font>
  ServerName myreactsite.com<font></font>
  ServerAlias myreactsite.com<font></font>
  ProxyPass / http://0.0.0.0:3007/<font></font>
  ProxyPassReverse / http://0.0.0.0:3007/<font></font>
  SSLEngine On<font></font>
  SSLProxyEngine On<font></font>
  SSLCertificateFile /home/myreactsite.crt<font></font>
  SSLCertificateKeyFile /home/myreactsite.key<font></font>
&lt;/VirtualHost&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要重定向所有HTTP通信，请执行以下操作：</font></font></p>

<pre class="lang-bsh prettyprint-override"><code>&lt;VirtualHost *:80&gt;<font></font>
  ServerName myreactsite.com<font></font>
  Redirect / https://myreactsite.com/  <font></font>
&lt;/VirtualHost&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于@fabian的评论，如果有帮助，我会发布我的工作配置...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在apache.conf中的站点的443个虚拟主机部分中添加了以下几行：</font></font></p>

<pre><code>ProxyPreserveHost On<font></font>
ProxyRequests Off<font></font>
&lt;Proxy *&gt;<font></font>
    Order deny,allow<font></font>
    Allow from all<font></font>
&lt;/Proxy&gt;<font></font>
ProxyPass / http://example.com:3000/<font></font>
ProxyPassReverse / http://example.com:3000/<font></font>
SSLProxyEngine On<font></font>
#To redirect to https and www version<font></font>
RewriteEngine On<font></font>
RewriteCond %{HTTP_HOST} ^example\.com$ [NC]<font></font>
RewriteRule ^ https://www.example.com%{REQUEST_URI} [R=301,L]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在该站点的nginx vhost文件中添加了以下行：</font></font></p>

<pre><code>server {<font></font>
  ...<font></font>
  ...<font></font>
#To redirect all http requests to https+www<font></font>
return 301 https://www.example.com$request_uri;<font></font>
  ...<font></font>
  ...<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
