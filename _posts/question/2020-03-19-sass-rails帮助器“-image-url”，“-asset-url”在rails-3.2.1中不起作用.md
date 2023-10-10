---
layout: question
title:  sass-rails帮助器“ image-url”，“ asset-url”在rails 3.2.1中不起作用
date:   2020-03-19T03:33:55.000Z
description: 我在3.2.1上，使用sass-rails-3.2.4和sass-3.1.15 ...资产管道的文档说：asset-url("rails.png"...
img: 
author: 
category: question
answer: 6
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在3.2.1上，使用sass-rails-3.2.4和sass-3.1.15 ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资产管道的文档说：</font></font></p>

<pre><code>asset-url("rails.png", image) becomes url(/assets/rails.png)<font></font>
image-url("rails.png") becomes url(/assets/rails.png)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我做了以下文件：</font></font></p>

<pre><code># app/assets/stylesheets/public/omg.css.sass<font></font>
<font></font>
body<font></font>
  background: asset-url('snake.gif', image)<font></font>
<font></font>
#lol<font></font>
  background: image-url('snake.gif')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我访问localhost：3000 / assets / public / omg.css时，我得到：</font></font></p>

<pre><code>body {<font></font>
  background: asset-url("snake.gif", image); }<font></font>
<font></font>
#lol {<font></font>
  background: image-url("snake.gif"); }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...我还尝试将文件更改为omg.css.scss并将语法更改为：</font></font></p>

<pre><code># app/assets/stylesheets/public/omg.css.scss<font></font>
<font></font>
body {<font></font>
  background: asset-url('snake.gif', image);<font></font>
}<font></font>
<font></font>
#lol {<font></font>
  background: image-url('snake.gif');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是得到相同的结果……有人知道为什么这些助手不起作用吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以仅</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路径</font><font style="vertical-align: inherit;">后添加斜杠</font><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">像平常一样</font><font style="vertical-align: inherit;">使用</font></font><code>url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>background-image: url("/assets/rails.png")
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否启用了资产管道</font></font><code>application.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>config.assets.enabled = true
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将Sass样式表上的扩展名设置为，您做对了</font></font><code>.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使Rails知道先使用Sass解析文件，然后再将其作为CSS发出内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管文档说了什么，但rails 3.2.6中的默认选项似乎允许您使用CSS中更少的路径信息来使事情工作。</font><font style="vertical-align: inherit;">例如</font></font><code>../app/assets/images/rails.png</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您的example.css.scss文件中的引用类似于：</font></font></p>

<p><code>background: white url(rails.png) repeat-y;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，</font><font style="vertical-align: inherit;">您没有将</font></font><code>image-url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">包含在</font></font><code>asset-url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的scss中，只是普通的</font></font><code>url(your_image.png)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这些文档似乎只是对它在后台执行操作的一种解释。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无猪猪</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能要尝试清除/ tmp / cache。</font><font style="vertical-align: inherit;">对于Rails和Sass来说，我太陌生了，不知道它为什么起作用，但是经过数小时的搜索，它为我解决了同样的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，尽管我可以看到其他Sass指令（例如设置变量和使用它们进行计算）正在执行，但此方法仍然有效。</font><font style="vertical-align: inherit;">我确定一旦有时间追踪它，就会有一个非常简单的解释。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门ItachiL</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我遇到这个问题时，是因为我没有在资产管道中包含css文件进行预编译。</font><font style="vertical-align: inherit;">结果，它将在运行时生成。</font><font style="vertical-align: inherit;">由于sass-rails gem通常在：assets组中，因此在运行时生成css文件时，辅助程序不可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将以下行添加到application.rb（或production.rb）中：</font></font></p>

<pre><code>config.assets.precompile += %w( public/omg.css )
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font></font><a href="http://jalada.co.uk/2012/01/23/adding-files-to-config-assets-precompile-in-rails-3-1.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的修复程序，</font><font style="vertical-align: inherit;">包括在将文件添加到预编译器时命名文件的陷阱。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我进行了@Ryan建议的更改以及升级sass-rails：</font></font></p>

<pre><code>bundle update sass-rails
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass 3.2.6为我工作，而3.2.5却没有。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
