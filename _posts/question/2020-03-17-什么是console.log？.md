---
layout: question
title:  什么是console.log？
date:   2020-03-17T03:46:25.000Z
description: 有什么用console.log？请通过代码示例说明如何在JavaScript中使用它。...
img: 
author: 神无Jim小哥
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么用</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请通过代码示例说明如何在JavaScript中使用它。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1857篇《什么是console.log？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与jQuery无关。</font><font style="vertical-align: inherit;">该</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被引用到控制台对象的日志功能，它提供了信息记录到浏览器的控制台方法。</font><font style="vertical-align: inherit;">这些方法仅用于调试目的，不应依赖于向最终用户提供信息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Java脚本中，没有输入和输出功能。</font><font style="vertical-align: inherit;">因此要调试代码，使用console.log（）方法，这是一种记录方法。</font><font style="vertical-align: inherit;">它将打印在控制台日志（开发工具）下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您打开IE开发工具之前，它不会出现在IE8中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了上述用法外，</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以打印到终端</font></font><code>node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">用express创建的服务器（例如）可以</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来写入输出记录器文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamSam老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它用于登录（您传递的所有内容）到</font></font><a href="http://en.wikipedia.org/wiki/Firebug_%28software%29" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台。</font><font style="vertical-align: inherit;">主要用途是调试JavaScript代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁ProJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特别是开发人员编写代码的一种方法，可以不显眼地告知开发人员代码在做什么。</font><font style="vertical-align: inherit;">它可以用来提醒您存在问题，但是在进行代码调试时，不应代替交互式调试器。</font><font style="vertical-align: inherit;">它的异步特性意味着</font></font><a href="https://stackoverflow.com/questions/8395718"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记录的值</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不一定代表调用该方法时的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之：使用</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果可用）</font><font style="vertical-align: inherit;">记录错误</font><font style="vertical-align: inherit;">，然后使用选择的调试器修复错误：</font></font><a href="http://getfirebug.com/wiki/index.php/FAQ" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，WebKit开发人员工具（</font></font><a href="http://developer.apple.com/library/safari/documentation/appleapplications/Conceptual/Safari_Developer_Guide/DebuggingYourWebsite/DebuggingYourWebsite.html#//apple_ref/doc/uid/TP40007874-CH8-SW1" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://code.google.com/chrome/devtools/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置</font><font style="vertical-align: inherit;">），IE开发人员工具或Visual Studio。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan飞云Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果浏览器支持调试，则可以使用console.log（）方法显示JavaScript值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用激活浏览器</font></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的调试，然后在调试器菜单中选择“控制台”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的控制台。</font><font style="vertical-align: inherit;">尝试修复或“调试”无法运行的JavaScript程序，并使用console.log（）命令进行练习。</font><font style="vertical-align: inherit;">根据您使用的浏览器，有一些快捷方式可以帮助您访问JavaScript控制台：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome控制台键盘快捷键</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows：</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>J</kbd><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  Mac：</font></font><kbd>Cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>J</kbd></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox控制台键盘快捷键</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows：</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>K</kbd><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 Mac：</font></font><kbd>Cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>K</kbd></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer控制台键盘快捷键</font></font></p>

<p><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 键</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari控制台键盘快捷键</font></font></p>

<p><kbd>Cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>C</kbd></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我开始</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试</font><font style="vertical-align: inherit;">时，我真的觉得Web编程很容易</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var i;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想检查</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时的</font><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">..</font></font></p>

<pre><code>console.log(i);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在firebug的控制台标签中</font><font style="vertical-align: inherit;">检查的当前值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它专门用于调试。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">早期，JS调试是通过</font></font><code>alert()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">执行的</font><font style="vertical-align: inherit;">-现在已经过时了。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能是编写一条消息以登录调试控制台，例如   </font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或Firebug。</font><font style="vertical-align: inherit;">在浏览器中，您将不会在屏幕上看到任何内容。</font><font style="vertical-align: inherit;">它将消息记录到调试控制台。</font><font style="vertical-align: inherit;">仅在具有Firebug的Firefox和基于Webkit的浏览器（Chrome和Safari）中可用。</font></font><a href="https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它并非在所有IE版本中都能正常工作</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台对象是DOM的扩展。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应在代码只开发和调试过程中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将代码留在生产服务器上的javascript文件</font><font style="vertical-align: inherit;">被视为不良做法</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长十三小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个示例-假设您想知道能够运行程序的哪一行代码（在程序崩溃之前！），只需键入</font></font></p>

<pre><code>console.log("You made it to line 26. But then something went very, very wrong.")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当心：在生产代码中留下对控制台的调用将导致您的站点在Internet Explorer中中断。</font><font style="vertical-align: inherit;">切勿将其打开。</font><font style="vertical-align: inherit;">参见：</font><a href="https://web.archive.org/web/20150908041020/blog.patspam.com/2009/the-curse-of-consolelog" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://web.archive.org/web/20150908041020/blog.patspam.com/2009/the-curse-of-consolelog" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//web.archive.org/web/20150908041020/blog.patspam.com/2009/the-curse-of-consolelog</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加调试信息到你的页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人</font></font><code>alert(hasNinjas)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此目的而</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，但是</font></font><code>console.log(hasNinjas)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更易于使用。</font><font style="vertical-align: inherit;">使用警报弹出窗口会弹出阻止用户界面的模式对话框。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我同意</font></font><a href="https://stackoverflow.com/users/541796/baptiste-pernet"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Baptiste </font></font></a><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/users/185527/jan-hancic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pernet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="https://stackoverflow.com/users/185527/jan-hancic"><font style="vertical-align: inherit;">JanHančič的观点</font></a><font style="vertical-align: inherit;">，这是一个非常好的主意，首先检查是否</font></font><code>window.console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已定义，以便在没有可用控制台的情况下不会破坏您的代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 与jQuery无关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将消息记录到调试控制台，例如Firebug。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用它通过</font><font style="vertical-align: inherit;">Firefox的</font></font><a href="http://en.wikipedia.org/wiki/Firebug_%28software%29" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器中的</font><font style="vertical-align: inherit;">JavaScript控制台</font><font style="vertical-align: inherit;">来调试JavaScript代码</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var variable;<font></font>
<font></font>
console.log(variable);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将显示变量的内容，即使它是数组或对象也是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个类似</font></font><code>print_r($var);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="http://en.wikipedia.org/wiki/PHP" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与jQuery无关，如果您想使用它，我建议您这样做</font></font></p>

<pre><code>if (window.console) {<font></font>
    console.log("your message")<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当代码不可用时，您不会破坏代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如评论中所建议，您也可以在一处执行该命令，然后</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按常规</font><font style="vertical-align: inherit;">使用</font></font></p>

<pre><code>if (!window.console) { window.console = { log: function(){} }; }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将日志消息发布到浏览器的JavaScript控制台，例如Firebug或开发人员工具（Chrome / Safari），并显示执行该脚本的行和文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，当您输出jQuery Object时，它将在DOM中包含对该元素的引用，然后单击它将在Elements / HTML选项卡中转到该元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用多种方法，但是请注意，要使其在Firefox中运行，必须打开Firebug，否则整个页面将崩溃。</font><font style="vertical-align: inherit;">无论您要记录的是变量，数组，对象还是DOM元素，它都将为您提供完整的细分，包括对象的原型（总是很有趣）。</font><font style="vertical-align: inherit;">您还可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font><font style="vertical-align: inherit;">包含任意数量的</font><font style="vertical-align: inherit;">参数，它们将被空格替换。</font></font></p>

<pre><code>console.log(  myvar, "Logged!");<font></font>
console.info( myvar, "Logged!");<font></font>
console.warn( myvar, "Logged!");<font></font>
console.debug(myvar, "Logged!");<font></font>
console.error(myvar, "Logged!");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些显示每个命令带有不同的徽标。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font></font><code>console.profile(profileName);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来开始对功能，脚本等进行配置分析，然后以结尾</font></font><code>console.profileEnd(profileName);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将显示在Chrome的“个人资料”标签中（对于FF不知道）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关完整参考，请访问</font></font><a href="http://getfirebug.com/logging" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://getfirebug.com/logging </font></font></a> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我建议您阅读它。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（跟踪，分组，配置文件，对象检查）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与jQuery无关。</font><font style="vertical-align: inherit;">它是调试器（包括Chrome调试器和Firebug）提供的常见对象/方法，允许脚本将数据（或大多数情况下的对象）记录到JavaScript控制台。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
