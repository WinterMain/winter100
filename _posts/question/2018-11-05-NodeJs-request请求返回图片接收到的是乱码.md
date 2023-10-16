---
layout: question
title:  NodeJs request请求返回图片，接收到的是乱码？
date:   2018-11-05T06:39:39.000Z
description: 我的请求如下，最后接口预期返回的会是一张图片：            request({              method  "POST",    ...
img: 
author: Winter
category: question
answer: 1
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>我的请求如下，最后接口预期返回的会是一张图片：</p>

<pre>
<code>
            request({
              method: &quot;POST&quot;,
              url: `${url}`,
            }, (error, response, body) =&gt; {
                res.end(body)
            });
</code></pre>

<p>但是结果却是如下的乱码：</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1541399763057.png" style="max-width:100%" /></p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第94篇《NodeJs request请求返回图片，接收到的是乱码？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.11.05</span>
          </div>
          <div class="discuss-comment"><pre>
<code>在请求参数里，和返回加入参数和调用方法说明类型可以解决这个问题。
            request({
              method: &quot;POST&quot;,
              headers: {
                &#39;Accept-Encoding&#39;: &#39;gzip, deflate&#39;
              },
              encoding: null,
              url: `${url}`,
            }, (error, response, body) =&gt; {
                res.set(&#39;Content-Type&#39;, &#39;image/png;&#39;);
                res.end(body)
            });</code></pre>

<p><code>请求头的参数加，阻止request自动转码</code></p>

<p><code>headers: { &#39;Accept-Encoding&#39;: &#39;gzip, deflate&#39; }, encoding: null,</code></p>

<p><code>调用方法res.set(&#39;Content-Type&#39;, &#39;image/png;&#39;); &nbsp;说明返回内容的类型是图片</code></p>
</div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
