---
layout: question
title:  反应：如何使用setState更新state.item \[1\]状态？
date:   2020-03-10T05:37:38.000Z
description: 我正在创建一个应用程序，用户可以在其中设计自己的表单。例如，指定字段名称以及应包括哪些其他列的详细信息。该组件在此处可作为JSFiddle使用。我...
img: 
author: SamJinJin
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在创建一个应用程序，用户可以在其中设计自己的表单。</font><font style="vertical-align: inherit;">例如，指定字段名称以及应包括哪些其他列的详细信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该组件</font></font><a href="http://jsfiddle.net/stabenfeldt/98dhz3e6/5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可作为JSFiddle使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的初始状态如下：</font></font></p>

<pre><code>var DynamicForm = React.createClass({<font></font>
  getInitialState: function() {<font></font>
   var items = {};<font></font>
   items[1] = { name: 'field 1', populate_at: 'web_start',<font></font>
                same_as: 'customer_name',<font></font>
                autocomplete_from: 'customer_name', title: '' };<font></font>
   items[2] = { name: 'field 2', populate_at: 'web_end',<font></font>
                same_as: 'user_name', <font></font>
                    autocomplete_from: 'user_name', title: '' };<font></font>
<font></font>
     return { items };<font></font>
   },<font></font>
<font></font>
  render: function() {<font></font>
     var _this = this;<font></font>
     return (<font></font>
       &lt;div&gt;<font></font>
         { Object.keys(this.state.items).map(function (key) {<font></font>
           var item = _this.state.items[key];<font></font>
           return (<font></font>
             &lt;div&gt;<font></font>
               &lt;PopulateAtCheckboxes this={this}<font></font>
                 checked={item.populate_at} id={key} <font></font>
                   populate_at={data.populate_at} /&gt;<font></font>
            &lt;/div&gt;<font></font>
            );<font></font>
        }, this)}<font></font>
        &lt;button onClick={this.newFieldEntry}&gt;Create a new field&lt;/button&gt;<font></font>
        &lt;button onClick={this.saveAndContinue}&gt;Save and Continue&lt;/button&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在用户更改任何值时更新状态，但是我很难定位正确的对象：</font></font></p>

<pre><code>var PopulateAtCheckboxes = React.createClass({<font></font>
  handleChange: function (e) {<font></font>
     item = this.state.items[1];<font></font>
     item.name = 'newName';<font></font>
     items[1] = item;<font></font>
     this.setState({items: items});<font></font>
  },<font></font>
  render: function() {<font></font>
    var populateAtCheckbox = this.props.populate_at.map(function(value) {<font></font>
      return (<font></font>
        &lt;label for={value}&gt;<font></font>
          &lt;input type="radio" name={'populate_at'+this.props.id} value={value}<font></font>
            onChange={this.handleChange} checked={this.props.checked == value}<font></font>
            ref="populate-at"/&gt;<font></font>
          {value}<font></font>
        &lt;/label&gt;<font></font>
      );<font></font>
    }, this);<font></font>
    return (<font></font>
      &lt;div className="populate-at-checkboxes"&gt;<font></font>
        {populateAtCheckbox}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何</font></font><code>this.setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行更新</font></font><code>items[1].name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第481篇《反应：如何使用setState更新state.item \[1\]状态？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何创建另一个组件（对于需要进入数组的对象）并将以下内容作为道具传递呢？</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件索引-索引将用于在数组中创建/更新。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">set函数-此函数根据组件索引将数据放入数组。</font></font></li>
</ol>

<pre><code>&lt;SubObjectForm setData={this.setSubObjectData}                                                            objectIndex={index}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里可以根据使用此SubObjectForm的位置传递{index}。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和setSubObjectData可以是这样的。</font></font></p>

<pre><code> setSubObjectData: function(index, data){<font></font>
      var arrayFromParentObject= &lt;retrieve from props or state&gt;;<font></font>
      var objectInArray= arrayFromParentObject.array[index];<font></font>
      arrayFromParentObject.array[index] = Object.assign(objectInArray, data);<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SubObjectForm中，可以在更改数据时调用this.props.setData，如下所示。</font></font></p>

<pre><code>&lt;input type="text" name="name" onChange={(e) =&gt; this.props.setData(this.props.objectIndex,{name: e.target.value})}/&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小哥</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code> handleChanges = (value, key) =&gt; {<font></font>
     // clone the current State object<font></font>
    let cloneObject = _.extend({}, this.state.currentAttribute);<font></font>
    // key as user.name and value= "ABC" then current attributes have current properties as we changes<font></font>
    currentAttribute[key] = value;<font></font>
    // then set the state "currentAttribute" is key and "cloneObject" is changed object.  <font></font>
    this.setState({currentAttribute: cloneObject});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并从文本框中更改添加onChange事件 </font></font></p>

<pre><code>onChange = {<font></font>
   (event) =&gt; {                                                <font></font>
      this.handleChanges(event.target.value, "title");<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用事件on </font></font><code>handleChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找出已更改的元素，然后对其进行更新。</font><font style="vertical-align: inherit;">为此，您可能需要更改一些属性以进行标识和更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见小提琴</font></font><a href="https://jsfiddle.net/69z2wepo/6164/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/69z2wepo/6164/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神乐路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我沉闷的头脑中，遵循以下代码很容易。</font><font style="vertical-align: inherit;">删除对象并替换为更新的对象</font></font></p>

<pre><code>    var udpateditem = this.state.items.find(function(item) { <font></font>
                   return item.name == "field_1" });<font></font>
    udpateditem.name= "New updated name"                       <font></font>
    this.setState(prevState =&gt; ({                                   <font></font>
    items:prevState.dl_name_template.filter(function(item) { <font></font>
                                    return item.name !== "field_1"}).concat(udpateditem)<font></font>
    }));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Gil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据关于</font></font><a href="https://reactjs.org/docs/react-component.html#setstate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的React文档</font><font style="vertical-align: inherit;">，</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照此处其他答案的建议</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">不是理想的。</font><font style="vertical-align: inherit;">由于</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步行为</font><font style="vertical-align: inherit;">的性质，</font><font style="vertical-align: inherit;">使用此技术的后续调用可能会覆盖先前的调用，从而导致不良后果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，React docs建议使用更新器形式，</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">形式</font><font style="vertical-align: inherit;">在先前状态下运行。</font><font style="vertical-align: inherit;">请记住，在更新数组或对象时，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须返回一个新的数组或对象，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为React要求我们保持状态不变性。</font><font style="vertical-align: inherit;">使用ES6语法的spread运算符浅表复制数组，在数组的给定索引处创建或更新对象的属性，如下所示：</font></font></p>

<pre><code>this.setState(prevState =&gt; {<font></font>
    const newItems = [...prevState.items];<font></font>
    newItems[index].name = newName;<font></font>
    return {items: newItems};<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误的方法！</font></font></strong> </p>

<pre><code>handleChange = (e) =&gt; {<font></font>
    const { items } = this.state;<font></font>
    items[1].name = e.target.value;<font></font>
<font></font>
    // update state<font></font>
    this.setState({<font></font>
        items,<font></font>
    });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如许多更好的开发人员在评论中指出的：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改变状态是错误的！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">花了我一段时间来解决这个问题。</font><font style="vertical-align: inherit;">以上工作，但它带走了React的力量。</font><font style="vertical-align: inherit;">例如，</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于它是直接修改的，因此不会将其视为更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是：</font></font></p>

<pre><code>handleChange = (e) =&gt; {<font></font>
    this.setState(prevState =&gt; ({<font></font>
        items: {<font></font>
            ...prevState.items,<font></font>
            [prevState.items[1].name]: e.target.value,<font></font>
        },<font></font>
    }));<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">这是一个可行的简单解决方案！</font></font></p>

<pre><code>const newItems = [...this.state.items];<font></font>
newItems[item] = value;<font></font>
this.setState({ items:newItems });<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
