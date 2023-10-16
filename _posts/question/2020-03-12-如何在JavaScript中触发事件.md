---
layout: question
title:  如何在JavaScript中触发事件？
date:   2020-03-12T08:42:38.000Z
description: 我已使用将事件附加到文本框addEventListener。它工作正常。当我想通过另一个函数以编程方式触发事件时，出现了我的问题。我该怎么做？...
img: 
author: 梅Jim
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已使用将事件附加到文本框</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它工作正常。</font><font style="vertical-align: inherit;">当我想通过另一个函数以编程方式触发事件时，出现了我的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1155篇《如何在JavaScript中触发事件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Use jquery event call.
Write the below line where you want to trigger onChange of any element.</p>

<pre><code>$("#element_id").change();
</code></pre>

<p><em>element_id</em> is the ID of the element whose onChange you want to trigger.</p>

<p>Avoid the use of</p>

<pre><code> element.fireEvent("onchange");
</code></pre>

<p>Because it has very less support. Refer this document for its <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/fireEvent" rel="nofollow noreferrer">support</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>The most efficient way is to call the very same function that has been registered with <code>addEventListener</code> directly.</p>

<p>You can also trigger a fake event with <code>CustomEvent</code> and co.</p>

<p>Finally some elements such as <code>&lt;input type="file"&gt;</code> support a <code>.click()</code> method.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>What you want is something like this:</p>

<pre><code>document.getElementByClassName("example").click();
</code></pre>

<p>Using jQuery, it would be something like this:</p>

<pre><code>$(".example").trigger("click");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿卡卡西理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function fireMouseEvent(obj, evtName) {<font></font>
    if (obj.dispatchEvent) {<font></font>
        //var event = new Event(evtName);<font></font>
        var event = document.createEvent("MouseEvents");<font></font>
        event.initMouseEvent(evtName, true, true, window,<font></font>
                0, 0, 0, 0, 0, false, false, false, false, 0, null);<font></font>
        obj.dispatchEvent(event);<font></font>
    } else if (obj.fireEvent) {<font></font>
        event = document.createEventObject();<font></font>
        event.button = 1;<font></font>
        obj.fireEvent("on" + evtName, event);<font></font>
        obj.fireEvent(evtName);<font></font>
    } else {<font></font>
        obj[evtName]();<font></font>
    }<font></font>
}<font></font>
<font></font>
var obj = document.getElementById("......");<font></font>
fireMouseEvent(obj, "click");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只使用了以下内容（似乎要简单得多）：</font></font></p>

<pre><code>element.blur();<font></font>
element.focus();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，仅当值确实发生更改时才触发该事件，就像您由用户执行的正常焦点轨迹丢失触发该事件一样。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神乐小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是建议一个不需要手动调用侦听器事件的替代方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论事件侦听器做什么，都将其移到函数中并从事件侦听器中调用该函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您还可以在需要完成事件触发时执行的相同操作的任何其他位置调用该函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这种方式“代码密集型”较少，而且更易于阅读。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个工作示例：</font></font></p>

<pre><code>// Add an event listener<font></font>
document.addEventListener("name-of-event", function(e) {<font></font>
  console.log(e.detail); // Prints "Example of an event"<font></font>
});<font></font>
<font></font>
// Create the event<font></font>
var event = new CustomEvent("name-of-event", { "detail": "Example of an event" });<font></font>
<font></font>
// Dispatch/Trigger/Fire the event<font></font>
document.dispatchEvent(event);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关较旧的浏览器</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和更复杂的示例，请参见</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">见支持表的</font></font><a href="http://caniuse.com/#feat=dispatchevent"><code>EventTarget.dispatchEvent</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://caniuse.com/#feat=customevent"><code>CustomEvent</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">IE 8</font></strong><font style="vertical-align: inherit;">或更低版本</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用</font></font><a href="http://msdn.microsoft.com/en-us/library/ms536423%28VS.85%29.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fireEvent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">大多数</font></em><font style="vertical-align: inherit;">其他浏览器</font><font style="vertical-align: inherit;">上使用</font><font style="vertical-align: inherit;">W3C的</font><a href="https://developer.mozilla.org/en/DOM/element.dispatchEvent" rel="noreferrer"><font style="vertical-align: inherit;">dispatchEvent</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要创建您要触发的事件，可以使用</font><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">取决于浏览器。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><a href="https://developer.mozilla.org/en/DOM/element.dispatchEvent" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><code>createEvent</code><font style="vertical-align: inherit;"></font><code>createEventObject</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一段不言自明的代码（来自原型），它</font></font><code>dataavailable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上</font><font style="vertical-align: inherit;">触发事件</font></font><code>element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var event; // The custom event that will be created<font></font>
if(document.createEvent){<font></font>
    event = document.createEvent("HTMLEvents");<font></font>
    event.initEvent("dataavailable", true, true);<font></font>
    event.eventName = "dataavailable";<font></font>
    element.dispatchEvent(event);<font></font>
} else {<font></font>
    event = document.createEventObject();<font></font>
    event.eventName = "dataavailable";<font></font>
    event.eventType = "dataavailable";<font></font>
    element.fireEvent("on" + event.eventType, event);<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
