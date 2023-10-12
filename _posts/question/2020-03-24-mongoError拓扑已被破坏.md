---
layout: question
title:  mongoError：拓扑已被破坏
date:   2020-03-24T09:08:40.000Z
description: 我有一个用Restify和Mongoose在node.js中构建的REST服务，以及一个mongoDB，它的集合包含大约30.000个常规大小的文档。我的...
img: 
author: DavaidTony宝儿
category: question
answer: 12
tags: Node.js的 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个用Restify和Mongoose在node.js中构建的REST服务，以及一个mongoDB，它的集合包含大约30.000个常规大小的文档。</font><font style="vertical-align: inherit;">我的节点服务通过pmx和pm2运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">昨天，节点突然开始通过消息“ MongoError：拓扑已被破坏”消除错误，仅此而已。</font><font style="vertical-align: inherit;">我不知道这是什么意思，可能触发了什么。</font><font style="vertical-align: inherit;">谷歌搜索时也没有太多发现。</font><font style="vertical-align: inherit;">所以我想在这里问。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天重新启动了节点服务后，错误停止了出现。我也有其中一个正在生产中运行，这使我感到害怕，这可能在任何给定时间发生在运行在那里的安装程序的相当关键的部分...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用以下版本的提及的软件包：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">猫鼬：4.0.3</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新调整：3.0.3</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：0.10.25</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3530篇《mongoError：拓扑已被破坏》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要转到“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”菜单，然后单击“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接到...</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”子菜单。</font><font style="vertical-align: inherit;">这将打开一个新的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB Compass社区</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">窗口，您可以通过该窗口再次进行连接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过以下方法解决了这个问题： </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保mongo正在运行</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动我的服务器</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，此错误是由已经在后台运行的相同服务器实例引起的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，当我启动服务器而未通知服务器已经在运行时，控制台未显示“正在使用端口xxx”之类的信息。</font><font style="vertical-align: inherit;">我什至可以将某些内容上传到服务器。</font><font style="vertical-align: inherit;">因此，我花了很长时间才找到这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，关闭所有我可以想象的应用程序之后，我仍然无法在Mac的活动监视器中找到正在使用此端口的进程。</font><font style="vertical-align: inherit;">我必须使用</font></font><code>lsof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪。</font><font style="vertical-align: inherit;">罪魁祸首并不奇怪-这是一个节点过程。</font><font style="vertical-align: inherit;">但是，使用终端中显示的PID，我发现监视器中的端口号与服务器使用的端口号不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总而言之，杀死所有节点进程可以直接解决这个问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我所做的工作正常。</font><font style="vertical-align: inherit;">添加以下选项后，问题消失了。</font></font></p>

<pre><code>const dbUrl = "mongodb://localhost:27017/sampledb";<font></font>
const options =  { useMongoClient: true, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000, useNewUrlParser: true }<font></font>
mongoose.connect(dbUrl,options, function(<font></font>
  error<font></font>
) {<font></font>
  if (error) {<font></font>
    console.log("mongoerror", error);<font></font>
  } else {<font></font>
    console.log("connected");<font></font>
  }<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要重新启动mongo来解决拓扑错误，然后只需更改mongoose或mongoclient的某些选项即可解决此问题：</font></font></p>

<pre><code>var mongoOptions = {<font></font>
    useMongoClient: true,<font></font>
    keepAlive: 1,<font></font>
    connectTimeoutMS: 30000,<font></font>
    reconnectTries: Number.MAX_VALUE,<font></font>
    reconnectInterval: 5000,<font></font>
    useNewUrlParser: true<font></font>
}<font></font>
<font></font>
mongoose.connect(mongoDevString,mongoOptions);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">塞巴斯蒂安（Sebastian）对阿德里安（Adrien）的回答的评论需要更多关注，这对我有所帮助，但是作为评论有时可能会被忽略，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这里有一个解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var options =  { useMongoClient: true, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }<font></font>
mongoose.connect(config.mongoConnectionString, options, (err) =&gt; {<font></font>
    if(err) {<font></font>
        console.error("Error while connecting", err);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在MongoDb Compass社区上创建新数据库时遇到此错误。</font><font style="vertical-align: inherit;">问题出在我的Mongod上，没有运行。</font><font style="vertical-align: inherit;">因此，作为修复，我必须像前面一样运行Mongod命令。</font></font></p>

<pre><code>C:\Program Files\MongoDB\Server\3.6\bin&gt;mongod
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行该命令后，我能够创建数据库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也有同样的错误。</font><font style="vertical-align: inherit;">最后，我发现我的代码有一些错误。</font><font style="vertical-align: inherit;">我为两台nodejs服务器使用负载平衡，但是我只是更新一台服务器的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更改了mongod服务器</font></font><code>from standalone to replication</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但忘记了对连接字符串进行相应的更新，因此遇到了此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">独立连接字符串：
 </font></font><code>
mongodb://server-1:27017/mydb
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
复制连接字符串：
</font></font><code>
mongodb://server-1:27017,server-2:27017,server-3:27017/mydb?replicaSet=myReplSet
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细信息在这里：</font></font><a href="https://docs.mongodb.com/manual/reference/connection-string/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[连接字符串的mongo doc]</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加法尔（Gaafar）的回答只是一个很小的补充，它给了我一个过时的警告。</font><font style="vertical-align: inherit;">而不是在服务器对象上，像这样：</font></font></p>

<pre><code>MongoClient.connect(MONGO_URL, {<font></font>
    server: {<font></font>
        reconnectTries: Number.MAX_VALUE,<font></font>
        reconnectInterval: 1000<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以放在顶层对象上。</font><font style="vertical-align: inherit;">基本上，只需将其从服务器对象中取出并放入选项对象中，如下所示：</font></font></p>

<pre><code>MongoClient.connect(MONGO_URL, {<font></font>
    reconnectTries: Number.MAX_VALUE,<font></font>
    reconnectInterval: 1000<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道Jason的答案已被接受，但是Mongoose遇到了同样的问题，并且发现</font></font><a href="http://blog.mongolab.com/2014/04/mongodb-driver-mongoose/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">托管我的数据库的服务建议应用以下设置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以使Mongodb的连接在生产中保持活动状态：</font></font></p>

<pre><code>var options = {<font></font>
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },<font></font>
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }<font></font>
};<font></font>
mongoose.connect(secrets.db, options);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望此答复可以帮助其他人遇到“拓扑已被破坏”错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误是由于mongo驱动程序出于任何原因断开连接（例如，服务器已关闭）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，猫鼬会尝试重新连接30秒钟，然后停止重试并永久抛出错误，直到重新启动为止。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过在连接选项中编辑这两个字段来更改此设置</font></font></p>

<pre><code>mongoose.connect(uri, <font></font>
    { server: { <font></font>
        // sets how many times to try reconnecting<font></font>
        reconnectTries: Number.MAX_VALUE,<font></font>
        // sets the delay between every retry (milliseconds)<font></font>
        reconnectInterval: 1000 <font></font>
        } <font></font>
    }<font></font>
);<font></font>
</code></pre>

<p><a href="http://mongodb.github.io/node-mongodb-native/2.2/reference/connecting/connection-settings/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接选项文档</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font><a href="https://github.com/Automattic/mongoose/issues/6707#issuecomment-404145724" rel="noreferrer"><font style="vertical-align: inherit;">此注释</font></a><font style="vertical-align: inherit;">，“拓扑被破坏”可能是由于在创建mongo文档索引之前断开猫鼬的连接引起的</font></font><a href="https://github.com/Automattic/mongoose/issues/6707#issuecomment-404145724" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了确保在断开连接之前已建立所有模型的索引，您可以：</font></font></p>

<pre><code>await Promise.all(mongoose.modelNames().map(model =&gt; mongoose.model(model).ensureIndexes()));<font></font>
<font></font>
await mongoose.disconnect();<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
