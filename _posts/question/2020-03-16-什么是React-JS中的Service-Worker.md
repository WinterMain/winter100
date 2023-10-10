---
layout: question
title:  什么是React JS中的Service Worker
date:   2020-03-16T02:05:06.000Z
description: 创建React应用时，默认情况下会调用Service Worker。为什么要使用服务人员？默认调用的原因是什么？...
img: 
author: 伽罗JinJin西门
category: question
answer: 2
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建React应用时，默认情况下会调用Service Worker。</font><font style="vertical-align: inherit;">为什么要使用服务人员？</font><font style="vertical-align: inherit;">默认调用的原因是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1659篇《什么是React JS中的Service Worker》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong>In simple and plain words, it’s a script that browser runs in the background and has whatsoever no relation with web pages or the DOM, and provide out of the box features. It also helps you cache your assets and other files so that when the user is offline or on slow network.</strong> </p>

<p><em>Some of these features are proxying network requests, push notifications and background sync. Service workers ensure that the user has a rich offline experience.</em></p>

<p>You can think of the service worker as someone who sits between the client and server and all the requests that are made to the server pass through the service worker. Basically, a middle man. Since all the request pass through the service worker, it is capable to intercept these requests on the fly.</p>

<p><a href="https://i.stack.imgur.com/ldRJk.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ldRJk.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的应用程序可能不需要服务人员。</font><font style="vertical-align: inherit;">如果要使用create-react-app创建项目，则默认情况下会调用该项目</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员在很好的解释</font></font><strong><a href="https://developers.google.com/web/fundamentals/primers/service-workers/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章。</font><font style="vertical-align: inherit;">总结一下</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A </font></font><code>service worker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个脚本，您的浏览器在后台运行，与网页分开，为不需要网页或用户交互的功能打开了大门。</font><font style="vertical-align: inherit;">如今，它们已经包含了诸如</font></font><code>push notifications</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>background sync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和具有的功能
   </font></font><code>ability to intercept and handle network requests</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，包括
   </font></font><code>programmatically managing a cache of responses</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来，服务人员可能会支持诸如</font></font><code>periodic sync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">其他功能
   </font></font><code>geofencing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据此</font></font><strong><a href="https://github.com/facebook/create-react-app/pull/1728" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PR创建反应应用</font></font></a></strong></p>

<blockquote>
  <p><code>Service workers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过create-react-app引入
   </font></font><code>SWPrecacheWebpackPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p>Using a server worker with a cache-first strategy offers performance
  advantages, since the network is no longer a bottleneck for fulfilling
  navigation requests. It does mean, however, that developers (and
  users) will only see deployed updates on the "N+1"
  visit to a page, since previously cached resources are updated in the
  background.</p>
</blockquote>

<p>The call to <code>register service worker</code> is enabled by default in new apps but you can always remove it and then you’re back to regular behaviour.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
