---
layout: question
title:  Firebase + Nextjs-用户会话共享
date:   2020-03-23T13:04:01.000Z
description: 问题：我需要在应用程序的服务器端发出数据库请求，这是使用Next.js和Firebase编写的（我知道这不是最好的组合），以便为客户端准备初始数据。...
img: 
author: 西里神奇
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在应用程序的服务器端发出数据库请求，这是使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js和Firebase</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写的</font><font style="vertical-align: inherit;">（我知道这不是最好的组合），以便为客户端准备初始数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我想使用在服务器客户端运行的相同代码（使用服务器上的firebase客户端SDK进行数据库请求）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我不知道如何与服务器端共享用户会话。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器没有用户在客户端SDK中登录，因此即使客户端可以访问受限资源（它知道当前用户），也会返回403以获取受限资源。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了以下方法：</font></font></h1>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义令牌破解（无法使用ID令牌唱歌）</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我必须将用户ID令牌添加到Cookie中。</font><font style="vertical-align: inherit;">这样，令牌将附加到每个后续请求中，并且服务器端可以生成自定义令牌（我无法使用ID令牌登录），然后我可以通过该令牌在应用程序的服务器端以及客户端（如果启用了持久性，则已经登录）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很大的矫kill过正，我应该能够以与客户端相同的方式在服务器上登录，因为它实际上就像是客户端本身（它不执行任何特权操作）。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器上第二次登录</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种解决方案是通过cookie发送凭据（存在安全风险），然后第二次登录服务器。</font><font style="vertical-align: inherit;">这不适用于一次性身份验证会话（例如一次性电子邮件链接，因为服务器第二次有效登录）。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方说明没有帮助</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Next.js存储库中，有一个关于firbease auth的示例，该示例现在已注释掉了服务器端数据的获取。</font><font style="vertical-align: inherit;">即使未注释掉它也不检查用户权限，如果找到用户，它也会直接获取数据</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-firebase-authentication" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/tree/canary/examples/with-firebase认证</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3040篇《Firebase + Nextjs-用户会话共享》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是相同的设置（Next.js和Firebase），通过React上下文API设置全局会话并不容易。</font><font style="vertical-align: inherit;">我遵循了本指南，并成功完成了</font></font><a href="https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
