---
layout: question
title:  HashRouter与BrowserRouter
date:   2020-03-14T10:18:42.000Z
description: 我是编程的新手，如果我阅读了官方文档，这会使我很难理解。 我从这里阅读有关React Router 4的信息在这篇文章中，作者在谈论<HashRo...
img: 
author: 乐理查德
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是编程的新手，如果我阅读了官方文档，这会使我很难理解。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><a href="https://medium.com/@djoepramono/react-router-4-gotchas-2ecd1282de65" rel="noreferrer"><font style="vertical-align: inherit;">从这里</font></a><font style="vertical-align: inherit;">阅读有关</font></font><a href="https://medium.com/@djoepramono/react-router-4-gotchas-2ecd1282de65" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router 4的信息</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这篇文章中，作者在谈论</font></font><code>&lt;HashRouter&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;BrowserRouter&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是他提到的 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HashRouter</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上使用URL中的哈希来呈现组件。</font><font style="vertical-align: inherit;">由于我正在建立一个静态的单页网站，因此需要使用它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BrowserRouter</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它使用HTML5历史记录API呈现组件。</font><font style="vertical-align: inherit;">可以通过pushState和replaceState修改历史记录。</font><font style="vertical-align: inherit;">更多信息可以在这里找到</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我都没有这两者的意义和用例，就像他说</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过pushState和replaceState修改历史记录</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font><strong><font style="vertical-align: inherit;">使用URL中的哈希值来呈现组件的</font></strong><strong><font style="vertical-align: inherit;">历史记录</font></strong><font style="vertical-align: inherit;">时的意思一样。</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管对BrowserRouter的第一种解释对我来说完全是模糊的，但对HashRouter的第二种解释也没有意义，例如为什么有人在URL中使用Hash（＃）来呈现组件？ </font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小宇宙十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“用例”</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HashRouter：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们有不需要后端的小型客户端应用程序时，我们可以使用，</font></font><code>HashRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为当我们在URL /位置栏中使用哈希时，浏览器不会发出服务器请求。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BrowserRouter：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们有支持后端的大型生产就绪应用程序时，建议使用</font></font><code>&lt;BrowserRouter&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本书参考：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学习React：React和Redux的功能Web开发作者：Alex Banks，Eve Porcello</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小LEY伽罗</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言，BrowserRouter是一个hack，使用它唯一获得的就是美观的URL。</font><font style="vertical-align: inherit;">为什么是骇客？</font><font style="vertical-align: inherit;">因为您通过覆盖浏览器的默认行为来诱骗浏览器加载客户端路由，以从服务器获取页面。</font><font style="vertical-align: inherit;">将BrowserRouter配置为在生产模式下与Webpack一起使用是一个主要的麻烦。</font><font style="vertical-align: inherit;">另外，即使没有检查其背后的代码，我也可以肯定它的速度较慢，因为需要额外检查请求的路由是否为服务器上的404，以加载客户端页面。</font><font style="vertical-align: inherit;">HashRouter可以直接使用，可以与旧的浏览器兼容，并且可以与Webpack一起使用而无需黑客。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><h1><code>BrowserRouter</code></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史记录API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即它不适用于旧版浏览器（IE 9及更低版本和同期版本）。</font><font style="vertical-align: inherit;">客户端React应用程序能够维护干净的路由，例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">example.com/react/route，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是需要Web服务器的支持。</font><font style="vertical-align: inherit;">通常，这意味着应该为单页应用程序配置Web服务器，即，</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ react / route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径或服务器端的任何其他路由提供相同的服务。</font><font style="vertical-align: inherit;">在客户端，</font></font><code>window.location.pathname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由React路由器解析。</font><font style="vertical-align: inherit;">React router渲染一个已配置为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ react / route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染的组件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，设置可能涉及服务器端渲染，</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能包含特定于当前路线的渲染组件或数据。</font></font></p>

<h1><code>HashRouter</code></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用URL哈希，它对受支持的浏览器或Web服务器没有任何限制。</font><font style="vertical-align: inherit;">服务器端路由独立于客户端路由。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向后兼容的单页应用程序可以将其用作</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">example.com/#/react/route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该设置不能通过服务器端呈现进行备份，因为它是服务器端提供的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃/ react / route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> URL哈希不能从服务器端读取。</font><font style="vertical-align: inherit;">在客户端，</font></font><code>window.location.hash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由React路由器解析。</font><font style="vertical-align: inherit;">与</font><font style="vertical-align: inherit;">相似，</font><font style="vertical-align: inherit;">React router会渲染一个已配置为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ react / route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染的组件</font></font><code>BrowserRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的是，</font></font><code>HashRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用例不仅限于SPA。</font><font style="vertical-align: inherit;">网站可能具有旧式或搜索引擎友好的服务器端路由，而React应用程序可能是在URL中维护其状态的小部件，例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">example.com/server/side/route#/react/route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ server / side / route一起</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器端提供一些包含React应用程序的页面</font><font style="vertical-align: inherit;">，然后在客户端，React路由器会渲染一个已配置为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ react / route</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染的组件</font><font style="vertical-align: inherit;">，类似于先前的场景。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西里</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想添加一个用例。</font><font style="vertical-align: inherit;">使用BrowserRouter或Router时，它将在我们的节点服务器上正常工作。</font><font style="vertical-align: inherit;">因为它了解客户端路由（预配置）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我们在Apache服务器（仅在GoDaddy上说PHP）上部署构建React应用程序时，路由将无法按预期工作。</font><font style="vertical-align: inherit;">它将进入404，为此我们需要配置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.htaccess</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">之后，对于我来说，每个点击/ URL，也都向服务器发送请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，我们最好使用HASH路由（＃）。</font><font style="vertical-align: inherit;">＃我们在html页面上使用它来遍历HTML内容，它不会导致服务器请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上述情况下，我们可以使用HashRouting，即＃后面的所有url，我们可以将路由规则用作SPA。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神无</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HashRouter在URL中使用哈希符号，这会导致服务器请求中忽略所有后续URL路径内容（即，您将服务器获取“ www.mywebsite.com/#/person/john” .mywebsite.com”。结果，服务器将返回pre＃URL响应，然后post＃路径将由您的客户端react应用解析。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> BrowserRouter不会将＃符号附加到您的URL，但是当您尝试链接到页面或重新加载页面时会产生问题。</font><font style="vertical-align: inherit;">如果客户端响应应用程序中存在显式路由，但服务器上不存在显式路由，则重新加载和链接（直接击中服务器的任何内容）将返回404 not found错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论</font></font><code>BrowserRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>HashRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件是在阵营第4代路由器作为子类介绍</font></font><code>Router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。</font><font style="vertical-align: inherit;">只需</font></font><code>BrowserRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将UI与浏览器中的当前URL同步，即可通过HTML-5 History API来完成。</font><font style="vertical-align: inherit;">另一方面，</font></font><code>HashRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用URL的哈希部分进行同步。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
