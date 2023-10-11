---
layout: question
title:  使用socket.io和node.js将消息发送到特定客户端
date:   2020-03-24T01:44:29.000Z
description: 我正在使用socket.io和node.js，直到现在看起来还不错，但我不知道如何从服务器向特定客户端发送消息，如下所示：client.send(me...
img: 
author: 卡卡西Near
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用socket.io和node.js，直到现在看起来还不错，但我不知道如何从服务器向特定客户端发送消息，如下所示：</font></font></p>

<pre><code>client.send(message, receiverSessionId)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是无论是</font></font><code>.send()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>.broadcast()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法似乎都无法满足我的需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现一种可能的解决方案是，该</font></font><code>.broadcast()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法将不发送消息的SessionId数组作为第二个参数，因此我可以将此时连接了所有SessionId的数组传递给服务器，除了那个我希望发送邮件，但是我觉得必须有一个更好的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3171篇《使用socket.io和node.js将消息发送到特定客户端》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Socket.IO允许您“命名”套接字，这实际上意味着分配不同的端点或路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能会有所帮助：</font><a href="http://socket.io/docs/rooms-and-namespaces/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://socket.io/docs/rooms-and-namespaces/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//socket.io/docs/rooms-and-namespaces/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">io.sockets.sockets [socket.id] .emit（...）在v0.9中为我工作</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在1.0中，您应该使用：</font></font></p>

<pre><code>io.sockets.connected[socketid].emit();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，您必须为此赢得客户（惊喜），您可以采用以下简单方法：</font></font></p>

<pre><code>var io = io.listen(server);<font></font>
io.clients[sessionID].send()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怀疑这可能会中断，但是它总是有</font></font><code>io.clients</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能被更改，因此请谨慎使用以上内容</font></font></p>

<p>Or you keep track of the clients yourself, therefore you add them to your own <code>clients</code> object in the <code>connection</code> listener and remove them in the <code>disconnect</code> listener.</p>

<p>I would use the latter one, since depending on your application you might want to have more state on the clients anyway, so something like <code>clients[id] = {conn: clientConnect, data: {...}}</code> might do the job.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
