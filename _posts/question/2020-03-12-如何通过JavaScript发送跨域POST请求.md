---
layout: question
title:  如何通过JavaScript发送跨域POST请求？
date:   2020-03-12T06:48:17.000Z
description: 如何通过JavaScript发送跨域POST请求？注意-它不应该刷新页面，之后我需要抓取并解析响应。...
img: 
author: AJinJin
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何通过JavaScript发送跨域POST请求？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意-它不应该刷新页面，之后我需要抓取并解析响应。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1021篇《如何通过JavaScript发送跨域POST请求？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用YQL自定义表+ JS XHR应该可以，请查看：</font><a href="http://developer.yahoo.com/yql/guide/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://developer.yahoo.com/yql/guide/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.yahoo.com/yql/guide/index.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用它来做一些客户端（js）html抓取，工作正常（我有完整的音频播放器，可以搜索互联网/播放列表/歌词/最新的FM信息，所有客户端js + YQL）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个老问题，但是某些新技术可能会帮助某人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您具有对另一台服务器的管理访问权限，则可以使用开源Forge项目来完成跨域POST。</font><font style="vertical-align: inherit;">Forge提供了一个跨域JavaScript XmlHttpRequest包装器，该包装器利用了Flash的原始套接字API。</font><font style="vertical-align: inherit;">甚至可以通过TLS完成POST。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要对要发布到的服务器进行管理访问的原因是，您必须提供允许从您的域进行访问的跨域策略。</font></font></p>

<p><a href="http://github.com/digitalbazaar/forge" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://github.com/digitalbazaar/forge</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最好的方法是将XMLHttpRequest（例如jQuery中的$ .ajax（），$。post（））与跨域资源共享polyfill一起使用</font></font><a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#wiki-CORS" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Modernizr/Modernizr/wiki/HTML5-跨浏览器填充＃wiki-CORS</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建两个隐藏的iframe（在CSS样式中添加“ display：none;”）。</font><font style="vertical-align: inherit;">使第二个iframe指向您自己域中的某个内容。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个隐藏的表单，将其方法设置为target =您的第一个iframe进行“发布”，还可以选择将enctype设置为“ multipart / form-data”（我想您要进行POST，因为您想发送图片等分段数据？）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备好后，将表单Submit（）设为POST。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以让另一个域返回将与iframes进行跨域通信的javascript（</font></font><a href="http://softwareas.com/cross-domain-communication-with-iframes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://softwareas.com/cross-domain-communication-with-iframes</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），那么您很幸运，可以捕获响应也一样</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，如果要将服务器用作代理，则可以避免所有这些情况。</font><font style="vertical-align: inherit;">只需将表单提交到您自己的服务器，该服务器会将请求代理到另一台服务器（假设未将另一台服务器设置为注意到IP差异），获取响应并返回您想要的任何内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高级...。您需要在服务器上进行cname设置，以便other-serve.your-server.com指向other-server.com。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的页面动态创建了一个不可见的iframe，它充当您到other-server.com的传输。</font><font style="vertical-align: inherit;">然后，您必须通过JS从您的页面与other-server.com进行通信，并具有将数据返回到您的页面的回调。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能，但是需要your-server.com和other-server.com的协调</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font><a href="http://taiyolab.com/mbtweet/scripts/twitterapi_call.js" rel="noreferrer"><font style="vertical-align: inherit;">http://taiyolab.com/mbtweet/scripts/twitterapi_call.js中</font></a><font style="vertical-align: inherit;">的</font></font><code>post_method</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">-上述iframe方法的一个很好的例子。</font></font><a href="http://taiyolab.com/mbtweet/scripts/twitterapi_call.js" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
