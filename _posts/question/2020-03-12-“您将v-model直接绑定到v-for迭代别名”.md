---
layout: question
title:  “您将v-model直接绑定到v-for迭代别名”
date:   2020-03-12T03:11:15.000Z
description: 只是遇到了我之前从未遇到过的错误：“您将v-model直接绑定到v-for迭代别名。这将无法修改v-for源数组，因为写入别名就像修改a函数局部变量。请考...
img: 
author: 达蒙猪猪
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是遇到了我之前从未遇到过的错误：“您将v-model直接绑定到v-for迭代别名。这将无法修改v-for源数组，因为写入别名就像修改a函数局部变量。请考虑使用对象数组，然后在对象属性上使用v-model。” </font><font style="vertical-align: inherit;">我有点困惑，因为我似乎没有做错任何事情。</font><font style="vertical-align: inherit;">与我之前使用的其他v-for循环的唯一区别是，此循环稍微简单一些，因为它只是循环遍历字符串数组，而不是对象：</font></font></p>

<pre><code> &lt;tr v-for="(run, index) in this.settings.runs"&gt;<font></font>
<font></font>
     &lt;td&gt;<font></font>
         &lt;text-field :name="'run'+index" v-model="run"/&gt;<font></font>
     &lt;/td&gt;<font></font>
<font></font>
     &lt;td&gt;<font></font>
        &lt;button @click.prevent="removeRun(index)"&gt;X&lt;/button&gt;<font></font>
     &lt;/td&gt;<font></font>
<font></font>
 &lt;/tr&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息似乎表明我实际上需要使事情稍微复杂一些，并使用对象而不是简单的字符串，这在我看来不对。</font><font style="vertical-align: inherit;">我想念什么吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
