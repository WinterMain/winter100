---
layout: question
title:  Twitter Bootstrap选项卡：转到页面重新加载或超链接上的“特定”选项卡
date:   2020-03-23T07:16:18.000Z
description: 我正在开发一个使用Twitter的Bootstrap Framework及其Bootstrap Tabs JS的网页。除了一些小问题外，它的工作效果非常好...
img: 
author: 伽罗
category: question
answer: 2
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开发一个使用Twitter的Bootstrap Framework及其</font></font><a href="http://twitter.github.com/bootstrap/javascript.html#tabs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap Tabs JS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的网页</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除了一些小问题外，它的工作效果非常好，其中一个小问题是我不知道如何直接从外部链接转到特定选项卡。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;a href="facility.php#home"&gt;Home&lt;/a&gt;<font></font>
&lt;a href="facility.php#notes"&gt;Notes&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">单击外部页面上的链接时，</font></strong><font style="vertical-align: inherit;">应分别转到“主页”选项卡和“注释”选项卡</font></font><strong><font style="vertical-align: inherit;"></font></strong></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对任何人都重要，那么下面的代码很小，并且完美无缺，可以从URL中获取单个哈希值并显示出来：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    window.onload = function () {<font></font>
        let url = document.location.toString();<font></font>
        let splitHash = url.split("#");<font></font>
        document.getElementById(splitHash[1]).click();<font></font>
    };<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的作用是检索ID并触发click事件。</font><font style="vertical-align: inherit;">简单。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是遇到了这个问题，但需要处理多个选项卡级别。</font><font style="vertical-align: inherit;">该代码相当丑陋（请参见评论），但是可以完成它的工作：</font></font><a href="https://gist.github.com/JensRantil/4721860" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://gist.github.com/JensRantil/4721860" rel="nofollow"><font style="vertical-align: inherit;">//gist.github.com/JensRantil/4721860</font></a><font style="vertical-align: inherit;">希望其他人会发现它有用（并随时提出更好的解决方案！）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
