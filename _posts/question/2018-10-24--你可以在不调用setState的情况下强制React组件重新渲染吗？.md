---
layout: question
title:   你可以在不调用setState的情况下强制React组件重新渲染吗？
date:   2018-10-24T09:44:24.000Z
description: 我有一个外部（对组件），可观察对象，我想听取更改。当对象更新时，它会发出更改事件，然后我想在检测到任何更改时重新呈现组件。 使用顶级React.render这是...
img: 
author: 奔跑的小象
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>我有一个外部（对组件），可观察对象，我想听取更改。当对象更新时，它会发出更改事件，然后我想在检测到任何更改时重新呈现组件。 使用顶级React.render这是可能的，但在一个组件中它不起作用（这有一定意义，因为render方法只返回一个对象）。 代码示例：</p>

<pre>
<code>export default class MyComponent extends React.Component {

  handleButtonClick() {
    this.render();
  }

  render() {
    return (
      &lt;div&gt;
        {Math.random()}
        &lt;button onClick={this.handleButtonClick.bind(this)}&gt;
          Click me
        &lt;/button&gt;
      &lt;/div&gt;
    )
  }
}</code></pre>

<p><br />
单击该按钮在内部调用this.render（），但这并不是实际导致渲染发生的原因（您可以看到这在行动中，因为{Math.random（）}创建的文本不会更改）。但是，如果我只是调用this.setState（）而不是this.render（），它可以正常工作。 所以我想我的问题是：React组件需要有状态才能重新渲染吗？有没有办法强制组件按需更新而不改变状态？</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第82篇《 你可以在不调用setState的情况下强制React组件重新渲染吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2018.10.24</span>
          </div>
          <div class="discuss-comment">可以在你的组件中尝试调用这个方法 this.forceUpdate() 来强制重新渲染.
<br>
文档: https://facebook.github.io/react/docs/component-api.html</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
