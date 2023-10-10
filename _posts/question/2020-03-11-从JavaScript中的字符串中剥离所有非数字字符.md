---
layout: question
title:  从JavaScript中的字符串中剥离所有非数字字符
date:   2020-03-11T07:13:39.000Z
description: 考虑一个非DOM场景，您想使用JavaScript / ECMAScript从字符串中删除所有非数字字符。范围内的任何字符0 - 9都应保留。var ...
img: 
author: 西门小宇宙
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑一个非DOM场景，您想使用JavaScript / ECMAScript从字符串中删除所有非数字字符。</font><font style="vertical-align: inherit;">范围内的任何字符</font></font><code>0 - 9</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都应保留。</font></font></p>

<pre><code>var myString = 'abc123.8&lt;blah&gt;';<font></font>
<font></font>
//desired output is 1238<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将如何用纯JavaScript实现此目标？</font><font style="vertical-align: inherit;">请记住，这是一个非DOM方案，因此jQuery和其他涉及浏览器和按键事件的解决方案都不适合。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小卤蛋梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要用它来保留浮点数，请使用此 </font></font></p>

<pre><code>var s = "-12345.50 €".replace(/[^\d.-]/g, ''); // gives "-12345.50"
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Harry十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" rel="noreferrer"><code>.replace</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式为</font><font style="vertical-align: inherit;">的字符串</font><font style="vertical-align: inherit;">方法</font></font><code>\D</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是与所有非数字匹配的速记字符类：</font></font></p>

<pre><code>myString = myString.replace(/\D/g,'');
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于以下内容：</font></font></p>

<pre><code>yourString = yourString.replace ( /[^0-9]/g, '' );
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一泡芙小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的脚本实现支持正则表达式，请使用正则表达式。</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>myString.replace(/[^0-9]/g, '');
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
