---
layout: question
title:  sh：react-scripts：运行npm start后找不到命令
date:   2020-03-12T02:52:55.000Z
description: 我将一个React应用程序克隆到我的系统上并运行以下命令npm install -g create-react-appnpm install --s...
img: 
author: 蛋蛋和田
category: question
answer: 22
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将一个React应用程序克隆到我的系统上并运行以下命令</font></font></p>

<pre><code>npm install -g create-react-app<font></font>
npm install --save react react-dom<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后我跑了 </font></font></p>

<pre><code>npm start 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它引发了上述错误，在我将其推送到github的其他系统上也可以正常工作。</font><font style="vertical-align: inherit;">但是克隆Windows或Mac后，它在任何其他系统上均不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第903篇《sh：react-scripts：运行npm start后找不到命令》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是毛线：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除 </font></font><code>yarn.lock</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>yarn</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着 </font></font><code>yarn start</code></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是npm：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除 </font></font><code>package-lock.json</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm install</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着 </font></font><code>npm start</code></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中，我更改了 </font></font></p>

<pre><code>"start": react-scripts start"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font></p>

<pre><code>"start": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js start"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这可以解决某些人的问题。</font><font style="vertical-align: inherit;">尽管上述其他解决方案似乎对我不起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Docker容器中遇到此问题，只需确保未在.dockerignore文件中添加node_modules。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题sh1：未找到react脚本。</font><font style="vertical-align: inherit;">对我来说这就是解决方案</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>@/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在macOS上</font><font style="vertical-align: inherit;">用</font><font style="vertical-align: inherit;">符号</font><font style="vertical-align: inherit;">重命名目录</font><font style="vertical-align: inherit;">以匹配我的NPM软件包名称空间的名称</font><font style="vertical-align: inherit;">后，我遇到了此错误</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当NPM命令在我的本地中查找已安装的软件包时</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，由于macOS重写目录路径的方式而找不到它。</font><font style="vertical-align: inherit;">重命名目录后，无需重新启动即可</font></font><code>@/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需还原软件包即可解决此问题，因此只需运行命令：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装或yarn安装</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于我的解决方案如下。</font><font style="vertical-align: inherit;">尝试使用此命令创建React应用。</font></font></p>

<pre><code>create-react-app react-app --scripts-version 1.1.5
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案1：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除package-lock.json文件，然后键入-&gt; npm install</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2：</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/Users/piyushbajpai/.npm/_logs/2019-03-11T11_53_27_970Z-debug.log</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像这是我的调试路径-&gt;这样，您将在控制台中找到它-&gt;按命令并单击链接，您将找到错误行；</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细堆栈错误：nest_form@0.1.0开始： </font></font><code>react-scripts start</code></strong></p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案3：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用新方法删除node_module和npm i。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案4：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到node_module并删除jses文件夹并删除它，然后执行npm i并再次从npm start开始</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖前端逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我重新开始使用create-react-app时，这使我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感到困惑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请确保将您的</font><strong><font style="vertical-align: inherit;">NODE_ENV</font></strong><font style="vertical-align: inherit;">变量设置为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Development</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是Production，因为package.json中的devDependencies不会被npm install安装。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对最新版本的纱线有疑问 </font></font><code>1.15.1-1</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已通过降级到较低版本来修复它 </font></font><code>sudo apt-get install yarn=1.12.3-1</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞羽</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人只愿意使用npm，则运行this </font></font><code>npm i react-native-scripts --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后运行npm start或您使用的任何命令</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是在发出</font></font><code>react-scripts build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求</font><font style="vertical-align: inherit;">后随机经历了此“ react-scripts：找不到命令”错误，该</font><font style="vertical-align: inherit;">请求以前可以正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动系统即可解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有其他答案正常工作（在更新npm等之后）。</font><font style="vertical-align: inherit;">我强烈建议您在桌面上安装该项目。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app </font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">project_name</font></font></em> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除package-lock.json和node_modules然后npm install对我有用。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这个问题很久了，最终我偶然找到了解决方案。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
事实证明，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何文件夹名称中都不能有空格</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，
 </font></font><code>~/projects/tutorial/ReactJS/JavaScript Framework: ReactJS/app-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因为</font></font><code>JavaScript Framework: ReactJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含空格</font><font style="vertical-align: inherit;">而无法工作</font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
通常，无论如何都不要在文件夹/文件名中使用空格，这不是一个好习惯，但是我希望这可以节省至少4个小时的反复试验时间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅仅安装Yarn就可以为我解决问题</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三飞云斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装material-ui后刚遇到这个问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行即可解决</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install --save react react-dom react-scripts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是来</font><font style="vertical-align: inherit;">安装软件包时发生此错误，</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反之亦然。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试了以上所有方法，但没有任何效果，所以我使用了</font></font><code>npm i react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题。</font><font style="vertical-align: inherit;">以我为例，它有助于安装Yarn并首先执行命令</font></font></p>

<p><code>yarn</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行命令</font></font></p>

<p><code>yarn start</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您克隆的项目具有yarn.lock文件，那么这也可能对您有用。</font><font style="vertical-align: inherit;">希望能帮助到你！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomNear前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/facebookincubator/create-react-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebookincubator/create-react-app</font></font></a></p>

<pre><code>npm install -g create-react-app<font></font>
<font></font>
create-react-app my-app<font></font>
cd my-app/<font></font>
npm start<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在全局安装create-react-app软件包。</font><font style="vertical-align: inherit;">之后，您运行它并创建一个名为的项目</font></font><code>my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">输入您的项目文件夹，然后运行</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果那不起作用，请尝试运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果那还行不通，请尝试更新您的节点版本和/或npm。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该在全局范围内安装react-scripts，对我来说，这可以解决此问题：</font></font></p>

<pre><code>npm install --save react react-dom react-scripts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这仍然不起作用：</font></font></p>

<pre><code>1 - update to latest npm version : npm install -g npm@latest<font></font>
2 - delete node_modules directory<font></font>
3 - reinstall all dependencies : npm install<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
