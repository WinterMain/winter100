---
layout: question
title:  猫鼬：findOneAndUpdate不返回更新的文档
date:   2020-03-23T01:18:51.000Z
description: 下面是我的代码var mongoose = require('mongoose');mongoose.connect('mongodb //loca...
img: 
author: 西里神奇
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是我的代码</font></font></p>

<pre><code>var mongoose = require('mongoose');<font></font>
mongoose.connect('mongodb://localhost/test');<font></font>
<font></font>
var Cat = mongoose.model('Cat', {<font></font>
    name: String,<font></font>
    age: {type: Number, default: 20},<font></font>
    create: {type: Date, default: Date.now} <font></font>
});<font></font>
<font></font>
Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}},function(err, doc){<font></font>
    if(err){<font></font>
        console.log("Something wrong when updating data!");<font></font>
    }<font></font>
<font></font>
    console.log(doc);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的mongo数据库中已经有一些记录，我想运行此代码来更新年龄为17岁的姓名，然后在代码末尾打印结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，为什么我仍然从控制台获得相同的结果（而不是修改后的名称），但是当我转到mongo db命令行并键入“ </font></font><code>db.cats.find();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”时。</font><font style="vertical-align: inherit;">结果带有修改后的名称。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我再次运行该代码，并修改了结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：如果修改了数据，那么为什么当console.log记录时我还是第一次得到原始数据。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">猫鼬维护者在这里。</font><font style="vertical-align: inherit;">您需要将</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或等效地，设置</font></font><code>returnOriginal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>await User.findOneAndUpdate(filter, update, { new: true });<font></font>
<font></font>
// Equivalent<font></font>
await User.findOneAndUpdate(filter, update, { returnOriginal: false });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mongoose </font></font><code>findOneAndUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://masteringjs.io/tutorials/mongoose/update#using-modelfindoneandupdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关在Mongoose中更新文档的本教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神奇路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，“ findOneAndUpdate”需要一个选项来返回原始文档。</font><font style="vertical-align: inherit;">并且，选项是：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB外壳</font></font></h2>

<p><code>{returnNewDocument: true}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">猫鼬</font></font></h2>

<p><code>{new: true}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js MongoDB驱动程序API：</font></font></h2>

<p><code>{returnOriginal: false}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#findOneAndUpdate</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用Node.js驱动程序而不是Mongoose的任何人，您都想使用</font></font><code>{returnOriginal:false}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>{new:true}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙前端Green</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用原生承诺的ES6 / ES7样式偶然发现此问题的人，可以采用以下模式...</font></font></p>

<pre><code>const user = { id: 1, name: "Fart Face 3rd"};<font></font>
const userUpdate = { name: "Pizza Face" };<font></font>
<font></font>
try {<font></font>
    user = await new Promise( ( resolve, reject ) =&gt; {<font></font>
        User.update( { _id: user.id }, userUpdate, { upsert: true, new: true }, ( error, obj ) =&gt; {<font></font>
            if( error ) {<font></font>
                console.error( JSON.stringify( error ) );<font></font>
                return reject( error );<font></font>
            }<font></font>
<font></font>
            resolve( obj );<font></font>
        });<font></font>
    })<font></font>
} catch( error ) { /* set the world on fire */ }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么会这样？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来的，不变</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件。</font><font style="vertical-align: inherit;">如果要返回新的，更新的文档，则必须传递一个附加参数：</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性设置为</font><font style="vertical-align: inherit;">的对象</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">猫鼬文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Query＃findOneAndUpdate</font></font></strong></p>

<pre><code>Model.findOneAndUpdate(conditions, update, options, (error, doc) =&gt; {<font></font>
  // error: any errors that occurred<font></font>
  // doc: the document before updates are applied if `new: false`, or after updates if `new = true`<font></font>
});<font></font>
</code></pre>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用选项</font></font></strong></p>
  
  <ul>
  <li><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：bool-如果为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改后的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档而不是原始文档。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认为false</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在4.0中更改）</font></font></li>
  </ul>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font></font><code>{new: true}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你想更新的结果的</font></font><code>doc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量：</font></font></p>

<pre><code>//                                                         V--- THIS WAS ADDED<font></font>
Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, (err, doc) =&gt; {<font></font>
    if (err) {<font></font>
        console.log("Something wrong when updating data!");<font></font>
    }<font></font>
<font></font>
    console.log(doc);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font></font><a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">findOneAndUpdate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回原始文档。</font><font style="vertical-align: inherit;">如果希望它返回修改后的文档</font></font><code>{ new: true }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则向该函数</font><font style="vertical-align: inherit;">传递一个options对象</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Cat.findOneAndUpdate({ age: 17 }, { $set: { name: "Naomi" } }, { new: true }, function(err, doc) {<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是的更新代码</font></font><code>findOneAndUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有用。</font></font></p>

<pre><code>db.collection.findOneAndUpdate(    <font></font>
  { age: 17 },      <font></font>
  { $set: { name: "Naomi" } },      <font></font>
  {<font></font>
     returnNewDocument: true<font></font>
  }    <font></font>
)<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
