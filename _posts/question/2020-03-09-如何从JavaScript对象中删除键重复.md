---
layout: question
title:  如何从JavaScript对象中删除键？\[重复\]
date:   2020-03-09T14:10:11.000Z
description:                                                                          ...
img: 
author: AStafan
category: question
answer: 2
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
                            <a href="/questions/208105/how-do-i-remove-a-property-from-a-javascript-object" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从JavaScript对象中删除属性？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （42个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-12-14 21：32：02Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有一个具有这种格式的对象：</font></font></p>

<pre><code>var thisIsObject= {<font></font>
   'Cow' : 'Moo',<font></font>
   'Cat' : 'Meow',<font></font>
   'Dog' : 'Bark'<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做一个通过键删除的函数：</font></font></p>

<pre><code>removeFromObjectByKey('Cow');
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第303篇《如何从JavaScript对象中删除键？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像这样简单：</font></font></p>

<pre class="lang-js prettyprint-override"><code>delete object.keyname;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint-override"><code>delete object["keyname"];
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" rel="noreferrer"><code>delete</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符允许您从对象中删除属性。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下示例都做同样的事情。</font></font></p>

<pre><code>// Example 1<font></font>
var key = "Cow";<font></font>
delete thisIsObject[key]; <font></font>
<font></font>
// Example 2<font></font>
delete thisIsObject["Cow"];<font></font>
<font></font>
// Example 3<font></font>
delete thisIsObject.Cow;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有兴趣，请阅读《</font></font><a href="http://perfectionkills.com/understanding-delete/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解删除》</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取详细说明。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
