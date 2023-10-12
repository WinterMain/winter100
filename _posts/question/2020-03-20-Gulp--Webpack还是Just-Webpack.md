---
layout: question
title:  Gulp + Webpack还是Just Webpack？
date:   2020-03-20T06:06:49.000Z
description: 我看到人们在Webpack中使用gulp。但是后来我看webpack可以代替gulp吗？我在这里完全困惑...有人可以解释吗？更新最后，我从吞咽开...
img: 
author: 樱小胖Mandy
category: question
answer: 4
tags: node.js中 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到人们在Webpack中使用gulp。</font><font style="vertical-align: inherit;">但是后来我看webpack可以代替gulp吗？</font><font style="vertical-align: inherit;">我在这里完全困惑...有人可以解释吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我从吞咽开始。</font><font style="vertical-align: inherit;">我刚接触现代前端，只是想快速起步并运行。</font><font style="vertical-align: inherit;">一年多以后，现在我的脚已经湿透了，现在可以开始使用webpack了。</font><font style="vertical-align: inherit;">对于那些穿着相同鞋子的人，我建议使用相同的路线。</font><font style="vertical-align: inherit;">并不是说您不能尝试使用webpack，而是先说一下是否看起来很复杂，首先从gulp开始...这没错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想要吞咽，是的，虽然有些麻烦，但是您也可以在package.json中指定命令，然后从命令行调用它们，而无需任务运行器即可启动并开始运行。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>"scripts": {<font></font>
      "babel": "babel src -d build",<font></font>
      "browserify": "browserify build/client/app.js -o dist/client/scripts/app.bundle.js",<font></font>
      "build": "npm run clean &amp;&amp; npm run babel &amp;&amp; npm run prepare &amp;&amp; npm run browserify",<font></font>
      "clean": "rm -rf build &amp;&amp; rm -rf dist",<font></font>
      "copy:server": "cp build/server.js dist/server.js",<font></font>
      "copy:index": "cp src/client/index.html dist/client/index.html",<font></font>
      "copy": "npm run copy:server &amp;&amp; npm run copy:index",<font></font>
      "prepare": "mkdir -p dist/client/scripts/ &amp;&amp; npm run copy",<font></font>
      "start": "node dist/server"<font></font>
    },<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2523篇《Gulp + Webpack还是Just Webpack？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam凯小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老实说，我认为最好是同时使用两者。</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font><font style="vertical-align: inherit;">与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关的</font><strong><font style="vertical-align: inherit;">Webpack</font></strong><font style="vertical-align: inherit;">。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吞噬</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font><font style="vertical-align: inherit;">相关的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仍然必须找到一种用webpack打包css的不错的解决方案，到目前为止，我很高兴将gulp用于css和将webpack用于javascript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照描述将脚本用作@Tetradev。</font><font style="vertical-align: inherit;">特别是因为我正在使用</font></font><code>Visual Studio</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且虽然</font></font><code>NPM Task runner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可靠</font></font></strong> <code>Webpack Task Runner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是却很</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容易出错</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gulp和Webpack的概念完全不同。</font><font style="vertical-align: inherit;">您告诉Gulp </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">逐步将前端代码放在一起，但是您</font><font style="vertical-align: inherit;">通过配置文件</font><font style="vertical-align: inherit;">告诉Webpack </font><font style="vertical-align: inherit;">您想要</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我写的一篇简短文章（阅读5分钟），解释了我对这些区别的理解：</font><a href="https://medium.com/@Maokai/compile-the-front-end-from-gulp-to-webpack-c45671ad87fe" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://medium.com/@Maokai/compile-the-front-end-from-gulp-to-webpack-c45671ad87fe" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@Maokai/compile-the-front-end-from-gulp-to-webpack-c45671ad87fe</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在过去的一年中，我们公司从Gulp迁移到Webpack。</font><font style="vertical-align: inherit;">尽管花费了一些时间，但我们仍想出了如何将在Gulp中所做的所有工作转移到Webpack。</font><font style="vertical-align: inherit;">因此，对我们来说，我们在Gulp中所做的一切也可以通过Webpack来完成，但反之则不行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从今天开始，我建议您只使用Webpack，避免将Gulp和Webpack混合使用，这样您和您的团队就无需学习和维护两者，尤其是因为它们需要截然不同的心态。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在不同的项目中都使用了这两个选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是一个样板，我放在一起用</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><a href="https://github.com/iroy2000/react-reflux-boilerplate-with-webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/iroy2000/react-reflux-boilerplate-with-webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只有用一些其他的项目</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>npm tasks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们俩都工作得很好。</font><font style="vertical-align: inherit;">我认为这归结为您的任务有多复杂，以及您希望在配置中拥有多少控制权。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果你的任务很简单，让我们说</font></font><code>dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...等（这是非常标准的），你是完全罚款只是简单的</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>npm tasks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您的工作流程非常复杂，并且希望对配置进行更多控制（因为它是编码的），则可以采用gulp路由。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是从我的经验来看，webpack生态系统提供了我所需的足够多的插件和加载器，因此我喜欢使用最基本的方法，除非您只能在吞吃中做些。</font><font style="vertical-align: inherit;">而且，如果您的系统中少了一件东西，它将使您的配置更加容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，很多时候，我看到人们实际上将</font></font><code>gulp and browsify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有的</font><font style="vertical-align: inherit;">人都替换成了一个人</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2020年更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我一直在尝试使用webpack和gulp的组合在Electron中配置React App，但是以某种方式失败了。</font><font style="vertical-align: inherit;">然后，感谢</font></font><a href="https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了我的问题。</font><font style="vertical-align: inherit;">如果您尝试使用gulp进行sass编译，则也可以使用create-react-app进行此操作，如</font></font><a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档中所述</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
