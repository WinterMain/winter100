---
layout: question
title:  如何在Visual Studio 2013中使用Sass \[关闭\]
date:   2020-03-18T09:01:40.000Z
description:                                                                          ...
img: 
author: Jim老丝梅
category: question
answer: 9
tags: visual-studio CSS
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭。</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题外话</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/20727102/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2016-06-30 10：53：16Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio 2013中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Sass CSS预处理器</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">是否有任何扩展可为Sass提供支持？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2088篇《如何在Visual Studio 2013中使用Sass \[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Visual Studio 2013 SP 4中，添加SCSS文件并在每次保存时进行同步都没有问题。</font><font style="vertical-align: inherit;">同步失败时我感到困惑，我发现问题出在定义变量之前。</font><font style="vertical-align: inherit;">SCSS文件未显示任何错误，但同步失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于同步：</font></font></p>

<pre><code>$body-main: 45px;<font></font>
body {<font></font>
    padding-top: $body-main + 25px;<font></font>
    padding-bottom: $body-main - 5px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不适用于同步</font></font></p>

<pre><code>body {<font></font>
    padding-top: $body-main + 25px;<font></font>
    padding-bottom: $body-main - 5px;<font></font>
}<font></font>
$body-main: 45px;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二种情况下，没有错误和智能感知，但是同步失败。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本的Visual Studio +最新版本的Web Essentials </font></font><a href="http://vswebessentials.com/download" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://vswebessentials.com/download</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许立即使用Sass和Less。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Green</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为Web Essentials扩展-我假设每个Web开发人员都在运行，并且是本地VS IDE支持的先驱-具有SCSS编译支持，但我认为它仅适用于仍在CTP中的VS2013 Update 2。这次。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的评论可能没有用，因为人们可能已经有了答案，但是Scout可用于Windows :)，自2013年3月以来我一直在我的项目中使用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用功能强大的Mixture，并创建CSS和JS文件的缩小版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A樱</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一篇有关该主题的博客文章，我认为这可能会对其他人有所帮助。</font><font style="vertical-align: inherit;">基本上支持SCSS，但不支持SASS扩展。</font></font></p>

<p><a href="http://pwkad.wordpress.com/2014/05/30/using-scss-in-visual-studio-2013-with-web-essentials-starring-compass-and-susy/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://pwkad.wordpress.com/2014/05/30/using-scss-in-visual-studio-2013-with-web-essentials-starring-compass-and-susy/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也要小心，因为我在编译Compass时遇到了一些问题，例如指南针/ css3 / images文件中存在中断错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy伽罗神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ASP.NET，有两种方法可以与SASS集成。</font></font><a href="http://chirpy.codeplex.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chripy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个常见的插件，您希望将其安装在Visual Studio中作为扩展。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
从而进行设计时编译，您可以在</font></font><a href="http://chirpy.codeplex.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://chirpy.codeplex.com/中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关chripy的更多信息</font><font style="vertical-align: inherit;">，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
以及可以通过Nuget安装的另一个软件包：</font></font></p>

<pre><code>install-package SassAndCoffee
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙伽罗小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在Visual Studio中编译SCSS，请安装</font></font><a href="https://visualstudiogallery.msdn.microsoft.com/2e7b72e0-f6ca-4e5e-9b30-afcc07d801f0?SRC=Home" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CompileSass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Visual Studio Extension。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是Web Essentials </font></font><a href="https://github.com/madskristensen/WebEssentials2013/releases/tag/v2.5" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再支持编译Sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>I thought this was pretty sad because it was absolutely the simplest way to compile Sass from Visual Studio. I created a new Visual Studio extension that behaves the same way. You just install the extension and it will automatically compile .scss files to compressed .min.css files when you save.</p>

<p>Check out <a href="https://visualstudiogallery.msdn.microsoft.com/2e7b72e0-f6ca-4e5e-9b30-afcc07d801f0?SRC=Home" rel="nofollow">CompileSass</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有使用Chripy，但您也可以尝试其他几种选择。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最喜欢的在Visual Studio中使用Sass的扩展是Mindscape的</font></font><a href="http://www.mindscapehq.com/products/web-workbench" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Workbench</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它具有很好的集成性，可与Visual Studio 2013一起使用，甚至还支持Compass。</font><font style="vertical-align: inherit;">如果使用Less或CoffeeScript，它也会照顾好它们。</font><font style="vertical-align: inherit;">我也和一位开发人员聊天，他的反应非常友好，这在我的书中是一个很大的优势。</font><font style="vertical-align: inherit;">哦，我听说还有更多很棒的事情正在酝酿之中。</font></font></li>
<li><a href="http://visualstudiogallery.msdn.microsoft.com/85fa99a6-e4c6-4a1c-9f00-e6a8129b6f4d?SRC=VSIDE" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SassyStudio</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是另一种可能性，但是当我尝试它时，它似乎没有Web Workbench强大。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它尚未发布，但请关注</font></font><a href="http://webessentials.uservoice.com/forums/140520-general/suggestions/3140436-support-for-sass-scss" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Essentials</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">目前，它仅在CSS预处理器方面支持LESS，但对Sass的支持已收到</font></font><a href="http://webessentials.uservoice.com/forums/140520-general/suggestions/3140436-support-for-sass-scss" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大量请求</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，程序经理回答说“开发正在进行中。” </font><font style="vertical-align: inherit;">希望不久！</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个选择和我经常使用的选择只是使用外部工具监视我的SASS文件，在后台编译它们，然后让Visual Studio在编译CSS文件时重新加载它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过命令行安装Ruby和SASS，并告诉它监视项目目录中的更改可以正常工作-但我很喜欢</font></font><a href="http://alphapixels.com/prepros/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prepros</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有尝试全部，但</font></font><a href="http://mhs.github.io/scout-app/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Scout</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://koala-app.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koala</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://livereload.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LiveReload</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://compass.kkbox.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass.app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://fireapp.kkbox.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fire.app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也是类似的选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管这些并非总是适用于每个项目的正确解决方案，但它们却为您提供了很多灵活性和成熟度，而您在Visual Studio扩展中不一定会找到这些灵活性和成熟度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端梅</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于寻求此答案的其他任何人，我发布此邮件是为了节省您的时间，因为某些答案有些过时了。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Visual Studio 2013中处理一个小型Web项目时，我想第一次使用SASS。</font><font style="vertical-align: inherit;">我进行了一些挖掘，发现VS 2013 Update 2发行时具有对SASS（</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）文件的</font><font style="vertical-align: inherit;">本机支持</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过进一步的挖掘，并且没有使用SASS的经验，我安装了</font></font><a href="http://visualstudiogallery.msdn.microsoft.com/56633663-6799-41d7-9df7-0f2a504ca361" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Essentials 2013 for Update 2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该版本用于编译和生成相应的</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即便如此，我仍然不清楚如何将它们捆绑在一起，但是</font></font><a href="http://www.mattburkedev.com/using-sass-with-visual-studio-2013-essentials/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在首次解释所有内容方面做得很好。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客中的摘录（贷方为​​@akatakritos）</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio 2013提供了添加SASS文件的功能（</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="http://visualstudiogallery.msdn.microsoft.com/56633663-6799-41d7-9df7-0f2a504ca361" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Essentials 2013更新2</font></font></a></li>
<li><font style="vertical-align: inherit;"></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向您的项目</font><font style="vertical-align: inherit;">添加一个新</font><font style="vertical-align: inherit;">文件，例如</font></font><code>styles.scss</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font><code>styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，保存，它将自动</font></font><code>styles.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">下</font><font style="vertical-align: inherit;">生成一个</font><font style="vertical-align: inherit;">文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以像常规</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">一样捆绑或链接它</font></font></li>
</ol>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2015年7月更新：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更高的</font></font><a href="http://vswebessentials.com/changelog" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Essentials更新中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即：2014年11月12日更新的版本2.5，已删除了SASS编译器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备用编译器：</font></font></p>

<ul>
<li><a href="https://visualstudiogallery.msdn.microsoft.com/85fa99a6-e4c6-4a1c-9f00-e6a8129b6f4d" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SassyStudio</font></font></a></li>
<li><a href="https://visualstudiogallery.msdn.microsoft.com/2b96d16a-c986-4501-8f97-8008f9db141a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络工作台</font></font></a></li>
<li><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c" rel="noreferrer"><font style="vertical-align: inherit;">Web编译器</font></a><font style="vertical-align: inherit;">提供对VS2015的支持</font></font></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
