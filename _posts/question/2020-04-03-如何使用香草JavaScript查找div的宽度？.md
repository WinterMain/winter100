---
layout: question
title:  如何使用香草JavaScript查找div的宽度？
date:   2020-04-03T04:00:20.000Z
description: 如何<div>在不使用jQuery之类的库的情况下以跨浏览器兼容的方式找到的当前宽度？...
img: 
author: 村村番长
category: question
answer: 6
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery之类的库的</font><em><font style="vertical-align: inherit;">情况下</font></em><font style="vertical-align: inherit;">以跨浏览器兼容的方式</font><font style="vertical-align: inherit;">找到的当前宽度</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是使用getBoundingClientRect函数。</font><font style="vertical-align: inherit;">请注意，如果元素的显示为“ none”，则getBoundingClientRect将返回一个空矩形。</font></font></p>

<pre><code>var elem = document.getElementById("myDiv");<font></font>
if(elem) {<font></font>
   var rect = elem.getBoundingClientRect();<font></font>
   console.log(rect.width);  <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您不必使用</font></font><code>document.getElementById("mydiv")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以简单地使用div的ID，例如：</font></font><br>
<br>
<code>var w = mydiv.clientWidth;</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
或</font></font><br>
<code>var w = mydiv.offsetWidth;</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
等。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>clientWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>offsetWidth</code> <a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla开发人员网络参考</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像：</font></font></p>

<pre><code>document.getElementById("yourDiv").clientWidth; // returns number, like 728
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或边框宽度：</font></font></p>

<pre><code>document.getElementById("yourDiv").offsetWidth; // 728 + borders width
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德伽罗</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><pre><code>document.getElementById("mydiv").offsetWidth
</code></pre>

<ul>
<li><a href="https://developer.mozilla.org/en/DOM/element.offsetWidth"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">element.offsetWidth（MDC）</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用ClassName搜索DOM。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>document.getElementsByClassName("myDiv")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将返回一个数组。</font><font style="vertical-align: inherit;">如果您有一个特定的属性感兴趣，例如：</font></font></p>

<pre><code>var divWidth = document.getElementsByClassName("myDiv")[0].clientWidth;
</code></pre>

<p><code>divWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 现在将等于div数组中第一个元素的宽度。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有答案都是正确的，但是我仍然想给出其他可行的选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在寻找分配的宽度（忽略填充，边距等），则可以使用。</font></font></p>

<pre><code>getComputedStyle(element).width; //returns value in px like "727.7px"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getComputedStyle允许您访问该元素的所有样式。</font><font style="vertical-align: inherit;">例如：padding，paddingLeft，margin，border-top-left-radius等。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
