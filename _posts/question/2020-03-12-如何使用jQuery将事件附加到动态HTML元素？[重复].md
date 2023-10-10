---
layout: question
title:  如何使用jQuery将事件附加到动态HTML元素？\[重复\]
date:   2020-03-12T07:41:50.000Z
description:                                                                          ...
img: 
author: 樱小胖Mandy
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/203198/event-binding-on-dynamically-created-elements" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在动态创建的元素上进行事件绑定？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （23个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-09-08 13：58：17Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有一些jQuery代码，将事件处理程序附加到class所有元素</font></font><code>.myclass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></strong></p>

<pre><code>$(function(){<font></font>
    $(".myclass").click( function() {<font></font>
        // do something<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的HTML可能如下所示：</font></font></p>

<pre><code>&lt;a class="myclass" href="#"&gt;test1&lt;/a&gt;<font></font>
&lt;a class="myclass" href="#"&gt;test2&lt;/a&gt;<font></font>
&lt;a class="myclass" href="#"&gt;test3&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没问题。</font><font style="vertical-align: inherit;">但是，请考虑是否</font></font><code>.myclass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以后的某个时间</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">元素写入页面。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></strong></p>

<pre><code>&lt;a id="anchor1" href="#"&gt;create link dynamically&lt;/a&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
$(function(){<font></font>
    $("#anchor1").click( function() {<font></font>
        $("#anchor1").append('&lt;a class="myclass" href="#"&gt;test4&lt;/a&gt;');<font></font>
    });<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font></font><code>test4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户单击时将创建链接</font></font><code>a#anchor1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>test4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接不具备</font></font><code>click()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与之关联的处理程序，即使它有</font></font><code>class="myclass"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我想编写</font></font><code>click()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一次处理程序，并将其应用于页面加载时出现的内容以及以后通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AJAX / DHTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入的内容</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">知道我该如何解决吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery 1.3+，请使用。</font></font><a href="http://docs.jquery.com/Events/live" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生活（）</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有当前-和将来-匹配元素的处理程序绑定到事件（例如click）。</font><font style="vertical-align: inherit;">也可以绑定自定义事件。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有当前-和将来-匹配元素的处理程序绑定到事件（例如click）。</font><font style="vertical-align: inherit;">也可以绑定自定义事件。</font></font></p>

<p><a href="http://docs.jquery.com/Events/live" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连结文字</font></font></a></p>

<pre><code>$(function(){<font></font>
    $(".myclass").live("click", function() {<font></font>
        // do something<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小小Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery 1.7之后，首选方法是</font></font><a href="http://api.jquery.com/on/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.on（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="http://api.jquery.com/on/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">.off </font></a></font><a href="http://api.jquery.com/off/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）</font></font></a> </p>

<p><a href="https://stackoverflow.com/a/9331127/24970"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">肖恩的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示了一个例子。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在不推荐使用：</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery函数</font></font><a href="http://docs.jquery.com/Events/live" rel="nofollow noreferrer"><code>.live()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://docs.jquery.com/Events/die" rel="nofollow noreferrer"><code>.die()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在jQuery 1.3.x中可用</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文档：</font></font></p>
  
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">若要在单击时在警告框中显示每个段落的文本：</font></font></p>

<pre><code>$("p").live("click", function(){<font></font>
  alert( $(this).text() );<font></font>
});<font></font>
</code></pre>
  </blockquote>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><a href="http://docs.jquery.com/Plugins/livequery/livequery" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">livequery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件可以做到这一点，并支持更多事件。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
