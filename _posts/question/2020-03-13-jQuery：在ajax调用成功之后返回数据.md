---
layout: question
title:  jQuery：在ajax调用成功之后返回数据
date:   2020-03-13T08:12:54.000Z
description:                                                                          ...
img: 
author: Davaid泡芙
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从异步调用返回响应？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （38个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2013-06-19 10：07：30Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这样的事情，它是对脚本的简单调用，该脚本给了我一个值，一个字符串。</font></font></p>

<pre><code>function testAjax() {<font></font>
    $.ajax({<font></font>
      url: "getvalue.php",  <font></font>
      success: function(data) {<font></font>
         return data; <font></font>
      }<font></font>
   });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如果我这样称呼</font></font></p>

<pre><code>var output = testAjax(svar);  // output will be undefined...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么我该如何返回值？</font><font style="vertical-align: inherit;">下面的代码似乎也不起作用...</font></font></p>

<pre><code>function testAjax() {<font></font>
    $.ajax({<font></font>
      url: "getvalue.php",  <font></font>
      success: function(data) {<font></font>
<font></font>
      }<font></font>
   });<font></font>
   return data; <font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1437篇《jQuery：在ajax调用成功之后返回数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Davaid斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将async选项添加到false </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ajax调用之外返回。</font></font></p>

<pre><code>function testAjax() {<font></font>
    var result="";<font></font>
    $.ajax({<font></font>
      url:"getvalue.php",<font></font>
      async: false,  <font></font>
      success:function(data) {<font></font>
         result = data; <font></font>
      }<font></font>
   });<font></font>
   return result;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
