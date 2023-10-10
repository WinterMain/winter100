---
layout: question
title:  如何在没有任何html标记或其他标记的情况下使用v-if和v-else
date:   2020-03-12T12:25:46.000Z
description: 项目清单<ul> <li>language</li>   < v-if= "tree()"> //which tag I may use or ...
img: 
author: Gil伽罗
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目清单</font></font></h2>

<pre><code>&lt;ul&gt;<font></font>
 &lt;li&gt;language&lt;/li&gt;<font></font>
<font></font>
   &lt; v-if= "tree()"&gt; //which tag I may use or any other process<font></font>
    &lt;li&gt;home&lt;/li&gt;<font></font>
    &lt;li&gt;about&lt;/li&gt;<font></font>
   &lt;&gt;<font></font>
   &lt; v-else&gt; //which tag I may use or any other process<font></font>
    &lt;li&gt;accounts&lt;/li&gt;<font></font>
    &lt;li&gt;listing&lt;/li&gt;<font></font>
   &lt;&gt;<font></font>
&lt;/ul&gt;'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>V-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">哪个html标签中使用它，或在任何其他</font></font><code>vue.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过程中使用它。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1318篇《如何在没有任何html标记或其他标记的情况下使用v-if和v-else》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有时可以使用该</font></font><code>&lt;slot&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素来制作所需的内容。</font><font style="vertical-align: inherit;">在</font><a href="https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots" rel="nofollow noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">查看插槽说明文件</font></font><a href="https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://vuejs.org/v2/guide/conditional.html#Conditional-Groups-with-v-if-on-lt-template-gt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">template</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;template v-if="condition"&gt;<font></font>
&lt;/template&gt;<font></font>
&lt;template v-else&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板不会在浏览器中呈现。</font><font style="vertical-align: inherit;">但是它将把其中的内容解析为html。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
