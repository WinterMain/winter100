---
layout: question
title:  如何将class =“ active”放入vue.js中的第一个元素以进行循环
date:   2020-03-16T06:01:19.000Z
description: 我正在尝试学习vue.js。我要添加元素列表，我只想添加class="active"到for循环中的第一个元素。以下是我的代码：<div class=...
img: 
author: Near阳光
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试学习vue.js。</font><font style="vertical-align: inherit;">我要添加元素列表，我只想添加</font></font><code>class="active"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到for循环中的第一个元素。</font><font style="vertical-align: inherit;">以下是我的代码：</font></font></p>

<pre><code>&lt;div class="carousel-inner text-center " role="listbox"&gt;<font></font>
    &lt;div class="item" v-for="sliderContent in sliderContents"&gt;<font></font>
        &lt;h1&gt;{{ sliderContent.title }}&lt;/h1&gt;<font></font>
        &lt;p v-html="sliderContent.paragraph"&gt;&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，第一个元素应如下所示：</font></font></p>

<pre><code>&lt;div class="item active"&gt;<font></font>
    &lt;h1&gt;WELCOME TO CANVAS&lt;/h1&gt;<font></font>
    &lt;p&gt;Create just what you need for your Perfect Website. Choose from a wide&lt;br&gt;range of Elements &amp; simple put them on your own Canvas&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够获取数据，因此一切工作都很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我的脚本代码：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
export default{<font></font>
    data() {<font></font>
        return {<font></font>
            sliderContents: [<font></font>
                {<font></font>
                    title: "WELCOME TO CANVAS",<font></font>
                    paragraph: "Create just what you need for your Perfect Website. Choose from a wide&lt;br&gt;range of Elements &amp; simple put them on your own Canvas"<font></font>
                },<font></font>
                {<font></font>
                    title: "WELCOME TO CANVAS",<font></font>
                    paragraph: "Create just what you need for your Perfect Website. Choose from a wide&lt;br&gt;range of Elements &amp; simple put them on your own Canvas"<font></font>
                },<font></font>
                {<font></font>
                    title: "WELCOME TO CANVAS",<font></font>
                    paragraph: "Create just what you need for your Perfect Website. Choose from a wide&lt;br&gt;range of Elements &amp; simple put them on your own Canvas"<font></font>
                },<font></font>
                {<font></font>
                    title: "WELCOME TO CANVAS",<font></font>
                    paragraph: "Create just what you need for your Perfect Website. Choose from a wide&lt;br&gt;range of Elements &amp; simple put them on your own Canvas"<font></font>
                }<font></font>
            ]<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮帮我。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
