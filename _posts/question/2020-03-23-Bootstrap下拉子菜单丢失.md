---
layout: question
title:  Bootstrap下拉子菜单丢失
date:   2020-03-23T03:10:52.000Z
description: Bootstrap 3仍在RC中，但是我只是在尝试实现它。我不知道如何放置一个子菜单类。甚至CSS中没有类，甚至新文档也没有说什么它在2.x中存在，类...
img: 
author: Stafan
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3仍在RC中，但是我只是在尝试实现它。</font><font style="vertical-align: inherit;">我不知道如何放置一个子菜单类。</font><font style="vertical-align: inherit;">甚至CSS中没有类，甚至新文档也没有说什么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在2.x中存在，类名称为dropdown-submenu</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2718篇《Bootstrap下拉子菜单丢失》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论</font></font><a href="https://stackoverflow.com/a/18024991/3111787"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Skelly真正有用的解决方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在Bootstrap-sass 3.3.6中，utilities.scss，第19行：</font></font><code>.pull-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">has </font></font><code>float:left !important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从那以后，我建议在他的CSS中也使用！important：</font></font></p>

<pre><code>.dropdown-submenu.pull-left {<font></font>
    float:none !important;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我几天前碰到了这个问题。</font><font style="vertical-align: inherit;">我尝试了许多解决方案，但最终没有一个真正有用的解决方案，最终我创建了Bootstrap下拉代码的扩展/覆盖。</font><font style="vertical-align: inherit;">它是原始代码的副本，但对closeMenus函数进行了更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一个很好的解决方案，因为它不会影响bootstrap js的核心类。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在gihub上查看它：</font><a href="https://github.com/djokodonev/bootstrap-multilevel-dropdown" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/djokodonev/bootstrap-multilevel-dropdown" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/djokodonev/bootstrap-multilevel-dropdown</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到今天（2014年1月9日），Bootstrap 3仍不支持子菜单下拉菜单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Google搜索了响应式导航菜单，发现这是我最好的菜单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能菜单</font></font></strong> <a href="http://www.smartmenus.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.smartmenus.org/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这是任何想要导航菜单和多级子菜单的人的出路。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2015-02-17智能菜单现已完全支持子菜单的Bootstrap元素样式。</font><font style="vertical-align: inherit;">有关更多信息，请访问Smart menus网站。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
