---
layout: question
title:  React与React Fiber之间有什么区别？
date:   2020-03-18T09:11:33.000Z
description: 我只是听说反应纤维已经准备好了。react和react-fiber之间的最大区别是什么？学习针对这些差异的全新概念是否值得？...
img: 
author: 斯丁Tony
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是听说反应纤维已经准备好了。</font><font style="vertical-align: inherit;">react和react-fiber之间的最大区别是什么？</font><font style="vertical-align: inherit;">学习针对这些差异的全新概念是否值得？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Fiber</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是对React核心算法的一种持续实现，只是对React的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整内部重写</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Fiber是对React核心的完整，向后兼容的重写。</font></font></p>

<p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Fiber</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的目标</font><font style="vertical-align: inherit;">是提高其对动画，布局和手势等区域的适用性。</font><font style="vertical-align: inherit;">它的标题功能是增量渲染：将渲染工作分成多个块并将其分布到多个帧中的能力。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Fiber</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个虚拟的堆栈框架，React Fiber是专用于React组件的堆栈框架的重新实现。</font><font style="vertical-align: inherit;">每个光纤都可以视为虚拟堆栈框架，其中来自框架的信息将保留在堆的内存中，并且由于信息保存在堆中，因此您可以控制和处理数据结构并根据需要处理相关信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://www.youtube.com/watch?v=ZCuYPiUIONs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此视频中，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到Lin Clark的出色解释</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请检查以下链接，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1. </font></font><a href="https://giamir.com/what-is-react-fiber" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是反应纤维？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2. </font></font><a href="https://github.com/acdlite/react-fiber-architecture" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Fiber体系结构</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3. </font></font><a href="https://github.com/facebook/react/issues/10294" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16对您意味着什么？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对您有帮助！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16 beta已于数小时前发布：</font></font><a href="https://github.com/facebook/react/issues/10294" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/facebook/react/issues/10294" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/facebook/react/issues/10294</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重写的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React核心</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（内部称为“光纤”）应保持与现有应用程序的兼容性，除了一些重大更改（请参阅Github上的发行说明）。</font><font style="vertical-align: inherit;">由于大多数更改都在幕后，因此您无需再次学习全新的概念。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的每个人都已经提到了反应纤维所具有的所有新功能。我将重点介绍反应纤维为改善自身所做的核心变化。</font><font style="vertical-align: inherit;">React Fiber实际上将允许浏览器暂停和播放不同的任务。</font><font style="vertical-align: inherit;">它将优先于某些任务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果特定的动画比背景中的数据获取重要而不是重要。</font><font style="vertical-align: inherit;">它将把动画任务作为执行堆栈中的优先级，一旦完成动画或花费太长时间就可以切换到数据获取任务。</font><font style="vertical-align: inherit;">为了允许这些现代浏览器打开了一个名为requestIdleCallback的API，该API允许暂停和播放任务。 
</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">requestIdleCallback</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应纤维正在使用什么。</font><font style="vertical-align: inherit;">这就是反应纤维在引擎盖中使用的东西，这太神奇了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我可能在几点上并不完全正确。</font><font style="vertical-align: inherit;">我愿意接受任何更正</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilSam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了每个人都说了些什么，我写了一篇博客文章，从以下角度介绍了Fiber的真正含义：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React如何渲染预纤维</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纤维前有什么问题</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是纤维及其如何解决这些问题。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><a href="https://blog.logrocket.com/deep-dive-into-react-fiber-internals/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">查看我的文章</font></font><a href="https://blog.logrocket.com/deep-dive-into-react-fiber-internals/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
