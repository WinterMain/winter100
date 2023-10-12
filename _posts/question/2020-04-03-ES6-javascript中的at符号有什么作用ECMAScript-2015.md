---
layout: question
title:  ES6 javascript中的at符号（\`）有什么作用？（ECMAScript 2015）
date:   2020-04-03T03:45:23.000Z
description: 我正在查看一些ES6代码，但我不明白将\`符号放在变量前面时的作用。我能找到的最接近的事物与私有字段有关？我在redux库中查看的代码：import...
img: 
author: 樱
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在查看一些ES6代码，但我不明白将@符号放在变量前面时的作用。</font><font style="vertical-align: inherit;">我能找到的最接近的事物与私有字段有关？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="https://github.com/gaearon/redux/blob/master/examples/counter/containers/CounterApp.js#L7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux库中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看的代码</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import React, { Component } from 'react';<font></font>
import { bindActionCreators } from 'redux';<font></font>
import { connect } from 'redux/react';<font></font>
import Counter from '../components/Counter';<font></font>
import * as CounterActions from '../actions/CounterActions';<font></font>
<font></font>
@connect(state =&gt; ({<font></font>
  counter: state.counter<font></font>
}))<font></font>
export default class CounterApp extends Component {<font></font>
  render() {<font></font>
    const { counter, dispatch } = this.props;<font></font>
    return (<font></font>
      &lt;Counter counter={counter}<font></font>
               {...bindActionCreators(CounterActions, dispatch)} /&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在该主题上找到的博客文章：</font><a href="https://github.com/zenparsing/es-private-fields"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/zenparsing/es-private-fields"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/zenparsing/es-private-fields</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这篇博客文章中，所有示例都在类的上下文中-当在模块中使用符号时，这意味着什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3981篇《ES6 javascript中的at符号（\`）有什么作用？（ECMAScript 2015）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现接受的答案还不足以帮助我解决问题，因此我添加了更多细节来帮助其他人找到此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于尚不清楚</font><font style="vertical-align: inherit;"> decorator</font><font style="vertical-align: inherit;">到底</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">给定示例中的 decorator不仅是</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号，而且是</font></font><code>@connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">简单地说，该</font></font><code>@connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">装饰</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>CounterApp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下该怎么办？</font><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>state.counter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价值类的道具。</font><font style="vertical-align: inherit;">请记住，在redux中，该</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数接受两个参数：</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在此示例中，仅采用一个参数- </font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有对此进行过多研究，但这似乎是封装状态到属性映射和调度到属性映射的一种方法，这样它们就可以随组件一起使用，而不必位于其他文件中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">装饰工</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">要添加到ECMAScript中</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以下是多个ES6和ES5等效的示例：</font></font><a href="https://github.com/wycats/javascript-decorators" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript-decorators</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> decorator可以动态更改功能，方法或类的功能，而不必直接使用子类或更改要修饰的功能的源代码。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们通常用于控制访问，注册，注释。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
