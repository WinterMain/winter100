---
layout: question
title:  NodeJS / Express：什么是“ app.use”？
date:   2020-03-18T10:07:35.000Z
description: 在NodeJS express模块的文档中，示例代码包含app.use(...)。什么是use功能，它在哪儿定义？...
img: 
author: 小哥TomA
category: question
answer: 12
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://expressjs.com/guide.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeJS </font></font><code>express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://expressjs.com/guide.html" rel="noreferrer"><font style="vertical-align: inherit;">文档中</font></a><font style="vertical-align: inherit;">，示例代码包含</font></font><code>app.use(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，它在哪儿定义？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2134篇《NodeJS / Express：什么是“ app.use”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，app.use（）支持所有类型的请求[eg：get，post，...]，因此它主要用于设置中间件。</font><font style="vertical-align: inherit;">或可用于路线和功能分开的情况</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>app.use("/test",functionName)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和functionName位于不同的文件中</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙路易</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用app.use（）和app.METHOD（）函数将应用程序级中间件绑定到app对象的实例，其中METHOD是中间件函数处理的请求的HTTP方法（例如GET，PUT或POST）（小写）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>app.use()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一种中间件方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件方法就像Java中的拦截器一样，该方法始终针对所有请求执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件的目的和使用：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查会话是否过期</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于用户身份验证和授权</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查Cookie（有效期）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应前解析数据</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以让你使用任何中间件（</font></font><a href="https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）一样</font></font><code>body_parser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>CORS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等中间件可以修改</font></font><code>request</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>response</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">它也可以执行一段代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以创建自己的中间件功能，例如</font></font></p>

<pre><code>app.use( function(req, res, next) {<font></font>
  // your code <font></font>
  next();<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它包含三个参数</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>res</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>next</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
你也可以用它来验证和输入则params的验证，以保持控制器的清洁。</font></font></p>

<p><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于转到下一个中​​间件或路由。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以从中间件发送响应</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件是用于“粘合在一起”的软件的通用术语，因此app.use是一种配置中间件的方法，例如：解析和处理请求主体：app.use（bodyParser.urlencoded（{ }））; </font><font style="vertical-align: inherit;">app.use（bodyParser.json（））; </font><font style="vertical-align: inherit;">只需阅读doc，您就可以在快速应用程序中使用许多中间件：</font><a href="http://expressjs.com/en/guide/using-middleware.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://expressjs.com/en/guide/using-middleware.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//expressjs.com/en/guide/using-middleware.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Express中，如果我们从“ express”导入express并使用app = express（）; </font><font style="vertical-align: inherit;">然后具有快速表达所有功能的应用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们使用app.use（）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有任何模块/中间件功能，可用于整个快递项目 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（）的工作方式如下：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点http服务器实例上触发的请求事件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">express对req对象进行一些内部操作。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Express开始执行您使用app.use指定的操作时的时间</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有这样，Express才能完成路由之类的其余工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>app.use(function middleware1(req, res, next){<font></font>
   // middleware1 logic<font></font>
}, function middleware1(req, res, next){<font></font>
   // middleware2 logic<font></font>
}, ... middlewareN);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在</font><font style="vertical-align: inherit;">根据中间件注册顺序执行任何末端路由逻辑或中间路由逻辑之前</font><font style="vertical-align: inherit;">注册</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件或中间件链</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或多个中间件）的方法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">形成</font><font style="vertical-align: inherit;">带有</font><strong><font style="vertical-align: inherit;">三个参数req，res和next</font></strong><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能/中间件功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">next是回调，它引用链中的下一个中间件功能，在链的最后一个中间件功能的情况下，next指向下一个注册的中间稀有链的first-middleware-function。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在快速应用程序中充当中间件。</font><font style="vertical-align: inherit;">与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.get（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.post（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">左右不同，您实际上可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不指定请求URL。</font><font style="vertical-align: inherit;">在这种情况下，无论何时点击哪个URL，它都会被执行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.senchalabs.org/connect/proto.html#app.use" rel="noreferrer"><code>use</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种配置Express HTTP服务器对象的路由所使用的中间件的方法。</font><font style="vertical-align: inherit;">该方法定义为</font><font style="vertical-align: inherit;">Express基于</font><font style="vertical-align: inherit;">的</font></font><a href="http://www.senchalabs.org/connect/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Connect的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一部分</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://expressjs.com/en/guide/using-middleware.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从版本4.x开始，Express不再依赖</font></font><a href="http://www.senchalabs.org/connect/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Connect</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express以前包含的中间件功能现在位于单独的模块中；</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://github.com/senchalabs/connect#middleware" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件功能列表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇路易</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font><font style="vertical-align: inherit;">将请求发送到服务器时，都会调用</font><font style="vertical-align: inherit;">每个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.use（middleware）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
