---
layout: question
title:  JavaScript窗口调整大小事件
date:   2020-03-11T15:30:44.000Z
description: 如何挂接到浏览器窗口调整大小事件？有一种jQuery侦听调整大小事件的方法，但我不希望仅出于这一要求就将其引入我的项目中。...
img: 
author: 理查德小胖Harry
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何挂接到浏览器窗口调整大小事件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><a href="https://stackoverflow.com/questions/599288/cross-browser-window-resize-event-javascript-jquery"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种jQuery侦听调整大小事件的方法，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我不希望仅出于这一要求就将其引入我的项目中。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint-override"><code>window.onresize = function() {<font></font>
    // your code<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您在</font></font><a href="http://mbccs.blogspot.com/2007/11/fixing-window-resize-event-in-ie.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://mbccs.blogspot.com/2007/11/fixing-window-resize-event-in-ie.html中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用我的博客文章</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然您可以连接到标准窗口调整大小事件，但您会发现在IE中，该事件每X触发一次，每Y轴移动触发一次，导致触发大量事件，这些事件可能具有一定的性能如果渲染是一项繁重的任务，则会对您的网站产生影响。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的方法涉及一个短暂的超时，该超时将在后续事件中取消，以便在用户完成调整窗口大小之前，该事件不会冒泡到您的代码中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery只是包装了标准的</font></font><code>resize</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM事件，例如。</font></font></p>

<pre class="lang-js prettyprint-override"><code>window.onresize = function(event) {<font></font>
    ...<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做一些工作来确保在所有浏览器中一致地触发resize事件，但是我不确定任何浏览器是否有所不同，但是我建议您在Firefox，Safari和IE中进行测试。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
