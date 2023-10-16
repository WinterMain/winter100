---
layout: question
title:  WordPress中的Sass \[关闭\]
date:   2020-03-23T01:31:50.000Z
description:                                                                          ...
img: 
author: 小哥Pro梅
category: question
answer: 2
tags: CSS的 CSS
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/34533622/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2016-01-08 20：11：22Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在我的一个wordpress项目中使用SASS（这将是将来项目的样板）。</font><font style="vertical-align: inherit;">我希望按照以下标准进行操作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Passess sass-lint</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符合Wordpress标准（例如主题标题）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清洁，一致且易于维护</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有几个想法，但是没有一个符合上述条件。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.卸下</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并单独使用Sass</font></font></h2>

<pre><code>/index.php<font></font>
/... other wordpress files ...<font></font>
/assets/sass/main.scss<font></font>
/assets/sass/...other sass files...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行后</font></font><code>sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在根目录中创建。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一致性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于维护</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS-Lint不喜欢“ WordPress主题标题注释”，因为它更喜欢</font></font><code>//</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不编译sass，就不可能在WordPress后端中选择主题</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2. </font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">和Sass</font></font></h2>

<pre><code>/index.php<font></font>
/style.css<font></font>
/...other wordpress files...<font></font>
/assets/sass/main.scss<font></font>
/assets/sass/... other sass files...<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上解决了（1）的缺点</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至不应该那样。</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需任何工具</font><font style="vertical-align: inherit;">即可将快速更改轻松添加到</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前后矛盾</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冗余</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要多个CSS请求（一个用于</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一个用于已编译的sass）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这里最大的问题是：将已编译的SASS放在哪里？</font><font style="vertical-align: inherit;">将其与</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎很奇怪。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2596篇《WordPress中的Sass \[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用styles.css输出您的Sass？</font><font style="vertical-align: inherit;">这就是我所做的，它已经解决了您的许多问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您正在使用儿童主题。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要在本地安装wordpress，而不是在服务器上工作。</font><font style="vertical-align: inherit;">此</font></font><a href="https://www.elegantthemes.com/blog/tips-tricks/how-to-use-sass-with-wordpress-a-step-by-step-guide" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将帮助您完成大部分此过程。</font><font style="vertical-align: inherit;">这是解决正确主题的好方法。</font><font style="vertical-align: inherit;">您可以使用编译器将输出路径到正确的文件。</font><font style="vertical-align: inherit;">我使用</font></font><a href="http://koala-app.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koala</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是有很多很棒的东西可供选择。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在部分形式创建SCSS文件（即</font></font><code>_theme.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>_responisve.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>_animate.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个</font></font><code>styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注入尽可能多的scss资源，而不是使用其CSS。</font><font style="vertical-align: inherit;">例如，Bootstrap拥有自己的scss，Font Awesome和Animate也是如此。</font></font></li>
<li><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些部分文件，</font></font><code>styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将输出定向到</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或最好是缩小的（压缩的）版本，而不是- </font></font><code>styles.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>header.php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从新的scss文件中已经导入的所有排队样式表中</font><font style="vertical-align: inherit;">清除您的内容</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查并清洁</font></font><code>function.php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否相同。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且确实没有什么其他的了。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的设计师缺乏SCSS的经验，则可以在SCSS文件中使用CSS进行编码，并且该文件仍将作为style.min.css进行编译。</font><font style="vertical-align: inherit;">当然，最好利用SCSS功能，但这是与所需经验和知识有关的问题。</font><font style="vertical-align: inherit;">仍然可以将SCSS无缝编译到一个文件（style.css）中。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CREDIT TO </font></font><a href="https://stackoverflow.com/users/870729/cale-b"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cale_b-</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 “您可以创建一个“ custom.scss”文件，该文件供设计人员使用（他们可以使用原始CSS），并且导入了LAST，因此它的样式将覆盖所有其他scss规则”</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样做的方法是，我将所有SASS编译到一个main.css文件中，然后通过常规CSS导入将其导入到style.css中。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
