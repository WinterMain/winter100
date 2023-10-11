---
layout: question
title:  在HTTPS / Web套接字安全上运行的Webpack Dev Server
date:   2020-03-23T07:44:57.000Z
description: 通常，在开发人员模式下，Webpack使用HTTP运行。通常有一个Web服务器在单独的端口上使用http / websockets通过HTTP和webpa...
img: 
author: 泡芙
category: question
answer: 3
tags: SSL Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，在开发人员模式下，Webpack使用HTTP运行。</font><font style="vertical-align: inherit;">通常有一个Web服务器在单独的端口上使用http / websockets通过HTTP和webpack提供内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在https上运行Web服务器并在https / websocket secure上运行webpack？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2933篇《在HTTPS / Web套接字安全上运行的Webpack Dev Server》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我必须运行所有这些命令来获取证书：</font></font></p>

<pre><code>openssl genrsa -out private.key 4096<font></font>
openssl req -new -sha256 -out private.csr -key private.key<font></font>
openssl x509 -req -days 3650 -in private.csr -signkey private.key -out private.crt -extensions req_ext<font></font>
openssl x509 -in private.crt -out private.pem -outform PEM<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后： </font></font></p>

<pre><code>npm run dev -- --open --https --cert private.pem --key private.key
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://webpack.js.org/configuration/dev-server/#devserver-https" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack文档</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将一个标志添加到webpack-dev-server命令中</font></font></p>

<pre><code>webpack-dev-server --https 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅适用于TEST环境：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要按照以下步骤配置webpack-dev-server：</font></font></p>

<p><code>webpack-dev-server --https --cert ./cert.pem --key ./key.pem</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当webpack尝试从密钥读取密码短语时，存在一个已知的错误。 
 </font></font><a href="http://diy.stackexchange.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看这个链接</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方法是不使用密码生成密钥</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我不知道这样做的安全性！但这仅用于测试）。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要从密钥中删除密码，请使用以下命令：</font></font></p>

<p><code>$ openssl rsa -in key.pem -out newKey.pem</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在预览配置行中使用新密钥 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
