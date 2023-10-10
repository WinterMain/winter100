---
layout: question
title:  如何使用react-router在浏览器中停止/＃/？
date:   2020-03-12T07:16:26.000Z
description: /#/在使用react-router时，有什么方法可以防止在浏览器的地址栏中显示？那就是ReactJS。即，单击链接以转到新路线将显示localhost ...
img: 
author: 番长神无
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>/#/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用react-router时，有什么</font><font style="vertical-align: inherit;">方法可以防止</font><font style="vertical-align: inherit;">在浏览器的地址栏中显示？</font><font style="vertical-align: inherit;">那就是ReactJS。</font><font style="vertical-align: inherit;">即，单击链接以转到新路线将显示</font></font><code>localhost:3000/#/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或
 </font></font><code>localhost:3000/#/about</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">取决于路线。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1043篇《如何使用react-router在浏览器中停止/＃/？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋阿飞小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不需要支持IE8，则可以使用“浏览器历史记录”，然后使用react-router </font></font><code>window.pushState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替设置哈希。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体如何执行取决于您使用的React Router版本：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v4：</font><a href="https://reacttraining.com/react-router/web/api/BrowserRouter" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://reacttraining.com/react-router/web/api/BrowserRouter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//reacttraining.com/react-router/web/api/BrowserRouter</font></font></a></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v3：</font><a href="https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v2：</font><a href="https://github.com/ReactTraining/react-router/blob/v2.0.0/docs/guides/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/ReactTraining/react-router/blob/v2.0.0/docs/guides/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/v2.0.0/docs/guides/Histories.md</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v1：</font><a href="https://github.com/ReactTraining/react-router/blob/1.0.x/docs/guides/basics/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/ReactTraining/react-router/blob/1.0.x/docs/guides/basics/Histories.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/1.0.x/docs/guides/basics/Histories.md</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您实际上可以使用.htaccess来完成此操作。</font><font style="vertical-align: inherit;">浏览器通常需要查询字符串定界符</font></font><code>?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定查询字符串在何处开始以及目录路径在何处结束。</font><font style="vertical-align: inherit;">我们想要的最终结果是</font></font><code>www.mysite.com/dir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，我们需要在Web服务器搜索它认为我们</font><font style="vertical-align: inherit;">想要</font><font style="vertical-align: inherit;">的目录之前捕获问题</font></font><code>/dir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我们将</font></font><code>.htaccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">放置</font><font style="vertical-align: inherit;">在项目的根目录中。</font></font></p>

<pre><code>    # Setting up apache options<font></font>
    AddDefaultCharset utf-8<font></font>
    Options +FollowSymlinks -MultiViews -Indexes<font></font>
    RewriteEngine on<font></font>
<font></font>
    # Setting up apache options (Godaddy specific)<font></font>
    #DirectoryIndex index.php<font></font>
    #RewriteBase /<font></font>
<font></font>
<font></font>
    # Defining the rewrite rules<font></font>
    RewriteCond %{SCRIPT_FILENAME} !-d<font></font>
    RewriteCond %{SCRIPT_FILENAME} !-f<font></font>
<font></font>
    RewriteRule ^.*$ ./index.html<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用window.location.pathname获取查询参数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以根据需要避免使用react路由，并且也可以仅操纵url和浏览器历史记录。</font><font style="vertical-align: inherit;">希望这可以帮助某人...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint-override"><code>Router.run(routes, Router.HistoryLocation, function (Handler) {<font></font>
  React.render(&lt;Handler/&gt;, document.body);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于当前版本0.11及更高版本，您需要添加</font></font><code>Router.HistoryLocation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>Router.run()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>&lt;Routes&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在已弃用。</font></font><a href="https://github.com/rackt/react-router/blob/d49199e4b939a01f1e9f18188166a8f8a9f52a5b/UPGRADE_GUIDE.md#react-012"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 0.12.x HistoryLocation的实现，</font><a href="https://github.com/rackt/react-router/blob/d49199e4b939a01f1e9f18188166a8f8a9f52a5b/UPGRADE_GUIDE.md#react-012"><font style="vertical-align: inherit;">请参阅《升级指南》</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
