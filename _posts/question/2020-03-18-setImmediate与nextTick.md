---
layout: question
title:  setImmediate与nextTick
date:   2020-03-18T08:52:37.000Z
description: Node.js版本0.10已于今天发布并引入   setImmediate。该API的变化文档建议做递归时使用它nextTick调用。从MDN所说的来...
img: 
author: 凯斯丁
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js版本0.10已于今天发布并引入   </font></font><code>setImmediate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/nodejs/node/wiki/API-changes-between-v0.8-and-v0.10" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API的变化</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档建议做递归时使用它</font></font><code>nextTick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN所说的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来看，它与</font></font><code>process.nextTick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>nextTick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时候应该使用</font></font><code>setImmediate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？什么</font><font style="vertical-align: inherit;">时候应该使用</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LSam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您查看</font><font style="vertical-align: inherit;">专用于Loop的</font></font><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分，以更好地理解。</font><font style="vertical-align: inherit;">从那里摘录的一些片段：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就用户而言，我们有两个呼叫类似，但是它们的名称令人困惑。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">process.nextTick（）在同一阶段立即触发</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setImmediate（）在</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
事件循环</font><font style="vertical-align: inherit;">的以下迭代或“滴答”中触发</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，名称应互换。</font><font style="vertical-align: inherit;">process.nextTick（）比setImmediate（）触发得更快，但这是过去的产物，不太可能改变。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单来说，process.NextTick（）将在事件循环的下一个计时执行。</font><font style="vertical-align: inherit;">但是，setImmediate本质上具有一个单独的阶段，该阶段确保仅在IO回调和轮询阶段之后才调用在setImmediate（）下注册的回调。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考此链接以获得更好的解释：</font><a href="https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and -its-metrics-c4907b19da4c</font></font></a></p>

<p><a href="https://i.stack.imgur.com/or0UH.png" rel="noreferrer"><img src="https://i.stack.imgur.com/or0UH.png" alt="简化的事件循环事件"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom梅Green</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在答案中的注释中，没有明确指出nextTick从Macrosemantics转变为Microsemantics。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点0.9之前（引入setImmediate时），nextTick在下一个调用堆栈的开始处运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从0.9节点开始，nextTick在现有调用栈的末尾运行，而setImmediate在下一个调用栈的末尾运行</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/YuzuJS/setImmediate"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/YuzuJS/setImmediate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取工具和详细信息</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>setImmediate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将函数放在事件队列中已经存在的任何I / O事件回调后面，</font><font style="vertical-align: inherit;">请使用</font><font style="vertical-align: inherit;">此函数。</font><font style="vertical-align: inherit;">用于</font></font><code>process.nextTick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将函数有效地放在事件队列的开头，以便在当前函数完成后立即执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在您尝试使用递归分解长时间运行且受CPU限制的作业的情况下，您现在想使用</font></font><code>setImmediate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>process.nextTick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将下一个迭代</font><font style="vertical-align: inherit;">放入</font><font style="vertical-align: inherit;">队列中，因为否则任何I / O事件回调都不会获得机会在迭代之间运行。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
