---
layout: question
title:  WebSockets与服务器发送的事件/ EventSource
date:   2020-03-16T08:15:12.000Z
description: 双方的WebSockets和服务器发送的事件能够将数据推送到浏览器。在我看来，它们似乎是竞争技术。它们之间有什么区别？您何时会选择一个？...
img: 
author: Near米亚
category: question
answer: 7
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双方</font></font><a href="http://dev.w3.org/html5/websockets/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的WebSockets</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器发送的事件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能够将数据推送到浏览器。</font><font style="vertical-align: inherit;">在我看来，它们似乎是竞争技术。</font><font style="vertical-align: inherit;">它们之间有什么区别？</font><font style="vertical-align: inherit;">您何时会选择一个？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大连接限制不是http2 + sse的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是http 1上的问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.youtube.com/watch?v=vhJz3HftuZU/%22Here%22" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">讨论Web套接字和服务器发送事件之间的区别。</font><font style="vertical-align: inherit;">从Java EE 7开始，</font></font><a href="http://docs.oracle.com/javaee/7/tutorial/doc/websocket.htm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebSocket</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API已经成为规范的一部分，并且服务器发送的事件似乎将</font><font style="vertical-align: inherit;">在企业版</font><font style="vertical-align: inherit;">的</font></font><a href="https://java.net/downloads/javaee-spec/SSE-in-EE8.pdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本中</font><font style="vertical-align: inherit;">发布</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera，Chrome，Safari支持SSE，Chrome，Safari在SharedWorker内部支持SSE。Firefox支持XMLHttpRequest readyState交互，因此我们可以为Firefox创建EventSource polyfil</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长十三小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要注意的一件事：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我在使用websocket和公司防火墙时遇到了问题。</font><font style="vertical-align: inherit;">（使用HTTPS有帮助，但并非总是如此。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://github.com/LearnBoost/socket.io/wiki/Socket.IO-and-firewall-software" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/LearnBoost/socket.io/wiki/Socket.IO-and-firewall-software </font></font></a>
<a href="https://github.com/sockjs/sockjs-client/issues/94" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/sockjs/sockjs-client/issues/94</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认为</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器发送事件没有那么多问题。</font><font style="vertical-align: inherit;">但是我不知道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是说，WebSocket充满了乐趣。</font><font style="vertical-align: inherit;">我有一个使用websockets的小型网络游戏（通过Socket.IO）（</font></font><a href="http://minibman.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://minibman.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Jim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Websocket VS SSE</font></font></h2>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web套接字-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一种协议，可通过单个TCP连接提供全双工通信通道。</font><font style="vertical-align: inherit;">例如，服务器和浏览器之间的双向通信由于协议更加复杂，因此服务器和浏览器必须依赖于websocket库</font></font><code>socket.io</code></p>

<pre><code>Example - Online chat application.
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSE（服务器发送事件）-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
如果发生服务器发送事件，则仅在服务器与浏览器之间进行通信，而浏览器无法向服务器发送任何数据。</font><font style="vertical-align: inherit;">这种通信主要在只需要显示更新的数据时使用，然后服务器在数据更新时发送消息。</font><font style="vertical-align: inherit;">例如，服务器与浏览器之间的单向通信。</font><font style="vertical-align: inherit;">该协议不太复杂，因此无需依赖外部库JAVASCRIPT本身就提供了</font></font><code>EventSource</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收服务器发送的消息</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">接口。</font></font></p>

<pre><code>Example - Online stock quotes or cricket score website.
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Mandy</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据caniuse.com：</font></font></p>

<ul>
<li><a href="http://caniuse.com/websockets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">96％的全球用户</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机支持WebSockets</font></font></li>
<li><a href="http://caniuse.com/eventsource" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球用户中有92％</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地支持服务器发送的事件</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用仅客户端的polyfill将对SSE的支持扩展到许多其他浏览器。</font><font style="vertical-align: inherit;">WebSockets不太可能这样。</font><font style="vertical-align: inherit;">一些EventSource polyfills：</font></font></p>

<ul>
<li><a href="https://github.com/remy/polyfills/blob/master/EventSource.js" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Remy Sharp的</font><a href="https://github.com/remy/polyfills/blob/master/EventSource.js" rel="noreferrer"><font style="vertical-align: inherit;">EventSource</font></a><font style="vertical-align: inherit;">，没有其他库依赖项（IE7 +）</font></font></li>
<li><a href="http://github.com/rwldrn/jquery.eventsource" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rick Waldron的</font><a href="http://github.com/rwldrn/jquery.eventsource" rel="noreferrer"><font style="vertical-align: inherit;">jQuery.EventSource</font></a></font></li>
<li><a href="https://github.com/Yaffle/EventSource/blob/master/eventsource.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EventSource的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由</font></font><a href="https://stackoverflow.com/a/5277065/24874"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yaffle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（替代原生实现，跨浏览器的行为正常化）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要支持所有浏览器，请考虑使用诸如</font></font><a href="https://github.com/gimite/web-socket-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">web-socket-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/SignalR/SignalR/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SignalR</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://socket.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">socket.io之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的库，该库</font><font style="vertical-align: inherit;">支持多种传输方式，例如WebSockets，SSE，Forever Frame和AJAX长轮询。</font><font style="vertical-align: inherit;">这些通常也需要修改服务器端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从以下位置了解有关SSE的更多信息：</font></font></p>

<ul>
<li><a href="http://www.html5rocks.com/en/tutorials/eventsource/basics/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 Rocks文章</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C规范（</font></font><a href="http://www.w3.org/TR/eventsource/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已发布的版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://dev.w3.org/html5/eventsource/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑的草稿</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从以下位置了解有关WebSocket的更多信息：</font></font></p>

<ul>
<li><a href="http://www.html5rocks.com/en/tutorials/websockets/basics/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 Rocks文章</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C规范（</font></font><a href="http://www.w3.org/TR/websockets/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已发布的版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://dev.w3.org/html5/websockets/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑的草稿</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他差异：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebSockets支持任意二进制数据，SSE仅使用UTF-8</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Websocket和SSE（服务器发送事件）都能够将数据推送到浏览器，但是它们不是竞争技术。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Websockets连接既可以将数据发送到浏览器，也可以从浏览器接收数据。</font><font style="vertical-align: inherit;">可以使用websockets的应用程序的一个很好的例子是聊天应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSE连接只能将数据推送到浏览器。</font><font style="vertical-align: inherit;">在线股票报价或Twitter的更新时间表或提要是可以从SSE中受益的应用程序的很好示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，由于SSE可以完成的所有事情也都可以通过Websockets完成，因此Websockets得到了更多的关注和喜爱，并且与SSE相比，更多的浏览器支持Websockets。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，对于某些类型的应用程序来说，它可能会显得过大，并且使用诸如SSE之类的协议可以更轻松地实现后端。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，可以将SSE填充到不仅使用JavaScript本身不支持它的旧版浏览器中。</font><font style="vertical-align: inherit;">可以在</font></font><a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modernizr github页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上找到SSE polyfills的一些实现</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">陷阱：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSE受最大打开连接数的限制，这在打开各种选项卡时会特别痛苦，因为该限制是针对</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个浏览器的，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且设置为一个非常低的数字（6）。</font><font style="vertical-align: inherit;">该问题在</font></font><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=275955" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=906896" rel="noreferrer"><font style="vertical-align: inherit;">Firefox中</font></a><font style="vertical-align: inherit;">被标记为“无法解决”</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=906896" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有WS可以传输二进制数据和UTF-8，而SSE限于UTF-8。</font><font style="vertical-align: inherit;">（感谢Chado Nihi）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些具有数据包检查功能的企业防火墙在处理WebSockets时遇到问题（Sophos XG Firewall，WatchGuard，McAfee Web Gateway）。</font></font></li>
</ul>

<p><a href="http://www.html5rocks.com/tutorials/eventsource/basics/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5Rocks</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SSE上有一些很好的信息。</font><font style="vertical-align: inherit;">从该页面：</font></font></p>

<blockquote>
  <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器发送的事件与WebSockets</font></font></h1>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么选择通过WebSockets发送服务器发送的事件？</font><font style="vertical-align: inherit;">好问题。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSE被遮盖的原因之一是因为后来的API（如WebSocket）提供了更丰富的协议来执行双向全双工通信。</font><font style="vertical-align: inherit;">对于游戏，消息传递应用程序以及需要双向双向实时更新的情况，拥有双向通道更具吸引力。</font><font style="vertical-align: inherit;">但是，在某些情况下，不需要从客户端发送数据。</font><font style="vertical-align: inherit;">您只需要某些服务器操作的更新即可。</font><font style="vertical-align: inherit;">几个例子是朋友的状态更新，股票行情自动收录器，新闻提要或其他自动数据推送机制（例如，更新客户端Web SQL数据库或IndexedDB对象存储）。</font><font style="vertical-align: inherit;">如果您需要将数据发送到服务器，则XMLHttpRequest始终是朋友。</font></font></p>
  
  <p>SSEs are sent over traditional HTTP. That means they do not require a special protocol or server implementation to get working. WebSockets on the other hand, require full-duplex connections and new Web Socket servers to handle the protocol. In addition, Server-Sent Events have a variety of features that WebSockets lack by design such as automatic reconnection, event IDs, and the ability to send arbitrary events.</p>
</blockquote>

<hr>

<h1>TLDR summary:</h1>

<p><strong>Advantages of SSE over Websockets:</strong></p>

<ul>
<li>Transported over simple HTTP instead of a custom protocol</li>
<li>Can be poly-filled with javascript to "backport" SSE to browsers that do not support it yet.</li>
<li>Built in support for re-connection and event-id</li>
<li>Simpler protocol</li>
<li>No trouble with corporate firewalls doing packet inspection</li>
</ul>

<p><strong>Advantages of Websockets over SSE:</strong></p>

<ul>
<li>Real time, two directional communication.</li>
<li>Native support in more browsers</li>
</ul>

<p><strong>Ideal use cases of SSE:</strong></p>

<ul>
<li>Stock ticker streaming</li>
<li>twitter feed updating</li>
<li>Notifications to browser</li>
</ul>

<p><strong>SSE gotchas:</strong></p>

<ul>
<li>No binary support</li>
<li>Maximum open connections limit </li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
