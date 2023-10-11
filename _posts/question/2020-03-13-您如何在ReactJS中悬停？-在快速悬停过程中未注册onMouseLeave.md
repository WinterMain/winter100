---
layout: question
title:  您如何在ReactJS中悬停？-在快速悬停过程中未注册onMouseLeave
date:   2020-03-12T16:29:50.000Z
description: 进行内联样式设置时，如何在ReactJS中实现悬停事件或活动事件？我发现onMouseEnter和onMouseLeave方法存在问题，因此希望有另一...
img: 
author: 达蒙猴子
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行内联样式设置时，如何在ReactJS中实现悬停事件或活动事件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现onMouseEnter和onMouseLeave方法存在问题，因此希望有另一种方法可以做到。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体来说，如果您将鼠标悬停在组件上非常快，则仅会注册onMouseEnter事件。</font><font style="vertical-align: inherit;">onMouseLeave永远不会触发，因此无法更新状态...使该组件看起来好像仍在悬停。</font><font style="vertical-align: inherit;">如果您尝试模仿“：active” css伪类，我会注意到同样的事情。</font><font style="vertical-align: inherit;">如果单击得非常快，则只会注册onMouseDown事件。</font><font style="vertical-align: inherit;">onMouseUp事件将被忽略...使组件保持活动状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是显示问题的JSFiddle：</font><a href="https://jsfiddle.net/y9swecyu/5/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://jsfiddle.net/y9swecyu/5/</font></font><a href="https://jsfiddle.net/y9swecyu/5/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有问题的JSFiddle视频：</font><a href="https://vid.me/ZJEO" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://vid.me/ZJEO</font></font><a href="https://vid.me/ZJEO" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码：</font></font></p>

<pre><code>var Hover = React.createClass({<font></font>
    getInitialState: function() {<font></font>
        return {<font></font>
            hover: false<font></font>
        };<font></font>
    },<font></font>
    onMouseEnterHandler: function() {<font></font>
        this.setState({<font></font>
            hover: true<font></font>
        });<font></font>
        console.log('enter');<font></font>
    },<font></font>
    onMouseLeaveHandler: function() {<font></font>
        this.setState({<font></font>
            hover: false<font></font>
        });<font></font>
        console.log('leave');<font></font>
    },<font></font>
    render: function() {<font></font>
        var inner = normal;<font></font>
        if(this.state.hover) {<font></font>
            inner = hover;<font></font>
        }<font></font>
<font></font>
        return (<font></font>
            &lt;div style={outer}&gt;<font></font>
                &lt;div style={inner}<font></font>
                    onMouseEnter={this.onMouseEnterHandler}<font></font>
                    onMouseLeave={this.onMouseLeaveHandler} &gt;<font></font>
                    {this.props.children}<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
var outer = {<font></font>
    height: '120px',<font></font>
    width: '200px',<font></font>
    margin: '100px',<font></font>
    backgroundColor: 'green',<font></font>
    cursor: 'pointer',<font></font>
    position: 'relative'<font></font>
}<font></font>
<font></font>
var normal = {<font></font>
    position: 'absolute',<font></font>
    top: 0,<font></font>
    bottom: 0,<font></font>
    left: 0,<font></font>
    right: 0,<font></font>
    backgroundColor: 'red',<font></font>
    opacity: 0<font></font>
}<font></font>
<font></font>
var hover = {<font></font>
    position: 'absolute',<font></font>
    top: 0,<font></font>
    bottom: 0,<font></font>
    left: 0,<font></font>
    right: 0,<font></font>
    backgroundColor: 'red',<font></font>
    opacity: 1<font></font>
}<font></font>
<font></font>
React.render(<font></font>
    &lt;Hover&gt;&lt;/Hover&gt;,         <font></font>
    document.getElementById('container')<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1348篇《您如何在ReactJS中悬停？-在快速悬停过程中未注册onMouseLeave》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以建议您一个易于理解的示例，我在React JS中使用情感来赋予样式。</font><font style="vertical-align: inherit;">在这里您可以找到有关它的更多信息</font></font><a href="https://emotion.sh/docs/introduction" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://emotion.sh/docs/introduction</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p>

<pre><code>const secondStyle = css`<font></font>
  background: blue;<font></font>
  height: 20px;<font></font>
  width: 20px;<font></font>
  :hover {<font></font>
    cursor: pointer;<font></font>
    background: red;<font></font>
`<font></font>
<font></font>
function myComponent() {<font></font>
  return (<font></font>
     &lt;div className={firstStyle}&gt;<font></font>
       &lt;button className={secondStyle}&gt;Submit&lt;button&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道自问这个问题以来已经有一段时间了，但是我遇到了与onMouseLeave（）不一致的同一问题，我所做的就是将onMouseOut（）用于下拉列表，并在整个菜单上使用鼠标离开可靠，并且每次测试都可以使用。</font><font style="vertical-align: inherit;">我在文档中看到了这里的事件：</font></font><a href="https://facebook.github.io/react/docs/events.html#mouse-events" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://facebook.github.io/react/docs/events.html#mouse-events" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/events.html#mouse-events</font></a><font style="vertical-align: inherit;"> 
这是使用</font></font><a href="https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>handleHoverOff(event){<font></font>
  //do what ever, for example I use it to collapse the dropdown<font></font>
  let collapsing = true;<font></font>
  this.setState({dropDownCollapsed : collapsing });<font></font>
}<font></font>
<font></font>
render{<font></font>
  return(<font></font>
    &lt;div class="dropdown" onMouseLeave={this.handleHoverOff.bind(this)}&gt;<font></font>
      &lt;button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"&gt;Dropdown Example<font></font>
      &lt;span class="caret"&gt;&lt;/span&gt;&lt;/button&gt;<font></font>
      &lt;ul class="dropdown-menu" onMouseOut={this.handleHoverOff.bind(this)}&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;bla bla 1&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;bla bla 2&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;bla bla 3&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;/ul&gt;<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会使用onMouseOver和onMouseOut。</font><font style="vertical-align: inherit;">React原因</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onMouseEnter和onMouseLeave事件从剩下的元素传播到要输入的元素，而不是普通的冒泡事件，并且没有捕获阶段。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在React </font></font><a href="https://reactjs.org/docs/events.html#mouse-events" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的鼠标事件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>onMouseOver={this.onToggleOpen}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和    </font></font><code>onMouseOut={this.onToggleOpen}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件上反复思考  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimHarry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以制作一个展示onMouseEnter / onMouseLeave或onMouseDown / onMouseUp错误的小演示，那么将其发布到ReactJS的问题页面或邮件列表中是值得的，只是要提一个问题并听听开发人员对此有何评论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的用例中，您似乎暗示CSS：hover和：active状态足以满足您的目的，因此我建议您使用它们。</font><font style="vertical-align: inherit;">由于CSS是直接在浏览器中实现的，因此CSS比Javascript更快，更可靠。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，：hover和：active状态不能以内联样式指定。</font><font style="vertical-align: inherit;">您可以做的是为您的元素分配一个ID或一个类名，然后在样式表（如果它们在您的应用程序中有些恒定）或动态生成的</font></font><code>&lt;style&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">编写样式</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是后一种技术的示例：</font><a href="https://jsfiddle.net/ors1vos9/"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/ors1vos9/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/ors1vos9/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你有没有尝试过这些？</font></font></p>

<p><code>onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp</code></p>

<p><a href="https://facebook.github.io/react/docs/events.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">综合事件</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还提到以下内容：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应规格化的事件，让他们有不同的浏览器一致的性质。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的事件处理程序由冒泡阶段中的事件触发。</font><font style="vertical-align: inherit;">要为捕获阶段注册事件处理程序，请将Capture附加到事件名称；</font><font style="vertical-align: inherit;">例如，您可以使用onClickCapture来处理捕获阶段中的click事件，而不是使用onClick。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先前的答案非常令人困惑。</font><font style="vertical-align: inherit;">您不需要反应状态来解决此问题，也不需要任何特殊的外部库。</font><font style="vertical-align: inherit;">可以使用纯CSS / ass来实现：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">风格：</font></font></strong></p>

<pre><code>.hover {<font></font>
  position: relative;<font></font>
<font></font>
  &amp;:hover &amp;__no-hover {<font></font>
    opacity: 0;<font></font>
  }<font></font>
<font></font>
  &amp;:hover &amp;__hover {<font></font>
    opacity: 1;<font></font>
  }<font></font>
<font></font>
  &amp;__hover {<font></font>
    position: absolute;<font></font>
    top: 0;<font></font>
    opacity: 0;<font></font>
  }<font></font>
<font></font>
  &amp;__no-hover {<font></font>
    opacity: 1;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应组件</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个简单的</font></font><code>Hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯渲染功能：</font></font></p>

<pre><code>const Hover = ({ onHover, children }) =&gt; (<font></font>
    &lt;div className="hover"&gt;<font></font>
        &lt;div className="hover__no-hover"&gt;{children}&lt;/div&gt;<font></font>
        &lt;div className="hover__hover"&gt;{onHover}&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
)<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像这样使用它：</font></font></p>

<pre><code>    &lt;Hover onHover={&lt;div&gt; Show this on hover &lt;/div&gt;}&gt;<font></font>
        &lt;div&gt; Show on no hover &lt;/div&gt;<font></font>
    &lt;/Hover&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
