---
layout: question
title:  如何在Vue中使用jQuery插件
date:   2020-03-11T12:18:25.000Z
description: 我在VueJS中构建Web应用程序，但是遇到问题。我想使用jQuery扩展（具体来说是cropit），但是我不知道如何正确地实例化/要求/导入它而不会出错...
img: 
author: 古一达蒙
category: question
answer: 0
tags: jQuery
topic: jQuery
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在VueJS中构建Web应用程序，但是遇到问题。</font><font style="vertical-align: inherit;">我想使用jQuery扩展（具体来说是cropit），但是我不知道如何正确地实例化/要求/导入它而不会出错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为我的应用程序使用官方的CLI工具和webpack模板。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在main.js文件中包含了这样的jQuery：</font></font></p>

<pre><code>import jQuery from 'jQuery'<font></font>
window.jQuery = jQuery<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我正在构建一个图像编辑器组件，我想在其中实例化爬行： </font></font></p>

<pre><code>export default {<font></font>
  ready () {<font></font>
    $(document).ready(function ($) {<font></font>
      $('#image-cropper-wrapper-element').cropit({ /* options */ })<font></font>
    })<font></font>
  },<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我总是出错...现在我的问题是如何通过NPM / Webpack / Vue正确实例化jQuery和插件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第798篇《如何在Vue中使用jQuery插件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
