---
layout: question
title:  ReactJS-每次调用“ setState”时都会调用渲染吗？
date:   2020-03-09T15:22:45.000Z
description: 每次setState调用时，React都会重新渲染所有组件和子组件吗？如果是这样，为什么？我以为这个想法是，当状态改变时，React只渲染所需的内容。...
img: 
author: StafanHarry
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">时，React都会重新渲染所有组件和子组件</font><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，为什么？</font><font style="vertical-align: inherit;">我以为这个想法是，当状态改变时，React只渲染所需的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的简单示例中，尽管onClick处理程序始终将设置</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为相同的值</font><font style="vertical-align: inherit;">，但是在随后的单击中状态不会改变，这两个类在单击文本时都再次呈现。</font></font></p>

<pre><code>this.setState({'test':'me'});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾希望只有在</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据更改的</font><font style="vertical-align: inherit;">情况下才会进行渲染</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是示例代码，例如</font></font><a href="http://jsfiddle.net/fp2tncmb/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS Fiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和嵌入式代码段：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var TimeInChild = React.createClass({<font></font>
    render: function() {<font></font>
        var t = new Date().getTime();<font></font>
<font></font>
        return (<font></font>
            &lt;p&gt;Time in child:{t}&lt;/p&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
var Main = React.createClass({<font></font>
    onTest: function() {<font></font>
        this.setState({'test':'me'});<font></font>
    },<font></font>
<font></font>
    render: function() {<font></font>
        var currentTime = new Date().getTime();<font></font>
<font></font>
        return (<font></font>
            &lt;div onClick={this.onTest}&gt;<font></font>
            &lt;p&gt;Time in main:{currentTime}&lt;/p&gt;<font></font>
            &lt;p&gt;Click me to update time&lt;/p&gt;<font></font>
            &lt;TimeInChild/&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
ReactDOM.render(&lt;Main/&gt;, document.body);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.0/react.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.0/react-dom.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<pre><code>[1]: http://jsfiddle.net/fp2tncmb/2/
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“丢失更新”的另一个原因可能是下一个：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态getDerivedStateFromProps，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则会根据官方文档</font></font><a href="https://reactjs.org/docs/react-component.html#updating" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/react-component.html#updating</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个更新过程中重新运行它</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果状态值在开始时来自props，则每次更新时都会覆盖它。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是问题，则U可以避免在更新过程中设置状态，您应该像这样检查状态参数值</font></font></p>

<pre><code>static getDerivedStateFromProps(props: TimeCorrectionProps, state: TimeCorrectionState): TimeCorrectionState {<font></font>
   return state ? state : {disable: false, timeCorrection: props.timeCorrection};<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种解决方案是在状态中添加一个初始化的属性，并在第一次设置它（如果状态被初始化为非空值）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱LEY神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次调用setState时，React都会重新渲染所有组件和子组件吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下-是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个方法</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">boolean shouldComponentUpdate（object nextProps，object nextState）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，每个组件都有此方法，它负责确定“组件应该更新（运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能）吗？”。</font><font style="vertical-align: inherit;">每次更改</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">从父组件</font><font style="vertical-align: inherit;">传递新的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">为组件</font><font style="vertical-align: inherit;">编写自己的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">shouldComponentUpdate</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法实现，但是默认实现始终返回</font><em><font style="vertical-align: inherit;">true-</font></em><font style="vertical-align: inherit;">意味着始终重新运行渲染函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用官方文档</font></font><a href="http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，在状态发生适当变化时，shouldComponentUpdate始终返回true以防止细微的错误，但是如果您始终将状态视为不可变并在render（）中对props和state进行只读处理，则可以使用比较旧道具和状态及其替换的实现。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的下一部分：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，为什么？</font><font style="vertical-align: inherit;">我认为这个想法是，当状态改变时，React只渲染所需的内容。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以将“渲染”分为两个步骤：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虚拟DOM渲染：</font><font style="vertical-align: inherit;">调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">render</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">它将返回组件的新</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虚拟dom</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结构。</font><font style="vertical-align: inherit;">如前所述，此</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法总是在调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState（）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时调用</font><font style="vertical-align: inherit;">，因为</font><font style="vertical-align: inherit;">默认情况下</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">shouldComponentUpdate</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终返回true。</font><font style="vertical-align: inherit;">因此，默认情况下，React中没有优化。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原生DOM渲染：只有在虚拟DOM中更改了真实DOM节点后，React才更改浏览器中的真实DOM节点，并且需要的次数很少-这就是React的一项出色功能，它可以优化真实DOM变异并加快React的速度。</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">entaseven</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，状态改变时，React不会渲染所有内容。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当组件变脏（状态更改）时，都会重新渲染该组件及其子代。</font><font style="vertical-align: inherit;">在某种程度上，这是要尽可能少地重新渲染。</font><font style="vertical-align: inherit;">不调用render的唯一时间是将某个分支移到另一个根目录，从理论上讲，我们不需要重新渲染任何东西。</font><font style="vertical-align: inherit;">在您的示例中，</font></font><code>TimeInChild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的子组件</font></font><code>Main</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此在状态</font></font><code>Main</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">时也会重新呈现</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React不比较状态数据。</font><font style="vertical-align: inherit;">当</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用时，它标记组件为脏（这意味着它需要重新呈现）。</font><font style="vertical-align: inherit;">需要注意的重要一点是，尽管</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用了组件的方法</font><font style="vertical-align: inherit;">，但是</font><font style="vertical-align: inherit;">仅当输出与当前DOM树不同（也就是在虚拟DOM树和文档的DOM树之间进行区分）时，才更新实际DOM。</font><font style="vertical-align: inherit;">在您的示例中，即使</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据没有更改，上次更改的时间也发生了更改，从而使Virtual DOM与文档的DOM有所不同，因此更新了HTML。</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">每当“ shouldComponentUpdate”返回false时，它将每次调用setState时调用render（）方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并非所有组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组分看起来像整个APP的状态的瀑布的来源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此更改发生在setState调用的位置。</font></font><code>renders</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从那里叫</font><font style="vertical-align: inherit;">树</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您使用的是纯组分，</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将被跳过。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
