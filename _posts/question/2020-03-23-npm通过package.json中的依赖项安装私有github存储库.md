---
layout: question
title:  npm通过package.json中的依赖项安装私有github存储库
date:   2020-03-23T07:31:10.000Z
description: 我正在尝试通过npm安装github私有存储库，其中包括其他私有github存储库作为依赖项。尝试了很多方法和帖子，但是都没有用。这是我在做什么：...
img: 
author: Eva西门
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过npm安装github私有存储库，其中包括其他私有github存储库作为依赖项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试了很多方法和帖子，但是都没有用。</font><font style="vertical-align: inherit;">这是我在做什么：</font></font></p>

<pre><code>npm install git+https://github.com/myusername/mygitrepository.git
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中就像： </font></font></p>

<pre><code>"dependencies": {<font></font>
    "repository1name": "git+https://github.com/myusername/repository1.git",<font></font>
    "repository2name": "git+https://github.com/myusername/repository2.git"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有</font></font><a href="https://stackoverflow.com/questions/21095054/ssh-key-still-asking-for-password-and-passphrase#25721662"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSH密钥-仍在询问密码和密码</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>ssh-add ~/.ssh/id_rsa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有本地钥匙串的情况下</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这避免了必须弄乱令牌。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是如何使用Github令牌而不在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">发布的更详细的版本</font><font style="vertical-align: inherit;">。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建个人github访问令牌</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在〜/ .gitconfig中重写设置URL</font></font></li>
</ol>

<pre><code>git config --global url."https://&lt;TOKEN HERE&gt;:x-oauth-basic@github.com/".insteadOf https://x-oauth-basic@github.com/
</code></pre>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装专用存储库。</font><font style="vertical-align: inherit;">详细日志级别，用于调试访问错误。</font></font></li>
</ol>

<pre><code>npm install --loglevel verbose --save git+https://x-oauth-basic@github.com/&lt;USERNAME HERE&gt;/&lt;REPOSITORY HERE&gt;.git#v0.1.27
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果无法访问Github，请尝试运行以下</font></font><code>git ls-remote ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font><code>npm install will print</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Git是</font></font><code>curl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">后台使用</font><font style="vertical-align: inherit;">的，因此可以使用</font></font><strong><code>~/.netrc</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有凭据的文件。</font><font style="vertical-align: inherit;">对于GitHub，它看起来像这样：</font></font></p>

<pre><code>machine github.com<font></font>
  login &lt;github username&gt;<font></font>
  password &lt;password OR github access token&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择使用</font></font><code>access tokens</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以通过以下方式生成：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置-&gt;开发人员设置-&gt;个人访问令牌</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在自己的公司中使用Github Enterprise，这也应该起作用。</font><font style="vertical-align: inherit;">只需将您的企业github url放在该</font></font><code>machine</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段中即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我的私有存储库参考，我不想包含安全令牌，并且其他任何简单方法（即仅在package.json中指定）都无效。</font><font style="vertical-align: inherit;">这是起作用的：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去了GitHub.com</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到私有存储库</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击“克隆或下载”和复制的网址（与上面的示例不匹配）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了＃commit-sha</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑npm安装</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们指出，有多种方法可以做到这一点，但最短的版本是：</font></font></p>

<pre><code>// from master<font></font>
"depName": "user/repo",<font></font>
<font></font>
// specific branch<font></font>
"depName": "user/repo#branch",<font></font>
<font></font>
// specific commit<font></font>
"depName": "user/repo#commit",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font></font></p>

<pre><code>"dependencies" : {<font></font>
  "hexo-renderer-marked": "amejiarosario/hexo-renderer-marked#patch-1",<font></font>
  "hexo-renderer-marked": "amejiarosario/hexo-renderer-marked#2249507",<font></font>
  "hexo-renderer-marked": "amejiarosario/hexo-renderer-marked",<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可接受的答案有效，但我不太希望将安全令牌粘贴到 </font></font><code>package.json</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在其他地方找到了它，只需运行</font></font><a href="https://git-scm.com/docs/git-config#git-config-urlltbasegtinsteadOf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">git-config联机帮助页中记录</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的一次性命令即可</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf git@github.com:
</code></pre>

<p><code>GITHUB_TOKEN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可以设置为environmnet变量或直接粘贴</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我安装像这样的私有github仓库： </font></font><code>npm install user/repo --save</code></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Heroku中也可以使用，只需将上述</font></font><code>git config ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font><code>heroku-prebuild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并设置</font></font><code>GITHUB_TOKEN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为Heroku配置变量即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>"dependencies": {<font></font>
  "some-package": "github:github_username/some-package"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要不就</font></font></p>

<pre><code>"dependencies": {<font></font>
  "some-package": "github_username/some-package"<font></font>
}<font></font>
</code></pre>

<p><a href="https://docs.npmjs.com/files/package.json#github-urls" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/files/package.json#github-urls</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下在我需要的所有情况下都可以正常工作： </font></font></p>

<pre><code>"dependencies": {<font></font>
"GitRepo": "git+https://&lt;token-from-github&gt;:x-oauth-basic@github.com/&lt;user&gt;/&lt;GitRepo&gt;.git"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些来这里访问公共目录的人，请参阅npm docs：</font><a href="https://docs.npmjs.com/files/package.json#git-urls-as-dependencies"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://docs.npmjs.com/files/package.json#git-urls-as-dependencies</font></font><a href="https://docs.npmjs.com/files/package.json#git-urls-as-dependencies"><font style="vertical-align: inherit;"></font></a></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Git URL作为依赖项</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Git网址可以采用以下形式：</font></font></p>

<pre><code>git://github.com/user/project.git#commit-ish<font></font>
git+ssh://user@hostname:project.git#commit-ish<font></font>
git+ssh://user@hostname/project.git#commit-ish<font></font>
git+http://user@hostname/project/blah.git#commit-ish<font></font>
git+https://user@hostname/project/blah.git#commit-ish<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">commit-ish可以是任何标签，sha或分支，可以将其作为git checkout的参数提供。</font><font style="vertical-align: inherit;">默认值为master。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>"dependencies" : {<font></font>
  "name1" : "git://github.com/user/project.git#commit-ish",<font></font>
  "name2" : "git://github.com/user/project.git#commit-ish"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以尝试以下操作，其中visionmedia / express是名称/存储库：</font></font></p>

<pre><code>"dependencies" : {<font></font>
   "express" : "visionmedia/express"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或（如果npm软件包模块存在）：</font></font></p>

<pre><code>"dependencies" : {<font></font>
  "name": "*"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取自</font></font><a href="https://docs.npmjs.com/files/package.json#git-urls-as-dependencies"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM文档</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
