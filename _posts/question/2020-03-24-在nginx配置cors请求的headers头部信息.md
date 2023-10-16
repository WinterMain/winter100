---
layout: question
title:  在nginx配置cors请求的headers头部信息
date:   2020-03-24T12:50:09.000Z
description: cors就是跨域请求，我们在开发和nginx配置经常会遇到这个。...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>cors就是跨域请求，我们在开发和nginx配置经常会遇到这个。</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3736篇《在nginx配置cors请求的headers头部信息》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>首先，如果设置了header信息包含cookie：Access-Control-Allow-Credentials:true，那么<br>Access-Control-Allow-Origin不可以为 ‘ * ’，因为 “ * ” 会和Access-Control-Allow-Credentials冲突，需要配置指定的地址，如果后端设置Access-Control-Allow-Origin : ' * ' 会有报错。</p><p>按照以下这几个变量，可以解决问题</p><pre><code class="language-plaintext">允许哪个域名来访问资源
add_header 'Access-Control-Allow-Origin' "$http_origin";

请求的返回内容里包含cookies
add_header 'Access-Control-Allow-Credentials' 'true';

允许请求的method
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';</code></pre><p>&nbsp;</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
