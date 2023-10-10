---
layout: question
title:  Nuxt js项目中的配置stylelint文件
date:   2020-04-03T02:55:32.000Z
description: 我是使用Nuxt js的新手，因此与nuxt.config.js文件相同。我试图获得如何在Nuxt js项目上设置stylelint文件并在每次按保存时运...
img: 
author: Tony凯
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt js的新手，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我试图获得如何</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">Nuxt js</font></strong><font style="vertical-align: inherit;">项目</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">stylelint</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">并在每次按保存时运行该</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">，因此</font><font style="vertical-align: inherit;">将应用</font><strong><font style="vertical-align: inherit;">stylelint</font></strong><font style="vertical-align: inherit;">规则。</font><font style="vertical-align: inherit;">我的意思是与</font><em><font style="vertical-align: inherit;">.eslintrc</font></em><font style="vertical-align: inherit;">类似，</font><font style="vertical-align: inherit;">但与</font><em><font style="vertical-align: inherit;">.stylelintrc</font></em><font style="vertical-align: inherit;">规则相同。</font><font style="vertical-align: inherit;">我已经安装了</font><em><font style="vertical-align: inherit;">stylelint stylelint-processor-html stylelint-config-standard</font></em><font style="vertical-align: inherit;">软件包，并将package.json脚本对象设置为</font><em><font style="vertical-align: inherit;">“ lint：css”：“ stylelint'src / ** / *。vue'”，</font></em><font style="vertical-align: inherit;">   所以如果我运行yarn / npm运行lint_css可以。</font><font style="vertical-align: inherit;">但是我想在每次按保存时自动执行</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js文件</font></font></p>

<pre><code>module.exports = {<font></font>
      head: {<font></font>
        title: 'my-project',<font></font>
        meta: [<font></font>
          {charset: 'utf-8'},<font></font>
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},<font></font>
          {hid: 'description', name: 'description', content: 'Nuxt.js project'}<font></font>
        ],<font></font>
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],<font></font>
      },<font></font>
      loading: {color: '#3B8070'},<font></font>
<font></font>
      plugins: [<font></font>
      ],<font></font>
<font></font>
      styleResources: {<font></font>
        scss: [<font></font>
          //<font></font>
        ]<font></font>
      },<font></font>
      build: {<font></font>
        extend(config, {isDev, isClient}) {<font></font>
          if (isDev &amp;&amp; isClient) {<font></font>
            config.module.rules.push({<font></font>
              enforce: 'pre',<font></font>
              test: /\.(js|vue)$/,<font></font>
              loader: 'eslint-loader',<font></font>
              exclude: /(node_modules)/<font></font>
            })<font></font>
          }<font></font>
        }<font></font>
      },<font></font>
      modules: ['']<font></font>
    }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3938篇《Nuxt js项目中的配置stylelint文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
