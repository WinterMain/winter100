---
layout: question
title:  如何使用Nuxt在html元素上设置lang属性？
date:   2020-03-23T07:56:30.000Z
description: 使用文件nuxt.config.js文件，head可以自定义内容以添加一些元或其他内容：module.exports = {  /\*  \*\* He...
img: 
author: Tom凯
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用文件</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以自定义内容以添加一些元或其他内容：</font></font></p>

<pre><code>module.exports = {<font></font>
  /*<font></font>
  ** Headers of the page<font></font>
  */<font></font>
  head: {<font></font>
    title: 'awesome title',<font></font>
    meta: [<font></font>
      { charset: 'utf-8' },<font></font>
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },<font></font>
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }<font></font>
    ],<font></font>
    link: [<font></font>
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }<font></font>
    ]<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我在文档中找不到任何可以设置</font></font><code>html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">属性的</font><font style="vertical-align: inherit;">内容-我想设置</font></font><code>lang</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">有没有办法做到这一点？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">吃花椒的猫酱</span>
            <span class="discuss-time">2021.03.22</span>
          </div>
          <div class="discuss-comment"><p>根目录下加个app.html</p><p>&lt;!DOCTYPE&nbsp;html&gt;</p><p>&lt;html&nbsp;lang="zh-Hans"&gt;</p><p>&nbsp; &lt;head&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;{{HEAD}}</p><p>&nbsp; &lt;/head&gt;</p><p>&nbsp; &lt;body&gt;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;{{APP}}</p><p>&nbsp; &lt;/body&gt;</p><p>&lt;/html&gt;</p><p>试试这个能不能解决你的问题，改配置文件会多一个data-n-head属性，不建议</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
