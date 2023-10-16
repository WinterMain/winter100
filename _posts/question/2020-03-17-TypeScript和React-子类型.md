---
layout: question
title:  TypeScript和React-子类型？
date:   2020-03-17T03:57:49.000Z
description: 我有一个非常简单的功能组件，如下所示：import \* as React from 'react';export interface AuxPro...
img: 
author: Tom梅Green
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个非常简单的功能组件，如下所示：</font></font></p>

<pre><code>import * as React from 'react';<font></font>
<font></font>
export interface AuxProps  { <font></font>
    children: React.ReactNode<font></font>
 }<font></font>
<font></font>
<font></font>
const aux = (props: AuxProps) =&gt; props.children;<font></font>
<font></font>
export default aux;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一个组件：</font></font></p>

<pre><code>import * as React from "react";<font></font>
<font></font>
export interface LayoutProps  { <font></font>
   children: React.ReactNode<font></font>
}<font></font>
<font></font>
const layout = (props: LayoutProps) =&gt; (<font></font>
    &lt;Aux&gt;<font></font>
        &lt;div&gt;Toolbar, SideDrawer, Backdrop&lt;/div&gt;<font></font>
        &lt;main&gt;<font></font>
            {props.children}<font></font>
        &lt;/main&gt;<font></font>
    &lt;Aux/&gt;<font></font>
);<font></font>
<font></font>
export default layout;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不断收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[ts] JSX元素类型'ReactNode'不是JSX元素的构造函数。</font><font style="vertical-align: inherit;">类型'undefined'不能分配给'ElementClass'类型。</font><font style="vertical-align: inherit;">[2605]</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何正确输入？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1861篇《TypeScript和React-子类型？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西梅Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为包含孩子的类型，我正在使用：</font></font></p>

<pre><code>type ChildrenContainer = Pick&lt;JSX.IntrinsicElements["div"], "children"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种子容器类型足够通用，可以支持所有不同的情况，并且还与ReactJS API保持一致。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，以您的示例为例：</font></font></p>

<pre><code>const layout = ({ children }: ChildrenContainer) =&gt; (<font></font>
    &lt;Aux&gt;<font></font>
        &lt;div&gt;Toolbar, SideDrawer, Backdrop&lt;/div&gt;<font></font>
        &lt;main&gt;<font></font>
            {children}<font></font>
        &lt;/main&gt;<font></font>
    &lt;Aux/&gt;<font></font>
)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从TypeScript站点：</font><a href="https://github.com/Microsoft/TypeScript/issues/6471" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/Microsoft/TypeScript/issues/6471" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/Microsoft/TypeScript/issues/6471</font></font></a> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的做法是将props类型写为{children ?: any}</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那对我有用。</font><font style="vertical-align: inherit;">子节点可以有很多不同的东西，因此显式键入可能会遗漏大小写。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一个关于后续问题的更长的讨论：</font></font><a href="https://github.com/Microsoft/TypeScript/issues/13618" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/Microsoft/TypeScript/issues/13618" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/Microsoft/TypeScript/issues/13618</font></a><font style="vertical-align: inherit;">，但是任何方法仍然有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样声明您的组件：</font></font></p>

<pre><code>const MyComponent: React.FunctionComponent = (props) =&gt; {<font></font>
    return props.children;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>interface Props {<font></font>
  children: JSX.Element[] | JSX.Element<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomNear前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了</font></font><code>&lt;Aux&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的JSX中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，它必须是一个返回的函数</font></font><code>ReactElement&lt;any&gt; | null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那就是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能组件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的定义</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当前定义为return的函数</font></font><code>React.ReactNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个更广泛的类型。</font><font style="vertical-align: inherit;">正如React类型所说的那样：</font></font></p>

<pre><code>type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将返回的值包装到React Fragment（</font></font><code>&lt;&gt;&lt;/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">中，确保不需要的类型被中和</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const aux: React.FC&lt;AuxProps&gt; = props =&gt;<font></font>
  &lt;&gt;{props.children}&lt;/&gt;;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是 </font></font><code>children: React.ReactNode</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
