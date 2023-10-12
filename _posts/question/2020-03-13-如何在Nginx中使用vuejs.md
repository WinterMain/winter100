---
layout: question
title:  如何在Nginx中使用vue.js？
date:   2020-03-13T09:10:13.000Z
description: 我想使用Nginx作为我的Web服务器和我自己的Dropwiward REST API使用Vue.js构建一个单页应用程序。此外，我使用Axios调用我...
img: 
author: 米亚猴子
category: question
answer: 0
tags: nginx Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我想使用Nginx作为我的Web服务器和我自己的Dropwiward REST API使用Vue.js构建一个单页应用程序。</font><font style="vertical-align: inherit;">此外，我使用Axios调用我的REST请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我的nginx配置看起来像 </font></font></p>

<pre><code>server {<font></font>
    listen       80;<font></font>
    server_name  localhost;<font></font>
<font></font>
    location / {<font></font>
        root     path/to/vue.js/Project;<font></font>
        index    index.html index.htm;<font></font>
        include  /etc/nginx/mime.types;<font></font>
    }<font></font>
    location /api/ {<font></font>
        rewrite ^/api^/ /$1 break;<font></font>
        proxy_pass http://localhost:8080/;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我可以打电话给我，</font></font><code>localhost/api/path/to/rescource</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以从后端获取信息。 
</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用到目前为止已经运行的HTML和javascript（vue.js）构建了前端。</font><font style="vertical-align: inherit;">但是，当我要构建单页应用程序时，大多数教程都提到了node.js。</font><font style="vertical-align: inherit;">我该如何使用Nginx？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1466篇《如何在Nginx中使用vue.js？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
