---
layout: question
title:  Axios和Fetch有什么区别？
date:   2020-03-11T06:47:08.000Z
description: 我通过使用fetch调用Web服务，但是我可以在axios的帮助下进行相同的操作。所以现在我很困惑。我应该选择axios还是fetch？...
img: 
author: 飞云蛋蛋
category: question
answer: 6
tags: ajax JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过使用fetch调用Web服务，但是我可以在axios的帮助下进行相同的操作。</font><font style="vertical-align: inherit;">所以现在我很困惑。</font><font style="vertical-align: inherit;">我应该选择axios还是fetch？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">axios的优点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变形器：允许在发出请求之前或接收到响应之后对数据执行转换</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拦截器：允许您完全更改请求或响应（以及标题）。</font><font style="vertical-align: inherit;">在发出请求或解决Promise之前也执行异步操作</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置XSRF保护</font></font></li>
</ul>

<p><a href="https://github.com/axios/axios/issues/314" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优势</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超过</font></font><code>fetch</code></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取API和axios API之间的</font><font style="vertical-align: inherit;">另一</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大区别</font></font></strong><font style="vertical-align: inherit;"></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Service Worker时，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在要拦截HTTP请求</font><strong><font style="vertical-align: inherit;">时才</font></strong><font style="vertical-align: inherit;">必须</font><strong><font style="vertical-align: inherit;">使用访存API。</font></strong></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font><font style="vertical-align: inherit;">使用Service Worker在PWA中执行缓存时，如果使用的是axios API，则将无法缓存（仅适用于访存API）</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外...我在测试中正在使用各种库，并注意到它们对4xx请求的不同处理。</font><font style="vertical-align: inherit;">在这种情况下，我的测试将返回一个响应为400的json对象。</font><font style="vertical-align: inherit;">这是3个流行的lib处理响应的方式：  </font></font></p>

<pre><code>// request-promise-native<font></font>
const body = request({ url: url, json: true })<font></font>
const res = await t.throws(body);<font></font>
console.log(res.error)<font></font>
<font></font>
<font></font>
// node-fetch<font></font>
const body = await fetch(url)<font></font>
console.log(await body.json())<font></font>
<font></font>
<font></font>
// Axios<font></font>
const body = axios.get(url)<font></font>
const res = await t.throws(body);<font></font>
console.log(res.response.data)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，</font></font><code>request-promise-native</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>node-fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font><font style="vertical-align: inherit;">响应时引发4xx响应</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">还</font></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对JSON解析使用了Promise。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Axios是一个独立的第三方软件包，可以使用NPM轻松安装到React项目中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您提到的另一个选项是访存功能。</font><font style="vertical-align: inherit;">与Axios不同，</font></font><code>fetch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它内置于大多数现代浏览器中。</font><font style="vertical-align: inherit;">借助fetch，您无需安装第三方软件包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，由您自己决定，</font></font><code>fetch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不知道自己在做什么，则</font><font style="vertical-align: inherit;">可以继续使用，</font><font style="vertical-align: inherit;">并可能将其弄乱，或者只是使用Axios，我认为这更简单。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">さ恋旧る</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font><a href="https://github.com/axios/axios/issues/314#issuecomment-217346581" rel="noreferrer"><font style="vertical-align: inherit;">GitHub上的</font></a></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mzabriskie</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/axios/axios/issues/314#issuecomment-217346581" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总体而言，它们非常相似。</font><font style="vertical-align: inherit;">axios的一些优点：</font></font></p>
  
  <ul>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变形器：允许在发出请求之前或接收到响应之后对数据执行转换</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拦截器：允许您完全更改请求或响应（以及标题）。</font><font style="vertical-align: inherit;">另外，在发出请求或Promise解决之前执行异步操作</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置</font></font><a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XSRF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保护</font></font></p></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请检查浏览器支持Axios</font></font></p>

<p><a href="https://i.stack.imgur.com/sOYGh.png" rel="noreferrer"><img src="https://i.stack.imgur.com/sOYGh.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您应该使用axios。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>They are HTTP request libraries... </p>

<p>I end up with the same doubt but the table in this <a href="http://andrewhfarmer.com/ajax-libraries/" rel="noreferrer">post</a> makes me go with <code>isomorphic-fetch</code>. Which is <code>fetch</code> but works with NodeJS.</p>

<p><a href="http://andrewhfarmer.com/ajax-libraries/" rel="noreferrer">http://andrewhfarmer.com/ajax-libraries/</a></p>

<hr>

<p>The link above is dead
The same table is here: <a href="https://www.javascriptstuff.com/ajax-libraries/" rel="noreferrer">https://www.javascriptstuff.com/ajax-libraries/</a></p>

<p>Or here:
<a href="https://i.stack.imgur.com/qr24s.png" rel="noreferrer"><img src="https://i.stack.imgur.com/qr24s.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
