---
layout: question
title:  为什么我们需要诸如Pusher和Socket.io之类的产品来建立websocket连接？
date:   2020-03-16T06:00:55.000Z
description: 我最近在研究Laravel聊天练习应用程序时，一直在阅读有关Websocket和SaaS的信息，例如Pusher和Socket.io。我不明白的是，为什么...
img: 
author: 老丝Tony
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近在研究Laravel聊天练习应用程序时，一直在阅读有关Websocket和SaaS的信息，例如Pusher和Socket.io。</font><font style="vertical-align: inherit;">我不明白的是，为什么我们需要外部软件来建立websocket连接？</font><font style="vertical-align: inherit;">像Laravel这样的服务器代码不能直接与Vue.js这样的前端建立连接吗？</font><font style="vertical-align: inherit;">为什么它必须经过像Pusher和Socket.io这样的中间人？</font><font style="vertical-align: inherit;">对不起，菜鸟问题。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1723篇《为什么我们需要诸如Pusher和Socket.io之类的产品来建立websocket连接？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短的答案？</font><font style="vertical-align: inherit;">您不必使用它们。</font><font style="vertical-align: inherit;">亲自编写自己的服务器和客户端Websocket实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更长的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要使用Laravel？</font><font style="vertical-align: inherit;">我可以直接使用PHP来完成所有这些工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要使用Vue？</font><font style="vertical-align: inherit;">我可以用香草javascript做所有这些事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们之所以使用库和框架，是因为它们抽象出了实现的细节，并使构建产品变得更加容易。</font><font style="vertical-align: inherit;">他们处理您根本不会想到的情况</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，甚至您甚至不知道自己不知道的事情，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它们被成千上万的开发人员所使用，并且他们遇到和修复的所有知识和错误都融入了实施。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是软件工程，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码重用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的标志之一</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不要重复自己，也不必编写任何不必要的软件。</font><font style="vertical-align: inherit;">它使您可以专注于构建满足特定需求的解决方案，而不必在构建解决方案之前专注于构建一堆基础架构。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从未使用过Pusher，但是看起来，是的，它是SaaS产品。</font><font style="vertical-align: inherit;">但是</font></font><a href="https://github.com/socketio/socket.io" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Socket.io是开源的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
