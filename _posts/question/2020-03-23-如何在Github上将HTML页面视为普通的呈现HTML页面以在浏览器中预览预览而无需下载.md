---
layout: question
title:  如何在Github上将HTML页面视为普通的呈现HTML页面，以在浏览器中预览预览而无需下载？
date:   2020-03-23T01:53:58.000Z
description: 在http //github.com上，开发人员保留项目的HTML，CSS，JavaScript和图像文件。如何在浏览器中看到HTML输出？例如：ht...
img: 
author: 路易猪猪
category: question
answer: 10
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://github.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://github.com上，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员保留项目的HTML，CSS，JavaScript和图像文件。</font><font style="vertical-align: inherit;">如何在浏览器中看到HTML输出？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font><a href="https://github.com/necolas/css3-social-signin-buttons/blob/master/index.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/necolas/css3-social-signin-buttons/blob/master/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/necolas/css3-social-signin-buttons/blob/master/index.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我打开它时，它不会显示作者代码的呈现HTML。</font><font style="vertical-align: inherit;">它将页面显示为源代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以直接将其视为呈现的HTML？</font><font style="vertical-align: inherit;">否则，我总是需要下载整个ZIP文件才能查看结果。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2625篇《如何在Github上将HTML页面视为普通的呈现HTML页面，以在浏览器中预览预览而无需下载？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamSam</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome扩展程序</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> - </font><font style="vertical-align: inherit;">预览HTML代码，使用起来</font></font><code>Run Selected HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用</font></font><code>select all the code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub的读取模式，这也很简单，首先将鼠标光标移到</font></font><code>&lt;html&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顶部</font><font style="vertical-align: inherit;">的开始括号</font><font style="vertical-align: inherit;">，然后按住</font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键，然后将光标移到</font></font><code>&lt;/html&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">底部</font><font style="vertical-align: inherit;">的结束括号</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行选定的HTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -Chrome网上应用店</font></font></p>

<p><a href="https://chrome.google.com/webstore/detail/run-selected-html/eefflcdphpehljcadbmkdpopmbamfefl/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://chrome.google.com/webstore/detail/run-selected-html/eefflcdphpehljcadbmkdpopmbamfefl/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在读取模式下，选择HTML代码的所有正文。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：鼠标右键单击“ Run Seleted HTML”，然后您可以在新标签页中看到渲染结果。</font></font></p>

<p><a href="https://i.stack.imgur.com/QrYoY.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/QrYoY.png" alt="运行选定的HTML"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行结果：
</font></font><a href="https://i.stack.imgur.com/0EQEE.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/0EQEE.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以仅打开Github Pages。</font><font style="vertical-align: inherit;">^ _ ^</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击“设置”，然后转到“ GitHub页面”，然后单击“源”下的下拉列表，然后选择要公开的分支（位于主要html文件所在的位置）aaa和vualaa。</font><font style="vertical-align: inherit;">^ _ ^</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这已经过时了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
（因为“修改内容类型选项”扩展无法按预期工作。）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案仅适用于chrome浏览器。</font><font style="vertical-align: inherit;">我不确定其他浏览器。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome浏览器中添加“修改内容类型选项”扩展名。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中打开“ chrome-extension：//jnfofbopfpaoeojgieggflbpcblhfhka/options.html” URL。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加原始文件网址的规则。</font><font style="vertical-align: inherit;">例如：

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址过滤器：https：///raw/master//fileName.html </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始类型：文字/纯文字</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换类型：text / html</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开在规则中添加了URL的文件浏览器（在步骤3中）。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您使用Tampermonkey，则可以添加一个脚本，该脚本会将</font></font><code>preview with http://htmlpreview.github.com/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到“原始”，“责备”和“历史”按钮旁边的操作菜单中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样的脚本：</font><a href="https://gist.github.com/vanyakosmos/83ba165b288af32cf85e2cac8f02ce6d" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://gist.github.com/vanyakosmos/83ba165b288af32cf85e2cac8f02ce6d" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/vanyakosmos/83ba165b288af32cf85e2cac8f02ce6d</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://pages.github.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实很容易</font><font style="vertical-align: inherit;">，但是第一次使用它</font><a href="http://pages.github.com/" rel="noreferrer"><font style="vertical-align: inherit;">有点奇怪</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就像您第一次在学习编织时必须对3只小猫玩弄一样。</font><font style="vertical-align: inherit;">（好的，还不算太糟）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要一个gh-pages分支：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上github.com寻找</font><font style="vertical-align: inherit;">存储库</font><font style="vertical-align: inherit;">的gh-pages </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分支</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它会将在这里找到的所有HTML页面作为普通HTML直接提供给浏览器。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何获得gh-pages分支？</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单。</font><font style="vertical-align: inherit;">只需在github存储库中创建一个名为的分支即可</font></font><code>gh-pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">指定</font></font><strong><code>--orphan</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建该分支的时间，因为您实际上并不希望将该分支合并回github分支，因此只需要一个包含HTML资源的分支。</font></font></p>

<pre><code>$ git checkout --orphan gh-pages
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的仓库中的其他所有内容又如何呢？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，您可以继续删除它。</font><font style="vertical-align: inherit;">现在，这样做是安全的，因为您一直在关注并创建了一个孤立的分支，该分支无法合并回您的主分支并删除所有代码。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经创建了分支，现在呢？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将该分支推送到github.com，以便他们的自动化可以开始并为您托管这些页面。</font></font></p>

<pre><code>git push -u origin gh-pages
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是..我的HTML仍然没有被提供！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github需要花费几分钟来索引这些分支并启动所需的基础结构来提供内容。</font><font style="vertical-align: inherit;">根据github，最多10分钟。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github.com列出的步骤</font></font></strong></p>

<p><a href="https://help.github.com/articles/creating-project-pages-manually" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://help.github.com/articles/creating-project-pages-manually</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了所有评论，并认为GitHub使得普通用户很难创建GitHub页面，直到我访问</font></font><a href="https://help.github.com/articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面为止</font><font style="vertical-align: inherit;">，其中明确提到在相关仓库的设置页面下有一个“ GitHub页面”部分，您可以在其中选择选项“对GitHub Pages使用master分支”。</font><font style="vertical-align: inherit;">和voilà!! ...在</font><a href="https://username.github.io/reponame" rel="noreferrer"><font style="vertical-align: inherit;">https://username.github.io/reponame</font></a><font style="vertical-align: inherit;">上签出特定的回购协议</font></font><a href="https://username.github.io/reponame" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><img src="https://i.stack.imgur.com/YClog.png" alt="屏幕截图以支持我的答案"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想下载档案，可以使用</font></font><a href="http://pages.github.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub Pages</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呈现。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将存储库分叉到您的帐户。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在计算机上本地克隆</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个</font></font><code>gh-pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分支（如果已经存在，请将其删除，然后基于</font><font style="vertical-align: inherit;">新建一个</font><font style="vertical-align: inherit;">分支</font></font><code>master</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将分支推回GitHub。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在查看网页</font><font style="vertical-align: inherit;">`</font></font><code>http://</code><strong><code>username</code></strong><code>.github.io/</code><strong><code>repo</code></strong><font style="vertical-align: inherit;"></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码中：</font></font></p>

<pre><code>git clone git@github.com:username/repo.git<font></font>
cd repo<font></font>
git branch gh-pages<font></font>
# Might need to do this first: git branch -D gh-pages<font></font>
git push -u origin gh-pages # Push the new branch back to github<font></font>
Go to http://username.github.io/repo<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是直接的答案，但我认为这是一个很好的选择。 </font></font></p>

<p><a href="http://www.s3auth.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.s3auth.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许您将页面托管在基本身份验证之后。</font><font style="vertical-align: inherit;">非常适合私有github存储库中的api docs之类的东西。</font><font style="vertical-align: inherit;">只是将s3放到您的api构建中即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://rawgit.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RawGit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://rawgit.com/necolas/css3-social-signin-buttons/master/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font><a href="http://rawgit.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//rawgit.com/necolas/css3-social-signin-buttons/master/index.html</font></a></font><br>
<a href="https://rawgit.com/necolas/css3-social-signin-buttons/master/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在撰写本文时）</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">它的效果比</font></font><a href="http://htmlpreview.github.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://htmlpreview.github.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好</font><font style="vertical-align: inherit;">，可以提供带有适当Content-Type标头的文件。</font><font style="vertical-align: inherit;">此外，它还提供CDN URL供生产使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在GitHub上预览HTML文件最舒适的方法是转到</font></font><a href="https://htmlpreview.github.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://htmlpreview.github.io/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或仅将其添加到原始URL，即：</font><a href="https://htmlpreview.github.io/?https://github.com/bartaz/impress.js/blob/master/index.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font><a href="https://htmlpreview.github.io/?https://github.com/bartaz/impress.js/blob/master/index.html" rel="noreferrer"><font style="vertical-align: inherit;">//htmlpreview.github.io/?https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://htmlpreview.github.io/?https://github.com/bartaz/impress.js/blob/master/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// github.com/bartaz/impress.js/blob/master/index.html</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
