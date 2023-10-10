---
layout: question
title:  使用reactjs和typescript的typesafe select onChange事件
date:   2020-03-19T06:23:28.000Z
description: 我已经弄清楚了如何使用事件的丑陋转换将事件处理程序绑定到SELECT元素上。是否可以以类型安全的方式检索值而无需强制转换为任何值？import R...
img: 
author: 飞云小小猪猪
category: question
answer: 5
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经弄清楚了如何使用事件的丑陋转换将事件处理程序绑定到SELECT元素上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以以类型安全的方式检索值而无需强制转换为任何值？</font></font></p>

<pre><code>import React = require('react');<font></font>
<font></font>
interface ITestState {<font></font>
    selectedValue: string;<font></font>
}<font></font>
<font></font>
export class Test extends React.Component&lt;{}, ITestState&gt; {<font></font>
<font></font>
    constructor() {<font></font>
        super();<font></font>
        this.state = { selectedValue: "A" };<font></font>
    }<font></font>
<font></font>
    change(event: React.FormEvent) {<font></font>
        console.log("Test.change");<font></font>
        console.log(event.target); // in chrome =&gt; &lt;select class="form-control" id="searchType" data-reactid=".0.0.0.0.3.1"&gt;...&lt;/select&gt;<font></font>
<font></font>
        // Use cast to any works but is not type safe<font></font>
        var unsafeSearchTypeValue = ((event.target) as any).value;<font></font>
<font></font>
        console.log(unsafeSearchTypeValue); // in chrome =&gt; B<font></font>
<font></font>
        this.setState({<font></font>
            selectedValue: unsafeSearchTypeValue<font></font>
        });<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;label htmlFor="searchType"&gt;Safe&lt;/label&gt;<font></font>
                &lt;select className="form-control" id="searchType" onChange={ e =&gt; this.change(e) } value={ this.state.selectedValue }&gt;<font></font>
                    &lt;option value="A"&gt;A&lt;/option&gt;<font></font>
                    &lt;option value="B"&gt;B&lt;/option&gt;<font></font>
                &lt;/select&gt;<font></font>
                &lt;h1&gt;{this.state.selectedValue}&lt;/h1&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
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
            <span class="discuss-user">JinJinDavaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了@thoughtrepo的答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中没有确定类型的事件之前，为输入控件提供特殊的目标接口可能会很有用：</font></font></p>

<pre><code>export interface FormControlEventTarget extends EventTarget{<font></font>
    value: string;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的代码中将其转换为这种类型，以适合具有   </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IntelliSense</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的位置：</font></font></p>

<pre><code> import {FormControlEventTarget} from "your.helper.library"<font></font>
<font></font>
 (event.target as FormControlEventTarget).value;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro猿A</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;select value={ this.state.foo } onChange={this.handleFooChange}&gt;<font></font>
    &lt;option value="A"&gt;A&lt;/option&gt;<font></font>
    &lt;option value="B"&gt;B&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>private handleFooChange = (event: React.FormEvent&lt;HTMLSelectElement&gt;) =&gt; {<font></font>
    const element = event.target as HTMLSelectElement;<font></font>
    this.setState({ foo: element.value });<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小小猪猪</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，这目前是不可能的-始终需要强制转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使其成为可能，需要修改react的.d.ts，以便SELECT元素的onChange的签名使用新的SelectFormEvent。</font><font style="vertical-align: inherit;">新的事件类型将公开目标，该目标公开值。</font><font style="vertical-align: inherit;">然后，代码可以是类型安全的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，总是需要对任何对象进行强制转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以将所有内容封装在MYSELECT标记中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用：    </font></font></p>

<pre><code>type HtmlEvent = React.ChangeEvent&lt;HTMLSelectElement&gt;<font></font>
<font></font>
const onChange: React.EventHandler&lt;HtmlEvent&gt; = <font></font>
   (event: HtmlEvent) =&gt; { <font></font>
       console.log(event.target.value) <font></font>
   }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是将类型添加到接收值的变量中，如下所示：</font></font></p>

<pre><code>var value: string = (event.target as any).value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您也可以</font><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">投射</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>event.target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var value = ((event.target as any).value as string);
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您可以定义</font></font><code>EventTarget.value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独</font></font><code>.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的内容。</font><font style="vertical-align: inherit;">但是，该类型必须与其他地方使用的类型兼容，并且</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何</font><font style="vertical-align: inherit;">您最终都会</font><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球公司</font></font></em></p>

<pre><code>interface EventTarget {<font></font>
    value: any;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
