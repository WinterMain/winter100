---
layout: question
title:  React Checkbox不发送onChange
date:   2020-03-11T15:19:22.000Z
description: TLDR：使用defaultChecked而不是已检查的工作jsbin。尝试设置一个简单的复选框，当选中它时会划掉其标签文本。由于某些原因，当我使用组...
img: 
author: 理查德十三
category: question
answer: 5
tags: 复选框 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TLDR：使用defaultChecked而不是已检查的工作</font></font><a href="http://jsbin.com/mecimayawe/1/edit?js,output" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsbin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试设置一个简单的复选框，当选中它时会划掉其标签文本。</font><font style="vertical-align: inherit;">由于某些原因，当我使用组件时，不会触发handleChange。</font><font style="vertical-align: inherit;">谁能解释我在做什么错？</font></font></p>

<pre class="lang-js prettyprint-override"><code>var CrossoutCheckbox = React.createClass({<font></font>
  getInitialState: function () {<font></font>
    return {<font></font>
        complete: (!!this.props.complete) || false<font></font>
      };<font></font>
  },<font></font>
  handleChange: function(){<font></font>
    console.log('handleChange', this.refs.complete.checked); // Never gets logged<font></font>
    this.setState({<font></font>
      complete: this.refs.complete.checked<font></font>
    });<font></font>
  },<font></font>
  render: function(){<font></font>
    var labelStyle={<font></font>
      'text-decoration': this.state.complete?'line-through':''<font></font>
    };<font></font>
    return (<font></font>
      &lt;span&gt;<font></font>
        &lt;label style={labelStyle}&gt;<font></font>
          &lt;input<font></font>
            type="checkbox"<font></font>
            checked={this.state.complete}<font></font>
            ref="complete"<font></font>
            onChange={this.handleChange}<font></font>
          /&gt;<font></font>
          {this.props.text}<font></font>
        &lt;/label&gt;<font></font>
      &lt;/span&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre class="lang-js prettyprint-override"><code>React.renderComponent(CrossoutCheckbox({text: "Text Text", complete: false}), mountNode);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用checked不会使基础值（显然）发生变化，因此不会调用onChange处理程序。</font><font style="vertical-align: inherit;">切换到defaultChecked似乎可以解决此问题：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var CrossoutCheckbox = React.createClass({<font></font>
  getInitialState: function () {<font></font>
    return {<font></font>
        complete: (!!this.props.complete) || false<font></font>
      };<font></font>
  },<font></font>
  handleChange: function(){<font></font>
    this.setState({<font></font>
      complete: !this.state.complete<font></font>
    });<font></font>
  },<font></font>
  render: function(){<font></font>
    var labelStyle={<font></font>
      'text-decoration': this.state.complete?'line-through':''<font></font>
    };<font></font>
    return (<font></font>
      &lt;span&gt;<font></font>
        &lt;label style={labelStyle}&gt;<font></font>
          &lt;input<font></font>
            type="checkbox"<font></font>
            defaultChecked={this.state.complete}<font></font>
            ref="complete"<font></font>
            onChange={this.handleChange}<font></font>
          /&gt;<font></font>
          {this.props.text}<font></font>
        &lt;/label&gt;<font></font>
      &lt;/span&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第835篇《React Checkbox不发送onChange》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取复选框的选中状态，路径为：</font></font></p>

<pre><code>this.refs.complete.state.checked
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是从传递给</font></font><code>handleChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">的事件中获取它</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>event.target.checked
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在材料ui中，复选框的状态可以提取为</font></font></p>

<pre><code>this.refs.complete.state.switched
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您具有如下所示的</font></font><code>handleChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>handleChange = (e) =&gt; {<font></font>
  this.setState({<font></font>
    [e.target.name]: e.target.value,<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以创建一个自定义</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，使其像文本输入一样：</font></font></p>

<pre><code>&lt;input<font></font>
  type="checkbox"<font></font>
  name="check"<font></font>
  checked={this.state.check}<font></font>
  onChange={(e) =&gt; {<font></font>
    this.handleChange({<font></font>
      target: {<font></font>
        name: e.target.name,<font></font>
        value: e.target.checked,<font></font>
      },<font></font>
    });<font></font>
  }}<font></font>
/&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用defaultChecked时，onChange不会在移动设备上调用handleChange。</font><font style="vertical-align: inherit;">或者，您可以使用onClick和onTouchEnd。</font></font></p>

<pre><code>&lt;input onClick={this.handleChange} onTouchEnd={this.handleChange} type="checkbox" defaultChecked={!!this.state.complete} /&gt;;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下最好不要使用引用。</font><font style="vertical-align: inherit;">采用：</font></font></p>

<pre><code>&lt;input<font></font>
    type="checkbox"<font></font>
    checked={this.state.active}<font></font>
    onClick={this.handleClick}<font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些选项：</font></font></p>

<h2><code>checked</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 与 </font></font><code>defaultChecked</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前者将同时响应状态更改</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击。</font><font style="vertical-align: inherit;">后者将忽略状态更改。</font></font></p>

<h2><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 与 </font></font><code>onChange</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前者总是会触发点击。</font><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">元素</font></font><code>checked</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上存在属性，则</font><font style="vertical-align: inherit;">后者不会触发点击</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
