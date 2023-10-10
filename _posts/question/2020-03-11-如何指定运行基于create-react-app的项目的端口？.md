---
layout: question
title:  如何指定运行基于create-react-app的项目的端口？
date:   2020-03-11T03:48:25.000Z
description: 我的项目基于create-react-app。npm start或yarn start默认情况下将在端口3000上运行该应用程序，并且在package.j...
img: 
author: 泡芙Tom
category: question
answer: 12
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目基于</font></font><a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>yarn start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下将在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口3000</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上运行该应用程序，</font><font style="vertical-align: inherit;">并且在package.json中没有指定端口的选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，如何指定自己选择的端口？</font><font style="vertical-align: inherit;">我想同时运行此项目的两个（用于测试），一个在端口</font></font><code>3005</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，另一个在</font></font><code>3006</code></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，转到脚本并使用</font></font><code>--port 4000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>set PORT=4000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如以下示例所示：</font></font></p>

<p><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （视窗）：</font></font></p>

<pre><code>"scripts": {<font></font>
    "start": "set PORT=4000 &amp;&amp; react-scripts start"<font></font>
}<font></font>
</code></pre>

<p><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （Ubuntu）：</font></font></p>

<pre><code>"scripts": {<font></font>
    "start": "export PORT=4000 &amp;&amp; react-scripts start"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需更改应用程序代码或环境文件中的任何内容，如何在调用命令时给出端口号？</font><font style="vertical-align: inherit;">这样就可以从几个不同的端口运行并提供相同的代码库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢：</font></font></p>

<p><code>$ export PORT=4000 &amp;&amp; npm start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将所需的端口号替换为</font></font><code>4000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面</font><font style="vertical-align: inherit;">的示例值</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能够指定除以外的其他端口</font></font><code>3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为命令行参数或环境变量</font><font style="vertical-align: inherit;">将是很好的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这个过程非常复杂：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm run eject</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等待那完成</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font><code>scripts/start.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和查找/替换</font></font><code>3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要使用的任何端口</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font><code>config/webpack.config.dev.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并执行相同的操作</font></font></li>
<li><code>npm start</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">罗静云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在启动应用程序时找到默认端口配置  </font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">yourapp / scripts / start.js</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向下滚动并将端口更改为所需的端口</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const DEFAULT_PORT = parseInt（process.env.PORT，10）|| </font><font style="vertical-align: inherit;">4000;</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以对您有所帮助;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows中，可以通过两种方法完成。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“ \ node_modules \ react-scripts \ scripts \ start.js”下，搜索“ DEFAULT_PORT”并添加所需的端口号。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：const DEFAULT_PORT = parseInt（process.env.PORT，10）|| </font><font style="vertical-align: inherit;">9999;</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中，执行以下行。</font><font style="vertical-align: inherit;">“ start”：“ set PORT = 9999 &amp;&amp; react-scripts start”然后使用NPM start启动应用程序。</font><font style="vertical-align: inherit;">它将在9999端口启动应用程序。</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总而言之，我们有三种方法可以完成此任务：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置一个名为“ PORT”的环境变量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改package.json的“脚本”部分下的“开始”键</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个.env文件，并将PORT配置放入其中</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最可移植的将是最后一种方法。</font><font style="vertical-align: inherit;">但是，正如其他发布者所述，请将.env添加到.gitignore中，以免将配置上传到公共源存储库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息：</font></font><a href="https://tech.amikelive.com/node-830/reactjs-changing-default-port-3000-in-create-react-app/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的package.json文件中</font></font><code>"start": "export PORT=3001 &amp;&amp; react-scripts start"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">也对我有用，并且我在macOS 10.13.4上</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows和Linux上均可使用</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></em></p>

<pre><code>"scripts": {<font></font>
    "start": "set PORT=3006 &amp;&amp; PORT=3006 react-scripts start || react-scripts start"<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您可能更喜欢使用在其中写入PORT = 3006的方式来创建.env</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是完成此任务的另一种方法。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>.env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目根目录下</font><font style="vertical-align: inherit;">创建一个</font><font style="vertical-align: inherit;">文件，并在此处指定端口号。</font><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre><code>PORT=3005
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows亲朋好友，我发现了一种更改ReactJS端口以在所需端口上运行的方法。在运行服务器之前，请转到 </font></font></p>

<pre><code> node_modules/react-scripts/scripts/start.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中搜索下面的行，并将端口号更改为所需的端口</font></font></p>

<pre><code> var DEFAULT_PORT = process.env.PORT || *4000*;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且你很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://github.com/kentcdodds/cross-env" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cross-env</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置端口，并且该端口将在Windows，Linux和Mac上运行。</font></font></p>

<pre><code>yarn add -D cross-env
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在package.json中，开始链接可能是这样的：</font></font></p>

<pre><code>"start": "cross-env PORT=3006 react-scripts start",
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小小Tony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以指定名为的环境变量，以</font></font><code>PORT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定服务器将在其上运行的端口。</font></font></p>

<pre><code>$ export PORT=3005 #Linux<font></font>
$ $env:PORT=3005 # Windows - Powershell<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
