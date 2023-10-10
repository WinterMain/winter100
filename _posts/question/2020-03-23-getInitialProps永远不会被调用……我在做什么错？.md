---
layout: question
title:  getInitialProps永远不会被调用……我在做什么错？
date:   2020-03-23T02:51:25.000Z
description: 我是React和Next.js的新手，请多多包涵。但是我花了三个小时进行搜索，因此无法终生弄清自己在这里做错了什么。this.props.test 即...
img: 
author: 伽罗
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React和Next.js的新手，请多多包涵。</font><font style="vertical-align: inherit;">但是我花了三个小时进行搜索，因此无法终生弄清自己在这里做错了什么。</font></font></p>

<p><code>this.props.test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 即使看起来应该输出“ test”，也不会输出任何东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从来没有调用过。</font></font></p>

<pre><code>class Example extends React.Component {<font></font>
<font></font>
  static async getInitialProps() {<font></font>
    return {<font></font>
      test: 'test'<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;h1&gt;Hi {this.props.test}&lt;/h1&gt;<font></font>
    )<font></font>
 } <font></font>
<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于Next.js中的Pages，所以子组件的正确方法是</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
