---
layout: question
title:  如何在react render函数中创建动态href？
date:   2020-03-12T08:24:17.000Z
description: 我正在渲染帖子列表。对于每个帖子，我想呈现一个带有帖子ID的锚标记，作为href字符串的一部分。render  function(){    ret...
img: 
author: AEva伽罗
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在渲染帖子列表。</font><font style="vertical-align: inherit;">对于每个帖子，我想呈现一个带有帖子ID的锚标记，作为href字符串的一部分。</font></font></p>

<pre><code>render: function(){<font></font>
    return (<font></font>
        &lt;ul&gt;<font></font>
            {<font></font>
                this.props.posts.map(function(post){<font></font>
                    return &lt;li key={post.id}&gt;&lt;a href='/posts/'{post.id}&gt;{post.title}&lt;/a&gt;&lt;/li&gt;<font></font>
                })<font></font>
            }<font></font>
        &lt;/ul&gt;<font></font>
    );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何做，以便每个帖子都具有href的</font></font><code>/posts/1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>/posts/2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1125篇《如何在react render函数中创建动态href？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了Felix的答案， </font></font></p>

<pre><code>href={`/posts/${posts.id}`}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也会很好。</font><font style="vertical-align: inherit;">很好，因为它全都在一个字符串中。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
