---
layout: question
title:  具有动态键名的Reactjs setState（）？
date:   2020-03-10T05:36:59.000Z
description: 编辑：这是重复项，请参阅此处设置状态时，我找不到使用动态键名的任何示例。这就是我想做的：inputChangeHandler   function...
img: 
author: 逆天L
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这是重复项，请参阅</font></font><a href="https://stackoverflow.com/questions/2462800/how-to-create-a-dynamic-key-to-be-added-to-a-javascript-object-variable"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置状态时，我找不到使用动态键名的任何示例。</font><font style="vertical-align: inherit;">这就是我想做的：</font></font></p>

<pre><code>inputChangeHandler : function (event) {<font></font>
    this.setState( { event.target.id  : event.target.value } );<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中event.target.id用作要更新的状态键。</font><font style="vertical-align: inherit;">在React中这不可能吗？  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第480篇《具有动态键名的Reactjs setState（）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用传播语法，如下所示：</font></font></p>

<pre><code>inputChangeHandler : function (event) {<font></font>
    this.setState( { <font></font>
        ...this.state,<font></font>
        [event.target.id]: event.target.value<font></font>
    } );<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>this.setState({ [`${event.target.id}`]: event.target.value}, () =&gt; {<font></font>
      console.log("State updated: ", JSON.stringify(this.state[event.target.id]));<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请介意引号字符。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tom猪猪</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在寻找一个漂亮而简单的解决方案，但发现了这一点： </font></font></p>

<pre><code>this.setState({ [`image${i}`]: image })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐飞云逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6 +，您可以执行[ </font></font><code>${variable}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想设置第二级密钥存储在变量中的状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font></font><code>this.setState({permissions[perm.code]: e.target.checked})</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这不是有效的语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下代码实现了这一目标：</font></font></p>

<pre><code>this.setState({<font></font>
  permissions: {<font></font>
    ...this.state.permissions,<font></font>
    [perm.code]: e.target.checked<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢@Cory的提示，我使用了这个：</font></font></p>

<pre><code>inputChangeHandler : function (event) {<font></font>
    var stateObject = function() {<font></font>
      returnObj = {};<font></font>
      returnObj[this.target.id] = this.target.value;<font></font>
         return returnObj;<font></font>
    }.bind(event)();<font></font>
<font></font>
    this.setState( stateObject );    <font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用ES6或</font></font><a href="https://babeljs.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel编译器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来转换JSX代码，您也可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算的属性名称</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来完成此操作</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>inputChangeHandler : function (event) {<font></font>
    this.setState({ [event.target.id]: event.target.value });<font></font>
    // alternatively using template strings for strings<font></font>
    // this.setState({ [`key${event.target.id}`]: event.target.value });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想补充一下，您还可以使用解构来重构代码并使它看起来更整洁。</font></font></p>

<pre><code>inputChangeHandler: function ({ target: { id, value }) {<font></font>
    this.setState({ [id]: value });<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与这样的</font></font><code>.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
    dataForm.map(({ id, placeholder, type }) =&gt; {<font></font>
        return &lt;Input<font></font>
            value={this.state.type}<font></font>
            onChangeText={(text) =&gt; this.setState({ [type]: text })}<font></font>
            placeholder={placeholder}<font></font>
            key={id} /&gt;<font></font>
    })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数。</font><font style="vertical-align: inherit;">希望这可以帮助 ：）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是如何做到的...</font></font></p>

<pre><code>inputChangeHandler: function(event) {<font></font>
  var key = event.target.id<font></font>
  var val = event.target.value<font></font>
  var obj  = {}<font></font>
  obj[key] = val<font></font>
  this.setState(obj)<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当需要处理多个受控输入元素时，可以向每个元素添加一个name属性，并让处理函数根据event.target.name的值选择要执行的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>inputChangeHandler(event) {<font></font>
  this.setState({ [event.target.name]: event.target.value });<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
