---
layout: question
title:  Nuxtjs组件中的asyncData无法正常工作
date:   2020-03-24T02:14:22.000Z
description: 我的nuxt.js项目有问题。我使用了异步组件，但是当它发布时，异步没有起作用。这是我的代码。我在https //nuxtjs.org/api/中有查...
img: 
author: 神无
category: question
answer: 1
tags: vuejs2 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的nuxt.js项目有问题。</font><font style="vertical-align: inherit;">我使用了异步组件，但是当它发布时，异步没有起作用。</font><font style="vertical-align: inherit;">这是我的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="https://nuxtjs.org/api/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nuxtjs.org/api/中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有查看文档，</font><font style="vertical-align: inherit;">但是我不知道到底是什么问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Test.vue（组件）</font></font></p>

<pre><code>    &lt;template&gt;<font></font>
        &lt;div&gt;<font></font>
            {{ project }}<font></font>
        &lt;/div&gt;<font></font>
    &lt;/template&gt;<font></font>
<font></font>
    &lt;script&gt;<font></font>
<font></font>
    export default {<font></font>
        data() {<font></font>
            return {<font></font>
                project : 'aaaa'<font></font>
            }<font></font>
        },<font></font>
        asyncData() {<font></font>
            return {<font></font>
                project : 'bbbb'<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是index.vue（页面）</font></font></p>

<pre><code>    &lt;template&gt;<font></font>
        &lt;test&gt;&lt;/test&gt;<font></font>
    &lt;/template&gt;<font></font>
    &lt;script&gt;<font></font>
<font></font>
    import Test from '~/components/Test.vue'<font></font>
    export default {<font></font>
        components : {<font></font>
            Test<font></font>
        }<font></font>
    }<font></font>
<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的预期结果是</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    bbbb
</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在</font></font><a href="http://localhost:3000" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上运行时，</font><font style="vertical-align: inherit;">这是实际结果</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    a
</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试搜索过Google多次，但是没有期望的解决方案。</font><font style="vertical-align: inherit;">请有人帮我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3224篇《Nuxtjs组件中的asyncData无法正常工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">勤奋的迷糊君</span>
            <span class="discuss-time">2021.02.26</span>
          </div>
          <div class="discuss-comment"><p>请问楼主解决了吗？我也遇到了这个问题</p></div>
        </div>
        
        <div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment"><p><a href='/home/27029'>@静</a>是的</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2021.07.13</span>
            </div>
          </div><div class="discuss-child">
            <div class="discuss-comment"><p><a href='/home/1'>@Winter</a>搞了半天用的位置不对..... &nbsp;</p><p>只能在page下面的第一层页面组件上用</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">静</span>
              <span class="discuss-time">2021.07.13</span>
            </div>
          </div><div class="discuss-child">
            <div class="discuss-comment"><p>asyncData只能在页面级使用，不能在组件内使用</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2021.02.26</span>
            </div>
          </div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
