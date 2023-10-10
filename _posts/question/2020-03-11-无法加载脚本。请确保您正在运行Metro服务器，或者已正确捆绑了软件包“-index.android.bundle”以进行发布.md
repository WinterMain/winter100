---
layout: question
title:  无法加载脚本。请确保您正在运行Metro服务器，或者已正确捆绑了软件包“ index.android.bundle”以进行发布
date:   2020-03-11T09:58:17.000Z
description: react-native run-android通过在android模拟器中留下一条消息来终止命令。消息如下“无法加载脚本。请确保您正在运行Metro...
img: 
author: 米亚Near
category: question
answer: 30
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><code>react-native run-android</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在android模拟器中留下一条消息来终止命令。</font><font style="vertical-align: inherit;">消息如下</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“无法加载脚本。请确保您正在运行Metro服务器，或者已正确捆绑了软件包'index.android.bundle'以进行发布。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我完全困惑我做错了什么。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：添加错误屏幕截图</font></font></strong> </p>

<p><a href="https://www.samyoc.com//uploads/users/9694/images/thumbnails/1583920697379.png" data-src="https://www.samyoc.com//uploads/users/9694/images/1583920697379.png" rel="noreferrer"><img src="https://i.stack.imgur.com/vCZZs.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第789篇《无法加载脚本。请确保您正在运行Metro服务器，或者已正确捆绑了软件包“ index.android.bundle”以进行发布》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Metro黑名单中更新此部分</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您可能想关闭React-native捆绑程序的端口并使用相同的过程重新运行应用程序</font></font></p>

<pre><code>1.sudo kill -9 $(sudo lsof -t -i:9001)<font></font>
<font></font>
2.npm start inside the project<font></font>
<font></font>
3. react-native run-android<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的是：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭所有控制台</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开一个新的控制台</font></font></li>
<li><code>$ adb devices</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保只连接了一个设备</font></font></li>
<li><code>$ react-native run-android</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我已经在模拟器中设置了代理。</font><font style="vertical-align: inherit;">删除该代理后，它可以恢复正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模拟器上的错误消息有点令人误解。</font><font style="vertical-align: inherit;">就我而言，我使用的是Macbook。</font><font style="vertical-align: inherit;">我需要通过运行来更改android / gradlew的权限</font></font><code>$ chmod 755 ./gradlew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后才能构建该应用并将其部署到android模拟器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小小古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，名为“ Metro Server”的微型JavaScript服务器在端口8081上运行。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使此端口可用于此服务器启动。</font><font style="vertical-align: inherit;">所以，</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">释放端口</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭您的虚拟设备 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次点击“ react-native run-android”。 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何释放端口？ </font></font></p>

<p><a href="http://tenbull.blogspot.com/2019/05/how-to-kill-process-currently-using.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://tenbull.blogspot.com/2019/05/how-to-kill-process-currently-using.html</font></font></a></p>

<p><a href="https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用Windows上的localhost上的端口杀死当前进程？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的是，我按照facebook @ </font><a href="https://facebook.github.io/react-native/docs/getting-started" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://facebook.github.io/react-native/docs/getting-started的</font></a><font style="vertical-align: inherit;">建议将节点版本从8.x升级到10.x（最新）。</font></font><a href="https://facebook.github.io/react-native/docs/getting-started" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Linux OS上运行，则可能会导致npm远程服务器未运行。</font><font style="vertical-align: inherit;">打开另一个终端（带有项目目录）并</font><font style="vertical-align: inherit;">在执行</font><strong><font style="vertical-align: inherit;">sudo react-native run-android</font></strong><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">运行此命令</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo npm start</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo react-native start</font></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiStafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要信息-您的环境中可能有许多虚拟设备。</font><font style="vertical-align: inherit;">确保如果要更改AVD，请再次重复设置。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试信息-</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到上述错误，则必须首先验证端口8081上正在运行什么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找最快的方法是在终端中使用以下命令</font></font></p>

<pre><code>netstat -aon | findstr 8081
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果那向您显示某些信息，则表明该端口已被阻止。</font><font style="vertical-align: inherit;">如果可能，请将该端口畅通无阻。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您将需要更改端口。</font><font style="vertical-align: inherit;">Naveen Kumar在上面的评论中已经提到了这样做的过程</font></font></p>

<pre><code>react-native run-android --port=9001
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保也不使用9001 :)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Linux，请从App根目录打开终端并运行</font></font></p>

<pre><code>npm start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后打开另一个终端窗口并运行：</font></font></p>

<pre><code>reactive-native run-around
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这个问题始于升级本机。</font><font style="vertical-align: inherit;">升级是添加64位支持所必需的。</font></font></p>

<pre><code>Before:<font></font>
-------- <font></font>
Environment:<font></font>
Node: 10.15.0<font></font>
npm: 6.9.0<font></font>
Watchman: 4.9.0<font></font>
Xcode: Not Found<font></font>
Android Studio: 3.4 AI-183.6156.11.34.5692245<font></font>
<font></font>
Packages: (wanted =&gt; installed)<font></font>
react: 16.0.0-alpha.12 =&gt; 16.0.0-alpha.12<font></font>
react-native: ~0.55.2 =&gt; 0.55.4<font></font>
react-native-cli: 2.0.1<font></font>
<font></font>
After:<font></font>
------<font></font>
info <font></font>
React Native Environment Info:<font></font>
Binaries:<font></font>
Node: 10.15.0<font></font>
npm: 6.9.0<font></font>
Watchman: 4.9.0<font></font>
SDKs:<font></font>
Android SDK:<font></font>
API Levels: 23, 26, 27, 28<font></font>
Build Tools: 27.0.3, 28.0.3<font></font>
System Images: android-28 | Google APIs Intel x86 Atom<font></font>
IDEs:<font></font>
Android Studio: 3.4 AI-183.6156.11.34.5692245<font></font>
Xcode: /undefined - /usr/bin/xcodebuild<font></font>
npmPackages:<font></font>
react: ^16.8.6 =&gt; 16.9.0 <font></font>
react-native: 0.59.9 =&gt; 0.59.9 <font></font>
npmGlobalPackages:<font></font>
create-react-native-app: 2.0.2<font></font>
react-native-cli: 2.0.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我为升级所做的一项重要更改是在../android/build/build.gradle中</font></font></p>

<pre><code>android {<font></font>
    ...<font></font>
    defaultConfig {<font></font>
        ...<font></font>
        targetSdkVersion 28<font></font>
        ...<font></font>
    }<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试将build（.apk）上传到goole播放控制台时，在出现警告后，我不得不将targetSdkVersion从27更改为28。</font><font style="vertical-align: inherit;">我几乎没有意识到这是上述错误的根本原因。</font><font style="vertical-align: inherit;">立即使用@tom和@tinmarfrutos回答绝对有道理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过将android：usesCleartextTraffic =“ true”添加到我的android / app / src / debug / AndroidManifest.xml中解决了该问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误的可能性也是错误的路径，请检查一次 </font></font></p>

<pre><code> export ANDROID_HOME=/Users/microrentindia/Library/Android/sdk/<font></font>
 export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到这种情况是因为我的Wifi错误地在模拟器上关闭了。我重新打开它，并且开始工作正常。</font><font style="vertical-align: inherit;">希望对某人有帮助</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想添加一个在这里没有涉及的非显而易见的可能性。</font><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/react-native-community/react-native-netinfo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ react-native-community / netinfo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来检测网络更改，主要是网络状态。</font><font style="vertical-align: inherit;">要测试网络关闭状态，需要关闭（仿真器上的）WIFI开关。</font><font style="vertical-align: inherit;">这也有效地切断了仿真器和调试环境之间的桥梁。</font><font style="vertical-align: inherit;">测试后，我没有重新启用WIFI，因为我不在电脑旁，回来后立即忘记了它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人也可能会遇到这种情况，值得在采取任何其他严厉措施之前进行检查。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请尝试以下方法。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除Android和IOS文件夹</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行本机弹出</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行react-native run-android</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许在前面的步骤之后，您已经执行了npm start---reset-cache</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我工作，希望对您有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于我的解决方案如下：</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
]; <font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/qObqE.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/qObqE.png" alt="我的代码示例"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了这个问题。</font><font style="vertical-align: inherit;">我解决了以下步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">Environment Veritable中</font></strong><font style="vertical-align: inherit;">检查android sdk路径</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加
 </font></font><code>ANDROID_HOME = C:\Users\user_name\AppData\Local\Android\Sdk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统变量</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
和 
 </font></font><code>C:\Users\user_name\AppData\Local\Android\Sdk\platform-tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统变量</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的代码段中</font><strong><font style="vertical-align: inherit;">替换sharedBlacklist</font></strong><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules / metro-config / src / default / blacklist.js中</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行npx react-native run-android --port 9001</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快乐编码..！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的麻烦，对我来说，问题是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">adb</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不在正确的环境路径中，错误告诉您是地铁端口，而当您处于adb中时，端口将被杀死并重新启动。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加环境变量（ADB）</font></font></h2>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开放环境变量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从第二帧</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PATH变量中选择</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后单击下面的编辑选项</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击添加选项</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交sdk平台工具路径C：\ Users \ My User \ AppData \ Local \ Android \ Sdk \ platform-tools  </font></font></li>
</ol>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：或取决于adb.exe在计算机中的位置</font></font></p>
</blockquote>

<ol start="5">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存更改</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次运行android build</font></font></strong></p>

<pre class="lang-html prettyprint-override"><code>$ react-native run-android
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 
</font></font></p>

<pre><code>$ react-native start
</code></pre>

<p>
</p>

<pre><code>$ react-native run-android
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德神乐老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对此的解决方案如下：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动Metro服务器</font></font></strong></p>

<pre class="lang-sh prettyprint-override"><code>$ react-native start
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动Android</font></font></strong></p>

<pre class="lang-sh prettyprint-override"><code>$ react-native run-android
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果看到错误消息“端口8081已在使用中”，则可以终止该进程并重新运行 </font></font></p>

<pre class="lang-sh prettyprint-override"><code>$ react-native start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见   </font></font><a href="https://facebook.github.io/react-native/docs/troubleshooting#content" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native故障排除页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下班后寻找答案。</font><font style="vertical-align: inherit;">解决方案是将节点降级到版本12.4。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，我意识到该错误仅发生在版本本机0.60和节点版本12.6之间的错误中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Android 9.0（API级别28）开始，默认情况下禁用明文支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正确执行正常的运行命令，这就是您要解决的问题</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应性开始</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native运行Android</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样修改您的android清单文件。</font></font></p>

  

<pre><code>&lt;application<font></font>
    android:name=".MainApplication"<font></font>
    android:icon="@mipmap/ic_launcher"<font></font>
    android:usesCleartextTraffic="true" // add this line with TRUE Value.<font></font>
android:theme="@style/AppTheme"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试了几种方法后，</font><strong><font style="vertical-align: inherit;">这对我</font></strong><font style="vertical-align: inherit;">有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文件中 </font></font><code>node_modules\metro-config\src\defaults\blacklist.js</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换：</font></font></strong> </p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[/\\]react[/\\]dist[/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与：</font></font></strong> </p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正确配置了所有内容，请尝试以下操作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚行反向tcp：8081 tcp：8081</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么？</font><font style="vertical-align: inherit;">“当RN打包程序运行时，您的浏览器中将有一个活动的Web服务器，其访问位置为127.0.0.1:8081。正是通过此服务器为您的应用程序提供了JS捆绑包，并在您进行更改时对其进行了刷新。如果没有反向代理，您的电话将无法连接到该地址。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有学分</font></font><a href="https://www.reddit.com/r/reactnative/comments/5etpqw/what_do_you_call_what_adb_reverse_is_doing/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">归功于Swingline0
</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试解决我的工作空间中的问题后，我找到了解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误是因为Metro使用NPM和Node版本的某些组合存在问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有2种选择：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备选方案1：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试更新或降级npm和节点版本。</font></font></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代方法2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   转到此文件：</font></font><code>\node_modules\metro-config\src\defaults\blacklist.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更改此代码：</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[/\\]react[/\\]dist[/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更改为此：</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，如果您运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">，则</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要再次更改代码。</font></font></p>
</blockquote></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发生了类似的问题显然，Mcafee封锁了8081端口，这花了我几个小时才弄清楚</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试跑步 </font></font><code>react-native run-android --port=1234</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当应用程序在模拟器上显示错误时，进入开发设置（可通过单击crtl + M进行访问）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将“调试设备的服务器主机和端口”更改为“ localhost：1234”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭应用程序，然后从应用程序抽屉启动它</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有帮助！！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在其中添加三个启动器：node_modules \ metro-config \ src \ defaults \ blacklist.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换此部分：</font></font></p>

<pre><code>var sharedBlacklist = [<font></font>
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,<font></font>
  /website\/node_modules\/.*/,<font></font>
  /heapCapture\/bundle\.js/,<font></font>
  /.*\/__tests__\/.*/<font></font>
];<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先执行步骤4和5，即可运行您的项目。</font></font></strong> </p>

<p>If you do not get the result (with steps 4 and 5) do the following steps</p>

<p><strong>1-</strong> Try to downgrade your Node version (current version is <code>12.13.1</code>)</p>

<pre><code>  choco uninstall nodejs<font></font>
  choco install nodejs --version 12.8<font></font>
</code></pre>

<p><strong>2-</strong> Add the path of npm module (<code>C:\Users\your user name\AppData\Roaming\npm</code>) to system variables instead of user variables</p>

<p><strong>3-</strong> Install react native globally by using command</p>

<pre><code>  npm install -g react-native-cli
</code></pre>

<p><strong>4-</strong> Go to the root of your project directory and run the following command :</p>

<pre><code>  react-native start
</code></pre>

<p><strong>5-</strong> Open another terminal in the root of your project and run the following command :</p>

<pre><code>   react-native run-android 
</code></pre>

<p><strong>EDIT :</strong></p>

<p><strong>You are using Genymotion  ? If yes, do the following step :</strong> </p>

<p>After above step if you get the following error ?</p>

<pre><code>error Failed to launch emulator. Reason: No emulators found as an output of `emulator -list-avds`.
</code></pre>

<p>Open your genymotion and go to :</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">genymotion菜单</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- &gt;</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- &gt;</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ADB </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- &gt;</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   然后选择使用定制的Android SDK工具（点击浏览找到SDK的位置）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，再次运行您的项目..</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试以下方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的AndroidManifest.xml上添加此行</font></font></p>

<pre><code>&lt;application<font></font>
[...]<font></font>
android:usesCleartextTraffic="true"<font></font>
/&gt;<font></font>
[...]<font></font>
&lt;/application&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这个错误是由react-native的升级引起的</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Android 9.0（API级别28）开始，默认情况下禁用明文支持。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果签出升级差异，则需要创建调试清单 
</font></font><code>android/app/src/debug/AndroidManifest.xml</code></p>

<pre><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;<font></font>
&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"<font></font>
    xmlns:tools="http://schemas.android.com/tools"&gt;<font></font>
    &lt;uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/&gt;<font></font>
    &lt;application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" /&gt;<font></font>
&lt;/manifest&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到更多信息：</font><a href="https://stackoverflow.com/a/50834600/1713216"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/50834600/1713216"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/50834600/1713216</font></font></a></p>

<p><a href="https://react-native-community.github.io/upgrade-helper/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://react-native-community.github.io/upgrade-helper/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些步骤确实对我有帮助：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在android / app / src / main / assets中创建目录</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linux命令</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>mkdir android/app/src/main/assets</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>index.android.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在根目录中）</font><font style="vertical-align: inherit;">重命名</font><font style="vertical-align: inherit;">为</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许有一个</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，在这种情况下您不需要重命名</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后运行以下命令：</font></font></p>

<p><code>react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤3：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
建立APK：</font></font><code>react-native run-android</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请使用最新版本的index.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请享用 ：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您尚未启动捆绑器。</font><font style="vertical-align: inherit;">在之前</font><font style="vertical-align: inherit;">运行</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>react-native start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的根目录中</font></font><code>react-native run-android</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
