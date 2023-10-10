---
layout: question
title:  我可以在Redux中使用没有mapStateToProps的mapDispatchToProps吗？
date:   2020-03-13T09:07:47.000Z
description: 我正在分解Redux的todo示例以尝试理解它。我读到它mapDispatchToProps允许您将调度动作映射为道具，因此我想到重写addTodo.js...
img: 
author: 神无StafanTom
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在分解Redux的todo示例以尝试理解它。</font><font style="vertical-align: inherit;">我读到它</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许您将调度动作映射为道具，因此我想到重写</font></font><code>addTodo.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使用mapDispatchToProps而不是调用dispatch（addTodo（））。</font><font style="vertical-align: inherit;">我叫它</font></font><code>addingTodo()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>import React from 'react';<font></font>
import {connect} from 'react-redux';<font></font>
import addTodo from '../actions';<font></font>
<font></font>
let AddTodo = ({addingTodo}) =&gt; {<font></font>
  let input;<font></font>
  return (<font></font>
      &lt;div&gt;<font></font>
        &lt;form onSubmit={e =&gt; {<font></font>
          e.preventDefault()<font></font>
          if (!input.value.trim()) {<font></font>
            return<font></font>
          }<font></font>
          addingTodo(input.value)<font></font>
          input.value = ""<font></font>
        }}&gt;<font></font>
          &lt;input ref={node =&gt; {<font></font>
            input = node<font></font>
          }} /&gt;<font></font>
          &lt;button type="submit"&gt;Submit&lt;/button&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
const mapDispatchToProps = {<font></font>
  addingTodo: addTodo<font></font>
}<font></font>
<font></font>
AddTodo = connect(<font></font>
  mapDispatchToProps<font></font>
)(AddTodo)<font></font>
<font></font>
export default AddTodo<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我运行该应用程序时，出现此错误：</font></font><code>Error: Invalid value of type object for mapStateToProps argument when connecting component AddTodo.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我以前从未</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从AddTodo组件开始，所以我不确定是什么问题。</font><font style="vertical-align: inherit;">我的直觉说，</font></font><code>connect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先于</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作原件如下所示：</font></font></p>

<pre><code>import React from 'react';<font></font>
import {connect} from 'react-redux';<font></font>
import addTodo from '../actions';<font></font>
<font></font>
let AddTodo = ({dispatch}) =&gt; {<font></font>
  let input;<font></font>
  return (<font></font>
      &lt;div&gt;<font></font>
        &lt;form onSubmit={e =&gt; {<font></font>
          e.preventDefault()<font></font>
          if (!input.value.trim()) {<font></font>
            return<font></font>
          }<font></font>
          dispatch(addTodo(input.value))<font></font>
          input.value = ""<font></font>
        }}&gt;<font></font>
          &lt;input ref={node =&gt; {<font></font>
            input = node<font></font>
          }} /&gt;<font></font>
          &lt;button type="submit"&gt;Submit&lt;/button&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
AddTodo = connect()(AddTodo)<font></font>
<font></font>
export default AddTodo<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的仓库可以在</font></font><a href="https://github.com/IggHub/understanding-redux" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是，有没有mapStateToProps可以做mapDispatchToProps吗？</font><font style="vertical-align: inherit;">我想做的是一种可接受的做法吗？如果没有，为什么呢？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的你可以。</font><font style="vertical-align: inherit;">只是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为第一个参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>AddTodo = connect(<font></font>
    null,<font></font>
    mapDispatchToProps<font></font>
)(AddTodo)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这不仅是可以接受的做法，还是触发操作的推荐方法。</font><font style="vertical-align: inherit;">使用</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许隐藏在React组件中使用Redux的事实</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
