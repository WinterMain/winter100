---
layout: question
title:  ExpressJS如何构建应用程序？
date:   2020-03-16T06:45:10.000Z
description: 我正在为NodeJS使用ExpressJS Web框架。使用ExpressJS的人将他们的环境（开发，生产，测试...），路线等放置在app.js。我...
img: 
author: 小胖Itachi
category: question
answer: 13
tags: Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为NodeJS使用ExpressJS Web框架。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ExpressJS的人将他们的环境（开发，生产，测试...），路线等放置在</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我认为这不是一个好方法，因为当您拥有大型应用程序时，app.js太大了！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要这个目录结构：</font></font></p>

<pre><code>| my-application<font></font>
| -- app.js<font></font>
| -- config/<font></font>
     | -- environment.js<font></font>
     | -- routes.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js</font></font></strong></p>

<pre><code>var express = require('express');<font></font>
var app = module.exports = express.createServer();<font></font>
<font></font>
require('./config/environment.js')(app, express);<font></font>
require('./config/routes.js')(app);<font></font>
<font></font>
app.listen(3000);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config / environment.js</font></font></strong></p>

<pre><code>module.exports = function(app, express){<font></font>
    app.configure(function() {<font></font>
    app.use(express.logger());<font></font>
    });<font></font>
<font></font>
    app.configure('development', function() {<font></font>
    app.use(express.errorHandler({<font></font>
        dumpExceptions: true,<font></font>
        showStack: true<font></font>
    }));<font></font>
    });<font></font>
<font></font>
    app.configure('production', function() {<font></font>
    app.use(express.errorHandler());<font></font>
    });<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config / routes.js</font></font></strong></p>

<pre><code>module.exports = function(app) {<font></font>
    app.get('/', function(req, res) {<font></font>
    res.send('Hello world !');<font></font>
    });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码运行良好，我认为目录的结构很漂亮。</font><font style="vertical-align: inherit;">但是，必须对代码进行修改，并且我不确定代码是否良好/美观。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用我的目录结构并修改代码还是只使用一个文件（app.js）更好？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的建议！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1770篇《ExpressJS如何构建应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙古一神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有把手和Passportjs的ExpressJs项目的MVC结构的最佳方法</font></font></p>

<pre><code>- app<font></font>
      -config <font></font>
        -passport-setup.js<font></font>
      -controllers<font></font>
      -middleware<font></font>
      -models<font></font>
      -routes<font></font>
      -service<font></font>
    -bin<font></font>
      -www<font></font>
      -configuration.js<font></font>
      -passport.js<font></font>
    -node_modules<font></font>
    -views<font></font>
     -handlebars page<font></font>
    -env<font></font>
    -.gitignore<font></font>
    -package.json<font></font>
    -package-lock.json<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的结构表达4.
 </font></font><a href="https://github.com/odirleiborgert/borgert-express-boilerplate" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/odirleiborgert/borgert-express-boilerplate</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配套</font></font></strong></p>

<pre><code>View engine: twig<font></font>
Security: helmet<font></font>
Flash: express-flash<font></font>
Session: express-session<font></font>
Encrypt: bcryptjs<font></font>
Modules: express-load<font></font>
Database: MongoDB<font></font>
    ORM: Mongoose<font></font>
    Mongoose Paginate<font></font>
    Mongoose Validator<font></font>
Logs: winston + winston-daily-rotate-file<font></font>
Nodemon<font></font>
CSS: stylus<font></font>
Eslint + Husky<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结构体</font></font></strong></p>

<pre><code>|-- app<font></font>
    |-- controllers<font></font>
    |-- helpers<font></font>
    |-- middlewares<font></font>
    |-- models<font></font>
    |-- routes<font></font>
    |-- services<font></font>
|-- bin<font></font>
|-- logs<font></font>
|-- node_modules<font></font>
|-- public<font></font>
    |-- components<font></font>
    |-- images<font></font>
    |-- javascripts<font></font>
    |-- stylesheets<font></font>
|-- views<font></font>
|-- .env<font></font>
|-- .env-example<font></font>
|-- app.js<font></font>
|-- README.md<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建ur express应用的简单方法：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主index.js中，应保持以下顺序。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.set</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是第一位。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是第二位。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其后是其他api及其功能或其他文件中的route-continue</font></font></strong></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（“ / password”，passwordApi）;</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（“ / user”，userApi）;    </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.post（“ / token”，护照.createToken）;</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.post（“ /登出”，护照。登出）</font></font></p>
</blockquote></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇蛋蛋Sam</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能很有趣：</font></font></p>

<p><a href="https://github.com/flatiron/nconf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/flatiron/nconf</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有文件，环境变量，命令行参数和原子对象合并的分层node.js配置。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Sam路易</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="http://locomotivejs.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://locomotivejs.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了一种构建使用Node.js和Express构建的应用程序的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从网站：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Locomotive是用于Node.js的Web框架。机车支持MVC模式，RESTful路由和配置约定，同时与任何数据库和模板引擎无缝集成。机车基于Express构建，保留了您所期望的功能和简单性来自Node。”</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAGil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经写了一篇关于这个问题的帖子。</font><font style="vertical-align: inherit;">基本上，它使用a </font></font><code>routeRegistrar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历</font></font><code>/controllers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用其函数</font><font style="vertical-align: inherit;">的文件夹中的文件</font></font><code>init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">函数</font></font><code>init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将express </font></font><code>app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量作为参数，因此您可以按自己的方式注册路由。</font></font></p>

<pre><code>var fs = require("fs");<font></font>
var express = require("express");<font></font>
var app = express();<font></font>
<font></font>
var controllersFolderPath = __dirname + "/controllers/";<font></font>
fs.readdirSync(controllersFolderPath).forEach(function(controllerName){<font></font>
    if(controllerName.indexOf("Controller.js") !== -1){<font></font>
        var controller = require(controllersFolderPath + controllerName);<font></font>
        controller.init(app);<font></font>
    }<font></font>
});<font></font>
<font></font>
app.listen(3000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在提供MVC样式的文件夹结构，请在下面找到。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们将波纹管文件夹结构用于大中型Web应用程序。</font></font></p>

<pre><code> myapp   <font></font>
|<font></font>
|<font></font>
|____app<font></font>
|      |____controllers<font></font>
|      |    |____home.js<font></font>
|      |<font></font>
|      |____models<font></font>
|      |     |___home.js<font></font>
|      |<font></font>
|      |____views<font></font>
|           |___404.ejs<font></font>
|           |___error.ejs<font></font>
|           |___index.ejs<font></font>
|           |___login.ejs<font></font>
|           |___signup.ejs<font></font>
|   <font></font>
|<font></font>
|_____config<font></font>
|     |___auth.js<font></font>
|     |___constants.js<font></font>
|     |___database.js<font></font>
|     |___passport.js<font></font>
|     |___routes.js<font></font>
|<font></font>
|<font></font>
|____lib<font></font>
|    |___email.js<font></font>
|<font></font>
|____node_modules<font></font>
|<font></font>
|<font></font>
|____public.js<font></font>
|    |____css<font></font>
|    |    |__style.css<font></font>
|    |    <font></font>
|    |____js<font></font>
|    |    |__script.js<font></font>
|    |<font></font>
|    |____img<font></font>
|    |    |__img.jpg<font></font>
|    |<font></font>
|    |<font></font>
|    |____uploads<font></font>
|         |__img.jpg<font></font>
|      <font></font>
|   <font></font>
|<font></font>
|_____app.js<font></font>
|<font></font>
|<font></font>
|<font></font>
|_____package.json<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经创建了一个用于生成express mvc文件夹结构器的npm模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请在下面找到    </font></font><a href="https://www.npmjs.com/package/express-mvc-generator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/express-mvc-generator</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需简单的步骤即可生成和使用此模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i）安装模块 </font></font><code>npm install express-mvc-generator -g</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ii）检查选项 </font></font><code>express -h</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iii）生成Express MVC结构 </font></font><code>express myapp</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iv）安装依赖项</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v）打开您的config / database.js，请配置您的mongo数据库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vi）运行应用程序</font></font><code>node app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>nodemon app</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vii）检查URL </font></font><a href="http://localhost:8042/signup" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：8042 / signup</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://yourip:8042/signup" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// yourip：8042 / signup</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我将路由作为开头阅读的json文件放置，并在app.js的for循环中设置路由。</font><font style="vertical-align: inherit;">route.json包括应调用的视图以及将发送到路由的值的键。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这适用于许多简单情况，但是我必须手动为特殊情况创建一些路由。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从最后一个回答这个问题已经有一段时间了，Express还最近发布了版本4，该版本添加了一些用于组织应用程序结构的有用信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是有关如何构建Express应用程序的最佳做法的最新博客文章。
</font></font><a href="http://www.terlici.com/2014/08/25/best-practices-express-structure.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.terlici.com/2014/08/25/best-practices-express-structure.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个GitHub存储库，其中应用了本文中的建议。</font><font style="vertical-align: inherit;">最新的Express版本始终是最新的。</font></font><br>
<a href="https://github.com/terlici/base-express" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/terlici/base-express</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是2015年底，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过3年的开发工作以及大小型项目的发展。</font><font style="vertical-align: inherit;">结论？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要做一个大型MVC，而是将其分成模块</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么？</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，一个模块（例如产品）可以在一个模块上工作，您可以独立地对其进行更改。 </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以重用模块</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以单独进行测试</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以分开更换</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们具有清晰（稳定）的界面</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-最晚，如果有多个开发人员在工作，则模块分离会有所帮助</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://nodebootstrap.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodebootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目也有类似的做法，以我的最终结构。</font><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/inadarei/nodebootstrap" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种结构看起来如何？</font></font></strong></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型封装模块</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，每个</font><strong><font style="vertical-align: inherit;">模块</font></strong><font style="vertical-align: inherit;">都有单独的MVC</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个模块</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都有一个package.json</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为结构的一部分进行</font><strong><font style="vertical-align: inherit;">测试</font></strong><font style="vertical-align: inherit;">（在每个模块中）</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局配置</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，库和服务</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永久集成Docker，集群</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Folderoverview（有关模块，请参见lib文件夹）：</font></font></p>

<p><a href="https://i.stack.imgur.com/On4s9.png" rel="noreferrer"><img src="https://i.stack.imgur.com/On4s9.png" alt="nodebootstrap结构"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这不是将路由添加到配置的好方法。</font><font style="vertical-align: inherit;">更好的结构可能是这样的：</font></font></p>

<pre><code>application/<font></font>
| - app.js<font></font>
| - config.js<font></font>
| - public/ (assets - js, css, images)<font></font>
| - views/ (all your views files)<font></font>
| - libraries/ (you can also call it modules/ or routes/)<font></font>
    | - users.js<font></font>
    | - products.js<font></font>
    | - etc...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，products.js和users.js将包含您的所有路由，并且其中包含所有逻辑。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一种很棒的方法。</font><font style="vertical-align: inherit;">不限于表达，但我已经在github上看到了很多node.js项目在做同样的事情。</font><font style="vertical-align: inherit;">他们取出配置参数+较小的模块（在某些情况下，每个URI）都放在单独的文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您在github上进行特定于快递的项目，以获得一个想法。</font><font style="vertical-align: inherit;">海事组织的做法是正确的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢使用全局“应用程序”，而不是导出函数等</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
