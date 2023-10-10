---
layout: question
title:  在Nuxt中，应该使用asyncData还是默认的Apollo查询？
date:   2020-03-20T06:24:39.000Z
description: 我正在使用Nuxt / Vue构建站点，并且使用了GraphQL后端API。我们使用Nuxt的Apollo模块来访问它。在页面组件中，您可以执行此操作...
img: 
author: 斯丁前端
category: question
answer: 1
tags: 异步等待 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Nuxt / Vue构建站点，并且使用了GraphQL后端API。</font><font style="vertical-align: inherit;">我们使用Nuxt的Apollo模块来访问它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面组件中，您可以执行此操作（我认为这称为“智能查询”，但我不确定）：</font></font></p>

<pre><code>    apollo: {<font></font>
        pages: {<font></font>
            query: pagesQuery,<font></font>
            update(data) {<font></font>
                return _get(data, "pageBy", {})<font></font>
            }<font></font>
        },<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您也可以使用Nuxt asyncData挂钩执行类似的查询：</font></font></p>

<pre><code>  asyncData (context) {<font></font>
    let client = context.app.apolloProvider.defaultClient<font></font>
    client.query({query, variables})<font></font>
        .then(({ data }) =&gt; {<font></font>
          // do what you want with data<font></font>
        })<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定这两种方式之间有什么区别，哪个更好。</font><font style="vertical-align: inherit;">有人知道吗？</font><font style="vertical-align: inherit;">我在任何地方的文档中都找不到解释。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2552篇《在Nuxt中，应该使用asyncData还是默认的Apollo查询？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，很好的问题。</font><font style="vertical-align: inherit;">您在顶部显示的代码确实称为智能查询。</font><font style="vertical-align: inherit;">事实上</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件中的阿波罗定义中声明的每个查询（即，不是以$ char开头的查询）都会导致创建智能查询对象。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用@ nuxtjs / apollo模块的nuxt项目可以直接使用它们。</font><font style="vertical-align: inherit;">智能查询的妙处在于它附带的选项，其中之一就是“预取”选项。</font><font style="vertical-align: inherit;">听起来，这允许预取，并且默认情况下设置为true。</font><font style="vertical-align: inherit;">它还可以接受变量对象或函数。</font><font style="vertical-align: inherit;">您可以在</font></font><a href="https://github.com/Akryum/vue-apollo/blob/master/docs/guide/ssr.md#component-prefetching" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看文档</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着智能查询或asyncData查询的结果将基本相同。</font><font style="vertical-align: inherit;">它们应在同一时间范围内解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么为什么选择一个？</font><font style="vertical-align: inherit;">这可能取决于首选项，但是有了智能查询允许的所有选项，您可以做更多的事情，并且可以包括asyncData中可能无法实现的订阅。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多有关智能查询</font></font><a href="https://github.com/Akryum/vue-apollo/blob/master/docs/api/smart-query.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
