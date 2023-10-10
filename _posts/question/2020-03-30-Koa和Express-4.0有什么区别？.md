---
layout: question
title:  Koa和Express 4.0有什么区别？
date:   2020-03-30T09:18:49.000Z
description: Koa和Express 4.0都是相当新的东西，据我所读，Koa是由Express团队生产的。据我了解，Koa要求节点的功能仅在节点的0.11（不稳定...
img: 
author: 猴子
category: question
answer: 1
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koa和Express 4.0都是相当新的东西，据我所读，Koa是由Express团队生产的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，Koa要求节点的功能仅在节点的0.11（不稳定分支）中可用，并且还使用生成器。</font><font style="vertical-align: inherit;">Express 4.0似乎只是Express框架的下一个版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我完全缺少任何差异吗？</font><font style="vertical-align: inherit;">根据Express团队的公开声明，Koa和Express将来可能会合并吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koa不提供Express之类的功能，例如路由，模板化，发送文件和JSONP。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa公开自己的ctx.request和ctx.response对象，而不是节点的req和res对象，即形式（req，res，next）的函数与Koa不兼容。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koa可以看作是node.js的http模块的抽象，而Express是Node.js的应用程序框架。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更详细的答案，您可以访问此链接上的官方文档：</font><a href="https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/koajs/koa/blob/master/docs/koa-vs-express.md</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
