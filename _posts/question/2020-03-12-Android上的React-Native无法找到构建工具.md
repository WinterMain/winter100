---
layout: question
title:  Android上的React Native无法找到构建工具
date:   2020-03-12T09:04:16.000Z
description: 是什么引起以下问题？我的Android SDK版本不受支持吗？Starting JS server...                       ...
img: 
author: SamItachi阿飞
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么引起以下问题？</font><font style="vertical-align: inherit;">我的Android SDK版本不受支持吗？</font></font></p>

<pre class="lang-none prettyprint-override"><code>Starting JS server...                                                                     <font></font>
Building and installing the app on the device (cd android &amp;&amp; gradlew.bat installDebug)...<font></font>
<font></font>
FAILURE: Build failed with an exception.                                                  <font></font>
<font></font>
* What went wrong:                                                                        <font></font>
A problem occurred configuring project ':app'.                                            <font></font>
&gt; failed to find Build Tools revision 23.0.1       <font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1174篇《Android上的React Native无法找到构建工具》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在响应本机文档后尝试在命令行中进行构建时遇到了这个问题。</font><font style="vertical-align: inherit;">我通过在android studio中打开项目解决了这个问题。</font><font style="vertical-align: inherit;">不匹配的依赖项将出现在应用程序底部的构建失败小吃栏中。</font><font style="vertical-align: inherit;">对于每个失败，请单击链接以解决问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁蛋蛋宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您拥有Build Tools版本24.0.1，请更新您的版本</font></font><code>build.gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使其匹配</font></font><code>buildToolsVersion "24.0.0"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>Android/Sdk/build-tools/24.0.1/source.properties</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经</font></font><code>Pkg.Revision</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备好了</font></font><code>24.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着系统上安装的Android Build Tools不同于应用程序的配置文件（您的配置文件指向23.0.1）中的东西，但是系统上可能有23、24或25.0。*。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的解决方案：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font><code>build.gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位于</font></font><code>anroid/app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目文件夹</font><font style="vertical-align: inherit;">下</font><font style="vertical-align: inherit;">的文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找条目</font></font><code>buildToolsVersion</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ 23.0.1”，并将其替换为系统上拥有的最新版本。</font><font style="vertical-align: inherit;">你可以在这里找到它：</font></font><code>C:\Program Files (x86)\Android\android-sdk\build-tools</code></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试在系统中安装</font></font><code>build.gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">具有的版本</font><font style="vertical-align: inherit;">（使用SDK管理器）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不得不将我的Android项目更改</font></font><code>build.gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为：</font></font></p>

<pre><code>compileSdkVersion 23<font></font>
buildToolsVersion "23.0.3"<font></font>
<font></font>
defaultConfig {<font></font>
    applicationId "com.demoproject"<font></font>
    minSdkVersion 16<font></font>
    targetSdkVersion 23<font></font>
    versionCode 1<font></font>
    versionName "1.0"<font></font>
    ndk {<font></font>
        abiFilters "armeabi-v7a", "x86"<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Android SDK Manager v25中，您必须直接从Android Studio安装正确的构建工具，因为该</font></font><code>android</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令不再起作用：</font></font></p>

<p><a href="https://i.stack.imgur.com/icvRk.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/icvRk.png" alt="从android studio安装"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>/Users/username/Library/Android/sdk/build-tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中</font><font style="vertical-align: inherit;">找到版本号</font><font style="vertical-align: inherit;">，然后修改</font></font><code>buildToolsVersion</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Gradle配置相对应</font><font style="vertical-align: inherit;">的版本号</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了较新版本的SDK Build工具（与Mark相同）的问题，但是我设法通过修改</font></font><code>android/app/build.gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和设置适当的版本</font><font style="vertical-align: inherit;">来解决它</font><font style="vertical-align: inherit;">，例如</font></font></p>

<pre><code>android {<font></font>
    compileSdkVersion 23<font></font>
    buildToolsVersion "23.0.2"<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：正如Mark所建议的，以这种方式仅更新次要（或补丁）版本是明智的。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新此版本的</font><font style="vertical-align: inherit;">另一个原因</font><font style="vertical-align: inherit;">是，当您有很多带有本机部分的第三方库时-您可能最终都更新了它们。</font><font style="vertical-align: inherit;">因此，您必须权衡新版本与更多工作之间可能带来的好处。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要修改4个文件</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grep buildToolsVersion * -r | </font><font style="vertical-align: inherit;">grep 23.0.1</font></font></p>
</blockquote>

<pre><code>Examples/Movies/android/app/build.gradle:    buildToolsVersion "23.0.2"<font></font>
Examples/UIExplorer/android/app/build.gradle:    buildToolsVersion "23.0.2"<font></font>
ReactAndroid/build.gradle:    buildToolsVersion "23.0.2"<font></font>
local-cli/generator-android/templates/src/app/build.gradle:    buildToolsVersion "23.0.2"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tom逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能您需要更新构建工具。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试从图形界面进行更新时遇到了问题，它没有显示确切的次要版本，因此无法更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过查看终端提供的版本来解决此问题：</font></font></p>

<pre><code>android list sdk -a
</code></pre>

<p></p>

<pre><code>[...]<font></font>
Packages available for installation or update: 156<font></font>
1- Android SDK Tools, revision 24.4<font></font>
2- Android SDK Platform-tools, revision 23.0.1<font></font>
3- Android SDK Platform-tools, revision 23.1 rc1<font></font>
4- Android SDK Build-tools, revision 23.0.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[...]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用以下命令安装正确的版本：</font></font></p>

<pre><code>android update sdk -a -u -t 4
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意-由于您安装的构建工具的唯一版本</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太新，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此可能会出现此错误</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我恰好得到了OP的错误（抱怨react-native找不到Build Tools版本23.0.1）。</font><font style="vertical-align: inherit;">当我检查Android SDK Manager时，看到了以下内容：</font></font></p>

<p><a href="https://i.stack.imgur.com/EhncM.png"><img src="https://i.stack.imgur.com/EhncM.png" alt="屏幕截图显示了23.0.2“已安装”但23.0.1“未安装”"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我天真地认为，安装最新版本的Build-tools（在撰写本文时为23.0.2）可以，但显然不行。</font><font style="vertical-align: inherit;">另外安装23.0.1可解决此问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
