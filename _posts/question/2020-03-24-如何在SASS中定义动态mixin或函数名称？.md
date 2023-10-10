---
layout: question
title:  如何在SASS中定义动态mixin或函数名称？
date:   2020-03-24T10:16:56.000Z
description: 我想在SASS中动态创建mixins，以列表中的每个项目命名，但是似乎不起作用。我尝试了这个，但出现错误： $event-icons  fair,...
img: 
author: Green西里
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在SASS中动态创建mixins，以列表中的每个项目命名，但是似乎不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了这个，但出现错误： </font></font></p>

<pre><code>$event-icons: fair, concert, art-show, conference, dance-show, film, party, festival, theatre, launch<font></font>
@each $event-icon in $event-icons<font></font>
  @mixin event-icon-#{$event-icon}<font></font>
    background-position: -($event-icon-width * $i) 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></p>

<pre><code>Invalid CSS after "": expected expression (e.g. 1px, bold), was "#{$event-icon}"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS不支持此用法吗？</font><font style="vertical-align: inherit;">我在手册中找不到关于它的任何内容。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3636篇《如何在SASS中定义动态mixin或函数名称？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的解决方案是实现带有参数的单个mixin。</font></font></p>

<pre><code>$event-icons: fair, concert, art-show, conference, dance-show, film, party, festival, theatre, launch<font></font>
@mixin event-icon($name)<font></font>
  @if not index($event-icons, $name)<font></font>
    @error "#{$name} is not an event icon."<font></font>
  background-position: -($event-icon-width * $i) 0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至目前（2014年3月30日），</font></font><strong><a href="https://stackoverflow.com/users/41221/chriseppstein"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chris Eppstein</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然拒绝实现动态混合。</font><font style="vertical-align: inherit;">请参阅</font><font style="vertical-align: inherit;">有关Github的</font></font><strong><a href="https://github.com/nex3/sass/issues/857" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第857期</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><a href="https://github.com/nex3/sass/issues/626" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第626期</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在试图说服克里斯，此功能对于释放Sass的真正力量至关重要，而我并不是那里唯一的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您同意这是一项重要功能，请转到</font></font><strong><a href="https://github.com/nex3/sass/issues/857" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题857</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><a href="https://github.com/nex3/sass/issues/626" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">626，</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并亲自解决此问题。</font><font style="vertical-align: inherit;">我们中提供此功能用例的人越多，我们越有可能说服Chris和/或其他主要开发人员之一。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：由于对它的请求数量众多，Eppstein在2016年最终实现了该功能。</font><font style="vertical-align: inherit;">但是，今天（2018年中），这些更改仍未合并到主分支中，因此在sass版本中仍然不可用。</font><font style="vertical-align: inherit;">参见
 </font></font><a href="https://github.com/sass/sass/pull/2057" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2057</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
