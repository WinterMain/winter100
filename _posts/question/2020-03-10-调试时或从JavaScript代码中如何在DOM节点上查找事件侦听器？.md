---
layout: question
title:  调试时或从JavaScript代码中如何在DOM节点上查找事件侦听器？
date:   2020-03-10T04:20:42.000Z
description: 我有一个页面，其中一些事件侦听器附加到输入框和选择框。有没有一种方法可以找出哪些事件侦听器正在观察特定的DOM节点以及什么事件？使用以下事件附加事件：...
img: 
author: 路易伽罗
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个页面，其中一些事件侦听器附加到输入框和选择框。</font><font style="vertical-align: inherit;">有没有一种方法可以找出哪些事件侦听器正在观察特定的DOM节点以及什么事件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下事件附加事件：</font></font></p>

<ol>
<li><a href="http://en.wikipedia.org/wiki/Prototype_JavaScript_Framework" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prototype的</font></font></a> <code>Event.observe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ;</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM的</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为元素属性</font></font><code>element.onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第473篇《调试时或从JavaScript代码中如何在DOM节点上查找事件侦听器？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改这些功能将允许您记录添加的侦听器：</font></font></p>

<pre><code>EventTarget.prototype.addEventListener<font></font>
EventTarget.prototype.attachEvent<font></font>
EventTarget.prototype.removeEventListener<font></font>
EventTarget.prototype.detachEvent<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读其他的听众</font></font></p>

<pre><code>console.log(someElement.onclick);<font></font>
console.log(someElement.getAttribute("onclick"));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在一个不错的</font></font><strong><a href="https://chrome.google.com/webstore/detail/jquery-debugger/dbhhnnnpaeobfddmlalhnehgclcmjimi" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Events扩展</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   ：</font></font><br></p>

<p><a href="https://i.stack.imgur.com/HITS4.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/HITS4.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（主题</font></font><a href="https://stackoverflow.com/questions/11065358/find-attached-bound-events-of-an-element-using-chrome-development-tools-fire"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 12（不是基于最新的Chrome Webkit引擎的）</font></font><a href="http://www.opera.com/dragonfly/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dragonfly</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经有一段时间了，并且显然显示在DOM结构中。</font><font style="vertical-align: inherit;">在我看来，它是出色的调试器，也是我仍然使用基于Opera 12的版本的唯一原因（不存在基于v13，v14的版本，基于v15 Webkit的版本仍然缺少Dragonfly）</font></font></p>

<p><img src="https://i.stack.imgur.com/Lwfo6.png" alt="在此处输入图片说明"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您拥有</font></font><a href="http://en.wikipedia.org/wiki/Firebug_%28software%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以用来</font></font><code>console.dir(object or array)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台日志中打印任何JavaScript标量，数组或对象的一棵漂亮的树。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试： </font></font></p>

<pre><code>console.dir(clickEvents);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>console.dir(window);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全有效的解决方案基于</font></font><a href="https://stackoverflow.com/a/22841712/78054"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jan Turon的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -行为类似于</font></font><code>getEventListeners()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（有一个重复的小错误。无论如何它不会破坏太多。）</font></font></p>

<pre><code>(function() {<font></font>
  Element.prototype._addEventListener = Element.prototype.addEventListener;<font></font>
  Element.prototype.addEventListener = function(a,b,c) {<font></font>
    if(c==undefined)<font></font>
      c=false;<font></font>
    this._addEventListener(a,b,c);<font></font>
    if(!this.eventListenerList)<font></font>
      this.eventListenerList = {};<font></font>
    if(!this.eventListenerList[a])<font></font>
      this.eventListenerList[a] = [];<font></font>
    //this.removeEventListener(a,b,c); // TODO - handle duplicates..<font></font>
    this.eventListenerList[a].push({listener:b,useCapture:c});<font></font>
  };<font></font>
<font></font>
  Element.prototype.getEventListeners = function(a){<font></font>
    if(!this.eventListenerList)<font></font>
      this.eventListenerList = {};<font></font>
    if(a==undefined)<font></font>
      return this.eventListenerList;<font></font>
    return this.eventListenerList[a];<font></font>
  };<font></font>
  Element.prototype.clearEventListeners = function(a){<font></font>
    if(!this.eventListenerList)<font></font>
      this.eventListenerList = {};<font></font>
    if(a==undefined){<font></font>
      for(var x in (this.getEventListeners())) this.clearEventListeners(x);<font></font>
        return;<font></font>
    }<font></font>
    var el = this.getEventListeners(a);<font></font>
    if(el==undefined)<font></font>
      return;<font></font>
    for(var i = el.length - 1; i &gt;= 0; --i) {<font></font>
      var ev = el[i];<font></font>
      this.removeEventListener(a, ev.listener, ev.useCapture);<font></font>
    }<font></font>
  };<font></font>
<font></font>
  Element.prototype._removeEventListener = Element.prototype.removeEventListener;<font></font>
  Element.prototype.removeEventListener = function(a,b,c) {<font></font>
    if(c==undefined)<font></font>
      c=false;<font></font>
    this._removeEventListener(a,b,c);<font></font>
      if(!this.eventListenerList)<font></font>
        this.eventListenerList = {};<font></font>
      if(!this.eventListenerList[a])<font></font>
        this.eventListenerList[a] = [];<font></font>
<font></font>
      // Find the event in the list<font></font>
      for(var i=0;i&lt;this.eventListenerList[a].length;i++){<font></font>
          if(this.eventListenerList[a][i].listener==b, this.eventListenerList[a][i].useCapture==c){ // Hmm..<font></font>
              this.eventListenerList[a].splice(i, 1);<font></font>
              break;<font></font>
          }<font></font>
      }<font></font>
    if(this.eventListenerList[a].length==0)<font></font>
      delete this.eventListenerList[a];<font></font>
  };<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<p><code>someElement.getEventListeners([name])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -返回事件侦听器的列表，如果设置了名称，则返回该事件的侦听器数组</font></font></p>

<p><code>someElement.clearEventListeners([name])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -删除所有事件侦听器，如果设置了名称，则仅删除该事件的侦听器</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox开发人员工具现在可以执行此操作。</font><font style="vertical-align: inherit;">通过单击每个元素显示右侧的“ ev”按钮来显示</font><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">，包括</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Document_Object_Model" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font></font></p>

<p><img src="https://i.stack.imgur.com/E1AXv.png" alt="检查器选项卡中Firefox开发人员工具的事件侦听器按钮的屏幕截图"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将本机DOM方法包装在事件顶部，以管理事件侦听器</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    (function(w){<font></font>
        var originalAdd = w.addEventListener;<font></font>
        w.addEventListener = function(){<font></font>
            // add your own stuff here to debug<font></font>
            return originalAdd.apply(this, arguments);<font></font>
        };<font></font>
<font></font>
        var originalRemove = w.removeEventListener;<font></font>
        w.removeEventListener = function(){<font></font>
            // add your own stuff here to debug<font></font>
            return originalRemove.apply(this, arguments);<font></font>
        };<font></font>
    })(window);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">H / T @ les2</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome或Safari浏览器中的WebKit Inspector现在可以执行此操作。</font><font style="vertical-align: inherit;">在“元素”窗格中选择它时，它将显示DOM元素的事件侦听器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯LEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1：</font></font><code>Prototype.observe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Element.addEventListener（请参见</font></font><a href="https://github.com/sstephenson/prototype/blob/ecacc02/src/prototype/dom/event.js#L759" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2：您可以重写</font></font><code>Element.addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以记住添加的侦听器（handy属性</font></font><code>EventListenerList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已从DOM3规范建议中删除）。</font><font style="vertical-align: inherit;">在附加任何事件之前运行以下代码：</font></font></p>

<pre><code>(function() {<font></font>
  Element.prototype._addEventListener = Element.prototype.addEventListener;<font></font>
  Element.prototype.addEventListener = function(a,b,c) {<font></font>
    this._addEventListener(a,b,c);<font></font>
    if(!this.eventListenerList) this.eventListenerList = {};<font></font>
    if(!this.eventListenerList[a]) this.eventListenerList[a] = [];<font></font>
    this.eventListenerList[a].push(b);<font></font>
  };<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下方式阅读所有事件：</font></font></p>

<pre><code>var clicks = someElement.eventListenerList.click;<font></font>
if(clicks) clicks.forEach(function(f) {<font></font>
  alert("I listen to this function: "+f.toString());<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且不要忘记重写</font></font><code>Element.removeEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以从定制中删除事件</font></font><code>Element.eventListenerList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3：在</font></font><code>Element.onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">酒店需要特别注意：</font></font></p>

<pre><code>if(someElement.onclick)<font></font>
  alert("I also listen tho this: "+someElement.onclick.toString());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4：别忘了</font></font><code>Element.onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">content属性：这是两件事：</font></font></p>

<pre><code>someElement.onclick = someHandler; // IDL attribute<font></font>
someElement.setAttribute("onclick","otherHandler(event)"); // content attribute<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您也需要处理它：</font></font></p>

<pre><code>var click = someElement.getAttribute("onclick");<font></font>
if(click) alert("I even listen to this: "+click);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Event书签（在最流行的答案中提到）仅窃取自定义库处理程序缓存：</font></font></p>

<blockquote>
  <p>It turns out that there is no standard method provided by the W3C
  recommended DOM interface to find out what event listeners are
  attached to a particular element. While this may appear to be an
  oversight, there was a proposal to include a property called
  eventListenerList to the level 3 DOM specification, but was
  unfortunately been removed in later drafts. As such we are forced to
  looked at the individual Javascript libraries, which typically
  maintain a cache of attached events (so they can later be removed and
  perform other useful abstractions).</p>
  
  <p>As such, in order for Visual Event to show events, it must be able to
  parse the event information out of a Javascript library.</p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素覆盖可能存在问题（即，由于存在一些特定于DOM的特定功能，例如实时集合，无法在JS中进行编码），但是它原生提供了eventListenerList支持，并且可以在Chrome，Firefox和Opera中使用（不适用于IE7） ）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用JavaScript </font><strong><font style="vertical-align: inherit;">列出所有事件侦听器</font></strong><font style="vertical-align: inherit;">：</font><font style="vertical-align: inherit;">您只需修改</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML元素的方法（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加侦听器</font><em><font style="vertical-align: inherit;">之前</font></em><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>function reportIn(e){<font></font>
    var a = this.lastListenerInfo[this.lastListenerInfo.length-1];<font></font>
    console.log(a)<font></font>
}<font></font>
<font></font>
<font></font>
HTMLAnchorElement.prototype.realAddEventListener = HTMLAnchorElement.prototype.addEventListener;<font></font>
<font></font>
HTMLAnchorElement.prototype.addEventListener = function(a,b,c){<font></font>
    this.realAddEventListener(a,reportIn,c); <font></font>
    this.realAddEventListener(a,b,c); <font></font>
    if(!this.lastListenerInfo){  this.lastListenerInfo = new Array()};<font></font>
    this.lastListenerInfo.push({a : a, b : b , c : c});<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，每个锚元素（</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）将具有一个</font></font><code>lastListenerInfo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，该属性包含其所有侦听器。</font><font style="vertical-align: inherit;">它甚至可以删除带有匿名功能的侦听器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖路易神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>getEventListeners(domElement)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员工具控制台中</font><font style="vertical-align: inherit;">支持Chrome，Firefox，Vivaldi和Safari </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大多数调试目的，都可以使用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是使用它的很好参考：</font><a href="https://developers.google.com/web/tools/chrome-devtools/console/utilities#geteventlisteners" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://developers.google.com/web/tools/chrome-devtools/console/utilities#geteventlisteners" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developers.google.com/web/tools/chrome-devtools/console/utilities#geteventlisteners</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁村村GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只需要检查页面上发生的情况，则可以尝试使用</font></font><a href="http://www.sprymedia.co.uk/article/Visual+Event" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Event</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">书签。</font></font></p>

<p><strong>Update</strong>: <a href="http://www.sprymedia.co.uk/article/Visual+Event+2" rel="nofollow noreferrer">Visual Event 2</a> available.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
