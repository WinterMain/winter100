---
layout: question
title:  如何从状态/存储在redux-saga函数中获取信息？
date:   2020-03-12T06:39:56.000Z
description: 如何在saga函数中访问redux状态？简短答案：import { select } from 'redux-saga';...let dat...
img: 
author: Eva卡卡西
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在saga函数中访问redux状态？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短答案：</font></font></strong></p>

<pre><code>import { select } from 'redux-saga';<font></font>
...<font></font>
let data = yield select(stateSelectorFunction);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1002篇《如何从状态/存储在redux-saga函数中获取信息？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是“选择器”功能的作用。</font><font style="vertical-align: inherit;">您将整个状态树传递给它们，然后它们返回部分状态。</font><font style="vertical-align: inherit;">调用选择的代码并不需要知道</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的状态数据，只是它返回。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">某些示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://redux.js.org/docs/recipes/ComputingDerivedData.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://redux.js.org/docs/recipes/ComputingDerivedData.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个传奇中，</font></font><a href="https://github.com/redux-saga/redux-saga/tree/master/docs/api#selectselector-args" rel="noreferrer"><code>select()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于执行选择器。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
