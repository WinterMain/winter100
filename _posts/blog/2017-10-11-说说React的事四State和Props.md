---
layout: post
title:  说说React的事（四）State和Props
date:   2017-10-11T15:36:25.000Z
description: 在React里，我们经常会和两个基本特性State和Props打交道。StateReact把用户的界面当做是状态机，State是React组件中的一个对象，改变...
img: 
author: Winter
category: blog
answer: 0
tags: 说说React的事
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>在React里，我们经常会和两个基本特性State和Props打交道。</p>

<h2><em><strong>State</strong></em></h2>

<p>React把用户的界面当做是状态机，State是React组件中的一个对象，改变这个状态State时然后再去渲染这个状态时，就可以引起界面做出相应的改变，使得页面和数据保持一致。</p>

<pre>
import React from &#39;react&#39;;

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: &quot;Header from state...&quot;,
         content: &quot;Content from state...&quot;
      }
   }
	
   render() {
      return (
         &lt;div&gt;
            &lt;h1&gt;{this.state.header}&lt;/h1&gt;
            &lt;h2&gt;{this.state.content}&lt;/h2&gt;
         &lt;/div&gt;
      );
   }
}

export default App;</pre>

<p>运行这段代码后我们将看到页面有h1标签显示Header from state...和h2标签显示Content from state...，我们通过this.setState方法来改变state状态并引起页面重新渲染。比如上面的代码片段中假如给h1添加一个点击方法，然后点击h1执行以下的代码，那h1标签将会变为显示hello world。</p>

<pre>
this.setState({header:&quot;hello world&quot;});</pre>

<p>这里要注意的是，每次调用this.setState都会触发页面重新渲染，即render方法都会被执行一次。所以千万不能再render方法中显性或隐性的调用this.setState方法。</p>

<h2><em><strong>Props</strong></em></h2>

<p>父组件向子组件传递数据的方式就是通过Props，我们知道React是一种单向数据流的框架，而这个Props就是连接父组件和子组件数据流之间的一座桥梁，而且传递给子组件Props数据是只读，子组件不能再改变Props中的值。如下所示父组件App向子组件Header和Content传递数据：</p>

<pre>
import React from &#39;react&#39;;

class App extends React.Component {
   render() {
      return (
         &lt;div&gt;
            &lt;Header title=&quot;I&#39;m tilte&quot;/&gt;
            &lt;Content subtitle=&quot;I&#39;m subtitle&quot; content=&quot;hello world&quot;/&gt;
         &lt;/div&gt;
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         &lt;div&gt;
            &lt;h1&gt;{this.props.title}&lt;/h1&gt;
         &lt;/div&gt;
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         &lt;div&gt;
            &lt;h2&gt;{this.props.subtitle}&lt;/h2&gt;
            &lt;p&gt;{this.props.content}&lt;/p&gt;
         &lt;/div&gt;
      );
   }
}

export default App;</pre>

<p>运行该代码片段：</p>

<h1>I&#39;m tilte</h1>

<h2>I&#39;m subtitle</h2>

<p>hello world</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第24篇《说说React的事（四）State和Props》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
