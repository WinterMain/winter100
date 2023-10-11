---
layout: question
title:  在Redux Reducer中读取商店的初始状态
date:   2020-03-12T16:32:53.000Z
description: Redux应用程序中的初始状态可以通过两种方式设置：将其作为第二个参数传递给createStore（docs link）将其作为第一个参数传递给您...
img: 
author: Mandy梅Green
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux应用程序中的初始状态可以通过两种方式设置：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其作为第二个参数传递给</font></font><code>createStore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://redux.js.org/docs/api/createStore.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs link</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其作为第一个参数传递给您的（子）还原器（</font></font><a href="http://redux.js.org/docs/basics/Reducers.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将初始状态传递给商店，您如何从商店中读取该状态并将其作为化简器中的第一个参数？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1354篇《在Redux Reducer中读取商店的初始状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何从商店中读取该状态并将其作为化简器中的第一个参数？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CombineReducers（）为您完成这项工作。</font><font style="vertical-align: inherit;">编写它的第一种方法并没有真正的帮助：</font></font></p>

<pre><code>const rootReducer = combineReducers({ todos, users })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是另一种，这是等效的，更清楚：</font></font></p>

<pre><code>function rootReducer(state, action) {<font></font>
   todos: todos(state.todos, action),<font></font>
   users: users(state.users, action)<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之：Redux是将初始状态传递给reducer的人，您无需执行任何操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您打电话时，</font></font><code>createStore(reducer, [initialState])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是在让Redux知道第一个操作进入时要传递给reducer的初始状态是什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您提到的第二个选项仅在创建商店时未通过初始状态的情况下适用。</font><font style="vertical-align: inherit;">即</font></font></p>

<p><code>function todoApp(state = initialState, action)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当Redux没有传递状态时，状态才会被初始化</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
