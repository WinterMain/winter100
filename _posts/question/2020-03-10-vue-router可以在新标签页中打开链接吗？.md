---
layout: question
title:  vue-router可以在新标签页中打开链接吗？
date:   2020-03-10T06:06:21.000Z
description: 我有一个摘要页面和一个详细子页面。所有的路线都使用vue-router（v 0.7.x）使用​​程序化导航来实现，如下所示：this.$router....
img: 
author: 宝儿前端
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个摘要页面和一个详细子页面。</font><font style="vertical-align: inherit;">所有的路线都使用</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（v 0.7.x）使用​​程序化导航</font><font style="vertical-align: inherit;">来实现，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>this.$router.go({ path: "/link/to/page" })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而，当从摘要页面的子页面我的路线，我需要通过添加打开一个新的选项卡中的子页，就像一个会</font></font><code>_target="blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以一个</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法做到这一点？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ItachiJinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些想知道答案是否定的人。</font><font style="vertical-align: inherit;">请参阅</font><font style="vertical-align: inherit;">github上的</font><font style="vertical-align: inherit;">相关</font></font><a href="https://github.com/vuejs/vue-router/issues/768#issuecomment-253505307" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问：vue-router是否可以以编程方式在新标签页中打开链接</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答：不可以，请使用普通链接。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
