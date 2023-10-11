---
layout: question
title:  为什么在NextJS中第一次渲染时withRouter router.query为空？
date:   2020-03-24T09:30:18.000Z
description: 当我用Router调用时，我能够在第二次渲染数据时看到输出。我的组件看起来像这样：const Home = (props) => {  cons...
img: 
author: 西里飞云
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我用Router调用时，我能够在第二次渲染数据时看到输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的组件看起来像这样：</font></font></p>

<pre><code>const Home = (props) =&gt; {<font></font>
  console.log("all props", props)<font></font>
  let { router } = props<font></font>
  let { category, item } = router.query<font></font>
  console.log("Cat", category)<font></font>
  console.log("Item", item)<font></font>
  return (<font></font>
    &lt;FirebaseContext.Provider value={new Firebase()}&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;Head&gt;<font></font>
          &lt;title&gt;Category&lt;/title&gt;<font></font>
        &lt;/Head&gt;<font></font>
        &lt;Navigation /&gt;<font></font>
        {/* &lt;Item category={category} item={item} {...props} /&gt; */}<font></font>
      &lt;/div&gt;<font></font>
    &lt;/FirebaseContext.Provider&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
Home.getInitialProps = async (props) =&gt; {<font></font>
  console.log(props)<font></font>
    return { req, query }<font></font>
}<font></font>
<font></font>
export default compose(withRouter, withAuthentication)(Home)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您查看控制台，则第一个渲染看起来像：</font></font></p>

<pre><code>asPath: "/c/cigars/1231"<font></font>
back: ƒ ()<font></font>
beforePopState: ƒ ()<font></font>
events: {on: ƒ, off: ƒ, emit: ƒ}<font></font>
pathname: "/c/[category]/[item]"<font></font>
prefetch: ƒ ()<font></font>
push: ƒ ()<font></font>
query: {}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么即使查询清楚地识别了asPath，查询还是为空？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3565篇《为什么在NextJS中第一次渲染时withRouter router.query为空？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇米亚神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是来自React Router的withRouter吗？</font></font></p>

<p>If it is it will not add a query prop - it will add props called: location, history and match</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
