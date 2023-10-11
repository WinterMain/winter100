---
layout: question
title:  如何在Vue.js中使用/ deep /或>>>？
date:   2020-03-12T04:48:51.000Z
description: 因此，我在这里已经读到，在Vue.js中，可以使用/deep/或>>>在选择器中创建适用于子组件内部元素的样式规则。但是，无论是在SCSS还是普通的旧CS...
img: 
author: 乐LEY
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我在</font></font><a href="https://vue-loader.vuejs.org/en/features/scoped-css.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经读到</font><font style="vertical-align: inherit;">，在Vue.js中，可以使用</font></font><code>/deep/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&gt;&gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选择器中创建适用于子组件内部元素的样式规则。</font><font style="vertical-align: inherit;">但是，无论是在SCSS还是普通的旧CSS中，尝试以我的样式使用它均无效。</font><font style="vertical-align: inherit;">而是将它们原样发送到浏览器，因此无效。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">home.vue：</font></font></strong></p>

<pre><code>&lt;style lang="css" scoped&gt;<font></font>
    .autocomplete &gt;&gt;&gt; .autocomplete-input<font></font>
    {<font></font>
    // ...<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的CSS：</font></font></strong></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
.autocomplete &gt;&gt;&gt; .autocomplete-input[data-v-2bda0c9a]<font></font>
{<font></font>
//...<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的是：</font></font></strong></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
.autocomplete[data-v-2bda0c9a] .autocomplete-input<font></font>
{<font></font>
//...<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有关的webpack配置</font></font><code>vue-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>// ...<font></font>
{<font></font>
    test: /\.vue$/,<font></font>
    loader: "vue-loader",<font></font>
    options: {<font></font>
        loaders: {<font></font>
            scss: "vue-style-loader!css-loader!sass-loader"<font></font>
        }<font></font>
    }<font></font>
}<font></font>
// ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是，如何让该</font></font><code>&gt;&gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作员工作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经找到了</font></font><a href="https://stackoverflow.com/a/46964259/3508956"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案，但我确实在这样做，而且行不通...</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第967篇《如何在Vue.js中使用/ deep /或>>>？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在具有以下结构的Vue范围内的SCSS样式表中成功使用了/ deep /：</font></font></p>

<pre><code>.parent-class {<font></font>
  &amp; /deep/ .child-class {<font></font>
    background-color: #000;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：/ deep /已被弃用，如果它不再对您有用，请参阅解释:: v-deep的其他答案</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用:: v-deep</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可接受的答案不适用于范围内的SCSS / SASS，但</font></font><code>::v-deep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常可以：</font></font></p>

<pre><code>::v-deep .child-class {<font></font>
  background-color: #000;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用SCSS / SASS，请尝试使用以下语法：</font></font></p>

<pre><code>&gt;&gt;&gt; .child-class {<font></font>
  background-color: #000;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（10/1/2019）：额外信息</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><code>sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持</font></font><code>/deep/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只有</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify 2不支持</font></font><code>/deep/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为它不支持</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
