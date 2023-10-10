---
layout: question
title:  如何从material-ui TextField，DropDownMenu组件获取数据？
date:   2020-04-03T03:42:29.000Z
description: 我创建表单，我有几个TextField，DropDownMenu材质UI组件，问题是如何从一个obj中的所有TextField，DropDownMenus...
img: 
author: 小小
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建表单，我有几个TextField，DropDownMenu材质UI组件，问题是如何从一个obj中的所有TextField，DropDownMenus收集所有数据并将其发送到服务器。</font><font style="vertical-align: inherit;">对于TextField，它具有TextField.getValue（）返回输入的值。</font><font style="vertical-align: inherit;">但是我不知道如何使用它。</font></font></p>

<pre><code>var React = require('react'),<font></font>
    mui = require('material-ui'),<font></font>
    Paper = mui.Paper,<font></font>
    Toolbar = mui.Toolbar,<font></font>
    ToolbarGroup = mui.ToolbarGroup,<font></font>
    DropDownMenu = mui.DropDownMenu,<font></font>
    TextField = mui.TextField,<font></font>
    FlatButton = mui.FlatButton,<font></font>
    Snackbar = mui.Snackbar;<font></font>
<font></font>
var menuItemsIwant = [<font></font>
  { payload: '1', text: '[Select a finacial purpose]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsIcan = [<font></font>
  { payload: '1', text: '[Select an objective]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsHousing = [<font></font>
  { payload: '1', text: '[Select housing]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsIlive = [<font></font>
  { payload: '1', text: '[Select family mambers]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsLifestyle = [<font></font>
  { payload: '1', text: '[Select lifestyle]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsLifestyle2 = [<font></font>
  { payload: '1', text: '[Select savings]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var menuItemsIncome = [<font></font>
  { payload: '1', text: '[Select your yearly income]' },<font></font>
  { payload: '2', text: 'Every Night' },<font></font>
  { payload: '3', text: 'Weeknights' },<font></font>
  { payload: '4', text: 'Weekends' },<font></font>
  { payload: '5', text: 'Weekly' }<font></font>
];<font></font>
var Content = React.createClass({<font></font>
<font></font>
  getInitialState: function() {<font></font>
    return {<font></font>
      //formData: {<font></font>
      //  name: '',<font></font>
      //  age: '',<font></font>
      //  city: '',<font></font>
      //  state: ''<font></font>
      //},<font></font>
      errorTextName: '',<font></font>
      errorTextAge: '',<font></font>
      errorTextCity: '',<font></font>
      errorTextState: ''<font></font>
    };<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
<font></font>
    return (<font></font>
      &lt;div className="container-fluid"&gt;<font></font>
        &lt;div className="row color-bg"&gt;&lt;/div&gt;<font></font>
        &lt;div className="row main-bg"&gt;<font></font>
          &lt;div className="container"&gt;<font></font>
            &lt;div className="mui-app-content-canvas page-with-nav"&gt;<font></font>
              &lt;div className="page-with-nav-content"&gt;<font></font>
<font></font>
                &lt;Paper zDepth={1}&gt;<font></font>
<font></font>
                  &lt;h2 className="title-h2"&gt;Now, what would you like to do?&lt;/h2&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={1} float="right"&gt;<font></font>
                      &lt;span&gt;I want to&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-long"<font></font>
                        menuItems={menuItemsIwant}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={2} float="right"&gt;<font></font>
                      &lt;span&gt;So I can&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-long"<font></font>
                        menuItems={menuItemsIcan}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;h2 className="title-h2"&gt;Please, share a little about you.&lt;/h2&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={3} float="right"&gt;<font></font>
                      &lt;span&gt;I am&lt;/span&gt;<font></font>
                      &lt;TextField<font></font>
                        id="name"<font></font>
                        className="text-field-long"<font></font>
                        ref="textfield"<font></font>
                        hintText="Full name"<font></font>
                        errorText={this.state.errorTextName}<font></font>
                        onChange={this._handleErrorInputChange}<font></font>
                      /&gt;<font></font>
                      &lt;span&gt;and I am&lt;/span&gt;<font></font>
                      &lt;TextField<font></font>
                        id="age"<font></font>
                        className="text-field-short"<font></font>
                        ref="textfield"<font></font>
                        hintText="00"<font></font>
                        errorText={this.state.errorTextAge}<font></font>
                        onChange={this._handleErrorInputChange}<font></font>
                      /&gt;<font></font>
                      &lt;span className="span-right-measure"&gt;years of age.&lt;/span&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={4} float="right"&gt;<font></font>
                      &lt;span&gt;I&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        hintText="I"<font></font>
                        menuItems={menuItemsHousing}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                      &lt;span&gt;in&lt;/span&gt;<font></font>
                      &lt;TextField<font></font>
                        id="city"<font></font>
                        ref="textfield"<font></font>
                        className="text-field-long"<font></font>
                        hintText="City"<font></font>
                        errorText={this.state.errorTextCity}<font></font>
                        onChange={this._handleErrorInputChange}<font></font>
                      /&gt;<font></font>
                      &lt;span&gt;,&lt;/span&gt;<font></font>
                      &lt;TextField<font></font>
                        id="state"<font></font>
                        ref="textfield"<font></font>
                        className="text-field-short text-field-right-measure"<font></font>
                        hintText="ST"<font></font>
                        errorText={this.state.errorTextState}<font></font>
                        onChange={this._handleErrorInputChange}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={5} float="right"&gt;<font></font>
                      &lt;span&gt;Where I live&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-long"<font></font>
                        menuItems={menuItemsIlive}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={6} float="right"&gt;<font></font>
                      &lt;span&gt;My lifestyle is&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-short"<font></font>
                        menuItems={menuItemsLifestyle}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                      &lt;span&gt;and I've saved&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-short"<font></font>
                        menuItems={menuItemsLifestyle2}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;Toolbar&gt;<font></font>
                    &lt;ToolbarGroup key={7} float="right"&gt;<font></font>
                      &lt;span&gt;My yearly household is about&lt;/span&gt;<font></font>
                      &lt;DropDownMenu<font></font>
                        className="dropdown-mobile"<font></font>
                        menuItems={menuItemsIncome}<font></font>
                        //autoWidth={false}<font></font>
                      /&gt;<font></font>
                    &lt;/ToolbarGroup&gt;<font></font>
                  &lt;/Toolbar&gt;<font></font>
<font></font>
                  &lt;div className="clearfix"&gt;&lt;/div&gt;<font></font>
<font></font>
                  &lt;div className="button-place"&gt;<font></font>
                    &lt;FlatButton<font></font>
                      onTouchTap={this._handleClick}<font></font>
                      label="I'm done lets go!"<font></font>
                    /&gt;<font></font>
<font></font>
                    &lt;Snackbar<font></font>
                      ref="snackbar"<font></font>
                      message="Invalid input, please check and try again"<font></font>
                    /&gt;<font></font>
                  &lt;/div&gt;<font></font>
<font></font>
                &lt;/Paper&gt;<font></font>
<font></font>
              &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  },<font></font>
<font></font>
  _handleErrorInputChange: function(e) {<font></font>
    if (e.target.id === 'name') {<font></font>
      var name = e.target.value;<font></font>
      this.setState({<font></font>
        //name: name,<font></font>
        errorTextName: e.target.value ? '' : 'Please, type your Name'<font></font>
      });<font></font>
    } else if (e.target.id === 'age') {<font></font>
      var age = e.target.value;<font></font>
      this.setState({<font></font>
        //age: age,<font></font>
        errorTextAge: e.target.value ? '' : 'Check Age'<font></font>
      });<font></font>
    } else if (e.target.id === 'city') {<font></font>
      var city = e.target.value;<font></font>
      this.setState({<font></font>
        //city: city,<font></font>
        errorTextCity: e.target.value ? '' : 'Type City'<font></font>
      });<font></font>
    } else if (e.target.id === 'state') {<font></font>
      var state = e.target.value;<font></font>
      this.setState({<font></font>
        //state: state,<font></font>
        errorTextState: e.target.value ? '' : 'Type State'<font></font>
      });<font></font>
    }<font></font>
  },<font></font>
<font></font>
  _handleClick: function(e) {<font></font>
    this.refs.snackbar.show();<font></font>
    //TODO: find a way to change errorText for all empty TextField<font></font>
    if (this.refs.textfield &amp;&amp; this.refs.textfield.getValue().length === 0) {<font></font>
      this.setState({<font></font>
        errorTextState: 'Type State',<font></font>
        errorTextCity: 'Type City',<font></font>
        errorTextAge: 'Check Age',<font></font>
        errorTextName: 'Please, type your Name'<font></font>
      });<font></font>
    }<font></font>
  }<font></font>
<font></font>
});<font></font>
<font></font>
module.exports = Content;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过_handleClick方法将其发送到服务器上。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3978篇《如何从material-ui TextField，DropDownMenu组件获取数据？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用接受的答案/这是另一个（已删除）问题的答案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@karopastal</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向您的</font></font><code>&lt;TextField /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">添加一个</font><font style="vertical-align: inherit;">属性，</font><font style="vertical-align: inherit;">并在其上调用getValue（），如下所示：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件：</font></font></p>

<pre><code>&lt;TextField ref="myField" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用getValue：</font></font></p>

<pre><code>this.refs.myField.getValue()
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我想到的最简单的解决方案，我们获得了material-ui textField创建的输入的值：</font></font></p>

<pre><code>      create(e) {<font></font>
        e.preventDefault();<font></font>
        let name = this.refs.name.input.value;<font></font>
        alert(name);<font></font>
      }<font></font>
<font></font>
      constructor(){<font></font>
        super();<font></font>
        this.create = this.create.bind(this);<font></font>
      }<font></font>
<font></font>
      render() {<font></font>
        return (<font></font>
              &lt;form&gt;<font></font>
                &lt;TextField ref="name" hintText="" floatingLabelText="Your name" /&gt;&lt;br/&gt;<font></font>
                &lt;RaisedButton label="Create" onClick={this.create} primary={true} /&gt;<font></font>
              &lt;/form&gt;<font></font>
        )}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
