---
layout: question
title:  Vue.js在\`change上获得选择的选项
date:   2020-03-11T02:28:04.000Z
description: 首先，我想对Vue感到陌生，这是我有史以来第一个使用Vue的项目。我有组合框，我想根据所选组合框做一些不同的事情。我使用单独的vue.html和TypeScript文件...
img: 
author: 飞云斯丁GO
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我想对Vue感到陌生，这是我有史以来第一个使用Vue的项目。</font><font style="vertical-align: inherit;">我有组合框，我想根据所选组合框做一些不同的事情。</font><font style="vertical-align: inherit;">我使用单独的vue.html和TypeScript文件。</font><font style="vertical-align: inherit;">这是我的代码。</font></font></p>

<pre><code>&lt;select name="LeaveType" @change="onChange()" class="form-control"&gt;<font></font>
     &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
     &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的ts文件</font></font></p>

<pre><code>onChange(value) {<font></font>
    console.log(value);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在我的TypeScript功能中获取选定的选项值？</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第542篇《Vue.js在\`change上获得选择的选项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改后的值将在 </font></font><code>event.target.value</code></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const app = new Vue({<font></font>
  el: "#app",<font></font>
  data: function() {<font></font>
    return {<font></font>
      message: "Vue"<font></font>
    }<font></font>
  },<font></font>
  methods: {<font></font>
    onChange(event) {<font></font>
      console.log(event.target.value);<font></font>
    }<font></font>
  }<font></font>
})</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="app"&gt;<font></font>
  &lt;select name="LeaveType" @change="onChange" class="form-control"&gt;<font></font>
   &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
   &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-on</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的快捷选项</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仅在要执行某些Vue方法时</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于您没有执行Vue方法，而是调用了javascript函数，因此需要使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onchange</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性来调用javascript函数</font></font></p>

<pre><code>&lt;select name="LeaveType" onchange="onChange(this.value)" class="form-control"&gt;<font></font>
 &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
 &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
function onChange(value) {<font></font>
  console.log(value);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要调用Vue方法，请按以下步骤操作-</font></font></p>

<pre><code>&lt;select name="LeaveType" @change="onChange($event)" class="form-control"&gt;<font></font>
 &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
 &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
new Vue({<font></font>
  ...<font></font>
  ...<font></font>
  methods:{<font></font>
    onChange:function(event){<font></font>
       console.log(event.target.value);<font></font>
    }<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在select元素上</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-model</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据属性来绑定值。</font></font></p>

<pre><code>&lt;select v-model="selectedValue" name="LeaveType" onchange="onChange(this.value)" class="form-control"&gt;<font></font>
 &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
 &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
new Vue({<font></font>
    data:{<font></font>
        selectedValue : 1, // First option will be selected by default<font></font>
    },<font></font>
    ...<font></font>
    ...<font></font>
    methods:{<font></font>
        onChange:function(event){<font></font>
            console.log(this.selectedValue);<font></font>
        }<font></font>
    }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助 ：-）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>v-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所选选项的值的值绑定。</font></font><a href="https://jsfiddle.net/13qpbzcn/3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;select name="LeaveType" @change="onChange($event)" class="form-control" v-model="key"&gt;<font></font>
   &lt;option value="1"&gt;Annual Leave/ Off-Day&lt;/option&gt;<font></font>
   &lt;option value="2"&gt;On Demand Leave&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
&lt;script&gt;<font></font>
var vm = new Vue({<font></font>
    data: {<font></font>
        key: ""<font></font>
    },<font></font>
    methods: {<font></font>
        onChange(event) {<font></font>
            console.log(event.target.value)<font></font>
        }<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://vuejs.org/v2/guide/forms.html#Select" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以看到更多参考</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
