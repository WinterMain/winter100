---
layout: question
title:  Rails中正确的SCSS资产结构
date:   2020-03-18T07:42:08.000Z
description: 所以，我有一个app/assets/stylesheets/看起来像这样的目录结构：   |-dialogs   |-mixins   |---b...
img: 
author: 猴子JinJin
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，我有一个</font></font><code>app/assets/stylesheets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来像这样</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">目录结构：</font></font></p>

<pre><code>   |-dialogs<font></font>
   |-mixins<font></font>
   |---buttons<font></font>
   |---gradients<font></font>
   |---vendor_support<font></font>
   |---widgets<font></font>
   |-pages<font></font>
   |-structure<font></font>
   |-ui_elements<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个目录中，都有多个sass部分（通常是* .css.scss，但是一个或两个* .css.scss.erb）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可能有很多假设，但是rails应该由于</font></font><code>*= require_tree .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">application.css中的内容</font><font style="vertical-align: inherit;">自动编译那些目录中的所有文件</font><font style="vertical-align: inherit;">，对吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近尝试通过删除所有颜色变量并将它们放在根</font></font><code>app/assets/stylesheets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹（_colors.css.scss）</font><font style="vertical-align: inherit;">中的文件中来重组这些文件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，我在</font></font><code>app/assets/stylesheets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名为master.css.scss </font><font style="vertical-align: inherit;">的根</font><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">创建了一个文件，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>// Color Palette <font></font>
@import "colors";<font></font>
<font></font>
// Mixins<font></font>
@import "mixins/buttons/standard_button";<font></font>
@import "mixins/gradients/table_header_fade";<font></font>
@import "mixins/vendor_support/rounded_corners";<font></font>
@import "mixins/vendor_support/rounded_corners_top";<font></font>
@import "mixins/vendor_support/box_shadow";<font></font>
@import "mixins/vendor_support/opacity";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不太了解Rails如何处理资产编译的顺序，但是显然这对我不利。</font><font style="vertical-align: inherit;">似乎没有文件意识到要导入任何变量或mixins，因此会引发错误，我无法编译。</font></font></p>

<pre><code>Undefined variable: "$dialog_divider_color".<font></font>
  (in /home/blah/app/assets/stylesheets/dialogs/dialog.css.scss.erb)<font></font>
<font></font>
Undefined mixin 'rounded_corners'.<font></font>
  (in /home/blah/app/assets/stylesheets/widgets.css.scss)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该变量</font></font><code>$dialog_divider_color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在_colors.css.scss中明确定义，并且</font></font><code>_master.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在导入颜色和所有我的mixins。</font><font style="vertical-align: inherit;">但是显然，rails没有得到该备忘录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以解决这些错误，还是需要将所有变量定义以及所有mixin导入放回每个文件中？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，</font></font><a href="https://stackoverflow.com/questions/8887824/persisting-scss-variables-in-rails-asset-pipeline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个家伙</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎并不认为有可能，但我希望他错了。</font><font style="vertical-align: inherit;">任何想法都将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2025篇《Rails中正确的SCSS资产结构》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://stackoverflow.com/questions/6269420/sass-global-variables-not-being-passed-to-partials"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>application.css.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来定义模板之间的导入和共享变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=&gt;这似乎只是名称问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法可以</font></font><a href="http://rwilcox.tumblr.com/post/9038701675/sass-variables-and-the-rails-3-1-asset-pipeline" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括所有内容并禁用此管道</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS的问题是，您不想自动添加所有文件。</font><font style="vertical-align: inherit;">浏览器加载和处理工作表的顺序至关重要。</font><font style="vertical-align: inherit;">因此，您最终总是会明确地导入所有CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">举个例子，假设您有一个</font></font><a href="https://github.com/necolas/normalize.css" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">normalize.css</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表，以获取默认外观，而不是所有可怕的不同浏览器实现。</font><font style="vertical-align: inherit;">这应该是浏览器加载的第一个文件。</font><font style="vertical-align: inherit;">如果仅将此表随机包含在CSS导入中的某个位置，则它将不仅覆盖浏览器的默认样式，而且覆盖所有在其之前加载的CSS文件中定义的样式。</font><font style="vertical-align: inherit;">变量和混入也是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://roytomeij.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Euruko2012</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">看到</font><a href="http://roytomeij.com/" rel="noreferrer"><font style="vertical-align: inherit;">Roy Tomeij</font></a><font style="vertical-align: inherit;">的演讲后，</font><font style="vertical-align: inherit;">如果您要管理大量CSS，我决定采用以下方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常使用这种方法：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有现有的.css文件重命名为.scss</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从application.scss中删除所有内容</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始将@import指令添加到中</font></font><code>application.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是twitters bootstrap和自己的一些css表，则必须首先导入bootstrap，因为它有一个表可以重置样式。</font><font style="vertical-align: inherit;">因此，您将添加</font></font><code>@import "bootstrap/bootstrap.scss";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>application.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap.scss文件如下所示：</font></font></p>

<pre><code>// CSS Reset<font></font>
@import "reset.scss";<font></font>
<font></font>
// Core<font></font>
@import "variables.scss";<font></font>
@import "mixins.scss";<font></font>
<font></font>
// Grid system and page structure<font></font>
@import "scaffolding.scss";<font></font>
<font></font>
// Styled patterns and elements<font></font>
@import "type.scss";<font></font>
@import "forms.scss";<font></font>
@import "tables.scss";<font></font>
@import "patterns.scss";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的</font></font><code>application.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件如下所示：</font></font></p>

<pre><code>@import "bootstrap/bootstrap.scss";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于导入的顺序，您现在可以使用变量，该变量随</font><font style="vertical-align: inherit;">导入之后的</font></font><code>@import "variables.scss";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何其他</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">一起加载</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，它们可以</font></font><code>type.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在bootstrap文件夹中</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">也可以在中使用</font></font><code>my_model.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，创建一个名为</font></font><code>partials</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">的文件夹</font></font><code>modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将是其他大多数文件的位置。</font><font style="vertical-align: inherit;">您可以将导入添加到</font></font><code>application.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，使其看起来像：</font></font></p>

<pre><code>@import "bootstrap/bootstrap.scss";<font></font>
@import "partials/*";<font></font>
</code></pre>

<p>Now if you make a bit of css to style an article on your homepage. Just create <code>partials/_article.scss</code> and it will be added to the compiled <code>application.css</code>. Because of the import order you can also use any bootstrap mixins and variables in your own scss files.</p>

<p>The only drawback of this method I found so far is, sometimes you have to force a recompile of the partial/*.scss files because rails wont always do it for you. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个非常类似的问题。</font><font style="vertical-align: inherit;">帮助我的是，在导入部分代码时，在@import语句下划线。</font><font style="vertical-align: inherit;">所以</font></font></p>

<pre><code>@import "_base";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p>

<pre><code>@import "base";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是一个奇怪的错误...</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
