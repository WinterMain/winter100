---
layout: question
title:  React JSX：在选定的<select>选项上选择“ selected”
date:   2020-03-09T15:30:16.000Z
description: 在<select>菜单的React组件中，我需要selected在反映应用程序状态的选项上设置属性。在中render()，将optionState其从...
img: 
author: Mandy梅Green
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">菜单</font><font style="vertical-align: inherit;">的React组件中</font><font style="vertical-align: inherit;">，我需要</font></font><code>selected</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在反映应用程序状态的选项上</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将</font></font><code>optionState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其从状态所有者传递到SortMenu组件。</font><font style="vertical-align: inherit;">选项值</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从JSON </font><font style="vertical-align: inherit;">传入</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>render: function() {<font></font>
  var options = [],<font></font>
      optionState = this.props.optionState;<font></font>
<font></font>
  this.props.options.forEach(function(option) {<font></font>
    var selected = (optionState === option.value) ? ' selected' : '';<font></font>
<font></font>
    options.push(<font></font>
      &lt;option value={option.value}{selected}&gt;{option.label}&lt;/option&gt;<font></font>
    );<font></font>
  });<font></font>
<font></font>
// pass {options} to the select menu jsx<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这会在JSX编译上触发语法错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做可以摆脱语法错误，但显然不能解决问题：</font></font></p>

<pre><code>var selected = (optionState === option.value) ? 'selected' : 'false';<font></font>
<font></font>
&lt;option value={option.value} selected={selected}&gt;{option.label}&lt;/option&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试过这个：</font></font></p>

<pre><code>var selected = (optionState === option.value) ? true : false;<font></font>
<font></font>
&lt;option value={option.value} {selected ? 'selected' : ''}&gt;{option.label}&lt;/option&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有解决此问题的推荐方法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I got around a similar issue by setting defaultProps:</p>

<pre><code>ComponentName.defaultProps = {<font></font>
  propName: ''<font></font>
}<font></font>
</code></pre>

<p><code>&lt;select value="this.props.propName" ...</code></p>

<p>So now I avoid errors on compilation if my prop does not exist until mounting.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Posting a similar answer for MULTISELECT / optgroups:</p>

<pre><code>render() {<font></font>
  return(<font></font>
    &lt;div&gt;<font></font>
      &lt;select defaultValue="1" onChange={(e) =&gt; this.props.changeHandler(e.target.value) }&gt;<font></font>
        &lt;option disabled="disabled" value="1" hidden="hidden"&gt;-- Select --&lt;/option&gt;<font></font>
        &lt;optgroup label="Group 1"&gt;<font></font>
          {options1}<font></font>
        &lt;/optgroup&gt;<font></font>
        &lt;optgroup label="Group 2"&gt;<font></font>
          {options2}<font></font>
        &lt;/optgroup&gt;<font></font>
      &lt;/select&gt;<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西里神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个完整的解决方案，其中结合了最佳答案和其下的评论（这可能会帮助某人努力将其拼凑在一起）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6的更新（2019）-使用箭头功能和对象分解</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主要组成部分：</font></font></p>

<pre><code>class ReactMain extends React.Component {<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = { fruit: props.item.fruit };<font></font>
  }<font></font>
<font></font>
  handleChange = (event) =&gt; {<font></font>
    this.setState({ [event.target.name]: event.target.value });<font></font>
  }<font></font>
<font></font>
  saveItem = () =&gt; {<font></font>
    const item = {};<font></font>
    item.fruit = this.state.fruit;<font></font>
    // do more with item object as required (e.g. save to database)<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;ReactExample name="fruit" value={this.state.fruit} handleChange={this.handleChange} /&gt;<font></font>
    )<font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含的组件（现在是无状态功能）：</font></font></p>

<pre><code>export const ReactExample = ({ name, value, handleChange }) =&gt; (<font></font>
  &lt;select name={name} value={value} onChange={handleChange}&gt;<font></font>
    &lt;option value="A"&gt;Apple&lt;/option&gt;<font></font>
    &lt;option value="B"&gt;Banana&lt;/option&gt;<font></font>
    &lt;option value="C"&gt;Cranberry&lt;/option&gt;<font></font>
  &lt;/select&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上一个答案（使用bind）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主要组成部分：</font></font></p>

<pre><code>class ReactMain extends React.Component {<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    // bind once here, better than multiple times in render<font></font>
    this.handleChange = this.handleChange.bind(this);<font></font>
    this.state = { fruit: props.item.fruit };<font></font>
  }<font></font>
<font></font>
  handleChange(event) {<font></font>
    this.setState({ [event.target.name]: event.target.value });<font></font>
  }<font></font>
<font></font>
  saveItem() {<font></font>
    const item = {};<font></font>
    item.fruit = this.state.fruit;<font></font>
    // do more with item object as required (e.g. save to database)<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;ReactExample name="fruit" value={this.state.fruit} handleChange={this.handleChange} /&gt;<font></font>
    )<font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含的组件（现在是无状态功能）：</font></font></p>

<pre><code>export const ReactExample = (props) =&gt; (<font></font>
  &lt;select name={props.name} value={props.value} onChange={props.handleChange}&gt;<font></font>
    &lt;option value="A"&gt;Apple&lt;/option&gt;<font></font>
    &lt;option value="B"&gt;Banana&lt;/option&gt;<font></font>
    &lt;option value="C"&gt;Cranberry&lt;/option&gt;<font></font>
  &lt;/select&gt;<font></font>
)<font></font>
</code></pre>

<p>the main component maintains the selected value for fruit (in state), the included component displays the select element and updates are passed back to the main component to update its state (which then loops back to the included component to change the selected value).</p>

<p>Note the use of a name prop which allows you to declare a single handleChange method for other fields on the same form regardless of their type.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将select标签添加为第一个选项：</font></font></p>

<pre><code>&lt;option disabled hidden value=''&gt;&lt;/option&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将成为默认设置，当您选择有效选项时，您的状态将被设置</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试在尝试设置的“ selected”属性时React警告您</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上使用</font></font><code>defaultValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具，</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在</font></font><code>selected</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">进行设置</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以</font></font><code>options.value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>defaultValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择的</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React为此自动理解布尔值，因此您可以简单地编写</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（注意：不推荐）</font></font></strong></p>

<pre><code>&lt;option value={option.value} selected={optionsState == option.value}&gt;{option.label}&lt;/option&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将适当地输出“已选择”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，React使您更加轻松。</font><font style="vertical-align: inherit;">除了定义</font></font><code>selected</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个选项，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以（并且应该）简单地</font></font><code>value={optionsState}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在select标记本身上</font><font style="vertical-align: inherit;">编写</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;select value={optionsState}&gt;<font></font>
  &lt;option value="A"&gt;Apple&lt;/option&gt;<font></font>
  &lt;option value="B"&gt;Banana&lt;/option&gt;<font></font>
  &lt;option value="C"&gt;Cranberry&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参见</font></font><a href="https://reactjs.org/docs/forms.html#the-select-tag" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React select标签doc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
