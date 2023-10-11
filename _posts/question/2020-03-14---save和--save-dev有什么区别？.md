---
layout: question
title:  --save和--save-dev有什么区别？
date:   2020-03-14T04:48:20.000Z
description: 之间有什么区别？   npm install \[package_name\]-保存和   npm install \[package_nam...
img: 
author: Monkey洋
category: question
answer: 12
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么区别？ </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install [package_name]-保存</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install [package_name] --save-dev</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是什么意思？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1579篇《--save和--save-dev有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的所有解释都很好，但是缺少一个非常重要的事情：如何仅安装生产依赖项？</font><font style="vertical-align: inherit;">（没有开发依赖性）。</font><font style="vertical-align: inherit;">我们单独</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要安装所有我们使用：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm i
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要仅安装生产软件包，我们应该使用：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm i --only=production
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们在生产中使用npm来处理邪恶的事情，Node.js就是一个例子，因此您不希望所有开发工具都在运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用gulp（或类似产品）来创建要放在服务器上的构建文件，那么这并不重要。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Near</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--save-dev</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于在应用程序开发中使用的模块，在生产环境中运行时不需要
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-save</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于将其添加到package.json中，并且是运行应用程序所必需的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：express，body-parser，lodash，helmet，mysql所有这些都在运行应用程序时使用–保存以放置依赖项，而在开发过程中使用mocha，istanbul，chai，sonarqube-scanner，因此将它们放在dev中-依赖性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm link或npm install还将在您的项目文件夹中安装dev-dependency模块以及依赖模块 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您不希望使用仅用于开发目的的东西来夸大生产包。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>-D</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）选项来分隔诸如单元测试框架（Jest，Jasmine，mocha，chai等）之类的包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的应用用于生产所需的任何其他软件包，都应使用</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>-S</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>npm install --save lodash       //prod dependency<font></font>
npm install -S moment           // "       "<font></font>
npm install -S opentracing      // "       "<font></font>
<font></font>
npm install -D jest                 //dev only dependency<font></font>
npm install --save-dev typescript   //dev only dependency<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果打开</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，则将在两个不同的部分下看到这些条目：</font></font></p>

<pre><code>"dependencies": {<font></font>
  "lodash": "4.x",<font></font>
  "moment": "2.x",<font></font>
  "opentracing": "^0.14.1"<font></font>
},<font></font>
<font></font>
"devDependencies": {<font></font>
    "jest": "22.x",<font></font>
    "typescript": "^2.8.3"<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提供了明确的答案。</font><font style="vertical-align: inherit;">但是值得一提的是如何</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影响安装软件包：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，npm install将安装所有列为package.json中的依赖项的模块。</font><font style="vertical-align: inherit;">使用--production标志（或将NODE_ENV环境变量设置为production时），npm将不会安装devDependencies中列出的模块。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.npmjs.com/cli/install</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将semver规范保存到程序包描述符文件中的“ devDependencies”数组中，</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是将其保存到“ dependencies”中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖神奇</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我给你举个例子， </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是一个非常</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认真的</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm </font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的开发人员</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用不同的测试库来测试包。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户下载了您的库，并希望在其代码中使用它。</font><font style="vertical-align: inherit;">他们还需要下载您的测试库吗？</font><font style="vertical-align: inherit;">也许您</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于测试，而他们使用</font></font><code>mocha</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您是否也要安装它们</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要运行您的库？</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无权利？</font><font style="vertical-align: inherit;">这就是为什么他们进入</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当有人这样做时，</font><font style="vertical-align: inherit;">将仅安装</font><strong><font style="vertical-align: inherit;">运行</font></strong><font style="vertical-align: inherit;">您</font></font><code>npm i yourPackage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的库所需</font><font style="vertical-align: inherit;">的库。</font><font style="vertical-align: inherit;">您以前用来捆绑代码或进行测试和模拟的其他库将不会安装，因为您将它们放入了</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">很整洁吧？</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>devDependencies</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员需要公开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependancies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您的软件包是一个开源软件包，并且有数百人正在向您的软件包发送请求请求。</font><font style="vertical-align: inherit;">那么他们将如何测试包装？</font><font style="vertical-align: inherit;">他们将为</font></font><code>git clone</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font><font style="vertical-align: inherit;">提供</font><strong><font style="vertical-align: inherit;">仓库</font></strong><font style="vertical-align: inherit;">，以及</font><strong><font style="vertical-align: inherit;">何时</font></strong></font><strong><code>npm i</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因为他们没有使用您的包裹。</font><font style="vertical-align: inherit;">他们正在进一步开发软件包，因此，为了测试您的软件包，他们需要通过现有的测试用例以及编写新的测试用例。</font><font style="vertical-align: inherit;">因此，他们需要使用您的工具</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含</font><font style="vertical-align: inherit;">您使用的</font><font style="vertical-align: inherit;">所有测试/构建/模拟库。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid老丝</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个完美的例子是：</font></font></p>

<pre><code>$ npm install typescript --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您希望可以使用Typescript（一种JavaScript解析的编码语言）进行开发，但是一旦部署了该应用程序，就不再需要了，因为所有代码都已转换为javascript。</font><font style="vertical-align: inherit;">因此，将其包含在已发布的应用程序中是没有意义的。</font><font style="vertical-align: inherit;">确实，这只会占用空间并增加下载时间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom伽罗</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@ andreas-hultgren在</font></font><a href="https://stackoverflow.com/a/19223182/1153783"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的，</font><font style="vertical-align: inherit;">并根据</font></font><a href="https://www.npmjs.org/doc/json.html#devDependencies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人计划在其程序中下载和使用您的模块，那么他们可能不希望或不需要下载并构建您使用的外部测试或文档框架。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，对于webapp开发，</font></font><a href="http://yeoman.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yeoman</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（一种安装了经过同行评审的，预先编写的package.json文件的脚手架工具）将所有程序包都放置在devDependencies中，而没有任何依赖项，因此使用似乎</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个安全的选择</font><font style="vertical-align: inherit;">至少</font><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webapp</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，NPM只是在node_modules下安装一个软件包。</font><font style="vertical-align: inherit;">当您尝试为应用程序/模块安装依赖项时，您需要先安装它们，然后将其添加到的</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将第三方程序包添加到程序包的开发依赖项中。</font><font style="vertical-align: inherit;">当有人安装您的软件包时，将不会安装它。</font><font style="vertical-align: inherit;">通常只有在有人</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克隆</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的源存储库并</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">时才安装</font><font style="vertical-align: inherit;">它。</font></font></p>

<p><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将第三方程序包添加到程序包的依赖项中。</font><font style="vertical-align: inherit;">每当有人运行时，它将与软件包一起安装</font></font><code>npm install package</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发依赖项是仅开发软件包所需的那些依赖项。</font><font style="vertical-align: inherit;">这可以包括测试运行程序，编译器，打包程序等。两种类型的依赖关系都存储在包的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中。</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到</font></font><code>devDependencies</code></p>

<p><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在这里参考</font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;">npm安装</font></a><font style="vertical-align: inherit;">文档。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在自己的项目中都尝试过两者</font><font style="vertical-align: inherit;">之间的差异</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能不会立即注意到它们</font><font style="vertical-align: inherit;">之间的差异</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以这是一些例子...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说您正在构建一个使用</font></font><strong><a href="https://www.npmjs.com/package/moment" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即时</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包来解析和显示日期</font><font style="vertical-align: inherit;">的应用程序</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您的应用是一个调度程序，因此它确实需要运行此程序包，例如：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有它就无法运行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，您将使用</font></font></p>

<pre><code>npm install moment --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在package.json中创建一个新值</font></font></p>

<pre><code>"dependencies": {<font></font>
   ...<font></font>
   "moment": "^2.17.1"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您进行开发时，使用测试套件等工具确实会有所帮助，并且可能需要</font></font><a href="https://www.npmjs.com/package/jasmine-core" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jasmine-core</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://www.npmjs.com/package/karma" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">karma</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，您将使用</font></font></p>

<pre><code>npm install jasmine-core --save-dev<font></font>
npm install karma --save-dev<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也会在package.json中创建一个新值</font></font></p>

<pre><code>"devDependencies": {<font></font>
    ...<font></font>
    "jasmine-core": "^2.5.2",<font></font>
    "karma": "^1.4.1",<font></font>
}<font></font>
</code></pre>

<p>You do <strong>not need</strong> the test suite to run the app in its normal state, so it is a <code>--save-dev</code> type dependency, nothing more. You can see how if you do not understand what is really happening, it is a bit hard to imagine.</p>

<p>Taken directly from NPM docs <a href="https://docs.npmjs.com/files/package.json#dependencies" rel="noreferrer">docs#dependencies</a></p>

<blockquote>
  <p><strong>Dependencies</strong></p>
  
  <p>Dependencies are specified in a simple object that maps a package name
  to a version range. The version range is a string which has one or
  more space-separated descriptors. Dependencies can also be identified
  with a tarball or git URL.</p>
  
  <p><strong>Please do not put test harnesses or transpilers in your dependencies
  object. See devDependencies</strong>, below.</p>
</blockquote>

<p>Even in the docs, it asks you to use --save-dev for modules such as test harnesses. </p>

<p>I hope this helps and is clear.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin米亚</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><ul>
<li><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于保存软件包以用于开发目的。</font><font style="vertical-align: inherit;">示例：单元测试，缩小</font></font></li>
<li><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于保存应用程序运行所需的软件包。</font></font></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
