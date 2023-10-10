---
layout: question
title:  打印：条目“：CFBundleIdentifier”不存在
date:   2020-03-12T02:58:31.000Z
description: 当我运行时react-native run-ios，构建成功，但出现以下错误。我检查了整个地方，但似乎没有任何反应。sudo在命令前面使用也无济于事。我正...
img: 
author: Near飞云
category: question
answer: 28
tags: ios IOS
topic: IOS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行时</font></font><code>react-native run-ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，构建成功，但出现以下错误。</font><font style="vertical-align: inherit;">我检查了整个地方，但似乎没有任何反应。</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令前面</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">也无济于事。</font><font style="vertical-align: inherit;">我正在使用Xcode 7.3，react-native-cli：0.2.0，react-native：0.24.1，节点v5.11.0。</font></font></p>

<pre><code>=== BUILD TARGET mobileTests OF PROJECT mobile WITH CONFIGURATION Release ===<font></font>
<font></font>
Check dependencies<font></font>
<font></font>
** BUILD SUCCEEDED **<font></font>
<font></font>
Installing build/Build/Products/Debug-iphonesimulator/mobile.app<font></font>
An error was encountered processing the command (domain=NSPOSIXErrorDomain, code=2):<font></font>
Failed to install the requested application<font></font>
An application bundle was not found at the provided path.<font></font>
Provide a valid path to the desired application bundle.<font></font>
Print: Entry, ":CFBundleIdentifier", Does Not Exist<font></font>
/Users/astiefel/workspace/bosspayments/mobile/node_modules/promise/lib/done.js:10<font></font>
      throw err;<font></font>
      ^<font></font>
<font></font>
Error: Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/mobile.app/Info.plist<font></font>
Print: Entry, ":CFBundleIdentifier", Does Not Exist<font></font>
<font></font>
    at checkExecSyncError (child_process.js:470:13)<font></font>
    at Object.execFileSync (child_process.js:490:13)<font></font>
    at _runIOS (runIOS.js:91:34)<font></font>
    at runIOS.js:24:5<font></font>
    at tryCallTwo (/Users/astiefel/workspace/bosspayments/mobile/node_modules/promise/lib/core.js:45:5)<font></font>
    at doResolve (/Users/astiefel/workspace/bosspayments/mobile/node_modules/promise/lib/core.js:200:13)<font></font>
    at new Promise (/Users/astiefel/workspace/bosspayments/mobile/node_modules/promise/lib/core.js:66:3)<font></font>
    at Array.runIOS (runIOS.js:23:10)<font></font>
    at Object.run (/Users/astiefel/workspace/bosspayments/mobile/node_modules/react-native/local-cli/cli.js:86:13)<font></font>
    at Object.&lt;anonymous&gt; (/usr/local/lib/node_modules/react-native-cli/index.js:88:7)<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根本原因是部署端口不是免费的。</font><font style="vertical-align: inherit;">您可以重新启动设备并释放所有端口，否则运行</font></font><code>$ lsof -i :8081</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并找到占用端口8081的进程。通过运行命令杀死正在使用端口8081的进程</font></font><code>$ kill -9 {process_which_is_running_under_8081}</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了解决问题的方法：不要在项目路径中使用空间！</font><font style="vertical-align: inherit;">😄</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令一段时间后出现互联网问题时，文件</font></font><code>node_modules\react-native\third-party</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未正确下载，因此请检查是否已正确下载，否则请删除node_modules并重新安装</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行</font></font><code>react-native run-ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  命令</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font><font style="vertical-align: inherit;">遵循步骤</font></font><a href="https://facebook.github.io/react-native/docs/getting-started.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/react-native/docs/getting-started.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（使用本机代码构建项目）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行    </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native run-ios</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令之前，请从</font></font><a href="https://sourceforge.net/projects/boost/files/boost/1.63.0/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://sourceforge.net/projects/boost/files/boost/1.63.0/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载boost节点模块，</font><font style="vertical-align: inherit;">并替换node_modules / react-native / third-party / boost_1_63_0</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在运行    </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native run-ios</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     命令</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充，当以上方法均无法解决时，它对我有用：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装react-native-git-upgrade并更新您的项目。 </font></font><code>npm i -g react-native-git-upgrade &amp;&amp; react-native-git-upgrade</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开Xcode-&gt;文件-&gt;项目设置-&gt;高级。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，然后选择“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相对于工作区</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，然后单击完成。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新您的CLI。 </font></font><code>npm i -g react-native-cli</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新您的Nodejs 8和NPM。</font></font><code>nvm install --lts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>nvm install-latest-npm</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除ios / build和node_modules（在您的项目根路径中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次使用</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>react-native run-ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并给我一个拥抱:-)</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它终于可以在这里工作了。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mac OS High Sierra 10.13.4</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Xcode 9.3</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM 5.8.0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点8.11.1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RN 0.55.2</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Near番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的方法单击导航器中的RCTWebSocket项目，然后删除构建设置&gt;自定义编译器标志下的标志。
</font></font><a href="https://i.stack.imgur.com/5BHcT.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/5BHcT.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥番长番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息类似于 </font></font><code>The domain/default pair of (../ios/Runner/Info, CFBundleIdentifier) does not exist</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着Xcode认为您</font></font><code>plist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拥有</font></font><code>invalid format content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要粘贴</font></font><code>Info.plist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的内容</font><font style="vertical-align: inherit;">以找出该文件的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个可能的问题是，此</font></font><code>&lt;key&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s和</font></font><code>&lt;values&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s（</font></font><code>&lt;array&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s，</font></font><code>&lt;string&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s或</font></font><code>&lt;bool&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s）配对不正确。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;key&gt;UISupportedInterfaceOrientations&lt;/key&gt;         //&lt;------ here is the key<font></font>
&lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;<font></font>
&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;<font></font>
&lt;string&gt;Tagueo necesita usar la camara&lt;/string&gt;<font></font>
&lt;key&gt;NSMicrophoneUsageDescription&lt;/key&gt;<font></font>
&lt;string&gt;Tagueo necesita usar el microfono&lt;/string&gt;<font></font>
&lt;array&gt;                                            //&lt;------ here is the value<font></font>
    &lt;string&gt;UIInterfaceOrientationPortrait&lt;/string&gt;<font></font>
    &lt;string&gt;UIInterfaceOrientationLandscapeLeft&lt;/string&gt;<font></font>
    &lt;string&gt;UIInterfaceOrientationLandscapeRight&lt;/string&gt;<font></font>
&lt;/array&gt;<font></font>
&lt;key&gt;UISupportedInterfaceOrientations~ipad&lt;/key&gt;   //&lt;------ please compare this key<font></font>
&lt;array&gt;                                            //&lt;------ please compare this value<font></font>
    &lt;string&gt;UIInterfaceOrientationPortrait&lt;/string&gt;<font></font>
    &lt;string&gt;UIInterfaceOrientationPortraitUpsideDown&lt;/string&gt;<font></font>
    &lt;string&gt;UIInterfaceOrientationLandscapeLeft&lt;/string&gt;<font></font>
    &lt;string&gt;UIInterfaceOrientationLandscapeRight&lt;/string&gt;<font></font>
&lt;/array&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要移动</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">聚集</font></font></p>

<pre><code>&lt;key&gt;UISupportedInterfaceOrientations&lt;/key&gt;        //&lt;------ here is the key<font></font>
&lt;array&gt;                                            //&lt;------ follow with the value<font></font>
   &lt;string&gt;UIInterfaceOrientationPortrait&lt;/string&gt;<font></font>
   &lt;string&gt;UIInterfaceOrientationLandscapeLeft&lt;/string&gt;<font></font>
   &lt;string&gt;UIInterfaceOrientationLandscapeRight&lt;/string&gt;<font></font>
&lt;/array&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这是由cocoapods管理的ios依赖关系。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须这样做：</font></font></p>

<pre><code>$ cd ToProject/ios<font></font>
<font></font>
$ pod install<font></font>
<font></font>
$ react-native run-ios<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用</font></font></p>

<p><a href="https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：试图找出别人完成的工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些解决方案建议对我都不起作用。</font><font style="vertical-align: inherit;">我刚刚创建了一个rn 0.58.5项目。</font><font style="vertical-align: inherit;">并与我的项目进行比较。</font><font style="vertical-align: inherit;">我看到</font></font><code>JavaScriptCore.framework</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Build Phasess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; </font><font style="vertical-align: inherit;">下</font><font style="vertical-align: inherit;">没有任何内容</font></font><code>Link Binary With Libraries</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">拖放后，JavaScriptCore react-native run-ios构建成功。</font></font></p>

<p><code>JavaScriptCore.framework</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 位置： </font></font><code>‎⁨Macintosh HD⁩ ▸ ⁨Applications⁩ ▸ ⁨Xcode⁩ ▸ ⁨Contents⁩ ▸ ⁨Developer⁩ ▸ ⁨Platforms⁩ ▸ ⁨iPhoneOS.platform⁩ ▸ ⁨Developer⁩ ▸ ⁨SDKs⁩ ▸ ⁨iPhoneOS.sdk⁩ ▸ ⁨System⁩ ▸ ⁨Library⁩ ▸ ⁨Frameworks⁩</code></p>

<p><a href="https://i.stack.imgur.com/vyU33.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/vyU33.png" alt="JavaScriptCore.framework"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xcode 10.1对我来说使用此版本是可行的</font></font></p>

<pre><code>"react": "16.6.0-alpha.8af6728",<font></font>
"react-native": "0.57.4"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过几个月的尝试，我终于将操作系统更新为Sierra，将XCode更新为最新版本，并且所有错误均消失了。</font><font style="vertical-align: inherit;">希望这可以帮助一些人！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0.44可以运行，但是0.45不能运行，也许是我通过以下命令解决了版本问题：rninit init TaxiApp --source react-native@0.44.0;</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于删除了一些我在Xcode中不使用的模拟器，我的终端弹出了相同的消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>react-native run-ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有特定参数</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，则react-native将运行默认模拟器，在我的情况下为iPhone 6，带有iOS 10.3.1，我偶然删除了该模拟器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的错误消息：</font></font></p>

<pre><code>xcodebuild: error: Unable to find a destination matching the provided destination specifier:<font></font>
        { id:F3A7BF54-B827-4517-A30D-8B3241C8EBF8 }<font></font>
<font></font>
Available destinations for the "albums" scheme:<font></font>
    { platform:iOS Simulator, id:CD64F26B-045A-4E27-B05A-5255924095FB, OS:10.3.1, name:iPad Pro (9.7 inch) }<font></font>
    { platform:iOS Simulator, id:8FC41950-9E60-4264-B8B6-20E62FAB3BD0, OS:10.3.1, name:iPad Pro (10.5-inch) }<font></font>
    { platform:iOS Simulator, id:991C8B5F-49E2-4BB7-BBB6-2F5D1776F8D2, OS:10.3.1, name:iPad Pro (12.9 inch) }<font></font>
    { platform:iOS Simulator, id:B9A80D04-E43F-43E3-9CA5-21137F7C673D, OS:10.3.1, name:iPhone 7 }<font></font>
    { platform:iOS Simulator, id:58F6514E-185B-4B12-9336-B8A1D4E901F8, OS:10.3.1, name:iPhone 7 Plus }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>Installing build/Build/Products/Debug-iphonesimulator/myapp.app<font></font>
An error was encountered processing the command (domain=NSPOSIXErrorDomain, code=2):<font></font>
Failed to install the requested application<font></font>
An application bundle was not found at the provided path.<font></font>
Provide a valid path to the desired application bundle.<font></font>
Print: Entry, ":CFBundleIdentifier", Does Not Exist<font></font>
<font></font>
Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/myapp.app/Info.plist<font></font>
Print: Entry, ":CFBundleIdentifier", Does Not Exist<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了摆脱这些，打开您的Xcode并检查可用的模拟器（与列出的终端相同）并运行 </font></font><code>react-native run-ios --simulator="your device name"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我运行</font></font><code>react-native run-ios --simulator="iPhone 7"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，问题解决了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将Xcode更新为v8，此错误已解决。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">橙ぺo痕</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照以下步骤解决此错误：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1</font></font></strong></p>

<pre><code>Open terminal
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步</font></font></strong></p>

<pre><code>cd node_modules/react-native/third-party
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步</font></font></strong></p>

<pre><code>ls<font></font>
<font></font>
Copy or identify glog-{version}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤4</font></font></strong></p>

<pre><code>cd ../../../
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第5步</font></font></strong></p>

<pre><code>cd node_modules/react-native/third-party/glog-{version}
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第6步</font></font></strong></p>

<pre><code>./configure
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这会工作！</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我从git中提取项目，它还包含ios文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我删除ios文件夹，</font></font><code>rm -rf ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后，</font></font><code>react-native upgrade</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试了所有这些解决方案，但是对我有用的是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>react-native upgrade</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开xcode</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在xCode中运行应用程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作良好！</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否检查过声明了捆绑包标识符？</font><font style="vertical-align: inherit;">您可以通过以下方式执行此操作：单击xcode中的项目文件，然后选择常规选项卡，该选项卡将在“身份”下的第一个文本框下列出。</font><font style="vertical-align: inherit;">另一种检查方法是在项目的ios文件夹中检入info.plist文件。</font><font style="vertical-align: inherit;">这就是它在我的info.plist中显示的方式。</font><font style="vertical-align: inherit;">我项目的实际捆绑包标识符在xcode中。</font></font></p>

<pre><code>&lt;key&gt;CFBundleIdentifier&lt;/key&gt;<font></font>
&lt;string&gt;$(PRODUCT_BUNDLE_IDENTIFIER)&lt;/string&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，使用Cocoapods和意外地设置模块是一个问题</font></font><code>react-native link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要将这两个模块混合使用！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过删除</font></font><code>/build/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>react-native run-ios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新</font><font style="vertical-align: inherit;">运行来</font><font style="vertical-align: inherit;">解决此问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC40059608</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装新软件包后，我的node_modules文件夹出现问题时，我发生了这种情况。</font><font style="vertical-align: inherit;">我杀死了该文件夹</font></font><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装了我的软件包，并对其进行了修复。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Print: Entry, ":CFBundleIdentifier", Does Not Exist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息仅表示您的项目无法编译或链接。</font><font style="vertical-align: inherit;">您需要返回到输出，以找到有关实际根本原因的提示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到问题，请查看完整的构建输出，而不仅仅是最后几行。</font><font style="vertical-align: inherit;">您可能需要在Xcode中打开项目，然后按⌘B进行构建。</font><font style="vertical-align: inherit;">Xcode中的生成错误应可帮助您找到失败的根本原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了这个问题，我找到了一种解决方法</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我所做的：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）确保文件目录中没有空格。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）cd </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目目录</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）运行命令</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native升级</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）转到本地ios文件夹并打开xcode项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5）转到文件&gt;项目设置&gt;高级...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6）选择自定义&gt;相对于工作区</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7）产品路径应为“构建/构建/产品”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8）中间体路径应为“ build / Build / Intermediates”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">9）现在尝试在终端</font><strong><font style="vertical-align: inherit;">react-native run-ios中</font></strong><font style="vertical-align: inherit;">运行命令</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这种解决方案能够帮助我们中的一些人面对这个问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新React使用</font></font><code>react-native upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我</font><font style="vertical-align: inherit;">有用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这将覆盖您的所有iOS配置，</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请谨慎使用</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Xcode中打开项目</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果Xcode&gt; 9 run命令</font></font><code>react-native upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这会覆盖您的所有iOS配置，</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请谨慎使用</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.转到文件-&gt;项目设置 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.单击高级按钮 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.选择“自定义”，然后在下拉菜单中选择“相对于工作区” </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.将“内部版本/产品”更改为“内部版本/产品/产品”</font></font></p>

<p><img src="https://i.stack.imgur.com/plC9C.jpg" alt="添加包裹"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5.点击完成，完成</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果缺少</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config.h</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，</font><font style="vertical-align: inherit;">可能会发生这种情况</font><font style="vertical-align: inherit;">，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于更新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config.h</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）关闭您的Xcode。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）打开终端，转到项目的根文件夹并执行以下操作：</font></font></p>

<pre><code>cd node_modules/react-native/third-party/glog-{X}.{X}.{X}/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）运行配置脚本：</font></font></p>

<pre><code>./configure
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）打开Xcode并尝试运行您的应用程序。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{X}：版本号glog</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Xcode 10，则可能是由于与最新的Xcode构建系统不兼容。</font><font style="vertical-align: inherit;">尝试切换到旧版构建系统。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开Xcode 10，“文件”&gt;“项目设置”&gt;“构建系统”&gt;将下拉列表切换到“旧版构建系统”。</font></font></p>

<p><a href="https://i.stack.imgur.com/1wHt2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/1wHt2.png" alt="屏幕截图"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题实际上是我的构建处于发布模式而不是调试模式。</font><font style="vertical-align: inherit;">结果，标识符指向了不存在的东西。</font><font style="vertical-align: inherit;">我更改了构建类型，并最终正常工作。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
