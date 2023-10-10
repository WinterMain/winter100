---
layout: question
title:  npm install->在node-sass\`4.5.0安装后脚本失败
date:   2020-03-19T06:26:37.000Z
description: 我正在尝试做npm install，出现错误：Failed at the node-sass\`4.5.0 postinstall script....
img: 
author: Tom蛋蛋
category: question
answer: 13
tags: 角 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试做</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，出现错误：</font></font></p>

<pre><code>Failed at the node-sass@4.5.0 postinstall script.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重新安装它，出现同样的错误。</font><font style="vertical-align: inherit;">解决办法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点v8.9.3 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm v5.4.2 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ionic 3.19.0</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇蛋蛋Sam</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下步骤对我有用</font></font></p>

<pre><code>npm install -g node-sass@4.5.0 --unsafe-perm=true --allow-root<font></font>
<font></font>
npm cache clean<font></font>
<font></font>
<font></font>
npm install<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅卡卡西Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该尝试</font></font><strong><a href="http://sass-lang.com/install" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装SASS</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我记得用指南针在AngularJS中解决了这个问题，我必须使用Ruby安装它才能使其正常工作。</font><font style="vertical-align: inherit;">这是3年前的事情，所以我不确定这是否是解决方案，但是除了花费时间外，它不花任何钱，对吗？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要采取以下步骤来“解决”此问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根目录下创建文件夹：</font></font><code>mkdir ~/safe_node_module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">;</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载包</font></font><code>wget -q https://github.com/sass/node-sass/releases/download/v4.13.0/linux-x64-72_binding.node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后发送到步骤1中创建的文件夹；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置导出环境变量</font></font><code>export SASS_BINARY_PATH=/home/ronaldaraujo/safe_node_module/linux-x64-72_binding.node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常安装软件包</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">;</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法在节点8上安装Node-sass@4.5.0</font></font></p>

<p><a href="https://i.stack.imgur.com/QZsXI.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/QZsXI.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请更新兼容的node-sass或节点版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前往</font></font><a href="https://github.com/sass/node-sass/releases" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/sass/node-sass/releases</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查适合您的</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Keystone.js进行新安装时，我遇到了同样的问题。</font><font style="vertical-align: inherit;">我可以通过从package.json中删除Node Sass并再次运行npm install来解决此问题。</font><font style="vertical-align: inherit;">由于该软件包未在节点模块下列出。</font><font style="vertical-align: inherit;">在那之后效果很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德乐</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载node-sass后，请尝试清理npm缓存。</font><font style="vertical-align: inherit;">之后，尝试再次安装node-sass。</font></font></p>

<pre><code>npm cache clean &amp;&amp; npm install node-sass
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持节点8的最低版本的node-sass是4.5.3。</font><font style="vertical-align: inherit;">您需要升级您的Node-sass或降级您的Node版本。</font><font style="vertical-align: inherit;">由于Ionic并不是经过测试的带有Node-sass的平台，因此也可能存在其他问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回滚到节点</font></font><code>v10.17.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了我的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用nvm这样做：</font></font></p>

<p><a href="https://github.com/nvm-sh/nvm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nvm-sh/nvm</font></font></a></p>

<pre><code>&gt; nvm install 10.17.0<font></font>
&gt; nvm use 10.17.0<font></font>
&gt; node -v<font></font>
10.17.0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载当前的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并安装较低的版本，如果版本不匹配，这是一个常见错误，降级node / npm将主要解决此类问题</font></font></p>

<pre><code>npm install -g npm@4.6.1
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这个标志 </font></font><code>--unsafe-perm=true</code></p>

<pre><code>sudo npm i gulp-sass -ES --unsafe-perm=true
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilEva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试 </font></font></p>

<pre><code>sudo rm -rf package-lock.json node_modules<font></font>
sudo npm cache clean --force<font></font>
sudo npm i --unsafe-perm node-sass<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony泡芙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需尝试使用此命令，希望对您有所帮助。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它为我工作</font></font></p>

<pre><code>sudo npm install -g node-sass@4.5.0 --unsafe-perm=true --allow-root
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小胖</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到了同样的问题（节点v10.3.0，离子3.13.0）。</font><font style="vertical-align: inherit;">这工作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>package-</code><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">锁</font></font></strong><code>.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹，</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
