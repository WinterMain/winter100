---
layout: question
title:  将Nuxt模块放入Storybook
date:   2020-03-24T09:34:09.000Z
description: 我尝试使用Nuxt项目中的组件制作故事书。到目前为止，我已经展示了这些组件，但是它们全部都利用了至少一个模块，并且我找不到导入它们的方法。我似乎并没有单独...
img: 
author: 乐ItachiJinJin
category: question
answer: 0
tags: webpack Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用Nuxt项目中的组件制作故事书。</font><font style="vertical-align: inherit;">到目前为止，我已经展示了这些组件，但是它们全部都利用了至少一个模块，并且我找不到导入它们的方法。</font><font style="vertical-align: inherit;">我似乎并没有单独和我的奋斗</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://forum.vuejs.org/t/nuxt-js-and-storybook/26239" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://forum.vuejs.org/t/nuxt-js-and-storybook/26239</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><br>
<a href="https://github.com/derekshull/nuxt-starter-kit-v2/issues/1" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/derekshull/nuxt-starter-kit- v2 / issues / 1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但我希望有人找到了解决方案。 
   </font></font><br><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.storybook / webpack.config.js：</font></font></strong></p>

<pre><code>const path = require("@storybook\vue\dist\server\config\defaults\webpack.config.js");<font></font>
<font></font>
module.exports = {<font></font>
  module: {<font></font>
    rules: [<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        loaders: ["style-loader", "css-loader", "sass-loader"],<font></font>
        include: path.resolve(__dirname, "../")<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.storybook / config.js：</font></font></strong></p>

<pre><code>import { configure } from '@storybook/vue';<font></font>
import Vue from 'vue';<font></font>
<font></font>
const components = require.context('../components', true, /\.vue$/)<font></font>
const stories = require.context('../components/stories', true, /.stories.js$/)<font></font>
<font></font>
components.keys().forEach(filename =&gt; {<font></font>
  const [, componentName] = filename.match(/([\w-]+)(.vue)/)<font></font>
  Vue.component(componentName, components(filename).default)<font></font>
})<font></font>
<font></font>
function loadStories() {<font></font>
  stories.keys().forEach((filename) =&gt; req(filename))<font></font>
};<font></font>
<font></font>
<font></font>
configure(loadStories, module);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3577篇《将Nuxt模块放入Storybook》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
