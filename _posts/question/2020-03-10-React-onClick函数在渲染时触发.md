---
layout: question
title:  React onClick函数在渲染时触发
date:   2020-03-10T14:34:36.000Z
description: 我将2个值传递给子组件： 要显示的对象列表  删除功能。我使用.map（）函数显示对象列表（如在React教程页面中给出的示例中所示），但是...
img: 
author: 蛋蛋L
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将2个值传递给子组件： </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要显示的对象列表  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除功能。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用.map（）函数显示对象列表（如在React教程页面中给出的示例中所示），但是该组件中的按钮在</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">render上</font><font style="vertical-align: inherit;">触发该</font><font style="vertical-align: inherit;">函数（不应在渲染时触发）。</font><font style="vertical-align: inherit;">我的代码如下所示：</font></font></p>

<pre><code>module.exports = React.createClass({<font></font>
    render: function(){<font></font>
        var taskNodes = this.props.todoTasks.map(function(todo){<font></font>
            return (<font></font>
                &lt;div&gt;<font></font>
                    {todo.task}<font></font>
                    &lt;button type="submit" onClick={this.props.removeTaskFunction(todo)}&gt;Submit&lt;/button&gt;<font></font>
                &lt;/div&gt;<font></font>
            );<font></font>
        }, this);<font></font>
        return (<font></font>
            &lt;div className="todo-task-list"&gt;<font></font>
                {taskNodes}<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：为什么</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数在渲染时触发，如何使其</font><font style="vertical-align: inherit;">不</font><font style="vertical-align: inherit;">触发？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第523篇《React onClick函数在渲染时触发》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ItachiJinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题，我的代码是：</font></font></p>

<pre><code>function RadioInput(props) {<font></font>
    return (<font></font>
    &lt;div className="form-check form-check-inline"&gt;<font></font>
        &lt;input className="form-check-input" type="radio" name="inlineRadioOptions" id={props.id} onClick={props.onClick} value={props.label}&gt;&lt;/input&gt;<font></font>
        &lt;label className="form-check-label" htmlFor={props.id}&gt;{props.label}&lt;/label&gt;<font></font>
    &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
class ScheduleType extends React.Component<font></font>
{<font></font>
    renderRadioInput(id,label)<font></font>
    {<font></font>
        id = "inlineRadio"+id;<font></font>
        return(<font></font>
            &lt;RadioInput<font></font>
                id = {id}<font></font>
                label = {label}<font></font>
                onClick = {this.props.onClick}<font></font>
            /&gt;<font></font>
        );<font></font>
<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该在哪里 </font></font></p>

<pre><code>onClick = {() =&gt; this.props.onClick()}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RenderRadioInput中</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为我解决了这个问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些不使用箭头功能而是简单一些的人...我在signOut函数后添加括号时遇到了这个问题...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取代这个 </font></font><code>&lt;a onClick={props.signOut()}&gt;Log Out&lt;/a&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与此</font></font><code>&lt;a onClick={props.signOut}&gt;Log Out&lt;/a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...！</font><font style="vertical-align: inherit;">😆</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX与ReactJS一起使用，因为它与HTML非常相似，它使程序员有使用HTML的感觉，而最终却可以转换为javascript文件。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写for循环并将函数指定为{this.props.removeTaskFunction（todo）}会在每次循环触发时执行这些函数。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要停止这种行为，我们需要将函数返回给onClick。  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗箭头功能具有一个隐藏的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">return</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句以及</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bind属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此它会将函数返回给OnClick，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为Javascript也可以返回函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 -</font></font></p>

<pre><code>onClick={() =&gt; { this.props.removeTaskFunction(todo) }}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意思是-</font></font></p>

<pre><code>var onClick = function() {<font></font>
  return this.props.removeTaskFunction(todo);<font></font>
}.bind(this);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX将</font><a href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx" rel="nofollow noreferrer"><font style="vertical-align: inherit;">使用大括号</font></a><font style="vertical-align: inherit;">评估</font></font><a href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript表达式</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font></font><code>this.props.removeTaskFunction(todo)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用并将返回值分配给</font></font><code>onClick</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要提供的</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个功能。</font><font style="vertical-align: inherit;">为此，您可以将值包装在匿名函数中。</font></font></p>

<pre><code>export const samepleComponent = ({todoTasks, removeTaskFunction}) =&gt; {<font></font>
    const taskNodes = todoTasks.map(todo =&gt; (<font></font>
                &lt;div&gt;<font></font>
                    {todo.task}<font></font>
                    &lt;button type="submit" onClick={() =&gt; removeTaskFunction(todo)}&gt;Submit&lt;/button&gt;<font></font>
                &lt;/div&gt;<font></font>
            );<font></font>
    return (<font></font>
        &lt;div className="todo-task-list"&gt;<font></font>
            {taskNodes}<font></font>
        &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是调用函数，而是将值绑定到函数：</font></font></p>

<pre><code>this.props.removeTaskFunction.bind(this, todo)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN参考：</font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小胖蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的值</font><font style="vertical-align: inherit;">应该是一个函数，而不是函数调用。</font></font></p>

<pre><code>&lt;button type="submit" onClick={function(){removeTaskFunction(todo)}}&gt;Submit&lt;/button&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony村村</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您是在调用该函数而不是将函数传递给onClick，所以将该行更改为此：</font></font></p>

<pre><code>&lt;button type="submit" onClick={() =&gt; { this.props.removeTaskFunction(todo) }}&gt;Submit&lt;/button&gt;
</code></pre>

<p><code>=&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在ES6中引入了一个称为Arrow Function的功能，并将在React 0.13.3或更高版本中得到支持。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
