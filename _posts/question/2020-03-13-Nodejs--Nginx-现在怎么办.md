---
layout: question
title:  Node.js + Nginx-现在怎么办？
date:   2020-03-13T09:59:13.000Z
description: 我已经在服务器上设置了Node.js和Nginx。现在，我想使用它，但是在开始之前，有两个问题：他们应该如何一起工作？我应该如何处理请求？Node...
img: 
author: 阿飞西里
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在服务器上设置了Node.js和Nginx。</font><font style="vertical-align: inherit;">现在，我想使用它，但是在开始之前，有两个问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们应该如何一起工作？</font><font style="vertical-align: inherit;">我应该如何处理请求？</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js服务器有两个概念，其中一个更好：   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种。</font><font style="vertical-align: inherit;">为每个需要它的网站创建一个单独的HTTP服务器。</font><font style="vertical-align: inherit;">然后在程序开始时加载所有JavaScript代码，因此该代码将被解释一次。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b。</font><font style="vertical-align: inherit;">创建一个处理所有Node.js请求的单个Node.js服务器。</font><font style="vertical-align: inherit;">这将读取请求的文件并评估其内容。</font><font style="vertical-align: inherit;">因此，每个请求都会解释文件，但是服务器逻辑要简单得多。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还不清楚如何正确使用Node.js。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1504篇《Node.js + Nginx-现在怎么办？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要管理每个微服务手段并运行它，则可以使用pm2运行nodejs。</font><font style="vertical-align: inherit;">节点将在端口中运行，只需在nginx（/etc/nginx/sites-enabled/domain.com）中配置该端口</font></font></p>

<pre><code>server{<font></font>
    listen 80;<font></font>
    server_name domain.com www.domain.com;<font></font>
<font></font>
  location / {<font></font>
     return 403;<font></font>
  }<font></font>
    location /url {<font></font>
        proxy_pass http://localhost:51967/info;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ping检查localhost是否正在运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<pre><code>Create one single Node.js server which handles all Node.js requests. This reads the requested files and evals their contents. So the files are interpreted on each request, but the server logic is much simpler.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最好的，而且正如您所说的那样容易</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇阿良Jim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nginx可以充当反向代理服务器，就像项目经理一样。</font><font style="vertical-align: inherit;">收到请求后，它将对其进行分析，并将请求转发给上游（项目成员）或自行处理。</font><font style="vertical-align: inherit;">Nginx有两种基于请求配置方式处理请求的方式。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务请求</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将请求转发到另一台服务器</font></font></p>

<pre><code>server{<font></font>
 server_name mydomain.com sub.mydomain.com;<font></font>
<font></font>
 location /{ <font></font>
  proxy_pass http://127.0.0.1:8000;  <font></font>
  proxy_set_header Host $host;<font></font>
  proxy_pass_request_headers on;  <font></font>
 }<font></font>
<font></font>
 location /static/{<font></font>
   alias /my/static/files/path;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器请求</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此配置，当请求网址为url时，
   </font></font><code>mydomain.com/static/myjs.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将返回</font></font><code>myjs.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font><code>/my/static/files/path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">夹</font><font style="vertical-align: inherit;">中的 
   </font><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">在将nginx配置为提供静态文件时，它会自行处理请求。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将请求转发到另一台服务器</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当请求url为   </font></font><code>mydomain.com/dothis</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nginx时，会将请求转发到   </font></font><a href="http://127.0.0.1:8000" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://127.0.0.1:8000</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在localhost 8000端口上运行的服务将接收请求，并将响应返回给nginx，而nginx将响应返回给客户端。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在端口8000上运行node.js服务器时，nginx会将请求转发到node.js。</font><font style="vertical-align: inherit;">编写node.js逻辑并处理请求。</font><font style="vertical-align: inherit;">就是这样，您的nodejs服务器在nginx服务器后面运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想运行除nodejs之外的任何其他服务，只需在不同的端口上运行另一个服务（例如Django，flask，php），然后在nginx中对其进行配置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猴子猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用node.js将静态文件生成到nginx服务的目录中。</font><font style="vertical-align: inherit;">当然，站点的某些动态部分可以由节点提供服务，而某些部分可以由nginx（静态）提供服务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nginx提供其中一些服务可以提高您的性能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nginx配置的Node.js。</font></font></p>

<pre><code>$ sudo nano /etc/nginx/sites-available/subdomain.your_domain.com
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下配置，以便当我们来自“ subdomain.your_domain.com”时，Nginx充当代理重定向到服务器的端口3000流量</font></font></p>

<pre><code>upstream subdomain.your_domain.com {<font></font>
  server 127.0.0.1:3000;<font></font>
}<font></font>
server {<font></font>
  listen 80;<font></font>
  listen [::]:80;<font></font>
  server_name subdomain.your_domain.com;<font></font>
  access_log /var/log/nginx/subdomain.your_domain.access.log;<font></font>
  error_log /var/log/nginx/subdomain.your_domain.error.log debug;<font></font>
  location / {<font></font>
    proxy_set_header X-Real-IP $remote_addr;<font></font>
    proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;<font></font>
    proxy_set_header Host $http_host;<font></font>
    proxy_set_header X-NginX-Proxy true;<font></font>
    proxy_pass http://subdomain.your_domain.com;<font></font>
    proxy_redirect off;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过Nginx代理独立的Node Express应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以轻松地安装新的应用程序，并且我还可以在同一服务器上不同位置运行其他内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是有关使用Nginx配置示例进行设置的更多详细信息：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Nginx在子文件夹中的一个Web服务器上部署多个Node应用程序</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您需要将应用程序从本地主机迁移到Internet时，Node会变得棘手。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有通用的节点部署方法。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google可以找到有关该主题的大量文章，但是我一直在努力寻找适合我所需设置的解决方案。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我有一个Web服务器，我希望将Node应用程序安装到子文件夹（即</font></font><a href="http://myhost/demo/pet-project/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// myhost / demo / pet-project /</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而又不对应用程序代码引入任何配置依赖性。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时，我希望博客之类的其他内容在同一台Web服务器上运行。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来很简单吧？</font><font style="vertical-align: inherit;">显然不是。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Web上的许多示例中，节点应用程序要么在端口80上运行，要么由Nginx代理到根。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使这两种方法都对某些用例均有效，但它们并不满足我的简单但有点异乎寻常的标准。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是为什么我创建了自己的Nginx配置并且下面是摘录的原因：</font></font></p>

<pre><code>upstream pet_project {<font></font>
  server localhost:3000;<font></font>
}<font></font>
<font></font>
server {<font></font>
  listen 80;<font></font>
  listen [::]:80;<font></font>
  server_name frontend;<font></font>
<font></font>
  location /demo/pet-project {<font></font>
    alias /opt/demo/pet-project/public/;<font></font>
    try_files $uri $uri/ @pet-project;<font></font>
  }<font></font>
<font></font>
  location @pet-project {<font></font>
    rewrite /demo/pet-project(.*) $1 break;<font></font>
<font></font>
    proxy_set_header X-Real-IP $remote_addr;<font></font>
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<font></font>
    proxy_set_header Host $proxy_host;<font></font>
    proxy_set_header X-NginX-Proxy true;<font></font>
<font></font>
    proxy_pass http://pet_project;<font></font>
    proxy_redirect http://pet_project/ /demo/pet-project/;<font></font>
  }<font></font>
}<font></font>
</code></pre>
  
  <p>From this example you can notice that I mount my Pet Project Node application running on port 3000 to <a href="http://myhost/demo/pet-project" rel="noreferrer">http://myhost/demo/pet-project</a>.</p>
  
  <p>First Nginx checks if whether the requested resource is a static file available at <em>/opt/demo/pet-project/public/</em> and if so it serves it as is that is highly efficient, so we do not need to have a redundant layer like Connect static middleware.</p>
  
  <p>Then all other requests are overwritten and proxied to <em>Pet Project Node</em> application, so the Node application does not need to know where it is actually mounted and thus can be moved anywhere purely by configuration.</p>
  
  <p><em>proxy_redirect</em> is a must to handle Location header properly. This is extremely important if you use <em>res.redirect()</em> in your Node application.</p>
  
  <p>You can easily replicate this setup for multiple Node applications running on different ports and add more location handlers for other purposes. </p>
</blockquote>

<p>From: <a href="http://skovalyov.blogspot.dk/2012/07/deploy-multiple-node-applications-on.html" rel="noreferrer">http://skovalyov.blogspot.dk/2012/07/deploy-multiple-node-applications-on.html</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryStafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用Nginx设置多个域，并将其转发到多个node.js进程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，实现这些目标：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">domain1.com-&gt;到在本地运行的Node.js进程</font></font><a href="http://127.0.0.1:4000" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://127.0.0.1:4000</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">domain2.com-&gt;到在本地运行的Node.js进程</font></font><a href="http://127.0.0.1:5000" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://127.0.0.1:5000</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些端口（4000和5000）应用于侦听您的应用程序代码中的应用程序请求。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ etc / nginx / sites-enabled / domain1</font></font></strong></p>

<pre><code>server {<font></font>
    listen 80;<font></font>
    listen [::]:80;<font></font>
    server_name domain1.com;<font></font>
    access_log /var/log/nginx/domain1.access.log;<font></font>
    location / {<font></font>
        proxy_pass    http://127.0.0.1:4000/;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在/ etc / nginx / sites-enabled / domain2中</font></font></strong></p>

<pre><code>server {<font></font>
    listen 80;<font></font>
    listen [::]:80;<font></font>
    server_name domain2.com;<font></font>
    access_log /var/log/nginx/domain2.access.log;<font></font>
    location / {<font></font>
        proxy_pass    http://127.0.0.1:5000/;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答您的问题2：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font><font style="vertical-align: inherit;">使用option </font><font style="vertical-align: inherit;">只是因为它消耗的资源要少得多。</font><font style="vertical-align: inherit;">使用选项“ a”，每个客户端都将导致服务器占用大量内存，并加载您需要的所有文件（即使我喜欢php，这也是它的问题之一）。</font><font style="vertical-align: inherit;">使用选项“ b”，您可以加载您的库（可重用代码）并在所有客户端请求***享它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是要注意，如果您有多个内核，则应调整node.js以使用所有内核。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
