---
layout: question
title:  Angular 2-直接从Observable返回数据
date:   2020-06-02T01:47:27.000Z
description: 我一直在试图解决这个问题，但我一直无法阅读的大量文档给了我这个问题的答案。我有一个直接与API对话并返回一个可观察到的事件的服务，在正常情况下，我会订...
img: 
author: Gil
category: question
answer: 0
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在试图解决这个问题，但我一直无法阅读的大量文档给了我这个问题的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个直接与API对话并返回一个可观察到的事件的服务，在正常情况下，我会订阅该数据并对其执行所需的操作，但是在使用来自宁静服务的请求的辅助服务中，我需要能够从请求中返回值。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">getSomething</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_restService</span><span class="pun">.</span><span class="pln">addRequest</span><span class="pun">(</span><span class="str">'object'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'method'</span><span class="pun">).</span><span class="pln">run</span><span class="pun">()</span><span class="pln">
        </span><span class="pun">.</span><span class="pln">subscribe</span><span class="pun">(</span><span class="pln">
            res </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                res</span><span class="pun">;</span><span class="pln">
            </span><span class="pun">},</span><span class="pln">
            err </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                console</span><span class="pun">.</span><span class="pln">error</span><span class="pun">(</span><span class="pln">err</span><span class="pun">);</span><span class="pln">
            </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

returnSomething</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getSomething</span><span class="pun">();</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的快速示例中，我想知道是否有什么方法可以</font></font><code>res</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>getSomething()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font><font style="vertical-align: inherit;">返回</font></font><code>returnSomething()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果无法以这种方式实现，那有什么选择呢？</font><font style="vertical-align: inherit;">我要补充一点，_restService非常依赖，我真的不想开始弄糟它。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4241篇《Angular 2-直接从Observable返回数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
