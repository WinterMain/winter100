---
layout: question
title:  使用TypeScript在next.js中使用Router的安全方法
date:   2020-03-23T02:50:13.000Z
description: next.js建议使用以下模式访问路由参数：const Page = withRouter((props) => (  <p>{props.rout...
img: 
author: 村村
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.js建议使用以下模式访问路由参数：</font></font></p>

<pre><code>const Page = withRouter((props) =&gt; (<font></font>
  &lt;p&gt;{props.router.query.title}&lt;/p&gt;<font></font>
))<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的问题是，在TypeScript中，上面的代码将显示错误，因为</font></font><code>router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能未定义。</font><font style="vertical-align: inherit;">必须将其重写为</font></font></p>

<p><code>props.router!.query!.title</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或作为 </font></font></p>

<p><code>props.router &amp;&amp; props.router.query &amp;&amp; props.router.query.title</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这两种方法都是不好的。</font><font style="vertical-align: inherit;">在第一个中，我们只是强迫编译器忽略该错误，而在其他情况下，则使代码带有不必要的噪音。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更好的方法来访问路线参数？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2690篇《使用TypeScript在next.js中使用Router的安全方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
