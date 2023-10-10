---
layout: question
title:  ReactJS：警告：setState（…）：在现有状态转换期间无法更新
date:   2020-03-11T02:55:05.000Z
description: 我正在尝试从渲染视图重构以下代码：<Button href="#" active={\!this.state.singleJourney} onClic...
img: 
author: 乐米亚
category: question
answer: 8
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试从渲染视图重构以下代码：</font></font></p>

<pre><code>&lt;Button href="#" active={!this.state.singleJourney} onClick={this.handleButtonChange.bind(this,false)} &gt;Retour&lt;/Button&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到绑定位于构造函数内的版本。</font><font style="vertical-align: inherit;">原因是渲染视图中的绑定会给我带来性能问题，尤其是在低端手机上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了以下代码，但是我不断收到以下错误（很多错误）。</font><font style="vertical-align: inherit;">该应用似乎陷入了循环：</font></font></p>

<pre><code>Warning: setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我使用的代码：</font></font></p>

<pre><code>var React = require('react');<font></font>
var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');<font></font>
var Button = require('react-bootstrap/lib/Button');<font></font>
var Form = require('react-bootstrap/lib/Form');<font></font>
var FormGroup = require('react-bootstrap/lib/FormGroup');<font></font>
var Well = require('react-bootstrap/lib/Well');<font></font>
<font></font>
export default class Search extends React.Component {<font></font>
<font></font>
    constructor() {<font></font>
        super();<font></font>
<font></font>
        this.state = {<font></font>
            singleJourney: false<font></font>
        };<font></font>
<font></font>
        this.handleButtonChange = this.handleButtonChange.bind(this);<font></font>
    }<font></font>
<font></font>
    handleButtonChange(value) {<font></font>
        this.setState({<font></font>
            singleJourney: value<font></font>
        });<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
<font></font>
        return (<font></font>
            &lt;Form&gt;<font></font>
<font></font>
                &lt;Well style={wellStyle}&gt;<font></font>
<font></font>
                    &lt;FormGroup className="text-center"&gt;<font></font>
<font></font>
                        &lt;ButtonGroup&gt;<font></font>
                            &lt;Button href="#" active={!this.state.singleJourney} onClick={this.handleButtonChange(false)} &gt;Retour&lt;/Button&gt;<font></font>
                            &lt;Button href="#" active={this.state.singleJourney} onClick={this.handleButtonChange(true)} &gt;Single Journey&lt;/Button&gt;<font></font>
                        &lt;/ButtonGroup&gt;<font></font>
                    &lt;/FormGroup&gt;<font></font>
<font></font>
                &lt;/Well&gt;<font></font>
<font></font>
            &lt;/Form&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
module.exports = Search;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村神无猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用来为组件打开Popover的解决方案是</font></font><a href="https://reactstrap.github.io/components/popovers/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reactstrap（React Bootstrap 4组件）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>    class Settings extends Component {<font></font>
        constructor(props) {<font></font>
            super(props);<font></font>
<font></font>
            this.state = {<font></font>
              popoversOpen: [] // array open popovers<font></font>
            }<font></font>
        }<font></font>
<font></font>
        // toggle my popovers<font></font>
        togglePopoverHelp = (selected) =&gt; (e) =&gt; {<font></font>
            const index = this.state.popoversOpen.indexOf(selected);<font></font>
            if (index &lt; 0) {<font></font>
              this.state.popoversOpen.push(selected);<font></font>
            } else {<font></font>
              this.state.popoversOpen.splice(index, 1);<font></font>
            }<font></font>
            this.setState({ popoversOpen: [...this.state.popoversOpen] });<font></font>
        }<font></font>
<font></font>
        render() {<font></font>
            &lt;div id="settings"&gt;<font></font>
                &lt;button id="PopoverTimer" onClick={this.togglePopoverHelp(1)} className="btn btn-outline-danger" type="button"&gt;?&lt;/button&gt;<font></font>
                &lt;Popover placement="left" isOpen={this.state.popoversOpen.includes(1)} target="PopoverTimer" toggle={this.togglePopoverHelp(1)}&gt;<font></font>
                  &lt;PopoverHeader&gt;Header popover&lt;/PopoverHeader&gt;<font></font>
                  &lt;PopoverBody&gt;Description popover&lt;/PopoverBody&gt;<font></font>
                &lt;/Popover&gt;<font></font>
<font></font>
                &lt;button id="popoverRefresh" onClick={this.togglePopoverHelp(2)} className="btn btn-outline-danger" type="button"&gt;?&lt;/button&gt;<font></font>
                &lt;Popover placement="left" isOpen={this.state.popoversOpen.includes(2)} target="popoverRefresh" toggle={this.togglePopoverHelp(2)}&gt;<font></font>
                  &lt;PopoverHeader&gt;Header popover 2&lt;/PopoverHeader&gt;<font></font>
                  &lt;PopoverBody&gt;Description popover2&lt;/PopoverBody&gt;<font></font>
                &lt;/Popover&gt;<font></font>
            &lt;/div&gt;<font></font>
        }<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">不知</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我打电话时遇到了同样的错误 </font></font></p>

<pre><code>this.handleClick = this.handleClick.bind(this);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的构造函数中，当</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">handleClick不存在时</font></font></strong>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我已经删除了它，并且不小心将“ this”绑定语句留在了我的构造函数中）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案=删除“ this”绑定语句。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题当然是在绑定带有onClick处理程序的按钮时的绑定。</font><font style="vertical-align: inherit;">解决方案是在渲染时调用动作处理程序时使用箭头功能。</font><font style="vertical-align: inherit;">像这样： 
    </font></font><code>onClick={ () =&gt; this.handleButtonChange(false) }</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呼叫中</font><font style="vertical-align: inherit;">发生的任何状态更改都将发出相同的警告</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个棘手的例子：在基于状态数据呈现多选GUI组件时，如果state没有要显示的内容，</font></font><code>resetOptions()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则对该组件</font><font style="vertical-align: inherit;">的调用</font><font style="vertical-align: inherit;">被视为状态更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明显的解决方法是用</font></font><code>resetOptions()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>componentDidUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自react docs将</font></font><a href="https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数传递给事件处理程序</font></font></a></p>

<pre><code>&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;<font></font>
&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常发生在您打电话时</font></font></p>

<p><strong><code>onClick={this.handleButton</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）</font></font><strong><code>}</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-注意</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（），</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是：</font></font></p>

<p><strong><code>onClick={this.handleButton</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -请注意，我们在初始化函数时并未调用该函数</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村达蒙LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在下面的代码中给出了一个通用示例，以使您更好地理解</font></font></p>

<pre class="lang-html prettyprint-override"><code>render(){<font></font>
    return(<font></font>
      &lt;div&gt;<font></font>
<font></font>
        &lt;h3&gt;Simple Counter&lt;/h3&gt;<font></font>
        &lt;Counter<font></font>
          value={this.props.counter}<font></font>
          onIncrement={this.props.increment()} &lt;------ calling the function<font></font>
          onDecrement={this.props.decrement()} &lt;-----------<font></font>
          onIncrementAsync={this.props.incrementAsync()} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供道具时，我直接调用该函数，该循环执行无限循环，并且会给您该错误，删除该函数可以正常工作。 </font></font></p>

<pre class="lang-html prettyprint-override"><code>render(){<font></font>
    return(<font></font>
      &lt;div&gt;<font></font>
<font></font>
        &lt;h3&gt;Simple Counter&lt;/h3&gt;<font></font>
        &lt;Counter<font></font>
          value={this.props.counter}<font></font>
          onIncrement={this.props.increment} &lt;------ function call removed<font></font>
          onDecrement={this.props.decrement} &lt;-----------<font></font>
          onIncrementAsync={this.props.incrementAsync} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来您不小心</font></font><code>handleButtonChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在render方法中</font><font style="vertical-align: inherit;">调用了该</font><font style="vertical-align: inherit;">方法，而您可能想这样做</font></font><code>onClick={() =&gt; this.handleButtonChange(false)}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想在onClick处理程序中创建lambda，我认为您将需要两个绑定方法，每个参数一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>this.handleButtonChangeRetour = this.handleButtonChange.bind(this, true);<font></font>
this.handleButtonChangeSingle = this.handleButtonChange.bind(this, false);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中：</font></font></p>

<pre><code>&lt;Button href="#" active={!this.state.singleJourney} onClick={this.handleButtonChangeSingle} &gt;Retour&lt;/Button&gt;<font></font>
&lt;Button href="#" active={this.state.singleJourney} onClick={this.handleButtonChangeRetour}&gt;Single Journey&lt;/Button&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
