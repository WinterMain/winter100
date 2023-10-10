---
layout: question
title:  Compass for Rails 3.1的价值是什么？
date:   2020-03-23T02:41:09.000Z
description: 我试图确定在启动新的Rails 3.1项目时是否应包括Compass。我以前没用过指南针。Rails 3.1现在直接支持SCSS。Rails 3.1资...
img: 
author: 小胖Pro
category: question
answer: 4
tags: ruby-on-rails-3 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图确定</font><font style="vertical-align: inherit;">在启动新的</font><strong><font style="vertical-align: inherit;">Rails 3.1</font></strong><font style="vertical-align: inherit;">项目</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">是否应包括</font></font><a href="http://compass-style.org/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我以前没用过指南针。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rails 3.1现在直接支持SCSS。</font><font style="vertical-align: inherit;">Rails 3.1资产管道（通过链轮）现在可以自动编译样式表。</font><font style="vertical-align: inherit;">而且我可以直接使用CSS框架的SCSS版本，例如Blueprint。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Compass与Rails 3.1结合使用可以带来什么好处？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass提供了很多很好的mixin，强大的sprite生成器以及与Blueprint的紧密集成，这意味着您不必</font></font><code>col</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML上</font><font style="vertical-align: inherit;">都使用非语义</font><font style="vertical-align: inherit;">类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用mixins，那么使用Compass并没有太大的好处，但是如果您不使用它们，那么再次使用SCSS并没有太大的好处（嵌套和变量很好，但是mixins有助于保持特定于浏览器的状态在单个位置执行属性）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我发现蓝图比它的价值更麻烦。</font><font style="vertical-align: inherit;">我仍然会使用Compass作为mixins，但是现在Rails 3.1和Compass之间的兼容性非常糟糕（您必须跳过一些麻烦而仍然牺牲一些功能）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在有点相关的注释中，Rails 3.1编译资产的方式相当“破损”。</font><font style="vertical-align: inherit;">它不考虑社区在最近一两年中如何使用Sass，而是将变量，混合和页面部分分开放置，以便按顺序包含在主文件中。</font><font style="vertical-align: inherit;">Sprockets加载和编译Sass的“自动”方式使文件彼此解除关联，因此，即使您在中手动定义了加载顺序</font></font><code>application.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在文件中设置的变量也不可用于后续加载的文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/sporkd/compass-html5-boilerplate" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html5boilerplate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南针插件是一个伟大的节省时间太多，所以基于这些原因，我会用指南针</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/thoughtbot/bourbon" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bourbon</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Thoughtbot的产品）是指南针的轻巧替代品，可与3.1导轨很好地集成在一起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它具有指南针提供的主要css3 mixins（背景图像，框阴影，边框半径，渐变...）。</font><font style="vertical-align: inherit;">它还具有帮助按钮样式，“布局化”布局的助手以及其他一些功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会错过罗盘所具有的一些强大功能，但是可以用sass的强大功能轻松克服：仅复制/创建您自己的mixin！ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级我的Rails应用程序时，指南针经常让我头疼。</font><font style="vertical-align: inherit;">我很欣赏波旁威士忌的简单性（尽管它也可能使您头痛…………）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass是一个与设计无关的框架-例如，您不必担心用户拥有哪些浏览器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如Compass具有附加组件，例如CSS3跨浏览器功能：</font></font><a href="http://compass-style.org/reference/compass/css3/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
    </font><a href="http://compass-style.org/reference/compass/css3/" rel="nofollow"><font style="vertical-align: inherit;">//compass-style.org/reference/compass/css3/</font></a><font style="vertical-align: inherit;"> 
这样，您可以在.scss文件中指定与浏览器无关的内容</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边注：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rails 3.1处理.scss文件的方式一次只能一次-例如，如果您在一个文件中定义变量，则它们不会被传递到其他.scss文件中。</font><font style="vertical-align: inherit;">恕我直言，这并不是真正的最佳解决方案。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
