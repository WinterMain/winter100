---
layout: question
title:  sass --watch自动缩小？
date:   2020-03-17T09:11:39.000Z
description: 有没有一种运行方法：sass --watch a.scss a.css但是a.css最终被缩小了吗？如何在编译样式表时避免运行单独的缩小步骤？...
img: 
author: 凯小卤蛋
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种运行方法：</font></font></p>

<p><code>sass --watch a.scss:a.css</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><code>a.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终被缩小了吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在编译样式表时避免运行单独的缩小步骤？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用指南针：</font></font></p>

<pre><code>compass watch --output-style compressed
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的</font><font style="vertical-align: inherit;">是</font><a href="https://www.jetbrains.com/idea/" rel="noreferrer"><font style="vertical-align: inherit;">IntelliJ IDEA</font></a><font style="vertical-align: inherit;">，</font><a href="https://www.jetbrains.com/phpstorm/" rel="noreferrer"><font style="vertical-align: inherit;">PhpStorm</font></a><font style="vertical-align: inherit;">，</font><a href="https://www.jetbrains.com/webstorm/" rel="noreferrer"><font style="vertical-align: inherit;">WebStorm</font></a><font style="vertical-align: inherit;">等</font></font><a href="https://www.jetbrains.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JetBrains</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑器</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">请在“设置”&gt;“文件监视程序”中使用以下设置。
</font></font><a href="https://www.jetbrains.com/idea/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://www.jetbrains.com/phpstorm/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://www.jetbrains.com/webstorm/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://i.stack.imgur.com/OehIj.png" rel="noreferrer"><img src="https://i.stack.imgur.com/OehIj.png" alt="在此处输入图片说明"></a></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换</font></font><strong><code>style.scss</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><code>style.css</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置参数</font></font></p>

<pre><code>--no-cache --update $FileName$:$FileNameWithoutExtension$.css
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和输出路径以刷新</font></font></p>

<pre><code>$FileNameWithoutExtension$.css
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换</font></font><strong><code>style.scss</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为压缩</font></font><strong><code>style.min.css</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集参数</font></font></p>

<pre><code>--no-cache --update $FileName$:$FileNameWithoutExtension$.min.css --style compressed
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和输出路径以刷新</font></font></p>

<pre><code>$FileNameWithoutExtension$.min.css
</code></pre></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>sass --watch a.scss:a.css --style compressed
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请查阅文档以获取更新：</font></font></strong></p>

<ul>
<li><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass</font></font></a></li>
<li><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
