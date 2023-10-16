---
layout: question
title:  SASS：无效的\`import：预期的行尾为“;” -有时
date:   2020-04-03T04:21:53.000Z
description: 我有一个仅包含导入语句的sass文件\`import "this";\`import "that";如果我从命令行运行sass一切都很好 bu...
img: 
author: 神乐小哥Near
category: question
answer: 1
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个仅包含导入语句的sass文件</font></font></p>

<pre><code>@import "this";<font></font>
@import "that";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我从命令行运行sass一切都很好 </font></font></p>

<pre><code>bundle exec sass foo.scss:foo.css
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我从脚本（也通过bundle exec）中运行它，则会对那些分号感到不满。</font><font style="vertical-align: inherit;">这个...</font></font></p>

<pre><code>template = File.read("foundation.scss")<font></font>
sass_engine = Sass::Engine.new(template)<font></font>
sass_output = sass_engine.render<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...在sass_engine.render调用中产生以下内容：</font></font></p>

<pre><code>(sass):1: Invalid @import: expected end of line, was ";". (Sass::SyntaxError)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我摆脱了分号，那么情况就相反了。</font><font style="vertical-align: inherit;">它在命令行而不是在脚本中抱怨。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是怎么回事，从脚本运行时如何使它接受分号？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4023篇《SASS：无效的\`import：预期的行尾为“;” -有时》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于Sass命令行程序会注意到“ scss”扩展名，并将文件解析为SCSS而不是传统的Sass。</font><font style="vertical-align: inherit;">以编程方式进行操作时，您正在启动Sass引擎，而不是告诉它它是SCSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，错误是它将其读取为Sass而不是SCSS。</font></font></p>

<p><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#options</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该马上解决您的问题！</font></font></p>

<pre><code>template = File.read("foundation.scss")<font></font>
sass_engine = Sass::Engine.new(template, :syntax =&gt; :scss)<font></font>
sass_output = sass_engine.render<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中提琴！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
