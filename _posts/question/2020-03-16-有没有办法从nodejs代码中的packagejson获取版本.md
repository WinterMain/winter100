---
layout: question
title:  有没有办法从nodejs代码中的package.json获取版本？
date:   2020-03-16T06:39:12.000Z
description: 有没有办法package.json在nodejs应用中设置版本？我想要这样的东西var port = process.env.PORT || 3000...
img: 
author: 理查德飞云
category: question
answer: 3
tags: Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nodejs应用中</font><font style="vertical-align: inherit;">设置版本</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我想要这样的东西</font></font></p>

<pre><code>var port = process.env.PORT || 3000<font></font>
app.listen port<font></font>
console.log "Express server listening on port %d in %s mode %s", app.address().port, app.settings.env, app.VERSION<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1764篇《有没有办法从nodejs代码中的package.json获取版本？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项1</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳做法是使用npm环境变量从package.json进行版本控制。</font></font></p>

<pre><code>process.env.npm_package_version
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请访问：</font><a href="https://docs.npmjs.com/using-npm/config.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.npmjs.com/using-npm/config.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.npmjs.com/using-npm/config.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当您使用NPM命令启动服务时，这才有效。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速信息：您可以使用process.env.npm_package_ [keyname]读取pacakge.json中的任何值</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项2</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://www.npmjs.com/package/dotenv" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/dotenv</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>.env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">在环境变量中设置版本，</font><font style="vertical-align: inherit;">并在</font></font><code>process.env.version</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些希望</font><font style="vertical-align: inherit;">在服务器端也可以使用</font><font style="vertical-align: inherit;">的安全</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案的人来说，可以使用</font></font><a href="https://www.npmjs.com/package/genversion" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">genversion</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个命令行工具，可从最近的package.json中读取版本，并生成可导入的CommonJS模块文件，以导出该版本。</font><font style="vertical-align: inherit;">免责声明：我是维护者。</font></font></p>

<pre><code>$ genversion lib/version.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我承认客户端安全不是OP的主要意图，但是正如</font></font><a href="https://stackoverflow.com/a/10855054/638546"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mark Wallace</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/a/46287598/638546"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aug的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答所讨论的那样</font><font style="vertical-align: inherit;">，它与客户的需求高度相关，也是我找到此问答的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的应用是使用“ npm start”启动的，则可以简单地使用：</font></font></p>

<pre><code>process.env.npm_package_version
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://docs.npmjs.com/misc/scripts#packagejson-vars" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json vars</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
