---
layout: question
title:  节点应用程序的LibSass的SCSS编译器替代品
date:   2020-04-03T06:49:39.000Z
description:                                                                          ...
img: 
author: 小胖
category: question
answer: 3
tags: node.js中 CSS
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/46174983/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2019-08-30 14：22：08Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                    </div>
                </div>
        </aside>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Libsass似乎是SCSS最受欢迎的编译器之一，并且   </font></font><a href="http://sass-lang.com/libsass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/libsass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出了许多常见编程语言的各种各样的libsass包装器。</font><font style="vertical-align: inherit;">对于node-app，</font></font><a href="https://www.npmjs.com/package/node-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   和相应的webpack或gulp加载程序似乎是最明显的选择。</font><font style="vertical-align: inherit;">但是，安装和使用node-sass既需要github访问权限，又需要python 2.7解释器，并且由于我不想在这里讨论的原因，我的生产环境中也没有。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有在没有github访问权限和python解释器的生产环境中安装和使用node-sass的可行解决方法？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否还有其他SCSS-可以通过webpack或gulp使用且不需要Github访问和/或已安装python解释器的编译器？ </font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4030篇《节点应用程序的LibSass的SCSS编译器替代品》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然类似于@tsi提供的答案，但我建议您的构建不是在开发机器上进行，而是在构建箱上进行。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些选项包括</font></font><a href="https://about.gitlab.com/product/continuous-integration/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gitlabs CI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://bitbucket.org/product/features/pipelines" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bitbucket管道</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实在开发机器上运行它，请确保在Vagrant或Docker中进行操作以创建一致的工件。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要回答第二个问题，不，似乎没有其他选择</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在有</font></font><a href="https://sass-lang.com/dart-sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dart-Sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是官方意义上的“ Sass的主要实现”。</font><font style="vertical-align: inherit;">它已发布，适用于通过GitHub，Chocolatey，Scoop，Homebrew等提供的所有主要操作系统。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的用例，我将使用</font></font><a href="https://www.npmjs.com/package/sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在npm上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为</font><a href="https://www.npmjs.com/package/sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;">JavaScript</font></a><font style="vertical-align: inherit;">的版本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">根据我对大型Sass项目（VideoJS）的测试，Dart-Sass的执行速度比node-sass慢，但如果您进行较小的更改，效果还不错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个</font></font><a href="https://dev.to/michaeldscherr/switching-from-sass-to-postcss-4p0c" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pure-JS node-sass替代方法是PostCSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，尽管您可能无法使用所需的所有Sass功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您的应用程序必须即时编译Sass，否则您可能应该在开发机上编译样式并将静态CSS推送到生产环境。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
