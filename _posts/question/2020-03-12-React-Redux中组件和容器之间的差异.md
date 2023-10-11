---
layout: question
title:  React Redux中组件和容器之间的差异
date:   2020-03-12T02:19:38.000Z
description: react redux中的component和container有什么区别？...
img: 
author: 老丝番长
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react redux中的component和container有什么区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第870篇《React Redux中组件和容器之间的差异》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件使您可以将UI分成独立的，可重用的部分，并单独考虑每个部分。</font><font style="vertical-align: inherit;">它们有时被称为“表达组件”，主要关注的是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事物的外观</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">货柜</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器就像没有UI的组件一样，容器关注</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事物的工作方式。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它主要与redux存储进行对话以获取和更新数据</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅Redux文档中的表比较</font></font></p>

<p><a href="https://i.stack.imgur.com/o0GHZ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/o0GHZ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细说明</font></font><a href="https://redux.js.org/basics/usage-with-react#presentational-and-container-components" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://redux.js.org/basics/usage-with-react#presentational-and-container-components</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React有两个主要组件，第一个是智能组件（容器），第二个是哑巴（表示组件）。</font><font style="vertical-align: inherit;">容器与组件非常相似，唯一的区别是容器知道应用程序状态。</font><font style="vertical-align: inherit;">如果您网页的一部分仅用于显示数据（哑），则使其成为组件。</font><font style="vertical-align: inherit;">如果您需要它聪明并且知道应用程序中的状态（每当数据更改），则将其设置为容器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些组件构成了视图的一部分，因此它应该呈现DOM元素，并将内容放置在屏幕上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器参与数据的详细说明，因此它应该与redux“对话”，因为它将需要修改状态。</font><font style="vertical-align: inherit;">所以，你应该包括</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（反应-终极版）是什么使得连接和功能</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mapStateToProps</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mapDispatchToProps</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>.<font></font>
.<font></font>
.<font></font>
import { connect } from "react-redux";<font></font>
<font></font>
class myContainer extends Component {<font></font>
}<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
  // You return what it will show up as props of myContainer<font></font>
  return {<font></font>
    property: this.state.property<font></font>
  };<font></font>
}<font></font>
<font></font>
function mapDispatchToProps(dispatch) {<font></font>
  // Whenever property is called, it should be passed to all reducers<font></font>
  return bindActionCreators({ property: property }, dispatch);<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps, mapDispatchToProps)(myContainer);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们都是组件。</font><font style="vertical-align: inherit;">容器是有功能的，因此它们不会自行呈现任何html，因此您还具有表示性组件，可在其中编写实际的html。</font><font style="vertical-align: inherit;">容器的目的是映射状态并将其分发给表示组件的prop。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步阅读：</font></font><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负责获取数据和显示的组件称为智能组件或容器组件。</font><font style="vertical-align: inherit;">数据可以来自redux，任何网络呼叫或第三方订阅。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哑/表示组件是负责根据收到的道具表示视图的组件。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好文章，这里有例子 </font></font></p>

<p><a href="https://www.cronj.com/blog/difference-container-component-react-js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.cronj.com/blog/difference-container-component-react-js/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React，Redux是独立的库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React为您提供了创建HTML文档的框架。</font><font style="vertical-align: inherit;">组件以某种方式表示文档的特定部分。</font><font style="vertical-align: inherit;">然后，与组件关联的方法可以操纵文档的非常特殊的部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux是一个框架，规定了在JS环境中存储和管理数据的特定哲学。</font><font style="vertical-align: inherit;">它是一个定义了某些方法的大JS对象，最佳用例是Web应用程序的状态管理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于React规定所有数据都应从根流到树叶，因此以所有道具为主体，在组件中定义道具，然后将道具传递给某些道具给孩子，变得很繁琐。</font><font style="vertical-align: inherit;">这也使整个应用程序状态易受攻击。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Redux提供了一个干净的解决方案，只需将连接的组件包装在另一个React Component（your </font></font><code>Container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）上</font><font style="vertical-align: inherit;">，即可直接将您连接到Redux商店</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于在实现中，您的实现已经定义了所需的整个应用程序状态中的哪一部分。</font><font style="vertical-align: inherit;">因此，</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些数据带出存储区，并将其作为道具传递给包装自身的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下简单示例：</font></font></p>

<pre><code> class Person extends Component {<font></font>
  constructor(props){<font></font>
   this.name = this.props.name;<font></font>
   this.type = this.props.type;<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
     return &lt;p&gt; My name is {this.name}. I am a doctor { this.type } &lt;/p&gt;<font></font>
  }<font></font>
}<font></font>
<font></font>
 const connect = InnerComponent =&gt; { <font></font>
<font></font>
   class A extends Component{<font></font>
     render() {<font></font>
        return &lt;InnerComponent {...this.props} type="Doctor"/&gt;<font></font>
     }<font></font>
   } <font></font>
   A.displayName = `Connect(${InnerComponent.displayName})`<font></font>
   return A<font></font>
 }<font></font>
</code></pre>

<p><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能传递一个道具</font></font><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，连接就可以充当Person组件的容器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是React API的一部分。</font><font style="vertical-align: inherit;">组件是描述React UI的一部分的类或函数。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是React组件的非正式术语，该组件被</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-ed到redux存储。</font><font style="vertical-align: inherit;">容器接收Redux状态更新和</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作，并且它们通常不呈现DOM元素。</font><font style="vertical-align: inherit;">他们将渲染委托给</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性子组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请阅读</font><font style="vertical-align: inherit;">Dan Abramov的</font></font><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">presentational vs container组件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
