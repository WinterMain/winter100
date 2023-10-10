---
layout: question
title:  为什么React文档建议在componentDidMount中而不是componentWillMount中进行AJAX？
date:   2020-03-12T07:43:46.000Z
description: 标题说明了一切。我知道为什么componentDidMount它适用于需要DOM访问的任何内容，但是AJAX请求不一定或通常都需要这样做。是什么赋予了...
img: 
author: 蛋蛋阿飞
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题说明了一切。</font><font style="vertical-align: inherit;">我知道为什么</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于需要DOM访问的任何内容，但是AJAX请求不一定或通常都需要这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么赋予了？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于副作用。</font><font style="vertical-align: inherit;">添加事件侦听器，AJAX，更改DOM等。  </font></font></p>

<p><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很少有用；</font><font style="vertical-align: inherit;">特别是如果您关心服务器端渲染（添加事件侦听器会导致错误和泄漏，以及许多其他可能出错的东西）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">讨论</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从类组件中</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">组件是因为它的作用与构造函数相同。</font><font style="vertical-align: inherit;">它将保留在</font></font><code>createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件上。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一开始我也遇到了同样的问题。</font><font style="vertical-align: inherit;">我决定尝试提出请求，</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但最终</font><font style="vertical-align: inherit;">遇到</font><font style="vertical-align: inherit;">各种小问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当ajax调用完成新数据时，我正在触发渲染。</font><font style="vertical-align: inherit;">在某个时候，组件的渲染比从服务器获得响应要花费更多的时间，并且此时ajax回调正在触发未安装组件的渲染。</font><font style="vertical-align: inherit;">这是一种边缘情况，但可能还有更多，所以坚持下去是更安全的</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档设置，状态</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会触发重新渲染。</font><font style="vertical-align: inherit;">如果AJAX调用没有阻塞，并且</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功</font><font style="vertical-align: inherit;">返回一个</font><font style="vertical-align: inherit;">更新组件状态的，则一旦组件被渲染，响应就有可能到达。</font><font style="vertical-align: inherit;">由于</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会触发重新渲染，因此您将不会具有预期的行为，即使用请求的数据渲染的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用任何助焊剂库，并且所请求的数据最终存储在该组件已连接到（或从已连接的组件继承）的商店中，那么这将不是问题，因为该数据的接收很可能会更改道具最终。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
