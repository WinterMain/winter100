---
layout: question
title:  setState（…）：只能更新已安装或正在安装的组件。这通常意味着您在未安装的组件上调用了setState（）。这是无人值守
date:   2020-03-13T12:14:21.000Z
description: componentDidMount(prevProps, prevState, prevContext) {    let \[audioNode, so...
img: 
author: GO神奇
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre class="lang-js prettyprint-override"><code>componentDidMount(prevProps, prevState, prevContext) {<font></font>
    let [audioNode, songLen] = [this.refs.audio, List.length-1];<font></font>
<font></font>
    audioNode.addEventListener('ended', () =&gt; {<font></font>
        this._endedPlay(songLen, () =&gt; {<font></font>
            this._currSong(this.state.songIndex);<font></font>
            this._Play(audioNode);<font></font>
        });<font></font>
    });<font></font>
<font></font>
    audioNode.addEventListener('timeupdate', () =&gt; {<font></font>
        let [remainTime, remainTimeMin, remainTimeSec, remainTimeInfo] = [];<font></font>
<font></font>
        if(!isNaN(audioNode.duration)) {<font></font>
            remainTime = audioNode.duration - audioNode.currentTime;<font></font>
            remainTimeMin = parseInt(remainTime/60);  // 剩余分<font></font>
            remainTimeSec = parseInt(remainTime%60);  // 剩余秒<font></font>
<font></font>
            if(remainTimeSec &lt; 10) {<font></font>
                remainTimeSec = '0'+remainTimeSec;<font></font>
            }<font></font>
            remainTimeInfo = remainTimeMin + ':' + remainTimeSec;<font></font>
            this.setState({'time': remainTimeInfo});<font></font>
        }<font></font>
    });<font></font>
}<font></font>
<font></font>
componentWillUnmount () {<font></font>
    let audio = this.refs.audio;<font></font>
    audio.removeEventListener('timeupdate');<font></font>
    audio.removeEventListener('ended');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：setState（...）：只能更新已安装或正在安装的组件。</font><font style="vertical-align: inherit;">这通常意味着您在未安装的组件上调用了setState（）。</font><font style="vertical-align: inherit;">这是无人值守。</font><font style="vertical-align: inherit;">请检查未定义组件的代码。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在中删除了EventListener'ended' </font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是它不起作用。</font><font style="vertical-align: inherit;">因为我添加</font></font><code>this.setState({'time': remainTimeInfo});</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1531篇《setState（…）：只能更新已安装或正在安装的组件。这通常意味着您在未安装的组件上调用了setState（）。这是无人值守》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">addEventListener和removeEventListener，回调不得为Anonymous内部类，并且它们应具有相同的参数</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消中的所有异步操作 </font></font><code>componentWillUnmount</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
由于不赞成使用isMounted标志</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此</font><font style="vertical-align: inherit;">在异步调用时检查组件已经卸载。</font></font><br><font style="vertical-align: inherit;"></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在Ajax请求的成功/失败回调中显示一个弹出窗口（引导模式）时，收到此警告。</font><font style="vertical-align: inherit;">另外，setState无法正常工作，并且我的弹出模式没有显示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我的情况-</font></font></p>

<pre><code>&lt;Component /&gt; (Containing my Ajax function)<font></font>
    &lt;ChildComponent /&gt;<font></font>
        &lt;GrandChildComponent /&gt; (Containing my PopupModal, onSuccess callback)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从孙组件中调用组件的ajax函数，并传递了onSuccess回调（在孙组件中定义），该回调将状态设置为显示弹出模式。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其更改为-</font></font></p>

<pre><code>&lt;Component /&gt; (Containing my Ajax function, PopupModal)<font></font>
    &lt;ChildComponent /&gt;<font></font>
        &lt;GrandChildComponent /&gt; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，我调用setState（onSuccess回调）在组件（ajax回调）本身中显示弹出模式，并解决了问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二种情况下：组件被渲染两次（我在HTML中两次包含bundle.js）。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到此问题是因为我</font><font style="vertical-align: inherit;">在构造函数中</font><font style="vertical-align: inherit;">使用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改以下错误代码</font></font></p>

<pre><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.setState({<font></font>
    key: ''<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.state = {<font></font>
    key: ''<font></font>
  }; <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过</font><font style="vertical-align: inherit;">为组件</font><font style="vertical-align: inherit;">分配</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ref</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">解决此问题</font><font style="vertical-align: inherit;">，然后在设置状态之前检查ref是否存在：</font></font></p>

<pre><code>myMethod(){<font></font>
  if (this.refs.myRef) <font></font>
   this.setState({myVar: true});<font></font>
}<font></font>
<font></font>
render() {<font></font>
  return (<font></font>
    &lt;div ref="myRef"&gt;<font></font>
      {this.state.myVar}<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从我更新了最新的React版本以来，我遇到了同样的问题。</font><font style="vertical-align: inherit;">解决如下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码是 </font></font></p>

<pre><code>async componentDidMount() {<font></font>
  const { default: Component } = await importComponent();<font></font>
  Nprogress.done();<font></font>
  this.setState({<font></font>
    component: &lt;Component {...this.props} /&gt;<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变成 </font></font></p>

<pre><code>componentWillUnmount() {<font></font>
  this.mounted = false;<font></font>
}<font></font>
async componentDidMount() {<font></font>
  this.mounted = true;<font></font>
  const { default: Component } = await importComponent();<font></font>
  if (this.mounted) {<font></font>
    this.setState({<font></font>
      component: &lt;Component {...this.props} /&gt;<font></font>
    });<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
