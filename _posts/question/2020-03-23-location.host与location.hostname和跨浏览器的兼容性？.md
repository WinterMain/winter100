---
layout: question
title:  location.host与location.hostname和跨浏览器的兼容性？
date:   2020-03-23T07:15:49.000Z
description: 与检查用户代理是否通过正确的域进行访问相比，以下哪一项最有效？如果他们使用某种Web代理访问域，我们想展示一个基于js的小“顶栏”样式警告（因为它倾向...
img: 
author: Stafan
category: question
answer: 5
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与检查用户代理是否通过正确的域进行访问相比，以下哪一项最有效？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果他们使用某种Web代理访问域，我们想展示一个基于js的小“顶栏”样式警告（因为它倾向于破坏JS）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在考虑使用以下内容：</font></font></p>

<pre><code>var r = /.*domain\.com$/;<font></font>
if (r.test(location.hostname)) {<font></font>
    // showMessage ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将照顾到我们曾经使用过的任何子域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们应该使用哪个主机名或主机名？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox 5和Chrome 12中：</font></font></p>

<pre><code>console.log(location.host);<font></font>
console.log(location.hostname);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">..对两个都显示相同的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是因为端口实际上不在地址栏中吗？</font></font></p>

<p><a href="http://www.w3schools.com/jsref/obj_location.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3Schools</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说主机包含端口。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该验证一下location.host/hostname还是在IE6 +中以及我们将要存在的所有其他内容中完全确定？</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2899篇《location.host与location.hostname和跨浏览器的兼容性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="http://bl.ocks.org/3070589" rel="noreferrer"><img src="https://i.stack.imgur.com/pt015.png" alt="互动链接解剖"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一个小提示：</font></font><a href="http://bl.ocks.org/3070589" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">交互式链接剖析</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></p>


<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之（假设位于</font></font><code>http://example.org:8888/foo/bar#bang</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>
<ul><li><code>hostname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 给你 </font></font><code>example.org</code></li>
<li><code>host</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 给你 </font></font><code>example.org:8888</code></li></ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的主要问题已在上面回答。</font><font style="vertical-align: inherit;">我只是想指出您使用的正则表达式有一个错误。</font><font style="vertical-align: inherit;">它也将在</font></font><code>foo-domain.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不属于的子域上成功</font></font><code>domain.com</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您真正想要的是：</font></font></p>

<pre><code>/(^|\.)domain\.com$/
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果指定了端口号，则主机仅包含端口号。</font><font style="vertical-align: inherit;">如果URL中没有专门的端口号，则它返回与主机名相同的端口号。</font><font style="vertical-align: inherit;">您可以选择是否要匹配端口号。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://developer.mozilla.org/en/window.location"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en/window.location</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您希望主机名仅获取站点名称。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN：</font><a href="https://developer.mozilla.org/en/DOM/window.location" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://developer.mozilla.org/en/DOM/window.location" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/DOM/window.location</font></font></a></p>

<p>It seems that you will get the same result for both, but <code>hostname</code> contains clear host name without brackets or port number.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>Just to add a note that Google Chrome browser has origin attribute for the location. which gives you the entire domain from protocol to the port number as shown in the below screenshot. 
<a href="https://i.stack.imgur.com/jmGCE.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/jmGCE.png" alt="chrome开发人员工具"></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
