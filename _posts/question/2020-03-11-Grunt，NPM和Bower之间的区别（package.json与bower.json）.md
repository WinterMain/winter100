---
layout: question
title:  Grunt，NPM和Bower之间的区别（package.json与bower.json）
date:   2020-03-11T15:24:48.000Z
description: 我是使用npm和bower的新手，在emberjs中构建了我的第一个应用程序 )。我确实有一些关于Rails的经验，所以我熟悉用于列出依赖项的文件（例如...
img: 
author: SamItachi
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是使用npm和bower的新手，在emberjs中构建了我的第一个应用程序:)。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我确实有一些关于Rails的经验，所以我熟悉用于列出依赖项的文件（例如捆绑程序Gemfile）的概念</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问：当我想添加一个包（并检查依赖性进入GIT），在那里它属于-成</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或成</font></font><code>bower.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的收集，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
运行</font></font><code>bower install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将获取包并将其放入</font></font><code>/vendor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将获取它并将其放入</font></font><code>/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font></font></p>

<p><a href="https://stackoverflow.com/a/16493586/1592915"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说bower是用于前端的，而npm是用于后端的。</font><font style="vertical-align: inherit;">乍一看，</font></font><br>
<a href="https://github.com/stefanpenner/ember-app-kit" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ember-app-kit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎坚持了这种区别...但是gruntfile中的用于</font></font><a href="https://github.com/stefanpenner/ember-app-kit/blob/master/Gruntfile.js#L40-L42" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用某些功能的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令给出了两个显式命令，因此我在这里完全感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">凭直觉我会猜到  </font></font></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev软件包名称</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等同于将软件包名称添加到我的package.json中</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower install --save软件包名称</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能与将软件包添加到我的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower.json</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower install相同</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，我什么时候应该显式安装软件包而不将其添加到管理依赖项的文件中（除了全局安装命令行工具之外）？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第852篇《Grunt，NPM和Bower之间的区别（package.json与bower.json）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
