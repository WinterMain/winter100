---
layout: question
title:  如何评估data属性中的Vue.js组件道具？
date:   2020-03-30T10:25:22.000Z
description: 我有2个组成部分：Post和Comments。在Post组件内部，有Comment组件，它具有3个道具：postId，numCom（评论数）和comm...
img: 
author: JinJin
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有2个组成部分：</font></font><code>Post</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Post组件内部，有Comment组件，它具有3个道具：</font></font><code>postId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>numCom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（评论数）和</font></font><code>comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（数组）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到评论，并用道具传递数组，现在我想在评论组件中检索该数组并将其添加到数据中，以便随后添加/删除评论等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码</font></font><code>Comments.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>props: ['id', 'numCom', 'comments'],<font></font>
data: function() {<font></font>
  return {<font></font>
     newMessage: "",<font></font>
     loading: false,<font></font>
     allComments: this.comments,<font></font>
     num: this.numCom,<font></font>
   }<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这是行不通的。</font><font style="vertical-align: inherit;">在Vue开发人员工具中，我可以看到</font></font><code>comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop充满了注释，但是</font></font><code>allComments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">array为空。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3866篇《如何评估data属性中的Vue.js组件道具？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font><code>comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop在创建组件时没有值（这是唯一</font></font><code>allComments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置的</font><font style="vertical-align: inherit;">时间</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令推迟组件的创建，直到</font></font><code>comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具准备就绪</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></li>
</ol>



<pre><code>&lt;comments v-if="comments" :comments="comments"&gt;&lt;/comments&gt;
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观察</font></font><code>comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop的</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">并设置</font></font><code>allComments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为新值（除了</font></font><code>allComments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在data函数中</font><font style="vertical-align: inherit;">初始化</font><font style="vertical-align: inherit;">）：</font></font></li>
</ol>

<pre class="lang-js prettyprint-override"><code>watch: {<font></font>
  comments(value) {<font></font>
    this.allComments = value;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
