---
layout: question
title:  如何保持Google Cloud Functions的温暖？
date:   2020-03-20T06:17:24.000Z
description: 我知道这首先错过了使用Cloud Functions的意义，但是在我的特定情况下，我正在使用Cloud Functions，因为这是将Next.js与Fi...
img: 
author: 斯丁
category: question
answer: 3
tags: 谷歌云函数 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这首先错过了使用Cloud Functions的意义，但是在我的特定情况下，我正在使用Cloud Functions，因为这是将Next.js与Firebase Hosting桥接的唯一方法。</font><font style="vertical-align: inherit;">我不需要使其具有成本效益，等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽这么说，Cloud Functions的冷启动时间简直无法忍受，而且还不能投入生产，对于我的样板，平均大约需要10到15秒。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我当然看过Google的这段视频（</font></font><a href="https://www.youtube.com/watch?v=IOXrwFqR6kY" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.youtube.com/watch?v=IOXrwFqR6kY</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），其中谈到了如何减少冷启动时间。</font><font style="vertical-align: inherit;">简而言之：1）修剪依赖关系； 2）依赖关系版本在Google网络缓存中的尝试和错误； 3）延迟加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，嘿，1）我可以裁剪的依赖项太多了。</font><font style="vertical-align: inherit;">2）我怎么知道哪个版本的缓存更多？</font><font style="vertical-align: inherit;">3）只有太多依赖项可以延迟加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是一起避免冷启动。</font><font style="vertical-align: inherit;">从本质上讲，我可以（仅一个）保持云功能的温暖，这是什么好方法呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2537篇《如何保持Google Cloud Functions的温暖？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有“无服务器”计算提供商，总会有某种形式的冷启动成本无法消除。</font><font style="vertical-align: inherit;">即使您能够通过ping通使单个实例保持活动状态，系统也可以启动任意数量的其他实例来处理当前负载。</font><font style="vertical-align: inherit;">这些新实例将产生冷启动成本。</font><font style="vertical-align: inherit;">然后，当负载减少时，不必要的实例将被关闭。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如您所发现的，有许多方法可以使冷启动成本降至最低，但无法消除这些成本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您绝对要求热服务器处理24/7的请求，则需要管理自己的运行24/7的服务器（并支付运行24/7的服务器的费用）。</font><font style="vertical-align: inherit;">如您所见，无服务器的好处是您无需管理或扩展自己的服务器，而只为使用的服务器付费，但是与项目相关的冷启动成本却不可预测。</font><font style="vertical-align: inherit;">这就是权衡。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁猴子</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照以下说明通过cron作业触发它：</font><a href="https://cloud.google.com/scheduler/docs/creating" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://cloud.google.com/scheduler/docs/creating" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//cloud.google.com/scheduler/docs/creating</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不是第一个提出问题的人;-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是将远程服务配置为定期调用您的函数，以便单个实例保持活动状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的问题尚不清楚，但我认为您的Function提供了HTTP端点。</font><font style="vertical-align: inherit;">在这种情况下，找到可配置为每x秒|分钟进行一次HTTP调用的运行状况检查或cron服务，并将其指向您的Function。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要花些时间去寻找Goldilocks时期-并不是经常浪费您的精力，也不太可能是因为它死了-但这就是其他人所做的。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
