---
layout: question
title:  数组开头的javascript push元素\[重复\]
date:   2020-03-12T10:01:57.000Z
description:                                                                          ...
img: 
author: 小小Stafan宝儿
category: question
answer: 3
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
                            <a href="/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Javascript数组的开头添加新的数组元素？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （13个回答）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-01-07 19：39：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个对象数组，我想在该数组的开头推送一个元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个：</font></font></p>

<pre><code>var TheArray = TheObjects.Array;<font></font>
TheArray.push(TheNewObject);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在末尾添加TheNewObject。</font><font style="vertical-align: inherit;">我是否需要创建一个新数组，将TheNewObject添加到其中，然后遍历TheArray并将每个元素添加到该数组中？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1249篇《数组开头的javascript push元素\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift"><code>unshift</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它通过将参数添加到开头来修改现有数组：</font></font></p>

<pre><code>TheArray.unshift(TheNewObject);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于一个丑陋的版本</font></font><code>unshift</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>TheArray.splice(0, 0, TheNewObject);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>.unshift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到一个数组的开始。</font></font></p>

<pre><code>TheArray.unshift(TheNewObject);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档的信息</font></font><code>unshift()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">请参见MDN；</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关其他数组方法的信息，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见</font><font style="vertical-align: inherit;">此处</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，就像有</font></font><code>.push()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.pop()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为数组的结尾，有</font></font><code>.shift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.unshift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为数组的开始。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
