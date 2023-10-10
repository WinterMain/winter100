---
layout: question
title:  如果我在ReactJS或React Native的类的构造函数中使用setState（）函数，将会发生什么？
date:   2020-04-07T03:13:12.000Z
description: 出于好奇，我只想知道如果我setState()在React Native或ReactJS的Class的构造函数中使用函数会发生什么？如：const...
img: 
author: 古一Green
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于好奇，我只想知道如果我</font></font><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Native或ReactJS的Class的构造函数中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">会发生什么</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">如：</font></font></p>



<pre class="lang-js prettyprint-override"><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.setState({title: 'new title'});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React将会发生什么生命周期？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有阅读React中的代码。</font><font style="vertical-align: inherit;">那样写恐怕会造成一些损害。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子宝儿神奇</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上确实是运行了一堆你可能不会在构造函数需要逻辑的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您执行操作时</font></font><code>state = {foo : "bar"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需将任何东西分配给javascript对象</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，就像</font><font style="vertical-align: inherit;">对待</font><font style="vertical-align: inherit;">其他任何对象一样。</font><font style="vertical-align: inherit;">（</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅此而已，只是每个组件局部的常规对象）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font></font><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除了分配给对象外，</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React还重新释放组件及其所有子元素。</font><font style="vertical-align: inherit;">您不需要在构造函数中使用它，因为无论如何该组件都没有被渲染。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋阳光</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：构造函数用于初始化状态。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：包含本地状态的组件具有称为“ this.state”的属性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SetState</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：React组件有一个可用的方法setState调用“ this.setState”使React重新渲染您的应用程序并更新DOM。您还可以在setState中跟踪prevstate如果在构造函数中使用setState，则会得到类似这：只能更新已安装或正在安装的组件。</font><font style="vertical-align: inherit;">这通常意味着您在未安装的组件上调用了setState（）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React没有在任何生命周期事件中限制使用setState。
</font></font><a href="https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React官方文档链接用于状态更新</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人告诉你不能直接在构造函数外部访问状态。</font><font style="vertical-align: inherit;">因此，您可以随时随地调用setState。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从技术上讲，setState旨在使用传入的一些新值来更新现有状态，这些新值将在下一个更新周期中通过批处理对React句柄做出反应，因此在setState之后立即使用console.log状态会给出陈旧的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在让我们关注如果在构造函数中调用setState会怎样。</font><font style="vertical-align: inherit;">React将准备将新状态传递给setState的批处理代码段，并触发更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管反应并没有阻止您这样做，但是它知道这样做可能会使您陷入困境，因此给您留下了一个很好的信息 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：setState（...）：只能更新已安装或正在安装的组件。</font><font style="vertical-align: inherit;">这通常意味着您在未安装的组件上调用了setState（）。</font><font style="vertical-align: inherit;">这是无人值守。</font><font style="vertical-align: inherit;">请检查组件的代码。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React会继续加载组件，但此批更新永远不会反映出来。</font><font style="vertical-align: inherit;">React如何检查您要更新的状态，因此，如果万一您尝试更新setState中尚未处于状态的新值，那么它将通过null检查。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取null的属性XXXXX</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如此得出的结论是：如果您尝试这样做，可能不会导致错误，但是您将不得不承担不良行为，因为即使触发这些更新也不会反映任何错误。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
