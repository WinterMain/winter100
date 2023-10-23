---
layout: question
title:  使用JQuery（立即）检测对<input type =“ text”>的所有更改
date:   2020-03-23T03:21:26.000Z
description: <input type="text">罐的价值有多种变化方式，包括：按键复制粘贴用JavaScript修改通过浏览器或工具栏自动完成我希...
img: 
author: 村村
category: question
answer: 6
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>&lt;input type="text"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罐</font><font style="vertical-align: inherit;">的价值有多种</font><font style="vertical-align: inherit;">变化方式，包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按键</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制粘贴</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用JavaScript修改</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过浏览器或工具栏自动完成</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我的JavaScript函数在每次更改时都能被调用（使用当前输入值）。</font><font style="vertical-align: inherit;">我希望立即调用它，而不仅仅是输入失去焦点时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找最干净，最可靠的方法来在所有浏览器中做到这一点（最好使用jQuery）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用例示例：在</font></font><a href="http://twitter.com/signup" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Signup</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面上，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户名字</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">段的值显示在其</font><font style="vertical-align: inherit;">下方</font><font style="vertical-align: inherit;">的URL“ </font></font><a href="http://twitter/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// twitter / </font></font></a><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">username</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”中。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2724篇《使用JQuery（立即）检测对<input type =“ text”>的所有更改》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到此示例并选择您感兴趣的事件：</font></font></p>

<pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;<font></font>
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;<font></font>
&lt;head&gt;<font></font>
&lt;meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /&gt;<font></font>
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"&gt;&lt;/script&gt; <font></font>
&lt;title&gt;evetns&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;form&gt;<font></font>
    &lt;input class="controlevents" id="i1" type="text" /&gt;&lt;br /&gt;<font></font>
    &lt;input class="controlevents" id="i2" type="text" /&gt;&lt;br /&gt;<font></font>
    &lt;input class="controlevents" id="i3" type="text" /&gt;&lt;br /&gt;<font></font>
    &lt;input class="controlevents" id="i4" type="text" /&gt;&lt;br /&gt;<font></font>
    &lt;input class="controlevents" id="i5" type="text" /&gt;&lt;br /&gt;<font></font>
&lt;/form&gt;<font></font>
&lt;div id="datatext"&gt;&lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
&lt;script&gt;<font></font>
$(function(){<font></font>
<font></font>
function testingevent(ev){<font></font>
    if (ev.currentTarget.tagName=="INPUT")<font></font>
        $("#datatext").append("&lt;div&gt;id : " + ev.currentTarget.id + ", tag: " + ev.currentTarget.tagName + ", type: "+ ev.type +"&lt;/div&gt;");<font></font>
}   <font></font>
<font></font>
    var eventlist = ["resizeend","rowenter","dragleave","beforepaste","dragover","beforecopy","page","beforeactivate","beforeeditfocus","controlselect","blur",<font></font>
                    "beforedeactivate","keydown","dragstart","scroll","propertychange","dragenter","rowsinserted","mouseup","contextmenu","beforeupdate",<font></font>
                    "readystatechange","mouseenter","resize","copy","selectstart","move","dragend","rowexit","activate","focus","focusin","mouseover","cut",<font></font>
                    "mousemove","focusout","filterchange","drop","blclick","rowsdelete","keypress","losecapture","deactivate","datasetchanged","dataavailable",<font></font>
                    "afterupdate","mousewheel","keyup","movestart","mouseout","moveend","cellchange","layoutcomplete","help","errorupdate","mousedown","paste",<font></font>
                    "mouseleave","click","drag","resizestart","datasetcomplete","beforecut","change","error","abort","load","select"];<font></font>
<font></font>
    var inputs = $(".controlevents");<font></font>
<font></font>
    $.each(eventlist, function(i, el){<font></font>
        inputs.bind(el, testingevent);<font></font>
    });<font></font>
<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能只使用</font></font><code>&lt;span contenteditable="true" spellcheck="false"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">element代替</font></font><code>&lt;input type="text"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？  </font></font></p>

<p><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（具有</font></font><code>contenteditable="true" spellcheck="false"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">as属性）的区别</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要在于：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的样式不像</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，但是文本被渲染为文本</font></font><code>innerText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并成为其内部主体的一部分。  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是多行的，</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管您设置了属性，但不是</font></font><code>multiline="true"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，要实现外观，您可以使用CSS对其进行样式设置，而在编写值的同时</font></font><code>innerText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得一个事件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="https://jsfiddle.net/zs9168ac/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，有些东西在IE和Edge中实际上无法使用，而我找不到。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个我正在实现自动完成变体的工作示例，它填充了一个jqueryui选择器（列表），但我不希望它的功能与执行下拉菜单的jqueryui自动完成功能完全相同。</font></font></p>

<pre><code>$("#tagFilter").on("change keyup paste", function() {<font></font>
     var filterText = $("#tagFilter").val();<font></font>
    $("#tags").empty();<font></font>
    $.getJSON("http://localhost/cgi-bin/tags.php?term=" + filterText,<font></font>
        function(data) {<font></font>
            var i;<font></font>
            for (i = 0; i &lt; data.length; i++) {<font></font>
                var tag = data[i].value;<font></font>
                $("#tags").append("&lt;li class=\"tag\"&gt;" + tag + "&lt;/li&gt;");<font></font>
            }<font></font>
        }); <font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇逆天猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，最好的方法是覆盖您自己列出的这三个基础。</font><font style="vertical-align: inherit;">简单的：onblur，：onkeyup等无法满足您的需求，因此只需将它们组合即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">KeyUp应该涵盖前两个，并且如果Javascript修改了输入框，那么我当然希望它是您自己的javascript，因此只需在修改它的函数中添加一个回调即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Jim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到</font></font><code>oninput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件似乎在大多数理智的浏览器中都可以正常工作。</font><font style="vertical-align: inherit;">IE9也支持它，但是实现是有问题的（删除字符时不会触发该事件）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery 1.7+版时，该</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法可用于绑定到如下事件：</font></font></p>

<pre><code>$(".inputElement").on("input", null, null, callbackFunction);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery&gt; = 1.9的实时花式解决方案</font></font></p>

<pre><code>$("#input-id").on("change keyup paste", function(){<font></font>
    dosomething();<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您还想检测“点击”事件，只需：</font></font></p>

<pre><code>$("#input-id").on("change keyup paste click", function(){<font></font>
    dosomething();<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery &lt;= 1.4，请使用</font></font><code>live</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
