---
layout: question
title:  mongodb / mongoose findMany-查找ID在数组中列出的所有文档
date:   2020-03-23T02:33:39.000Z
description: 我有一个_ids数组，我想相应地获取所有文档，最好的方法是什么？就像是 ...// doesn't work ... of course ......
img: 
author: 凯西里
category: question
answer: 1
tags: mongodb Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个_ids数组，我想相应地获取所有文档，最好的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是 ...</font></font></p>

<pre><code>// doesn't work ... of course ...<font></font>
<font></font>
model.find({<font></font>
    '_id' : [<font></font>
        '4ed3ede8844f0f351100000c',<font></font>
        '4ed3f117a844e0471100000d', <font></font>
        '4ed3f18132f50c491100000e'<font></font>
    ]<font></font>
}, function(err, docs){<font></font>
    console.log(docs);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该数组可能包含数百个_id。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2657篇《mongodb / mongoose findMany-查找ID在数组中列出的所有文档》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js和MongoChef都迫使我转换为ObjectId。</font><font style="vertical-align: inherit;">这就是我用来从数据库中获取用户列表并获取一些属性的方法。</font><font style="vertical-align: inherit;">注意第8行的类型转换。</font></font></p>

<pre><code>// this will complement the list with userName and userPhotoUrl based on userId field in each item<font></font>
augmentUserInfo = function(list, callback){<font></font>
        var userIds = [];<font></font>
        var users = [];         // shortcut to find them faster afterwards<font></font>
        for (l in list) {       // first build the search array<font></font>
            var o = list[l];<font></font>
            if (o.userId) {<font></font>
                userIds.push( new mongoose.Types.ObjectId( o.userId ) );           // for the Mongo query<font></font>
                users[o.userId] = o;                                // to find the user quickly afterwards<font></font>
            }<font></font>
        }<font></font>
        db.collection("users").find( {_id: {$in: userIds}} ).each(function(err, user) {<font></font>
            if (err) callback( err, list);<font></font>
            else {<font></font>
                if (user &amp;&amp; user._id) {<font></font>
                    users[user._id].userName = user.fName;<font></font>
                    users[user._id].userPhotoUrl = user.userPhotoUrl;<font></font>
                } else {                        // end of list<font></font>
                    callback( null, list );<font></font>
                }<font></font>
            }<font></font>
        });<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
