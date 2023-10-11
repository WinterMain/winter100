---
layout: question
title:  在React中使用setState更新对象
date:   2020-03-10T05:58:40.000Z
description: 是否可以使用setState更新对象的属性？就像是：this.state = {   jasper  { name  'jasper', age...
img: 
author: 老丝米亚
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使用setState更新对象的属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>this.state = {<font></font>
   jasper: { name: 'jasper', age: 28 },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了： </font></font></p>

<pre><code>this.setState({jasper.name: 'someOtherName'});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有这个：</font></font></p>

<pre><code>this.setState({jasper: {name: 'someothername'}})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个导致语法错误，第二个则什么都不做。</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第482篇《在React中使用setState更新对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry路易小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单而动态的方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以了，但是您需要将所有id都设置为父对象，这样父对象将指向对象的名称，即id =“ jasper”，并在对象jasper内将输入元素的名称=属性命名。</font></font></p>

<pre><code>handleChangeObj = ({target: { id , name , value}}) =&gt; this.setState({ [id]: { ...this.state[id] , [name]: value } });
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，遵循Alberto Piras解决方案，如果您不想复制所有“状态”对象：</font></font></p>

<pre><code>handleChange(el) {<font></font>
    let inputName = el.target.name;<font></font>
    let inputValue = el.target.value;<font></font>
<font></font>
    let jasperCopy = Object.assign({}, this.state.jasper);<font></font>
    jasperCopy[inputName].name = inputValue;<font></font>
<font></font>
    this.setState({jasper: jasperCopy});<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：输入标签的名称===对象的字段）</font></font></p>

<pre><code>&lt;input name="myField" type="text" <font></font>
      value={this.state.myObject.myField} <font></font>
     onChange={this.handleChangeInpForm}&gt;<font></font>
&lt;/input&gt;<font></font>
<font></font>
-----------------------------------------------------------<font></font>
handleChangeInpForm = (e) =&gt; {<font></font>
   let newObject = this.state.myObject;<font></font>
   newObject[e.target.name] = e.target.value;<font></font>
   this.setState({<font></font>
     myObject: newObject <font></font>
   })<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用了这个解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有这样的嵌套状态：</font></font></p>

<pre><code>this.state = {<font></font>
  formInputs:{<font></font>
    friendName:{<font></font>
      value:'',<font></font>
      isValid:false,<font></font>
      errorMsg:''<font></font>
    },<font></font>
    friendEmail:{<font></font>
      value:'',<font></font>
      isValid:false,<font></font>
      errorMsg:''<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以声明handleChange函数，该函数复制当前状态并使用更改后的值重新分配它</font></font></p>

<pre><code>handleChange(el) {<font></font>
    let inputName = el.target.name;<font></font>
    let inputValue = el.target.value;<font></font>
<font></font>
    let statusCopy = Object.assign({}, this.state);<font></font>
    statusCopy.formInputs[inputName].value = inputValue;<font></font>
<font></font>
    this.setState(statusCopy);<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是带有事件监听器的html。</font><font style="vertical-align: inherit;">确保使用与状态对象相同的名称（在本例中为“ friendName”）</font></font></p>

<pre><code>&lt;input type="text" onChange={this.handleChange} " name="friendName" /&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
