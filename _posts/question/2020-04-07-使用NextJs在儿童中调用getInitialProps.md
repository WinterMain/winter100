---
layout: question
title:  使用NextJs在儿童中调用getInitialProps
date:   2020-04-07T03:49:01.000Z
description: 我正在使用此示例在Next.js中实现数据获取：https //github.com/zeit/next.js/blob/master/example...
img: 
author: LGil
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用此示例在Next.js中实现数据获取：</font></font></p>

<p><a href="https://github.com/zeit/next.js/blob/master/examples/data-fetch/pages/index.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/blob/master/examples/data-fetch/pages/index.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先尝试通过</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的一个组件中</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">位来进行</font><font style="vertical-align: inherit;">尝试，</font><font style="vertical-align: inherit;">但是除非将其放在主页面之一中，否则它不会被调用。</font><font style="vertical-align: inherit;">我阅读了一些相关的讨论，我可能需要</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从页面/父母处</font><font style="vertical-align: inherit;">调用孩子们的讨论，</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不清楚如何进行。</font><font style="vertical-align: inherit;">我也想知道是否应该将调用保留在页面本身中，以适当的技术为限。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4120篇《使用NextJs在儿童中调用getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用高阶组件（HOC）。</font><font style="vertical-align: inherit;">页面作为HOC的子级。</font><font style="vertical-align: inherit;">您可以</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从HOC和页面</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例：</font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-higher-order-component" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-higher-order-component" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/zeit/next.js/tree/canary/examples/with-higher-order-component</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯..直接来自他的NextJS文档:)</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：getInitialProps不能在子组件中使用。</font><font style="vertical-align: inherit;">仅在页面中。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
