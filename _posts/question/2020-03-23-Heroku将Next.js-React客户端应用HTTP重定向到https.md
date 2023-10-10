---
layout: question
title:  Heroku将Next.js React客户端应用HTTP重定向到https
date:   2020-03-23T03:57:47.000Z
description: 我在Heroku上部署了一个快递服务器：https   //server.mydomain.com在Heroku上也部署了Next.js React应...
img: 
author: DavaidTony宝儿
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Heroku上部署了一个快递服务器：</font><a href="https://server.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://server.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//server.mydomain.com</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Heroku上也部署了Next.js React应用：</font><a href="https://app.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://app.mydomain.com</font></font><a href="https://app.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都有由Heroku自动配置的SSL证书，当我访问https域时，它们可以按预期工作。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到</font><strong><font style="vertical-align: inherit;">的问题</font></strong><font style="vertical-align: inherit;">是，当我访问</font></font><a href="http://app.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://app.mydomain.com时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它不会重定向到</font></font><a href="https://app.mydomain.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://app.mydomain.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在网上找到的所有解决方案都指向在服务器上强制使用SSL：</font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/7185074/heroku-nodejs-http-to-https-ssl-forced-redirect"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个普遍的问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说要检查</font></font><code>x-forwarded-proto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值：</font></font></li>
</ul>

<pre><code>/* At the top, with other redirect methods before other routes */<font></font>
app.get('*',function(req,res,next){<font></font>
 if(req.headers['x-forwarded-proto']!='https')<font></font>
   res.redirect('https://app.mydomain.com'+req.url)<font></font>
 else<font></font>
   next() /* Continue to other routes if we're not redirecting */<font></font>
})<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他建议使用诸如</font></font><a href="https://www.npmjs.com/package/express-sslify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">express-sslify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://www.npmjs.com/package/heroku-ssl-redirect" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">heroku-ssl-redirect之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的软件包</font><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些解决方案可以很好地</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理服务器请求</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是不一定会触发加载React客户端页面</font></font><code>app.get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">显然，React客户端可以独立于服务器运行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以问题是：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Heroku上强制将https用作子域Next.js React客户端应用程序？</font><font style="vertical-align: inherit;">不使用快递服务器方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2779篇《Heroku将Next.js React客户端应用HTTP重定向到https》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
