---
layout: question
title:  有没有办法将变量从javascript导入到sass，反之亦然？
date:   2020-03-23T07:41:50.000Z
description: 我正在制作一个依赖于块概念的css网格系统。所以我有一个基本文件，如：$max-columns  4;$block-width  220px;$b...
img: 
author: 樱小胖Mandy
category: question
answer: 3
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在制作一个依赖于块概念的css网格系统。</font><font style="vertical-align: inherit;">所以我有一个基本文件，如：</font></font></p>

<pre><code>$max-columns: 4;<font></font>
$block-width: 220px;<font></font>
$block-height: 150px;<font></font>
$block-margin: 10px;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它由mixin使用：</font></font></p>

<pre><code>@mixin block ($rows, $columns, $max-columns) {<font></font>
  display: block;<font></font>
  float: left;<font></font>
  margin: $block-margin 0 0 $block-margin;<font></font>
  box-sizing: border-box;<font></font>
  width: ($block-width * $columns) - $block-margin;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我也希望javascript能够访问基本文件中的变量。</font><font style="vertical-align: inherit;">我当时想我可以创建一个不可见的div，并为其赋予$ block-width，$ block-height和$ block-margin属性并从中获取值。</font><font style="vertical-align: inherit;">但是max-columns不能直接映射到任何东西，因此我不得不想出一种hacky的方法来将它渲染到div中。</font><font style="vertical-align: inherit;">有没有一种更干净的方法可以将值从sass / css共享到javascript，反之亦然？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2923篇《有没有办法将变量从javascript导入到sass，反之亦然？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以使用</font></font><a href="https://www.npmjs.com/package/gulp-sass-vars-to-js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gulp-sass-vars-to-js完成</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它从您的.scss文件生成一个.js文件。</font><font style="vertical-align: inherit;">.js文件包含在.scss文件中声明的所有变量。</font><font style="vertical-align: inherit;">然后，您可以将“生成的js”“要求”到您的.js中</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想补充一点，现在有几种方法可以使用JSON在Sass和JavaScript之间共享数据。</font><font style="vertical-align: inherit;">这里有一些链接，详细介绍了各种技术：</font></font></p>

<ul>
<li><a href="http://css-tricks.com/making-sass-talk-to-javascript-with-json/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON使Sass与JavaScript对话</font></font></a>  </li>
<li><a href="http://hugogiraudel.com/2014/01/20/json-in-sass/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SassyJSON：与浏览器对话</font></font></a>  </li>
<li><a href="http://viget.com/extend/sharing-data-between-sass-and-javascript-with-json" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON在Sass和JavaScript之间共享数据</font></font></a>  </li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Sass中本地支持JSON导入可能只是时间问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用服务器端脚本读取sass文件，对其进行“解析”，然后将需要的值回显为javascript。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
