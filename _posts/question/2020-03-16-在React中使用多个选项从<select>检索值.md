---
layout: question
title:  在React中使用多个选项从<select>检索值
date:   2020-03-16T07:21:13.000Z
description: 设置选择框选择哪个选项的React方法是value在其<select>自身上设置一个特殊的prop ，与要选择value的<option>元素上的属性相对...
img: 
author: 阿飞阳光
category: question
answer: 8
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置选择框选择哪个选项的React方法是</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自身</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">设置一个特殊的</font><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">，与</font><font style="vertical-align: inherit;">要选择</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上的属性</font><font style="vertical-align: inherit;">相对应</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于一个</font></font><code>multiple</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择，该道具可以接受数组。</font><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：当前文档似乎已删除对此的引用）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，因为这是一个特殊的属性，所以我想知道</font><font style="vertical-align: inherit;">当用户更改内容时，在相同的option-values-values结构中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检索</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选定选项</font><font style="vertical-align: inherit;">的规范方法是什么</font><font style="vertical-align: inherit;">（因此我可以将其通过回调传递给父组件等），因为推测相同的</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性在DOM元素上将不可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，对于一个文本字段，您可以执行以下操作（JSX）：</font></font></p>

<pre><code>var TextComponent = React.createClass({<font></font>
  handleChange: function(e) {<font></font>
    var newText = e.target.value;<font></font>
    this.props.someCallbackFromParent(newText);<font></font>
  },<font></font>
  render: function() {<font></font>
    return &lt;input type="text" value={this.props.someText} onChange={this.handleChange} /&gt;;<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>???</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此多重选择组件</font><font style="vertical-align: inherit;">的等效项是什么</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>var MultiSelectComponent = React.createClass({<font></font>
  handleChange: function(e) {<font></font>
    var newArrayOfSelectedOptionValues = ???;<font></font>
    this.props.someCallbackFromParent(newArrayOfSelectedOptionValues);<font></font>
  },<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;select multiple={true} value={this.props.arrayOfOptionValues} onChange={this.handleChange}&gt;<font></font>
        &lt;option value={1}&gt;First option&lt;/option&gt;<font></font>
        &lt;option value={2}&gt;Second option&lt;/option&gt;<font></font>
        &lt;option value={3}&gt;Third option&lt;/option&gt;<font></font>
      &lt;/select&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天泡芙神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您可以</font></font><code>selectedOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在目标内部</font><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">对象...无需遍历所有选项。</font><font style="vertical-align: inherit;">假设您想将值发送给</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为道具传递给组件</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数：您可以在</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多选对象的</font><font style="vertical-align: inherit;">上使用以下函数</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>onSelectChange = (e) =&gt; {<font></font>
    const values = [...e.target.selectedOptions].map(opt =&gt; opt.value);<font></font>
    this.props.onChange(values);<font></font>
  };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小胖</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是：</font></font></p>

<pre><code>handleChange({ target }) {<font></font>
    this.props.someCallback(<font></font>
       Array.prototype.slice.call(target.selectedOptions).map(o =&gt; o.value)<font></font>
    )<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom前端</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Array.from()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>e.target.selectedOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以执行受控的选择倍数：</font></font></p>

<pre><code>handleChange = (e) =&gt; {<font></font>
  let value = Array.from(e.target.selectedOptions, option =&gt; option.value);<font></font>
  this.setState({values: value});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">target.selectedOptions返回一个HTMLCollection</font></font></p>

<p><a href="https://codepen.io/papawa/pen/XExeZY" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/papawa/pen/XExeZY</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想使用</font></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以选择如下所示的值：</font></font></p>

<pre><code>var select = React.findDOMNode(this.refs.selectRef); <font></font>
var values = [].filter.call(select.options, function (o) {<font></font>
      return o.selected;<font></font>
    }).map(function (o) {<font></font>
      return o.value;<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></p>

<pre><code>  let select = this.refs.selectRef;<font></font>
  let values = [].filter.call(select.options, o =&gt; o.selected).map(o =&gt; o.value);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法</font></font></p>

<pre><code>handleChange(evt) {<font></font>
  this.setState({multiValue: [...evt.target.selectedOptions].map(o =&gt; o.value)}); <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下为我工作</font></font></p>

<pre><code>var selectBoxObj = React.findDOMNode(this.refs.selectBox)<font></font>
var values = $(selectBoxObj).val()<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您将真实的DOM节点用作更改事件的目标，所以您在其他任何地方都可以使用相同的方法：</font></font></p>

<pre><code>handleChange: function(e) {<font></font>
  var options = e.target.options;<font></font>
  var value = [];<font></font>
  for (var i = 0, l = options.length; i &lt; l; i++) {<font></font>
    if (options[i].selected) {<font></font>
      value.push(options[i].value);<font></font>
    }<font></font>
  }<font></font>
  this.props.someCallback(value);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您希望在填写表格时跟踪所选的选项：</font></font></p>

<pre><code>handleChange(e) {<font></font>
    // assuming you initialized the default state to hold selected values<font></font>
    this.setState({<font></font>
        selected:[].slice.call(e.target.selectedOptions).map(o =&gt; {<font></font>
            return o.value;<font></font>
        });<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><code>selectedOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是与DOM相关的元素的数组形式的集合/列表。</font><font style="vertical-align: inherit;">选择选项值时，可以在事件目标对象中访问它。</font></font><code>Array.prototype.slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许我们为新状态创建它的副本。</font><font style="vertical-align: inherit;">您也可以使用ref（如果您不捕获事件）以这种方式访问​​值，这是该问题的另一个答案。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
