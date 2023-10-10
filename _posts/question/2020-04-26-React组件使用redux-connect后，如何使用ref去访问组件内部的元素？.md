---
layout: question
title:  React组件使用redux connect后，如何使用ref去访问组件内部的元素？
date:   2020-04-26T06:20:46.000Z
description: // CustomControl.jsxclass CustomControl extends Component {    constructor(pro...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code class="language-javascript">// CustomControl.jsx
class CustomControl extends Component {
    constructor(props){
        super(props);
    }
    say() {
        console.log("hello");
    }
    render() {
        return &lt;div ref="root"&gt;&lt;/div&gt;
    }
}
const App = connect(
    mapStateToProps =&gt; {return {};},
    mapDispatchToProps =&gt; {}
)(CustomControl);
export default App;</code></pre><pre><code class="language-javascript">// home.jsx
class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return &lt;div ref="root"&gt;&lt;CustomControl ref="customControl"/&gt;&lt;/div&gt;
    }
}</code></pre><p>例如这里我们在<code>home.jsx</code>，直接去访问this.refs.customControl.say();是无法访问的。</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.04.26</span>
          </div>
          <div class="discuss-comment"><p>conect函数包含四个参数</p><h3><code><strong>connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])</strong></code></h3><p>options具体设置如下：</p><p>[<code>options</code>] <i>(Object)</i> 如果指定这个参数，可以定制 connector 的行为。</p><ul><li>[<code>pure = true</code>] <i>(Boolean)</i>: 如果为 true，connector 将执行 <code>shouldComponentUpdate</code> 并且浅对比 <code>mergeProps</code> 的结果，避免不必要的更新，前提是当前组件是一个“纯”组件，它不依赖于任何的输入或 state 而只依赖于 props 和 Redux store 的 state。<i>默认值为 </i><code><i>true</i></code><i>。</i></li><li>[<code>withRef = false</code>] <i>(Boolean)</i>: 如果为 true，connector 会保存一个对被包装组件实例的引用，该引用通过 <code>getWrappedInstance()</code> 方法获得。<i>默认值为 </i><code><i>false</i></code><i>。</i></li></ul><p>&nbsp;</p><p>所以当我们设置了 <code>connect()</code> 函数的第四个参数 <code>options</code> 为 <code>{ withRef: true }</code> 才返回被包装的组件实例。这时候我们就能访问了。</p><p>上面的例子将可以通过这样去访问：</p><pre><code class="language-javascript">this.refs.customControl.say();</code></pre><p>更多信息可以了解<a href="https://www.redux.org.cn/docs/react-redux/api.html">react-redux中文文档</a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
