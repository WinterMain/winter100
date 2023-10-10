---
layout: question
title:  在Rails资产管道中是否保留SCSS变量？
date:   2020-03-23T13:53:33.000Z
description: 我正在使用许多SCSS样式表升级Rails应用程序以使用资产管道，并且需要为每个文件包括一些全局变量和mixins。\`import在每个文件的顶部添加...
img: 
author: 小宇宙
category: question
answer: 3
tags: ruby-on-rails-3.1 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用许多SCSS样式表升级Rails应用程序以使用资产管道，并且需要为每个文件包括一些全局变量和mixins。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个文件的顶部</font><font style="vertical-align: inherit;">添加几个</font><font style="vertical-align: inherit;">指令不是很干，所以我想做这样的事情：</font></font></p>

<pre><code># application.css<font></font>
/*<font></font>
*= require variables<font></font>
*= require mixins<font></font>
*= require_tree .<font></font>
*/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然这是行不通的，因为变量不会在文件中持久保存。</font><font style="vertical-align: inherit;">有人知道如何实现这一目标吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3104篇《在Rails资产管道中是否保留SCSS变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认的清单语法不够强大，无法为您提供有用的Sass功能，例如共享变量，mixins等。相反，您应该：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将application.css重命名为application.scss（或在Rails 4或更早版本中重命名为application.css.scss）</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是使用 </font></font></p>

<pre><code>/*<font></font>
 *= require variables<font></font>
 *= require mixins<font></font>
 *= require_tree .<font></font>
 */<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">废话，你现在应该使用</font></font></p>

<pre><code>@import "variables";<font></font>
@import "mixins";<font></font>
@import "blah"; // import each SCSS file in your project like this.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将确保您在整个项目中都能充分利用变量和混合变量，并在Sass允许的情况下保持DRY状态。</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单地从每个Scss或Sass文件中导入必要的文件似乎对我有用。</font><font style="vertical-align: inherit;">例如，我有一个colors.scss文件，其中包含一些常量，如下所示：</font></font></p>

<pre><code>$black: #222;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在application.css清单以及其他文件中使用它：</font></font></p>

<pre><code>/*<font></font>
 *= require colors<font></font>
 *= require buttons<font></font>
*/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的button.css.scss文件中，我只是这样做以避免发生错误：</font></font></p>

<pre><code>@import "colors";
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将require替换为@import，并删除所有内容，</font></font><code>= require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您认为已将其注释掉也是如此。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
