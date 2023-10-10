---
layout: question
title:  节点JS-Nginx-子目录的proxy_pass-Koa
date:   2020-04-07T03:55:18.000Z
description: 我正在端口5000上运行Koa应用程序，并且我希望Ngnix在子目录中提供该应用程序-例如： http //example.com/myNodeApp...
img: 
author: 小胖Gil
category: question
answer: 0
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在端口5000上运行Koa应用程序，并且我希望Ngnix在子目录中提供该应用程序-例如： </font></font><code>http://example.com/myNodeApp</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我目前进入的 </font></font><code>/etc/nginx/sites-enabled/default</code></p>

<pre><code>        location ^~ /myNodeApp/ {<font></font>
            proxy_set_header X-Real-IP $remote_addr;<font></font>
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<font></font>
            proxy_set_header Host $http_host;<font></font>
            proxy_set_header X-NginX-Proxy true;<font></font>
            proxy_pass    http://localhost:5000/;<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作品......除了一个事实，即任何重定向例如，</font></font><code>this.redirect('/')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我兴亚应用程序转到nginx的Web根目录</font></font><code>/</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，它不会渲染我Koa应用程序</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中的</font><font style="vertical-align: inherit;">任何内容，</font><font style="vertical-align: inherit;">例如样式表，javascript和图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
