---
layout: question
title:  使用node.js作为简单的Web服务器
date:   2020-03-13T09:51:30.000Z
description: 我想运行一个非常简单的HTTP服务器。每个GET请求example.com都应index.html以常规HTML页面的形式（例如，与您阅读普通网页时相同的...
img: 
author: 小小Stafan宝儿
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想运行一个非常简单的HTTP服务器。</font><font style="vertical-align: inherit;">每个GET请求</font></font><code>example.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都应</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以常规HTML页面的形式（例如，与您阅读普通网页时相同的体验）</font><font style="vertical-align: inherit;">获得</font><font style="vertical-align: inherit;">响应</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用下面的代码，我可以阅读的内容</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为常规网页？</font></font></p>

<pre><code>var http = require('http');<font></font>
var fs = require('fs');<font></font>
var index = fs.readFileSync('index.html');<font></font>
<font></font>
http.createServer(function (req, res) {<font></font>
  res.writeHead(200, {'Content-Type': 'text/plain'});<font></font>
  res.end(index);<font></font>
}).listen(9615);<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的一个建议很复杂，需要我为</font></font><code>get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用的每个资源（CSS，JavaScript，图像）文件</font><font style="vertical-align: inherit;">写</font><font style="vertical-align: inherit;">一行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在单个HTML页面中提供一些图像，CSS和JavaScript？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1499篇《使用node.js作为简单的Web服务器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>This is one of the fastest solutions i use to quickly see web pages    </p>

<pre><code>sudo npm install ripple-emulator -g
</code></pre>

<p>From then on just enter the directory of your html files and run</p>

<pre><code>ripple emulate
</code></pre>

<p>then change the device to Nexus 7 landscape.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYMandy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>There are already some great solutions for a simple <code>nodejs server</code>. 
There is a one more solution if you need <code>live-reloading</code> as you made changes to your files.</p>

<pre><code>npm install lite-server -g
</code></pre>

<p>navigate your directory and do </p>

<pre><code>lite-server
</code></pre>

<p>it will open browser for you with live-reloading.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以在shell中输入</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npx serve
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回购：</font></font><a href="https://github.com/zeit/serve" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/zeit/serve" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/zeit/serve</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样做的方法是首先通过以下方式全局安装节点静态服务器 </font></font></p>

<pre><code>npm install node-static -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后导航到包含html文件的目录，并使用启动静态服务器</font></font><code>static</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到浏览器并输入</font></font><code>localhost:8080/"yourHtmlFile"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需使用任何NPM模块即可运行简单的服务器，</font><font style="vertical-align: inherit;">Node的</font><font style="vertical-align: inherit;">库非常小，名为“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM Free Server</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”：</font></font></p>

<ul>
<li><strong><a href="https://github.com/TheJaredWilcurt/NPM-Free-Server"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上的NPM Free Server</font></font></a></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">50行代码，如果您请求文件或文件夹，则输出，如果工作失败，则将其显示为红色或绿色。</font><font style="vertical-align: inherit;">小于1KB（最小）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的PC上安装了节点，则可能是NPM；如果不需要NodeJS，则可以使用</font></font><a href="https://www.npmjs.com/package/serve" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">serve</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-在您的PC上安装软件包：</font></font></p>

<pre><code>npm install -g serve
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-服务您的静态文件夹：</font></font></p>

<pre><code>serve &lt;path&gt; <font></font>
d:&gt; serve d:\StaticSite<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将显示您要为您的静态文件夹提供服务的端口，只需导航至主机，如：</font></font></p>

<pre><code>http://localhost:3000
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">An</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js示例应用程序</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node Chat</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有您想要的功能。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在它的</font></font><a href="https://github.com/neerajdotname/node-chat-in-steps/blob/master/README.textile" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">README.textfile</font></font></a><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
3中。步骤就是您要寻找的。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个在端口8002上以hello world响应的服务器</font></font></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个index.html并将其投放</font></font></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍util.js</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改逻辑，以便提供任何静态文件</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在找不到文件的情况下显示404</font></font></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤4</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加jquery-1.4.2.js</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加client.js</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改index.html以提示用户输入昵称</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://github.com/neerajdotname/node-chat-in-steps/blob/master/server.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">server.js</font></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://github.com/neerajdotname/node-chat-in-steps/blob/master/util.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">util.js</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在npm上找到了一个有趣的库，可能对您有用。</font><font style="vertical-align: inherit;">它称为mime（</font></font><code>npm install mime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/broofa/node-mime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/broofa/node-mime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），它可以确定文件的mime类型。</font><font style="vertical-align: inherit;">这是我使用它编写的Web服务器的示例：</font></font></p>

<pre><code>var mime = require("mime"),http = require("http"),fs = require("fs");<font></font>
http.createServer(function (req, resp) {<font></font>
path  = unescape(__dirname + req.url)<font></font>
var code = 200<font></font>
 if(fs.existsSync(path)) {<font></font>
    if(fs.lstatSync(path).isDirectory()) {<font></font>
        if(fs.existsSync(path+"index.html")) {<font></font>
        path += "index.html"<font></font>
        } else {<font></font>
            code = 403<font></font>
            resp.writeHead(code, {"Content-Type": "text/plain"});<font></font>
            resp.end(code+" "+http.STATUS_CODES[code]+" "+req.url);<font></font>
        }<font></font>
    }<font></font>
    resp.writeHead(code, {"Content-Type": mime.lookup(path)})<font></font>
    fs.readFile(path, function (e, r) {<font></font>
    resp.end(r);<font></font>
<font></font>
})<font></font>
} else {<font></font>
    code = 404<font></font>
    resp.writeHead(code, {"Content-Type":"text/plain"});<font></font>
    resp.end(code+" "+http.STATUS_CODES[code]+" "+req.url);<font></font>
}<font></font>
console.log("GET "+code+" "+http.STATUS_CODES[code]+" "+req.url)<font></font>
}).listen(9000,"localhost");<font></font>
console.log("Listening at http://localhost:9000")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将服务于任何常规文本或图像文件（.html，.css，.js，.pdf，.jpg，.png，.m4a和.mp3是我测试过的扩展名，但从理论上讲，它应该适用于所有内容）</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发者须知</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我得到的输出示例：</font></font></p>

<pre><code>Listening at http://localhost:9000<font></font>
GET 200 OK /cloud<font></font>
GET 404 Not Found /cloud/favicon.ico<font></font>
GET 200 OK /cloud/icon.png<font></font>
GET 200 OK /<font></font>
GET 200 OK /501.png<font></font>
GET 200 OK /cloud/manifest.json<font></font>
GET 200 OK /config.log<font></font>
GET 200 OK /export1.png<font></font>
GET 200 OK /Chrome3DGlasses.pdf<font></font>
GET 200 OK /cloud<font></font>
GET 200 OK /-1<font></font>
GET 200 OK /Delta-Vs_for_inner_Solar_System.svg<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font><code>unescape</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径构造中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">功能。</font><font style="vertical-align: inherit;">这是为了允许文件名带有空格和编码字符。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1（在命令提示符内[希望您CD到文件夹]）： </font></font><code>npm install express</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤2：建立档案server.js</font></font></p>

<pre><code>var fs = require("fs");<font></font>
var host = "127.0.0.1";<font></font>
var port = 1337;<font></font>
var express = require("express");<font></font>
<font></font>
var app = express();<font></font>
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder<font></font>
<font></font>
app.get("/", function(request, response){ //root dir<font></font>
    response.send("Hello!!");<font></font>
});<font></font>
<font></font>
app.listen(port, host);<font></font>
</code></pre>

<p>Please note, you should add WATCHFILE (or use nodemon) too. Above code is only for a simple connection server.</p>

<p>STEP 3: <code>node server.js</code> or <code>nodemon server.js</code></p>

<p>There is now more easy method if you just want host simple HTTP server.
<code>npm install -g http-server</code></p>

<p>and open our directory and type <code>http-server</code></p>

<p><a href="https://www.npmjs.org/package/http-server">https://www.npmjs.org/package/http-server</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您现在缺少的部分是您要发送的内容：</font></font></p>

<pre><code>Content-Type: text/plain
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用Web浏览器呈现HTML，则应将其更改为：</font></font></p>

<pre><code>Content-Type: text/html
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
