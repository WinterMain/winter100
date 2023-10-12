---
layout: question
title:  我可以使用webpack分别生成CSS和JS吗？
date:   2020-03-23T07:47:48.000Z
description: 我有：我要捆绑的JS文件。我想编译为CSS的LESS文件（将\`imports解析为一个包）。我希望将它们指定为两个单独的输入，并具有两个单独...
img: 
author: 樱小胖Mandy
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要捆绑的JS文件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想编译为CSS的LESS文件（将@imports解析为一个包）。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望将它们指定为两个单独的输入，并具有两个单独的输出（可能通过extract-text-webpack-plugin）。</font><font style="vertical-align: inherit;">Webpack具有所有适当的插件/加载器来进行编译，但似乎不喜欢这种分离。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看到了一些人的示例，这些人直接从JS需要他们的LESS文件，例如</font></font><code>require('./app.less');</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其原因仅是告诉Webpack将这些文件包含到捆绑包中。</font><font style="vertical-align: inherit;">这只允许您只有一个入口点，但是对我来说似乎真的很不对头-为什么当与我的JS代码无关的时候我在我的JS中要求LESS？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用多个入口点，将入口JS和主LESS文件都交到其中，但是当使用多个入口点时，webpack会生成一个在加载时不执行JS的捆绑包-捆绑了所有捆绑包，但不知道在启动时应该执行什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是使用webpack错了吗？</font><font style="vertical-align: inherit;">我应该为这些单独的模块运行单独的webpack实例吗？</font><font style="vertical-align: inherit;">如果我不打算将Webpack用于非JS资产，是否应该将它们打包使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2938篇《我可以使用webpack分别生成CSS和JS吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
