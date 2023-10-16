---
layout: question
title:  Next Js＆Typescript-类型示例上不存在属性setState
date:   2020-03-23T14:07:57.000Z
description: 代码工作正常，但我不知道如何在VSCode中删除此错误。感谢帮助。import \* as React from 'react';interface...
img: 
author: 西门
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码工作正常，但我不知道如何在VSCode中删除此错误。</font><font style="vertical-align: inherit;">感谢帮助。</font></font></p>

<pre><code>import * as React from 'react';<font></font>
<font></font>
interface State {<font></font>
  text: string;<font></font>
}<font></font>
export default class Example extends React.Component&lt;State&gt; {<font></font>
 state: State = {<font></font>
    text: 'SOME TEXT'<font></font>
}<font></font>
<font></font>
private handleChange = () =&gt; {<font></font>
    this.setState({text: 'New Text'}); //error: property setState does not exist on type Example<font></font>
}<font></font>
<font></font>
public render(){<font></font>
    return(<font></font>
        &lt;div&gt;<font></font>
        &lt;h2 onClick={this.handleChange}&gt;{this.state.text}&lt;/h2&gt;<font></font>
        &lt;/div&gt;<font></font>
    )<font></font>
 }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3129篇《Next Js＆Typescript-类型示例上不存在属性setState》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，请确保您已安装反应类型定义：</font></font></p>

<pre><code>npm install @types/react @types/react-dom
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，状态的泛型仅次于第二。</font><font style="vertical-align: inherit;">第一个是道具。</font></font></p>

<pre><code>export default class Example extends React.Component&lt;{}, State&gt; {
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看React类型定义以验证这一点（转到上的定义</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font><code>&lt;P, S&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示道具，然后陈述。</font></font></p>

<pre><code>class Component&lt;P, S&gt; {
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是通过更改使用的 TypeScript的版本来解决VSCode中的相同问题=&gt;打开命令面板&gt;“选择 TypeScript版本”&gt;“使用工作区版本”</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
