---
layout: question
title:  onKeyDown事件不适用于React中的div
date:   2020-03-13T09:07:35.000Z
description: 我想在React的div上使用keyDown事件。我做：  componentWillMount() {      document.addEven...
img: 
author: 小卤蛋村村
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在React的div上使用keyDown事件。</font><font style="vertical-align: inherit;">我做：</font></font></p>

<pre><code>  componentWillMount() {<font></font>
      document.addEventListener("keydown", this.onKeyPressed.bind(this));<font></font>
  }<font></font>
<font></font>
  componentWillUnmount() {<font></font>
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));<font></font>
  }      <font></font>
<font></font>
  onKeyPressed(e) {<font></font>
    console.log(e.keyCode);<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    let player = this.props.boards.dungeons[this.props.boards.currentBoard].player;<font></font>
    return (<font></font>
      &lt;div <font></font>
        className="player"<font></font>
        style={{ position: "absolute" }}<font></font>
        onKeyDown={this.onKeyPressed} // not working<font></font>
      &gt;<font></font>
        &lt;div className="light-circle"&gt;<font></font>
          &lt;div className="image-wrapper"&gt;<font></font>
            &lt;img src={IMG_URL+player.img} /&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它工作正常，但我想以React风格做更多。</font><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre><code>        onKeyDown={this.onKeyPressed}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件上。</font><font style="vertical-align: inherit;">但是它没有反应。</font><font style="vertical-align: inherit;">我记得它可以处理输入元素。</font></font></p>

<p><a href="http://codepen.io/lafisrap/pen/OmyBYG" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码笔</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1458篇《onKeyDown事件不适用于React中的div》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须防止触发默认事件。</font></font></p>

<pre><code>onKeyPressed(e) {<font></font>
   e.preventDefault();<font></font>
   console.log(e.key);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tabIndex</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性来侦听React中div上的onKeyDown事件。</font><font style="vertical-align: inherit;">设置tabIndex =“ 0”应该会触发您的处理程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在构造函数中缺少方法的绑定。</font><font style="vertical-align: inherit;">这就是React建议您这样做的方式：</font></font></p>

<pre><code>class Whatever {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this.onKeyPressed = this.onKeyPressed.bind(this);<font></font>
  }<font></font>
<font></font>
  onKeyPressed(e) {<font></font>
    // your code ...<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (&lt;div onKeyDown={this.onKeyPressed} /&gt;);<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他方法可以执行此操作，但这将是运行时最有效的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在纯Javascript中考虑过多。</font><font style="vertical-align: inherit;">摆脱那些React生命周期方法上的侦听器并使用</font></font><code>event.key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>event.keyCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为这不是JS事件对象，所以它是React </font></font><a href="https://facebook.github.io/react/docs/events.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SyntheticEvent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">您的整个组件可能就这么简单（假设您尚未在构造函数中绑定方法）。</font></font></p>

<pre><code>onKeyPressed(e) {<font></font>
  console.log(e.key);<font></font>
}<font></font>
<font></font>
render() {<font></font>
  let player = this.props.boards.dungeons[this.props.boards.currentBoard].player;<font></font>
  return (<font></font>
    &lt;div <font></font>
      className="player"<font></font>
      style={{ position: "absolute" }}<font></font>
      onKeyDown={(e) =&gt; this.onKeyPressed(e)}<font></font>
    &gt;<font></font>
      &lt;div className="light-circle"&gt;<font></font>
        &lt;div className="image-wrapper"&gt;<font></font>
          &lt;img src={IMG_URL+player.img} /&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你需要这样写</font></font></p>

<pre><code>&lt;div <font></font>
    className="player"<font></font>
    style={{ position: "absolute" }}<font></font>
    onKeyDown={this.onKeyPressed}<font></font>
    tabIndex="0"<font></font>
  &gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>onKeyPressed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未绑定</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则尝试使用箭头功能重写它或将其绑定到组件中</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
