---
layout: question
title:  ReactJS中的componentWillMount和componentDidMount有什么区别？
date:   2020-03-12T09:33:42.000Z
description: 我在（React.Component）上查看了Facebook的文档，其中提到了如何componentWillMount在客户端/服务器component...
img: 
author: 番长斯丁
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在（</font></font><a href="https://facebook.github.io/react/docs/component-specs.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.Component</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">上查看了Facebook的文档，</font><font style="vertical-align: inherit;">其中提到了如何</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在客户端/服务器</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上调用</font><font style="vertical-align: inherit;">而</font><font style="vertical-align: inherit;">仅在客户端上调用。</font><font style="vertical-align: inherit;">这是什么</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做的服务器？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档（</font></font><a href="https://facebook.github.io/react/docs/react-component.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/react/docs/react-component.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">will</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前缀的方法</font><strong><em><font style="vertical-align: inherit;">会</font></em></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生某些事情</font><strong><font style="vertical-align: inherit;">之前立即</font></strong><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事情发生</font><strong><font style="vertical-align: inherit;">后，</font></strong><font style="vertical-align: inherit;">以</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">did</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">前缀的方法</font><font style="vertical-align: inherit;">称为正确</font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了补充FakeRainBrigand所说的，</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器和客户端上渲染React时会被调用，但</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能在客户端上被调用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三JimHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">的INITIAL之前完成</font><font style="vertical-align: inherit;">，并用于评估道具并基于它们执行任何额外的逻辑（通常还用于更新状态），因此可以在服务器上执行以获取第一个服务器端呈现的标记。</font></font></p>

<p><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在DOM更新</font><font style="vertical-align: inherit;">之后的初始操作之后执行的</font><font style="vertical-align: inherit;">（但至关重要的是，在此DOM更新绘制到浏览器之前，允许您与DOM本身进行各种高级交互）。</font><font style="vertical-align: inherit;">当然，这只能在浏览器本身中发生，因此不会作为SSR的一部分发生，因为服务器只能生成标记，而不能生成DOM本身，这是在使用SSR发送到浏览器后完成的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您说的与DOM的高级交互？</font><font style="vertical-align: inherit;">Whaaaat ?? ...是的-由于DOM已更新（但是用户尚未在浏览器中看到更新），因此可以通过使用拦截实际绘制到屏幕上</font></font><code>window.requestAnimationFrame</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后执行诸如测量实际将输出的DOM元素，您可以对其执行进一步的状态更改，例如，将具有未知可变长度内容的元素的高度动画化（因为您现在可以测量内容并为动画分配高度）非常有用，或避免在某些状态更改期间出现内容闪烁的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要非常小心，但在任何保护状态的变化</font></font><code>componentDid...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为否则会造成无限循环，因为状态的改变也将导致重新绘制，因此另一个</font></font><code>componentDid...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和和和</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentWillMount本质上是构造函数。</font><font style="vertical-align: inherit;">您可以设置不影响渲染的实例属性，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从存储中提取数据</font><font style="vertical-align: inherit;">并使用setState </font><font style="vertical-align: inherit;">设置实例属性</font><font style="vertical-align: inherit;">，以及设置组件时需要运行的其他无副作用的简单代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它很少需要，ES6类根本不需要。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentWillMount   </font></font><a href="https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这里有一个“陷阱”：在渲染发生之前，不会异步返回获取数据。</font><font style="vertical-align: inherit;">这意味着组件将使用空数据至少渲染一次。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法“暂停”渲染以等待数据到达。</font><font style="vertical-align: inherit;">您不能以某种方式从componentWillMount返回诺言或在setTimeout中争执。</font></font></p>
</blockquote>

<p><a href="https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/premounting_with_componentwillmount.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/premounting_with_componentwillmount.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的组件将无权访问本机UI（DOM等）。</font><font style="vertical-align: inherit;">我们也将无法访问子引用，因为它们尚未创建。</font><font style="vertical-align: inherit;">componentWillMount（）是我们处理配置，更新状态以及通常为第一个渲染准备的机会。</font><font style="vertical-align: inherit;">这意味着我们可以根据道具值开始执行计算或处理。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
