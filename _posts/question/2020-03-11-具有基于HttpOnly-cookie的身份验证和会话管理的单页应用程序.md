---
layout: question
title:  具有基于HttpOnly cookie的身份验证和会话管理的单页应用程序
date:   2020-03-11T15:23:01.000Z
description: 几天来，我一直在为我的单页应用程序寻找一种安全的身份验证和会话管理机制。从众多有关SPA和身份验证的教程和博客文章来看，将JWT存储在localStora...
img: 
author: JinJin伽罗小胖
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几天来，我一直在为我的单页应用程序寻找一种安全的身份验证和会话管理机制。</font><font style="vertical-align: inherit;">从众多有关SPA和身份验证的教程和博客文章来看，将JWT存储在localStorage或常规Cookie中似乎是最常见的方法，但是</font></font><a href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JWT进行会话并不是一个好主意，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，此应用程序</font><a href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/" rel="noreferrer"><font style="vertical-align: inherit;">不可行</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">登录名应该可以撤消。</font><font style="vertical-align: inherit;">例如，如果在用户的帐户上检测到可疑活动，则应该可以立即撤消该用户的访问权限并要求重新登录。类似地，密码重置之类的操作也应撤消所有现有的登录名。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认证应该通过Ajax进行。</font><font style="vertical-align: inherit;">此后，不应再进行浏览器重定向（“硬”重定向）。</font><font style="vertical-align: inherit;">所有导航都应在SPA内进行。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切都应该跨域工作。</font><font style="vertical-align: inherit;">SPA将在www.domain1.com上，服务器将在www.domain2.com上。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript不能访问服务器发送的敏感数据，例如会话ID。</font><font style="vertical-align: inherit;">这是为了防止XSS攻击，其中恶意脚本可以从常规cookie，localStorage或sessionStorage中窃取令牌或会话ID。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想的机制似乎是使用</font></font><code>HttpOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含会话ID的</font><font style="vertical-align: inherit;">cookie的基于cookie的身份验证</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该流程将像这样工作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户到达登录页面并提交其用户名和密码。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器对用户进行身份验证并发送会话ID作为</font></font><code>HttpOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应cookie。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，SPA在向服务器发出的后续XHR请求中包括此cookie。</font><font style="vertical-align: inherit;">使用该</font></font><code>withCredentials</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">似乎可行</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向受保护的端点发出请求时，服务器将查找cookie。</font><font style="vertical-align: inherit;">如果找到，它将对照数据库表交叉检查该会话ID，以确保该会话仍然有效。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户注销时，将从数据库中删除会话。</font><font style="vertical-align: inherit;">下次用户到达站点时，SPA会收到401/403响应（因为会话已过期），然后将用户带到登录屏幕。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于cookie具有</font></font><code>HttpOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志，因此JavaScript将无法读取其内容，因此只要通过HTTPS传输，它就不会受到攻击。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挑战性</font></font></strong></p>

<p>Here's the specific issue I've run into. My server is configured to handle CORS requests. After authenticating the user, it correctly sends the cookie in the response:</p>

<pre><code>HTTP/1.1 200 OK<font></font>
server: Cowboy<font></font>
date: Wed, 15 Mar 2017 22:35:46 GMT<font></font>
content-length: 59<font></font>
set-cookie: _myapp_key=SFMyNTYBbQAAABBn; path=/; HttpOnly<font></font>
content-type: application/json; charset=utf-8<font></font>
cache-control: max-age=0, private, must-revalidate<font></font>
x-request-id: qi2q2rtt7mpi9u9c703tp7idmfg4qs6o<font></font>
access-control-allow-origin: http://localhost:8080<font></font>
access-control-expose-headers: <font></font>
access-control-allow-credentials: true<font></font>
vary: Origin<font></font>
</code></pre>

<p>However, the browser does not save the cookie (when I check Chrome's local cookies it's not there). So when the following code runs:</p>

<pre><code>context.axios.post(LOGIN_URL, creds).then(response =&gt; {<font></font>
  context.$router.push("/api/account")<font></font>
}<font></font>
</code></pre>

<p>And the Account page is created:</p>

<pre><code>created() {<font></font>
  this.axios.get(SERVER_URL + "/api/account/", {withCredentials: true}).then(response =&gt; {<font></font>
    //do stuff<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>This call does not have the cookie in the header. The server therefore rejects it.</p>

<pre><code>GET /api/account/ HTTP/1.1<font></font>
Host: localhost:4000<font></font>
Connection: keep-alive<font></font>
Accept: application/json<font></font>
Origin: http://localhost:8080<font></font>
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36<font></font>
Referer: http://localhost:8080/<font></font>
Accept-Encoding: gzip, deflate, sdch, br<font></font>
Accept-Language: en-US,en;q=0.8,tr;q=0.6<font></font>
</code></pre>

<p>Do I need to do something special to make sure the browser saves the cookie after receiving it in the login response? Various sources I've read have said that browsers save response cookies only when the user is redirected, but I don't want any "hard" redirects since this is an SPA.</p>

<p>The SPA in question is written in Vue.js, but I guess it applies to all SPAs. I'm wondering how people handle this scenario.</p>

<p>Other stuff I've read on this topic:</p>

<ul>
<li><a href="https://stackoverflow.com/questions/20963273/spa-best-practices-for-authentication-and-session-management">SPA best practices for authentication and session management</a></li>
<li><a href="https://security.stackexchange.com/questions/53359/are-httponly-cookies-submitted-via-xmlhttprequest-with-withcredentials-true">Are HTTPOnly Cookies submitted via XmlHTTPRequest with withCredentials=True?</a></li>
<li><a href="http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/" rel="noreferrer">Stop using JWT for sessions, part 2: Why your solution doesn't work</a></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第844篇《具有基于HttpOnly cookie的身份验证和会话管理的单页应用程序》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用凭据控件设置和发送cookie，因此请确保在发布登录时将其打开，以便将返回的cookie保存在浏览器中。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
