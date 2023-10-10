---
layout: question
title:  Heroku + node.js错误（Web进程在启动后60秒内未能绑定到$ PORT）
date:   2020-03-17T08:58:25.000Z
description: 我有我的第一个node.js应用程序（在本地运行良好）-但是我无法通过heroku部署它（也是第一次使用heroku）。代码如下。因此，我不允许编写太多代...
img: 
author: 乐米亚
category: question
answer: 15
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有我的第一个node.js应用程序（在本地运行良好）-但是我无法通过heroku部署它（也是第一次使用heroku）。</font><font style="vertical-align: inherit;">代码如下。</font><font style="vertical-align: inherit;">因此，我不允许编写太多代码，所以我只想说在本地以及在我的网络中运行代码都没有问题。</font></font></p>

<pre><code> var http = require('http');<font></font>
 var fs = require('fs');<font></font>
 var path = require('path');<font></font>
<font></font>
 http.createServer(function (request, response) {<font></font>
<font></font>
    console.log('request starting for ');<font></font>
    console.log(request);<font></font>
<font></font>
    var filePath = '.' + request.url;<font></font>
    if (filePath == './')<font></font>
        filePath = './index.html';<font></font>
<font></font>
    console.log(filePath);<font></font>
    var extname = path.extname(filePath);<font></font>
    var contentType = 'text/html';<font></font>
    switch (extname) {<font></font>
        case '.js':<font></font>
            contentType = 'text/javascript';<font></font>
            break;<font></font>
        case '.css':<font></font>
            contentType = 'text/css';<font></font>
            break;<font></font>
    }<font></font>
<font></font>
    path.exists(filePath, function(exists) {<font></font>
<font></font>
        if (exists) {<font></font>
            fs.readFile(filePath, function(error, content) {<font></font>
                if (error) {<font></font>
                    response.writeHead(500);<font></font>
                    response.end();<font></font>
                }<font></font>
                else {<font></font>
                    response.writeHead(200, { 'Content-Type': contentType });<font></font>
                    response.end(content, 'utf-8');<font></font>
                }<font></font>
            });<font></font>
        }<font></font>
        else {<font></font>
            response.writeHead(404);<font></font>
            response.end();<font></font>
        }<font></font>
    });<font></font>
<font></font>
 }).listen(5000);<font></font>
<font></font>
 console.log('Server running at http://127.0.0.1:5000/');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法 ？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">归功于：gprasant</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想重新发布此内容，因为此答案解决了我的问题。</font><font style="vertical-align: inherit;">我的问题是，在终端中运行“ heroku logs --tail”时，部署到heroku时出现错误“ Web进程在启动后60秒内无法绑定到$ PORT”。</font><font style="vertical-align: inherit;">但是当我在本地运行服务器时，应用程序将按预期运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在index.js文件（服务器文件）中有此文件</font></font></p>

<pre><code>const PORT = process.env.port || 4000<font></font>
<font></font>
app.listen(PORT, () =&gt; {<font></font>
  console.log(`Server listening on port ${PORT}`)<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是应该有这个</font></font></p>

<pre><code>const PORT = process.env.PORT || 4000<font></font>
<font></font>
app.listen(PORT, () =&gt; {<font></font>
  console.log(`Server listening on port ${PORT}`)<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用process.env.PORT而不是process.env.port !!!! </font><font style="vertical-align: inherit;">端口！=端口!!! </font><font style="vertical-align: inherit;">（明显）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">归功于：gprasant</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用ReactJs，如果要上传到heroku，请将其添加到webpack.config.js中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为如果不添加，将会出错</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误R10（引导超时）-&gt; Web进程在启动后60秒内未能绑定到$ PORT</font></font></p>
</blockquote>

<pre><code>//webpack.config.js add code like that<font></font>
<font></font>
const HtmlWebPackPlugin = require(“html-webpack-plugin”);<font></font>
const MiniCssExtractPlugin = require(“mini-css-extract-plugin”);<font></font>
var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;<font></font>
var server_host = process.env.YOUR_HOST || ‘0.0.0.0’;<font></font>
<font></font>
module.exports = {<font></font>
 module: {<font></font>
 rules: [<font></font>
 {<font></font>
 test: /\.js$/,<font></font>
 exclude: /node_modules/,<font></font>
 use: {<font></font>
 loader: “babel-loader”<font></font>
 }<font></font>
 },<font></font>
 {<font></font>
 test: /\.css$/,<font></font>
 use: [MiniCssExtractPlugin.loader, “css-loader”]<font></font>
 }<font></font>
 ]<font></font>
 },<font></font>
 devServer: {<font></font>
 disableHostCheck: true,<font></font>
 contentBase: ‘./dist’,<font></font>
 compress: true,<font></font>
 inline: true,<font></font>
 port:server_port,<font></font>
 host:server_host<font></font>
<font></font>
},<font></font>
 plugins: [<font></font>
 new HtmlWebPackPlugin({<font></font>
 template: “./src/index.html”,<font></font>
 filename: “index.html”<font></font>
 }),<font></font>
 new MiniCssExtractPlugin({<font></font>
 filename: “[name].css”,<font></font>
 chunkFilename: “[id].css”<font></font>
 })<font></font>
 ]<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光梅L</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">最终，我意识到我不需要请求端点中的端口号。</font><font style="vertical-align: inherit;">（因此端点是</font></font><a href="https://...herokuapp.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https：//...herokuapp.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><a href="https://...herokuapp.com:5000" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https：//...herokuapp.com：5000</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">listen（）调用可以不包含主机和回调：server.listen（5000）;</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我有两个问题...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）根本没有侦听器，因为正在从另一个入口文件运行应用程序，并且此运行脚本已从package.json“脚本”中删除</font></font></p>

<p><a href="https://i.stack.imgur.com/y5p3C.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/y5p3C.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）区分大小写的问题是使用“ Sequelize”而不是“ sequelize”</font></font></p>

<p><a href="https://i.stack.imgur.com/iCrGS.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/iCrGS.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，因为我没有定义Procfile。</font><font style="vertical-align: inherit;">将名为Procfile的文本文件提交到应用程序的根目录，不带文件扩展名。</font><font style="vertical-align: inherit;">该文件告诉Heroku要运行哪个命令来启动您的应用程序。</font></font><br>
<code>web: node app.js</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但是使用了express和apollo服务器。</font><font style="vertical-align: inherit;">从</font></font><a href="https://www.apollographql.com/docs/apollo-server/deployment/heroku.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的解决方案</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一需要考虑的特殊事项是允许heroku选择服务器部署到的端口。</font><font style="vertical-align: inherit;">否则，可能存在错误，例如请求超时。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要配置apollo服务器在运行时使用Heroku定义的端口，可以使用PORT环境变量定义的端口调用安装文件中的listen函数：</font></font></p>
</blockquote>

<pre><code>&gt; server.listen({ port: process.env.PORT || 4000 }).then(({ url }) =&gt; { <font></font>
&gt; console.log(`Server ready at ${url}`); });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果像我一样，正在将Heroku配置为从</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部署时</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">运行脚本，请</font><font style="vertical-align: inherit;">确保尚未</font></font><code>PORT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对该脚本中</font><font style="vertical-align: inherit;">的值进行硬编码</font><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">如果这样做，您最终会像我一样，花一个小时试图弄清楚为什么会出现此错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有解决方案中，我没有按预期尝试过任何工作，默认情况下，我研究heroku。.env文件应保持约定PORT，process.env.PORT，heroku缺省将查找关键字PORT。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消任何重命名，例如APP_PORT =，而在环境文件中使用PORT =。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyTony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法为端口设置固定编号，heroku使用进行动态分配</font></font><code>process.env.PORT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是您可以像这样将它们都添加</font></font><code>process.env.PORT || 5000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Heroku将使用第一个，而您的localhost将使用第二个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以添加回叫功能。</font><font style="vertical-align: inherit;">看下面的代码</font></font></p>

<pre><code>app.listen(process.env.PORT || 5000, function() {<font></font>
    console.log("Server started.......");<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinEva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，可以通过将“ localhost”替换为IP“ 0.0.0.0”来解决该问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易斯丁LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下步骤解决了我的解决方案：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font><font style="vertical-align: inherit;">为：</font></font></p>

<pre><code>...<font></font>
"engines": {<font></font>
"node": "5.0.0",<font></font>
"npm": "4.6.1"<font></font>
},<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Server.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为：</font></font></p>

<pre><code>...<font></font>
var port = process.env.PORT || 3000;<font></font>
app.listen(port, "0.0.0.0", function() {<font></font>
console.log("Listening on Port 3000");<font></font>
});<font></font>
...<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，将侦听端口从3000更改为（process.env.PORT || 5000）解决了该问题！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我将Babel与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-inline-environment-variables</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件一起使用。</font><font style="vertical-align: inherit;">显然，Heroku在进行部署时未设置PORT env变量，因此</font></font><code>process.env.PORT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被替换</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且您的代码将回退到Heroku不了解的开发端口。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，如果你的代码不指定端口，那么它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不应该是一个</font></font><code>web</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过程</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能应该是一个</font></font><code>worker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过程，而不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，将其更改</font></font><code>Procfile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为“ read”（填写了您的特定命令）：</font></font></p>

<p><code>worker: YOUR_COMMAND</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后还可以在CLI上运行： </font></font></p>

<p><code>$ heroku scale worker=1</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Heroku动态为您的应用分配端口，因此您不能将端口设置为固定编号。</font><font style="vertical-align: inherit;">Heroku将端口添加到环境中，因此您可以从那里拉出它。</font><font style="vertical-align: inherit;">切换至此：</font></font></p>

<pre><code>.listen(process.env.PORT || 5000)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，当您在本地测试时，它仍将监听端口5000，但它也将在Heroku上运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://devcenter.heroku.com/articles/nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看有关Node.js的Heroku文档</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
