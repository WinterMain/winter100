---
layout: question
title:  如何在localStorage中存储阵列？\[重复\]
date:   2020-03-11T12:45:46.000Z
description:                                                                          ...
img: 
author: 古一番长小小
category: question
answer: 4
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
                            <a href="/questions/2010892/storing-objects-in-html5-localstorage" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML5 localStorage中存储对象</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （21个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2013-05-23 06：11：52Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我不需要localStorage，我的代码将如下所示：</font></font></p>

<pre><code>var names=new Array(); <font></font>
names[0]=prompt("New member name?");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可行。</font><font style="vertical-align: inherit;">但是，我需要将此变量存储在localStorage中，事实证明它很顽固。</font><font style="vertical-align: inherit;">我试过了：</font></font></p>

<pre><code>var localStorage[names] = new Array();<font></font>
localStorage.names[0] = prompt("New member name?");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要去哪里错了？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第821篇《如何在localStorage中存储阵列？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅支持字符串。</font><font style="vertical-align: inherit;">使用</font></font><code>JSON.stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>JSON.parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var names = [];<font></font>
names[0] = prompt("New member name?");<font></font>
localStorage.setItem("names", JSON.stringify(names));<font></font>
<font></font>
//...<font></font>
var storedNames = JSON.parse(localStorage.getItem("names"));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>sessionStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能处理字符串。</font><font style="vertical-align: inherit;">您可以扩展默认的存储对象以处理数组和对象。</font><font style="vertical-align: inherit;">只需包含此脚本并使用新方法即可：</font></font></p>

<pre><code>Storage.prototype.setObj = function(key, obj) {<font></font>
    return this.setItem(key, JSON.stringify(obj))<font></font>
}<font></font>
Storage.prototype.getObj = function(key) {<font></font>
    return JSON.parse(this.getItem(key))<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>localStorage.setObj(key, value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存一个数组或对象，并</font></font><code>localStorage.getObj(key)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对其进行检索。</font><font style="vertical-align: inherit;">相同的方法适用于该</font></font><code>sessionStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅使用新方法访问存储，则每个值将在保存之前进行转换并转换为JSON字符串，并在由getter返回之前将其解析。</font></font></p>

<p><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font><a href="http://www.acetous.de/p/152"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.acetous.de/p/152"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.acetous.de/p/152</font></font></a></sub></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC60211911</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON方法可行，即在7上，您需要json2.js，它可以完美工作，尽管有一条评论说否则上面有localStorage。</font><font style="vertical-align: inherit;">它确实看起来像是麻烦最少的最佳解决方案。</font><font style="vertical-align: inherit;">当然，可以编写脚本来执行与json2基本上相同的操作，但是这样做没有什么意义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少使用以下版本字符串存在localStorage，但如上所述，您需要包括json2.js，因为浏览器本身不包含该文件：4.0（兼容； MSIE 7.0； Windows NT 6.1； WOW64； Trident / 5.0； SLCC2 ; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; BRI / 2; NP06; .NET4.0C; .NET4.0E; Zune 4.7）（我会对此发表评论）回复，但不能）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro西门樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>JSON.stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>JSON.parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否建议！</font><font style="vertical-align: inherit;">这样可以防止包含分隔符的成员名称（例如，成员名称</font></font><code>three|||bars</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">出现罕见但可能的问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
