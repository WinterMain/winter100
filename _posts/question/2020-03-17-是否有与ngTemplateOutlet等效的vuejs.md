---
layout: question
title:  是否有与ngTemplateOutlet等效的vue.js？
date:   2020-03-17T07:05:41.000Z
description: vue.js是否具有Angular \*ngTemplateOutlet指令的等效项？假设我有一些这样定义的组件：    <template>    ...
img: 
author: 神乐卡卡西
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue.js是否具有Angular </font></font><code>*ngTemplateOutlet</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令</font><font style="vertical-align: inherit;">的等效项</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">假设我有一些这样定义的组件：</font></font></p>

<pre><code>    &lt;template&gt;<font></font>
        &lt;div id="independentComponent"&gt;<font></font>
            Hello, {{firstName}}!<font></font>
        &lt;/div&gt;<font></font>
    &lt;/template&gt;<font></font>
    &lt;script&gt;<font></font>
        export default {<font></font>
            name: "independentComponent",<font></font>
            props: ['firstName']<font></font>
        }<font></font>
    &lt;/script&gt;<font></font>
<font></font>
    ...<font></font>
<font></font>
    &lt;template&gt;<font></font>
        &lt;div id="someChildComponent"&gt;<font></font>
            &lt;slot&gt;&lt;/slot&gt;<font></font>
            &lt;span&gt;Let's get started.&lt;/span&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/template&gt;<font></font>
    &lt;script&gt;<font></font>
        export default {<font></font>
            name: "someChildComponent"<font></font>
        }<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够做这样的事情：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div id="parentComponent"&gt;<font></font>
        &lt;template #indepdentInstance&gt;<font></font>
            &lt;independentComponent :firstName="firstName" /&gt;<font></font>
        &lt;/template&gt;<font></font>
        &lt;someChildComponent&gt;<font></font>
            &lt;template #indepdentInstance&gt;&lt;/template&gt;<font></font>
        &lt;/someChildComponent&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
        name: "parentComponent",<font></font>
        components: {<font></font>
            someChildComponent,<font></font>
            independentComponent<font></font>
        },<font></font>
        data() {<font></font>
            return {<font></font>
                firstName: "Bob"<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular中，我可以通过</font></font></p>

<pre><code>&lt;div id="parentComponent"&gt;<font></font>
    &lt;someChildComponent&gt;<font></font>
        &lt;ng-container *ngTemplateOutlet="independentInstance"&gt;&lt;/ng-container&gt;<font></font>
    &lt;/someChildComponent&gt;<font></font>
<font></font>
    &lt;ng-template #independentInstance&gt;<font></font>
        &lt;independentComponent [firstName]="firstName"&gt;&lt;/independentComponent&gt;<font></font>
    &lt;/ng-template&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是看起来Vue要求将元素确切地写入模板中的DOM。</font><font style="vertical-align: inherit;">有没有什么方法可以内联引用元素并将其作为插槽传递给另一个组件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1883篇《是否有与ngTemplateOutlet等效的vue.js？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
