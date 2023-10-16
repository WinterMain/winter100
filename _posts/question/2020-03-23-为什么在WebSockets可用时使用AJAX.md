---
layout: question
title:  为什么在WebSockets可用时使用AJAX？
date:   2020-03-23T07:27:10.000Z
description: 我已经使用WebSockets一段时间了，我选择使用Node服务器和WebSockets为我在大学的最后一年的项目创建一个敏捷项目管理工具。我发现使用We...
img: 
author: ItachiPro古一
category: question
answer: 5
tags: ajax Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用WebSockets一段时间了，我选择使用Node服务器和WebSockets为我在大学的最后一年的项目创建一个敏捷项目管理工具。</font><font style="vertical-align: inherit;">我发现使用WebSockets可以使应用程序每秒处理的请求数量增加624％。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，自启动项目以来，我已经阅读了安全漏洞，并且一些浏览器默认选择禁用WebSocket。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使我想到了一个问题：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当WebSocket似乎在降低延迟和资源开销方面做得很好时，为什么要使用AJAX？AJAX有什么比WebSocket更好的功能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2910篇《为什么在WebSockets可用时使用AJAX？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP和Websockets之间差异的示例，以客户端大小的库的形式出现，它可以处理客户端上的Websocket端点（如REST API）和RESTful端点（如Websockets）。
</font></font><a href="https://github.com/mikedeshazer/sockrest" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/mikedeshazer/sockrest</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
同样，对于那些尝试使用客户端上的websocket API或反之亦然的人。</font><font style="vertical-align: inherit;">libs / sockrest.js几乎可以清楚表明它们之间的差异（或者应该如此）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebSockets在较旧的Web浏览器中不起作用，并且</font></font><a href="https://stackoverflow.com/questions/1253683/what-browsers-support-html5-websocket-api"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> WebSocket的浏览器</font><font style="vertical-align: inherit;">通常具有不同的实现。</font><font style="vertical-align: inherit;">那几乎是唯一的好理由，为什么他们一直没有使用它们代替AJAX。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所读到的有关网络套接字和安全性的大多数抱怨来自网络浏览器安全性和防火墙安全性工具的安全性供应商。</font><font style="vertical-align: inherit;">问题是他们不知道如何对websockets流量进行安全性分析，因为一旦它完成了从HTTP到websocket二进制协议的升级，数据包的内容及其含义就取决于应用程序（基于您所编程的内容）。</font><font style="vertical-align: inherit;">对于这些公司的生计是基于对您所有互联网流量进行分析和分类的公司而言，这显然是一个物流梦night。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我们无法对Websockets和HTTP进行清晰的比较，因为它们既不是竞争对手，也不是解决相同的问题。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Websocket是用于以近实时方式处理长期存在的双向数据流的绝佳选择，而REST非常适合偶尔进行的通信。</font><font style="vertical-align: inherit;">使用websocket是一项可观的投资，因此对于偶尔的连接来说是一个过大的杀伤力。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会发现，当存在高负载时，Websockets会做得更好，在某些情况下，HTTP会稍快一些，因为它可以利用缓存。</font><font style="vertical-align: inherit;">将REST与Websockets进行比较就像将苹果与桔子进行比较。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们应该检查哪种解决方案可以为我们的应用程序提供更好的解决方案，哪种解决方案最适合我们的使用案例。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了较旧的浏览器（包括IE9，因为从IE10开始将支持WebSockets）存在问题外，尚不支持WebSockets的网络中介（包括透明代理，反向代理和负载平衡器）仍然存在很大问题。</font><font style="vertical-align: inherit;">有些移动运营商会完全阻止WebSocket通信（即，在HTTP UPGRADE命令之后）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着时间的流逝，WebSockets将得到越来越多的支持，但是与此同时，您应该始终具有基于HTTP的后备方法，用于将数据发送到浏览器。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
