---
layout: question
title:  Express.js req.body未定义
date:   2020-03-20T02:32:37.000Z
description: 我将其作为Express服务器的配置app.use(app.router); app.use(express.cookieParser());ap...
img: 
author: 番长逆天
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其作为Express服务器的配置</font></font></p>

<pre><code>app.use(app.router); <font></font>
app.use(express.cookieParser());<font></font>
app.use(express.session({ secret: "keyboard cat" }));<font></font>
app.set('view engine', 'ejs');<font></font>
app.set("view options", { layout: true });<font></font>
//Handles post requests<font></font>
app.use(express.bodyParser());<font></font>
//Handles put requests<font></font>
app.use(express.methodOverride());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我</font></font><code>req.body.something</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路线上</font><font style="vertical-align: inherit;">询问时，仍然</font><font style="vertical-align: inherit;">会指出一些错误</font></font><code>body is undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是使用的路线示例</font></font><code>req.body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>app.post('/admin', function(req, res){<font></font>
    console.log(req.body.name);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读到这个问题是由于缺少引起的，</font></font><code>app.use(express.bodyParser());</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如您所见，我在路由之前将其称为。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么线索吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2445篇《Express.js req.body未定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易达蒙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>If you are using some external tool to make the request, make sure to add the header:</p>

<p><code>Content-Type: application/json</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><strong>This is also one possibility</strong>: Make Sure that you should write this code before the route in your app.js(or index.js) file.</p>

<pre><code>app.use(bodyParser.urlencoded({ extended: true }));<font></font>
app.use(bodyParser.json());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>I solved it with:</p>

<pre><code>app.post('/', bodyParser.json(), (req, res) =&gt; {//we have req.body JSON<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿凯</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Use <strong>app.use(bodyparser.json());</strong> before routing. // .
app.use("/api", routes);</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>To work, you need to <strong>app.use(app.router)</strong> after <strong>app.use(express.bodyParser())</strong>, like that:</p>

<pre><code>app.use(express.bodyParser())<font></font>
   .use(express.methodOverride())<font></font>
   .use(app.router);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamDavaidGreen</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>You can try adding this line of code at the top, (after your require statements):</p>

<pre><code>app.use(bodyParser.urlencoded({extended: true}));
</code></pre>

<p>As for the reasons as to why it works, check out the docs: <a href="https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions" rel="noreferrer">https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid西门</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加入您的 </font></font><code>app.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路由器呼叫之前 </font></font></p>

<pre><code>const app = express();<font></font>
app.use(express.json());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express 4，具有内置的正文解析器。</font><font style="vertical-align: inherit;">无需安装单独的正文解析器。</font><font style="vertical-align: inherit;">所以下面将工作：</font></font></p>

<pre><code>export const app = express();<font></font>
app.use(express.json());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProEva</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求标头中的Content-Type确实很重要，尤其是当您从curl或任何其他工具发布数据时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您使用诸如application / x-www-form-urlencoded，application / json之类的东西，这取决于您的帖子数据。</font><font style="vertical-align: inherit;">将此字段保留为空会混淆Express。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙番长</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否。您需要使用</font></font><code>app.use(express.bodyParser())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font><code>app.use(app.router)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，</font></font><code>app.use(app.router)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是您最后要打的电话。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
