---
layout: question
title:  使用Webpack在vue.js项目中的（\`）登录路径中使用ES6导入
date:   2020-03-09T14:51:31.000Z
description: 我正在开始一个新的vue.js项目，所以我使用了vue-cli工具来搭建一个新的webpack项目（即vue init webpack）。在浏览生成的...
img: 
author: 宝儿小哥小卤蛋
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开始一个新的vue.js项目，所以我使用了vue-cli工具来搭建一个新的webpack项目（即</font></font><code>vue init webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览生成的文件时，我注意到文件中的以下导入</font></font><code>src/router/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import Router from 'vue-router'<font></font>
import Hello from '@/components/Hello' // &lt;- this one is what my qusestion is about<font></font>
<font></font>
Vue.use(Router)<font></font>
<font></font>
export default new Router({<font></font>
    routes: [<font></font>
        {<font></font>
            path: '/',<font></font>
            name: 'Hello',<font></font>
            component: Hello<font></font>
        }<font></font>
    ]<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我之前没有</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路径中</font><font style="vertical-align: inherit;">看到at符号（</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我怀疑它允许相对路径（也许？），但是我想确保我了解它的真正作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了在线搜索，但是找不到解释（可能是因为搜索“在符号处”或使用文字字符</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能作为搜索条件）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条路径的</font><font style="vertical-align: inherit;">作用是</font><font style="vertical-align: inherit;">什么（链接到文档非常好），这是es6吗？</font><font style="vertical-align: inherit;">一个webpack的东西？</font><font style="vertical-align: inherit;">vue-loader东西？</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></h1>

<p>Thanks Felix Kling for pointing me to another duplicate stackoverflow question/answer about this same question.</p>

<p>While the comment on the other stackoverflow post isn't the exact answer to this question (it wasn't a babel plugin in my case) it did point me in the correct direction to find what it was. </p>

<p>In in the scaffolding that vue-cli cranks out for you, part of the base webpack config sets up an alias for .vue files:</p>

<p><a href="https://www.samyoc.com//uploads/users/4630/images/thumbnails/1583765364652.png" data-src="https://www.samyoc.com//uploads/users/4630/images/1583765364652.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Nz1TS.png" alt="项目中的别名位置"></a></p>

<p>This makes sense both in the fact that it gives you a relative path from the src file <em>and</em> it removes the requirement of the <code>.vue</code> at the end of the import path (which you normally need). </p>

<p>Thanks for the help!</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第324篇《使用Webpack在vue.js项目中的（@）登录路径中使用ES6导入》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
