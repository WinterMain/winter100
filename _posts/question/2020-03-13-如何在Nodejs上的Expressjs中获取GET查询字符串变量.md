---
layout: question
title:  如何在Node.js上的Express.js中获取GET（查询字符串）变量？
date:   2020-03-13T09:48:32.000Z
description: 是否可以像$_GET在PHP中一样在Node.js中获取查询字符串中的变量？我知道在Node.js中，我们可以在请求中获取URL。有没有获取查询字符串...
img: 
author: SamStafan十三
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以像</font></font><code>$_GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP中</font><font style="vertical-align: inherit;">一样在Node.js中获取查询字符串中的变量</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道在Node.js中，我们可以在请求中获取URL。</font><font style="vertical-align: inherit;">有没有获取查询字符串参数的方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1497篇《如何在Node.js上的Express.js中获取GET（查询字符串）变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>From my point of view I think that many people mix two different concepts. During the REST development I was familiar with passing information in the URL with two ways "path variables" and "request parameters"(query parameters). The RFC describes the parts of URI like this: <a href="https://tools.ietf.org/html/rfc3986#section-3" rel="nofollow noreferrer">enter link description here</a> So I understood that author would like to know how to pass request parameters. I would only want to make the topic easier to understand, but the solution was mentioned here many times. </p>

<p>You can get query parameters from the URI with <code>request.query.&lt;name of the parameter&gt;</code>, the second mentioned solution was <code>request.params.&lt;name of the parameter&gt;</code> and with this you can get the path variables.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Stafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You can use</p>

<pre><code>request.query.&lt;varible-name&gt;;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里老丝古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>It is so simple:</p>

<p><strong>Example URL:</strong></p>

<pre><code>http://stackoverflow.com:3000/activate_accountid=3&amp;activatekey=$2a$08$jvGevXUOvYxKsiBt.PpMs.zgzD4C/wwTsvjzfUrqLrgS3zXJVfVRK
</code></pre>

<p><strong>You can print all the values of query string by using:</strong></p>

<pre><code>console.log("All query strings: " + JSON.stringify(req.query));
</code></pre>

<p><strong>Output</strong></p>

<blockquote>
  <p>All query strings : { "id":"3","activatekey":"$2a$08$jvGevXUOvYxKsiBt.PpMs.zgzD4C/wwTsvjz
  fUrqLrgS3zXJVfVRK"}</p>
</blockquote>

<p><strong>To print specific:</strong></p>

<pre><code>console.log("activatekey: " + req.query.activatekey);
</code></pre>

<p><strong>Output</strong></p>

<blockquote>
  <p>activatekey: $2a$08$jvGevXUOvYxKsiBt.PpMs.zgzD4C/wwTsvjzfUrqLrgS3zXJVfVRK</p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
