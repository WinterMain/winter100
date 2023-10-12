---
layout: question
title:  在什么情况下，AJAX长/短轮询优于HTML5 WebSockets？
date:   2020-03-24T07:02:03.000Z
description: 我正在为朋友构建一个小型聊天应用程序，但不确定如何及时获取信息，而这不像强制刷新页面那样手动或基本。目前，我正在使用简单的AJAX来实现此功能，但是这...
img: 
author: 小胖
category: question
answer: 2
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为朋友构建一个小型聊天应用程序，但不确定如何及时获取信息，而这不像强制刷新页面那样手动或基本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在使用简单的AJAX来实现此功能，但是这样做的缺点是，在经过短计时器后会定期命中服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在研究长/短轮询时，我遇到了HTML5 WebSockets。</font><font style="vertical-align: inherit;">这</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很容易实现，但是我不确定是否存在一些隐藏的缺点。</font><font style="vertical-align: inherit;">例如，我认为WebSockets仅受某些浏览器支持。</font><font style="vertical-align: inherit;">我应该知道WebSockets还有其他缺点吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既然两种技术似乎都做同样的事情，那么在哪种情况下，一个人会优先使用一个？</font><font style="vertical-align: inherit;">更具体地说，HTML5 WebSockets是否已使AJAX长/短轮询无效，还是有充分的理由偏爱AJAX而不是WebSockets？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3416篇《在什么情况下，AJAX长/短轮询优于HTML5 WebSockets？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于聊天应用程序或与服务器进行持续对话的任何其他应用程序，是</font></font><code>WebSockets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳选择。</font><font style="vertical-align: inherit;">但是，您只能</font></font><code>WebSockets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与支持它们的服务器一起使用，因此，如果无法安装所需的库，则可能会限制您使用它们的能力。</font><font style="vertical-align: inherit;">在这种情况下，您将需要使用</font></font><code>Long Polling</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得类似的功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您已省略的一项有争议的技术是服务器发送的事件/事件源。  </font></font><a href="https://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是长轮询，Websocket，服务器发送事件（SSE）和Comet？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对所有这些都有很好的讨论。</font><font style="vertical-align: inherit;">请记住，其中一些服务器比其他服务器更易于集成。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
