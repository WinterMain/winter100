---
layout: question
title:  如何在不使用vue-cli的情况下使用vue-loader
date:   2020-03-12T16:37:54.000Z
description: 我试图将使用webpack转换.vue文件的Vue项目的绝对最小示例放在一起。我的目标是详细了解每个构建步骤。大多数教程建议使用vue-cli和使用w...
img: 
author: Harry伽罗
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将使用webpack转换.vue文件的Vue项目的绝对最小示例放在一起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的目标是详细了解每个构建步骤。</font><font style="vertical-align: inherit;">大多数教程建议使用</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和使用</font></font><code>webpack-simple</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置。</font><font style="vertical-align: inherit;">尽管该设置有效，但出于我的简单目的，这似乎有些过分。</font><font style="vertical-align: inherit;">现在，我不希望babel，linting或具有热模块重新加载功能的实时Web服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个最小的例子就是</font></font><code>import Vue from 'vue'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行得通！</font><font style="vertical-align: inherit;">Webpack将vue库和我自己的代码编译为一个捆绑包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是现在，我想将</font></font><a href="https://vue-loader.vuejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-loader</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到webpack配置中，以便</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件可以被编译。</font><font style="vertical-align: inherit;">我已经安装了vue loader：</font></font></p>

<pre><code>npm install vue-loader<font></font>
npm install css-loader<font></font>
npm install vue-template-compiler <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且我已经将vue-loader添加到webpack配置中：</font></font></p>

<pre><code>var path = require('path')<font></font>
<font></font>
module.exports = {<font></font>
  entry: './dev/app.js',<font></font>
  output: {<font></font>
    filename: 'bundle.js',<font></font>
    path: path.resolve(__dirname, 'dist')<font></font>
  },<font></font>
  module: {<font></font>
    rules: [<font></font>
      {<font></font>
        test: /\.vue$/,<font></font>
        loader: 'vue-loader',<font></font>
        options: {<font></font>
          loaders: {<font></font>
          }<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
  resolve: {<font></font>
    alias: {<font></font>
      'vue$': 'vue/dist/vue.esm.js'<font></font>
    }<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了hello.vue</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;p&gt;{{greeting}} World&lt;/p&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
    data:function(){<font></font>
        return {<font></font>
            greeting:"Hi there"<font></font>
        }<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在我的应用程序中导入“ hello”</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import hello from "./hello.vue";<font></font>
<font></font>
    new Vue({<font></font>
      el: '#app',<font></font>
      template:`&lt;div&gt;&lt;hello&gt;&lt;/hello&gt;&lt;/div&gt;`,<font></font>
      created: function () {   <font></font>
        console.log("Hey, a vue app!")<font></font>
      }<font></font>
    })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载程序似乎没有拾取</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，但出现错误：</font></font></p>

<pre><code>Module not found: Error: Can't resolve './hello.js' 
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>import hello from 'hello.vue'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取错误时：</font></font></p>

<pre><code>Unknown custom element: &lt;hello&gt; - did you register the component correctly?
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我错过了一步吗？</font><font style="vertical-align: inherit;">我是否以正确的方式导入.vue组件？</font><font style="vertical-align: inherit;">如何使用app.js中的hello.vue组件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1366篇《如何在不使用vue-cli的情况下使用vue-loader》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
