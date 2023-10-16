---
layout: question
title:  从REST API获取的Vuex渲染数据
date:   2020-03-12T08:32:21.000Z
description: 对于这样的组件 <template>    <div>        <router-link  to="{name 'section', par...
img: 
author: 小胖泡芙
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这样的组件 </font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;router-link :to="{name:'section', params: { sectionId: firstSectionId }}"&gt;Start&lt;/router-link&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script lang="ts"&gt;<font></font>
    import { mapActions } from "vuex"<font></font>
<font></font>
    export default {<font></font>
        mounted() {<font></font>
            this.getSectionId()<font></font>
        },<font></font>
        computed: {<font></font>
            firstSectionId() {<font></font>
                return this.$store.state.firstSectionId<font></font>
            }<font></font>
        },<font></font>
        methods: mapActions(["getSectionId"])<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店：</font></font></p>

<pre><code>const store: any = new Vuex.Store({<font></font>
    state: {<font></font>
        firstSectionId: null<font></font>
    },<font></font>
    // actions,<font></font>
    // mutations<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在一个Web请求</font></font><code>getSectionId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的行动，并会以异步方式获取数据并调用的突变，将填补</font></font><code>firstSectionId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在最初的渲染</font></font><code>firstSectionId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我得到的是一个必需的参数渲染的过程中丢失的警告</font></font><code>router-link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里添加不是问题</font></font><code>v-if="firstSectionId"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是通常，从服务器获取要显示的数据的方法是什么？</font><font style="vertical-align: inherit;">目前，我所有的组件都在检查渲染之前存储中是否存在数据，这是正常现象还是有更好的方法等待渲染之前加载数据？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1140篇《从REST API获取的Vuex渲染数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，如果您将状态预设为与预期结果相同类型的空值（当然，如果您知道预期的结果），则可以跳过一些检查，例如，如果您有一组项目，则从</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它不会破坏</font></font><code>v-for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令，</font></font><code>.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查和类似的数据访问尝试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是通常，添加</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是很正常的事情。</font><a href="https://router.vuejs.org/en/advanced/data-fetching.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">文档中</font></a><font style="vertical-align: inherit;">有</font></font><a href="https://router.vuejs.org/en/advanced/data-fetching.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一章对此进行了</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并检查属性是否存在正是所建议的内容。</font><font style="vertical-align: inherit;">它提到的另一种可能的解决方案是在</font></font><code>beforeRouteEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">guard </font><font style="vertical-align: inherit;">内部获取数据</font><font style="vertical-align: inherit;">，以确保您始终可以使用已有的数据访问组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终，两种解决方案都是正确的，它们之间的决策更多是关于UX / UI的问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
