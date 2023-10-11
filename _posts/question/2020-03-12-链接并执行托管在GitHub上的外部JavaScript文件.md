---
layout: question
title:  链接并执行托管在GitHub上的外部JavaScript文件
date:   2020-03-12T07:38:07.000Z
description: 当我尝试将本地JavaScript文件的链接引用更改为GitHub原始版本时，我的测试文件停止工作。错误是：  拒绝从...执行脚本，因为它的MIM...
img: 
author: 卡卡西Mandy
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试将本地JavaScript文件的链接引用更改为GitHub原始版本时，我的测试文件停止工作。</font><font style="vertical-align: inherit;">错误是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拒绝从...执行脚本，因为它的MIME类型（</font></font><code>text/plain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）无法执行，并且启用了严格的MIME类型检查。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以禁用此行为，或者有一种服务可以链接到GitHub原始文件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作代码：</font></font></p>

<pre><code>&lt;script src="bootstrap-wysiwyg.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非工作代码：</font></font></p>

<pre><code>&lt;script src="https://raw.github.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js"&gt;&lt;/script&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1071篇《链接并执行托管在GitHub上的外部JavaScript文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原版的</font></font></strong></p>

<pre><code>https://raw.githubusercontent.com/antelove19/qrcodejs/master/qrcode.min.js
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cdn.jsdelivr.net</font></font></strong></p>

<pre><code>https://cdn.jsdelivr.net/gh/antelove19/qrcodejs/qrcode.min.js
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我和你有同样的问题，我所做的就是更改为 </font></font></p>

<pre><code>&lt;script type="application/javascript" src="bootstrap-wysiwyg.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果在服务器端生成标记，则只需获取并注入即可。</font><font style="vertical-align: inherit;">例如，在JSTL中，您可以执行以下操作：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    &lt;c:import url="https://raw.github.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js" /&gt;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们不允许进行热链接是有原因的，因此如果您想成为好公民，则可能是不好的形式。</font><font style="vertical-align: inherit;">我建议您缓存该javascript，并仅在您认为合适时才定期重新获取。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>raw.github.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是对文件资产的原始访问，而是由Rails渲染的视图。</font><font style="vertical-align: inherit;">因此访问</font></font><code>raw.github.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比需要的要重得多。</font><font style="vertical-align: inherit;">我不知道为什么</font></font><code>raw.github.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要实现为Rails视图。</font><font style="vertical-align: inherit;">GitHub没有解决此路由问题，而是添加了</font></font><code>X-Content-Type-Options: nosniff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将脚本放到 </font></font><code>user.github.io/repo</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用诸如rawgit.com之类的第三方CDN。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的办法：</font></font><br>
<code>&lt;script type="text/plain" src="http://raw.githubusercontent.com/user/repo/branch/file.js"&gt;&lt;/script&gt;</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
通过GitHub上提供服务，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font></p><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可靠。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
随着</font></font><code>text/plain</code><br>
<a href="https://i.stack.imgur.com/tWq0I.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/tWq0I.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 无</font></font><code>text/plain</code><br>
<a href="https://i.stack.imgur.com/wXpmH.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/wXpmH.png" alt="在此处输入图片说明"></a><p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱JimPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将文件上传到github后，您可以将其用作外部源或免费托管。</font><font style="vertical-align: inherit;">特洛伊·奥尔福德（Troy Alford）在上面已经做了充分解释。</font><font style="vertical-align: inherit;">但是为了使操作更简单，让我告诉您一些简单的步骤，然后可以在站点中使用github原始文件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您文件的链接：</font></font></p>

<p><a href="https://raw.githubusercontent.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://raw.githubusercontent.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在要执行它，您必须删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https：//</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">raw</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><strong><font style="vertical-align: inherit;">githubusercontent</font></strong><font style="vertical-align: inherit;">之间的dot（。）。</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rawgithubusercontent.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当您访问此链接时，您将获得一个可用于调用JavaScript的链接：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最后的链接：</font></font></p>

<p><a href="https://rawgit.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://rawgit.com/mindmup/bootstrap-wysiwyg/master/bootstrap-wysiwyg.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，如果您托管一个css文件，则必须如上所述进行操作。</font><font style="vertical-align: inherit;">这是获得简单链接以调用托管在github上的外部CSS或javascript文件的最简单方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这是有帮助的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考网址：</font><a href="http://101helper.blogspot.com/2015/11/store-blogger-codes-on-github-boost-blogger-speed.html" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://101helper.blogspot.com/2015/11/store-blogger-codes-on-github-boost-blogger-speed.html</font></font><a href="http://101helper.blogspot.com/2015/11/store-blogger-codes-on-github-boost-blogger-speed.html" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现由于文件开头的注释而导致显示错误，您可以解决此问题，只需创建没有注释的自己的文件并推送至git，就不会显示任何错误 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了证明您可以使用易于分页的相同代码尝试这两个文件：</font></font></p>

<p><a href="https://cdn.rawgit.com/dsuntos/cdn/866bb30f/pagination.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有评论</font></font></a></p>

<p><a href="https://cdn.rawgit.com/st3ph/jquery.easyPaginate/083746fb/lib/jquery.easyPaginate.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有评论</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub Pages</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是GitHub针对此问题的官方解决方案。</font></font></p>

<p><code>raw.githubusercontent</code> makes all files use the <code>text/plain</code> MIME type, even if the file is a CSS or JavaScript file. So going to <code>https://raw.githubusercontent.com/‹user›/‹repo›/‹branch›/‹filepath›</code> will not be the correct MIME type but instead a plaintext file, and linking it via <code>&lt;link href="..."/&gt;</code> or <code>&lt;script src="..."&gt;&lt;/script&gt;</code> won’t work—the CSS won’t apply / the JS won’t run.</p>

<p><a href="https://pages.github.com/" rel="noreferrer">GitHub Pages</a> hosts your repo at a special URL, so all you have to do is check-in your files and push. Note that in most cases, GitHub Pages requires you to commit to a special branch, <code>gh-pages</code>.</p>

<p>On your new site, which is usually <code>https://‹user›.github.io/‹repo›</code>, every file committed to the <code>gh-pages</code> branch (the most recent commit) is present at this url. So then you can link to your js file via <code>&lt;script src="https://‹user›.github.io/‹repo›/file.js"&gt;&lt;/script&gt;</code>, and this will be the correct MIME type.</p>

<h2>Do you have build files?</h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，我的建议是将此分支并行运行</font></font><code>master</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><code>gh-pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分支上，您可以编辑</font></font><code>.gitignore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检入</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">站点所需的所有dist / build文件（例如，如果您有任何缩小/编译的文件），而</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">分支</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略它们</font></font></em><font style="vertical-align: inherit;"></font><code>master</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这很有用，因为您通常不希望在常规存储库中跟踪构建文件中的更改。</font><font style="vertical-align: inherit;">每次您要更新托管文件时，只需合并</font></font><code>master</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>gh-pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，重建，提交然后推送即可。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（提示：您可以通过以下步骤在同一提交中合并和重建：）</font></font></em></p>

<pre><code>$ git checkout gh-pages<font></font>
$ git merge --no-ff --no-commit master  # prepare the merge but don’t commit it (as if there were a merge conflict)<font></font>
$ npm run build                         # (or whatever your build process is)<font></font>
$ git add .                             # stage the newly built files<font></font>
$ git merge --continue                  # commit the merge<font></font>
$ git push origin gh-pages<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个很好的办法解决这一点，现在，通过使用</font></font><a href="//www.jsdelivr.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsdelivr.net</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在GitHub上找到您的链接，然后单击“原始”版本。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制URL。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font><code>raw.githubusercontent.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>cdn.jsdelivr.net</code></li>
<li><font style="vertical-align: inherit;"></font><code>/gh/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的用户名之前</font><font style="vertical-align: inherit;">插入</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>branch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（可选）插入</font><font style="vertical-align: inherit;">您要链接</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>@version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您不这样做，则会获得</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这可能会导致长期缓存）</font></font></li>
</ol>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>



<pre class="lang-none prettyprint-override"><code>http://raw.githubusercontent.com/&lt;username&gt;/&lt;repo&gt;/&lt;branch&gt;/path/to/file.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此URL获取最新版本：</font></font></p>

<pre class="lang-none prettyprint-override"><code>http://cdn.jsdelivr.net/gh/&lt;username&gt;/&lt;repo&gt;/path/to/file.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此URL获取特定版本或提交哈希：</font></font></p>

<pre class="lang-none prettyprint-override"><code>http://cdn.jsdelivr.net/gh/&lt;username&gt;/&lt;repo&gt;@&lt;version or hash&gt;/path/to/file.js
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于生产环境</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请考虑针对特定的标记或提交哈希而不是分支。</font><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接可能会导致文件长期缓存，从而导致在推送新版本时不会更新链接。</font><font style="vertical-align: inherit;">通过commit-hash或tag链接到文件使链接对于版本是唯一的。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么需要这个？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2013年，GitHub开始使用</font></font><code>X-Content-Type-Options: nosniff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它指示更多现代浏览器强制执行严格的MIME类型检查。</font><font style="vertical-align: inherit;">然后，它以服务器返回的MIME类型返回原始文件，从而防止浏览器按预期使用文件（如果浏览器接受该设置）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此主题的背景，请参考</font></font><a href="//bugs.chromium.org/p/chromium/issues/detail?id=180007" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此讨论线程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://raw.githack.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://raw.githack.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发现该站点提供了CDN</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>nosniff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http头</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>mime type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过扩展名</font><font style="vertical-align: inherit;">修复</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和这个网站：</font></font></p>

<p><a href="https://rawgit.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://rawgit.com/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：RawGit已达到使用寿命</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">An</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>rawgithub.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重定向到</font></font><code>rawgit.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以上面的例子现在是</font></font></p>

<p><code>http://rawgit.com/user/package/master/link.min.js</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaEva斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弄清楚和简短</font></font></p>

<p><code>//raw.githubusercontent.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><code>//rawgit.com</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这是由rawgit的开发托管处理的，而不是由生产托管的CDN处理的</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不再可能。</font><font style="vertical-align: inherit;">GitHub已明确禁用JavaScript热链接，并且较新版本的浏览器会遵守该设置。</font></font></p>

<p><a href="//github.com/blog/1482" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：Chrome和Firefox支持nosniff标头</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
