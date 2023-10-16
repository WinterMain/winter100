---
layout: question
title:  如何在Lodash防抖中正确使用Vue JS手表
date:   2020-03-13T12:24:49.000Z
description: 我正在使用lodash在这样的组件上调用去抖功能：...import _ from 'lodash';export default {    ...
img: 
author: Near泡芙
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用lodash在这样的组件上调用去抖功能：</font></font></p>

<pre><code>...<font></font>
import _ from 'lodash';<font></font>
<font></font>
export default {<font></font>
    store,<font></font>
    data: () =&gt; {<font></font>
        return {<font></font>
            foo: "",<font></font>
        }<font></font>
    },<font></font>
<font></font>
    watch: {<font></font>
        searchStr: _.debounce(this.default.methods.checkSearchStr(str), 100)<font></font>
    },<font></font>
<font></font>
    methods: {<font></font>
        checkSearchStr(string) {<font></font>
            console.log(this.foo) // &lt;-- ISSUE 1<font></font>
            console.log(this.$store.dispatch('someMethod',string) // &lt;-- ISSUE 2<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题1是我的方法</font></font><code>checkSearchStr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道</font></font><code>foo</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2是我的商店也</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过调用时</font><font style="vertical-align: inherit;">我的方法不知道</font></font><code>_.debounce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">正确的用法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1548篇《如何在Lodash防抖中正确使用Vue JS手表》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
