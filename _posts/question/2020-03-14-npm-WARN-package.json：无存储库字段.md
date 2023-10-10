---
layout: question
title:  npm WARN package.json：无存储库字段
date:   2020-03-14T04:41:51.000Z
description: 我使用以下命令安装了Express.js：sudo npm install -g express我收到以下警告：npm WARN packa...
img: 
author: Gil宝儿
category: question
answer: 11
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下命令安装了Express.js：</font></font></p>

<pre><code>sudo npm install -g express
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到以下警告：</font></font></p>

<pre><code>npm WARN package.json range-parser@0.0.4 No repository field.<font></font>
npm WARN package.json fresh@0.1.0 No repository field.<font></font>
npm WARN package.json methods@0.0.1 No repository field.<font></font>
npm WARN package.json methods@0.0.1 No readme data.<font></font>
npm WARN package.json cookie-signature@1.0.1 No repository field.<font></font>
npm WARN package.json send@0.1.0 No repository field.<font></font>
npm WARN package.json pause@0.0.1 No repository field.<font></font>
npm WARN package.json bytes@0.2.0 No repository field.<font></font>
npm WARN package.json github-url-from-git@1.1.1 No repository field.<font></font>
npm WARN package.json assert-plus@0.1.2 No repository field.<font></font>
npm WARN package.json ctype@0.5.2 No repository field.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Node.js和Express.js的新手。</font><font style="vertical-align: inherit;">为什么会有以上警告？</font><font style="vertical-align: inherit;">我应该担心吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npm install -g angular-cli代替</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    npm install -g @ nagular / cli安装Angular</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，可能您可以通过</font></font><code>-f</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令末尾添加</font><font style="vertical-align: inherit;">来重新/创建一个</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Eva</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将帮助大家找到正确的详细信息 </font></font></p>

<pre><code>npm ls dist-tag
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，它将显示正确的信息，因此您不会猜测版本文件的位置等</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请享用 ：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想指定存储库，则可以将以下行添加到</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中：</font></font></p>

<pre><code>"description":"",<font></font>
"version":"0.0.1",<font></font>
"private":true,<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那对我有用。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
通过添加</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您无需链接到存储库。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免这样的警告：</font></font></strong></p>

<pre><code>npm WARN project.com@1.0.0 No repository field.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须在项目package.json中定义存储库。</font><font style="vertical-align: inherit;">如果您正在开发而没有发布到存储库，则可以</font></font><code>"private": true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中</font><font style="vertical-align: inherit;">进行设置</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong></p>

<pre><code>{<font></font>
  "name": "test.loc",<font></font>
  "version": "1.0.0",<font></font>
  "private": true,<font></font>
  ...<font></font>
  "license": "ISC"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM文档有关此内容：</font><a href="https://docs.npmjs.com/files/package.json" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.npmjs.com/files/package.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.npmjs.com/files/package.json</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
您项目的</font><strong><font style="vertical-align: inherit;">简单单词</font></strong><font style="vertical-align: inherit;"> package.json中没有存储库属性，您必须添加它，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且您必须在package.json中添加存储库，如下所示 </font></font></p>

<p><a href="https://i.stack.imgur.com/TAQ2U.png" rel="noreferrer"><img src="https://i.stack.imgur.com/TAQ2U.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后让我根据您的情况进行解释</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须添加如下的存储库字段 </font></font></p>

<pre><code>  "repository" : {     <font></font>
     "type" : "git",<font></font>
      "url" : "http://github.com/npm/express.git" <font></font>
   }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你跑了</font></font><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">该命令将遍历所有内容...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易逆天</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是从自己那里得到的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需将</font></font><code>repository</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到其中。</font><font style="vertical-align: inherit;">（使用指向您实际存储库的链接）：</font></font></p>

<pre><code>"repository" : { <font></font>
   "type" : "git",<font></font>
   "url" : "https://github.com/npm/npm.git"<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚西门</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如dan_nl所述，您可以在package.json中添加一个私有的伪造存储库。</font><font style="vertical-align: inherit;">您甚至不需要名称和版本：</font></font></p>

<pre><code>{<font></font>
  ...,<font></font>
  "repository": {<font></font>
    "private": true<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：此功能未记录，可能无法使用。</font><font style="vertical-align: inherit;">选择以下选项。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更妙的是：</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">标志。</font><font style="vertical-align: inherit;">这样npm也不要求自述文件：</font></font></p>

<pre><code>{<font></font>
  "name": ...,<font></font>
  "description": ...,<font></font>
  "version": ...,<font></font>
  "private": true<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不打算将应用程序放置在实际的存储库中，则还可以将其标记为私有。</font></font></p>

<pre><code>{<font></font>
  "name": "my-application",<font></font>
  "version": "0.0.1",<font></font>
  "private": true<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自NPM v1.2.20起，这只是检查，他们将其报告为警告。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，不用担心，有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sooooooo</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然没有很多包</font></font><code>repository</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在自己的领域</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该字段用于提供信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是包作者，则将放入</font></font><code>repository</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>"repository": {<font></font>
  "type": "git",<font></font>
  "url": "git://github.com/username/repository.git"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关该</font></font><a href="https://docs.npmjs.com/files/package.json#repository" rel="noreferrer"><code>repository</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段的</font><font style="vertical-align: inherit;">更多信息</font><font style="vertical-align: inherit;">，并查看已</font></font><a href="https://github.com/isaacs/npm/issues/3568" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记录的错误</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多详细信息。</font></font></p>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font></font></em> <a href="https://stackoverflow.com/a/23355019/2083599"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@dan_nl最初报告的那样</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以在中设置</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">密钥</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这不仅可以阻止您意外地</font></font><code>npm publish</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的应用程序中</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，而且还可以阻止NPM打印有关</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的</font><font style="vertical-align: inherit;">警告</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>{<font></font>
  "name": "my-super-amazing-app",<font></font>
  "version": "1.0.0",<font></font>
  "private": true<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
