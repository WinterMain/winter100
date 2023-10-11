---
layout: question
title:  如何使用Next.js和Rails后端安全地存储JWT？
date:   2020-03-23T13:01:41.000Z
description: 我正在尝试在Next.js前端和Rails API后端之间实现身份验证，并且很难理解如何正确安全地执行此操作。我在rails端使用了jwt-sessi...
img: 
author: LA
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Next.js前端和Rails API后端之间实现身份验证，并且很难理解如何正确</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地执行此操作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在rails端</font><font style="vertical-align: inherit;">使用了</font></font><a href="https://github.com/tuwukee/jwt_sessions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jwt-sessions</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> gem，它在登录时会返回</font></font><code>access_token</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，a </font></font><code>refresh_token</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>csrf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令牌。</font><font style="vertical-align: inherit;">在</font></font><code>csrf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能通过报头被发送，并且需要对所有非GET或HEAD的请求。</font><font style="vertical-align: inherit;">的</font></font><code>access</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>refresh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过报头中给定的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由饼干。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以实现后端，以返回JSON响应中的所有令牌，或设置cookie，或同时使用两者。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，在客户端，我看不到存储这些令牌的真正方法，即：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SSR和浏览器中均可用</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我看到的选项</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项1：服务器设置的HTTPOnly Cookie</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是</font></font><code>jwt-sessions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宝石的建议。</font><font style="vertical-align: inherit;">将CSRF保留在localStorage中，但将其他令牌保留在服务器设置的httpOnly cookie中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎是最安全的方法，但是SSR via </font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根本无法使用，因为它无法通过发送Cookie </font></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我什至无法手动发送它们，因为在JS中看不到它们。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项2：非httpOnly Cookie</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是</font></font><a href="https://github.com/zeit/next.js/tree/master/examples/with-cookie-auth" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方的下一个示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎所做的（尽管只有一个可能是无状态的令牌）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器或浏览器都可以设置</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> httpOnly </font><font style="vertical-align: inherit;">的cookie </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过SSR访问它，但这不使我对XSS开放吗？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项3：使用浏览器存储</font></font></h3>

<p>Just put all the tokens in <code>localStorage</code> and/or <code>sessionStorage</code>. This seems to be the worst option, as it won't work in SSR, and to my knowledge is not secure.</p>

<h3>????</h3>

<p>Am I missing something? Is non-httpOnly, like in the official example, OK? Is there a better approach? Or will I have to ignore SSR (and thus one of Next.js's killer features)?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3035篇《如何使用Next.js和Rails后端安全地存储JWT？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
