---
layout: question
title:  悬停子元素时触发HTML5 dragleave
date:   2020-03-24T08:35:01.000Z
description: 我遇到的问题是，dragleave悬停该元素的子元素时会触发该元素的事件。另外，dragenter在再次将父元素悬停时不会触发。我做了一个简化的提琴：...
img: 
author: 斯丁GO神乐
category: question
answer: 7
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到的问题是，</font></font><code>dragleave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停该元素的子元素时会触发该元素</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">事件。</font><font style="vertical-align: inherit;">另外，</font></font><code>dragenter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在再次将父元素悬停时不会触发。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了一个简化的提琴：</font></font><a href="http://jsfiddle.net/pimvdb/HU6Mk/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://jsfiddle.net/pimvdb/HU6Mk/1/" rel="noreferrer"><font style="vertical-align: inherit;">//jsfiddle.net/pimvdb/HU6Mk/1/</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div id="drag" draggable="true"&gt;drag me&lt;/div&gt;<font></font>
<font></font>
&lt;hr&gt;<font></font>
<font></font>
&lt;div id="drop"&gt;<font></font>
    drop here<font></font>
    &lt;p&gt;child&lt;/p&gt;<font></font>
    parent<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下JavaScript：</font></font></p>

<pre><code>$('#drop').bind({<font></font>
                 dragenter: function() {<font></font>
                     $(this).addClass('red');<font></font>
                 },<font></font>
<font></font>
                 dragleave: function() {<font></font>
                     $(this).removeClass('red');<font></font>
                 }<font></font>
                });<font></font>
<font></font>
$('#drag').bind({<font></font>
                 dragstart: function(e) {<font></font>
                     e.allowedEffect = "copy";<font></font>
                     e.setData("text/plain", "test");<font></font>
                 }<font></font>
                });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要做的是</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在拖曳某物时</font><font style="vertical-align: inherit;">通过将其下拉为</font><font style="vertical-align: inherit;">红色</font><font style="vertical-align: inherit;">来通知用户</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这可行，但是如果您拖入</font></font><code>p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">孩子，则将</font></font><code>dragleave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被发射，而</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再是红色。</font><font style="vertical-align: inherit;">返回到下拉列表</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不会再次使其</font><font style="vertical-align: inherit;">变为</font><font style="vertical-align: inherit;">红色。</font><font style="vertical-align: inherit;">有必要将其完全移出拖放</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后再次拖动回拖放以使其变为红色。</font></font></p>

<p>Is it possible to prevent <code>dragleave</code> from firing when dragging into a child element?</p>

<p><strong>2017 Update:</strong>  TL;DR, Look up CSS <code>pointer-events: none;</code> as described in @H.D.'s answer below that works in modern browsers and IE11.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3514篇《悬停子元素时触发HTML5 dragleave》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当鼠标指针离开目标容器的拖动区域时，将触发</font><font style="vertical-align: inherit;">“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dragleave</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很有意义，因为在许多情况下，只有父级是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可丢弃的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是后代。</font><font style="vertical-align: inherit;">我认为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">event.stopPropogation（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该已经处理了这种情况，但似乎无法解决问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面提到的某些解决方案似乎确实适用于大多数情况，但是对于那些不支持</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dragenter / dragleave</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件的子级（例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iframe）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的情况，则失败</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决方法是检查</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">event.relatedTarget</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并验证它是否位于容器内，然后</font><font style="vertical-align: inherit;">像我在此处所做的那样</font><font style="vertical-align: inherit;">忽略</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dragleave</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件：</font></font></p>

<pre><code>function isAncestor(node, target) {<font></font>
    if (node === target) return false;<font></font>
    while(node.parentNode) {<font></font>
        if (node.parentNode === target)<font></font>
            return true;<font></font>
        node=node.parentNode;<font></font>
    }<font></font>
    return false;<font></font>
}<font></font>
<font></font>
var container = document.getElementById("dropbox");<font></font>
container.addEventListener("dragenter", function() {<font></font>
    container.classList.add("dragging");<font></font>
});<font></font>
<font></font>
container.addEventListener("dragleave", function(e) {<font></font>
    if (!isAncestor(e.relatedTarget, container))<font></font>
        container.classList.remove("dragging");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="https://jsfiddle.net/LalitNankani/7fec9hjo/32/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有用的小提琴</font><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经编写了一个名为</font></font><a href="http://bensmithett.github.io/dragster/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dragster</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的小库</font><font style="vertical-align: inherit;">来处理这个确切的问题，它可以在IE之外无所事事地工作（它不支持DOM事件构造函数，但是使用jQuery的自定义事件编写类似的东西很容易），因此可以在任何地方使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，假设您的事件分别附加到每个拖动元素，那么这种对我来说仍然很有效的解决方案。  </font></font></p>

<pre><code>if (evt.currentTarget.contains(evt.relatedTarget)) {<font></font>
  return;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿乐小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个非常简单的解决方案是使用</font></font><a href="https://developer.mozilla.org/fr/docs/Web/CSS/pointer-events" rel="noreferrer"><code>pointer-events</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只是它的值设置为</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的dragstart</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一个子元素。</font><font style="vertical-align: inherit;">这些元素将不再触发与鼠标相关的事件，因此它们不会将鼠标捕获在它们上面，因此也不会触发</font><font style="vertical-align: inherit;">父</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">级</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的</font><em><font style="vertical-align: inherit;">Dragleave</font></em><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成拖动时，请</font><font style="vertical-align: inherit;">不要忘记将此属性设置回</font><font style="vertical-align: inherit;">;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是HTML5，则可以获取父级的clientRect：</font></font></p>

<pre><code>let rect = document.getElementById("drag").getBoundingClientRect();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在parent.dragleave（）中：</font></font></p>

<pre><code>dragleave(e) {<font></font>
    if(e.clientY &lt; rect.top || e.clientY &gt;= rect.bottom || e.clientX &lt; rect.left || e.clientX &gt;= rect.right) {<font></font>
        //real leave<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/azlar/nro5Lthz/3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个jsfiddle</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的“正确”方法是禁用放置目标的子元素上的指针事件（如@HD的回答）。</font></font><a href="http://jsfiddle.net/theodorejb/4ZGvv/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我创建的jsFiddle，用于演示此技术</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不幸的是，这在IE11之前的Internet Explorer版本中不起作用，因为它们</font></font><a href="http://caniuse.com/pointer-events"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持指针事件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幸运的是，我能想出一个解决办法，其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧版本的IE浏览器的工作。</font><font style="vertical-align: inherit;">基本上，它涉及识别和忽略</font></font><code>dragleave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在子元素上拖动时发生的事件。</font><font style="vertical-align: inherit;">因为该</font></font><code>dragenter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件是</font></font><code>dragleave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在父</font><font style="vertical-align: inherit;">节点上的</font><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">之前在子节点上触发的</font><font style="vertical-align: inherit;">，所以可以将单独的事件侦听器添加到每个子节点，以从放置目标中添加或删除“ ignore-drag-leave”类。</font><font style="vertical-align: inherit;">然后，放置目标的</font></font><code>dragleave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件侦听器可以简单地忽略在此类存在时发生的调用。</font><font style="vertical-align: inherit;">这是一个</font></font><a href="http://jsfiddle.net/theodorejb/j2fDt/8/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle演示了这种解决方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它已经过测试，并且可以在Chrome，Firefox和IE8 +中运行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建</font></font><a href="http://jsfiddle.net/theodorejb/j2fDt/9/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一个jsFiddle，演示了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用功能检测</font><a href="http://jsfiddle.net/theodorejb/j2fDt/9/"><font style="vertical-align: inherit;">的组合解决方案</font></a><font style="vertical-align: inherit;">，其中使用了指针事件（如果支持的话）（当前支持Chrome，Firefox和IE11），并且如果没有指针事件支持（IE8，则浏览器会回退到向子节点添加事件） -10）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拖动到子元素中时，是否可以防止dragleave触发？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font></font></p>

<pre><code>#drop * {pointer-events: none;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该CSS对于Chrome来说似乎足够了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox中使用它时，#drop不应直接具有文本节点（否则会有一个奇怪的</font></font><a href="https://stackoverflow.com/questions/14194324/firefox-firing-dragleave-when-dragging-over-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题，其中一个元素“将其留给自己”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因此我建议仅将其保留一个元素（例如，在内部使用div #drop将所有内容放进去）</font></font></p>

<p><a href="http://jsfiddle.net/djsbellini/6yZV6/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决</font></font><a href="http://jsfiddle.net/pimvdb/HU6Mk/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始问题（破碎）示例</font></font></a><font style="vertical-align: inherit;"><a href="http://jsfiddle.net/djsbellini/6yZV6/1/" rel="noreferrer"><font style="vertical-align: inherit;">的jsfiddle</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还</font><font style="vertical-align: inherit;">从@Theodore Brown示例</font><font style="vertical-align: inherit;">创建了</font></font><a href="http://jsfiddle.net/djsbellini/yR8t8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仅基于此CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，并非所有浏览器都实现了此CSS：</font><a href="http://caniuse.com/pointer-events" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="http://caniuse.com/pointer-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//caniuse.com/pointer-events</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到Facebook源代码，我可以</font></font><code>pointer-events: none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次</font><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">它，但是它可能与优美的降级后备功能结合使用。</font><font style="vertical-align: inherit;">至少它是如此简单，并且可以解决很多环境下的问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
