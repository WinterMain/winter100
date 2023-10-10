---
layout: question
title:  ReactJs：对于此props.children，PropType应该是什么？
date:   2020-03-10T05:36:01.000Z
description: 给定一个呈现其子级的简单组件：class ContainerComponent extends Component {  static propTy...
img: 
author: 小胖Jim
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个呈现其子级的简单组件：</font></font></p>

<pre><code>class ContainerComponent extends Component {<font></font>
  static propTypes = {<font></font>
    children: PropTypes.object.isRequired,<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {this.props.children}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default ContainerComponent;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：子项prop的propType应该是什么？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我将其设置为对象时，当我将组件与多个子级一起使用时，它将失败：</font></font></p>

<pre><code>&lt;ContainerComponent&gt;<font></font>
  &lt;div&gt;1&lt;/div&gt;<font></font>
  &lt;div&gt;2&lt;/div&gt;<font></font>
&lt;/ContainerComponent&gt;<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：无法道具类型：无效的支柱</font></font><code>children</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">型的</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  供给</font></font><code>ContainerComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，预计</font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将其设置为数组，则如果我仅给其一个孩子，则它将失败，即： </font></font></p>

<pre><code>&lt;ContainerComponent&gt;<font></font>
  &lt;div&gt;1&lt;/div&gt;<font></font>
&lt;/ContainerComponent&gt;<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：prop类型失败：提供给ContainerComponent的对象类型无效的prop子代，预期数组。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请告知，我是否应该不麻烦对子元素进行propTypes检查？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第478篇《ReactJs：对于此props.children，PropType应该是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要完全匹配组件类型，请选中此</font></font></p>

<pre><code>MenuPrimary.propTypes = {<font></font>
  children: PropTypes.oneOfType([<font></font>
    PropTypes.arrayOf(MenuPrimaryItem),<font></font>
    PropTypes.objectOf(MenuPrimaryItem)<font></font>
  ])<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要完全匹配某些组件类型，请选中此</font></font></p>

<pre><code>const HeaderTypes = [<font></font>
  PropTypes.objectOf(MenuPrimary),<font></font>
  PropTypes.objectOf(UserInfo)<font></font>
]<font></font>
<font></font>
Header.propTypes = {<font></font>
  children: PropTypes.oneOfType([<font></font>
    PropTypes.arrayOf(PropTypes.oneOfType([...HeaderTypes])),<font></font>
    ...HeaderTypes<font></font>
  ])<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/facebook/prop-types/blame/master/README.md#L77" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PropTypes文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有以下内容</font></font></p>

<pre><code>// Anything that can be rendered: numbers, strings, elements or an array<font></font>
// (or fragment) containing these types.<font></font>
optionalNode: PropTypes.node,<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以</font></font><code>PropTypes.node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来检查对象或对象数组</font></font></p>

<pre><code>static propTypes = {<font></font>
   children: PropTypes.node.isRequired,<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这取决于组件。</font><font style="vertical-align: inherit;">如果您知道需要填充什么，则应尝试使用以下方式专门指定一个或多个类型：</font></font></p>

<pre><code>PropTypes.oneOfType 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我最发现的是，拥有更多可以具有多种类型子项的通用组件，我很乐于使用：</font></font></p>

<pre><code>PropTypes.any
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想引用React组件，那么您将寻找 </font></font></p>

<pre><code>PropTypes.element
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然，</font></font></p>

<pre><code>PropTypes.node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述可以渲染的任何东西-字符串，数字，元素或这些东西的数组。</font><font style="vertical-align: inherit;">如果这适合您，那么这就是方法。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
