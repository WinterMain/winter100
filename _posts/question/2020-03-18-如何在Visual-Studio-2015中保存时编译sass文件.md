---
layout: question
title:  如何在Visual Studio 2015中保存时编译.sass文件
date:   2020-03-18T10:24:26.000Z
description: 如何在Visual Studio 2015中启动并运行完整的sass（即scss）预编译器环境？对于这个问题，这是一个较少涉及的同级问题。...
img: 
author: 猪猪老丝
category: question
answer: 3
tags: asp.net CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Visual Studio 2015中启动并运行完整的sass（即scss）预编译器环境？</font><font style="vertical-align: inherit;">对于</font></font><a href="https://stackoverflow.com/questions/27735934/how-to-compile-less-files-on-save-in-visual-studio-2015-preview"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题，</font><a href="https://stackoverflow.com/questions/27735934/how-to-compile-less-files-on-save-in-visual-studio-2015-preview"><font style="vertical-align: inherit;">这是一个较少涉及</font></a><font style="vertical-align: inherit;">的同级问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2145篇《如何在Visual Studio 2015中保存时编译.sass文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想弄乱手动设置编译的复杂性，可以使用许多非常简单的扩展来为您解决：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebCompiler（免费）</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提到过它，但是Mads Kristensen（Web Essentials的作者）创建了一个名为</font></font><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Compiler</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的独立编译工具</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您所要做的就是安装它，然后右键单击要编译的任何SASS文件，然后选择“ Web编译器”&gt;“编译文件”。</font><font style="vertical-align: inherit;">从那时起，将对其进行监视并随时对其进行保存，将对文件进行编译。</font></font></p>

<p><strong><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载Web编译器</font></font></a></strong></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CompassSASS（免费）</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Web编译器类似，这是一个独立的扩展，它被创建为可在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS2013</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS2015中使用，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为从流行的Web Essentials扩展中删除了编译。</font><font style="vertical-align: inherit;">它是轻量级的，并且可以很好地完成错误报告。</font><font style="vertical-align: inherit;">在</font></font><a href="http://samrueby.com/2015/03/12/visual-studio-extension-to-compile-sass/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关扩展的作者博客</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><a href="https://visualstudiogallery.msdn.microsoft.com/2e7b72e0-f6ca-4e5e-9b30-afcc07d801f0" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载编译SASS</font></font></a></strong></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web工作台（免费/付费）</font></font></h1>

<p><a href="http://www.mindscapehq.com/products/web-workbench" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多年来，在编译SASS时，</font><a href="http://www.mindscapehq.com/products/web-workbench" rel="nofollow"><font style="vertical-align: inherit;">Mindscape的Web Workbench</font></a><font style="vertical-align: inherit;">是我最喜欢的扩展，但是自那以后，我便不再使用免费的替代程序了。</font><font style="vertical-align: inherit;">Pro版本仍然是一个功能强大的工具，可以通过多种方式来自定义输出文件，但考虑到那里提供免费工具，它也相当昂贵（39美元）。</font></font></p>

<p><strong><a href="https://visualstudiogallery.msdn.microsoft.com/2b96d16a-c986-4501-8f97-8008f9db141a" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载Web WorkBench</font></font></a></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>This can also be achieved without gulp or grunt by simply clicking your way in Visual Studio.</p>

<h1>Install Web Compiler</h1>

<ol>
<li>In Visual Studio, press Tools -&gt; Extensions and updates.</li>
<li>Search for Web Compiler (created by Mads Kristensen) and install.</li>
<li>Restart of Visual Studio will be needed.</li>
</ol>

<h1>Compile files</h1>

<ol>
<li>Right-click the .scss-file in Solution Explorer to setup compilation.</li>
<li>Press Web Compiler -&gt; Compile File (Shift+Alt+Q).</li>
</ol>

<p>A file called compilerconfig.json is created in the root of the project where you can modify the behavior of the compiler. Right-clicking the compilerconfig.json file let’s you easily run all the configured compilers.</p>

<p>Any time a .scssfile is modified within Visual Studio, the compiler runs automatically to produces the compiled output file.</p>

<h1>Compile on Build</h1>

<ol>
<li>Right-click the compilerconfig.json file</li>
<li>Press Web Compiler -&gt; Enable compile on build</li>
<li>Clicking the menu item will prompt you with information that a NuGet package will be installed into the packages folder without adding any files to the project itself. The NuGet package contains an MSBuild task that will run the exact same compilers on the compilerconfig.json file in the root of the project.</li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德西门Near</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS2015的Web编译器扩展</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必填项。</font><font style="vertical-align: inherit;">npm install -g gulp</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对您有所帮助...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web编译器本不应该将字符串转换为Unicode字符时遇到问题。</font><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在VS2015中</font><font style="vertical-align: inherit;">切换到了该实现   </font></font><a href="http://blog.oxfordcc.co.uk/compiling-sass-gulp-visual-studio/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.oxfordcc.co.uk/compiling-sass-gulp-visual-studio/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以正确编译CSS。</font><font style="vertical-align: inherit;">以防万一其他人遇到相同的问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
