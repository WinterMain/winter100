---
layout: question
title:  Redux中mapToDispatchToProps（）的参数时，“ dispatch”不是函数
date:   2020-03-12T03:01:21.000Z
description: 我是一名javascript / redux / react初学者，使用redux，react-redux和react构建一个小型应用程序。出于某种原因，...
img: 
author: 古一蛋蛋
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是一名javascript / redux / react初学者，使用redux，react-redux和react构建一个小型应用程序。</font><font style="vertical-align: inherit;">出于某种原因，当在连接（反应-redux绑定）的同时使用mapDispatchToProps函数时，我收到一个TypeError，指示我尝试执行生成的prop时，dispatch不是函数。</font><font style="vertical-align: inherit;">但是，当我将调度称为道具时（请参阅提供的代码中的setAddr函数），它可以工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很好奇这是为什么，在redux docs的示例TODO应用程序中，mapDispatchToProps方法是以相同的方式设置的。</font><font style="vertical-align: inherit;">当我在函数内部进行console.log（dispatch）时，它说dispatch是类型对象。</font><font style="vertical-align: inherit;">我可以继续以这种方式使用调度，但是在继续使用redux之前，我会更好地知道为什么会这样。</font><font style="vertical-align: inherit;">我正在将webpack与babel-loaders一起使用进行编译。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码：</font></font></p>

<pre><code>import React, { PropTypes, Component } from 'react';<font></font>
import { connect } from 'react-redux';<font></font>
import { setAddresses } from '../actions.js';<font></font>
import GeoCode from './geoCode.js';<font></font>
import FlatButton from 'material-ui/lib/flat-button';<font></font>
<font></font>
const Start = React.createClass({<font></font>
    propTypes: {<font></font>
        onSubmit: PropTypes.func.isRequired<font></font>
    },<font></font>
<font></font>
    setAddr: function(){<font></font>
        this.props.dispatch(<font></font>
            setAddresses({<font></font>
                pickup: this.refs.pickup.state.address,<font></font>
                dropoff: this.refs.dropoff.state.address<font></font>
            })<font></font>
        )   <font></font>
<font></font>
    },<font></font>
<font></font>
    render: function() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;div className="row"&gt;<font></font>
                    &lt;div className="col-xs-6"&gt;<font></font>
                        &lt;GeoCode ref='pickup' /&gt;<font></font>
                    &lt;/div&gt;<font></font>
                    &lt;div className="col-xs-6"&gt;<font></font>
                        &lt;GeoCode ref='dropoff' /&gt;<font></font>
                    &lt;/div&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div className="row"&gt;<font></font>
                    &lt;div className="col-xs-6"&gt;<font></font>
                        &lt;FlatButton <font></font>
                            label='Does Not Work'<font></font>
                            onClick={this.props.onSubmit({<font></font>
                                pickup: this.refs.pickup.state.address,<font></font>
                                dropoff: this.refs.dropoff.state.address<font></font>
                            })} <font></font>
                            /&gt;<font></font>
                    &lt;/div&gt;<font></font>
                    &lt;div className="col-xs-6"&gt;<font></font>
                        &lt;FlatButton <font></font>
                            label='Works'<font></font>
                            onClick={this.setAddr} <font></font>
                            /&gt;<font></font>
                    &lt;/div&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
})<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
    return {<font></font>
        onSubmit: (data) =&gt; {<font></font>
            dispatch(setAddresses(data))<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
const StartContainer = connect(mapDispatchToProps)(Start)<font></font>
<font></font>
export default StartContainer<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第916篇《Redux中mapToDispatchToProps（）的参数时，“ dispatch”不是函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您不提供</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个参数时，如下所示：</font></font></p>

<pre><code>export default connect(mapStateToProps)(Checkbox)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您将自动获得对组件的道具的派遣，因此您可以：</font></font></p>

<pre><code>class SomeComp extends React.Component {<font></font>
  constructor(props, context) {<font></font>
    super(props, context);<font></font>
  }<font></font>
  componentDidMount() {<font></font>
    this.props.dispatch(ACTION GOES HERE);<font></font>
  }<font></font>
....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何mapDispatchToProps</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样使用..其易于理解的第一个参数是mapStateToProps，第二个参数是mapDispatchToProps最后与函数/类连接。 </font></font></p>

<pre><code>const mapStateToProps = (state) =&gt; {<font></font>
  return {<font></font>
    todos: getVisibleTodos(state.todos, state.visibilityFilter)<font></font>
  }<font></font>
}<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
  return {<font></font>
    onTodoClick: (id) =&gt; {<font></font>
      dispatch(toggleTodo(id))<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时在传递连接时更改组件功能的顺序时也会发生此错误。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺序错误：</font></font></strong></p>

<pre><code>export default connect(mapDispatchToProps, mapStateToProps)(TodoList);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的顺序：</font></font></strong></p>

<pre><code>export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font></p>

<pre><code>const StartContainer = connect(null, mapDispatchToProps)(Start) 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 </font></font></p>

<pre><code>const StartContainer = connect(mapDispatchToProps)(Start)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不带</font><font style="vertical-align: inherit;">参数地</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个参数。</font></font></p>

<p><code>export default connect(null, mapDispatchToProps)(Start)</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenNear</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你只是缺少第一个参数</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">摘自Redux todo应用程序：</font></font></p>

<pre><code>const mapStateToProps = (state) =&gt; {<font></font>
  return {<font></font>
    todos: getVisibleTodos(state.todos, state.visibilityFilter)<font></font>
  }<font></font>
}<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
  return {<font></font>
    onTodoClick: (id) =&gt; {<font></font>
      dispatch(toggleTodo(id))<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
const VisibleTodoList = connect(<font></font>
  mapStateToProps,<font></font>
  mapDispatchToProps<font></font>
)(TodoList)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过交换参数解决了它 </font></font></p>

<pre><code>export default connect(mapDispatchToProps, mapStateToProps)(Checkbox)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是错误的。</font><font style="vertical-align: inherit;">在</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有可能成为第一个参数：</font></font></p>

<pre><code>export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在听起来很明显，但可能会帮助某人。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
