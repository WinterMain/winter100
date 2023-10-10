---
layout: question
title:  React-未安装组件上的setState（）
date:   2020-03-12T10:14:29.000Z
description: 在我的react组件中，我试图在ajax请求进行时实现一个简单的微调器-我使用状态来存储加载状态。 由于某种原因，我的React组件下面的这段代码抛出...
img: 
author: 十三JimHarry
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的react组件中，我试图在ajax请求进行时实现一个简单的微调器-我使用状态来存储加载状态。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，我的React组件下面的这段代码抛出此错误 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能更新已安装或正在安装的组件。</font><font style="vertical-align: inherit;">这通常意味着您在未安装的组件上调用了setState（）。</font><font style="vertical-align: inherit;">这是无人值守。</font><font style="vertical-align: inherit;">请检查未定义组件的代码。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我摆脱了第一个setState调用，错误就会消失。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.loadSearches = this.loadSearches.bind(this);<font></font>
<font></font>
  this.state = {<font></font>
    loading: false<font></font>
  }<font></font>
}<font></font>
<font></font>
loadSearches() {<font></font>
<font></font>
  this.setState({<font></font>
    loading: true,<font></font>
    searches: []<font></font>
  });<font></font>
<font></font>
  console.log('Loading Searches..');<font></font>
<font></font>
  $.ajax({<font></font>
    url: this.props.source + '?projectId=' + this.props.projectId,<font></font>
    dataType: 'json',<font></font>
    crossDomain: true,<font></font>
    success: function(data) {<font></font>
      this.setState({<font></font>
        loading: false<font></font>
      });<font></font>
    }.bind(this),<font></font>
    error: function(xhr, status, err) {<font></font>
      console.error(this.props.url, status, err.toString());<font></font>
      this.setState({<font></font>
        loading: false<font></font>
      });<font></font>
    }.bind(this)<font></font>
  });<font></font>
}<font></font>
<font></font>
componentDidMount() {<font></font>
  setInterval(this.loadSearches, this.props.pollInterval);<font></font>
}<font></font>
<font></font>
render() {<font></font>
<font></font>
    let searches = this.state.searches || [];<font></font>
<font></font>
<font></font>
    return (&lt;div&gt;<font></font>
          &lt;Table striped bordered condensed hover&gt;<font></font>
          &lt;thead&gt;<font></font>
            &lt;tr&gt;<font></font>
              &lt;th&gt;Name&lt;/th&gt;<font></font>
              &lt;th&gt;Submit Date&lt;/th&gt;<font></font>
              &lt;th&gt;Dataset &amp;amp; Datatype&lt;/th&gt;<font></font>
              &lt;th&gt;Results&lt;/th&gt;<font></font>
              &lt;th&gt;Last Downloaded&lt;/th&gt;<font></font>
            &lt;/tr&gt;<font></font>
          &lt;/thead&gt;<font></font>
          {<font></font>
          searches.map(function(search) {<font></font>
<font></font>
                let createdDate = moment(search.createdDate, 'X').format("YYYY-MM-DD");<font></font>
                let downloadedDate = moment(search.downloadedDate, 'X').format("YYYY-MM-DD");<font></font>
                let records = 0;<font></font>
                let status = search.status ? search.status.toLowerCase() : ''<font></font>
<font></font>
                return (<font></font>
                &lt;tbody key={search.id}&gt;<font></font>
                  &lt;tr&gt;<font></font>
                    &lt;td&gt;{search.name}&lt;/td&gt;<font></font>
                    &lt;td&gt;{createdDate}&lt;/td&gt;<font></font>
                    &lt;td&gt;{search.dataset}&lt;/td&gt;<font></font>
                    &lt;td&gt;{records}&lt;/td&gt;<font></font>
                    &lt;td&gt;{downloadedDate}&lt;/td&gt;<font></font>
                  &lt;/tr&gt;<font></font>
                &lt;/tbody&gt;<font></font>
              );<font></font>
          }<font></font>
          &lt;/Table &gt;<font></font>
          &lt;/div&gt;<font></font>
      );<font></font>
  }</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，当应该已经安装了组件时（为什么从componentDidMount调用了它），为什么我会收到此错误？我认为一旦安装了组件，就可以安全地设置状态了？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1263篇《React-未安装组件上的setState（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于需要其他选择的用户，可以使用ref属性的回调方法。</font><font style="vertical-align: inherit;">handleRef的参数是对div DOM元素的引用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关ref和DOM的详细信息：</font><a href="https://facebook.github.io/react/docs/refs-and-the-dom.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/react/docs/refs-and-the-dom.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/refs-and-the-dom.html</font></font></a></p>

<pre><code>handleRef = (divElement) =&gt; {<font></font>
 if(divElement){<font></font>
  //set state here<font></font>
 }<font></font>
}<font></font>
<font></font>
render(){<font></font>
 return (<font></font>
  &lt;div ref={this.handleRef}&gt;<font></font>
  &lt;/div&gt;<font></font>
 )<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，当应该已经安装了组件时（为什么从componentDidMount调用了它），为什么我会收到此错误？我认为一旦安装了组件，就可以安全地设置状态了？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从调用的</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您会</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生一个回调函数，该函数将在计时器处理程序的堆栈中执行，而不是在的堆栈中执行</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">显然，</font></font><code>this.loadSearches</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在执行</font><font style="vertical-align: inherit;">回调（</font><font style="vertical-align: inherit;">）时，该组件已卸载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，已接受的答案将保护您。</font><font style="vertical-align: inherit;">如果您使用的其他异步API不允许您取消异步功能（已经提交给某些处理程序），则可以执行以下操作：</font></font></p>

<pre><code>if (this.isMounted())<font></font>
     this.setState(...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将摆脱您在任何情况下报告但它确实感觉像地毯下扫的东西，特别是如果你的API提供了一个取消能力的错误信息（如</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用干</font></font><code>clearInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有看到渲染功能有点困难。</font><font style="vertical-align: inherit;">尽管已经可以发现您应该执行的操作，但是每次使用间隔时，都必须在卸载时清除它。</font><font style="vertical-align: inherit;">所以：</font></font></p>

<pre><code>componentDidMount() {<font></font>
    this.loadInterval = setInterval(this.loadSearches, this.props.pollInterval);<font></font>
}<font></font>
<font></font>
componentWillUnmount () {<font></font>
    this.loadInterval &amp;&amp; clearInterval(this.loadInterval);<font></font>
    this.loadInterval = false;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于卸载后仍可能会调用成功和错误回调，因此可以使用interval变量检查其是否已安装。</font></font></p>

<pre><code>this.loadInterval &amp;&amp; this.setState({<font></font>
    loading: false<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助，如果这样做不起作用，请提供渲染功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
