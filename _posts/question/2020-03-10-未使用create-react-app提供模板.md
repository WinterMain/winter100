---
layout: question
title:  未使用create-react-app提供模板
date:   2020-03-10T02:46:45.000Z
description: 当我create-react-app my-app在终端中键入命令时，它似乎可以正常工作-成功下载所有库，等等。但是在该过程结束时，我收到一条消息，提示您...
img: 
author: LEY西门
category: question
answer: 27
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>create-react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">键入</font><font style="vertical-align: inherit;">命令时，它似乎可以正常工作-成功下载所有库，等等。但是在该过程结束时，我收到一条消息，提示您输入</font></font><code>template was not provided</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入值</font></font></p>

<pre><code>user@users-MacBook-Pro-2 Desktop% create-react-app my-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出量</font></font></p>

<pre><code>Creating a new React app in /Users/user/Desktop/my-app.<font></font>
<font></font>
Installing packages. This might take a couple of minutes.<font></font>
Installing react, react-dom, and react-scripts...<font></font>
..... nothing out of the ordinary here .....<font></font>
✨  Done in 27.28s.<font></font>
<font></font>
A template was not provided. This is likely because you're using an outdated version of create-react-app.<font></font>
Please note that global installs of create-react-app are no longer supported.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在的package.json中</font></font><code>my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"dependencies": {<font></font>
  "react": "^16.12.0",<font></font>
  "react-dom": "^16.12.0",<font></font>
  "react-scripts": "3.3.0" &lt;-- up-to-date<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了CRA </font></font><a href="https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改日志</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它看起来像添加了对自定义模板的支持-但是看起来命令</font></font><code>create-react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎没有更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道这里发生了什么吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试以管理员身份运行终端。</font><font style="vertical-align: inherit;">我遇到了同样的问题，除了以管理员身份打开终端，然后执行npx create-react-app yourAppName之外，没有任何帮助</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">朔风</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，并且在我的计算机上全局安装了“ create-react-app”。</font><font style="vertical-align: inherit;">有错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“未提供模板。这很可能是因为您使用的是过时的create-react-app版本。请注意，不再支持在全球范围内安装create-react-app。”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我使用此命令删除了先前的安装。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm卸载-g create-react-app</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后安装新的react应用。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npx create-react-app新应用</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC60211911</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows 10，我必须手动删除yarn缓存中的某些文件夹，我的路径类似于</font></font><code>C:\Users\username\AppData\Local\Yarn\Cache\v1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而必须除去的折叠类似于</font></font><code>npm-create-react-app-1.0.0-1234567890abcdef</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Near</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用命令</font></font><code>npm uninstall -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这有效：</font></font></p>

<p><code>yarn global remove create-react-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着：</font></font></p>

<p><code>npx create-react-app my-app</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用1.首先通过以下命令全局卸载create-react-app：</font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然有以前的安装，请完全删除名为“我的应用”的文件夹。（确保没有程序正在使用该文件夹，包括您的终端或cmd程序）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.然后在您的项目目录中：</font></font></p>

<pre><code>npm install create-react-app@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.最后：</font></font></p>

<pre><code>npx create-react-app my-app
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>npm uninstall -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在某些情况下可能是一个答案，但在我的情况下不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该手动删除位于</font></font><code>~/.node/bin/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">create-react-app </font></font><code>/usr/bin/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（只需输入</font></font><code>which create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并从使用的位置将其删除</font></font><code>rm -rf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后直接运行即可</font></font><code>npm i -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那之后</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题很奇怪，因为昨天对我有用，今天早晨我遇到了同样的错误。</font><font style="vertical-align: inherit;">根据发行说明，已在支持模板中添加了新功能，因此命令行中的某些部分似乎已更改（例如，</font></font><code>--typescript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不赞成使用，而赞成使用</font></font><code>--template typescript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行以下操作，我确实设法使其全部正常工作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载全局create-react-app </font></font><code>npm uninstall create-react-app -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证npm缓存</font></font><code>npm cache verify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭端子。</font><font style="vertical-align: inherit;">我使用的是Mac终端，如果使用的是IDE，则可能会关闭然后重新打开。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新打开终端，浏览至所需项目，然后使用新的模板命令约定通过npx运行create-react-app。</font><font style="vertical-align: inherit;">为了使其正常工作，我使用了文档站点中的 TypeScriptmy-app来确保一致性：</font></font><code>npx create-react-app my-app --template typescript</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可行，您将看到多个安装：一个安装用于react-scripts，一个安装用于template。</font><font style="vertical-align: inherit;">错误消息也将不再出现。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这项工作适合我： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们通过以下命令全局卸载create-react-app：</font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，在您的项目目录中：</font></font></p>

<pre><code>npm install create-react-app@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后：</font></font></p>

<pre><code>npx create-react-app my-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于 TypeScript：</font></font></p>

<pre><code>npx create-react-app my-app --template typescript
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">从全局npm lib </font><font style="vertical-align: inherit;">卸载</font><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mac</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上解决了这个问题</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，基本上就是这样说，只要尝试做，您还需要这样做</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>sudo npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只需运行：</font></font></p>

<pre><code>npx create-react-app my-app-name
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在应该一切正常，并获得如下所示的文件夹结构：</font></font></p>

<p><a href="https://i.stack.imgur.com/qdhOb.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/qdhOb.png" alt="使用create react应用未提供模板"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯番长蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先卸载create-react-app </font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行</font></font><code>yarn create react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npx create-react-app my-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行，</font></font><code>yarn create react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>npx create-react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然会给出错误，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未提供模板。</font><font style="vertical-align: inherit;">这可能是因为您使用的是过时版本的create-react-app。请注意，不再支持全局安装create-react-app。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是由于现金而发生的。</font><font style="vertical-align: inherit;">所以下一次</font></font></p>

<pre><code>npm cache clean --force 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后跑</font></font></p>

<pre><code>npm cache verify
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在一切都清楚了。</font><font style="vertical-align: inherit;">现在运行</font></font></p>

<p><code>yarn create react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 要么 </font></font><code>npx create-react-app my-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您将得到您所期望的！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我的问题</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚步：</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.卸载创建反应的应用程序 </font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.现在就使用</font></font></p>

<pre><code>npx create-react-app my-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将自动为u创建模板。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1） </font></font><code>npm uninstall -g create-react-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2） </font></font><code>npm install -g create-react-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3） </font></font><code>npx create-react-app app_name</code></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您以前</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过进行</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">全局</font><font style="vertical-align: inherit;">安装</font></font><code>npm install -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最好使用进行卸载</font></font><code>npm uninstall -g create-react-app</code></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能像这样解决此问题，问题出在节点的不同实例中，请尝试删除全局create-react-app，然后从根用户中删除node_modules和package-lock.json</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我已经完成了所有步骤，但没有帮助。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TLDR；</font><font style="vertical-align: inherit;">跑</font></font><code>npx --ignore-existing create-react-app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Mac上 </font></font><code>Mojave 10.15.2</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未在全球范围内安装CRA-在一个</font></font><code>/usr/local/lib/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>/usr/local/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个位置</font><font style="vertical-align: inherit;">均未找到它</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我遇到了</font><font style="vertical-align: inherit;">关于CRA的github问题的</font></font><a href="https://github.com/facebook/create-react-app/issues/8085#issuecomment-563200289" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><code>--ignore-existing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">运行命令</font><font style="vertical-align: inherit;">很有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯达蒙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Linux，这对我有用</font></font></p>

<pre><code>sudo npm uninstall -g create-react-app<font></font>
npx create-react-app my-test-app<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>npx create-react-app@latest your-project-name</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试了所有答案后为我工作，希望可以对以后的人有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGil村村</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先清除npm缓存，然后按以下方式使用yarn：</font></font></p>

<ul>
<li><code>npm cache clean --force</code></li>
<li><code>npm cache verify</code></li>
<li><code>yarn create react-app my-app</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您以前已经通过npm install -g create-react-app全局安装了create-react-app，我们建议您使用npm install -g create-react-app卸载软件包，以确保npx始终使用最新版本</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在</font></font><a href="https://create-react-app.dev/docs/getting-started/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://create-react-app.dev/docs/getting-started/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上报告的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对我来说，这没有用。</font><font style="vertical-align: inherit;">我不得不在全球范围内重新安装create-react-app。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要解决此问题的步骤是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm卸载-g create-react-app</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install -g create-react-app</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npx create-react-app我的应用</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个步骤对我有用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）使用此命令全局卸载react-app</font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）使用此命令在项目文件夹中安装react-app</font></font></p>

<pre><code>npx create-react-app project-name
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></p>

<ol>
<li><code>npm uninstall -g create-react-app</code></li>
<li><code>npx create-react-app my-app</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋JinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><ol>
<li><code>npm install -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在您的电脑中 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次创建react项目 </font></font><code>npx create-react-app my-app</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也有同样的问题。</font><font style="vertical-align: inherit;">当我尝试</font></font><code>npm init react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令返回相同的消息</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未提供模板。</font><font style="vertical-align: inherit;">这可能是因为您使用的是过时版本的create-react-app。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但 </font></font></p>

<p><code>yarn create react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 命令工作正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要对以上答案加总：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在的新版本中</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用自定义模板创建新的应用。</font><font style="vertical-align: inherit;">到目前为止，有两个模板可用：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cra模板</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cra-template-typescript</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npx create-react-app my-app [--template typescript]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新变化的更多详细信息</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://github.com/facebook/create-react-app/releases/tag/v3.3.0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebook/create-react-app/releases/tag/v3.3.0</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先通过以下命令全局卸载create-react-app：</font></font></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的项目目录中：</font></font></p>

<pre><code>npm install create-react-app@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后：</font></font></p>

<pre><code>npx create-react-app my-app
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然已经有很多答案了。</font><font style="vertical-align: inherit;">当我遇到这种情况时，我想出了3种解决方案，并逐步加以应用。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一步：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从官方手册中，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您以前通过全局安装过create-react-app </font></font><code>npm install -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，建议您使用卸载软件包，</font></font><code>npm uninstall -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以确保npx始终使用最新版本。</font></font></p>
</blockquote>

<p><a href="https://create-react-app.dev/docs/getting-started" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://create-react-app.dev/docs/getting-started</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在下面使用这些命令： </font></font></p>

<ul>
<li><code>npx create-react-app my-app</code></li>
<li><code>npm init react-app my-app</code></li>
<li><code>yarn create react-app my-app</code></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果第一步不起作用）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时它可能会保留缓存。然后您可以使用下面给出的这些命令。</font></font></p>

<ul>
<li><code>npm uninstall -g create-react-app</code></li>
<li><code>npm cache clean --force</code></li>
<li><code>npm cache verify</code></li>
<li><code>yarn create react-app my-app</code></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步：（</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这2个都不起作用）首先通过卸载</font></font><strong><code>npm uninstall -g create-react-app</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><strong><code>which create-react-app</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令行中</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">检查是否仍然“安装”了它</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您得到类似（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / local / bin / create-react-app</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的信息，请运行此命令</font></font><strong><code>rm -rf /usr/local/bin/create-react-app</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（文件夹可能有所不同）以手动删除。</font><font style="vertical-align: inherit;">然后再次通过npx / npm / yarn安装它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：我在最后一步取得了成功。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）</font></font></strong></p>

<pre><code>npm uninstall -g create-react-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>yarn global remove create-react-app
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎存在一个错误，其中没有正确卸载create-react-app，并且使用新命令之一导致： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未提供模板。</font><font style="vertical-align: inherit;">这可能是因为您使用的是过时版本的create-react-app。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用卸载之后</font></font><code>npm uninstall -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请</font><font style="vertical-align: inherit;">通过命令行</font></font><code>which create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Windows </font><font style="vertical-align: inherit;">：）</font><font style="vertical-align: inherit;">检查是否仍然“安装”了它</font></font><code>where create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果返回了某些内容（例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / local / bin / create-react-app</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），请执行a </font></font><code>rm -rf /usr/local/bin/create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动删除。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后这些方法之一：</font></font></p>

<pre><code>npx create-react-app my-app<font></font>
npm init react-app my-app<font></font>
yarn create react-app my-app<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您以前是</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过进行全局</font><font style="vertical-align: inherit;">安装的</font></font><code>npm install -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，建议您使用卸载软件包，</font></font><code>npm uninstall -g create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以确保</font></font><code>npx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终使用最新版本。</font></font></p>
</blockquote>

<p><a href="https://create-react-app.dev/docs/getting-started" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令之一： </font></font></p>

<ul>
<li><code>npx create-react-app my-app</code></li>
<li><code>npm init react-app my-app</code></li>
<li><code>yarn create react-app my-app</code></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
