---
layout: question
title:  在componentDidUpdate（）内部的setState（）
date:   2020-03-12T02:21:03.000Z
description: 我正在编写一个脚本，该脚本根据下拉列表的高度和输入在屏幕上的位置将下拉列表移动到输入下方或上方。我也想将修改器设置为根据其方向下拉。但是setState在...
img: 
author: Davaid飞云
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在编写一个脚本，该脚本根据下拉列表的高度和输入在屏幕上的位置将下拉列表移动到输入下方或上方。</font><font style="vertical-align: inherit;">我也想将修改器设置为根据其方向下拉。</font><font style="vertical-align: inherit;">但是</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在内部</font><font style="vertical-align: inherit;">使用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会产生无限循环（这很明显）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经找到了使用</font></font><code>getDOMNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和直接将classname设置为下拉列表</font><font style="vertical-align: inherit;">的解决方案</font><font style="vertical-align: inherit;">，但是我觉得应该使用React工具有更好的解决方案。</font><font style="vertical-align: inherit;">有谁能够帮助我？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是工作代码的一部分</font></font><code>getDOMNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（略微忽略了定位逻辑，以简化代码）</font></font></p>

<pre><code>let SearchDropdown = React.createClass({<font></font>
    componentDidUpdate(params) {<font></font>
        let el = this.getDOMNode();<font></font>
        el.classList.remove('dropDown-top');<font></font>
        if(needToMoveOnTop(el)) {<font></font>
            el.top = newTopValue;<font></font>
            el.right = newRightValue;<font></font>
            el.classList.add('dropDown-top');<font></font>
        }<font></font>
    },<font></font>
    render() {<font></font>
        let dataFeed = this.props.dataFeed;<font></font>
        return (<font></font>
            &lt;DropDown &gt;<font></font>
                {dataFeed.map((data, i) =&gt; {<font></font>
                    return (&lt;DropDownRow key={response.symbol} data={data}/&gt;);<font></font>
                })}<font></font>
            &lt;/DropDown&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是带有setstate的代码（它创建一个无限循环）</font></font></p>

<pre><code>let SearchDropdown = React.createClass({<font></font>
    getInitialState() {<font></font>
        return {<font></font>
            top: false<font></font>
        };<font></font>
    },<font></font>
    componentDidUpdate(params) {<font></font>
        let el = this.getDOMNode();<font></font>
        if (this.state.top) {<font></font>
           this.setState({top: false});<font></font>
        }<font></font>
        if(needToMoveOnTop(el)) {<font></font>
            el.top = newTopValue;<font></font>
            el.right = newRightValue;<font></font>
            if (!this.state.top) {<font></font>
              this.setState({top: true});<font></font>
           }<font></font>
        }<font></font>
    },<font></font>
    render() {<font></font>
        let dataFeed = this.props.dataFeed;<font></font>
        let class = cx({'dropDown-top' : this.state.top});<font></font>
        return (<font></font>
            &lt;DropDown className={class} &gt;<font></font>
                {dataFeed.map((data, i) =&gt; {<font></font>
                    return (&lt;DropDownRow key={response.symbol} data={data}/&gt;);<font></font>
                })}<font></font>
            &lt;/DropDown&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签名</font></font><code>void::componentDidUpdate(previousProps, previousState)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有了它，您将能够测试哪些道具/状态很脏，并进行相应的调用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></h3>

<pre><code>componentDidUpdate(previousProps, previousState) {<font></font>
    if (previousProps.data !== this.props.data) {<font></font>
        this.setState({/*....*/})<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font><font style="vertical-align: inherit;">使用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会更新组件，从而导致调用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，随后</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">该调用会</font><font style="vertical-align: inherit;">导致无限循环。</font><font style="vertical-align: inherit;">您应该有条件地致电</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并确保违反电话的条件最终会发生，例如：</font></font></p>

<pre><code>componentDidUpdate: function() {<font></font>
    if (condition) {<font></font>
        this.setState({..})<font></font>
    } else {<font></font>
        //do something else<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您仅通过向其发送道具来更新组件（除了componentDidUpdate内部的情况，setState不会更新它），则可以调用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要说的是，您需要检查状态是否已经具有您要设置的相同值。</font><font style="vertical-align: inherit;">如果相同，则没有必要再次为相同的值设置状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保像这样设置您的状态：</font></font></p>

<pre><code>let top = newValue /*true or false*/<font></font>
if(top !== this.state.top){<font></font>
    this.setState({top});<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">超威蓝喵</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的问题，我必须居中工具提示。</font><font style="vertical-align: inherit;">在componentDidUpdate中的React setState确实使我陷入了无限循环，我尝试了条件工作的条件。</font><font style="vertical-align: inherit;">但是我发现在ref回调中使用给我提供了更简单干净的解决方案，如果将内联函数用于ref回调，则每次组件更新都将面临null问题。</font><font style="vertical-align: inherit;">因此，请在ref回调中使用函数引用并在其中设置状态，这将启动重新渲染</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在里面</font><font style="vertical-align: inherit;">使用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">问题在于，由于没有中断条件，因此您正在以某种方式创建无限循环。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于您需要呈现组件后浏览器提供的值的事实，我认为您的使用方法</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是正确的，它只需要更好地处理触发的条件即可</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
