---
layout: question
title:  对jQuery和Ajax使用基本身份验证
date:   2020-03-17T03:54:40.000Z
description: 我正在尝试通过浏览器创建基本身份验证，但是我真的无法到达那里。如果此脚本不在此处，则浏览器身份验证将接管，但是我想告诉浏览器用户即将进行身份验证。...
img: 
author: 猪猪神无伽罗
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过浏览器创建基本身份验证，但是我真的无法到达那里。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此脚本不在此处，则浏览器身份验证将接管，但是我想告诉浏览器用户即将进行身份验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地址应类似于：</font></font></p>

<pre><code>http://username:password@server.in.local/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个表格：</font></font></p>

<pre><code>&lt;form name="cookieform" id="login" method="post"&gt;<font></font>
      &lt;input type="text" name="username" id="username" class="text"/&gt;<font></font>
      &lt;input type="password" name="password" id="password" class="text"/&gt;<font></font>
      &lt;input type="submit" name="sub" value="Submit" class="page"/&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和一个脚本：</font></font></p>

<pre><code>var username = $("input#username").val();<font></font>
var password = $("input#password").val();<font></font>
<font></font>
function make_base_auth(user, password) {<font></font>
  var tok = user + ':' + password;<font></font>
  var hash = Base64.encode(tok);<font></font>
  return "Basic " + hash;<font></font>
}<font></font>
$.ajax<font></font>
  ({<font></font>
    type: "GET",<font></font>
    url: "index1.php",<font></font>
    dataType: 'json',<font></font>
    async: false,<font></font>
    data: '{"username": "' + username + '", "password" : "' + password + '"}',<font></font>
    success: function (){<font></font>
    alert('Thanks for your comment!');<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1860篇《对jQuery和Ajax使用基本身份验证》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="http://en.wikipedia.org/wiki/JSONP" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSONP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适用于基本身份验证，因此jQuery beforeSend回调不适用于JSONP / Script。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我设法通过在请求中添加用户和密码（例如user：pw@domain.tld）来解决此限制。</font><font style="vertical-align: inherit;">这几乎适用于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除Internet Explorer之外的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何浏览</font><em><font style="vertical-align: inherit;">器</font></em><font style="vertical-align: inherit;">，在</font><em><font style="vertical-align: inherit;">Internet Explorer中</font></em><font style="vertical-align: inherit;">，不支持通过URL进行身份验证（该调用将不会执行）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="http://support.microsoft.com/kb/834489" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://support.microsoft.com/kb/834489</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像其他人建议的那样，您可以直接在Ajax调用中设置用户名和密码：</font></font></p>

<pre><code>$.ajax({<font></font>
  username: username,<font></font>
  password: password,<font></font>
  // ... other parameters.<font></font>
});<font></font>
</code></pre>

<p><strong>OR</strong> use the headers property if you would rather not store your credentials in plain text:</p>

<pre><code>$.ajax({<font></font>
  headers: {"Authorization": "Basic xxxx"},<font></font>
  // ... other parameters.<font></font>
});<font></font>
</code></pre>

<p>Whichever way you send it, the server has to be very polite. For Apache, your .htaccess file should look something like this:</p>

<pre><code>&lt;LimitExcept OPTIONS&gt;<font></font>
    AuthUserFile /path/to/.htpasswd<font></font>
    AuthType Basic<font></font>
    AuthName "Whatever"<font></font>
    Require valid-user<font></font>
&lt;/LimitExcept&gt;<font></font>
<font></font>
Header always set Access-Control-Allow-Headers Authorization<font></font>
Header always set Access-Control-Allow-Credentials true<font></font>
<font></font>
SetEnvIf Origin "^(.*?)$" origin_is=$0<font></font>
Header always set Access-Control-Allow-Origin %{origin_is}e env=origin_is<font></font>
</code></pre>

<h3>Explanation:</h3>

<p>For some cross domain requests, the browser sends a preflight <strong>OPTIONS</strong> request that is missing your authentication headers. Wrap your authentication directives inside the <strong>LimitExcept</strong> tag to respond properly to the preflight.</p>

<p>Then send a few headers to tell the browser that it is allowed to authenticate, and the  <strong>Access-Control-Allow-Origin</strong> to grant permission for the cross-site request.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*通配符不能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作Access-Control-Allow-Origin的值：您需要返回被叫方的确切域。</font><font style="vertical-align: inherit;">使用SetEnvIf捕获此值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，只需使用1.5中引入的headers属性：</font></font></p>

<pre><code>headers: {"Authorization": "Basic xxxx"}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="http://api.jquery.com/jQuery.ajax/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Ajax API</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO路易西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery的</font></font><a href="http://api.jquery.com/jQuery.ajax/" rel="noreferrer"><code>beforeSend</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调添加带有身份验证信息的HTTP标头：</font></font></p>

<pre><code>beforeSend: function (xhr) {<font></font>
    xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));<font></font>
},<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
