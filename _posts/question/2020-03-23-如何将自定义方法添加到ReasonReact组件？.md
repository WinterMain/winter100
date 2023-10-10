---
layout: question
title:  如何将自定义方法添加到ReasonReact组件？
date:   2020-03-23T07:51:23.000Z
description: 我对ReasonML非常陌生。我能够使用ReasonReact成功创建一个无状态组件，但是我还没有弄清楚如何向该组件添加自定义方法（例如Next.js的s...
img: 
author: Gil伽罗小宇宙
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对ReasonML非常陌生。</font><font style="vertical-align: inherit;">我能够使用ReasonReact成功创建一个无状态组件，但是我还没有弄清楚如何向该组件添加自定义方法（例如</font></font><a href="https://github.com/zeit/next.js/tree/4.1.4#fetching-data-and-component-lifecycle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js的static</font></font><code>getInitialProps</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件上</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">方法时，出现</font></font><code>The field getInitialProps does not belong to type ReasonReact.componentSpec</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何在React组件上添加此定义此自定义方法的方法？</font></font></em></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件</font></font></h2>

<pre><code>let str = ReasonReact.stringToElement;<font></font>
<font></font>
let component = ReasonReact.statelessComponent("Index");<font></font>
<font></font>
let make = (~items: Listings.items, _children) =&gt; {<font></font>
  ...component,<font></font>
  getInitialProps: () =&gt;<font></font>
    Js.Promise.(<font></font>
      Endpoints.fetchListings()<font></font>
      |&gt; then_(Fetch.Response.json)<font></font>
      |&gt; then_((json) =&gt; Js.Json.decodeArray(json) |&gt; resolve)<font></font>
    ),<font></font>
  render: (_self) =&gt;<font></font>
    &lt;div&gt;<font></font>
      (List.length(items) &gt; 0 ? &lt;Listings items /&gt; : &lt;Loading /&gt;)<font></font>
    &lt;/div&gt;<font></font>
};<font></font>
<font></font>
let default =<font></font>
  ReasonReact.wrapReasonForJs(<font></font>
    ~component,<font></font>
    (jsProps) =&gt; make(~items=jsProps##items, [||])<font></font>
  );<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font></h2>

<pre><code>We've found a bug for you!<font></font>
/Users/davidcalhoun/Sites/web/evergreen-roots/pages/Index.re 7:3-17<font></font>
<font></font>
5 │ let make = (~items: Listings.items, _children) =&gt; {<font></font>
6 │   ...component,<font></font>
7 │   getInitialProps: () =&gt;<font></font>
8 │     Js.Promise.(<font></font>
9 │       Endpoints.fetchListings()<font></font>
<font></font>
This record expression is expected to have type<font></font>
  ReasonReact.componentSpec ('a,  'b,  'c,  'd,  'e)<font></font>
The field getInitialProps does not belong to type ReasonReact.componentSpec<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在我的理性Next.js页面中获取上下文，并找到了解决方案。</font><font style="vertical-align: inherit;">这是访问上下文以检测我们是否正在服务器上渲染并将布尔值传递给您的ReasonReact组件的示例：</font></font></p>

<pre><code>let make = (~onServer, _children) =&gt; {<font></font>
/* component code goes here */ <font></font>
};<font></font>
<font></font>
let default =<font></font>
  ReasonReact.wrapReasonForJs(~component, jsProps =&gt; make(~onServer=jsProps##onServer, [||]));<font></font>
<font></font>
let getInitialProps = context =&gt;<font></font>
  Js.Promise.make((~resolve, ~reject as _) =&gt; {<font></font>
    let onServer =<font></font>
      switch (Js.Nullable.toOption(context##req)) {<font></font>
      | None =&gt; false<font></font>
      | Some(_) =&gt; true<font></font>
      };<font></font>
    resolve(. {"onServer": onServer});<font></font>
  });<font></font>
<font></font>
let inject = [%bs.raw {| (cls, fn) =&gt; cls.getInitialProps = fn |}];<font></font>
<font></font>
inject(default, getInitialProps);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜</font></font><a href="https://github.com/zeit/next.js/issues/4202#issuecomment-439175214" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/issues/4202#issuecomment-439175214</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
所有信贷@tmepple和@ -rase谁张贴的解决方案有！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种解决方案是将“ _app.js”保留为纯js，然后从该getInitialProps中传递内容，这些</font></font><code>&lt;Component someParam=manualStuff {...pageProps} /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容可以作为参数输入到您的原因反应页面中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Discord中回答，在此重新发布：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能像这样在组件上定义任意方法。</font><font style="vertical-align: inherit;">看到了</font></font><code>...component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">这样可以分散具有静态字段的记录，并像您一样更新一些字段，例如</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，我相信您不能直接将ReasonReact组件传递给下一个方法。</font><font style="vertical-align: inherit;">它可能要求一个React组件类。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">如何在js端公开底层js类的信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://reasonml.github.io/reason-react/docs/en/interop.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">互操作性部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此期间，您可能只需将该组件包装在js组件的薄层中即可， </font></font><code>getInitialProps</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您将拥有一个具有的reactjs组件</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该组件呈现一个ReasonInteract组件，该组件通过互操作公开了基础类。</font><font style="vertical-align: inherit;">如果我理解正确的话，如果您使用的是来自Reason的包装，那么您也应该将ReasonReact绑定写入该js包装。</font><font style="vertical-align: inherit;">这使这个过程有些虚构，但是您在这里遇到了一个病态的案例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一方面：理想情况下，Next.js API将要求一个组件类，而</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在侧面，则是一个完全不可知的功能，该功能未附加到组件类上。</font><font style="vertical-align: inherit;">这样可以大大简化“原因”方面的绑定过程。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
