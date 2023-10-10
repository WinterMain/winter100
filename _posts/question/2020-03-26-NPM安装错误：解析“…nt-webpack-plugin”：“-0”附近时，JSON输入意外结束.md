---
layout: question
title:  NPM安装错误：解析“…nt-webpack-plugin”：“ 0”附近时，JSON输入意外结束
date:   2020-03-26T08:53:26.000Z
description: 创建新的Angular 5项目时：节点版本：8.9.2npm版本：5.5.1我的命令是 npm install -g \`angular/c...
img: 
author: 卡卡西西里
category: question
answer: 16
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建新的Angular 5项目时：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点版本：8.9.2</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm版本：5.5.1</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的命令是 </font></font></p>

<pre><code>npm install -g @angular/cli
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误是 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm ERR！</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析'... nt-webpack-plugin“：” 0“附近时，JSON输入意外结束</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm ERR！</font><font style="vertical-align: inherit;">可以在以下位置找到此运行的完整日志：C：\ Users \ Aashitec \ AppData \ Roaming \ npm-cache_logs \ 2017-12-06T13_10_10_729Z-debug.log</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误日志为</font></font><a href="http://www.aashitechno.in/2017-12-06T13_10_10_729Z-debug.log" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.aashitechno.in/2017-12-06T13_10_10_729Z-debug.log</font></font></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3790篇《NPM安装错误：解析“…nt-webpack-plugin”：“ 0”附近时，JSON输入意外结束》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Eva</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>file already exists --force to overwrite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下代码后</font><font style="vertical-align: inherit;">出现错误（</font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>npm cache clean --force<font></font>
npm install -g @angular/cli<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用解决了</font></font></p>

<pre><code>npm i -g --force npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保运行第一个命令来刷新npm的缓存。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用解决</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先删除package-lock.json</font></font></p>
</blockquote>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后更新npm</font></font></p>

<pre><code>npm i npm@latest -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用npm install命令</font></font></p>

<pre><code>npm install 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Eva</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这之后 </font></font><code>npm cache clean --force</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是您可以挂断电话或等待进一步执行 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm使用--force警告我肯定希望您知道自己在做什么。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您也可以使用这个。</font><font style="vertical-align: inherit;">这解决了我的问题。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --cache / tmp /空缓存</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置一个临时文件夹来代替清除缓存：</font></font></p>

<pre><code>npm install --cache /tmp/empty-cache
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm install --global --cache /tmp/empty-cache
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm @ 5开始，npm缓存会因损坏问题而自我修复，并且保证从缓存中提取的数据是有效的。</font><font style="vertical-align: inherit;">如果要确保所有内容都一致，请</font></font><code>npm cache verify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用。</font><font style="vertical-align: inherit;">另一方面，如果您要调试安装程序中的问题，则可以使用</font></font><code>npm install --cache /tmp/empty-cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">临时缓存来代替实际的缓存。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这支班轮解决了我的问题</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它始终像魅力一样运作。</font><font style="vertical-align: inherit;">我爱一个班轮。</font><font style="vertical-align: inherit;">注意：由于它是全新安装，因此我不担心清空npm缓存。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows：转到</font></font><code>C:\Users\username\AppData\Roaming\npm-cache</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
删除所有文件并运行</font></font></p>

<pre><code>npm install &amp;&amp; npm start
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小胖</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用解决</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后更新npm</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm i npm@latest -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后通常使用您的npm install命令</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm install 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的npm出错了...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，取消安装节点并重新安装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用....</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：再次安装节点后，请全局安装angular cli。</font></font></p>

<pre><code>npm install -g @angular/cli@latest
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此命令</font><em><font style="vertical-align: inherit;">就</font></em><font style="vertical-align: inherit;">解决了我的问题：</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您还应确保使用的</font><font style="vertical-align: inherit;">节点</font></font><a href="https://angular.io/guide/quickstart#nodejs" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/creationix/nvm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管理节点版本：</font></font></p>

<pre><code>nvm list; # check your local versions;<font></font>
nvm install 10.10.0; # install a new remote version;<font></font>
nvm alias default 10.10.0; # set the 10.10.0 as the default node version, but you have to restart the terminal to make it take effect;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的解决方案：</font></font></p>

<pre><code>npm cache clean --force<font></font>
npm install <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A宝儿小小</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了 </font></font><code>npm cache clean --force</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Windows并删除了下面列出的所有文件，问题得到解决C：\ Users {{您的用户名}} \ AppData \ Roaming \ npm-cache</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JinJin</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果 </font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用。</font><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>npm cache clean --force<font></font>
npm update<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我解决了：</font></font></p>

<p><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">以管理员身份</font></strong><font style="vertical-align: inherit;">打开Windows Powershell</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre class="lang-sh prettyprint-override"><code>npm cache clean --force<font></font>
npm install -g @angular/cli<font></font>
</code></pre>

<p><a href="https://devblogs.microsoft.com/premier-developer/getting-started-with-node-js-angular-and-visual-studio-code/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://devblogs.microsoft.com/premier-developer/getting-started-with-node-js-angular-and-visual-studio-code/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Npm使用缓存为您下载新软件包。</font><font style="vertical-align: inherit;">您需要清除npm缓存。</font><font style="vertical-align: inherit;">使用以下命令进行清理：</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后通常使用您的npm install命令，例如 </font></font></p>

<pre><code>npm install -g @angular/cli
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除C：\ Users \ admin \ AppData \ Roaming \（Windows）中的npm和npm-cache文件夹，然后执行cmd</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm缓存清除--force</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm缓存验证</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将npm更新到最新版本</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm我-g npm</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后创建您的项目1）Angular</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm我-g @ angular / cli @ latest</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng新的HelloWorld</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）反应</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm i -g创建反应应用</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app react-app</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
