---
layout: question
title:  React-如何在道具中传递HTML标签？
date:   2020-03-12T04:47:16.000Z
description: 我希望能够通过HTML标签传递文本，如下所示：<MyComponent text="This is <strong>not</strong> work...
img: 
author: 斯丁Jim
category: question
answer: 11
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够通过HTML标签传递文本，如下所示：</font></font></p>

<pre><code>&lt;MyComponent text="This is &lt;strong&gt;not&lt;/strong&gt; working." /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在</font></font><code>MyComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的render方法中，当我打印出时</font></font><code>this.props.text</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它实际上打印出了所有内容：</font></font></p>

<pre><code>This is &lt;strong&gt;not&lt;/strong&gt; working.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以让React解析HTML并将其正确转储吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第961篇《React-如何在道具中传递HTML标签？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有人建议使用react-html-parser的原因吗？</font><font style="vertical-align: inherit;">这似乎是处理导入的HTML的一种好方法，而不必危险地做</font></font></p>

<p><a href="https://www.npmjs.com/package/react-html-parser" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/react-html-parser</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经使用jQuery追加在componentDidMount中追加了html。</font><font style="vertical-align: inherit;">这应该可以解决问题。</font></font></p>

<pre><code> var MyComponent = React.createClass({<font></font>
    render: function() {<font></font>
<font></font>
        return (<font></font>
           &lt;div&gt;<font></font>
<font></font>
           &lt;/div&gt;<font></font>
        );<font></font>
    },<font></font>
    componentDidMount() {<font></font>
        $(ReactDOM.findDOMNode(this)).append(this.props.text);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经有很多答案，但是我做错了与此相关的事情，我认为值得分享：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这样的事情： </font></font></p>

<pre class="lang-js prettyprint-override"><code>export default function Features() {<font></font>
  return (<font></font>
    &lt;Section message={&lt;p&gt;This is &lt;strong&gt;working&lt;/strong&gt;.&lt;/p&gt;} /&gt;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是按摩的时间比那更长，所以我尝试使用如下方法：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const message = () =&gt; &lt;p&gt;This longer message is &lt;strong&gt;not&lt;/strong&gt; working.&lt;/p&gt;;<font></font>
<font></font>
export default function Features() {<font></font>
  return (<font></font>
    &lt;Section message={message} /&gt;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了一段时间才意识到我在函数调用中缺少（）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法运作</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>&lt;Section message={message} /&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作中</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>&lt;Section message={message()} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许对您有帮助，就像对我一样！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将文本道具类型设置为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">any</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并执行以下操作：</font></font></p>

<pre><code>&lt;MyComponent text={<font></font>
    &lt;React.Fragment&gt;<font></font>
        &lt;div&gt; Hello, World!&lt;/div&gt;<font></font>
    &lt;/React.Fragment&gt;<font></font>
    } <font></font>
/&gt;<font></font>
</code></pre>

<p><a href="https://material-ui.com/components/tooltips/#CustomizedTooltips.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以通过将混合数组与字符串和JSX元素一起使用来实现。  </font></font><a href="https://reactjs.org/docs/jsx-in-depth.html#html-entities" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a> </p>

<pre><code>&lt;MyComponent text={["This is ", &lt;strong&gt;not&lt;/strong&gt;,  "working."]} /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以在组件上使用一个函数来将jsx传递给props。</font><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre><code> var MyComponent = React.createClass({<font></font>
<font></font>
   render: function() {<font></font>
    return (<font></font>
      &lt;OtherComponent<font></font>
        body={this.body}<font></font>
      /&gt;<font></font>
    );<font></font>
   },<font></font>
<font></font>
   body() {<font></font>
     return(<font></font>
       &lt;p&gt;This is &lt;strong&gt;now&lt;/strong&gt; working.&lt;p&gt;<font></font>
     );<font></font>
   }<font></font>
<font></font>
});<font></font>
<font></font>
var OtherComponent = React.createClass({<font></font>
<font></font>
  propTypes: {<font></font>
    body: React.PropTypes.func<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
     return (<font></font>
        &lt;section&gt;<font></font>
          {this.props.body()}<font></font>
        &lt;/section&gt;<font></font>
     );<font></font>
  },<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GreenL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React v16.02中，您可以使用片段。</font></font></p>

<pre><code>&lt;MyComponent text={&lt;Fragment&gt;This is an &lt;strong&gt;HTML&lt;/strong&gt; string.&lt;/Fragment&gt;} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息：</font><a href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过2种我知道的方式来做到这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-  </font></font><code>&lt;MyComponent text={&lt;p&gt;This is &lt;strong&gt;not&lt;/strong&gt; working.&lt;/p&gt;} /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后做</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
   render () {<font></font>
     return (&lt;div&gt;{this.props.text}&lt;/div&gt;)<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者第二种方法是这样</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2 </font></font><code>&lt;MyComponent&gt;&lt;p&gt;This is &lt;strong&gt;not&lt;/strong&gt; working.&lt;/p&gt;&lt;MyComponent/&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后做</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
   render () {<font></font>
     return (&lt;div&gt;{this.props.children}&lt;/div&gt;)<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗西门小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><em><font style="vertical-align: inherit;">危险地</font></em><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SetInnerHTML</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将html作为普通字符串发送</font></font></p>

<pre><code>&lt;MyComponent text="This is &lt;strong&gt;not&lt;/strong&gt; working." /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在JSX代码中进行渲染，如下所示：</font></font></p>

<pre><code>&lt;h2 className="header-title-right wow fadeInRight"<font></font>
    dangerouslySetInnerHTML={{__html: props.text}} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要渲染用户输入的数据，请小心。</font><font style="vertical-align: inherit;">您可能是XSS攻击的受害者</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是文档：</font><a href="https://facebook.github.io/react/tips/dangerously-set-inner-html.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://facebook.github.io/react/tips/dangerously-set-inner-html.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/tips/dangerously-set-inner-html.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，可以采用多种方法。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您想在道具中使用JSX</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单地使用{}使JSX解析参数。</font><font style="vertical-align: inherit;">唯一的限制与每个JSX元素相同：它必须仅返回一个根元素。</font></font></p>

<pre><code>myProp={&lt;div&gt;&lt;SomeComponent&gt;Some String&lt;/div&gt;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的可读方法是创建一个函数renderMyProp，该函数将返回JSX组件（就像标准渲染函数一样），然后只需调用myProp = {this.renderMyProp（）}</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只想将HTML作为字符串传递</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，JSX不允许您从字符串值呈现原始HTML。</font><font style="vertical-align: inherit;">但是，有一种方法可以做到这一点：</font></font></p>

<pre><code>myProp="&lt;div&gt;This is some html&lt;/div&gt;"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以在组件中像这样使用它：</font></font></p>

<pre><code>&lt;div dangerouslySetInnerHTML=myProp={{ __html: this.renderMyProp() }}&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此解决方案可以在跨站点脚本伪造攻击中“打开”。</font><font style="vertical-align: inherit;">还请注意，您只能呈现简单的HTML，不能呈现JSX标签或组件或其他奇特的东西。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组方式</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为响应，您可以传递一个JSX元素数组。</font><font style="vertical-align: inherit;">这意味着：</font></font></p>

<pre><code>myProp={["This is html", &lt;span&gt;Some other&lt;/span&gt;, "and again some other"]}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不推荐这种方法，因为：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将创建一个警告（缺少键）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可读</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不是真正的JSX方式，它更像是一种hack，而非预期的设计。</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">孩子们的方式</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完整起见添加它，但为了做出反应，您还可以使所有“位于”组件内部的子项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果我采用以下代码：</font></font></p>

<pre><code>&lt;SomeComponent&gt;<font></font>
    &lt;div&gt;Some content&lt;/div&gt;<font></font>
    &lt;div&gt;Some content&lt;/div&gt;<font></font>
&lt;/SomeComponent&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，这两个div将在SomeComponent中以this.props.children的形式提供，并可以使用标准{}语法进行呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当只有一个HTML内容要传递给组件时，此解决方案是完美的（想象一个Popin组件仅将Popin的内容作为子组件）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您有多个内容，则不能使用子级（或至少需要将其与此处的其他解决方案结合使用）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿逆天西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，它通过在道具儿童中传递html标签而起作用</font></font></p>

<pre><code>&lt;MyComponent&gt;This is &lt;strong&gt;not&lt;/strong&gt; working.&lt;/MyComponent&gt;<font></font>
<font></font>
<font></font>
var MyComponent = React.createClass({<font></font>
<font></font>
   render: function() {<font></font>
    return (<font></font>
      &lt;div&gt;this.props.children&lt;/div&gt;<font></font>
    );<font></font>
   },<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
