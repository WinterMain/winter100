---
layout: question
title:  TypeScript React应用程序中的PropTypes
date:   2020-03-12T10:08:55.000Z
description: React.PropTypes在TypeScript React Application中使用有意义吗？还是“皮带和吊带”的情况？由于组件类是使用Pr...
img: 
author: Mandy古一
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>React.PropTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TypeScript React Application中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">有意义吗？还是“皮带和吊带”的情况？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于组件类是使用</font></font><code>Props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型参数</font><font style="vertical-align: inherit;">声明的</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>interface Props {<font></font>
    // ...<font></font>
}<font></font>
export class MyComponent extends React.Component&lt;Props, any&gt; { ... }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有添加任何真正的好处吗</font></font></p>

<pre><code>static propTypes {<font></font>
    myProp: React.PropTypes.string<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对类的定义？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1254篇《TypeScript React应用程序中的PropTypes》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光达蒙达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜在某些混乱的情况下，在编译时无法推断道具的类型，那么查看使用产生的任何警告将很有用</font></font><code>propTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，我没有看到任何好处（这就是为什么我从未亲自使用过它）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将两个组件道具同时保持为TypeScript类型通常没有太大价值</font></font><code>React.PropTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，这样做很有用：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布将由普通JavaScript使用的包，例如组件库。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受并传递外部输入，例如API调用的结果。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用库中可能没有正确或正确键入的数据（如果有）。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，通常这是您可以信任编译时间验证多少的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，较新版本的TypeScript可以根据您的</font></font><code>React.PropTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>PropTypes.InferProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">推断类型</font><font style="vertical-align: inherit;">，但是生成的类型可能难以使用或在代码的其他地方引用。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
