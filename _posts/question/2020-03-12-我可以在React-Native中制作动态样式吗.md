---
layout: question
title:  我可以在React Native中制作动态样式吗？
date:   2020-03-12T03:01:51.000Z
description: 说我有一个带有这样的渲染的组件：<View style={jewelStyle}></View>其中jewelStyle =   {   ...
img: 
author: Stafan小宇宙
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我有一个带有这样的渲染的组件：</font></font></p>

<pre><code>&lt;View style={jewelStyle}&gt;&lt;/View&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中jewelStyle = </font></font></p>

<pre><code>  {<font></font>
    borderRadius: 10,<font></font>
    backgroundColor: '#FFEFCC',<font></font>
    width: 20,<font></font>
    height: 20,<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使背景颜色动态并随机分配？</font><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre><code>  {<font></font>
    borderRadius: 10,<font></font>
    backgroundColor: getRandomColor(),<font></font>
    width: 20,<font></font>
    height: 20,<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这使View的所有实例具有相同的颜色，我希望每个实例都是唯一的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有小费吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第917篇《我可以在React Native中制作动态样式吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对我有用的东西：</font></font></p>

<pre><code>render() {<font></font>
  const { styleValue } = this.props;<font></font>
  const dynamicStyleUpdatedFromProps = {<font></font>
    height: styleValue,<font></font>
    width: styleValue,<font></font>
    borderRadius: styleValue,<font></font>
  }<font></font>
<font></font>
  return (<font></font>
    &lt;View style={{ ...styles.staticStyleCreatedFromStyleSheet, ...dynamicStyleUpdatedFromProps }} /&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p>For some reason, this was the only way that mine would update properly.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道有几个答案，但是我认为最好，最简单的方法是使用状态“更改”是该状态的目的。</font></font></p>

<pre><code>export default class App extends Component {<font></font>
    constructor(props) {<font></font>
      super(props);<font></font>
      this.state = {<font></font>
          style: {<font></font>
              backgroundColor: "white"<font></font>
          }<font></font>
      };<font></font>
    }<font></font>
    onPress = function() {<font></font>
      this.setState({style: {backgroundColor: "red"}});<font></font>
    }<font></font>
    render() {<font></font>
       return (<font></font>
          ...<font></font>
          &lt;View style={this.state.style}&gt;&lt;/View&gt;<font></font>
          ...<font></font>
       )<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常按​​照以下方式进行操作：</font></font></p>

<pre><code>&lt;View style={this.jewelStyle()} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre><code>jewelStyle = function(options) {<font></font>
   return {<font></font>
     borderRadius: 12,<font></font>
     background: randomColor(),<font></font>
   }<font></font>
 }<font></font>
</code></pre>

<p>Every time View is rendered, a new style object will be instantiated with a random color associated with it. Of course, this means that the colors will change every time the component is re-rendered, which is perhaps not what you want. Instead, you could do something like this:</p>

<pre><code>var myColor = randomColor()<font></font>
&lt;View style={jewelStyle(myColor)} /&gt;<font></font>
</code></pre>

<p>...</p>

<pre><code>jewelStyle = function(myColor) {<font></font>
   return {<font></font>
     borderRadius: 10,<font></font>
     background: myColor,<font></font>
   }<font></font>
 }<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
