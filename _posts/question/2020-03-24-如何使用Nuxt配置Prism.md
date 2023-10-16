---
layout: question
title:  如何使用Nuxt配置Prism
date:   2020-03-24T08:03:07.000Z
description: 如何配置Prism与Nuxt配合使用？我将其添加为nuxt.config.js文件中的供应商：// \* Build configurationbu...
img: 
author: DavaidTony宝儿
category: question
answer: 1
tags: node.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何配置Prism与Nuxt配合使用？</font><font style="vertical-align: inherit;">我将其添加为</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">的供应商</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// * Build configuration<font></font>
<font></font>
build: {<font></font>
  // * You can extend webpack config here<font></font>
  vendor: ['axios', 'prismjs'],<font></font>
<font></font>
  extend(config, ctx) {<font></font>
    if (ctx.isServer) {<font></font>
      config.externals = [<font></font>
        nodeExternals({<font></font>
          whitelist: [/^vuetify/]<font></font>
        })<font></font>
      ];<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在脚本部分的页面中导入它： </font></font></p>

<pre><code>&lt;script&gt;<font></font>
import Prism from'prismjs';<font></font>
<font></font>
export default {<font></font>
  data() {<font></font>
    return {<font></font>
      post: {}<font></font>
    };<font></font>
  },<font></font>
// more data...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那我该如何使用呢？</font><font style="vertical-align: inherit;">我尝试在挂载中调用它，但是它不起作用。</font><font style="vertical-align: inherit;">没有错误返回，但它不会更改任何内容。</font></font></p>

<pre><code>mounted() {<font></font>
  Prism.highlightAll();<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3496篇《如何使用Nuxt配置Prism》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来是可行的，只是忘了包含CSS样式。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
