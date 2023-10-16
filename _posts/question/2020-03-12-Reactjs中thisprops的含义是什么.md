---
layout: question
title:  Reactjs中{…this.props}的含义是什么
date:   2020-03-12T04:42:38.000Z
description: 是什么意思 {...this.props}我正在尝试那样使用它 <div {...this.props}> Content Here </d...
img: 
author: 梅Jim
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么意思 </font></font></p>

<pre><code>{...this.props}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试那样使用它</font></font></p>

<pre><code> &lt;div {...this.props}&gt; Content Here &lt;/div&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第949篇《Reactjs中{…this.props}的含义是什么》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将在子组件中使用道具</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您现在的组件道具是</font></font></p>

<pre><code>{<font></font>
   booking: 4,<font></font>
   isDisable: false<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以在你的孩子电脑里使用这个道具</font></font></p>

<pre><code> &lt;div {...this.props}&gt; ... &lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在子组件中，您将收到所有父项道具。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYAItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是ES6 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer"><code>Spread_operator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noreferrer"><code>Destructuring_assignment</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div {...this.props}&gt;<font></font>
  Content Here<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它等于类组件：</font></font></p>

<pre><code>const person = {<font></font>
    name: "xgqfrms",<font></font>
    age: 23,<font></font>
    country: "China"<font></font>
};<font></font>
<font></font>
class TestDemo extends React.Component {<font></font>
    render() {<font></font>
        const {name, age, country} = {...this.props};<font></font>
        // const {name, age, country} = this.props;<font></font>
        return (<font></font>
          &lt;div&gt;<font></font>
              &lt;h3&gt; Person Information: &lt;/h3&gt;<font></font>
              &lt;ul&gt;<font></font>
                &lt;li&gt;name={name}&lt;/li&gt;<font></font>
                &lt;li&gt;age={age}&lt;/li&gt;<font></font>
                &lt;li&gt;country={country}&lt;/li&gt;<font></font>
              &lt;/ul&gt;<font></font>
          &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
ReactDOM.render(<font></font>
    &lt;TestDemo {...person}/&gt;<font></font>
    , mountNode<font></font>
);<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/MXG57.png" rel="noreferrer"><img src="https://i.stack.imgur.com/MXG57.png" alt="在此处输入图片说明"></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能组成</font></font></p>

<pre><code>const props = {<font></font>
    name: "xgqfrms",<font></font>
    age: 23,<font></font>
    country: "China"<font></font>
};<font></font>
<font></font>
const Test = (props) =&gt; {<font></font>
  return(<font></font>
    &lt;div<font></font>
        name={props.name}<font></font>
        age={props.age}<font></font>
        country={props.country}&gt;<font></font>
        Content Here<font></font>
        &lt;ul&gt;<font></font>
          &lt;li&gt;name={props.name}&lt;/li&gt;<font></font>
          &lt;li&gt;age={props.age}&lt;/li&gt;<font></font>
          &lt;li&gt;country={props.country}&lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
};<font></font>
<font></font>
ReactDOM.render(<font></font>
    &lt;div&gt;<font></font>
        &lt;Test {...props}/&gt;<font></font>
        &lt;hr/&gt;<font></font>
        &lt;Test <font></font>
            name={props.name}<font></font>
            age={props.age}<font></font>
            country={props.country}<font></font>
        /&gt;<font></font>
    &lt;/div&gt;<font></font>
    , mountNode<font></font>
);<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/3F1Ll.png" rel="noreferrer"><img src="https://i.stack.imgur.com/3F1Ll.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请参见以下链接：</font></font></p>

<ul>
<li><p><a href="https://babeljs.io/docs/plugins/transform-object-rest-spread/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/plugins/transform-object-rest-spread/</font></font></a></p></li>
<li><p><a href="https://github.com/gildata/RAIO/issues/136#issuecomment-327361743" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/gildata/RAIO/issues/136#issuecomment-327361743</font></font></a></p></li>
<li><p><a href="https://facebook.github.io/react/docs/components-and-props.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/react/docs/components-and-props.html</font></font></a></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是ES-6的功能。</font><font style="vertical-align: inherit;">这意味着您可以提取道具的所有属性 
</font></font><code>div.{... }</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符用于提取对象的属性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom米亚老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它被称为</font></font><a href="http://facebook.github.io/react/docs/jsx-spread.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传播属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其目的是使道具传递更加容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们假设您有一个接受N个属性的组件。</font><font style="vertical-align: inherit;">如果数量增加，将这些信息传递下去可能既乏味又笨拙。</font></font></p>

<pre><code>&lt;Component x={} y={} z={} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以这样做，将它们包装在一个对象中，然后使用扩展符号</font></font></p>

<pre><code>var props = { x: 1, y: 1, z:1 };<font></font>
&lt;Component {...props} /&gt;<font></font>
</code></pre>

<p>which will unpack it into the props on your component, i.e., you "never" use <code>{... props}</code> inside your <code>render()</code> function, only when you pass the props down to another component. Use your unpacked props as normal <code>this.props.x</code>.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
