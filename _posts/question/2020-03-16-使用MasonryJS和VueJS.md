---
layout: question
title:  使用Masonry.JS和Vue.JS
date:   2020-03-16T07:32:43.000Z
description: masonry.js除了vue，我知道如何使用。但是，我在使它起作用并在vue框架中正确调用时遇到问题。我在创建或准备就绪的内部调用它，但似乎都无法正确地...
img: 
author: 西门路易
category: question
answer: 3
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>masonry.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了vue，</font><font style="vertical-align: inherit;">我知道如何使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，我在使它起作用并在vue框架中正确调用时遇到问题。</font><font style="vertical-align: inherit;">我在创建或准备就绪的内部调用它，但似乎都无法正确地形成网格。</font><font style="vertical-align: inherit;">我如何才能在框架内使用它？</font><font style="vertical-align: inherit;">哦，在此脚本之前，我确实在html中调用了jquery。</font><font style="vertical-align: inherit;">这是组件内部的内容：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以看到砖石通过用JS分配其高度并将项目更改为绝对位置来影响网格。</font><font style="vertical-align: inherit;">但是，它放置不正确。</font><font style="vertical-align: inherit;">它将它们堆叠在彼此之上，而不是像应该在网格中那样并排堆叠。 
</font></font><a href="https://www.samyoc.com//uploads/users/18665/images/thumbnails/1584343963422.png" data-src="https://www.samyoc.com//uploads/users/18665/images/1584343963422.png" rel="noreferrer"><img src="https://i.stack.imgur.com/L2ERr.png" alt="在此处输入图片说明"></a></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div class="projects--container"&gt;<font></font>
    &lt;div class="inner-section inner--options"&gt;<font></font>
        &lt;div class="grid"&gt;<font></font>
            &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
            &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
            &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
 export default{<font></font>
    ready: function () {<font></font>
        this.mason();<font></font>
    },<font></font>
     data: function () {<font></font>
         return {<font></font>
             options: [<font></font>
                 {<font></font>
                   option: 'projects',<font></font>
                     phrase: 'for clients',<font></font>
                     slogan: 'slogan...'<font></font>
                 },<font></font>
                 {<font></font>
                     option: 'sides',<font></font>
                     phrase: 'for us',<font></font>
                     slogan: 'we love what we make'<font></font>
                 },<font></font>
                 {<font></font>
                     option: 'moments',<font></font>
                     phrase: 'with the crew'<font></font>
                 }<font></font>
             ]<font></font>
         }<font></font>
     },<font></font>
     methods: {<font></font>
         revert: function () {<font></font>
             this.$dispatch('return-home', true)<font></font>
         },<font></font>
         mason: function () {<font></font>
             var $grid = $('.grid').masonry({<font></font>
                 itemSelector: '.grid-item',<font></font>
                 columnWidth: 250<font></font>
             });<font></font>
             $grid.masonry('layout');<font></font>
         }<font></font>
     },<font></font>
     events: {<font></font>
         'option-select': function (option) {<font></font>
         }<font></font>
     }<font></font>
<font></font>
 }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1810篇《使用Masonry.JS和Vue.JS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue2中，没有</font></font><code>ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期挂钩之</font><font style="vertical-align: inherit;">类的东西</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">相反，</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦实例按照您的想法“准备就绪”，就会触发生命周期挂钩。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vuejs.org/v2/guide/instance.html#Lifecycle-Diagram</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长凯</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是垂直堆栈只是表明砌体没有工作（没有codepen / plunkr很难分辨）。</font><font style="vertical-align: inherit;">@ riyaz-ali虽然有正确的想法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小宇宙Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜想</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做</font><em><font style="vertical-align: inherit;">的方法</font></em><font style="vertical-align: inherit;">是使用</font></font><a href="https://vuejs.org/v2/guide/components.html#Child-Component-Refs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">refs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ref</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">分配给</font><font style="vertical-align: inherit;">模板内的html元素，然后使用</font><font style="vertical-align: inherit;">已</font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="noreferrer"><font style="vertical-align: inherit;">挂载的callback中</font></a><font style="vertical-align: inherit;">的</font></font><a href="https://vuejs.org/v2/api/#vm-refs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vm。$ ref</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例属性即可</font><font style="vertical-align: inherit;">访问它</font><font style="vertical-align: inherit;">。</font></font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例代码可能如下所示：  </font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div class="grid" ref="grid"&gt;<font></font>
    &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
    &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
    &lt;div class="grid-item"&gt;&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  import Masonry from "masonry"; // or maybe use global scoped variable here<font></font>
  export default {<font></font>
    mounted: function(){<font></font>
      let $masonry = new Masonry(this.$refs.grid, {<font></font>
        // masonry options go in here<font></font>
       // see https://masonry.desandro.com/#initialize-with-vanilla-javascript<font></font>
      });<font></font>
    }<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
