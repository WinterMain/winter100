---
layout: question
title:  Vue CLI源映射以样式化vue组件文件的一部分
date:   2020-03-12T06:43:10.000Z
description: 我正在玩Vue CLI项目。我已经配置了启动项目，设置了一些开发更改，例如：package.json"dependencies"  {    "...
img: 
author: 
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在玩Vue CLI项目。</font><font style="vertical-align: inherit;">我已经配置了启动项目，设置了一些开发更改，例如：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>"dependencies": {<font></font>
    "bootstrap": "^4.3.1",<font></font>
    "core-js": "^3.0.1",<font></font>
    "preload-it": "^1.2.2",<font></font>
    "register-service-worker": "^1.6.2",<font></font>
    "vue": "^2.6.10",<font></font>
    "vue-router": "^3.0.3",<font></font>
    "vuetify": "^1.5.14",<font></font>
    "vuex": "^3.1.1"<font></font>
},<font></font>
"devDependencies": {<font></font>
    "@vue/cli-plugin-babel": "^3.7.0",<font></font>
    "@vue/cli-plugin-pwa": "^3.7.0",<font></font>
    "@vue/cli-service": "^3.7.0",<font></font>
    "fontello-cli": "^0.4.0",<font></font>
    "node-sass": "^4.9.0",<font></font>
    "sass-loader": "^7.1.0",<font></font>
    "stylus": "^0.54.5",<font></font>
    "stylus-loader": "^3.0.2",<font></font>
    "vue-cli-plugin-vuetify": "^0.5.0",<font></font>
    "vue-template-compiler": "^2.5.21",<font></font>
    "vuetify-loader": "^1.2.2"<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
    configureWebpack: {<font></font>
        devtool: process.env.NODE_ENV === 'development'<font></font>
            ? 'inline-source-map'<font></font>
            : false,<font></font>
    },<font></font>
    css: {<font></font>
        sourceMap: process.env.NODE_ENV === 'development'<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
    presets: [<font></font>
        [<font></font>
            '@vue/app',<font></font>
            { useBuiltIns: 'entry' }<font></font>
        ]<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是到vue文件的源映射仍然会错误生成（到scss文件可以正常工作）。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/11502/images/thumbnails/1583995262780.png" data-src="https://www.samyoc.com//uploads/users/11502/images/1583995262780.png" rel="noreferrer"><img src="https://i.stack.imgur.com/YVSmk.png" alt="源图预览"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击href到vue组件后</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/11502/images/thumbnails/1583995262784.png" data-src="https://www.samyoc.com//uploads/users/11502/images/1583995262784.png" rel="noreferrer"><img src="https://i.stack.imgur.com/TApCx.png" alt="来源标签"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack：//./中相同文件的很多版本</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在源代码编辑器中只能看到标记中的部分（可能是原因）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未使用已挂载文件系统工作空间中的文件</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是原始文件的样子-可以通过Chrome devtools对其进行编辑
</font></font><a href="https://www.samyoc.com//uploads/users/11502/images/thumbnails/1583995262786.png" data-src="https://www.samyoc.com//uploads/users/11502/images/1583995262786.png" rel="noreferrer"><img src="https://i.stack.imgur.com/yr1uv.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以解决，以便元素检查器选项卡（样式）也可以提供适当的源目标？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
最简单的设置：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
安装Vue CLI（3.7）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
添加我的vue.config.js（以启用sourcemap）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
运行</font></font><code>npm run serve</code><br>
<a href="https://www.samyoc.com//uploads/users/11502/images/thumbnails/1583995262787.png" data-src="https://www.samyoc.com//uploads/users/11502/images/1583995262787.png" rel="noreferrer"><img src="https://i.stack.imgur.com/8H3UW.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
与Vue CLI 3.5相同</font></font></p>

<p>I also created repo with test project, but like I wrote it is just startup project with my config.
<a href="https://github.com/l00k/vue-sample" rel="noreferrer">https://github.com/l00k/vue-sample</a></p>

<p><strong>EDIT 3</strong>
Vue-cli github issue
<a href="https://github.com/vuejs/vue-cli/issues/4029" rel="noreferrer">https://github.com/vuejs/vue-cli/issues/4029</a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1008篇《Vue CLI源映射以样式化vue组件文件的一部分》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
