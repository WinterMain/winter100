---
layout: question
title:  如何使用JavaScript更改元素的类？
date:   2020-03-09T08:05:48.000Z
description: 如何onclick使用JavaScript 响应事件来更改HTML元素的类？...
img: 
author: 小胖Itachi
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript </font><font style="vertical-align: inherit;">响应</font><font style="vertical-align: inherit;">事件来</font><font style="vertical-align: inherit;">更改HTML元素的类</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是执行此操作的简单jQuery代码。</font></font></p>

<pre><code>$(".class1").click(function(argument) {<font></font>
    $(".parentclass").removeClass("classtoremove");<font></font>
    setTimeout(function (argument) {<font></font>
        $(".parentclass").addClass("classtoadd");<font></font>
    }, 100);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里，</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Class1是事件的侦听器。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父类是托管您要更改的类的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Classtoremove是您拥有的旧课程。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加的类是您要添加的新类。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">100是更改类的超时延迟。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有冒犯，但是即时更改类是不明智的，因为它会迫使CSS解释器重新计算整个网页的外观。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因是CSS解释器几乎不可能知道是否可以更改任何继承或级联，因此简短的答案是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永远不要即时更改className！-）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是通常您只需要更改一个或两个属性即可轻松实现：</font></font></p>

<pre><code>function highlight(elm){<font></font>
    elm.style.backgroundColor ="#345";<font></font>
    elm.style.color = "#fff";<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的JavaScript代码：</font></font></p>

<pre><code>&lt;div id="div_add" class="div_add"&gt;Add class from Javascript&lt;/div&gt;<font></font>
&lt;div id="div_replace" class="div_replace"&gt;Replace class from Javascript&lt;/div&gt;<font></font>
&lt;div id="div_remove" class="div_remove"&gt;Remove class from Javascript&lt;/div&gt;<font></font>
&lt;button onClick="div_add_class();"&gt;Add class from Javascript&lt;/button&gt;<font></font>
&lt;button onClick="div_replace_class();"&gt;Replace class from Javascript&lt;/button&gt;<font></font>
&lt;button onClick="div_remove_class();"&gt;Remove class from Javascript&lt;/button&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    function div_add_class()<font></font>
    {<font></font>
        document.getElementById("div_add").className += " div_added";<font></font>
    }<font></font>
    function div_replace_class()<font></font>
    {<font></font>
        document.getElementById("div_replace").className = "div_replaced";<font></font>
    }<font></font>
    function div_remove_class()<font></font>
    {<font></font>
        document.getElementById("div_remove").className = "";<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从此</font></font><a href="http://ownanswers.com/question/add-remove-and-replace-class-in-javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载工作代码</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function classed(el, class_name, add_class) {<font></font>
  const re = new RegExp("(?:^|\\s)" + class_name + "(?!\\S)", "g");<font></font>
  if (add_class &amp;&amp; !el.className.match(re)) el.className += " " + class_name<font></font>
  else if (!add_class) el.className = el.className.replace(re, '');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用上面接受的答案是一个简单的跨浏览器函数，用于添加和删除类</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加类：</font></font></p>

<pre><code>classed(document.getElementById("denis"), "active", true)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除类别：</font></font></p>

<pre><code>classed(document.getElementById("denis"), "active", false)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是说，</font></font><code>myElement.classList="new-class"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您需要维护其他现有的类，在这种情况下，您可以使用这些</font></font><code>classList.add, .remove</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var doc = document;<font></font>
var divOne = doc.getElementById("one");<font></font>
var goButton = doc.getElementById("go");<font></font>
<font></font>
goButton.addEventListener("click", function() {<font></font>
  divOne.classList="blue";<font></font>
});</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>div{<font></font>
  min-height:48px;<font></font>
  min-width:48px;<font></font>
}<font></font>
.bordered{<font></font>
  border: 1px solid black;<font></font>
}<font></font>
.green{<font></font>
  background:green;<font></font>
}<font></font>
.blue{<font></font>
  background: blue;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;button id="go"&gt;Change Class&lt;/button&gt;<font></font>
<font></font>
&lt;div id="one" class="bordered green"&gt;<font></font>
<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi米亚斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是以为我会把这个扔进去：</font></font></p>

<pre><code>function inArray(val, ary){<font></font>
  for(var i=0,l=ary.length; i&lt;l; i++){<font></font>
    if(ary[i] === val){<font></font>
      return true;<font></font>
    }<font></font>
  }<font></font>
  return false;<font></font>
}<font></font>
function removeClassName(classNameS, fromElement){<font></font>
  var x = classNameS.split(/\s/), s = fromElement.className.split(/\s/), r = [];<font></font>
  for(var i=0,l=s.length; i&lt;l; i++){<font></font>
    if(!iA(s[i], x))r.push(s[i]);<font></font>
  }<font></font>
  fromElement.className = r.join(' ');<font></font>
}<font></font>
function addClassName(classNameS, toElement){<font></font>
  var s = toElement.className.split(/\s/);<font></font>
  s.push(c); toElement.className = s.join(' ');<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在代码中使用了以下普通JavaScript函数。</font><font style="vertical-align: inherit;">它们使用正则表达式，</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不需要在正则表达式中引用特殊字符。</font></font></p>

<pre><code>function addClass(el, cn) {<font></font>
    var c0 = (" " + el.className + " ").replace(/\s+/g, " "),<font></font>
        c1 = (" " + cn + " ").replace(/\s+/g, " ");<font></font>
    if (c0.indexOf(c1) &lt; 0) {<font></font>
        el.className = (c0 + c1).replace(/\s+/g, " ").replace(/^ | $/g, "");<font></font>
    }<font></font>
}<font></font>
<font></font>
function delClass(el, cn) {<font></font>
    var c0 = (" " + el.className + " ").replace(/\s+/g, " "),<font></font>
        c1 = (" " + cn + " ").replace(/\s+/g, " ");<font></font>
    if (c0.indexOf(c1) &gt;= 0) {<font></font>
        el.className = c0.replace(c1, " ").replace(/\s+/g, " ").replace(/^ | $/g, "");<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font><font style="vertical-align: inherit;">在现代浏览器中</font><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.classList" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">element.classList</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用jQuery并编写如下内容：</font></font></p>

<pre><code>jQuery(function($) {<font></font>
    $("#some-element").click(function() {<font></font>
        $(this).toggleClass("clicked");<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码添加了</font><font style="vertical-align: inherit;">单击</font><font style="vertical-align: inherit;">id </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">some-element</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的元素时要调用的函数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该函数将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该元素的class属性，如果它不是已经是它的一部分，如果它的存在，删除它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您确实需要在页面中添加对jQuery库的引用才能使用此代码，但是至少您可以确信该库中的大多数功能将在几乎所有现代浏览器上都可以使用，并且可以节省实施时间您自己的代码也可以这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了补充来自另一个流行框架Google Closures的信息，请参见其</font></font><a href="http://closure-library.googlecode.com/svn/docs/closure_goog_dom_classes.js.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dom / classs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类：</font></font></p>

<pre><code>goog.dom.classes.add(element, var_args)<font></font>
<font></font>
goog.dom.classes.addRemove(element, classesToRemove, classesToAdd)<font></font>
<font></font>
goog.dom.classes.remove(element, var_args)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择元素的一种方法是将</font></font><a href="http://closure-library.googlecode.com/svn/docs/closure_third_party_closure_goog_dojo_dom_query.js.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">goog.dom.query</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与CSS3选择器结合使用：</font></font></p>

<pre><code>var myElement = goog.dom.query("#MyElement")[0];
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>function setCSS(eleID) {<font></font>
    var currTabElem = document.getElementById(eleID);<font></font>
<font></font>
    currTabElem.setAttribute("class", "some_class_name");<font></font>
    currTabElem.setAttribute("className", "some_class_name");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
