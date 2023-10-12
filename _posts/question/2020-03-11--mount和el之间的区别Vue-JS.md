---
layout: question
title:  。$ mount（）和el之间的区别\[Vue JS\]
date:   2020-03-11T02:27:13.000Z
description: 这段代码有什么区别：new Vue({    data () {        return {            text  'Hello...
img: 
author: 泡芙小宇宙十三
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这段代码有什么区别：</font></font></p>

<pre><code>new Vue({<font></font>
    data () {<font></font>
        return {<font></font>
            text: 'Hello, World'<font></font>
        };<font></font>
    }<font></font>
}).$mount('#app')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和这个：</font></font></p>

<pre><code>new Vue({<font></font>
    el: '#app',<font></font>
    data () {<font></font>
        return {<font></font>
            text: 'Hello, World'<font></font>
        };<font></font>
    }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的意思是使用</font></font><code>.$mount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是相反有</font><font style="vertical-align: inherit;">什么好处</font></font><code>el</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第540篇《。$ mount（）和el之间的区别\[Vue JS\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
