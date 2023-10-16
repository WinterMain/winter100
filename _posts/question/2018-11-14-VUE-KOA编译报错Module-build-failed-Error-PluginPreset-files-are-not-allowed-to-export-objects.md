---
layout: question
title:  VUE KOA编译报错Module build failed  Error  Plugin/Preset files are not allowed to export objects
date:   2018-11-14T09:56:43.000Z
description: VUE KOA编译的时候出现了以下问题Module build failed  Error  Plugin/Preset files are not allo...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1542189363432.png
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>VUE KOA编译的时候出现了以下问题</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1542189363432.png" style="max-width:100%" /></p>

<pre>
<code>
Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/yld/Documents/work/YLD/samyoc_admin/node_modules/backpack-core/babel.js
    at createDescriptor (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/config-descriptors.js:178:11)
    at items.map (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/config-descriptors.js:109:50)
    at Array.map ()
    at createDescriptors (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)
    at createPresetDescriptors (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)
    at passPerPreset (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/config-descriptors.js:58:96)
    at cachedFunction (/Users/yld/Documents/work/YLD/samyoc_admin/node_modules/@babel/core/lib/config/caching.js:33:19)
</code></pre>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第105篇《VUE KOA编译报错Module build failed  Error  Plugin/Preset files are not allowed to export objects》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.11.14</span>
          </div>
          <div class="discuss-comment"><p>搜了很久的资料发现是插件不兼容的问题</p>

<p>我在package.json里面加入了如下的代码，如果你也遇到这个问题，可以尝试把对应的版本改为如下的</p>

<pre>
<code>
    &quot;babel-core&quot;: &quot;^6.26.0&quot;,
    &quot;babel-loader&quot;: &quot;^7.1.2&quot;,
    &quot;babel-plugin-transform-runtime&quot;: &quot;^6.23.0&quot;,
    &quot;babel-preset-env&quot;: &quot;^1.6.1&quot;,
    &quot;babel-preset-stage-0&quot;: &quot;^6.24.1&quot;,
</code></pre>

<p>&nbsp;</p>
</div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
