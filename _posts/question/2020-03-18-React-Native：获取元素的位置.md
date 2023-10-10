---
layout: question
title:  React Native：获取元素的位置
date:   2020-03-18T10:41:33.000Z
description: 我正在Image用flexbox设置组件的样式，使其位于屏幕中央，效果很好。现在，我希望第二个Image组件直接显示在第一个组件的顶部。第二个图像使用绝对...
img: 
author: Davaid前端
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><code>Image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用flexbox设置组件的样式，使其位于屏幕中央，效果很好。</font><font style="vertical-align: inherit;">现在，我希望第二个</font></font><code>Image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件直接显示在第一个组件的顶部。</font><font style="vertical-align: inherit;">第二个图像使用绝对定位。</font><font style="vertical-align: inherit;">目前，我只是在猜测像素是否适合它，但是当然这是不准确的，并且在可维护性方面付出了太多努力。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找与jQuery等效的React Native </font></font><code>.offset()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有这样的事情吗？如果没有，实现这一目标的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2164篇《React Native：获取元素的位置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用引用进行计算时，这在最新版本的React Native中似乎已经改变。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以这种方式声明引用。</font></font></p>

<pre><code>  &lt;View<font></font>
    ref={(image) =&gt; {<font></font>
    this._image = image<font></font>
  }}&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并以此方式找到价值。</font></font></p>

<pre><code>  _measure = () =&gt; {<font></font>
    this._image._component.measure((width, height, px, py, fx, fy) =&gt; {<font></font>
      const location = {<font></font>
        fx: fx,<font></font>
        fy: fy,<font></font>
        px: px,<font></font>
        py: py,<font></font>
        width: width,<font></font>
        height: height<font></font>
      }<font></font>
      console.log(location)<font></font>
    })<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
