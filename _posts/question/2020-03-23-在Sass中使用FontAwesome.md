---
layout: question
title:  在Sass中使用FontAwesome
date:   2020-03-23T01:33:11.000Z
description: 我正在尝试在Web Compass项目中使用FontAwesome。由于FontAwesome页面上没有特定的文档，并且我没有使用Bootstrap，因此...
img: 
author: 卡卡西
category: question
answer: 4
tags: sass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Web Compass项目中使用FontAwesome。</font><font style="vertical-align: inherit;">由于</font></font><a href="http://fortawesome.github.io/Font-Awesome/get-started/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FontAwesome页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上没有特定的文档</font><font style="vertical-align: inherit;">，并且我没有使用Bootstrap，因此我遵循了“不使用Bootstrap？</font><font style="vertical-align: inherit;">指示，但无法使其正常工作。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有发现具体错误，无论是未找到还是编译错误。</font><font style="vertical-align: inherit;">它只是不显示任何内容，没有图标或文本。</font><font style="vertical-align: inherit;">FontAwesome字体文件似乎没有加载。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经完成的步骤</font></font></h3>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载</font></font><code>font-awesome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其复制到我的项目css文件夹中，在该文件夹中我所有的编译后的css： </font></font><code>project/css/font-awesome</code></li>
<li><font style="vertical-align: inherit;"></font><code>font-awesome.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">导入</font><font style="vertical-align: inherit;">我的主要sass样式表中</font></font><code>@import url("font-awesome/scss/font-awesome.scss");</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><code>font-awesome.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并更改导入路径，现在相对于我的css编译文件，如下所示</font></font><code>@import url("font-awesome/scss/_variables.scss");</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">font-awesome / scss目录中的partial，并将其</font></font><code>@FontAwesomePath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从默认的</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><code>"font-awesome/font/"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以匹配webfonts的位置</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的html文件中，在</font></font><a href="http://fortawesome.github.io/Font-Awesome/examples/#inline-icons" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FontAwesome示例页面中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了一个</font><a href="http://fortawesome.github.io/Font-Awesome/examples/#inline-icons" rel="noreferrer"><font style="vertical-align: inherit;">示例</font></a><font style="vertical-align: inherit;">，因此我添加了一个</font></font><code>&lt;i class="icon-camera-retro"&gt;&lt;/i&gt; Some text</code></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的主要sass文件中，添加了</font></font><code>@font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明</font></font></p>

<pre><code>@include font-face('FontAwesome',<font></font>
font-files(<font></font>
'font-awesome/font/fontawesome-webfont.woff', woff,<font></font>
'font-awesome/font/fontawesome-webfont.ttf', ttf,<font></font>
'font-awesome/font/fontawesome-webfont.svg', svg),<font></font>
'font-awesome/font/fontawesome-webfont.eot');<font></font>
<font></font>
 %icon-font {<font></font>
     font-family: 'FontAwesome', Helvetica, Arial, sans-serif;<font></font>
  }<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选择器中扩展字体 </font></font></p>

<pre><code>.icon-camera-retro {<font></font>
    @extend %icon-font;<font></font>
 }<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用编译我的主要青菜样式表</font></font><code>compass --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何错误</font></font></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上载了所有内容</font></font></li>
</ol>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
为了澄清，这是我的项目的结构：</font></font></p>

<pre><code>root<font></font>
    sass<font></font>
        mainsass.scss<font></font>
    css<font></font>
        font-awesome<font></font>
            css<font></font>
                font-awesome.css<font></font>
            font<font></font>
                font-archives.ttf/.woff/etc<font></font>
            scss<font></font>
                _partials (_variables.scss, _path.scss, _core.scss, etc)<font></font>
                font-awesome.scss<font></font>
        fonts<font></font>
            some-custom-font.ttf<font></font>
        mainsass.css<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，如果有人读过这里（我已经很感激），请问有什么想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2599篇《在Sass中使用FontAwesome》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用：</font></font></strong></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行命令：</font></font></p>

<pre><code>npm install font-awesome --save-dev
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些行添加到index.scss：</font></font></p>

<pre><code>$fa-font-path: "~font-awesome/fonts";<font></font>
@import "~font-awesome/scss/font-awesome";<font></font>
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过获得真棒字体</font></font></p>

<p><code>yarn add font-awesome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
要么</font></font></p>

<p><code>bower install font-awesome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （不建议）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在转到font-awesome目录，复制fonts文件夹，并将其粘贴</font><font style="vertical-align: inherit;">到css文件夹或scss文件夹中的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个文件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">夹。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p><code>./
./bower_components/*
./node_modules/*
./styles/main.scss
./fonts
./index.html
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做完了！ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想复制字体文件夹，则另一种方法是在文件中添加以下行</font></font><code>main.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><code>$fa-font-path: "../bower_components/font-awesome/fonts/";
@import "../bower_components/font-awesome/scss/font-awesome";</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我对此有所帮助，并且路径有几个主要问题。</font><font style="vertical-align: inherit;">我将在这里解释它们，以防它对我的位置有所帮助。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实，字体文件没有加载</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要与路径以及@import的指南针和萨斯行为有关</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我上述步骤的更正：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）您不能在那上面做错... </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2）首先，不要将整个文件夹放在css目录中。</font><font style="vertical-align: inherit;">每种类型的文件都应放在其目录中，因此sass目录下的.scss文件，css / fonts目录下的字体文件（.ttf，.woff等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于工作方式，这在Sass中很重要</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#import"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">萨斯参考</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass在当前目录以及Rack，Rails或Merb下的Sass文件目录中查找其他Sass文件。</font><font style="vertical-align: inherit;">可以使用：load_paths选项或命令行上的--load-path选项指定其他搜索目录。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忽略了这一点，并将我的.scss文件放在其他目录中，这就是为什么通常</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到它们</font><font style="vertical-align: inherit;">的原因</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将我们引向下一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）尝试将.scss文件作为url（）导入是很愚蠢的，我之所以这样做是因为常规文件</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法正常工作。</font><font style="vertical-align: inherit;">一旦font-awesome.scss文件位于我的sass目录中，我现在可以</font></font><code>@import "font-awesome/font-awesome.scss"</code> <br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）此处相同，</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径是相对于.scss文件的，并且只要font-awesome.scss及其部分位于同一文件夹中，无需触摸它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5）是的，您需要更改</font></font><code>@FontAwesomePath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来匹配您的字体目录</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6）确定您需要一个HTML示例进行测试，所以在这里好</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7）这是不必要的，它已经在我要导入的font-awesome.scss中。</font><font style="vertical-align: inherit;">干。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8）与上述相同，也不必要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">9＆10）是的，女孩，干得好</font></font></p>

<p><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以从中学到什么</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：两次检查您的路径，同时考虑到Sass中的@import仅在当前sass目录中看起来（默认）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装自定义字体真棒sass的步骤。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载真棒字体文件夹并将其解压缩。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开提取的文件夹&gt;&gt; font-awesome / scss，在这里您会找到font-awesome.scss和font-awesome部分文件。</font><font style="vertical-align: inherit;">将所有这些文件移动到项目的scss文件夹中。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将font-awesome文件夹内的fonts文件夹移到您的项目文件夹&gt;&gt; Project / fonts</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开_varaible.scss并将路径更改为</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ fa-font-path：“ ../fonts”！default; </font><font style="vertical-align: inherit;">{在这种情况下，字体的相对路径是../../fonts}</font></font></p>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将font-awesome.css链接到头文件。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您已经准备就绪</font></font></p>

<p><a href="https://fortawesome.github.io/Font-Awesome/get-started/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fortawesome.github.io/Font-Awesome/get-started/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
