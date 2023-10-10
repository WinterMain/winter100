---
layout: question
title:  检查已安装的angular-cli版本？
date:   2020-03-23T13:45:11.000Z
description: 有没有办法检查在我的计算机上全局安装的angular-cli的特定版本？我在Windows环境中。npm -v和node -v分别只给我npm和node...
img: 
author: Gil梅
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法检查在我的计算机上全局安装的angular-cli的特定版本？</font><font style="vertical-align: inherit;">我在Windows环境中。
</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm -v</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node -v分别</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只给我npm和node的版本，我似乎找不到任何与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng相关的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试运行一个正在处理的项目，并且该项目在使用npm的较旧版本的angular-cli上运行。</font><font style="vertical-align: inherit;">但是，在安装其他演示项目之后，如果不卸载并重新安装特定版本的angular-cli，我的主项目将无法工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3091篇《检查已安装的angular-cli版本？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需运行以下命令：</font></font></strong></p>

<p><code>ng v</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>ng --version
</code></pre>

<p><a href="https://i.stack.imgur.com/zcCTi.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/zcCTi.png" alt="ng--版本输出"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看上面的图片。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>ng version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>ng --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或   </font></font><code>ng v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或  </font></font><code>ng -v</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用这4个命令来检查机器中安装的angular-cli版本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用CLI查找  </font></font><code>ng --version</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度cli：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.0.0-beta.28.3</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6.10.1</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作系统：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">darwin x64</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/euVhR.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/euVhR.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到安装了您的Angular的cmd中的文件夹路径，然后键入 
 </font></font><code>ng --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将显示您的Angular版本。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>ng --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简短的</font></font><code>ng v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确答案，但有一些</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的细节</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font></font><code>ng v</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> angular cli </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目文件夹中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，它将显示项目中安装的本地cli版本（package.json）</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font></font><code>ng v</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> angular cli </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目文件夹</font></font></strong><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">之外</font></strong><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">
  ，它将始终显示全局cli版本</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在命令行中输入以下任何内容，</font></font></p>

<blockquote>
  <p><code>ng --version</code>    <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></strong>   <code>ng v</code>   <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></strong>   <code>ng -v</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出就像</font></font></p>

<p><a href="https://i.stack.imgur.com/Hq55x.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Hq55x.png" alt="屏幕截图"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那里不仅提到了Angular版本，还提到了Node版本。</font><font style="vertical-align: inherit;">我使用Angular 6。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>npm list -global</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来列出系统上当前安装的所有组件版本。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看不同级别的特定列表，请使用</font></font><code>--depth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
例如：</font></font><br></p>

<pre><code>npm list -global --depth 0
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用version标志运行时，angular cli可以报告其版本</font></font></p>

<pre><code>ng --version
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行：</font></font></strong>  </p>

<pre><code>ng v
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>ng --version
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">告诉你当前的角度cli版本号 </font></font></p>

<p><a href="https://i.stack.imgur.com/odLyn.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/odLyn.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
