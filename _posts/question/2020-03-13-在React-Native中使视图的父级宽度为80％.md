---
layout: question
title:  在React Native中使视图的父级宽度为80％
date:   2020-03-12T16:27:26.000Z
description: 我正在React Native中创建一个表单，并希望使TextInput屏幕宽度达到80％。使用HTML和普通CSS，这很简单：input { ...
img: 
author: 猴子猪猪
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在React Native中创建一个表单，并希望使</font></font><code>TextInput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕宽度达到80％。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用HTML和普通CSS，这很简单：</font></font></p>

<pre><code>input {<font></font>
    display: block;<font></font>
    width: 80%;<font></font>
    margin: auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了React Native不支持</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，宽度百分比或自动边距。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那我该怎么办呢？</font><font style="vertical-align: inherit;">有</font></font><a href="https://github.com/facebook/css-layout/issues/57#issuecomment-102148200" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的一些讨论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中作出反应原住民的问题跟踪器，但提出的解决方案似乎是讨厌的黑客。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1344篇《在React Native中使视图的父级宽度为80％》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我得到解决方案的方式。</font><font style="vertical-align: inherit;">简单而甜美。</font><font style="vertical-align: inherit;">与屏幕密度无关：</font></font></p>

<pre><code>export default class AwesomeProject extends Component {<font></font>
    constructor(props){<font></font>
        super(props);<font></font>
        this.state = {text: ""}<font></font>
    }<font></font>
  render() {<font></font>
    return (<font></font>
       &lt;View<font></font>
          style={{<font></font>
            flex: 1,<font></font>
            backgroundColor: "#ececec",<font></font>
            flexDirection: "column",<font></font>
            justifyContent: "center",<font></font>
            alignItems: "center"<font></font>
          }}<font></font>
        &gt;<font></font>
          &lt;View style={{ padding: 10, flexDirection: "row" }}&gt;<font></font>
            &lt;TextInput<font></font>
              style={{ flex: 0.8, height: 40, borderWidth: 1 }}<font></font>
              onChangeText={text =&gt; this.setState({ text })}<font></font>
              placeholder="Text 1"<font></font>
              value={this.state.text}<font></font>
            /&gt;<font></font>
          &lt;/View&gt;<font></font>
          &lt;View style={{ padding: 10, flexDirection: "row" }}&gt;<font></font>
            &lt;TextInput<font></font>
              style={{ flex: 0.8, height: 40, borderWidth: 1 }}<font></font>
              onChangeText={text =&gt; this.setState({ text })}<font></font>
              placeholder="Text 2"<font></font>
              value={this.state.text}<font></font>
            /&gt;<font></font>
          &lt;/View&gt;<font></font>
          &lt;View style={{ padding: 10, flexDirection: "row" }}&gt;<font></font>
            &lt;Button<font></font>
              onPress={onButtonPress}<font></font>
              title="Press Me"<font></font>
              accessibilityLabel="See an Information"<font></font>
            /&gt;<font></font>
          &lt;/View&gt;<font></font>
        &lt;/View&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
