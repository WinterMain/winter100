---
layout: question
title:  Vue 2-变异道具vue-warn
date:   2020-03-09T14:54:23.000Z
description: 我开始https //laracasts.com/series/learning-vue-step-by-step系列。我在上课Vue，Laravel和A...
img: 
author: 泡芙小卤蛋Tom
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开始</font></font><a href="https://laracasts.com/series/learning-vue-step-by-step" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://laracasts.com/series/learning-vue-step-by-step</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系列。</font><font style="vertical-align: inherit;">我在上课</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue，Laravel和AJAX</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时</font><strong><font style="vertical-align: inherit;">遇到</font></strong><font style="vertical-align: inherit;">了以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue.js：2574 [Vue警告]：避免直接更改道具，因为每当父组件重新渲染时，该值就会被覆盖。</font><font style="vertical-align: inherit;">而是使用基于属性值的数据或计算属性。</font><font style="vertical-align: inherit;">变异的道具：“列表”（位于component中）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font><strong><font style="vertical-align: inherit;">main.js中</font></strong><font style="vertical-align: inherit;">有此代码</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre><code>Vue.component('task', {<font></font>
    template: '#task-template',<font></font>
    props: ['list'],<font></font>
    created() {<font></font>
        this.list = JSON.parse(this.list);<font></font>
    }<font></font>
});<font></font>
new Vue({<font></font>
    el: '.container'<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道</font><font style="vertical-align: inherit;">当我覆盖列表属性时</font><font style="vertical-align: inherit;">问题出在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">created（）中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我是Vue的新手，所以我完全不知道如何解决它。</font><font style="vertical-align: inherit;">任何人都知道如何（并请解释为什么）修复它？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第331篇《Vue 2-变异道具vue-warn》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil启人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的！vue2中的变异属性是反模式。</font><font style="vertical-align: inherit;">但是...只要使用其他规则来打破规则，然后继续吧！</font><font style="vertical-align: inherit;">您需要在paret范围内的组件属性中添加.sync修饰符。
</font></font><code>&lt;your-awesome-components :custom-attribute-as-prob.sync="value" /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">we很简单，我们杀死蝙蝠侠😁</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Near米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人总是建议您是否需要对道具进行突变，首先将其传递给计算属性，然后从那里返回，然后一个人就可以轻松地对道具进行突变，即使您可以追踪道具突变（如果这些道具正在从另一个突变）组件还是我们也可以观看。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要直接在组件中更改道具，如果需要更改，请设置一个新属性，如下所示：</font></font></p>

<pre><code>data () {<font></font>
    return () {<font></font>
        listClone: this.list<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更改listClone的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也面临这个问题。</font><font style="vertical-align: inherit;">我使用</font></font><code>$on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">后警告消失了</font></font><code>$emit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就像用法</font></font><code>$on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$emit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议将数据从子组件发送到父组件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支撑下来，事件向上。</font><font style="vertical-align: inherit;">这就是Vue的模式。</font><font style="vertical-align: inherit;">关键是，如果您尝试变异从父代传来的道具。</font><font style="vertical-align: inherit;">它将无法工作，只会被父组件重复覆盖。</font><font style="vertical-align: inherit;">子组件只能发出一个事件以通知父组件执行某项操作。</font><font style="vertical-align: inherit;">如果您不喜欢这些限制，则可以使用VUEX（实际上，这种模式会吸收复杂的组件结构，您应该使用VUEX！）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
