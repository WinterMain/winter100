---
layout: question
title:  在react render函数中可以返回空吗？
date:   2020-03-12T02:20:49.000Z
description: 我有一个通知组件，并且有一个超时设置。超时后我打电话this.setState({isTimeout true})。我想做的是如果已经超时，我什么都不...
img: 
author: 逆天小卤蛋Green
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个通知组件，并且有一个超时设置。</font><font style="vertical-align: inherit;">超时后我打电话</font></font><code>this.setState({isTimeout:true})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做的是如果已经超时，我什么都不渲染：</font></font></p>

<pre><code>  render() {<font></font>
    let finalClasses = "" + (this.state.classes || "");<font></font>
    if (isTimeout){<font></font>
      return (); // here has some syntax error<font></font>
    }<font></font>
    return (&lt;div&gt;{this.props.children}&lt;/div&gt;);<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是：</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">return（）; </font><font style="vertical-align: inherit;">//这里有一些语法错误</font></font></em></strong></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些答案有些不正确，指向文档的错误部分：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想让组件什么都不呈现</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则按照</font></font><a href="https://reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在极少数情况下，您可能希望某个组件隐藏自身，即使该组件是由另一个组件渲染的也是如此。</font><font style="vertical-align: inherit;">为此，返回null而不是其渲染输出。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">如果尝试返回</font><font style="vertical-align: inherit;">，则会出现以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染未返回任何内容。</font><font style="vertical-align: inherit;">这通常意味着缺少return语句。</font><font style="vertical-align: inherit;">或者，不渲染任何内容，则返回null。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他的答案中指出，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效孩子这是有条件的渲染有用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">里面</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你的JSX，但你希望你的组件隐藏/渲染什么，只是返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点偏离主题，但是如果您需要一个永远不会呈现任何内容的基于类的组件，并且很乐意使用一些尚待标准化的ES语法，则可能需要执行以下操作：</font></font></p>

<pre><code>render = () =&gt; null
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基本上是一种箭头方法，当前需要使用</font></font><a href="https://babeljs.io/docs/en/babel-plugin-transform-class-properties" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">transform-class-properties</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Babel插件。</font><font style="vertical-align: inherit;">React不会让您定义没有</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">的组件</font><font style="vertical-align: inherit;">，这是满足我所想到的这一要求的最简洁的形式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在</font><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">文档中</font><font style="vertical-align: inherit;">借用</font><font style="vertical-align: inherit;">的</font></font><a href="https://gist.github.com/chris-kobrzak/708f31976be5fac2aa265816d6a03f2a" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ScrollToTop</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变体中使用此技巧</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以我为例，该组件只有一个实例，并且不呈现任何内容，因此，简短形式的“ render null”非常适合。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以从React渲染方法返回一个空值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以返回以下任何内容： </font></font><code>false, null, undefined, or true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的儿童。</font><font style="vertical-align: inherit;">他们只是不渲染。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以写 </font></font></p>

<pre><code>return null; or<font></font>
return false; or<font></font>
return true; or<font></font>
return undefined; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><code>return null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最优选的是，它表示不返回任何内容</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以这样返回</font></font></p>

<pre><code>return &lt;React.Fragment /&gt;;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在render（）函数中返回假值将不呈现任何内容。</font><font style="vertical-align: inherit;">所以你可以做</font></font></p>

<pre><code> render() {<font></font>
    let finalClasses = "" + (this.state.classes || "");<font></font>
    return !isTimeout &amp;&amp; &lt;div&gt;{this.props.children}&lt;/div&gt;;<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
