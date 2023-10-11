---
layout: question
title:  如何在Laravel Mix中安装真棒字体
date:   2020-03-23T14:00:32.000Z
description: 我尝试使用Laravel Mix安装Font Awesome，但执行时run npm dev收到以下消息：  错误无法  在./~/font-aw...
img: 
author: 番长十三
category: question
answer: 4
tags: PHP Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用Laravel Mix安装Font Awesome，但执行时</font></font><code>run npm dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">收到以下消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误无法</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  在./~/font-awesome/scss/font-awesome.scss中</font><font style="vertical-align: inherit;">编译1错误</font><font style="vertical-align: inherit;">错误模块构建失败：/ ** ^在“ ...加载样式”后无效的CSS：预期为1个选择器或at-规则是/var/www/html/blog/node_modules/font-awesome/scss/font-awesome.scss中的“ var content = requi”（第1行，第1列）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我删除了文件中的注释，并尝试更改字体路径，但是它不能解决问题。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.mix.js</font></font></strong></p>

<pre><code>mix.js('resources/assets/js/app.js', 'public/js')<font></font>
   .sass('resources/assets/sass/app.scss', 'public/css')<font></font>
   .copy('node_modules/font-awesome/fonts/', 'public/fonts')<font></font>
   .sass('node_modules/font-awesome/scss/font-awesome.scss', 'public/css')<font></font>
   .version();<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fontawesome.scss</font></font></strong></p>

<pre><code>@import "variables";<font></font>
@import "mixins";<font></font>
@import "path";<font></font>
@import "core";<font></font>
@import "larger";<font></font>
@import "fixed-width";<font></font>
@import "list";<font></font>
@import "bordered-pulled";<font></font>
@import "animated";<font></font>
@import "rotated-flipped";<font></font>
@import "stacked";<font></font>
@import "icons";<font></font>
@import "screen-reader";<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_variable.scss</font></font></strong></p>

<pre><code>// Variables<font></font>
// --------------------------<font></font>
<font></font>
$fa-font-path:        "../fonts" !default;<font></font>
$fa-font-size-base:   14px !default;<font></font>
$fa-line-height-base: 1 !default;<font></font>
// $fa-font-path:        "//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts" !default; // for referencing Bootstrap CDN font files directly<font></font>
$fa-css-prefix:       fa !default;<font></font>
$fa-version:          "4.7.0" !default;<font></font>
$fa-border-color:     #eee !default;<font></font>
$fa-inverse:          #fff !default;<font></font>
$fa-li-width:         (30em / 14) !default;<font></font>
// Continue...<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3117篇《如何在Laravel Mix中安装真棒字体》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install font-awesome --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路径之前添加〜/ </font></font></p>

<pre><code>@import "~/font-awesome/scss/font-awesome.scss";
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近为Laravel5.6撰写了有关它的博客。</font><font style="vertical-align: inherit;">链接到博客是</font></font><a href="https://www.samundra.com.np/integrating-font-awesome-with-laravel-5.x-using-webpack/1574" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.samundra.com.np/integrating-font-awesome-with-laravel-5.x-using-webpack/1574</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤类似于以上描述。</font><font style="vertical-align: inherit;">但就我而言，我不得不做一些额外的步骤，例如在“ public”目录中将webfonts路径配置为font-awesome。</font><font style="vertical-align: inherit;">在Laravel mix等中设置资源根。您可以在博客中找到详细信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将链接留在这里，以便为那些无法解决上述问题的人们提供帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装真棒字体，您首先应该使用npm进行安装。</font><font style="vertical-align: inherit;">因此，在您的项目根目录中，输入：</font></font></p>

<pre><code>npm install font-awesome --save
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（当然，我假设您已经安装了node.js和npm。并且您已经</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的根目录中</font><font style="vertical-align: inherit;">完成</font><font style="vertical-align: inherit;">了此工作）</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后编辑</font></font><code>resources/assets/sass/app.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，并在此行的顶部添加：</font></font></p>

<pre><code>@import "node_modules/font-awesome/scss/font-awesome.scss";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以执行以下操作：</font></font></p>

<pre><code>npm run dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在正确的文件夹中生成资源的最小版本。</font><font style="vertical-align: inherit;">如果要缩小它们，可以运行：</font></font></p>

<pre><code>npm run production
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以使用字体。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Laravel&gt; = 5.5</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm install font-awesome --save</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>@import "~font-awesome/scss/font-awesome.scss";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>resources/assets/saas/app.scss</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>npm run watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或什至</font></font><code>npm run production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
