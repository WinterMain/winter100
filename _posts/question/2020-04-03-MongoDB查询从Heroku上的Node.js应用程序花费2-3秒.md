---
layout: question
title:  MongoDB查询从Heroku上的Node.js应用程序花费2-3秒
date:   2020-04-03T03:00:49.000Z
description: 我在MongoDB上遇到主要的性能问题。在少于100个文档的数据库中，简单的find（）查询有时需要2,000-3,000毫秒才能完成。我在Mongo...
img: 
author: 番长樱梅
category: question
answer: 2
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在MongoDB上遇到主要的性能问题。</font><font style="vertical-align: inherit;">在少于100个文档的数据库中，简单的find（）查询有时需要2,000-3,000毫秒才能完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在MongoDB Atlas M10实例和在Digital Ocean上具有4GB RAM的VM上设置的群集中都看到了这一点。</font><font style="vertical-align: inherit;">当我在Heroku上重新启动Node.js应用程序时，查询在10到15分钟内表现良好（不到100毫秒），但是随后它们变慢了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是错误地连接到MongoDB还是从Node.js错误地查询？</font><font style="vertical-align: inherit;">请在下面查看我的应用程序代码。</font><font style="vertical-align: inherit;">还是在共享VM环境中缺少硬件资源？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助将不胜感激。</font><font style="vertical-align: inherit;">我已经使用Explain查询和Mongo Shell完成了所有的疑难解答。</font></font></p>

<pre><code>var Koa = require('koa'); //v2.4.1<font></font>
var Router = require('koa-router'); //v7.3.0<font></font>
<font></font>
var MongoClient = require('mongodb').MongoClient; //v3.1.3<font></font>
<font></font>
var app = new Koa();<font></font>
var router = new Router();<font></font>
<font></font>
app.use(router.routes());<font></font>
<font></font>
//Connect to MongoDB<font></font>
async function connect() {<font></font>
    try {<font></font>
        var client = await MongoClient.connect(process.env.MONGODB_URI, {<font></font>
            readConcern: { level: 'local' } <font></font>
        });<font></font>
        var db = client.db(process.env.MONGODB_DATABASE);<font></font>
<font></font>
        return db;<font></font>
    }<font></font>
    catch (error) {<font></font>
        console.log(error);<font></font>
    }<font></font>
}<font></font>
<font></font>
//Add MongoDB to Koa's ctx object<font></font>
connect().then(db =&gt; {<font></font>
    app.context.db = db;<font></font>
});<font></font>
<font></font>
//Get company's collection in MongoDB<font></font>
router.get('/documents/:collection', async (ctx) =&gt; {<font></font>
    try {<font></font>
        var query = { company_id: ctx.state.session.company_id }; <font></font>
<font></font>
        var res = await ctx.db.collection(ctx.params.collection).find(query).toArray();<font></font>
<font></font>
        ctx.body = { ok: true, docs: res };<font></font>
    }<font></font>
    catch (error) {<font></font>
        ctx.status = 500;<font></font>
        ctx.body = { ok: false };<font></font>
    }<font></font>
});<font></font>
<font></font>
app.listen(process.env.PORT || 3000);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用MongoDB变更流和标准的“服务器已发送事件”向应用程序UI提供实时更新。</font><font style="vertical-align: inherit;">我关闭了这些功能，现在MongoDB似乎再次表现良好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否已知MongoDB变更流会影响读/写性能？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3949篇《MongoDB查询从Heroku上的Node.js应用程序花费2-3秒》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您做更多的日志工作。</font><font style="vertical-align: inherit;">重新启动一段时间后，缓慢的查询可能比您想象的要糟糕。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于在普通计算机上运行的现代数据库/ Web应用程序，如果操作正确，则很难遇到性能问题。</font><font style="vertical-align: inherit;">可能存在内存泄漏或其他未释放的资源，或者网络拥塞。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言，您可能想先确定是否是网络问题，然后通过在MongoDB上启用慢速查询日志并在查询开始和结束的地方登录代码，可以实现此目的。</font></font></p>

<p>If the network is totally fine and you see no MongoDB slow queries, that means something goes wrong in your own application. Detailed logging might really help where query goes slow.</p>

<p>Hope this would help.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变更流确实会影响服务器的性能。</font><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/questions/48411897/severe-performance-drop-with-mongodb-change-streams"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个SO问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所指出的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font><font style="vertical-align: inherit;">那里</font><font style="vertical-align: inherit;">已</font></font><a href="https://stackoverflow.com/a/48530042/7049436"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB的Node.js客户端中</font><font style="vertical-align: inherit;">的</font></font><a href="http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html#.connect" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认连接池大小</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为5。由于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个更改流游标都会打开一个新连接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此连接池至少必须与游标数一样大。</font></font></p>

<pre><code>const mongoConnection = await MongoClient.connect(URL, {poolSize: 100});
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（感谢MongoDB Inc.调查</font></font><a href="https://jira.mongodb.org/browse/SERVER-32946" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要增加池大小才能恢复正常性能。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
