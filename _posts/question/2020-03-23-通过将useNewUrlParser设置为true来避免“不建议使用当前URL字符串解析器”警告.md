---
layout: question
title:  通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告
date:   2020-03-23T02:33:28.000Z
description: 我有一个数据库包装器类，用于建立与某些MongoDB实例的连接：async connect(connectionString  string)  Pr...
img: 
author: 村村番长
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个数据库包装器类，用于建立与某些MongoDB实例的连接：</font></font></p>

<pre><code>async connect(connectionString: string): Promise&lt;void&gt; {<font></font>
        this.client = await MongoClient.connect(connectionString)<font></font>
        this.db = this.client.db()<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这给了我一个警告：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（节点：4833）DeprecationWarning：不建议使用当前的URL字符串解析器，并将在以后的版本中将其删除。</font><font style="vertical-align: inherit;">要使用新的解析器，请将选项{useNewUrlParser：true}传递给MongoClient.connect。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>connect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法接受一个</font></font><code>MongoClientOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例作为第二个参数。</font><font style="vertical-align: inherit;">但是它没有名为的属性</font></font><code>useNewUrlParser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我也试图像这样在连接字符串中设置那些属性：</font></font><code>mongodb://127.0.0.1/my-db?useNewUrlParser=true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它对那些警告没有影响。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么我该如何设置</font></font><code>useNewUrlParser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除那些警告？</font><font style="vertical-align: inherit;">这对我很重要，因为脚本应作为cron运行，并且这些警告会导致垃圾邮件垃圾邮件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>mongodb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本中的驱动程序</font></font><code>3.1.0-beta4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和中的相应</font></font><code>@types/mongodb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包</font></font><code>3.0.18</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">两者都是最新可用的</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用旧版本的mongodb驱动程序：</font></font></p>

<pre><code>"mongodb": "~3.0.8",<font></font>
"@types/mongodb": "~3.0.18"<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2656篇《通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用mlab.com作为MongoDB数据库。</font><font style="vertical-align: inherit;">我将连接字符串分离到另一个名为的</font></font><code>config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">夹中，</font><font style="vertical-align: inherit;">并在文件</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">keys.js中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存了连接字符串：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>module.exports = {<font></font>
  mongoURI: "mongodb://username:password@ds147267.mlab.com:47267/projectname"<font></font>
};</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器代码是 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const express = require("express");<font></font>
const mongoose = require("mongoose");<font></font>
const app = express();<font></font>
<font></font>
// Database configuration<font></font>
const db = require("./config/keys").mongoURI;<font></font>
<font></font>
// Connect to MongoDB<font></font>
<font></font>
mongoose<font></font>
  .connect(<font></font>
    db,<font></font>
    { useNewUrlParser: true } // Need this for API support<font></font>
  )<font></font>
  .then(() =&gt; console.log("MongoDB connected"))<font></font>
  .catch(err =&gt; console.log(err));<font></font>
<font></font>
app.get("/", (req, res) =&gt; res.send("hello!!"));<font></font>
<font></font>
const port = process.env.PORT || 5000;<font></font>
<font></font>
app.listen(port, () =&gt; console.log(`Server running on port ${port}`)); // Tilde, not inverted comma</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要像上面一样在连接字符串后编写{useNewUrlParser：true}。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，您需要执行以下操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>mongoose.connect(connectionString,{ useNewUrlParser: true } <font></font>
// Or<font></font>
MongoClient.connect(connectionString,{ useNewUrlParser: true } <font></font>
    </code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在使用：</font></font></h3>

<pre><code>mongoose.connect("mongodb://localhost/mean-course").then(<font></font>
  (res) =&gt; {<font></font>
   console.log("Connected to Database Successfully.")<font></font>
  }<font></font>
).catch(() =&gt; {<font></font>
  console.log("Connection to database failed.");<font></font>
});<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→这给出了URL解析器错误</font></font></em></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的语法是：</font></font></h3>

<pre><code>mongoose.connect("mongodb://localhost:27017/mean-course" , { useNewUrlParser: true }).then(<font></font>
  (res) =&gt; {<font></font>
   console.log("Connected to Database Successfully.")<font></font>
  }<font></font>
).catch(() =&gt; {<font></font>
  console.log("Connection to database failed.");<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我的方法。</font><font style="vertical-align: inherit;">直到我几天前更新npm时，该提示才在控制台上显示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.connect具有三个参数，即URI，选项和err。</font></font></p>

<pre><code>mongoose.connect(<font></font>
    keys.getDbConnectionString(),<font></font>
    { useNewUrlParser: true },<font></font>
    err =&gt; {<font></font>
        if (err) <font></font>
            throw err;<font></font>
        console.log(`Successfully connected to database.`);<font></font>
    }<font></font>
);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要添加 </font></font></p>

<pre><code>{ useNewUrlParser: true }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在mongoose.connect方法中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过提供端口号并使用以下解析器来解决此问题： </font></font><code>{useNewUrlParser: true}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案可以是：</font></font></p>

<pre><code>mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它解决了我的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您不需要添加</font></font><code>{ useNewUrlParser: true }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经要使用新的URL解析器，则取决于您。</font><font style="vertical-align: inherit;">最终，当MongoDB切换到其新的URL解析器时，警告将消失。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如“ </font></font><em><a href="https://docs.mongodb.com/master/reference/connection-string/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接字符串URI格式”中</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定的那样</font><font style="vertical-align: inherit;">，您无需设置端口号。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加</font></font><code>{ useNewUrlParser: true }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就足够了。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的</font></font><code>mongo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本：</font></font></p>

<pre><code>mongo --version
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的版本&gt; = 3.1.0，则将</font></font><code>mongo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接文件</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为-&gt;</font></font></p>

<pre><code>MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或您的猫鼬连接文件--</font></font></p>

<pre><code>mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，它是版本4的功能，但v3.1.0及更高版本也支持该功能。</font><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/mongodb/node-mongodb-native/blob/v3.1.0/lib/mongo_client.js#L112" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB GitHub</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   以获取详细信息。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
