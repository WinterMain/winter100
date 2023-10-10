---
layout: question
title:  ReactJS SyntheticEvent stopPropagation（）仅适用于React事件吗？
date:   2020-03-12T02:19:10.000Z
description: 我正在尝试在ReactJS组件中使用event.stopPropagation（）来阻止单击事件冒泡并触发遗留在JQuery中的遗留代码中的click事件...
img: 
author: 樱A
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在ReactJS组件中使用event.stopPropagation（）来阻止单击事件冒泡并触发遗留在JQuery中的遗留代码中的click事件，但是似乎React的stopPropagation（）仅停止传播到事件也附加在React中，并且JQuery的stopPropagation（）不会停止传播到随React附加的事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以使stopPropagation（）在这些事件中起作用？</font><font style="vertical-align: inherit;">我编写了一个简单的</font></font><a href="http://jsfiddle.net/7LEDT/3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来演示这些行为：</font></font></p>

<pre><code>/** @jsx React.DOM */<font></font>
var Propagation = React.createClass({<font></font>
    alert: function(){<font></font>
        alert('React Alert');<font></font>
    },<font></font>
    stopPropagation: function(e){<font></font>
        e.stopPropagation();<font></font>
    },<font></font>
    render: function(){<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;div onClick={this.alert}&gt;<font></font>
                    &lt;a href="#" onClick={this.stopPropagation}&gt;React Stop Propagation on React Event&lt;/a&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div className="alert"&gt;<font></font>
                    &lt;a href="#" onClick={this.stopPropagation}&gt;React Stop Propagation on JQuery Event&lt;/a&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div onClick={this.alert}&gt;<font></font>
                    &lt;a href="#" className="stop-propagation"&gt;JQuery Stop Propagation on React Event&lt;/a&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div className="alert"&gt;<font></font>
                    &lt;a href="#" className="stop-propagation"&gt;JQuery Stop Propagation on JQuery Event&lt;/a&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
React.renderComponent(&lt;Propagation /&gt;, document.body);<font></font>
<font></font>
$(function(){    <font></font>
    $(document).on('click', '.alert', function(e){<font></font>
        alert('Jquery Alert');<font></font>
    });<font></font>
<font></font>
    $(document).on('click', '.stop-propagation', function(e){<font></font>
        e.stopPropagation();<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：现在可以 </font></font><code>&lt;Elem onClick={ proxy =&gt; proxy.stopPropagation() } /&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个快速的解决方法是使用</font></font><code>window.addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>document.addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我昨天遇到了这个问题，所以我创建了一个React友好的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出</font></font><a href="https://www.npmjs.org/package/react-native-listener" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native-listener</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">到目前为止，它运行良好。</font><font style="vertical-align: inherit;">反馈表示赞赏。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐伽罗古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得注意的是（从</font></font><a href="https://github.com/facebook/react/issues/4335" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本期开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），如果您将事件附加到</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>e.stopPropagation()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将无济于事。</font><font style="vertical-align: inherit;">解决方法是，您可以使用</font></font><code>window.addEventListener()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>document.addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><code>event.stopPropagation()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阻止事件传播到窗口。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://reactjs.org/docs/events.html#supported-events" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：下面的事件处理程序</font><font style="vertical-align: inherit;">由</font><strong><font style="vertical-align: inherit;">冒泡阶段中</font></strong><font style="vertical-align: inherit;">的事件</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要为捕获阶段注册事件处理程序，请</font><strong><font style="vertical-align: inherit;">附加Capture</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（添加了重点）</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在React代码中有一个click事件监听器，并且不想让它突然冒出来，我想您要使用</font></font><code>onClickCapture</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，您将事件传递给处理程序，并</font></font><code>event.nativeEvent.stopPropagation()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font><font style="vertical-align: inherit;">处理，</font><font style="vertical-align: inherit;">以防止本机事件冒泡至原始JS事件侦听器（或任何不响应的事件）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然是一个有趣的时刻：</font></font></p>

<pre><code>ev.preventDefault()<font></font>
ev.stopPropagation();<font></font>
ev.nativeEvent.stopImmediatePropagation();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的函数由标签包裹，请使用此构造  </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
