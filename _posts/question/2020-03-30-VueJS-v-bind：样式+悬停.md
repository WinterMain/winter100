---
layout: question
title:  VueJS-v-bind：样式+悬停
date:   2020-03-30T10:23:02.000Z
description: 我需要将CSS悬停与VueJS v-bind：style指令一起使用，但是找不到有关它的信息。 我需要为悬停绑定样式，但是v-bind style.h...
img: 
author: 猪猪飞云
category: question
answer: 4
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将CSS悬停与VueJS v-bind：style指令一起使用，但是找不到有关它的信息。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要为悬停绑定样式，但是</font></font><code>v-bind:style.hover={}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
不起作用。</font><font style="vertical-align: inherit;">所有属性都将从后端获取，因此我需要动态绑定样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他方法可以使用VueJS在鼠标悬停或CSS悬停时绑定样式吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对象：</font></font></p>

<pre><code>button: {<font></font>
    colorBackd: '#1e2021',<font></font>
    colorBackdHover: '#000000',<font></font>
    text: 'Results',<font></font>
    color: '#d3e0ff',<font></font>
    colorHover: "#ffffff",<font></font>
    borderColor: '#d3e0ff',<font></font>
    borderColorHover: "#ffffff"<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是需要与样式绑定的html元素</font></font></p>

<pre><code>&lt;button type="button"<font></font>
    :style="{<font></font>
    color:button.color,<font></font>
        backgroundColor:button.colorBackd,<font></font>
        borderColor:button.borderColor,<font></font>
    }"<font></font>
    class="btn btn-outline-info large-button"&gt;<font></font>
<font></font>
        {{ button.text }}<font></font>
<font></font>
&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢 </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3859篇《VueJS-v-bind：样式+悬停》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以为Vuejs组件分配一个ID，然后在样式表中应用所需的悬停样式。</font></font></p>

<pre><code>&lt;button id="styledButton" type="button"<font></font>
:style="{<font></font>
color:button.color,<font></font>
    backgroundColor:button.colorBackd,<font></font>
    borderColor:button.borderColor,<font></font>
}"<font></font>
class="btn btn-outline-info large-button"&gt;<font></font>
<font></font>
    {{ button.text }}<font></font>
&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在标签中</font></font></p>

<pre><code>&lt;style&gt;<font></font>
styledButton:hover {<font></font>
color: #FFFFFF<font></font>
};<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果希望悬停样式包含任何动态数据。</font><font style="vertical-align: inherit;">制作一个调用计算属性的标签。</font></font></p>

<pre><code>&lt;style&gt;{{computedStyle}}&lt;/style&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想更改悬停时的z-index，使悬停的p标签显示在顶部。</font><font style="vertical-align: inherit;">为此，我必须听事件以及一些价值。</font></font></p>

<p><a href="https://i.stack.imgur.com/reo9c.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/reo9c.png" alt="在此处输入图片说明"></a><a href="https://i.stack.imgur.com/0QZPn.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/0QZPn.png" alt="在此处输入图片说明"></a><a href="https://i.stack.imgur.com/fm5Lu.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/fm5Lu.png" alt="在此处输入图片说明"></a></p>

<pre><code>&lt;template&gt;<font></font>
...<font></font>
&lt;p @mouseover="changeZIndex"<font></font>
   @mouseleave="changeZIndexToOriginal({$event,old_z_index})<font></font>
&gt;<font></font>
...<font></font>
&lt;/template&gt;<font></font>
<font></font>
<font></font>
&lt;script&gt;<font></font>
...methods<font></font>
changeZIndex(e){<font></font>
    //change to new z-index<font></font>
    e.target.style.zIndex = 5 //to show on top<font></font>
}<font></font>
changeZIndexToOriginal(e){<font></font>
    //e.$event is  an event which is trirgered. to get event along with some value we have to use this approach<font></font>
    // e.old_z_index is z-index that I want to set back again. I am just using loop index to set z-index<font></font>
    e.$event.target.style.zIndex = e.old_z_index<font></font>
}<font></font>
...<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以上方法，我们可以更改与目标元素相关的任何内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用单个文件组件，则只需将按钮样式设置为作用域：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;button&gt;&lt;/button&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;style scoped&gt;<font></font>
    button {<font></font>
        /* your button style here */<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至对于更受限的样式，这里显示了一些模块：</font></font><a href="https://stackoverflow.com/questions/45898865/how-to-correctly-use-scoped-styles-in-vuejs-single-file-components"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在VueJS单个文件组件中正确使用“作用域”样式？</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他方式（使用css变量）。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用样式创建HTML </font></font></p>

<pre><code>&lt;style&gt;<font></font>
     div[vueid=${_uid}] { --btn-hover: ${`Here your hover brush`} }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其注入您的组件。 </font></font></p>

<pre><code>&lt;template&gt;<font></font>
   &lt;div vueid="_uid"&gt;<font></font>
      &lt;button&gt;&lt;/button&gt;<font></font>
      &lt;div v-html="styleCode"&gt;&lt;/div&gt;<font></font>
   &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，只需在静态</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">使用此变量</font><font style="vertical-align: inherit;">即可设置按钮样式。</font></font></p>

<pre><code>button:hover { background: var(--btn-hover); }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您可以在</font></font><code>:root</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器中</font><font style="vertical-align: inherit;">描述默认变量值</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
