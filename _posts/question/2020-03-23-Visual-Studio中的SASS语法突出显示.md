---
layout: question
title:  Visual Studio中的SASS语法突出显示
date:   2020-03-23T12:01:40.000Z
description: 目前，我使用此插件在Visual Studio http //www.mindscapehq.com/products/web-workbench中突出显...
img: 
author: 番长猴子
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我使用此插件在Visual Studio </font><a href="http://www.mindscapehq.com/products/web-workbench" rel="noreferrer"><font style="vertical-align: inherit;">http://www.mindscapehq.com/products/web-workbench中</font></a><font style="vertical-align: inherit;">突出显示语法</font></font><a href="http://www.mindscapehq.com/products/web-workbench" rel="noreferrer"><font style="vertical-align: inherit;"></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人根本不喜欢它。</font><font style="vertical-align: inherit;">与其他编辑器相比，它的功能有限且格式较差。</font><font style="vertical-align: inherit;">在我的自由职业中，我使用Sublime Text 2和Aptana，它们对SASS具有出色的支持。</font><font style="vertical-align: inherit;">但是在我的工作中，我必须使用Visual Studio。</font><font style="vertical-align: inherit;">有谁知道有支持SASS的优秀插件吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不在乎它是否通过命令行构建文件。</font><font style="vertical-align: inherit;">我只想要一些具有良好语法支持的东西。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3010篇《Visual Studio中的SASS语法突出显示》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个 ：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VS 2012中，打开菜单工具&gt;选项，在左侧选择菜单文本编辑器&gt;文件扩展名，然后将scss添加为扩展名，然后从下拉列表中选择CSS Source Editor作为编辑器</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试SassyStudio。</font><font style="vertical-align: inherit;">它是免费的，可与VS 2012/13一起使用：</font></font></p>

<p><a href="http://visualstudiogallery.msdn.microsoft.com/85fa99a6-e4c6-4a1c-9f00-e6a8129b6f4d?SRC=VSIDE"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://visualstudiogallery.msdn.microsoft.com/85fa99a6-e4c6-4a1c-9f00-e6a8129b6f4d?SRC=VSIDE</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也不想每年为Web Workbench支付39美元。</font><font style="vertical-align: inherit;">SassyStudio非常适合我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我正在使用的设置（</font></font><a href="https://github.com/darrenkopp/SassyStudio/issues/27"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由开发人员提供</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境
</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体和颜色</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向下滚动</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“显示项目”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击一个项目，即“ SCSS CSS属性名称”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改“项目前景”颜色（不留背景）</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">野蛮的
</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Studio Experiment Intellisense：真</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本编辑器
</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件扩展名</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保没有css，scss或sass文件扩展名（删除所有存在的扩展名）</font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动VS，以使这些更改生效。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio 2013更新2添加了sass语法突出显示：</font></font></p>

<p><a href="http://blogs.msdn.com/b/webdev/archive/2014/04/02/announcing-new-web-features-in-visual-studio-2013-update-2-rc.aspx" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blogs.msdn.com/b/webdev/archive/2014/04/02/announcing-new-web-features-in-visual-studio-2013-update-2-rc.aspx</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在研究如何使用指南针。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
