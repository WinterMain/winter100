---
layout: question
title:  如何用Koa解析multipart / form-data主体？
date:   2020-03-30T09:17:54.000Z
description: 因为我花了一些（太多）时间来弄清楚这个简单的要求。我在这里记录了multipart/form-data用Koa解析正文的方法。就我而言，之所以会感到困...
img: 
author: 飞云
category: question
answer: 0
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我花了一些（太多）时间来弄清楚这个简单的要求。</font><font style="vertical-align: inherit;">我在这里记录了</font></font><code>multipart/form-data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用Koa解析正文</font><font style="vertical-align: inherit;">的方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，之所以会感到困惑，是因为那里存在可供选择的替代方案：</font></font></p>

<ul>
<li><a href="https://github.com/dlau/koa-body"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考阿体</font></font></a></li>
<li><a href="https://github.com/tunnckoCore/koa-better-body"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的身体</font></font></a></li>
<li><a href="https://github.com/thomseddon/koa-body-parser"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa-body解析器</font></font></a></li>
<li><a href="https://github.com/koajs/bodyparser"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa-bodyparser</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想找到最简约/最接近</font></font><code>express/koa/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式/做事的哲学。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样 </font><font style="vertical-align: inherit;">下面。</font><font style="vertical-align: inherit;">在接受的答案。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
