---
layout: question
title:  ReactJS this.state为空
date:   2020-04-07T03:13:32.000Z
description: 首先，我说我是ReactJS的新手。我正在尝试通过制作一个使用React填充数据的简单站点来学习。我有一个JSON文件，其中包含将与map循环通过的链接数...
img: 
author: JinJin
category: question
answer: 4
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我说我是ReactJS的新手。</font><font style="vertical-align: inherit;">我正在尝试通过制作一个使用React填充数据的简单站点来学习。</font><font style="vertical-align: inherit;">我有一个JSON文件，其中包含将与map循环通过的链接数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试将其设置为组件状态，然后通过道具将其传递到导航栏链接，但出现“未捕获的TypeError：无法读取null的属性'data'”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图四处寻找解决方案，但找不到任何东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：当我尝试对对象进行硬编码并通过该对象映射时，它返回map的方式是不确定的。</font><font style="vertical-align: inherit;">但是我不确定这与setState错误直接相关。</font></font></p>

<pre><code>/** @jsx React.DOM */<font></font>
<font></font>
var conf = {<font></font>
    companyName: "Slant Hosting"<font></font>
  };<font></font>
<font></font>
var NavbarLinks = React.createClass({<font></font>
  render: function(){<font></font>
    var navLinks = this.props.data.map(function(link){<font></font>
      return(<font></font>
        &lt;li&gt;&lt;a href={link.target}&gt;{link.text}&lt;/a&gt;&lt;/li&gt;<font></font>
      );<font></font>
    });<font></font>
    return(<font></font>
      &lt;ul className="nav navbar-nav"&gt;<font></font>
        {navLinks}<font></font>
      &lt;/ul&gt;<font></font>
    )<font></font>
  }<font></font>
});<font></font>
<font></font>
var NavbarBrand = React.createClass({<font></font>
  render: function(){<font></font>
    return(<font></font>
      &lt;a className="navbar-brand" href="#"&gt;{conf.companyName}&lt;/a&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var Navbar = React.createClass({<font></font>
  getInitalState: function(){<font></font>
    return{<font></font>
      data : []<font></font>
    };<font></font>
  },<font></font>
  loadNavbarJSON: function() {<font></font>
    $.ajax({<font></font>
      url: "app/js/configs/navbar.json",<font></font>
      dataType: 'json',<font></font>
      success: function(data) {<font></font>
        this.setState({<font></font>
          data: data<font></font>
        });<font></font>
        console.log(data);<font></font>
        console.log(this.state.data);<font></font>
      }.bind(this),<font></font>
      error: function(xhr, status, err) {<font></font>
        console.error(this.props.url, status, err.toString());<font></font>
      }.bind(this)<font></font>
    });<font></font>
  },<font></font>
  componentDidMount: function(){<font></font>
    this.loadNavbarJSON();<font></font>
  },<font></font>
  render: function(){<font></font>
    return(<font></font>
      &lt;nav className="navbar navbar-default navbar-fixed-top" role="navigation"&gt;<font></font>
        &lt;div className="container-fluid"&gt;<font></font>
          &lt;div className="navbar-header"&gt;<font></font>
            &lt;NavbarBrand /&gt;<font></font>
          &lt;/div&gt;<font></font>
          &lt;NavbarLinks data={this.state.data} /&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/nav&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var Header = React.createClass({<font></font>
  render: function(){<font></font>
    return(<font></font>
      &lt;Navbar /&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
React.renderComponent(<font></font>
  &lt;Header /&gt;,<font></font>
  document.getElementById('render')<font></font>
);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4044篇《ReactJS this.state为空》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES7 +类的更多实际答案：</font></font></p>

<pre><code>export class Counter extends React.Component {<font></font>
  state = { data : [] };<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6课程（已回答警告）</font></font></p>

<pre><code>export class Component extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = { data : [] };<font></font>
  }<font></font>
  ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经得到了回答，但是我来到这里时遇到的问题很容易发生在任何人身上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到</font></font><code>console.log(this.state)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">登录</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个我的方法，只是因为我没有写：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this.handleSelect = this.handleSelect.bind（this）;</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的构造函数中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过一种方法</font><font style="vertical-align: inherit;">获取了</font><font style="vertical-align: inherit;">this.state，请检查是否已将其绑定到组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（由于@tutiplain的问题）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我得到</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我写</font></font><code>console.log(this.state)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的方法不受类限制（我的handleSelect方法）。</font><font style="vertical-align: inherit;">这导致</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向对象层次结构中较高的某个对象（最有可能是该</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象），而</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">对象没有名为的属性</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，通过将我的</font></font><code>handleSelect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">到</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以确保无论何时编写</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法，它都将指向该方法所在的对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议你阅读这一个很好的解释</font></font><a href="http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题。</font><font style="vertical-align: inherit;">就我而言，运行时并</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有重新编译我的东西。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我刚刚重新启动了开发服务器，以使其再次工作。</font></font><br></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6，必须在您的React组件类的构造函数中创建初始状态，如下所示：</font></font></p>

<pre><code>constructor(props) {<font></font>
    super(props)<font></font>
    this.state ={<font></font>
    // Set your state here<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
