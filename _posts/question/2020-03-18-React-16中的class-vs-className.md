---
layout: question
title:  React 16中的class vs className
date:   2020-03-18T10:43:55.000Z
description: 我看到React 16允许将属性传递给DOM。因此，这意味着可以使用“类”代替className，对吗？我只是想知道仍然可以使用className而不...
img: 
author: LEYHarryHarry
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到React 16允许将属性传递给DOM。</font><font style="vertical-align: inherit;">因此，这意味着可以使用“类”代替className，对吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想知道仍然可以使用className而不是class来实现优势，除了可以向下兼容React的早期版本。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2165篇《React 16中的class vs className》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ReactJS中，我们处理的是JSX，而不是众所周知的HTML。</font><font style="vertical-align: inherit;">JSX希望您使用className，因为它是底层的JavaScript DOM API！</font><font style="vertical-align: inherit;">class是JS中的保留关键字不是我们不使用class而是使用className的主要原因。</font><font style="vertical-align: inherit;">这是因为我们指的是DOM API</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React团队对此没有真正的解释，但自从ES2015 +引入以来，人们就可以认为它与Javascript中的保留关键字“ class”是有区别的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您在创建元素时在元素配置中使用“类”，它也不会引发任何编译/渲染错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与JavaScript中的函数一样，reactJS中的Class与className类是reactJS中的保留字或关键字。</font><font style="vertical-align: inherit;">这就是为什么我们使用单词“ className”来引用该类的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidStafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2019年6月，将className更改为class的过程已停止，以后可以继续进行</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是facebook dev的帖子解释了为什么</font></font></p>

<p><a href="https://github.com/facebook/react/issues/13525" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebook/react/issues/13525</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React docs建议使用</font></font><code>cannonical React attribute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称而不是常规的Javascript命名，因此即使React允许将属性传递给DOM，它也会警告您。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><a href="https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font></font></a></strong></p>

<pre><code>Known attributes with a different canonical React name:<font></font>
<font></font>
    &lt;div tabindex="-1" /&gt;<font></font>
    &lt;div class="hi" /&gt;<font></font>
<font></font>
React 15: Warns and ignores them.<font></font>
React 16: Warns but converts values to strings and passes them through.<font></font>
Note: always use the canonical React naming for all supported attributes.<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥路易Gil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了已经给出的其他良好答案之外，还需要一点点启示：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会注意到React使用className而不是传统的DOM类。</font><font style="vertical-align: inherit;">在文档中，“由于JSX是JavaScript，因此不鼓励将诸如class和for之类的标识符用作XML属性名称。相反，React DOM组件分别期望诸如className和htmlFor之类的DOM属性名称。”</font></font></p>
</blockquote>

<p><a href="http://buildwithreact.com/tutorial/jsx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://buildwithreact.com/tutorial/jsx</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><a href="https://github.com/facebook/react/issues/4331" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用zpao</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（React贡献者/ facebook员工）</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的DOM组件（大部分）使用JS API，因此我们选择使用JS属性（node.className，而不是node.class）。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西门Tony</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，React团队将切换到</font></font><code>class</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font></strong> <code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在即将到来的将来（</font></font><a href="https://github.com/facebook/react/issues/13525" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<blockquote>
  <ul>
  <li><strong><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→ </font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/facebook/react/issues/4331" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃4331</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，另请参阅</font><font style="vertical-align: inherit;">下面的</font></font><a href="https://github.com/facebook/react/issues/13525#issuecomment-417818906" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃13525（评论）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提出了无数次了。</font><font style="vertical-align: inherit;">我们已经允许在React 16中将类传递到DOM节点。由此造成的混乱不值得它试图避免的语法限制。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要切换而不同时支持两者？</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们在没有警告的情况下支持这两种方法，那么社区将在使用哪一种方法上进行分配。</font><font style="vertical-align: inherit;">npm上接受类道具的每个组件都必须记住同时转发两者。</font><font style="vertical-align: inherit;">如果在中间连一个组件没有一起玩和工具只有一个支柱，类丢失了-否则你可能结束了</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在底部选择“不同意”彼此，没有办法进行应对解决冲突。</font><font style="vertical-align: inherit;">因此，我们认为那会比现状更糟，并希望避免这种情况。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你应该保持关注。</font><font style="vertical-align: inherit;">只要这是API所期望的，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我仍然会使用</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
