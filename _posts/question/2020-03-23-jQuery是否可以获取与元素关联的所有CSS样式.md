---
layout: question
title:  jQuery是否可以获取与元素关联的所有CSS样式？
date:   2020-03-23T08:05:56.000Z
description: jQuery中是否有一种方法可以从现有元素中获取所有CSS并将其应用于另一个元素而无需列出所有元素？我知道如果它们是带有的样式属性都可以attr()，...
img: 
author: 小胖Jim
category: question
answer: 3
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery中是否有一种方法可以从现有元素中获取所有CSS并将其应用于另一个元素而无需列出所有元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道如果它们是带有的样式属性都可以</font></font><code>attr()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我所有的样式都在外部样式表中。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2973篇《jQuery是否可以获取与元素关联的所有CSS样式？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不使用</font></font><a href="http://www.w3schools.com/jsref/dom_obj_style.asp" rel="noreferrer"><code>.style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM元素</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">这是一个包含诸如</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和的</font><font style="vertical-align: inherit;">成员的对象</font></font><code>backgroundColor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@marknadal的解决方案不是为我（例如</font></font><code>max-width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">获取带连字符的属性</font><font style="vertical-align: inherit;">，而是更改了第一个</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环</font></font><code>css2json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其起作用，而且我怀疑执行的迭代次数更少：</font></font></p>

<pre><code>for (var i = 0; i &lt; css.length; i += 1) {<font></font>
    s[css[i]] = css.getPropertyValue(css[i]);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>in,</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>getPropertyValue()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是进行</font><font style="vertical-align: inherit;">循环</font></font><code>toLowerCase().</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迟了两年，但我有您想要的解决方案。</font><font style="vertical-align: inherit;">我不打算从</font></font><a href="http://upshots.org/?p=192"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始作者</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那里</font><font style="vertical-align: inherit;">获得任何荣誉</font><font style="vertical-align: inherit;">，这是我发现的一个插件，可以很好地满足您的需求，但是</font><font style="vertical-align: inherit;">可以在所有浏览器（甚至IE）中</font><font style="vertical-align: inherit;">获得</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的样式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码会产生大量输出，应谨慎使用。</font><font style="vertical-align: inherit;">它不仅复制所有标准CSS属性，还复制该浏览器的所有供应商CSS属性。</font></font></p>

<p><code>jquery.getStyleObject.js:</code></p>

<pre><code>/*<font></font>
 * getStyleObject Plugin for jQuery JavaScript Library<font></font>
 * From: http://upshots.org/?p=112<font></font>
 */<font></font>
<font></font>
(function($){<font></font>
    $.fn.getStyleObject = function(){<font></font>
        var dom = this.get(0);<font></font>
        var style;<font></font>
        var returns = {};<font></font>
        if(window.getComputedStyle){<font></font>
            var camelize = function(a,b){<font></font>
                return b.toUpperCase();<font></font>
            };<font></font>
            style = window.getComputedStyle(dom, null);<font></font>
            for(var i = 0, l = style.length; i &lt; l; i++){<font></font>
                var prop = style[i];<font></font>
                var camel = prop.replace(/\-([a-z])/g, camelize);<font></font>
                var val = style.getPropertyValue(prop);<font></font>
                returns[camel] = val;<font></font>
            };<font></font>
            return returns;<font></font>
        };<font></font>
        if(style = dom.currentStyle){<font></font>
            for(var prop in style){<font></font>
                returns[prop] = style[prop];<font></font>
            };<font></font>
            return returns;<font></font>
        };<font></font>
        return this.css();<font></font>
    }<font></font>
})(jQuery);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本用法非常简单，但是他也为此编写了一个函数：</font></font></p>

<pre><code>$.fn.copyCSS = function(source){<font></font>
&nbsp;&nbsp;var styles = $(source).getStyleObject();<font></font>
&nbsp;&nbsp;this.css(styles);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能有所帮助。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
