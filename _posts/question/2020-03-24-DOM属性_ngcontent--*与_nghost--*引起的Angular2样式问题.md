---
layout: question
title:  DOM属性_ngcontent- \*与_nghost- \*引起的Angular2样式问题
date:   2020-03-24T01:55:16.000Z
description: 我在scss和cli中遇到问题：angular _nghost-fyw-1在运行时将属性添加到apps标记（组件）。同时，它向我的CSS添加了一个属性选择...
img: 
author: 古一
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在scss和cli中遇到问题：angular </font></font><code>_nghost-fyw-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时</font><font style="vertical-align: inherit;">将属性添加</font><font style="vertical-align: inherit;">到apps标记（组件）。</font><font style="vertical-align: inherit;">同时，它向我的CSS添加了一个属性选择器，</font></font><code>_ngcontent-fyw-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这当然是行不通的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否知道如何更改/避免这种行为？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：它也适用于常规CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的组件.scss文件如下所示：</font></font></p>

<pre><code>my-comp {<font></font>
  h1 {<font></font>
    background-color: red;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3186篇《DOM属性_ngcontent- *与_nghost- *引起的Angular2样式问题》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:: ng-deep对我有用，添加到app.component.scss中：</font></font></p>

<pre><code>:host ::ng-deep .mat-card {<font></font>
    background: #000 !important;<font></font>
    color: #fff;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文档（</font></font><a href="https://angular.io/guide/component-styles" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://angular.io/guide/component-styles</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）表示：</font></font></p>

<blockquote>
  <p>The shadow-piercing descendant combinator is deprecated and support is
  being removed from major browsers and tools. As such we plan to drop
  support in Angular (for all 3 of /deep/, &gt;&gt;&gt; and ::ng-deep). Until
  then ::ng-deep should be preferred for a broader compatibility with
  the tools.</p>
</blockquote>

<p>Use it, with precaution...</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>::ng-deep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为一段时间。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
另请参见以下注释。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原版的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有提供太多细节，您无法在其中添加样式以及使用选择器定位哪些元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望样式跨越元素边界，则“官方”方式是使用</font></font><code>&gt;&gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">like</font></font></p>

<pre><code>:host &gt;&gt;&gt; h1 {<font></font>
  background-color: red;<font></font>
}<font></font>
</code></pre>

<ul>
<li><code>:host</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 定位到当前元素。</font></font></li>
<li><code>&gt;&gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>/deep/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）使Angular忽略</font></font><code>_nghost-xxx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于组件样式封装仿真的属性。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参见</font></font><a href="https://stackoverflow.com/questions/36214546/styles-in-component-for-d3-js-do-not-show-in-angular-2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">D3.js组件中的样式未在angular 2中显示</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
