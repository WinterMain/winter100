---
layout: question
title:  在Mongoose最佳实践的基础上使用Joi进行验证吗？
date:   2020-04-03T03:05:40.000Z
description: 我正在使用Node.js，Mongoose和Koa开发RESTful API，并且对于模式和输入验证的最佳实践有些困惑。目前，我对每种资源都有Mong...
img: 
author: Tony西里
category: question
answer: 1
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Node.js，Mongoose和Koa开发RESTful API，并且对于模式和输入验证的最佳实践有些困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我对每种资源都有Mongoose和Joi模式。</font><font style="vertical-align: inherit;">猫鼬模式仅包含有关特定资源的基本信息。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>const UserSchema = new mongoose.Schema({<font></font>
  email: {<font></font>
    type: String,<font></font>
    lowercase: true,<font></font>
  },<font></font>
  firstName: String,<font></font>
  lastName: String,<font></font>
  phone: String,<font></font>
  city: String,<font></font>
  state: String,<font></font>
  country: String,<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Joi模式包含有关对象的每个属性的详细信息：</font></font></p>

<pre><code>{<font></font>
  email: Joi.string().email().required(),<font></font>
  firstName: Joi.string().min(2).max(50).required(),<font></font>
  lastName: Joi.string().min(2).max(50).required(),<font></font>
  phone: Joi.string().min(2).max(50).required(),<font></font>
  city: Joi.string().min(2).max(50).required(),<font></font>
  state: Joi.string().min(2).max(50).required(),<font></font>
  country: Joi.string().min(2).max(50).required(),<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当写入数据库时​​，Mongoose模式用于在端点处理程序级别创建给定资源的新实例。</font></font></p>

<pre><code>router.post('/', validate, routeHandler(async (ctx) =&gt; {<font></font>
  const userObj = new User(ctx.request.body);<font></font>
  const user = await userObj.save();<font></font>
<font></font>
  ctx.send(201, {<font></font>
    success: true,<font></font>
    user,<font></font>
  });<font></font>
}));<font></font>
</code></pre>

<p>The Joi schema is used in validation middleware to validate user input. I have 3 different Joi schemas for each resource, because the allowed input varies depending on the request method (POST, PUT, PATCH).</p>

<pre><code>async function validate(ctx, next) {<font></font>
  const user = ctx.request.body;<font></font>
  const { method } = ctx.request;<font></font>
  const schema = schemas[method];<font></font>
<font></font>
  const { error } = Joi.validate(user, schema);<font></font>
<font></font>
  if (error) {<font></font>
    ctx.send(400, {<font></font>
      success: false,<font></font>
      error: 'Bad request',<font></font>
      message: error.details[0].message,<font></font>
    });<font></font>
  } else {<font></font>
    await next();<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>I am wondering if my current approach of using multiple Joi schemas on top of Mongoose is optimal, considering Mongoose also has built-int validation. If not, what would be some good practices to follow?</p>

<p>Thanks!</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您具有猫鼬模式，实现验证服务也是一种常见的做法。</font><font style="vertical-align: inherit;">正如您自己所说，在对数据执行任何登录之前，它将返回验证错误。</font><font style="vertical-align: inherit;">因此，在这种情况下，肯定会节省一些时间。</font><font style="vertical-align: inherit;">而且，您可以通过joi获得更好的验证控制。</font><font style="vertical-align: inherit;">但是，它也很大程度上取决于您的要求，因为它会增加您必须编写的额外代码，可以避免这些代码，而不会对最终结果造成太大影响。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
