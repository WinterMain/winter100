---
layout: question
title:  带有koa2的REST API。几个路由器的通用前缀
date:   2020-04-07T10:53:01.000Z
description: 我有两个实体，用户和雇员。因此，我希望在不同的端点中都使用CRUD，但是它们都将安装在“ api”下，因此我可以定义api_v1，api_v2等。端点将类...
img: 
author: 阳光十三
category: question
answer: 0
tags: koa KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有两个实体，用户和雇员。</font><font style="vertical-align: inherit;">因此，我希望在不同的端点中都使用CRUD，但是它们都将安装在“ api”下，因此我可以定义api_v1，api_v2等。</font><font style="vertical-align: inherit;">端点将类似于：</font></font></p>

<pre><code>get api/users<font></font>
put api/users/12<font></font>
delete api/users/12<font></font>
get api/employees<font></font>
....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的两条路线都无法获取“ api”前缀。</font><font style="vertical-align: inherit;">无法与koa-mount配合使用。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的文件：</font></font></em></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">server.js</font></font></strong></p>

<pre><code>// Dependencies<font></font>
import Koa from 'koa'<font></font>
import mongoose from 'mongoose'<font></font>
import logger from 'koa-logger'<font></font>
// import parser from 'koa-bodyparser';<font></font>
import convert from 'koa-convert'<font></font>
import serve from 'koa-static'<font></font>
import Router from 'koa-router'<font></font>
import session from 'koa-generic-session'<font></font>
import mount from 'koa-mount'<font></font>
<font></font>
// A seperate file with my routes.<font></font>
import routingUsers from './users'<font></font>
import routingEmployees from './employees'<font></font>
<font></font>
// config<font></font>
const config = require("./config/config")<font></font>
<font></font>
// connect to the database<font></font>
mongoose.connect(config.mongo.url)<font></font>
mongoose.connection.on('error', console.error)<font></font>
<font></font>
// Creates the application.<font></font>
const app = new Koa()<font></font>
// how to use koa-mount to make this work? Arghhhhh!<font></font>
// const api = new Koa();<font></font>
// api.use(convert(mount ('/api', app)))<font></font>
<font></font>
// trust proxy<font></font>
app.proxy = true<font></font>
// sessions<font></font>
app.keys = ['your-session-secret']<font></font>
<font></font>
<font></font>
// Applies all routes to the router.<font></font>
const user = routingUsers(Router())<font></font>
const employee = routingEmployees(Router())<font></font>
<font></font>
app<font></font>
  .use(logger()) // log requests, should be at the beginning<font></font>
  .use(user.routes()) // asign routes<font></font>
  .use(employee.routes()) // asign routes<font></font>
  .use(user.allowedMethods())<font></font>
  .use(employee.allowedMethods())<font></font>
  .use(convert(session())) // session not needed for an API??????<font></font>
  .use(convert(serve(__dirname + '/public')))   // for static files like images<font></font>
<font></font>
<font></font>
// Start the application.<font></font>
app.listen(3000, () =&gt; console.log('server started 3000'))<font></font>
export default app<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">users.js </font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（employees.js是相同的）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>// Export a function that takes the router<font></font>
export default router =&gt; {<font></font>
  // Set a prefix of our api, in this case locations<font></font>
  const api = 'users'<font></font>
  router.prefix(`/${api}`);<font></font>
<font></font>
  // GET to all locations.<font></font>
  router.get('/',  (ctx, next) =&gt;<font></font>
      ctx.body = 'hello users');<font></font>
    // ctx.body = await Location.find());<font></font>
  // POST a new location.<font></font>
  router.post('/', async (ctx, next) =&gt;<font></font>
    ctx.body = await new Location(ctx.request.body).save());<font></font>
  // Routes to /locations/id.<font></font>
  router.get('/:id', async (ctx, next) =&gt;<font></font>
    ctx.body = await Location.findById(ctx.params.id));<font></font>
  // PUT to a single location.<font></font>
  router.put('/:id', async (ctx, next) =&gt;<font></font>
    ctx.body = await Location.findByIdAndUpdate(ctx.params.id, ctx.body));<font></font>
  // DELETE to a single location.<font></font>
  router.delete('/:id', async (ctx, next) =&gt;<font></font>
    ctx.body = await Location.findByIdAndRemove(ctx.params.id));<font></font>
<font></font>
  return router;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
