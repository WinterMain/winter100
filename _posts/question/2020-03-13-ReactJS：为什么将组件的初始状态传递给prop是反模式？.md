---
layout: question
title:  ReactJS：为什么将组件的初始状态传递给prop是反模式？
date:   2020-03-13T09:08:34.000Z
description: 我已经在SocketIO的帮助下创建了一个小的ReactJS仪表板，用于实时更新。即使我更新了仪表板，也使我感到不确定我是否正确执行了操作。最让我感到...
img: 
author: Green老丝Itachi
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在SocketIO的帮助下创建了一个小的ReactJS仪表板，用于实时更新。</font><font style="vertical-align: inherit;">即使我更新了仪表板，也使我感到不确定我是否正确执行了操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最让我感到</font></font><a href="http://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">困扰的是getInitialState中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html"><font style="vertical-align: inherit;">Props作为反模式</font></a><font style="vertical-align: inherit;">发布。</font><font style="vertical-align: inherit;">我创建了一个仪表板，该仪表板从服务器获取实时更新，除了加载页面外，不需要用户交互。</font><font style="vertical-align: inherit;">根据我的阅读，</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该包含一些内容，这些内容将确定是否应重新渲染该组件，以及</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">....我还不知道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，最初调用时</font></font><code>React.render(&lt;MyComponent /&gt;, ...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只能传递道具。</font><font style="vertical-align: inherit;">就我而言，我从服务器获取了所有数据，因此</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何</font><font style="vertical-align: inherit;">，最初的道具最终</font><font style="vertical-align: inherit;">还是会</font><font style="vertical-align: inherit;">结束</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我所有的组件都有这样的东西：</font></font></p>

<pre><code>getInitialState: function() {<font></font>
    return {<font></font>
        progress: this.props.progress,<font></font>
        latest_update: this.props.latest_update,<font></font>
        nearest_center: this.props.nearest_center<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非我对上述博客文章有误解，否则这是反模式。</font><font style="vertical-align: inherit;">但是我看不到将状态注入Component的其他方法，而且我不明白为什么它是一种反模式，除非我重新标记所有道具以使其成为前提</font></font><code>initial</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果有的话，我觉得</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种反模式，因为现在我必须跟踪比以前更多的变量（那些有</font></font><code>initial</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">没有的变量</font><font style="vertical-align: inherit;">）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1461篇《ReactJS：为什么将组件的初始状态传递给prop是反模式？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：当我回答这个问题时，我正在学习/尝试实现Vanilla Flux，对此我有些怀疑。</font><font style="vertical-align: inherit;">后来我将所有内容迁移到Redux。</font><font style="vertical-align: inherit;">因此，建议：只需使用Redux或MobX。</font><font style="vertical-align: inherit;">您甚至可能不再需要该问题的答案（科学除外）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将初始状态作为a传递给组件</font></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种反模式，因为该</font></font><code>getInitialState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法仅在组件首次呈现时才调用。</font><font style="vertical-align: inherit;">这意味着，如果您重新渲染该组件并传递一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值a </font></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则该组件将不会做出相应的反应，因为该组件将从首次渲染起就保持该状态。</font><font style="vertical-align: inherit;">这很容易出错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您应该做的：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使您的组件尽可能无状态。</font><font style="vertical-align: inherit;">无状态组件更易于测试，因为它们</font><font style="vertical-align: inherit;">基于</font><strong><font style="vertical-align: inherit;">输入</font></strong><font style="vertical-align: inherit;">呈现</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样简单。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，嘿..我的组件数据发生了变化..我无法使它们成为无状态</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以，对于大多数人来说。</font><font style="vertical-align: inherit;">为此，请选择一个外部组件作为状态持有者。</font><font style="vertical-align: inherit;">使用您的示例，您可以创建一个</font></font><code>Dashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含数据的</font></font><code>Widget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">，以及一个</font><font style="vertical-align: inherit;">完全无状态</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">组件。</font><font style="vertical-align: inherit;">该</font></font><code>Dashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负责获取所有数据，然后呈现多个</font></font><code>Widgets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收他们需要通过一切</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我的窗口小部件具有某种状态。用户可以对其进行配置。</font><font style="vertical-align: inherit;">我如何使它们无状态？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><code>Widget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以公开事件，这些事件在处理后会导致其中包含的状态</font></font><code>Dashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生更改，从而导致每个事件都被</font></font><code>Widget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新呈现。</font><font style="vertical-align: inherit;">您可以</font></font><code>Widget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收</font><font style="vertical-align: inherit;">事件来创建“事件” </font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以现在，仪表板保留状态，但是如何将初始状态传递给它？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有两个选择。</font><font style="vertical-align: inherit;">最推荐的</font></font><code>Dashboard</code> <code>getInitialState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">是，您在</font><font style="vertical-align: inherit;">方法中进行</font><font style="vertical-align: inherit;">Ajax调用以</font><font style="vertical-align: inherit;">从服务器获取初始状态。</font><font style="vertical-align: inherit;">您还可以使用</font></font><a href="https://facebook.github.io/flux/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一种用于管理数据的更复杂的方法。</font><font style="vertical-align: inherit;">助焊剂更多是一种模式，而不是一种实现。</font><font style="vertical-align: inherit;">您可以在Facebook的实现中使用纯Flux </font></font><code>Dispatcher</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是可以使用</font></font><a href="https://github.com/gaearon/redux" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/goatslacker/alt" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/BinaryMuse/fluxxor" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fluxxor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等第三方实现</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以将此初始状态作为传递</font></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给，例如</font></font><code>Dashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，明确声明这只是初始状态</font></font><code>initialData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，如果选择此路径，则无法向后传递不同的初始状态，因为它会“记住”第一次渲染后的状态。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OBS</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的定义不太正确。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于存储可变数据，即在组件生命周期中将要更改的数据。</font><font style="vertical-align: inherit;">状态更改应通过</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法进行，并将导致组件重新呈现。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于将不可更改的数据传递到组件。</font><font style="vertical-align: inherit;">它们在组件生命周期中不应更改。</font><font style="vertical-align: inherit;">仅使用道具的组件是无状态的。</font></font></p>

<p><a href="https://stackoverflow.com/questions/27928296/reactjs-how-to-pass-the-initial-state-while-rendering-a-component">This</a> is a relevant source on the "how to pass the initial state to components".</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
