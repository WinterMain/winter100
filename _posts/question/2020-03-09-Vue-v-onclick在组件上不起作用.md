---
layout: question
title:  Vue v-on：click在组件上不起作用
date:   2020-03-09T14:55:40.000Z
description: 我正在尝试在组件内部使用on click指令，但它似乎不起作用。当我单击该组件时，应该在控制台中单击“测试”，什么也没有发生。我在控制台中看不到任何错误，...
img: 
author: Stafan神乐
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在组件内部使用on click指令，但它似乎不起作用。</font><font style="vertical-align: inherit;">当我单击该组件时，应该在控制台中单击“测试”，什么也没有发生。</font><font style="vertical-align: inherit;">我在控制台中看不到任何错误，所以我不知道我在做什么错。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;title&gt;vuetest&lt;/title&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="app"&gt;&lt;/div&gt;<font></font>
    &lt;!-- built files will be auto injected --&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;test v-on:click="testFunction"&gt;&lt;/test&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import Test from './components/Test'<font></font>
<font></font>
export default {<font></font>
  name: 'app',<font></font>
  methods: {<font></font>
    testFunction: function (event) {<font></font>
      console.log('test clicked')<font></font>
    }<font></font>
  },<font></font>
  components: {<font></font>
    Test<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Test.vue（组件）</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    click here<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
  name: 'test',<font></font>
  data () {<font></font>
    return {<font></font>
      msg: 'Welcome to Your Vue.js App'<font></font>
    }<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第334篇《Vue v-on：click在组件上不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要侦听组件根元素上的本机事件，则必须对</font></font><a href="https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.native</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修饰符使用</font></font><code>v-on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;test v-on:click.native="testFunction"&gt;&lt;/test&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简而言之，如评论中所建议，您也可以执行以下操作：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;test @click.native="testFunction"&gt;&lt;/test&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
