---
layout: question
title:  Node.js Mongoose.js字符串转换为ObjectId函数
date:   2020-03-24T10:01:27.000Z
description: 是否有使用mongoose将字符串转换为node中的objectId的功能？该模式指定某个内容是一个ObjectId，但是当它从字符串保存时，mongo告...
img: 
author: 番长樱梅
category: question
answer: 3
tags: mongodb Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有使用mongoose将字符串转换为node中的objectId的功能？</font><font style="vertical-align: inherit;">该模式指定某个内容是一个ObjectId，但是当它从字符串保存时，mongo告诉我它仍然只是一个字符串。</font><font style="vertical-align: inherit;">例如，对象的_id显示为</font></font><code>objectId("blah")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3610篇《Node.js Mongoose.js字符串转换为ObjectId函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法解析此方法（很久没搜索了）</font></font></p>

<pre><code>mongoose.mongo.BSONPure.ObjectID.fromHexString
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的模式期望该属性为ObjectId类型，则该转换是隐式的，至少在4.7.8中是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可以使用类似这样的东西，它具有更多的灵活性：</font></font></p>

<pre><code>function toObjectId(ids) {<font></font>
<font></font>
    if (ids.constructor === Array) {<font></font>
        return ids.map(mongoose.Types.ObjectId);<font></font>
    }<font></font>
<font></font>
    return mongoose.Types.ObjectId(ids);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要通过express和mongoose实现REST API，请仅查看以下代码片段。</font><font style="vertical-align: inherit;">（添加示例）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>....<font></font>
exports.AddSomething = (req,res,next) =&gt;{<font></font>
  const newSomething = new SomeEntity({<font></font>
 _id:new mongoose.Types.ObjectId(), //its very own ID<font></font>
  somethingName:req.body.somethingName,<font></font>
  theForeignKey: mongoose.Types.ObjectId(req.body.theForeignKey)// if you want to pass an object ID<font></font>
})<font></font>
}<font></font>
...</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从评论来看，您正在寻找：</font></font></p>

<pre><code>mongoose.mongo.BSONPure.ObjectID.isValid
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>mongoose.Types.ObjectId.isValid
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
