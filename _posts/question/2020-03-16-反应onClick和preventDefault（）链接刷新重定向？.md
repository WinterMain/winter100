---
layout: question
title:  反应onClick和preventDefault（）链接刷新/重定向？
date:   2020-03-16T04:17:12.000Z
description: 我正在渲染一个带有react的链接：render  ->  \`<a className="upvotes" onClick={this.upvote...
img: 
author: 樱Davaid
category: question
answer: 9
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在渲染一个带有react的链接：</font></font></p>

<pre><code>render: -&gt;<font></font>
  `&lt;a className="upvotes" onClick={this.upvote}&gt;upvote&lt;/a&gt;`<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，上面有upvote函数：</font></font></p>

<pre><code>upvote: -&gt;<font></font>
  // do stuff (ajax)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在链接建立之前，我已经跨过那个地方了，但是我需要切换到链接，这就是麻烦了-每次我</font></font><code>.upvotes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新页面时，到目前为止，我已经尝试过：</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">event.preventDefault（）-不起作用。</font></font></em></strong></p>

<pre><code>upvote: (e) -&gt;<font></font>
  e.preventDefault()<font></font>
  // do stuff (ajax)<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">event.stopPropagation（）-不起作用。</font></font></em></strong></p>

<pre><code>upvote: (e) -&gt;<font></font>
  e.stopPropagation()<font></font>
  // do stuff (ajax)<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回false-不起作用。</font></font></em></strong></p>

<pre><code>upvote: (e) -&gt;<font></font>
  // do stuff (ajax)<font></font>
  return false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还在index.html中使用jQuery尝试了上述所有方法，但似乎没有任何效果。</font><font style="vertical-align: inherit;">我在这里应该做什么，我做错了什么？</font><font style="vertical-align: inherit;">我已经检查了event.type，</font></font><code>click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此我想应该可以避免以某种方式重定向？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对不起，我是React的新秀。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱古一</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些方法都不适合我，所以我只用CSS解决了这个问题：</font></font></p>

<pre><code>.upvotes:before {<font></font>
   content:"";<font></font>
   float: left;<font></font>
   width: 100%;<font></font>
   height: 100%;<font></font>
   position: absolute;<font></font>
   left: 0;<font></font>
   top: 0;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个对我有用的不错的简单选择是：</font></font></p>

<pre><code>&lt;a href="javascript: false" onClick={this.handlerName}&gt;Click Me&lt;/a&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我进入此页面时，我发现上述任何选项都不正确或不适合我。</font><font style="vertical-align: inherit;">他们的确给了我一些测试的想法，我发现这对我有用。</font></font></p>

<pre><code>dontGoToLink(e) {<font></font>
  e.preventDefault();<font></font>
 }<font></font>
<font></font>
render() {<font></font>
  return (&lt;a href="test.com" onClick={this.dontGoToLink} /&gt;});<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomEva</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现并为我工作的要点：</font></font></p>

<pre><code>const DummyLink = ({onClick, children, props}) =&gt; (<font></font>
    &lt;a href="#" onClick={evt =&gt; {<font></font>
        evt.preventDefault();<font></font>
        onClick &amp;&amp; onClick();<font></font>
    }} {...props}&gt;<font></font>
        {children}<font></font>
    &lt;/a&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢srph </font></font><a href="https://gist.github.com/srph/020b5c02dd489f30bfc59138b7c39b53" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/srph/020b5c02dd489f30bfc59138b7c39b53</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为这些处理程序不保留范围。</font><font style="vertical-align: inherit;">从反应文档：</font></font><a href="https://facebook.github.io/react/docs/reusable-components.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应文档</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查“无自动绑定”部分。</font><font style="vertical-align: inherit;">您应该像这样编写处理程序：onClick =（）=&gt; {}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神乐前端</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染：-&gt;
  </font></font><code>&lt;a className="upvotes" onClick={(e) =&gt; {this.upvote(e); }}&gt;upvote&lt;/a&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长Stafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试bind（this），这样您的代码如下所示-</font></font></p>

<pre><code> &lt;a className="upvotes" onClick={this.upvote.bind(this)}&gt;upvote&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者如果您正在构造器中编写es6 react组件，则可以执行此操作</font></font></p>

<pre><code>constructor(props){<font></font>
   super(props);<font></font>
   this.upvote = this.upvote.bind(this);<font></font>
}<font></font>
<font></font>
upvote(e){   // function upvote<font></font>
   e.preventDefault();<font></font>
   return false<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案的完整版本将方法封装在onClick内，传递e并使用本机e.preventDefault（）;。</font></font></p>

<pre><code>upvotes = (e, arg1, arg2, arg3 ) =&gt; {<font></font>
    e.preventDefault();<font></font>
    //do something...<font></font>
}<font></font>
<font></font>
render(){<font></font>
    return (&lt;a type="simpleQuery" onClick={ e =&gt; this.upvotes(e, arg1, arg2, arg3) }&gt;<font></font>
      upvote<font></font>
    &lt;/a&gt;);<font></font>
{<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React事件实际上是合成事件，而不是本机事件。</font><font style="vertical-align: inherit;">就像</font></font><a href="https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#under-the-hood-autobinding-and-event-delegation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写的</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件委托：React实际上并未将事件处理程序附加到节点本身。</font><font style="vertical-align: inherit;">当React启动时，它开始使用单个事件监听器在顶层监听所有事件。</font><font style="vertical-align: inherit;">在安装或卸载组件时，只需简单地在内部映射中添加或删除事件处理程序即可。</font><font style="vertical-align: inherit;">当事件发生时，React知道如何使用此映射进行调度。</font><font style="vertical-align: inherit;">当映射中没有事件处理程序时，React的事件处理程序就是简单的无操作。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用Use </font></font><code>Event.stopImmediatePropagation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>upvote: (e) -&gt;<font></font>
  e.stopPropagation();<font></font>
  e.nativeEvent.stopImmediatePropagation();<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
