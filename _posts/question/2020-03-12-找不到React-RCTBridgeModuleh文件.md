---
layout: question
title:  找不到React / RCTBridgeModule.h文件
date:   2020-03-12T06:35:17.000Z
description: 在xcode上构建本机iOS应用程序时遇到此错误。在npm install和rpm链接react-native-fs库之后开始出现此错误。但是在网...
img: 
author: 逆天L
category: question
answer: 15
tags: ios IOS
topic: IOS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在xcode上构建本机iOS应用程序时遇到此错误。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/11423/images/thumbnails/1583994917352.png" data-src="https://www.samyoc.com//uploads/users/11423/images/1583994917352.png"><img src="https://i.stack.imgur.com/3stNm.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在npm install和rpm链接</font></font><a href="https://github.com/johanneslumpe/react-native-fs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native-fs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font><font style="vertical-align: inherit;">之后开始出现此错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是在网上搜索解决方案后，我注意到许多人在安装其他React Native库时遇到了相同的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人建议的</font><font style="vertical-align: inherit;">一种</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，在“构建设置”-&gt;“标题搜索路径”下添加以下内容。</font></font></p>

<p><code>$(SRCROOT)/../node_modules/react-native/React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -（递归）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是这种解决方案没有运气，仍然会出现相同的错误</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第993篇《找不到React / RCTBridgeModule.h文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在做了</font></font><code>react-native link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个不支持RN 0.59+的自动链接的依赖</font><font style="vertical-align: inherit;">手册之后遇到了这个问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是在Xcode的Libraries文件夹下选择xcodeproj文件，然后在Build Settings中，更改Header Search Paths以添加以下两个（递归）：</font></font></p>

<pre><code>$(SRCROOT)/../../../ios/Pods/Headers/Public/React-Core<font></font>
$(SRCROOT)/../../../ios/Pods/Headers/Public<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以做的正确的事情是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）</font></font><code>npm uninstall reat-native-fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载库</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）</font></font><code>npm unlink react-native-fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消链接库</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，该库已成功删除，现在在您的项目中再次安装该库，这次手动链接所有内容。</font><font style="vertical-align: inherit;">有时自动链接会导致此错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，以上解决方案都没有用，下面是有效的方法（我已经签出</font></font><code>Parallelize Build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并添加了</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>1. Open XCode --&gt; To Libraries add `$LibraryWhichDoesNotWork.xcodeproj$`<font></font>
2. Then for your app in the `Build Phases` add to the `Link Binary with Libraries` the file `lib$LibraryWhichDoesNotWork$.a`<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到项目中的iOS文件夹并安装pod- </font></font></p>

<pre><code>$ pod install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在安装Pod类型命令时遇到任何错误， </font></font></p>

<pre><code>$ xcode-select -p
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果应为-/Applications/Xcode.app/Contents/Developer</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果路径不正确，请在Xcode中打开您的iOS项目，然后转到：Xcode-&gt; preferences-&gt;命令行工具-&gt;选择Xcode</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次安装吊舱，您的问题将得到解决。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要通过编辑器创建它，请打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SMobile.xcscheme</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并改变 </font></font><code>parallelizeBuildables = "NO"</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用</font></font><a href="https://github.com/brodybits/create-react-native-module/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-native-module创建的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何新模块中都收到此错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">没有发布的解决方案对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的是首先确保</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在新创建的module文件夹中运行以便创建</font></font><code>node_modules/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这一步可能很明显）。</font><font style="vertical-align: inherit;">然后，在XCode中，选择产品-&gt;方案-&gt;反应，而不是默认选择MyModuleName。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本的反应母语在以前的帖子解释和图书馆</font></font><a href="https://github.com/facebook/react-native/releases/tag/v0.40.0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有破坏兼容性的变化。</font><font style="vertical-align: inherit;">如果您不打算升级到react-native 0.40+，但是可以强制安装该库的先前版本，例如，使用react-native-fs：</font></font></p>

<pre><code>npm install --save -E react-native-fs@1.5.1
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Native 0.60之后，此问题通常是由链接库与新的“自动链接”功能混合引起的。</font><font style="vertical-align: inherit;">这为我解决了</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用取消旧库的链接</font></font></p>

<pre><code>$ react-native unlink react-native-fs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全使用刷新Pod集成</font></font></p>

<pre><code>$ pod deintegrate &amp;&amp; pod install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在重新加载您的工作区并进行干净的构建。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>Libraries/React.xcodeproj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在xcode中为红色，则重新安装node_modules</font></font></p>

<pre><code>rm -rf node_modules &amp;&amp; yarn
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从react-native 0.46.3新建的项目是红色的：当我做了react-native init时，SI的npm为5.3.0，纱线为0.24.5。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于将React Native升级到0.40+后出现此错误的查看器，您可能需要</font></font><code>react-native upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令行上</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够构建调试，但是无法构建档案。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过将</font></font><code>React.xcodeproj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ node_modules / react-native / React中找到</font><font style="vertical-align: inherit;">的内容拖到</font><font style="vertical-align: inherit;">Xcode的根目录中来</font><font style="vertical-align: inherit;">解决此问题</font><font style="vertical-align: inherit;">，然后在构建阶段&gt;目标依赖项中将React添加为目标依赖项。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速修复（不是最好的）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改import react-native标题行：</font></font></p>

<pre><code> #import &lt;React/RCTBridgeModule.h&gt;<font></font>
 #import &lt;React/RCTLog.h&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至：</font></font></p>

<pre><code> #import "RCTBridgeModule.h"<font></font>
 #import "RCTLog.h"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我要尝试使用的库所做的更改的示例：</font></font><a href="https://github.com/johanneslumpe/react-native-fs/pull/238/files" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭＃46-未找到“ RCTBridgeModule.h”文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font></p>

<pre><code>  #import "RCTBridgeModule.h"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code> #import "React/RCTBridgeModule.h"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以我为例，当我尝试为iOS归档一个0.40+的react-native应用程序时发生了这个特殊问题（解决方案在这里找到：</font><a href="https://github.com/facebook/react-native/issues/11721#issuecomment-270672904" rel="noreferrer"><font style="vertical-align: inherit;">升级到时，</font></a></font><a href="https://github.com/facebook/react-native/issues/11721#issuecomment-270672904" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可靠的构建</font></font><code>^0.39.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">失败</font></font><code>^0.40.0</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生的事情是</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试图并行构建react-native库，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际构建react库</font><em><font style="vertical-align: inherit;">之前</font></em><font style="vertical-align: inherit;">构建</font><font style="vertical-align: inherit;">具有隐式react依赖关系</font><font style="vertical-align: inherit;">的库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案是：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用并行构建：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode菜单-&gt;产品-&gt;方案-&gt;管理Shemes ...</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双击您的应用程序 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成选项卡-&gt;取消选中Parallelize Build</font></font></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将React添加为项目依赖</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode Project Navigator-&gt;将React.xcodeproj从库中拖到根树中</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建阶段选项卡-&gt;目标依赖关系-&gt; +-&gt;添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></strong></li>
</ul></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保禁用</font></font><code>Parallelise Build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标上方</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">目标</font></font></p>

<p><a href="https://i.stack.imgur.com/ifLJT.png" rel="noreferrer"><img src="https://i.stack.imgur.com/ifLJT.png" alt="在此处输入图片说明"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
