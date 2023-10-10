---
layout: question
title:  如何从本地网络中的设备访问webpack-dev-server？
date:   2020-03-23T02:46:39.000Z
description: 有一些webpack开发服务器配置（它是整个配置的一部分）：config.devServer = {  contentBase  './' + (o...
img: 
author: 阿飞
category: question
answer: 3
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些webpack开发服务器配置（它是整个配置的一部分）：</font></font></p>

<pre><code>config.devServer = {<font></font>
  contentBase: './' + (options.publicFolder ? options.publicFolder : 'public'),<font></font>
  stats: {<font></font>
    modules: false,<font></font>
    cached: false,<font></font>
    colors: true,<font></font>
    chunk: false<font></font>
  },<font></font>
  proxy: [{<font></font>
    path: /^\/api\/(.*)/,<font></font>
    target: options.proxyApiTarget,<font></font>
    rewrite: rewriteUrl('/$1'),<font></font>
    changeOrigin: true<font></font>
  }]<font></font>
};<font></font>
<font></font>
function rewriteUrl(replacePath) {<font></font>
  return function (req, opt) {  // gets called with request and proxy object<font></font>
    var queryIndex = req.url.indexOf('?');<font></font>
    var query = queryIndex &gt;= 0 ? req.url.substr(queryIndex) : "";<font></font>
    req.url = req.path.replace(opt.path, replacePath) + query;<font></font>
    console.log("rewriting ", req.originalUrl, req.url);<font></font>
  };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下命令执行webpack：</font></font></p>

<pre><code>node node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0 --history-api-fallback --debug --inline --progress --config config/webpack.app.dev.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用</font></font><code>http://localhost:8080</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地计算机</font><font style="vertical-align: inherit;">访问开发服务器</font><font style="vertical-align: inherit;">，但我也想通过移动平板电脑（它们位于同一Wi-Fi网络中）访问服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何启用它？</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能不是完美的解决方案，但我认为您可以</font><font style="vertical-align: inherit;">为此</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngrok</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><a href="https://ngrok.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ngrok</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以帮助您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将本地Web服务器公开</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到Internet。</font><font style="vertical-align: inherit;">您可以将ngrok指向本地开发服务器，然后将您的应用程序配置为使用ngrok URL。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设您的服务器在端口</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8080</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上运行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用ngrok通过运行将其暴露给外部世界</font></font></p>

<pre><code>./ngrok http 8080
</code></pre>

<p><a href="https://i.stack.imgur.com/eXauO.png" rel="noreferrer"><img src="https://i.stack.imgur.com/eXauO.png" alt="ngrok输出在这里"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好消息</font></font><code>ngrok</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，它提供了</font><font style="vertical-align: inherit;">公开URL </font><font style="vertical-align: inherit;">的更安全的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本，您可以将该URL提供给世界上任何其他人以测试或展示您的作品。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还在命令中提供了许多自定义功能，例如设置用户友好的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主机名，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在公开的url中</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">随机字符串以及其他很多东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想打开网站来检查移动设备的响应能力，则应该使用</font></font><a href="https://www.browsersync.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">browersync</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法发表评论以向Forresto的答案添加其他信息，但</font></font><code>--public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于安全漏洞，</font></font><code>--host 0.0.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独使用时</font><font style="vertical-align: inherit;">，在未来（2019年）您将需要添加</font><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/webpack/webpack-dev-server/issues/882#issuecomment-296436511" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多详细信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免“响应其他答案”作为答案，这里提供了forresto的建议以及进行此工作所需的其他详细信息：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时添加：</font></font></p>

<p><code>--host 0.0.0.0</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></strong></p>

<p><code>--public &lt;your-host&gt;:&lt;port&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的主机是主机名（对我来说是（name）s-macbook-pro.local），端口是您要访问的任何端口（同样，对我来说是8081）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这是我的package.json的样子：</font></font></p>

<pre><code>  "scripts": {<font></font>
    ...<font></font>
    "start:webpack": "node_modules/.bin/webpack-dev-server --host 0.0.0.0 --public &lt;name&gt;s-macbook-pro.local:8081",<font></font>
    ...<font></font>
  },<font></font>
<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您使用的是Mac，并且使用的是我的网络）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令运行webpack-dev-server </font></font><code>--host 0.0.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这使服务器可以侦听来自网络的请求，而不仅仅是本地主机。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在网络上找到您的计算机的地址。</font><font style="vertical-align: inherit;">在终端中，键入</font></font><code>ifconfig</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并查找该</font></font><code>en1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分或带有类似内容的部分</font></font><code>inet 192.168.1.111</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一网络上的移动设备中，访问</font></font><code>http://192.168.1.111:8080</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并享受热重装开发的幸福。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
