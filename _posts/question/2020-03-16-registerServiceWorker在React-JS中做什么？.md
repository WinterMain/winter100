---
layout: question
title:  registerServiceWorker在React JS中做什么？
date:   2020-03-16T07:23:11.000Z
description: 我是React的新手，我想知道以下代码中的registerServiceWorker（）的目的是什么？import React from 'react...
img: 
author: Mandy小胖Pro
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React的新手，我想知道以下代码中的registerServiceWorker（）的目的是什么？</font></font></p>

<pre><code>import React from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
import App from './App';<font></font>
import registerServiceWorker from './registerServiceWorker';<font></font>
<font></font>
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));<font></font>
registerServiceWorker();<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖L</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务工作者是一个Web API，可帮助您缓存资产和其他文件，以便当用户脱机或网络速度较慢时，他/她仍然可以在屏幕上看到结果，因此，它可以帮助您改善用户体验，这是您现在应该了解的关于服务人员的知识。</font><font style="vertical-align: inherit;">这一切都是关于向您的站点添加脱机功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，React为您创建一个服务工作者，而无需您进行配置。</font><font style="vertical-align: inherit;">了解更多;</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN服务人员</font></font></a></li>
<li><a href="https://developers.google.com/web/fundamentals/primers/service-workers/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员，Google网络基础知识 </font></font></a></li>
<li><a href="https://css-tricks.com/serviceworker-for-offline/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用服务工作者的简单脱机站点，CSS技巧</font></font></a></li>
<li><a href="https://www.smashingmagazine.com/2016/02/making-a-service-worker/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器工作者：案例研究，Smashing Magazine</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务人员将在没有网络的情况下脱机使用网站数据，就像制作PWA。</font><font style="vertical-align: inherit;">请参考此链接</font></font><a href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PWA</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以了解有关实现以及如何使用registerServiceWorker（）的更多信息。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
