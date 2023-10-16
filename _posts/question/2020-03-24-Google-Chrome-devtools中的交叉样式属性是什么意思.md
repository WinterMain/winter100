---
layout: question
title:  Google Chrome devtools中的交叉样式属性是什么意思？
date:   2020-03-24T03:30:36.000Z
description: 使用Chrome的devtools检查元素时，在“元素”标签中，右侧的“样式”栏显示了相应的CSS属性。有时，其中某些属性会被删除。这些属性是什么意思？...
img: 
author: 樱GO
category: question
answer: 5
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Chrome的devtools检查元素时，在“元素”标签中，右侧的“样式”栏显示了相应的CSS属性。</font><font style="vertical-align: inherit;">有时，其中某些属性会被删除。</font><font style="vertical-align: inherit;">这些属性是什么意思？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3320篇《Google Chrome devtools中的交叉样式属性是什么意思？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您将CSS代码复制并粘贴到某处会破坏格式，因此Chrome会显示黄色警告。</font><font style="vertical-align: inherit;">您应该再次尝试重新格式化CSS代码，这应该没问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明。</font><font style="vertical-align: inherit;">如果您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询（例如</font></font><code>@media screen (max-width:500px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），请特别注意在使用</font><font style="vertical-align: inherit;">常规样式</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用@media查询</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因为@media查询将被省略（即使它更具体），如果后面紧跟的是操纵相同元素的css。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>@media (max-width:750px){<font></font>
#buy-box {width: 300px;}<font></font>
}<font></font>
<font></font>
#buy-box{<font></font>
width:500px;<font></font>
}<font></font>
<font></font>
** width will be 500px and 300px will be crossed out in Developer Tools. **<font></font>
<font></font>
#buy-box{<font></font>
width:500px;<font></font>
}<font></font>
<font></font>
@media (max-width:750px){<font></font>
#buy-box {width: 300px;}<font></font>
}<font></font>
<font></font>
** width will be 300px and 500px will be crossed out **<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果即使在收到笔划指示后仍要应用样式，则可以使用</font></font><code>"!important"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来强制样式。</font><font style="vertical-align: inherit;">它可能不是正确的解决方案，但可以解决问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了上述答案外，我还想强调一下一个被剔除财产的案例，这确实令我感到惊讶。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将背景图像添加到div中：</font></font></p>

<pre><code>&lt;div class = "myBackground"&gt;<font></font>
<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要缩放图像以适合div的尺寸，因此这将是您的常规类定义。</font></font></p>

<pre><code>.myBackground {<font></font>
<font></font>
 height:100px;<font></font>
 width:100px;<font></font>
 background: url("/img/bck/myImage.jpg") no-repeat; <font></font>
 background-size: contain;<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您将订单交换为：-</font></font></p>

<pre><code>.myBackground {<font></font>
 height:100px;<font></font>
 width:100px;<font></font>
 background-size: contain;  //before the background<font></font>
 background: url("/img/bck/myImage.jpg") no-repeat; <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在chrome中，您会看到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景尺寸</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已删除。</font><font style="vertical-align: inherit;">我不确定为什么会这样，但是是的，您不想弄乱它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Tom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当CSS属性显示为删除线时，表示应用了划线样式，但随后被更特定的选择器，更本地的规则或同一规则中的更高属性覆盖。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（特殊情况：如果某个样式存在于匹配规则中但已被注释掉，或者您通过在Chrome开发者工具中取消选中该样式来手动将其禁用，则该样式也会显示为删除线。输出，但如果样式有语法错误，则带有错误图标。）</font></font></p>

<p>For example, if a background color was applied to all <code>div</code>s, but a different background color was applied to <code>div</code>s with a certain id, the first color will show up but will be crossed out, as the second color has replaced it (in the property list for the <code>div</code> with that id).</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
