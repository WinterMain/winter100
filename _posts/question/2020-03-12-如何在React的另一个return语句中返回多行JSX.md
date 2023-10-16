---
layout: question
title:  如何在React的另一个return语句中返回多行JSX？
date:   2020-03-12T09:00:29.000Z
description: 单行工作正常render  function () {  return (    {\[1,2,3\].map(function (n) {    ...
img: 
author: 番长路易
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单行工作正常</font></font></p>

<pre><code>render: function () {<font></font>
  return (<font></font>
    {[1,2,3].map(function (n) {<font></font>
      return &lt;p&gt;{n}&lt;/p&gt;<font></font>
    }}<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适用于多行</font></font></p>

<pre><code>render: function () {<font></font>
  return (<font></font>
    {[1,2,3].map(function (n) {<font></font>
      return (<font></font>
        &lt;h3&gt;Item {n}&lt;/h3&gt;<font></font>
        &lt;p&gt;Description {n}&lt;/p&gt;<font></font>
      )<font></font>
    }}<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1166篇《如何在React的另一个return语句中返回多行JSX？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过React片段</font></font><code>&lt;&gt;&lt;/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">它很简单</font></font><code>React.Fragment</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>return (<font></font>
    &lt;&gt;<font></font>
      {[1, 2, 3].map(<font></font>
        (n, index): ReactElement =&gt; (<font></font>
          &lt;React.Fragment key={index}&gt;<font></font>
            &lt;h3&gt;Item {n}&lt;/h3&gt;<font></font>
            &lt;p&gt;Description {n}&lt;/p&gt;<font></font>
          &lt;/React.Fragment&gt;<font></font>
        ),<font></font>
      )}<font></font>
    &lt;/&gt;<font></font>
  );<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v16.0.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起，可以通过将多个元素包装在</font></font><code>Array</code></p>

<pre><code>render() {<font></font>
  return (<font></font>
    {[1,2,3].map(function (n) {<font></font>
      return [<font></font>
        &lt;h3&gt;Item {n}&lt;/h3&gt;.<font></font>
        &lt;p&gt;Description {n}&lt;/p&gt;<font></font>
      ]<font></font>
    }}<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v16.2.0中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://reactjs.org/docs/fragments.html" rel="noreferrer"><code>React Fragments</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入</font><font style="vertical-align: inherit;">了一个称为的新功能</font><font style="vertical-align: inherit;">，您可以使用它包装多个元素</font></font></p>

<pre><code>render() {<font></font>
  return (<font></font>
    {[1,2,3].map(function (n, index) {<font></font>
      return (<font></font>
        &lt;React.Fragment key={index}&gt;<font></font>
            &lt;h3&gt;Item {n}&lt;/h3&gt;<font></font>
            &lt;p&gt;Description {n}&lt;/p&gt;<font></font>
        &lt;/React.Fragment&gt;<font></font>
      )<font></font>
    }}<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React中的常见模式是组件返回多个元素。</font><font style="vertical-align: inherit;">片段使您可以将子项列表分组，而无需向DOM添加额外的节点。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用显式语法声明的片段可能具有密钥。</font><font style="vertical-align: inherit;">一个用例是将一个集合映射到一个片段数组，例如，创建一个描述列表：</font></font></p>

<pre><code>function Glossary(props) {<font></font>
  return (<font></font>
    &lt;dl&gt;<font></font>
      {props.items.map(item =&gt; (<font></font>
        // Without the `key`, React will fire a key warning<font></font>
        &lt;React.Fragment key={item.id}&gt;<font></font>
          &lt;dt&gt;{item.term}&lt;/dt&gt;<font></font>
          &lt;dd&gt;{item.description}&lt;/dd&gt;<font></font>
        &lt;/React.Fragment&gt;<font></font>
      ))}<font></font>
    &lt;/dl&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键是唯一可以传递给Fragment的属性。</font><font style="vertical-align: inherit;">将来，我们可能会增加对其他属性（例如事件处理程序）的支持。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎有关返回数组的旧答案不再适用（也许自从React〜0.9以来，就像@ dogmatic69在</font><a href="https://stackoverflow.com/questions/23840997/how-to-return-multiple-lines-jsx-in-another-return-statement-in-react/32226265#comment52175067_23841059"><font style="vertical-align: inherit;">评论中</font></a><font style="vertical-align: inherit;">所写的那样）</font></font><a href="https://stackoverflow.com/questions/23840997/how-to-return-multiple-lines-jsx-in-another-return-statement-in-react/32226265#comment52175067_23841059"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><a href="http://facebook.github.io/react/tips/maximum-number-of-jsx-root-nodes.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说您需要返回一个节点：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX根节点的最大数量</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，在组件的渲染中，您只能返回一个节点。</font><font style="vertical-align: inherit;">如果您有要返回的div列表，则必须将组件包装在div，span或任何其他组件中。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记JSX可以编译为常规JS。</font><font style="vertical-align: inherit;">返回两个函数实际上并没有语法意义。</font><font style="vertical-align: inherit;">同样，三元组不要放一个以上的孩子。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在很多情况下，你可以简单地换东西在一个</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我想返回多个</font></font><code>&lt;tr&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我把它们包在一个</font></font><code>&lt;tbody&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">桌子中-允许它具有多个主体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：从React 16.0开始，显然再次允许返回数组，只要每个元素都有一个</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/blog/2017/09/26/react-v16.0.html ＃new-render-return-types片段和字符串</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：React 16.2允许您使用</font></font><code>&lt;Fragment&gt;…&lt;/Fragment&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至</font><font style="vertical-align: inherit;">包围元素列表</font></font><code>&lt;&gt;…&lt;/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您更喜欢数组：</font><a href="https://blog.jmes.tech/react-fragment-and-semantic-html/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://blog.jmes.tech/react-fragment-and-semantic-html/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.jmes.tech/react-fragment-and-semantic-html/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将标签视为函数调用（请参阅</font></font><a href="http://facebook.github.io/react/tips/maximum-number-of-jsx-root-nodes.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">然后第一个变为：</font></font></p>

<pre><code>{[1,2,3].map(function (n) {<font></font>
  return React.DOM.p(...);<font></font>
})}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个：</font></font></p>

<pre><code>{[1,2,3].map(function (n) {<font></font>
  return (<font></font>
    React.DOM.h3(...)<font></font>
    React.DOM.p(...)<font></font>
  )<font></font>
})}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在应该清楚，第二个片段实际上没有任何意义（在JS中不能返回多个值）。</font><font style="vertical-align: inherit;">您必须将其包装在另一个元素中（最有可能是您想要的，这样您还可以提供一个有效的</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性），或者可以使用如下所示的内容：</font></font></p>

<pre><code>{[1,2,3].map(function (n) {<font></font>
  return ([<font></font>
    React.DOM.h3(...),<font></font>
    React.DOM.p(...)<font></font>
  ]);<font></font>
})}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSX糖：</font></font></p>

<pre><code>{[1,2,3].map(function (n) {<font></font>
  return ([<font></font>
    &lt;h3&gt;&lt;/h3&gt;, // note the comma<font></font>
    &lt;p&gt;&lt;/p&gt;<font></font>
  ]);<font></font>
})}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要展平结果数组，React会为您完成。</font><font style="vertical-align: inherit;">参见以下提琴</font></font><a href="http://jsfiddle.net/mEB2V/1/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/mEB2V/1/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">再说一遍：从长远来看，将这两个元素包装到div / section中将很可能会更好。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
