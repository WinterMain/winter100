---
layout: question
title:  提取API无法加载webpack：//…错误
date:   2020-03-23T07:52:48.000Z
description: 我正在尝试使用Apollo Client和GraphQL学习一些新技巧，但遇到一个错误，无法弄清楚是什么原因引起的。我正在使用的堆栈是GraphQL和Ap...
img: 
author: 猴子村村
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Apollo Client和GraphQL学习一些新技巧，但遇到一个错误，无法弄清楚是什么原因引起的。</font><font style="vertical-align: inherit;">我正在使用的堆栈是GraphQL和ApolloClient。</font><font style="vertical-align: inherit;">错误是</font></font></p>

<p><code>Fetch API cannot load webpack://%5Bname%5D_%5Bchunkhash%5D/./node_modules/react-dom/cjs/react-dom.development.js?. URL scheme must be "http" or "https" for CORS request.</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了我的CORS设置，可以毫无问题地进行其他查询。</font><font style="vertical-align: inherit;">该特定查询出现错误：</font></font></p>

<pre><code>query SINGLE_STORE_QUERY($id: ID!) {<font></font>
    store(where: { id: $id }) {<font></font>
      id<font></font>
      name<font></font>
      description<font></font>
      image<font></font>
      address<font></font>
      lat<font></font>
      lng<font></font>
      reviews {<font></font>
        user {<font></font>
          name<font></font>
        }<font></font>
        text<font></font>
        rating<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NextJS组件中的Apollo查询是： </font></font></p>

<pre><code>    &lt;Query<font></font>
        query={SINGLE_STORE_QUERY}<font></font>
        variables={{ id: this.props.id }}<font></font>
        errorPolicy="all"<font></font>
      &gt;<font></font>
        {({ data: { store }, error, loading }) =&gt; {<font></font>
          if (error) return &lt;Error error={error} /&gt;;<font></font>
          if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;<font></font>
<font></font>
          console.log(store);<font></font>
          return (<font></font>
            &lt;div&gt;<font></font>
              &lt;StoreHero&gt;<font></font>
                &lt;SingleTitle&gt;{store.name}&lt;/SingleTitle&gt;<font></font>
              &lt;/StoreHero&gt;<font></font>
<font></font>
              &lt;Container&gt;<font></font>
                &lt;p className="location"&gt;{store.address}&lt;/p&gt;<font></font>
                &lt;p className="description"&gt;{store.description}&lt;/p&gt;<font></font>
                {store.reviews.map((review, ind) =&gt; (<font></font>
                  &lt;Review review={review} key={ind} /&gt;<font></font>
                ))}<font></font>
                &lt;ReviewForm id={this.props.id} /&gt;<font></font>
              &lt;/Container&gt;<font></font>
            &lt;/div&gt;<font></font>
          );<font></font>
        }}<font></font>
      &lt;/Query&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，当我</font></font><code>reviews</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从查询中</font><font style="vertical-align: inherit;">删除时，我</font><font style="vertical-align: inherit;">没有收到错误。</font><font style="vertical-align: inherit;">但是，在GraphQL操场上它可以正常工作，所以我知道数据在那里。</font><font style="vertical-align: inherit;">另外，如果刷新页面，则页面会正确加载。</font><font style="vertical-align: inherit;">错误只会在页面的第一次加载中出现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能为我指出正确的方向，以更好地构建此查询？</font><font style="vertical-align: inherit;">我知道我已经接近了，但是我缺少一些小东西。</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2954篇《提取API无法加载webpack：//…错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也有类似的情况，但有相同的错误，并且发现，基本上</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该错误与GraphQL或Apollo无关</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个</font></font><code>react-error-overlay</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误，基本上表示“出现错误，显示您的错误”或“无法显示您的错误”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于您的案例：可能是，</font></font><code>Review</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正试图访问</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性的</font><font style="vertical-align: inherit;">某些内容</font><font style="vertical-align: inherit;">，例如review.text.length，并且有些评论没有该属性？</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
