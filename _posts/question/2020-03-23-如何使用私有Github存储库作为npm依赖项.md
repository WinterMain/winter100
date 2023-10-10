---
layout: question
title:  如何使用私有Github存储库作为npm依赖项
date:   2020-03-23T11:59:33.000Z
description: 我如何列出一个私有的Github仓库作为"dependency"in package.json？我尝试了npm的Github URL语法，例如ryanve...
img: 
author: 阿飞
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何列出一个私有的Github仓库作为</font></font><code>"dependency"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我尝试了</font></font><a href="https://docs.npmjs.com/files/package.json#github-urls"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm的Github URL</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，例如</font></font><code>ryanve/example</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package文件夹中</font><font style="vertical-align: inherit;">这样做</font><font style="vertical-align: inherit;">会导致私有依赖项出现“无法安装”错误。</font><font style="vertical-align: inherit;">是否有特殊的语法（或其他机制）用于依赖私有存储库？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3005篇《如何使用私有Github存储库作为npm依赖项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry猴子A</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用git有一个https格式</font></font></p>

<pre><code>https://github.com/equivalent/we_demand_serverless_ruby.git
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此格式接受用户+密码</font></font></p>

<pre><code>https://bot-user:xxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/equivalent/we_demand_serverless_ruby.git
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以做的是创建一个新用户，将其用作</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">机器人</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，仅添加足够的权限，使其可以读取要加载到NPM模块中的存储库，然后直接将其存储在您的NPM模块中。
</font></font><code>packages.json</code> </p>

<pre><code> Github &gt; Click on Profile &gt; Settings &gt; Developer settings &gt; Personal access tokens &gt; Generate new token
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“选择作用域”部分中，检查on </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">repo</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：完全控制私有存储库</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样令牌可以访问用户可以看到的私有仓库</font></font></p>

<p>Now create new group in your organization, add this user to the group and  add only repositories that you expect
to be pulled this way (READ ONLY permission !)</p>

<p>You need to be sure to push this config <strong>only to private repo</strong></p>

<p>Then you can add this to your   /  packages.json (bot-user is
name of user, xxxxxxxxx is the generated personal token)</p>

<pre><code>// packages.json<font></font>
<font></font>
<font></font>
{<font></font>
  // ....<font></font>
    "name_of_my_lib": "https://bot-user:xxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/ghuser/name_of_my_lib.git"<font></font>
  // ...<font></font>
}<font></font>
</code></pre>

<p><a href="https://blog.eq8.eu/til/pull-git-private-repo-from-github-from-npm-modules-or-bundler.html" rel="noreferrer">https://blog.eq8.eu/til/pull-git-private-repo-from-github-from-npm-modules-or-bundler.html</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人在为Git Lab寻找其他选项，而以上选项不起作用，那么我们还有另一个选项。</font><font style="vertical-align: inherit;">对于本地安装的Git Lab服务器，我们发现下面的方法允许我们包括软件包依赖关系。</font><font style="vertical-align: inherit;">我们生成并使用了访问令牌来做到这一点。</font></font></p>

<pre><code>$ npm install --save-dev https://git.yourdomain.com/userOrGroup/gitLabProjectName/repository/archive.tar.gz?private_token=InsertYourAccessTokenHere
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，如果以这种方式使用访问密钥，则它应具有一组有限的权限。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过</font></font><a href="https://developer.github.com/guides/managing-deploy-keys/#https-cloning-with-oauth-tokens" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https和oauth </font></font></a> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ssh完成。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https和oauth：</font></font></strong> <a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有“回购”范围</font><a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/" rel="noreferrer"><font style="vertical-align: inherit;">的访问令牌</font></a><font style="vertical-align: inherit;">，</font></font><a href="http://rzrsharp.net/2013/07/02/private-github-repos-with-npm-and-heroku.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用以下语法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"package-name": "git+https://&lt;github_token&gt;:x-oauth-basic@github.com/&lt;user&gt;/&lt;repo&gt;.git"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ssh：</font></font></strong> <a href="https://help.github.com/articles/generating-ssh-keys/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置ssh</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后使用以下语法：</font></font></p>

<pre><code>"package-name": "git+ssh://git@github.com:&lt;user&gt;/&lt;repo&gt;.git"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请注意在用户之前使用冒号而不是斜杠）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
