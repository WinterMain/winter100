---
layout: question
title:  在NextJS中使用withRouter包装时，如何使用ref访问组件？
date:   2020-03-27T12:15:09.000Z
description: 我有一个React组件，我这样导出它：class Child extends Component {  getStatus() {    retu...
img: 
author: 乐
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个React组件，我这样导出它：</font></font></p>

<pre><code>class Child extends Component {<font></font>
  getStatus() {<font></font>
    return 'I am child!';<font></font>
  }<font></font>
  render() {<font></font>
    return (&lt;div&gt;Child&lt;/div&gt;);<font></font>
  }<font></font>
}<font></font>
<font></font>
export default withRouter(Child)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还有另一个需要这样的“ Child”组件的引用的类：</font></font></p>

<pre><code>class Parent extends Component {<font></font>
  constructor(props) {<font></font>
  super(props);<font></font>
  this.childRef = createRef();<font></font>
  } <font></font>
<font></font>
  handleLogChildStatus = () =&gt; {<font></font>
    if (typeof this.childRef.current.getStatus === 'function') {<font></font>
      console.log(this.childRef.current.getStatus());<font></font>
    } else {<font></font>
      console.log(' Can not access to child component via ref! ');<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;Child ref={this.childRef} /&gt;<font></font>
      &lt;div onClick={this.handleLogChildStatus}&gt;Log child status&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例显示我无法访问子组件ref，因为它由withRouter HOC包装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是当nextjs用Router&gt;包装时，如何访问子引用组件</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为以下其中一项应该有效</font></font></p>

<pre><code>export default withRouter(Child, { withRef: true })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二选择</font></font></p>

<pre><code> this.childComponent = React.createRef();<font></font>
....<font></font>
&lt;Child wrappedComponentRef={c =&gt; (this.childComponent  = c)} /&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
