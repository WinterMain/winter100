---
layout: question
title:  使用节点或Express返回JSON的正确方法
date:   2020-03-17T09:05:24.000Z
description: 因此，可以尝试获取以下JSON对象：$ curl -i -X GET http //echo.jsontest.com/key/value/anoth...
img: 
author: JinJin小宇宙
category: question
answer: 3
tags: json Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，可以尝试获取以下JSON对象：</font></font></p>

<pre><code>$ curl -i -X GET http://echo.jsontest.com/key/value/anotherKey/anotherValue<font></font>
HTTP/1.1 200 OK<font></font>
Access-Control-Allow-Origin: *<font></font>
Content-Type: application/json; charset=ISO-8859-1<font></font>
Date: Wed, 30 Oct 2013 22:19:10 GMT<font></font>
Server: Google Frontend<font></font>
Cache-Control: private<font></font>
Alternate-Protocol: 80:quic,80:quic<font></font>
Transfer-Encoding: chunked<font></font>
<font></font>
{<font></font>
   "anotherKey": "anotherValue",<font></font>
   "key": "value"<font></font>
}<font></font>
$<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以使用node或express在服务器的响应中生成完全相同的主体？</font><font style="vertical-align: inherit;">显然，可以设置标头并指示响应的内容类型将为“ application / json”，但是存在多种写入/发送对象的方法。</font><font style="vertical-align: inherit;">我经常看到的一种是通过使用以下形式的命令：</font></font></p>

<pre><code>response.write(JSON.stringify(anObject));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这有两点可以使人争辩为“问题”：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在发送一个字符串。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，最后没有换行符。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个想法是使用命令：</font></font></p>

<pre><code>response.send(anObject);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎是基于curl的输出发送JSON对象，类似于上面的第一个示例。</font><font style="vertical-align: inherit;">但是，当在终端上再次使用curl时，在主体的末端没有换行符。</font><font style="vertical-align: inherit;">那么，如何使用node或node / express实际写下这样的内容并在末尾添加换行符呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1920篇《使用节点或Express返回JSON的正确方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Express.js 3x开始，响应对象具有json（）方法，该方法可以为您正确设置所有标头，并以JSON格式返回响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>res.json({"foo": "bar"});
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用管道和许多处理器之一来美化它。</font><font style="vertical-align: inherit;">您的应用应始终以尽可能小的负载进行响应。</font></font></p>

<pre><code>$ curl -i -X GET http://echo.jsontest.com/key/value/anotherKey/anotherValue | underscore print
</code></pre>

<p><a href="https://github.com/ddopson/underscore-cli" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ddopson/underscore-cli</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Harry米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://expressjs.com/en/api.html#res.json" rel="noreferrer"><code>res.json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下应足够。</font></font></p>

<pre><code>app.get('/', (req, res) =&gt; res.json({ answer: 42 }));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>res.json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数使用转换您传递给JSON的参数</font></font><a href="http://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript" rel="noreferrer"><code>JSON.stringify()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://masteringjs.io/tutorials/express/json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将</font></font><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头</font><font style="vertical-align: inherit;">设置为</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>application/json; charset=utf-8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便HTTP客户端知道自动解析响应。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
