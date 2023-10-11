---
layout: question
title:  如何使用条件元素并使Facebook React的JSX保持DRY？
date:   2020-03-10T05:59:39.000Z
description: 如何在JSX中选择性地包含元素？这是一个使用横幅的示例，如果已传递该横幅，则该横幅应位于组件中。我要避免的是必须在if语句中复制HTML标记。rend...
img: 
author: Tom卡卡西
category: question
answer: 22
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JSX中选择性地包含元素？</font><font style="vertical-align: inherit;">这是一个使用横幅的示例，如果已传递该横幅，则该横幅应位于组件中。我要避免的是必须在if语句中复制HTML标记。</font></font></p>

<pre><code>render: function () {<font></font>
    var banner;<font></font>
    if (this.state.banner) {<font></font>
        banner = &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt;;<font></font>
    } else {<font></font>
        banner = ?????<font></font>
    }<font></font>
    return (<font></font>
        &lt;div id="page"&gt;<font></font>
            {banner}<font></font>
            &lt;div id="other-content"&gt;<font></font>
                blah blah blah...<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第484篇《如何使用条件元素并使Facebook React的JSX保持DRY？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了扩展@Jack Allan对文档的引用。</font></font></p>

<p><a href="https://facebook.github.io/react/docs/conditional-rendering.html#preventing-component-from-rendering" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> <code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font><a href="https://facebook.github.io/react/docs/conditional-rendering.html#preventing-component-from-rendering" rel="nofollow noreferrer"><font style="vertical-align: inherit;">React基本（快速入门）文档会提出建议</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，</font><font style="vertical-align: inherit;">高级指南中也提到了</font></font><a href="https://facebook.github.io/react/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布尔值，空值和未定义</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是添加另一个选项-如果您喜欢/容忍coffee-script，则可以使用coffee-react编写JSX，在这种情况下if / else语句是可用的，因为它们是coffee-script中的表达式，而不是语句：</font></font></p>

<pre><code>render: -&gt;<font></font>
  &lt;div className="container"&gt;<font></font>
    {<font></font>
      if something<font></font>
        &lt;h2&gt;Coffeescript is magic!&lt;/h2&gt;<font></font>
      else<font></font>
        &lt;h2&gt;Coffeescript sucks!&lt;/h2&gt;<font></font>
    }<font></font>
  &lt;/div&gt;  <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅在满足传递条件的情况下仅渲染某些内容，则可以使用以下语法：</font></font></p>

<pre><code>{ condition &amp;&amp; what_to_render }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以这种方式编写的代码如下所示：</font></font></p>

<pre><code>render() {<font></font>
    const { banner } = this.state;<font></font>
    return (<font></font>
        &lt;div id="page"&gt;<font></font>
            { banner &amp;&amp; &lt;div id="banner"&gt;{banner}&lt;/div&gt; }<font></font>
            &lt;div id="other-content"&gt;<font></font>
                blah blah blah...<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，还有其他有效的方法可以做到这一点，这完全取决于个人喜好和场合。</font><font style="vertical-align: inherit;">如果您有兴趣，可以在</font></font><a href="http://kolosek.com/react-jsx-conditions/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多有关如何在React中进行条件渲染的方法</font><font style="vertical-align: inherit;">！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一种使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对组件进行条件渲染的技术。</font><font style="vertical-align: inherit;">这样做的好处是，在满足条件之前，渲染器不会进行评估，因此无需担心</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">undefined</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值。</font></font></p>

<pre><code>const Conditional = ({ condition, render }) =&gt; {<font></font>
  if (condition) {<font></font>
    return render();<font></font>
  }<font></font>
  return null;<font></font>
};<font></font>
<font></font>
class App extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this.state = { items: null }<font></font>
  }<font></font>
<font></font>
  componentWillMount() {<font></font>
    setTimeout(() =&gt; { this.setState({ items: [1,2] }) }, 2000);<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Conditional<font></font>
        condition={!!this.state.items}<font></font>
        render={() =&gt; (<font></font>
          &lt;div&gt;<font></font>
            {this.state.items.map(value =&gt; &lt;p&gt;{value}&lt;/p&gt;)}<font></font>
          &lt;/div&gt;<font></font>
        )}<font></font>
      /&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Davaid</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢立即调用函数表达式（</font></font><code>IIFE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）以及</font></font><code>if-else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">over </font></font><code>render callbacks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的明确性</font></font><code>ternary operators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>render() {<font></font>
  return (<font></font>
    &lt;div id="page"&gt;<font></font>
      {(() =&gt; (<font></font>
        const { banner } = this.state;<font></font>
        if (banner) {<font></font>
          return (<font></font>
            &lt;div id="banner"&gt;{banner}&lt;/div&gt;<font></font>
          );<font></font>
        }<font></font>
        // Default<font></font>
        return (<font></font>
          &lt;div&gt;???&lt;/div&gt;<font></font>
        );<font></font>
      ))()}<font></font>
      &lt;div id="other-content"&gt;<font></font>
        blah blah blah...<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要了解</font></font><code>IIFE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，这</font></font><code>{expression}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是常用的React语法，在其中只需考虑您正在编写一个调用自身的函数即可。</font></font></p>

<pre><code>function() {<font></font>
<font></font>
}()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要包裹在括号内</font></font></p>

<pre><code>(function() {<font></font>
<font></font>
}())<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这没有被提及。</font><font style="vertical-align: inherit;">这就像您自己的答案，但我认为它甚至更简单。</font><font style="vertical-align: inherit;">您始终可以从表达式中返回字符串，并且可以将jsx嵌套在表达式中，因此可以轻松读取内联表达式。</font></font></p>

<pre><code>render: function () {<font></font>
    return (<font></font>
        &lt;div id="page"&gt;<font></font>
            {this.state.banner ? &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt; : ''}<font></font>
            &lt;div id="other-content"&gt;<font></font>
                blah blah blah...<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="http://dragon.ak.fbcdn.net/hphotos-ak-xpf1/t39.3284-6/10574688_1565081647062540_1607884640_n.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="http://dragon.ak.fbcdn.net/hphotos-ak-xpa1/t39.3284-6/10541015_309770302547476_509859315_n.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/jsx;harmony=true"&gt;void function() { "use strict";<font></font>
<font></font>
var Hello = React.createClass({<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;div id="page"&gt;<font></font>
        {this.props.banner ? &lt;div id="banner"&gt;{this.props.banner}&lt;/div&gt; : ''}<font></font>
        &lt;div id="other-content"&gt;<font></font>
          blah blah blah...<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    );   <font></font>
  }<font></font>
});<font></font>
<font></font>
var element = &lt;div&gt;&lt;Hello /&gt;&lt;Hello banner="banner"/&gt;&lt;/div&gt;;<font></font>
React.render(element, document.body);<font></font>
<font></font>
}()&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许它可以帮助遇到以下问题的人：</font></font><a href="https://www.robinwieruch.de/conditional-rendering-react/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React中的所有条件渲染</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇有关</font><a href="https://www.robinwieruch.de/conditional-rendering-react/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">React中条件渲染</font></a><font style="vertical-align: inherit;">的所有不同选项的文章。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时使用哪种条件渲染的关键要点：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">** 如果别的</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是最基本的条件渲染</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初学者友好</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用if是否通过返回null提前退出渲染方法</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**三元运算符</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在if-else语句上使用它</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比if-else更简洁</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**逻辑&amp;&amp;运算符</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当三元运算的一侧将返回null时使用它</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**开关盒</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冗长的</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能内联自调用功能</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免它，使用枚举代替</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**枚举</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完美地映射不同的状态</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完美地映射多个条件</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**多级/嵌套条件渲染</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于可读性考虑，避免使用它们</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用自己的简单条件渲染将组件拆分为更轻量的组件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用HOC</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">** HOC</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用它们来屏蔽条件渲染</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件可以专注于其主要目的</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**外部模板组件</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免使用它们，并熟悉JSX和JavaScript</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用三元运算符有条件地包含元素，如下所示：</font></font></p>

<pre><code>render: function(){<font></font>
<font></font>
         return &lt;div id="page"&gt;<font></font>
<font></font>
                  //conditional statement<font></font>
                  {this.state.banner ? &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt; : null}<font></font>
<font></font>
                  &lt;div id="other-content"&gt;<font></font>
                      blah blah blah...<font></font>
                  &lt;/div&gt;<font></font>
<font></font>
               &lt;/div&gt;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用一个函数并返回该组件，并使呈现函数变薄</font></font></p>

<pre><code>class App extends React.Component {<font></font>
  constructor (props) {<font></font>
    super(props);<font></font>
    this._renderAppBar = this._renderAppBar.bind(this);<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    return &lt;div&gt;<font></font>
      {_renderAppBar()}<font></font>
<font></font>
      &lt;div&gt;Content&lt;/div&gt;<font></font>
<font></font>
    &lt;/div&gt;<font></font>
  }<font></font>
<font></font>
  _renderAppBar () {<font></font>
    if (this.state.renderAppBar) {<font></font>
      return &lt;AppBar /&gt;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我制作了</font></font><a href="https://www.npmjs.com/package/jsx-control-statements" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/jsx-control-statements</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其更容易一些，基本上，它允许您将</font></font><code>&lt;If&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">为标签，然后将它们编译为三元ifs，以便</font></font><code>&lt;If&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅获取</font><font style="vertical-align: inherit;">内部代码</font><font style="vertical-align: inherit;">如果条件为真，则执行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个非常干净的单行版本... </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{this.props.product.title || </font><font style="vertical-align: inherit;">“无题” }</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即：</font></font></p>

<pre><code>render: function() {<font></font>
            return (<font></font>
                &lt;div className="title"&gt;<font></font>
                    { this.props.product.title || "No Title" }<font></font>
                &lt;/div&gt;<font></font>
            );<font></font>
        }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">最近</font><font style="vertical-align: inherit;">做了</font></font><a href="https://github.com/ajwhite/render-if" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ajwhite/render-if，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在谓词通过时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全地呈现元素</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>{renderIf(1 + 1 === 2)(<font></font>
  &lt;span&gt;Hello!&lt;/span&gt;<font></font>
)}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>const ifUniverseIsWorking = renderIf(1 + 1 === 2);<font></font>
<font></font>
//...<font></font>
<font></font>
{ifUniverseIsWorking(<font></font>
  &lt;span&gt;Hello!&lt;/span&gt;<font></font>
)}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用一个更明确的快捷方式：立即调用函数表达式（IIFE）：</font></font></p>

<pre><code>{(() =&gt; {<font></font>
  if (isEmpty(routine.queries)) {<font></font>
    return &lt;Grid devices={devices} routine={routine} configure={() =&gt; this.setState({configured: true})}/&gt;<font></font>
  } else if (this.state.configured) {<font></font>
    return &lt;DeviceList devices={devices} routine={routine} configure={() =&gt; this.setState({configured: false})}/&gt;<font></font>
  } else {<font></font>
    return &lt;Grid devices={devices} routine={routine} configure={() =&gt; this.setState({configured: true})}/&gt;<font></font>
  }<font></font>
})()}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子NearJinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数示例都带有一行有条件呈现的“ html”。</font><font style="vertical-align: inherit;">当我有多行需要有条件地呈现时，这对我来说似乎是可读的。</font></font></p>

<pre class="lang-js prettyprint-override"><code>render: function() {<font></font>
  // This will be renered only if showContent prop is true<font></font>
  var content = <font></font>
    &lt;div&gt;<font></font>
      &lt;p&gt;something here&lt;/p&gt;<font></font>
      &lt;p&gt;more here&lt;/p&gt;<font></font>
      &lt;p&gt;and more here&lt;/p&gt;<font></font>
    &lt;/div&gt;;<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h1&gt;Some title&lt;/h1&gt;<font></font>
<font></font>
      {this.props.showContent ? content : null}<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个例子很好，因为代替</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以有条件地渲染其他一些内容，例如</font></font><code>{this.props.showContent ? content : otherContent}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您只需要显示/隐藏内容，这将更好，因为</font></font><a href="https://facebook.github.io/react/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略了布尔值，空值和未定义</font></font></a></p>

<pre class="lang-js prettyprint-override"><code>render: function() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h1&gt;Some title&lt;/h1&gt;<font></font>
<font></font>
      // This will be renered only if showContent prop is true<font></font>
      {this.props.showContent &amp;&amp;<font></font>
        &lt;div&gt;<font></font>
          &lt;p&gt;something here&lt;/p&gt;<font></font>
          &lt;p&gt;more here&lt;/p&gt;<font></font>
          &lt;p&gt;and more here&lt;/p&gt;<font></font>
        &lt;/div&gt;<font></font>
      }<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当“ if”分支中有多个元素时，此组件有效：</font></font></p>

<pre><code>    var Display = React.createClass({<font></font>
        render: function() {<font></font>
            if (!this.props.when) {<font></font>
                return false;<font></font>
            }<font></font>
            return React.DOM.div(null, this.props.children);<font></font>
        }<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>      render: function() {<font></font>
            return (<font></font>
                &lt;div&gt;<font></font>
                    &lt;Display when={this.state.loading}&gt;<font></font>
                        Loading something...<font></font>
                        &lt;div&gt;Elem1&lt;/div&gt;<font></font>
                        &lt;div&gt;Elem2&lt;/div&gt;<font></font>
                    &lt;/Display&gt;<font></font>
                    &lt;Display when={!this.state.loading}&gt;<font></font>
                        Loaded<font></font>
                        &lt;div&gt;Elem3&lt;/div&gt;<font></font>
                        &lt;div&gt;Elem4&lt;/div&gt;<font></font>
                    &lt;/Display&gt;<font></font>
                &lt;/div&gt;<font></font>
            );<font></font>
        },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ps有人认为此组件不利于代码读取。</font><font style="vertical-align: inherit;">但是在我看来，带有javascript的html更糟</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Tony泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单，创建一个函数。</font></font></p>

<pre><code>renderBanner: function() {<font></font>
  if (!this.state.banner) return;<font></font>
  return (<font></font>
    &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt;<font></font>
  );<font></font>
},<font></font>
<font></font>
render: function () {<font></font>
  return (<font></font>
    &lt;div id="page"&gt;<font></font>
      {this.renderBanner()}<font></font>
      &lt;div id="other-content"&gt;<font></font>
        blah blah blah...<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直都遵循这种模式。</font><font style="vertical-align: inherit;">使代码真正干净且易于理解。</font><font style="vertical-align: inherit;">此外，</font></font><code>Banner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果它变得太大（或在其他地方重复使用），</font><font style="vertical-align: inherit;">它还允许您将</font><font style="vertical-align: inherit;">其</font><font style="vertical-align: inherit;">重构</font><font style="vertical-align: inherit;">为自己的组件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin卡卡西小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如答案中已经提到的，JSX为您提供了两种选择</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元运算符</font></font></p>

<p><code>{ this.state.price ? &lt;div&gt;{this.state.price}&lt;/div&gt; : null }</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">逻辑合取</font></font></p>

<p><code>{ this.state.price &amp;&amp; &lt;div&gt;{this.state.price}&lt;/div&gt; }</code></p></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这些不适用于</font></font></strong> <code>price == 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一种情况下，JSX将呈现false分支，并且在逻辑合取的情况下，将不呈现任何内容。</font><font style="vertical-align: inherit;">如果该属性可能为0，则只需在JSX之外使用if语句即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实验性的ES7 </font></font><code>do</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法使此操作变得容易。</font><font style="vertical-align: inherit;">如果您使用的是Babel，请启用该</font></font><code>es7.doExpressions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，然后：</font></font></p>

<pre><code>render() {<font></font>
  return (<font></font>
    &lt;div id="banner"&gt;<font></font>
      {do {<font></font>
        if (this.state.banner) {<font></font>
          this.state.banner;<font></font>
        } else {<font></font>
          "Something else";<font></font>
        }<font></font>
      }}<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我个人而言，我真的认为（</font></font><a href="http://facebook.github.io/react/tips/if-else-in-JSX.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX In Depth</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">显示的三元表达式</font><font style="vertical-align: inherit;">是符合ReactJs标准的最自然的方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见以下示例。</font><font style="vertical-align: inherit;">乍一看有点混乱，但效果很好。</font></font></p>

<pre><code>&lt;div id="page"&gt;<font></font>
  {this.state.banner ? (<font></font>
    &lt;div id="banner"&gt;<font></font>
     &lt;div class="another-div"&gt;<font></font>
       {this.state.banner}<font></font>
     &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  ) : <font></font>
  null} <font></font>
  &lt;div id="other-content"&gt;<font></font>
    blah blah blah...<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖凯樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将横幅标为未定义即可，它就不会包含在内。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以这样写 </font></font></p>

<pre><code>{ this.state.banner &amp;&amp; &lt;div&gt;{...}&lt;/div&gt; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font></font><code>state.banner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则跳过条件的右侧。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>If</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式组件是危险的，因为该代码块</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总是执行</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不管条件的。</font><font style="vertical-align: inherit;">例如，如果</font></font><code>banner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">is </font><font style="vertical-align: inherit;">，则将导致null异常</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>//dangerous<font></font>
render: function () {<font></font>
  return (<font></font>
    &lt;div id="page"&gt;<font></font>
      &lt;If test={this.state.banner}&gt;<font></font>
        &lt;img src={this.state.banner.src} /&gt;<font></font>
      &lt;/If&gt;<font></font>
      &lt;div id="other-content"&gt;<font></font>
         blah blah blah...<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是使用内联函数（对else语句特别有用）：</font></font></p>

<pre><code>render: function () {<font></font>
  return (<font></font>
    &lt;div id="page"&gt;<font></font>
      {function(){<font></font>
        if (this.state.banner) {<font></font>
          return &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt;<font></font>
        }<font></font>
      }.call(this)}<font></font>
      &lt;div id="other-content"&gt;<font></font>
         blah blah blah...<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="https://github.com/facebook/react/issues/690"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>render: function () {<font></font>
  return (<font></font>
    &lt;div id="page"&gt;<font></font>
      { this.state.banner &amp;&amp;<font></font>
        &lt;div id="banner"&gt;{this.state.banner}&lt;/div&gt;<font></font>
      }<font></font>
      &lt;div id="other-content"&gt;<font></font>
         blah blah blah...<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
