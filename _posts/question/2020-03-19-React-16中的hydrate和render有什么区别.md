---
layout: question
title:  React 16中的hydrate（）和render（）有什么区别？
date:   2020-03-19T02:00:45.000Z
description: 我已经阅读了文档，但是我并没有真正理解React 16 hydrate()和之间的区别render()。我知道hydrate()用来结合SSR和客户端...
img: 
author: 古一蓝染大人别太浪
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了文档，但是我并没有真正理解</font><font style="vertical-align: inherit;">React 16 </font></font><code>hydrate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的区别</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道</font></font><code>hydrate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来结合SSR和客户端渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以解释一下什么是补水，然后ReactDOM有什么区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2234篇《React 16中的hydrate（）和render（）有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将功能放回到已经在服务器端React中呈现的HTML中的整个过程称为水合。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对曾经渲染过的HTML进行重新渲染的过程称为水合。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果我们尝试通过调用应用程序来充水我们的应用程序，那么</font></font><code>ReactDOM.render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该通过调用来完成它</font></font><code>ReactDOM.hydrate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德西门Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">水合物基本上用于SSR（服务器端渲染）。</font><font style="vertical-align: inherit;">SSR为您提供了从服务器提供的框架或HTML标记，因此，第一次在页面加载时不为空白，搜索引擎机器人可以将其索引为SEO（SSR的一个用例）。</font><font style="vertical-align: inherit;">因此，水合物会将JS添加到您的页面或要应用SSR的节点。</font><font style="vertical-align: inherit;">这样您的页面才能响应用户执行的事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染用于在客户端浏览器Plus上渲染组件，如果尝试将水合物替换为渲染，则会收到警告，提示渲染已弃用，在SSR情况下无法使用。</font><font style="vertical-align: inherit;">由于它比水合物慢，因此将其除去。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿DavaidL</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了以上...</font></font></p>

<p><code>ReactDOM.hydrate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与相同</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是它用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">水合（附加事件侦听器）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其HTML内容由ReactDOMServer呈现的容器。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React将尝试将事件侦听器附加到现有标记</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缓慢，不建议使用ReactDOM.render（）水合服务器渲染的容器，</font><font style="vertical-align: inherit;">因此</font><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">React 17</font></em><font style="vertical-align: inherit;">中将其删除，请</font></font><code>hydrate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
