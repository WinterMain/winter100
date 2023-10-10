---
layout: question
title:  如何解决npm UNMET PEER DEPENDENCY警告？
date:   2020-03-23T06:23:28.000Z
description: 我在Windows 10上，使用Node 5.6.0和npm 3.6.0。我正在尝试将angular-material和mdi安装到我的工作文件夹中。np...
img: 
author: 番长猴子
category: question
answer: 10
tags: angularjs Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 10上，使用Node 5.6.0和npm 3.6.0。</font><font style="vertical-align: inherit;">我正在尝试将angular-material和mdi安装到我的工作文件夹中。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm使用以下命令安装角度材料的mdi</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></p>

<pre><code>+-- angular@1.5.0<font></font>
<font></font>
+-- UNMET PEER DEPENDENCY angular-animate@^1.5.0<font></font>
<font></font>
+-- UNMET PEER DEPENDENCY angular-aria@^1.5.0<font></font>
<font></font>
+-- angular-material@1.0.6<font></font>
<font></font>
+-- UNMET PEER DEPENDENCY angular-messages@^1.5.0 `-- mdi@1.4.57<font></font>
<font></font>
npm WARN enoent ENOENT: no such file or directory, open<font></font>
'C:\Users\xxxxx\Desktop\ngClassifieds\package.json' <font></font>
<font></font>
npm WARN angular-material@1.0.6 requires a peer of<font></font>
angular-animate@^1.5.0 but none was installed. <font></font>
<font></font>
npm WARN angular-material@1.0.6 requires a peer of angular-aria@^1.5.0<font></font>
but none was installed. <font></font>
<font></font>
npm WARN angular-material@1.0.6 requires a peer of<font></font>
angular-messages@^1.5.0 but none was installed.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决此问题以安装AngularJS材质和MDI？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过全局安装UNMET依赖项来解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：npm install -g @ angular / common @ 4.4.6</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">逐一安装。</font><font style="vertical-align: inherit;">它为我工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥凯小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天可用的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 2 rc.7</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我在</font></font><code>rxjs@5.0.0-beta.12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UNMET PEER DEPENDENCY上</font><font style="vertical-align: inherit;">也遇到了类似的问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您像我一样简单地替换</font></font><code>@angular/...rc.6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>@angular/...rc.7</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-这还不够。</font><font style="vertical-align: inherit;">因为，例如，</font></font><code>@angular/router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><code>rc.6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，最好</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">快速入门中</font></strong><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/angular/quickstart/blob/master/package.json" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></a><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定的答案将永远不会奏效。</font><font style="vertical-align: inherit;">如果不能解决您的问题。</font><font style="vertical-align: inherit;">确保您还使用了正确的符号</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这对于解决头痛非常重要。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>warning " &gt; @angular/compiler-cli@5.2.7" has incorrect peer dependency "typescript@&gt;=2.4.2 &lt;2.7".<font></font>
warning " &gt; tsickle@0.25.6" has incorrect peer dependency "typescript@&gt;=2.4.2 &lt;2.6".<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的 TypeScript需要在2.4.2和2.6之间吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我将我的 TypeScript库从使用更改</font></font><code>"typescript": "^2.7"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为使用</font></font><code>"typescript": "^2.5"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看起来正确吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着您可以使用</font></font><code>"typescript": "2.5"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"2.6"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或其他方式</font><font style="vertical-align: inherit;">使用npm </font></font><code>"2.7"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你想学什么</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它平均看：</font></font><a href="https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是符号（〜）和尖之间的（^）中的package.json有什么区别？</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您还必须确保该软件包存在。</font><font style="vertical-align: inherit;">也许没有</font></font><code>"typescript": "2.5.9"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找包裹号。</font><font style="vertical-align: inherit;">为了真正安全起见，请删除</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或，</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想阅读它们的含义。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以我努力了很长时间试图解决这个问题。</font><font style="vertical-align: inherit;">这是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">核</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项，适用于您用尽其他所有方式后。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的PC上新建一个文件夹。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载全新的angular安装-我使用了本指南：</font><a href="https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行它，确保它能正常工作</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从package.json文件一一安装您的依赖关系</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个安装后运行</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成后，它仍然有效，请将您的实际代码导入到这个新项目中。</font><font style="vertical-align: inherit;">修正新的角度原因导致的编译错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多数民众赞成为我做的.. 1个小时的返工vs 6个小时的尝试找出wtf是错误的..希望我以此方式开始。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致此错误的最可能原因之一是您在package.json中定义了较旧的版本。</font><font style="vertical-align: inherit;">要解决此问题，请更改package.json中的版本以匹配npm抱怨的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成后，运行npm install并瞧瞧！！ </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>This answer doesn’t apply all cases, but if you can’t solve the error by simply typing <code>npm install</code> 
, this steps might help.</p>

<p>Let`s say you got this error.</p>

<pre><code>UNMET PEER DEPENDENCY packageA@4.2.0<font></font>
<font></font>
npm WARN packageB@3.3.0 requires a peer of packageA@^3.1.0 but none was installed.<font></font>
</code></pre>

<p>This means you installed version 4.2.0 of packageA, but packageB@3.3.0 needs version 3.x.x of pakageA. (<a href="https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json">explanation of ^</a>)</p>

<p>So you can resolve this error by downgrading packageA to 3.x.x, but usually you don`t want to downgrade the package.<br>
Good news is that in some cases, packageB is just not keeping up with packageA and maintainer of packageB is trying hard to raise the peer dependency of packageA to 4.x.x.<br>
In that case, you can check if there is a higher version of packageB that requires version 4.2.0 of packageA in the npm or github. </p>

<p>For example, Go to release page<a href="https://i.stack.imgur.com/Y8J5E.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Y8J5E.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您会发现这样的依赖关系方面的重大变化。</font></font></p>

<pre><code>packageB v4.0.0-beta.0<font></font>
<font></font>
BREAKING CHANGE<font></font>
package: requires packageA &gt;= v4.0.0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在发布页面上找不到任何内容，请转到发布页面并按关键字搜索问题，例如</font></font><code>peer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可能会找到有用的信息。</font></font></p>

<p><a href="https://i.stack.imgur.com/W6eCE.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/W6eCE.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此时，您有两个选择。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）升级到所需的版本</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2）暂时保留错误，请等待稳定版本发布。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择option1：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在许多情况下，版本没有</font></font><code>latest</code> <a href="https://docs.npmjs.com/cli/dist-tag" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此不稳定。</font><font style="vertical-align: inherit;">因此，您必须检查此更新中有哪些更改，并确保所有内容都不会中断。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您选择选项2：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果将pakageA从版本3升级到4是微不足道的，或者如果pakageB的维护者尚未测试pakageA的版本4，但表示应该没问题，则可以考虑保留该错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这两种情况下，最好彻底测试它是否不会破坏任何东西。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，如果您想知道为什么必须手动执行</font><a href="https://nodejs.org/en/blog/npm/peer-dependencies/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此</font></a><font style="vertical-align: inherit;">操作，则</font></font><a href="https://nodejs.org/en/blog/npm/peer-dependencies/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此链接可以很好地说明。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYA理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>UNMET PEER DEPENDENCY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不满足文件中</font><font style="vertical-align: inherit;">指定的一个或多个模块的依赖性时，将引发错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仔细检查警告，并</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用正确版本的依赖项</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后跑</font></font></p>

<pre><code>rm -rf node_modules/<font></font>
npm cache clean<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将正确安装所有必需的依赖项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiJinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，所有依赖项已经存在。</font><font style="vertical-align: inherit;">在这种情况下，</font><font style="vertical-align: inherit;">请更新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它可能已崩溃。</font><font style="vertical-align: inherit;">它解决了我的问题。</font></font></p>

<pre><code>npm install -g npm
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://www.npmjs.com/package/npm-install-peers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-install-peers</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作。</font></font></p>

<pre><code>npm install -g npm-install-peers
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm不再安装对等项依赖项，因此您需要手动安装对等项依赖项，只需</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对所需的deps进行操作，然后尝试再次安装主要</font><font style="vertical-align: inherit;">对等项</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回复评论： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是正确的信息，它说明您缺少哪些部门</font></font></p>

<pre><code>UNMET PEER DEPENDENCY angular-animate@^1.5.0 +-- <font></font>
UNMET PEER DEPENDENCY angular-aria@^1.5.0 +-- angular-material@1.0.6 +<font></font>
UNMET PEER DEPENDENCY angular-messages@^1.5.0 `-- mdi@1.4.57` <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你需要 </font></font><code>npm install angular angular-animate angular-aria angular-material angular-messages mdi</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
