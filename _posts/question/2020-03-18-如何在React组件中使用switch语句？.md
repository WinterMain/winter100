---
layout: question
title:  如何在React组件中使用switch语句？
date:   2020-03-18T10:34:40.000Z
description: 我有一个React组件，在该组件的render方法内部，我有这样的东西：render() {    return (        <div> ...
img: 
author: 小哥Jim
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个React组件，在该组件的</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">内部，</font><font style="vertical-align: inherit;">我有这样的东西：</font></font></p>

<pre><code>render() {<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;div&gt;<font></font>
                // removed for brevity<font></font>
            &lt;/div&gt;<font></font>
<font></font>
           { switch(...) {} }<font></font>
<font></font>
            &lt;div&gt;<font></font>
                // removed for brevity<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的要点是，我有两个固定的</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，一个在顶部，一个在底部。</font><font style="vertical-align: inherit;">在中间，我想有一个switch语句，根据状态下的值，我想渲染一个不同的组件。</font><font style="vertical-align: inherit;">因此，基本上，我希望两个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素始终固定，并且每次都在中间以呈现不同的组件。</font><font style="vertical-align: inherit;">我正在使用它来实现多步付款程序）。</font><font style="vertical-align: inherit;">不过，正如目前的代码一样，它不起作用，因为它给了我一个错误，说这</font></font><code>switch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是意外的。</font><font style="vertical-align: inherit;">有什么想法可以实现我想要的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2158篇《如何在React组件中使用switch语句？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法在渲染中进行切换。</font><font style="vertical-align: inherit;">放置访问一个元素的对象文字的伪切换方法不是理想的，因为它会导致处理所有视图，并可能导致该状态下不存在的prop的依赖项错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种很好的干净方法，不需要预先渲染每个视图：</font></font></p>

<pre><code>render () {<font></font>
  const viewState = this.getViewState();<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      {viewState === ViewState.NO_RESULTS &amp;&amp; this.renderNoResults()}<font></font>
      {viewState === ViewState.LIST_RESULTS &amp;&amp; this.renderResults()}<font></font>
      {viewState === ViewState.SUCCESS_DONE &amp;&amp; this.renderCompleted()}<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果视图状态的条件不仅仅基于简单的属性（例如每行多个条件），则枚举和</font></font><code>getViewState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">封装条件</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数是分离此条件逻辑并清理渲染的好方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱凯Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个完整的工作示例，使用按钮在组件之间进行切换</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照以下方式设置构造函数 </font></font></p>

<pre><code>constructor(props)<font></font>
{<font></font>
    super(props);<font></font>
    this.state={<font></font>
        currentView: ''<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以按以下方式渲染组件 </font></font></p>

<pre><code>  render() <font></font>
{<font></font>
    const switchView = () =&gt; {<font></font>
<font></font>
    switch(this.state.currentView) <font></font>
    {<font></font>
<font></font>
      case "settings":   return &lt;h2&gt;settings&lt;/h2&gt;;<font></font>
      case "dashboard":   return &lt;h2&gt;dashboard&lt;/h2&gt;;<font></font>
<font></font>
      default:      return &lt;h2&gt;dashboard&lt;/h2&gt;<font></font>
    }<font></font>
  }<font></font>
<font></font>
    return (<font></font>
<font></font>
       &lt;div&gt;<font></font>
<font></font>
            &lt;button onClick={(e) =&gt; this.setState({currentView: "settings"})}&gt;settings&lt;/button&gt;<font></font>
            &lt;button onClick={(e) =&gt; this.setState({currentView: "dashboard"})}&gt;dashboard&lt;/button&gt;<font></font>
<font></font>
            &lt;div className="container"&gt;<font></font>
                { switchView() }<font></font>
            &lt;/div&gt;<font></font>
<font></font>
<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，我正在使用按钮在状态之间进行切换。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不太喜欢当前的任何答案，因为它们要么太冗长，要么要求您跳过代码以了解正在发生的事情。</font><font style="vertical-align: inherit;">为什么不创建一个非常简单的开关组件，该组件根据prop测试有条件地进行渲染？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const Switch = props =&gt; {<font></font>
  const { test, children } = props<font></font>
  return children.find(child =&gt; {<font></font>
    return child.props.value === test<font></font>
  })      <font></font>
}<font></font>
<font></font>
const Sample = props =&gt; {<font></font>
  const someTest = true<font></font>
  return (<font></font>
    &lt;Switch test={someTest}&gt;<font></font>
      &lt;div value={false}&gt;Will display if someTest is false&lt;/div&gt;<font></font>
      &lt;div value={true}&gt;Will display if someTest is true&lt;/div&gt;<font></font>
    &lt;/Switch&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
ReactDOM.render(<font></font>
  &lt;Sample/&gt;,<font></font>
  document.getElementById("react")<font></font>
);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="react"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以根据需要使开关简单或复杂。</font><font style="vertical-align: inherit;">不要忘记对孩子及其价值道具进行更强大的检查。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种使用条件运算符表示渲染块中的​​开关情况的方式：</font></font></p>

<pre><code>{this.props.someVar == 1 &amp;&amp;<font></font>
    &lt;SomeContent/&gt;<font></font>
|| this.props.someVar == 2 &amp;&amp;<font></font>
    &lt;SomeOtherContent /&gt;<font></font>
|| this.props.someOtherVar == 1 &amp;&amp;<font></font>
    &lt;YetSomeOtherContent /&gt;<font></font>
||<font></font>
    &lt;SomeDefaultContent /&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议添加一些括号以确保预期结果，除非掌握运算符的优先级...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝樱</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lenkan的答案是一个很好的解决方案。</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  {{ beep: &lt;div&gt;Beep&lt;/div&gt;,<font></font>
     boop: &lt;div&gt;Boop&lt;/div&gt;<font></font>
  }[greeting]}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要一个默认值，那么您甚至可以</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  {{ beep: &lt;div&gt;Beep&lt;/div&gt;,<font></font>
     boop: &lt;div&gt;Boop&lt;/div&gt;<font></font>
  }[greeting] || &lt;div&gt;Hello world&lt;/div&gt;}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果那对您来说不太好，那么您可以执行类似的操作</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  { <font></font>
    rswitch(greeting, {<font></font>
      beep: &lt;div&gt;Beep&lt;/div&gt;,<font></font>
      boop: &lt;div&gt;Boop&lt;/div&gt;,<font></font>
      default: &lt;div&gt;Hello world&lt;/div&gt;<font></font>
    }) <font></font>
  }<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>function rswitch (param, cases) {<font></font>
  if (cases[param]) {<font></font>
    return cases[param]<font></font>
  } else {<font></font>
    return cases.default<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
