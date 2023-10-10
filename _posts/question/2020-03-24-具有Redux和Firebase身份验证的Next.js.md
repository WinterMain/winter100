---
layout: question
title:  具有Redux和Firebase身份验证的Next.js
date:   2020-03-24T03:15:23.000Z
description: 我正在与Redux一起使用Next.js，并且我想集成Firebase身份验证，但是对于服务器如何返回由Redux管理的经过身份验证的用户特定数据而不与其...
img: 
author: Gil
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在与Redux一起使用Next.js，并且我想集成Firebase身份验证，但是对于服务器如何返回由Redux管理的经过身份验证的用户特定数据而不与其他用户的数据冲突，我感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个过程对我来说还不清楚。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何结合了Next.js，Redux和Firebase身份验证的有效示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3294篇《具有Redux和Firebase身份验证的Next.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用下面的示例，您可以在firebase.auth（）。onAuthStateChanged期间调度一些操作，以使用新的用户信息刷新您的redux存储</font></font></p>

<p><a href="https://github.com/zeit/next.js/tree/canary/examples/with-firebase-authentication" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/tree/canary/examples/with-firebase-authentication</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
