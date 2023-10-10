---
layout: question
title:  检测到可能的EventEmitter内存泄漏
date:   2020-03-23T03:31:08.000Z
description: 我收到以下警告：(node) warning  possible EventEmitter memory leak detected. 11 list...
img: 
author: 番长猴子
category: question
answer: 9
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到以下警告：</font></font></p>

<pre class="lang-none prettyprint-override"><code>(node) warning: possible EventEmitter memory leak detected. 11 listeners added. Use emitter.setMaxListeners() to increase limit.<font></font>
Trace: <font></font>
    at EventEmitter.&lt;anonymous&gt; (events.js:139:15)<font></font>
    at EventEmitter.&lt;anonymous&gt; (node.js:385:29)<font></font>
    at Server.&lt;anonymous&gt; (server.js:20:17)<font></font>
    at Server.emit (events.js:70:17)<font></font>
    at HTTPParser.onIncoming (http.js:1514:12)<font></font>
    at HTTPParser.onHeadersComplete (http.js:102:31)<font></font>
    at Socket.ondata (http.js:1410:22)<font></font>
    at TCP.onread (net.js:354:27)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在server.js中编写了这样的代码：</font></font></p>

<pre><code>http.createServer(<font></font>
    function (req, res) { ... }).listen(3013);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决呢？ </font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们团队对此的解决方法是从.npmrc中删除注册表路径。</font><font style="vertical-align: inherit;">我们在rc文件中有两个路径别名，一个是指向已被弃用的Artifactory实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误无关，与我们的应用程序的实际代码，但</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切都</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与我们的开发环境。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我面临着同样的问题，但是我已经成功地通过异步等待进行了处理。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
请检查是否有帮助。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
让dataLength = 25; </font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前：</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
&nbsp;&nbsp;for（让i = 0； i &lt;dataLength; i ++）{ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sftp.get（remotePath，fs.createWriteStream（</font></font><code>xyzProject/${data[i].name}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">））; </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&nbsp;&nbsp;} </font></font><br><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后：</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
&nbsp;&nbsp;for（let i = 0; i &lt;dataLength; i ++）{ </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;等待sftp.get（remotePath，fs.createWriteStream（</font></font><code>xyzProject/${data[i].name}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">））; </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&nbsp;&nbsp;}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">和问题是由于我在2个侦听器上侦听端口8080而引起的。</font></font></p>

<p><code>setMaxListeners()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 工作正常，但我不推荐它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是检查您的代码中是否有其他侦听器，删除侦听器或更改您正在侦听的端口号，这解决了我的问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用以下方法创建新的侦听器之前，您需要清除所有侦听器：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端服务器</font></font></strong></p>

<pre><code>socket.removeAllListeners(); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设套接字是您的客户端套接字/或创建的服务器套接字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以订阅特定的事件侦听器，例如</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">侦听器：</font></font></p>

<pre><code>this.socket.removeAllListeners("connect");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到今天开始时，我一直都这样</font></font><code>grunt watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">终于解决了</font></font></p>

<pre class="lang-json prettyprint-override"><code>watch: {<font></font>
  options: {<font></font>
    maxListeners: 99,<font></font>
    livereload: true<font></font>
  },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">烦人的消息不见了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，</font></font><code>child.stderr.pipe(process.stderr)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我启动10个（或大约）孩子实例时</font><font style="vertical-align: inherit;">，它就是</font><font style="vertical-align: inherit;">被调用的。</font><font style="vertical-align: inherit;">因此，导致将事件处理程序附加到LOOP中的同一EventEmitter对象的任何事情，都会导致nodejs抛出此错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac OS X上安装Aglio时，我也收到此警告。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用cmd修复它。</font></font></p>

<pre><code>sudo npm install -g npm@next
</code></pre>

<p><a href="https://github.com/npm/npm/issues/13806" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/npm/npm/issues/13806</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>.on()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>once()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>once()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当事件由同一函数处理时，</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">会删除事件侦听器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这不能解决问题，请在package.json“ restler”中重新安装restler：“ git：//github.com/danwrong/restler.git#9d455ff14c57ddbe263dbbcd0289d76413bfe07d”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与restler 0.10与节点的行为不当有关。</font><font style="vertical-align: inherit;">您可以在此处查看git上已关闭的问题：</font></font><a href="https://github.com/danwrong/restler/issues/112" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/danwrong/restler/issues/112" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/danwrong/restler/issues/112</font></a><font style="vertical-align: inherit;"> 
但是，npm尚未更新此内容，因此这就是为什么您必须引用git head的原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在此指出警告的出现是有原因的，正确的解决办法很有可能</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加限制，而是弄清楚为什么要在同一事件中添加如此多的侦听器。</font><font style="vertical-align: inherit;">仅当您知道为什么要添加如此多的侦听器并确信这是您真正想要的时，才增加限制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到此页面是因为收到此警告，并且在我的情况下，我正在使用的某些代码中存在一个错误，该错误将全局对象转换为EventEmitter！</font><font style="vertical-align: inherit;">我当然建议不要在全球范围内增加限制，因为您不希望这些事情被忽视。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
