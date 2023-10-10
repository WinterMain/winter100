---
layout: question
title:  Redux中的store.dispatch是同步还是异步
date:   2020-03-12T10:09:48.000Z
description: 我意识到这是一个基本问题，但是我在其他地方找不到答案。是store.dispatch同步还是异步Redux？万一它是异步的，是否有可能在动作传播后...
img: 
author: ItachiTom
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这是一个基本问题，但是我在其他地方找不到答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>store.dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步还是异步</font></font><code>Redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一它是异步的，是否有可能在动作传播后添加回调，如可能的那样</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1255篇《Redux中的store.dispatch是同步还是异步》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有人比</font></font><a href="https://github.com/reduxjs/redux/blob/fe0ace21910bc596cd8f3ec8ccc78bccdae7d426/src/createStore.js#L158-L216" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码本身</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更了解</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">=）如您所见，它</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是绝对同步的。</font><font style="vertical-align: inherit;">这里唯一的警告是存储</font></font><code>enhancers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以（并且可以）替代</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">例如，看看</font></font><a href="https://github.com/reactjs/redux/blob/master/src/applyMiddleware.js#L19" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>applyMiddleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增强</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以让你在更换默认插孔中间件</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与它自己的实现方法。</font><font style="vertical-align: inherit;">尽管我从未见过任何Redux </font></font><code>enhancer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上会消除同步性</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AFAIK，调度动作是同步的。</font><font style="vertical-align: inherit;">如果您愿意解决异步调用，则可以</font><font style="vertical-align: inherit;">在redux中</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/gaearon/redux-thunk" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">thunk-middleware</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中将dispatch作为回调函数提供，您可以根据需要调用它。</font><font style="vertical-align: inherit;">有关更多信息，请按作者本身在SO上检查以下答案：</font></font><a href="https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在超时的情况下调度Redux操作？</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
