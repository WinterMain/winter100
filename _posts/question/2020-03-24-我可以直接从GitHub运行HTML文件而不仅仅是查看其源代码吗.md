---
layout: question
title:  我可以直接从GitHub运行HTML文件，而不仅仅是查看其源代码吗？
date:   2020-03-24T07:09:14.000Z
description: 如果我.html在GitHub存储库中有一个文件（例如，用于运行一组JavaScript测试），我是否可以通过任何方式直接查看该页面，从而运行测试？例...
img: 
author: Mandy蛋蛋
category: question
answer: 9
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我</font></font><code>.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在GitHub存储库中</font><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">文件（例如，用于运行一组JavaScript测试），我是否可以通过任何方式直接查看该页面，从而运行测试？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我是否能以某种方式实际看到</font></font><a href="https://github.com/jquery/jquery/blob/master/test/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery测试套件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所产生的测试结果</font><font style="vertical-align: inherit;">，而无需将存储库下载或克隆到本地驱动器并在其中运行呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这基本上会将GitHub置于静态内容托管业务中，但是话又说回来，他们只需要将其mime类型从更改为</font></font><a href="https://raw.github.com/jquery/jquery/master/test/index.html" rel="noreferrer"><code>text/plain</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可</font></font><code>text/html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3422篇《我可以直接从GitHub运行HTML文件，而不仅仅是查看其源代码吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在github中编辑html和js并进行预览。</font><font style="vertical-align: inherit;">我想在github中完成它以立即提交并保存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试了rawgithub.com，但rawgithub.com不是实时的（它的缓存每分钟刷新一次）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我迅速开发了自己的解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此的node.js解决方案：</font><a href="https://github.com/shimondoodkin/rawgithub" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/shimondoodkin/rawgithub" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/shimondoodkin/rawgithub</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在github中有一个angular或react项目，则可以使用</font></font><a href="http://stackblitz.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackblitz.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中在线运行该应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入您的Github用户名和存储库名称以在线查看应用程序-stackblitz.com/github/{GITHUB_USERNAME}/{REPO_NAME}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使没有将Node_Modules上传到Github，这也可以工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前支持使用@ angular / cli和create-react-app的项目。</font><font style="vertical-align: inherit;">对Ionic，Vue和自定义Webpack配置的支持即将推出！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">raw.github.com/user/repository </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再存在</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将href链接到github中的源代码，您必须使用github链接到原始源：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">raw.githubusercontent.com/user/repository/master/file.extension</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<pre><code>&lt;html&gt;<font></font>
...<font></font>
...<font></font>
&lt;head&gt;    <font></font>
&lt;script src="https://raw.githubusercontent.com/amiahmadtouseef/tutorialhtmlfive/master/petdecider/script.js"&gt;&lt;/script&gt;<font></font>
...<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
...<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案仅适用于chrome浏览器。</font><font style="vertical-align: inherit;">我不确定其他浏览器。</font></font></p>

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
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为</font></font><a href="http://htmlpreview.github.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub HTML Preview</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的新工具</font><font style="vertical-align: inherit;">，它可以完全满足您的需求。</font><font style="vertical-align: inherit;">只需添加</font></font><code>http://htmlpreview.github.com/?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到任何HTML文件的URL，例如</font></font><a href="http://htmlpreview.github.com/?https://github.com/twbs/bootstrap/blob/gh-pages/2.3.2/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://htmlpreview.github.com/?https://github.com/twbs/bootstrap/blob/gh-pages/2.3.2/index.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：该工具实际上是github.io页面，与github无关。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个小的Greasemonkey脚本，它将为github上的html页面添加一个CDN按钮。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标页面的格式为：</font><a href="https://cdn.rawgit.com/user/repo/master/filename.js" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://cdn.rawgit.com/user/repo/master/filename.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//cdn.rawgit.com/user/repo/master/filename.js</font></font></a></p>

<pre><code><font></font>
// ==UserScript==<font></font>
// @name        cdn.rawgit.com<font></font>
// @namespace   github.com<font></font>
// @include     https://github.com/*/blob/*.html<font></font>
// @version     1<font></font>
// @grant       none<font></font>
// ==/UserScript==<font></font>
<font></font>
var buttonGroup = $(".meta .actions .button-group");<font></font>
var raw = buttonGroup.find("#raw-url");<font></font>
var cdn = raw.clone();<font></font>
cdn.attr("id", "cdn-url");<font></font>
cdn.attr("href", "https://cdn.rawgit.com" + cdn.attr("href").replace("/raw/","/") );<font></font>
cdn.text("CDN");<font></font>
cdn.insertBefore(raw);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要piggy带@niutech的答案，您可以制作一个非常简单的书签片段。</font></font><br>
<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Chrome，尽管它与其他浏览器类似</font></font></em>  </p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键点击您的书签栏</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加文件</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其命名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github HTML</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型</font></font><code>javascript:top.location="http://htmlpreview.github.com/?"+document.URL</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在github文件查看页面（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是raw.github.com</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）上时，单击书签链接，您会很</font><em><font style="vertical-align: inherit;">高兴</font></em><font style="vertical-align: inherit;">。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以分支gh-pages来运行您的代码，也可以尝试以下扩展（Chrome，Firefox）：</font><a href="https://github.com/ryt/githtml"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/ryt/githtml"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ryt/githtml</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要测试，则可以将JS文件嵌入到：</font><a href="http://jsperf.com/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://jsperf.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsperf.com/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能要使用</font></font><a href="https://raw.githack.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">raw.githack.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它支持GitHub，Bitbucket，Gitlab和GitHub要点。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的GitHub</font></font></h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前：</font></font></h3>

<p><code>https://raw.githubusercontent.com/[user]/[repository]/[branch]/[filename.ext]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的情况下</font></font><code>.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后：</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发展（节流）</font></font></strong></p>

<p><code>https://raw.githack.com/[user]/[repository]/[branch]/[filename.ext]</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产量（CDN）</font></font></strong></p>

<p><code>https://rawcdn.githack.com/[user]/[repository]/[branch]/[filename.ext]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的情况下</font></font><code>.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font></p>

<hr>

<p><a href="https://raw.githack.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">raw.githack.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还支持其他服务：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比特桶</font></font></h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前：</font></font></h3>

<p><code>https://bitbucket.org/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后：</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发展（节流）</font></font></strong></p>

<p><code>https://bb.githack.com/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产量（CDN）</font></font></strong></p>

<p><code>https://bbcdn.githack.com/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚搏体育app</font></font></h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前：</font></font></h3>

<p><code>https://gitlab.com/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后：</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发展（节流）</font></font></strong></p>

<p><code>https://gl.githack.com/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产量（CDN）</font></font></strong></p>

<p><code>https://glcdn.githack.com/[user]/[repository]/raw/[branch]/[filename.ext]</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub要点</font></font></h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前：</font></font></h3>

<p><code>https://gist.githubusercontent.com/[user]/[gist]/raw/[revision]/[filename.ext]</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后：</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发展（节流）</font></font></strong></p>

<p><code>https://gist.githack.com/[user]/[gist]/raw/[revision]/[filename.ext]</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产量（CDN）</font></font></strong></p>

<p><code>https://gistcdn.githack.com/[user]/[gist]/raw/[revision]/[filename.ext]</code></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：rawgit已停产</font></font></strong></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
