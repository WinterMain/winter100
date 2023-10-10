---
layout: question
title:  使用reactjs渲染原始HTML
date:   2020-03-11T06:57:39.000Z
description: 那么这是用reactjs渲染原始html的唯一方法吗？// http //facebook.github.io/react/docs/tutorial...
img: 
author: Pro梅
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么这是用reactjs渲染原始html的唯一方法吗？</font></font></p>

<pre><code>// http://facebook.github.io/react/docs/tutorial.html<font></font>
// tutorial7.js<font></font>
var converter = new Showdown.converter();<font></font>
var Comment = React.createClass({<font></font>
  render: function() {<font></font>
    var rawMarkup = converter.makeHtml(this.props.children.toString());<font></font>
    return (<font></font>
      &lt;div className="comment"&gt;<font></font>
        &lt;h2 className="commentAuthor"&gt;<font></font>
          {this.props.author}<font></font>
        &lt;/h2&gt;<font></font>
        &lt;span dangerouslySetInnerHTML={{__html: rawMarkup}} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道有一些很酷的方法来用JSX标记内容，但是我主要对能够呈现原始html（具有所有类，内联样式等）感兴趣。</font><font style="vertical-align: inherit;">像这样复杂的东西：</font></font></p>

<pre><code>&lt;!-- http://getbootstrap.com/components/#dropdowns-example --&gt;<font></font>
&lt;div class="dropdown"&gt;<font></font>
  &lt;button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"&gt;<font></font>
    Dropdown<font></font>
    &lt;span class="caret"&gt;&lt;/span&gt;<font></font>
  &lt;/button&gt;<font></font>
  &lt;ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"&gt;<font></font>
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想在JSX中重写所有内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我在想这一切错。</font><font style="vertical-align: inherit;">请纠正我。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第701篇《使用reactjs渲染原始HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>export class ModalBody extends Component{<font></font>
    rawMarkup(){<font></font>
        var rawMarkup = this.props.content<font></font>
        return { __html: rawMarkup };<font></font>
    }<font></font>
    render(){<font></font>
        return(<font></font>
                &lt;div className="modal-body"&gt;<font></font>
                     &lt;span dangerouslySetInnerHTML={this.rawMarkup()} /&gt;<font></font>
<font></font>
                &lt;/div&gt;<font></font>
            )<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>dangerouslySetInnerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非绝对必要，否则请勿使用。</font><font style="vertical-align: inherit;">根据文档，</font></font><a href="http://facebook.github.io/react/docs/special-non-dom-attributes.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“这主要是用于与DOM字符串操作库进行协作”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用它时，您将放弃React的DOM管理的好处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就您而言，转换为有效的JSX语法非常简单；</font><font style="vertical-align: inherit;">只需将</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为即可</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">或者，如上面的评论所述，您可以使用</font></font><a href="http://react-bootstrap.github.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactBootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">库将Bootstrap元素封装到React组件中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以利用</font></font><a href="https://www.npmjs.com/package/html-to-react" rel="noreferrer"><code>html-to-react</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我是该模块的作者，几小时前刚刚发布了该模块。</font><font style="vertical-align: inherit;">请随时报告任何错误或可用性问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
