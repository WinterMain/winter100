---
layout: question
title:  create-react-app Webpack配置和文件在哪里？
date:   2020-03-11T07:00:25.000Z
description: 我使用该create-react-app软件包创建了一个ReactJS项目，该项目运行良好，但是找不到Webpack文件和配置。react-creat...
img: 
author: 猪猪小卤蛋
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用该</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包</font><font style="vertical-align: inherit;">创建了一个ReactJS项目，该项目</font><font style="vertical-align: inherit;">运行良好，但是找不到Webpack文件和配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-create-app如何与webpack一起使用？</font><font style="vertical-align: inherit;">默认情况下，使用以下命令安装的webpack配置文件在哪里</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我在项目的文件夹中找不到配置文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尚未创建替代配置文件。</font><font style="vertical-align: inherit;">我可以与其他文章一起管理配置设置，但是我想找到常规的配置文件。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第704篇《create-react-app Webpack配置和文件在哪里？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack配置由</font></font><a href="https://www.npmjs.com/package/react-scripts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-scripts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以在node_modules </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-scripts / config中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到所有webpack </font><strong><font style="vertical-align: inherit;">配置</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，如果您要自定义webpack配置，则可以遵循以下</font></font><a href="https://medium.com/@ryoldash/customize-webpack-config-of-react-app-created-with-create-react-app-7a78c7849edc" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">custom-webpack-config</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里前端Tom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您不想弹出，而只想查看配置，则会在其中找到它们 </font></font><code>/node_modules/react-scripts/config</code></p>

<pre><code>webpack.config.dev.js. //used by `npm start`<font></font>
webpack.config.prod.js //used by `npm run build`<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所使用的Webpack配置</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里：</font><a href="https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/config" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/config" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/facebook/create-react-app/tree/master/packages/react-scripts/config</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人来到此页面的目的是查找webpack配置和文件，以便向其添加自己的配置。</font><font style="vertical-align: inherit;">另一种无需运行即可实现此目的的方法</font></font><code>npm run eject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使用</font></font><a href="https://github.com/timarney/react-app-rewired" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-app-rewired</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使您可以覆盖webpack配置文件而不会弹出。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要查找webpack文件和配置，请转到package.json文件并查找</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font></font></strong> </p>

<p><img src="https://i.stack.imgur.com/enyQL.png" alt="img"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会发现脚本对象正在使用库</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-scripts</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在转到node_modules并查找react-scripts文件夹</font></font><a href="https://i.stack.imgur.com/5Grrn.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-script-in-node-modules</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-scripts / scripts</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-scripts / config</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹包含所有webpack配置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>From the <a href="https://github.com/facebook/create-react-app#get-started-immediately" rel="noreferrer">documentation</a>:</p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要安装或配置W​​ebpack或Babel之类的工具。</font><font style="vertical-align: inherit;">它们是预先配置和隐藏的，因此您可以专注于代码。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要访问配置文件，则需要</font><font style="vertical-align: inherit;">通过运行以下</font><font style="vertical-align: inherit;">命令</font></font><a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">退出</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm run eject
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是单向操作。</font><font style="vertical-align: inherit;">一旦弹出，就无法返回！</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，最好不要弹出并尝试找到一种使它以其他方式为您工作的方法。</font><font style="vertical-align: inherit;">这样，您可以通过更新您的依赖关系，</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不必处理Webpack依赖关系。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ config</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">找到它</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹出时，您会收到类似以下的消息： </font></font></p>

<pre><code> Adding /config/webpack.config.dev.js to the project<font></font>
 Adding /config/webpack.config.prod.js to the project<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
