---
layout: question
title:  使用jQuery中止Ajax请求
date:   2020-03-09T11:43:28.000Z
description: 使用jQuery，如何取消/中止尚未收到响应的Ajax请求？...
img: 
author: 小宇宙GO
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery，如何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消/中止</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尚未收到响应</font><strong><font style="vertical-align: inherit;">的Ajax请求</font></strong><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第221篇《使用jQuery中止Ajax请求》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿蛋蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果   </font></font><code>xhr.abort();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  导致页面重新加载，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以</font></font><code>onreadystatechange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中止之前进行</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">以防止：</font></font></p>

<pre><code>// ↓ prevent page reload by abort()<font></font>
xhr.onreadystatechange = null;<font></font>
// ↓ may cause page reload<font></font>
xhr.abort();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有可靠的方法可以执行此操作，一旦请求继续执行，我什至不会尝试。</font><font style="vertical-align: inherit;">做出合理反应</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，它可能会在以下情况下发生：用户单击按钮的次数过多，从而触发了许多连续的XHR，这里您有很多选择，要么阻塞按钮直到XHR返回，要么在另一个运行提示时不触发新的XHR用户向后倾斜-或放弃任何未决的XHR响应（最近的响应）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了轮询问题，一旦页面关闭，轮询就会继续进行，因此，由于我关闭了页面关闭后的下一个50秒钟，因为设置了mysql值，所以用户会错过更新，即使我杀死了ajax请求，我想通了，使用$ _SESSION设置变量将不会在民意测验中对其自身进行更新，直到其结束并且新的民意测验已经开始，因此我所做的是在数据库中将值设置为0 = offpage，轮询我查询该行并返回false；</font><font style="vertical-align: inherit;">当它为0时，轮询中的查询显然会为您提供当前值...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对您有所帮助 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用ajax.abort（）例如，您可以在发送另一个这样的请求之前中止任何待处理的ajax请求</font></font></p>

<pre><code>//check for existing ajax request<font></font>
if(ajax){ <font></font>
 ajax.abort();<font></font>
 }<font></font>
//then you make another ajax request<font></font>
$.ajax(<font></font>
 //your code here<font></font>
  );<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在做一个实时搜索解决方案，需要取消可能花费比最新/最新请求更长的请求。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我使用的是这样的：</font></font></p>

<pre><code>//On document ready<font></font>
var ajax_inprocess = false;<font></font>
<font></font>
$(document).ajaxStart(function() {<font></font>
ajax_inprocess = true;<font></font>
});<font></font>
<font></font>
$(document).ajaxStop(function() {<font></font>
ajax_inprocess = false;<font></font>
});<font></font>
<font></font>
//Snippet from live search function<font></font>
if (ajax_inprocess == true)<font></font>
{<font></font>
    request.abort();<font></font>
}<font></font>
//Call for new request <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好总是这样做。</font></font></p>

<pre><code>var $request;<font></font>
if ($request != null){ <font></font>
    $request.abort();<font></font>
    $request = null;<font></font>
}<font></font>
<font></font>
$request = $.ajax({<font></font>
    type : "POST", //TODO: Must be changed to POST<font></font>
    url : "yourfile.php",<font></font>
    data : "data"<font></font>
    }).done(function(msg) {<font></font>
        alert(msg);<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果检查一条if语句来检查ajax请求是否为null，那就更好了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您进行的调用保存在一个数组中，然后对每个调用xhr.abort（）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巨大的注意事项：您可以中止请求，但这只是客户端。</font><font style="vertical-align: inherit;">服务器端可能仍在处理请求。</font><font style="vertical-align: inherit;">如果您将PHP或ASP之类的数据用于会话数据，则会话数据将被锁定，直到ajax完成。</font><font style="vertical-align: inherit;">因此，要允许用户继续浏览网站，必须调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">session_write_close</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）。</font><font style="vertical-align: inherit;">这将保存会话并解锁它，以便其他等待继续的页面将继续。</font><font style="vertical-align: inherit;">如果没有此功能，则可能有几页正在等待删除锁。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求，这意味着一旦它被发送出去就可以了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一您的服务器由于AJAX请求而开始非常昂贵的操作，您最好的办法是打开服务器以侦听取消请求，然后发送一个单独的AJAX请求来通知服务器停止其正在执行的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，只需忽略AJAX响应。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AJAX请求可能无法按启动顺序完成。</font><font style="vertical-align: inherit;">除了放弃</font><font style="vertical-align: inherit;">最近的响应之外</font><font style="vertical-align: inherit;">，您还可以选择</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有AJAX响应：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个柜台</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发起AJAX请求时增加计数器</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用计数器的当前值“标记”请求</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在成功回调中，将图章与计数器进行比较，以检查它是否是最新请求</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码粗略概述：</font></font></p>

<pre><code>var xhrCount = 0;<font></font>
function sendXHR() {<font></font>
    // sequence number for the current invocation of function<font></font>
    var seqNumber = ++xhrCount;<font></font>
    $.post("/echo/json/", { delay: Math.floor(Math.random() * 5) }, function() {<font></font>
        // this works because of the way closures work<font></font>
        if (seqNumber === xhrCount) {<font></font>
            console.log("Process the response");<font></font>
        } else {<font></font>
            console.log("Ignore the response");<font></font>
        }<font></font>
    });<font></font>
}<font></font>
sendXHR();<font></font>
sendXHR();<font></font>
sendXHR();<font></font>
// AJAX requests complete in any order but only the last <font></font>
// one will trigger "Process the response" message<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/vyy3mn9x/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle上的演示</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法撤回该请求，但可以设置一个超时值，在此之后将忽略响应。</font><font style="vertical-align: inherit;">请参阅此</font></font><a href="http://docs.jquery.com/Ajax/jQuery.ajax#options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取jquery AJAX选项。</font><font style="vertical-align: inherit;">我相信如果超过超时时间，就会调用您的错误回调。</font><font style="vertical-align: inherit;">每个AJAX请求都已经存在默认超时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font><font style="vertical-align: inherit;">在请求对象上</font><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/DOM/XMLHttpRequest#abort%28%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">abort（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，但是，尽管这将导致客户端停止侦听该事件，但它</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会阻止服务器对其进行处理。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
