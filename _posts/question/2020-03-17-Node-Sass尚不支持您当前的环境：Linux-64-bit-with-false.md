---
layout: question
title:  Node Sass尚不支持您当前的环境：Linux 64-bit with false
date:   2020-03-17T10:20:45.000Z
description: 在带有node-sass的Arch Linux上获取此错误。我正在使用gulp-sass。Node Sass does not yet support...
img: 
author: 神奇Davaid
category: question
answer: 18
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在带有node-sass的Arch Linux上获取此错误。</font><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/dlmanning/gulp-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gulp-sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>Node Sass does not yet support your current environment: Linux 64-bit with false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本号</font></font></p>

<pre><code>$ gulp -v<font></font>
[19:43:15] CLI version 3.9.1<font></font>
[19:43:15] Local version 3.9.1<font></font>
<font></font>
$ npm -v<font></font>
3.9.0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></p>

<pre><code>$ node -v<font></font>
v6.2.0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使使用此命令</font></font><code>npm rebuild node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不会更改任何内容。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm审核修复对我而言就像一个魅力！ </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载并重新安装</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将发现自身缺少二进制文件。</font></font></p>

<pre><code>npm uninstall --save-dev node-sass<font></font>
npm install --save-dev node-sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用上述命令未能解决问题，则您的节点版本可能存在问题。</font><font style="vertical-align: inherit;">检查您的节点版本是否支持节点ass版本。</font><font style="vertical-align: inherit;">选择一个稳定的节点版本，然后重复上述命令以解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是具有node-sass的节点的兼容性表：-</font></font></p>

<p><a href="https://i.stack.imgur.com/rAmPJ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/rAmPJ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果问题仍未解决，请检查node-sass支持的环境列表：-https:
 </font></font><a href="https://github.com/sass/node-sass/releases/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/sass/node-sass/releases/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>npm i @ionic/app-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是唯一对我有影响的东西。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果卸载和安装</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用，请尝试</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font></strong> <code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹并</font></font><code>npm install</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除节点模块：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ rm-rf node_modules</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装节点模块：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ npm install</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm卸载node-sass</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm我node-sass@4.7.2</font></font></p>

<p><a href="https://dev.to/letsbsocial1/node-sass-and-node-910-4ol" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://dev.to/letsbsocial1/node-sass-and-node-910-4ol</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除node_modules / node-sass文件夹并运行npm install（这可能需要一些时间，具体取决于依赖项），然后运行npm run build</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门前端A</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到的错误，模块“构建失败：错误：Node Sass尚不支持您当前的环境：OS X 64位，运行时不受支持（72）”。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，尝试： </font></font></p>

<pre><code>npm rebuild node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有帮助，然后尝试</font></font></p>

<pre><code>sudo npm install --unsafe-perm -g node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像魅力一样工作 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三前端Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n 6.0.0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows x64平台存在相同的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是使用较新版本的node-saas更新了package.json而不是进行了重新构建，因为要进行重新构建，您需要Visual Studio构建环境，该环境必须为依赖项而安装：）… </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与最新的node-saas一起使用，应该没问题：</font></font></p>

<pre><code>"node-sass": "^4.11.0",
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProJinJin樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到存在node-sass的路径并运行此命令 </font></font></p>

<pre><code>npm rebuild node-sass --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我的问题 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐凯神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
或
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm rebuild node-sass</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考：</font><a href="https://github.com/sass/node-sass/issues/1764" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/sass/node-sass/issues/1764" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/sass/node-sass/issues/1764</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚L</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还应该检查您的nodejs版本。</font><font style="vertical-align: inherit;">我使用的是Node js的版本9，目前尚不正式支持。</font><font style="vertical-align: inherit;">恢复到6.11.4版本可以解决此问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这在这里是否适用，但是对我来说，我只是删除了node_modules并重新安装（npm install）。</font><font style="vertical-align: inherit;">问题已解决。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我设法使用下面的命令解决了这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm审核修复- </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作</font></font></strong></p>

<pre><code>npm audit fix
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过- </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没为我工作</font></font></strong></p>

<pre><code>sudo npm rebuild node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我尝试了- </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没为我工作</font></font></strong></p>

<pre><code>npm uninstall --save-dev node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>npm install --save-dev node-sass
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOGil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着2019年7月与节点V12的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass v4.11.0不适用于节点12。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将节点升级到v12时遇到了这个问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照其他答案的建议重建节点无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将node-sass升级到v4.12.0为我修复了它。</font></font></p>

<p><code>npm install node-sass@4.12.0</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您需要卸载并安装node-sass库。</font><font style="vertical-align: inherit;">尝试：</font></font></p>

<pre><code>npm uninstall --save-dev node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<pre><code>npm install --save-dev node-sass
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm rebuild node-sass</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>sudo npm rebuild node-sass</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
