---
layout: question
title:  仅在NextJS网站构建期间如何使用getInitialProps？
date:   2020-03-23T02:53:50.000Z
description: 使用NextJS构建静态网站时，我希望该getInitialProps方法仅在构建步骤中触发，而不在客户端上触发。在构建步骤中，NextJS 在使用每...
img: 
author: 小卤蛋
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用NextJS构建静态网站时，我希望该</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法仅在构建步骤中触发，而不在客户端上触发。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构建步骤中，NextJS </font><font style="vertical-align: inherit;">在使用每个组件的呈现HTML生成页面的静态HTML之前</font><font style="vertical-align: inherit;">运行</font></font><a href="https://nextjs.org/docs#fetching-data-and-component-lifecycle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getInitialProps方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在客户端上，NextJS还在呈现页面组件之前运行此方法，以便为该组件返回必要的道具。</font><font style="vertical-align: inherit;">因此，较大的请求可能会延迟客户端的第一次绘画，因为这是一个阻塞请求。</font></font></p>

<pre class="lang-js prettyprint-override"><code>// example usage of API call in getInitialProps<font></font>
import fetch from 'isomorphic-unfetch'<font></font>
<font></font>
function Page({ stars }) {<font></font>
  return &lt;div&gt;Next stars: {stars}&lt;/div&gt;<font></font>
}<font></font>
<font></font>
Page.getInitialProps = async ({ req }) =&gt; {<font></font>
  const res = await fetch('https://api.github.com/repos/zeit/next.js')<font></font>
  const json = await res.json()<font></font>
  return { stars: json.stargazers_count }<font></font>
}<font></font>
<font></font>
export default Page<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不愿意将慢速的API请求移至</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以避免阻塞请求，因为我想使用在构建步骤中返回的数据来填充静态HTML，并且此特定请求不需要动态或在更新后进行更新构建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以让我</font><em><font style="vertical-align: inherit;">仅</font></em><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">构建</font><font style="vertical-align: inherit;">时</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">而</font><em><font style="vertical-align: inherit;">不能</font></em><font style="vertical-align: inherit;">在客户端加载页面时运行？</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><code>next export</code><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是好习惯吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2696篇《仅在NextJS网站构建期间如何使用getInitialProps？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了NextJs 9.0.3的解决方法（其他版本也可以使用，我没有测试过）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>// XXXPage is your page<font></font>
<font></font>
XXXPage.getInitialProps = async (req) =&gt; {<font></font>
  if (process.browser) {<font></font>
    return __NEXT_DATA__.props.pageProps;<font></font>
  }<font></font>
  // original logic<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
