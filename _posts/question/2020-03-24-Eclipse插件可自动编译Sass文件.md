---
layout: question
title:  Eclipse插件可自动编译Sass文件
date:   2020-03-24T06:11:38.000Z
description:                                                                          ...
img: 
author: Tony神乐
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题需要更加</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/9430906/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2019-08-16 13：34：51Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我当前正在使用适用于Eclipse的Aptana插件，该插件使我的语法高亮显示，并允许我手动单击以将* .scss文件编译为* .css文件。</font><font style="vertical-align: inherit;">我真正想做的是让它在每次保存时自动编译，但是我不知道该怎么做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道您可以在命令行上使用sass --watch，但是我不想每次打开eclipse或创建新项目时都必须手动进行设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人找到实现这一目标的好方法？</font><font style="vertical-align: inherit;">每次保存时，是否必须有一种方法可以挂接到Aptana的Sass捆绑包中并运行其编译命令？</font><font style="vertical-align: inherit;">对</font></font><a href="https://stackoverflow.com/questions/1474096/using-haml-sass-with-eclipse"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的公认答案</font><font style="vertical-align: inherit;">建议使用“程序生成器”-但这真的是最好的解决方案吗？</font><font style="vertical-align: inherit;">如果是这样，是否有人有教程的提示/链接？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：我写了</font></font><a href="http://www.only10types.com/2012/02/get-eclipse-to-automatically-compile.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一篇</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关如何使用ant脚本作为构建器</font><a href="http://www.only10types.com/2012/02/get-eclipse-to-automatically-compile.html" rel="noreferrer"><font style="vertical-align: inherit;">的博客文章</font></a><font style="vertical-align: inherit;">，但我仍在寻找更好的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3350篇《Eclipse插件可自动编译Sass文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过大量尝试，我发现Eclipse中最好的解决方案是使用--update sass功能定义一个简单的Builder：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从项目菜单中选择“属性”，然后选择“构建器”部分。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个新的Builder，然后选择“程序”作为配置类型。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择启动配置的名称（SASS ？！）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将sass安装的路径插入“位置”字段。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用$ {project_loc}作为工作目录。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“参数”文本框中，插入要让sass使用的配置参数，最后，指定--update参数，然后指定sass文件目录源，然后指定“：”和已编译的css文件的目标文件夹。</font><font style="vertical-align: inherit;">在我的配置中，“ resources”是包含.scss文件的源文件夹，“ web”是包含已编译.css文件的目标目录。</font><font style="vertical-align: inherit;">--update命令将检查源文件夹和所有子文件夹中的修改。</font></font><a href="https://i.stack.imgur.com/LtXfY.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕截图</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“构建选项”选项卡中，只需选中“运行构建器：”部分下的所有选项。</font><font style="vertical-align: inherit;">您也可以“指定相关资源的工作集”以仅在保存选定文件夹中包含的文件时启动构建器。</font></font><a href="https://i.stack.imgur.com/nDJgO.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕截图</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击确定保存您的启动配置。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在尝试修改源目录中的.scss文件，然后将其保存，您将在控制台窗口中看到sass CLI输出。 </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass CLI将自动检查源文件夹（在我的配置中为资源）内已修改的资源，并将其编译到目标文件夹（在我的配置中为web）。</font><font style="vertical-align: inherit;">同样，@ import修改后的资源的所有.sass文件都将被编译。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass comiler </font><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">开关。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
每当源（scss，sass）更改时，该函数都会重建输出（css）文件。</font></font></p>

<blockquote>
  <p>Quoting from :  <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass" rel="nofollow">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass</a></p>
  
  <p>Using Sass</p>
  
  <p>Sass can be used in three ways: as a command-line tool, as a
  standalone Ruby module, and as a plugin for any Rack-enabled
  framework, including Ruby on Rails and Merb. The first step for all of
  these is to install the Sass gem:</p>
  
  <p>gem install sass If you’re using Windows, you may need to install Ruby
  first.</p>
  
  <p>To run Sass from the command line, just use</p>
  
  <p>sass input.scss output.css You can also tell Sass to watch the file
  and update the CSS every time the Sass file changes:</p>
  
  <p><strong>sass --watch input.scss:output.css If you have a directory with many Sass files,<br>
  you can also tell Sass to watch the entire directory:</strong></p>
  
  <p><strong>sass --watch app/sass:public/stylesheets Use sass --help for full
  documentation.</strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ruby代码中使用Sass非常简单。</font><font style="vertical-align: inherit;">安装Sass gem之后，您可以通过运行require“ sass”并使用Sass :: Engine来使用它，如下所示：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">engine = Sass :: Engine.new（“＃main {background-color：＃0000ff}”，：syntax =&gt;：scss）engine.render＃=&gt;“ #main {background-color：＃0000ff;} \ n”</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有更简单的解决方案。</font><font style="vertical-align: inherit;">只需按照说明从以下位置安装SASS：</font></font></p>

<p><a href="http://sass-lang.com/install" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/install</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会注意到，首先您必须安装Ruby。</font><font style="vertical-align: inherit;">之后，只需转到SCSS / CSS文件所在的文件夹，启动CMD并运行此DOS命令：</font></font></p>

<pre><code>&gt;cd &lt;path-to-your-css-files&gt;<font></font>
&gt;sass --watch .<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您要做的就是链接您的SCSS文件，以使其被Eclipse识别为本地CSS文件。</font><font style="vertical-align: inherit;">请遵循以下解决方案：</font></font></p>

<p><a href="https://stackoverflow.com/a/12322531/4180447"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/12322531/4180447</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我可能错过了一两个步骤。</font><font style="vertical-align: inherit;">这是我完成安装后记得的内容。</font><font style="vertical-align: inherit;">如果您遇到任何问题，请发表评论，我会尽力帮助您。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">塔雷克</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
