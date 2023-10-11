---
layout: question
title:  Vue-Router通过道具传递数据
date:   2020-03-16T06:01:42.000Z
description: 我在使用Vue-Router传递道具时遇到困难。将道具带入下一个视图时，似乎无法访问道具。这是我的方法对象：methods  {    submit...
img: 
author: Mandy西门
category: question
answer: 0
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用Vue-Router传递道具时遇到困难。</font><font style="vertical-align: inherit;">将道具带入下一个视图时，似乎无法访问道具。</font><font style="vertical-align: inherit;">这是我的方法对象：</font></font></p>

<pre><code>methods: {<font></font>
    submitForm() {<font></font>
      let self = this;<font></font>
      axios({<font></font>
        method: 'post',<font></font>
        url: url_here,<font></font>
        data:{<font></font>
          email: this.email,<font></font>
          password: this.password<font></font>
        },<font></font>
        headers: {<font></font>
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'<font></font>
        }<font></font>
      }).then(function(response) {<font></font>
        self.userInfo = response.data;<font></font>
        self.$router.push({name: 'reading-comprehension', props: {GUID:self.userInfo.uniqueID }});<font></font>
      })<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布请求有效，但是当我尝试路由到新组件并传递道具以访问下一个组件时，它说，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性或方法“ guid”未在实例上定义，但在渲染期间被引用。</font><font style="vertical-align: inherit;">确保在data选项中声明反应性数据属性。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一下，我要路由的组件看起来像这样：</font></font></p>

<pre><code>&lt;template lang="html"&gt;<font></font>
  &lt;div class="grid-container" id="read-comp"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
      &lt;h1&gt;Make a sentence:&lt;/h1&gt;<font></font>
      {{ GUID }}<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
 data(){<font></font>
   return {<font></font>
     props: ['GUID'],<font></font>
   }<font></font>
 }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1726篇《Vue-Router通过道具传递数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
