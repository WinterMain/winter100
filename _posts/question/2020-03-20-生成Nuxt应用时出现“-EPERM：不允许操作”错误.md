---
layout: question
title:  生成Nuxt应用时出现“ EPERM：不允许操作”错误
date:   2020-03-20T06:22:42.000Z
description: 运行时出现以下间歇错误之一npm run dev：EPERM  operation not permitted, mkdir 'D \projects...
img: 
author: 村村番长
category: question
answer: 1
tags: npm Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时出现以下间歇错误之一</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><code>EPERM: operation not permitted, mkdir 'D:\projects\my_project\.nuxt\components'</code></p>

<p><code>EPERM: operation not permitted, lstat 'D:\projects\my_project\.nuxt</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>npm cache clear</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无济于事。</font><font style="vertical-align: inherit;">有人将此问题归因于npm安装在某个网络上共享的文件夹，而不是我的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是一个随机问题。</font><font style="vertical-align: inherit;">我几个小时后才再次尝试，现在可以了。</font><font style="vertical-align: inherit;">但是，在提出这个问题时，无论我尝试多少次，它都不会起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到过同样的问题。</font><font style="vertical-align: inherit;">我相信与VS Code有关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我关闭了VS Code并停止了控制台。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我用“ npm run dev”重建Nuxt并重新打开VS Code。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
现在正在工作。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
