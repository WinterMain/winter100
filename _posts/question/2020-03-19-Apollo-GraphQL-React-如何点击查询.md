---
layout: question
title:  Apollo GraphQL React-如何点击查询
date:   2020-03-19T06:33:14.000Z
description: 在Apollo React文档http //dev.apollodata.com/react/queries.html#basics中，有显示组件显示时自...
img: 
author: 飞云L
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Apollo React文档</font></font><a href="http://dev.apollodata.com/react/queries.html#basics"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dev.apollodata.com/react/queries.html#basics中，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有显示组件显示时自动获取的示例，但是我想在单击按钮时运行查询。</font><font style="vertical-align: inherit;">我看到一个在单击按钮时“重新”获取查询的示例，但我不希望它最初进行查询。</font><font style="vertical-align: inherit;">我看到有一种方法可以调用变异，但是您如何调用查询？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2396篇《Apollo GraphQL React-如何点击查询》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从3.0版开始，您现在可以通过两种方式执行此操作。</font></font></p>

<h2><code>client.query</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一种方法是调用</font></font><code>ApolloClient</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">这将返回一个Promise，它将解决查询的结果。</font><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://www.apollographql.com/docs/react/api/react-hoc/#withapollocomponent" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">withApollo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HOC </font><font style="vertical-align: inherit;">获取对客户端的引用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  handleClick() {<font></font>
    const { data } = await this.props.client.query({<font></font>
      query: gql`...`,<font></font>
      variables: { ... },<font></font>
    })<font></font>
    ...<font></font>
  }<font></font>
  ...<font></font>
}<font></font>
<font></font>
withApollo(MyComponent)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您也可以使用</font></font><a href="https://www.apollographql.com/docs/react/api/react-common/#apolloconsumer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ApolloConsumer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取客户端：</font></font></p>

<pre><code>const MyComponent = () =&gt; (<font></font>
  &lt;ApolloConsumer&gt;<font></font>
    {client =&gt; {<font></font>
      ...<font></font>
    }<font></font>
  &lt;/ApolloConsumer&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://www.apollographql.com/docs/react/api/react-hooks/#useapolloclient" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useApolloClient</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩：</font></font></p>

<pre><code>const MyComponent = () =&gt; {<font></font>
  const client = useApolloClient()<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<h2><code>useLazyQuery</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种方法是使用</font></font><a href="https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useLazyQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子：</font></font></p>

<pre><code>const MyComponent = () =&gt; {<font></font>
  const [runQuery, { called, loading, data }] = useLazyQuery(gql`...`)<font></font>
  const handleClick = () =&gt; runQuery({ variables: { ... } })<font></font>
  ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil蛋蛋Tony</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过使用</font></font><code>withApollo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶组件</font><font style="vertical-align: inherit;">传递对Apollo Client的引用来做到这一点</font><font style="vertical-align: inherit;">，如此处所述：</font><a href="https://www.apollographql.com/docs/react/api/react-apollo.html#withApollo" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.apollographql.com/docs/react/api/react-apollo.html#withApollo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.apollographql.com/docs/react/api/react-apollo.html#withApollo</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以</font></font><code>client.query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">传入的对象：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  runQuery() {<font></font>
    this.props.client.query({<font></font>
      query: gql`...`,<font></font>
      variables: { ... },<font></font>
    });<font></font>
  }<font></font>
<font></font>
  render() { ... }<font></font>
}<font></font>
<font></font>
withApollo(MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于好奇，对单击事件运行查询的目的是什么？</font><font style="vertical-align: inherit;">也许有更好的方法可以实现基本目标。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
