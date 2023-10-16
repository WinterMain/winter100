---
layout: question
title:  React.js：如何将jsx与JavaScript分离
date:   2020-03-19T03:40:16.000Z
description: 有什么方法可以将jsx从组件的render函数移动到单独的文件？如果是这样，如何在render函数中引用jsx？...
img: 
author: 斯丁理查德
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以将jsx从组件的render函数移动到单独的文件？</font><font style="vertical-align: inherit;">如果是这样，如何在render函数中引用jsx？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2311篇《React.js：如何将jsx与JavaScript分离》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandySam伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用任何模块系统，即</font></font><code>script</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font><font style="vertical-align: inherit;">依赖</font><font style="vertical-align: inherit;">标签，则只需在全局变量中公开JSX组件，并在需要时使用它：</font></font></p>

<pre><code>// component.js<font></font>
var Component = React.createClass({ /* your component */ });<font></font>
// main.js<font></font>
React.renderComponent(Component({}), domNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font><em><font style="vertical-align: inherit;">component.js</font></em><font style="vertical-align: inherit;">的</font></font><code>script</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">必须出现在</font><em><font style="vertical-align: inherit;">main.js</font></em><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标记之前</font><em><font style="vertical-align: inherit;">。</font></em></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><code>script</code><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em></p>

<p>If you use a Commonjs-like module system like Browserify, simply export your component definition and require it when you need it.</p>

<pre><code>// component.js<font></font>
var React = require("react");<font></font>
module.exports = React.createClass({ /* your component */ });<font></font>
// main.js<font></font>
var Component = require("component.js");<font></font>
React.renderComponent(Component({}), domNode);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenTom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://github.com/wix/react-templates"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-templates</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它为您提供了标记和组件本身之间的这种分离，还有更多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现它非常适合我的需求（大型Web应用程序）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猪猪卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将模板移到单独文件中的一个问题是，如果使用以下处理程序： </font></font></p>

<pre><code>var myTemplate = (<font></font>
    &lt;form onSubmit={this.handleSubmit}&gt;&lt;/form&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的组件中使用：</font></font></p>

<pre><code>render: function() {<font></font>
    return myTemplate;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的模板代码将调用this.handleSubmit（），因此“ this”将是错误的，并且处理程序将无法正常工作。</font><font style="vertical-align: inherit;">您需要做的是将它们放在一个函数中，如下所示：</font></font></p>

<pre><code>var myTemplate = function() {<font></font>
    return (<font></font>
        &lt;form onSubmit={this.handleSubmit}&gt;&lt;/form&gt;<font></font>
    );<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在组件的render函数中，您需要将其正确绑定到“ this”，然后像下面这样调用它：</font></font></p>

<pre><code>render: function() {<font></font>
    return myTemplate.bind(this)();<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以将该模板定义放在任何地方，放在单独的文件中，或者但是您想要构建和引用自己的代码。</font><font style="vertical-align: inherit;">（强大的力量！不要听这些疯狂的说明性框架！:)）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
