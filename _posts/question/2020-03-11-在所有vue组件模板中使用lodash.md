---
layout: question
title:  在所有vue组件模板中使用lodash
date:   2020-03-11T03:07:47.000Z
description: 我可以_在所有vue组件中使用lodash 吗？例如：我的组件组织如下：App.vue> Parent.vue>Child.vue我希望所...
img: 
author: 三千曜米亚
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有vue组件中</font><font style="vertical-align: inherit;">使用lodash </font><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的组件组织如下：</font></font></p>

<p><code>App.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; </font></font><code>Parent.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;</font></font><code>Child.vue</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望所有组件都能访问</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash而不在每个组件vm中定义</font></font><code>data</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">===</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也在尝试使用</font></font><a href="https://vuejs.org/guide/mixins.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mixins</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有用。</font><font style="vertical-align: inherit;">但是结果不是这样，</font></font><code>_().isEmpty()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font><font style="vertical-align: inherit;">不是预期</font><font style="vertical-align: inherit;">的</font></font><code>_.isEmpty()</code></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看vue-lodash ！！</font><font style="vertical-align: inherit;">这是在vue中使用lodash的新包装。</font><font style="vertical-align: inherit;">您可以使用</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue ._。random（20）//用于获取20之间的随机数</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this ._。random（20）//或您要使用的其他方法</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何组件文件中：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点迟到了，但通过我找到一种方法，导入lodash和其他图书馆为我所有的.vue文件的研究，我遇到的WebPack </font></font><a href="https://webpack.js.org/plugins/provide-plugin/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ProvidePlugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，达到了OP请求几乎没有什么大惊小怪的一切。</font><font style="vertical-align: inherit;">要实现此解决方案，请遵循此出色的</font></font><a href="https://www.youtube.com/watch?v=IYuh8hIyvfE" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会注意到，在教程中，他留</font></font><code>import "jquery"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在了app.js文件中，这不是必需的。</font><font style="vertical-align: inherit;">具有自动导入功能的插件。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
