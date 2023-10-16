---
layout: question
title:  从终端（iOS）运行React Native App时出错
date:   2020-03-09T15:27:55.000Z
description: 我正在关注React Native官方网站上的教程。使用以下内容构建我的项目：react-native run-ios我得到错误：Fou...
img: 
author: 阳光GO
category: question
answer: 13
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在关注React Native官方网站上的教程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下内容构建我的项目：</font></font></p>

<pre><code>react-native run-ios
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到错误：</font></font></p>

<pre><code>Found Xcode project TestProject.xcodeproj<font></font>
xcrun: error: unable to find utility "instruments", not a developer   <font></font>
tool or in PATH<font></font>
<font></font>
Command failed: xcrun instruments -s<font></font>
xcrun: error: unable to find utility "instruments", not a developer <font></font>
tool or in PATH<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然，当我从.xcodeproj运行应用程序时，一切正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第360篇《从终端（iOS）运行React Native App时出错》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何此类问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>.expo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找 </font></font><code>apk-cache</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除该文件夹 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就完成了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你？ </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam番长逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac中：毕竟，您遇到了这个问题，可能有机会在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统偏好设置</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以太网</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt;选择</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高级</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font><strong><font style="vertical-align: inherit;">代理</font></strong><font style="vertical-align: inherit;">中缺少以下内容</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下行，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">* .local，本地主机</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，SDKROOT环境变量是错误的，它引用了旧版本的iPhoneOSxx.x.sdk。</font><font style="vertical-align: inherit;">（也许这会在重启后自动解决吗？）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过运行</font></font><code>echo $SDKROOT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并验证其是否为有效路径</font><font style="vertical-align: inherit;">来进行检查</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过更新.bash_profile来修复它：</font></font></p>

<pre><code>export SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS11.2.sdk
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）转到Xcode首选项</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）找到位置标签 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）在给定的命令行工具中设置Xcode版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，它将成功运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，事实是有一个iOS系统更新正在等待重新启动计算机。</font><font style="vertical-align: inherit;">重新启动，让更新完成可以解决我的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些解决方案都不适合我。</font><font style="vertical-align: inherit;">这两个类似的问题提供了可行的临时解决方案，看来模拟器进程未正确关闭：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">杀死模拟器进程</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/52533391/11279823"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/52533391/11279823</font></font></a></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">退出模拟器和Xcode。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><code>Activity monitor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，选择</font></font><code>cpu</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项，然后搜索</font></font><code>sim</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，杀死显示为结果的所有过程。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后启动终端并运行</font></font><code>sudo xcrun simctl erase all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将删除所有模拟器的所有内容。</font><font style="vertical-align: inherit;">按内容显示，如果您登录某处的密码将丢失，则该模拟器中安装的所有开发人员应用程序也将消失。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动软件包之前打开模拟器</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/55374768/11279823"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/55374768/11279823</font></font></a></p>

<p><code>open -a Simulator; npm start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望找到一个永久的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于像我这样的人，他们在更新Xcode后来到此页面但没有位置设置问题，重新启动计算机就可以解决问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">纳兰长歌</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，问题是未安装Xcode。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次安装后，我必须接受XCode许可证，然后才能运行它。</font><font style="vertical-align: inherit;">您可以运行以下命令通过命令行获取许可证提示。</font><font style="vertical-align: inherit;">您还必须输入</font></font><code>agree</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并确认。</font></font></p>

<pre><code>sudo xcodebuild -license
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小哥蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要安装或设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode命令行工具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的位置</font><font style="vertical-align: inherit;">。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过命令行</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您下载了Xcode，则可以运行以下命令来设置路径：</font></font></p>

<pre><code>sudo xcode-select -s /Applications/Xcode.app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尚未安装命令行工具，则可能需要先运行以下命令：</font></font></p>

<pre><code>xcode-select --install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装命令行工具之前，您可能需要接受Xcode许可证：</font></font></p>

<pre><code>sudo xcodebuild -license accept 
</code></pre>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Xcode</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>Command Line Tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Xcode（</font></font><code>Xcode &gt; Preferences &gt; Locations</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">调整</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/cVeTY.png" rel="noreferrer"><img src="https://i.stack.imgur.com/cVeTY.png" alt="Xcode首选项-“位置”标签"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猪猪GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Check out this link (<a href="https://github.com/facebook/react-native/issues/7965" rel="noreferrer">Running react-native run-ios occurs an error?</a>). It appears to be a problem with the location of <code>Command line tools</code>.</p>

<p>In Xcode, select Xcode menu, then Preferences, then Locations tab. Select your Xcode version from the dropdown and exit Xcode.</p>

<p><a href="https://i.stack.imgur.com/M6w7Q.png" rel="noreferrer"><img src="https://i.stack.imgur.com/M6w7Q.png" alt="XCode位置选项卡"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是您没有在命令行工具上设置您的Xcode版本，要解决此问题，请打开Xcode&gt; Menu&gt; preferences&gt; location&gt;，这里为命令行工具选择您的Xcode版本。 </font></font><a href="https://i.stack.imgur.com/fvWo9.png" rel="noreferrer"><img src="https://i.stack.imgur.com/fvWo9.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">未选择</font><font style="vertical-align: inherit;">安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行</font><font style="vertical-align: inherit;">后</font><font style="vertical-align: inherit;">，请打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“首选项” &gt;&gt;“位置”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并设置“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行工具”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MAC高塞拉利昂</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode的9.3版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/VdBJn.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/VdBJn.jpg" alt="Xcode首选项 "></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按下</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可开启</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iOS模拟器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<p><a href="https://i.stack.imgur.com/2fNj7.png" rel="noreferrer"><img src="https://i.stack.imgur.com/2fNj7.png" alt="按a打开Android设备或模拟器，或者按i打开iOS模拟器。"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到一个很酷的新iPhone模拟器，如下图所示：</font></font></p>

<p><a href="https://i.stack.imgur.com/3G0KO.png" rel="noreferrer"><img src="https://i.stack.imgur.com/3G0KO.png" alt="响应本机打印，我是前端开发人员Alireza Dezfoolian！"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
