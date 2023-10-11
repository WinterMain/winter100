---
layout: question
title:  如何使用Visual Studio Code在浏览器中查看HTML代码？
date:   2020-04-03T04:10:20.000Z
description: 如何使用新的Microsoft Visual Studio代码在浏览器中查看HTML代码？使用Notepad ++，您可以选择在浏览器中运行。如何使用...
img: 
author: 梅
category: question
answer: 20
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用新的Microsoft Visual Studio代码在浏览器中查看HTML代码？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Notepad ++，您可以选择在浏览器中运行。</font><font style="vertical-align: inherit;">如何使用Visual Studio Code做同样的事情？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4005篇《如何使用Visual Studio Code在浏览器中查看HTML代码？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用提示中的URL打开自定义Chrome</font></font></h3>

<pre><code>{<font></font>
  "version": "2.0.0",<font></font>
  "tasks": [<font></font>
    {<font></font>
      "label": "Open Chrome",<font></font>
      "type": "process",<font></font>
      "windows": {<font></font>
        "command": "${config:chrome.executable}"<font></font>
      },<font></font>
      "args": ["--user-data-dir=${config:chrome.profileDir}", "${input:url}"],<font></font>
      "problemMatcher": []<font></font>
    }<font></font>
  ],<font></font>
  "inputs": [<font></font>
    {<font></font>
      "id": "url",<font></font>
      "description": "Which URL?",<font></font>
      "default": "http://localhost:8080",<font></font>
      "type": "promptString"<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用活动文件打开自定义Chrome</font></font></h3>

<pre><code>{<font></font>
  "label": "Open active file in Chrome",<font></font>
  "type": "process",<font></font>
  "command": "chrome.exe",<font></font>
  "windows": {<font></font>
    "command": "${config:chrome.executable}"<font></font>
  },<font></font>
  "args": ["--user-data-dir=${config:chrome.profileDir}", "${file}"],<font></font>
  "problemMatcher": []<font></font>
},<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">笔记</font></font></h3>

<ul>
<li>if necessary, replace <code>windows</code> property by other OS</li>
<li>replace <code>${config:chrome.executable}</code> with your custom chrome location, e.g. <code>"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"</code></li>
<li>replace <code>${config:chrome.profileDir}</code> with your custome chrome profile directory, e.g.
<code>"C:/My/Data/chrome/profile"</code> or leave it out</li>
<li>You can keep the variables like above if you want. To do so, add following entries in <code>settings.json</code> - user or workspace - , adjust paths to your needs:</li>
</ul>

<pre><code>"chrome.executable": "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",<font></font>
"chrome.profileDir": "C:/My/Data/chrome/profile"<font></font>
</code></pre>

<ul>
<li>You could re-use these variables e.g. in <code>launch.json</code> for debugging purposes: <code>"runtimeExecutable": "${config:chrome.executable}"</code></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Mac OSx的2.0.0版本：</font></font></p>

<pre><code>{<font></font>
  // See https://go.microsoft.com/fwlink/?LinkId=733558<font></font>
  // for the documentation about the tasks.json format<font></font>
  "version": "2.0.0",<font></font>
  "tasks": [<font></font>
    {<font></font>
      "label": "echo",<font></font>
      "type": "shell",<font></font>
      "command": "echo Hello"<font></font>
    },<font></font>
    {<font></font>
      "label":"chrome",<font></font>
      "type":"process",<font></font>
      "command":"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",<font></font>
      "args": [<font></font>
        "${file}"<font></font>
      ]<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许大多数人都可以从上述答案中找到解决方案，但是看到没有一个解决方案对我有用（</font></font><code>vscode v1.34</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），我想我会分享自己的经验。</font><font style="vertical-align: inherit;">如果至少有人觉得有帮助，那么冷静一点，不要浪费</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">篇幅</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><em><font style="vertical-align: inherit;">amiirte</font></em><font style="vertical-align: inherit;">吗？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我的解决方案（</font></font><code>windows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）构建在@noontz的顶部。</font><font style="vertical-align: inherit;">他的配置可能已经足够用于较旧的版本，</font></font><code>vscode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不能满足要求</font></font><code>1.34</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（至少，我无法使其工作..）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的配置</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同，只保存一个属性-该属性即</font></font><code>group</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">我不知道为什么，但是如果没有这个，我的任务甚至不会出现在命令面板中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以。</font><font style="vertical-align: inherit;">工作</font></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>windows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行用户</font></font><code>vscode 1.34</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
    "version": "2.0.0",<font></font>
    "tasks": [<font></font>
        {<font></font>
            "label": "Chrome",<font></font>
            "type": "process",<font></font>
            "command": "chrome.exe",<font></font>
            "windows": {<font></font>
                "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"<font></font>
            },<font></font>
            "args": [<font></font>
                "${file}"<font></font>
            ],<font></font>
            "group": "build",<font></font>
            "problemMatcher": []<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此</font></font><code>problemMatcher</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性不需要此属性即可工作，但是如果没有</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性，则会对您施加额外的手动步骤。</font><font style="vertical-align: inherit;">试图阅读有关此属性的文档，但是我太厚了，无法理解。</font><font style="vertical-align: inherit;">希望有人来找我，但对，谢谢。</font><font style="vertical-align: inherit;">我所知道的是-包括此属性，并</font><font style="vertical-align: inherit;">在新</font><font style="vertical-align: inherit;">标签页中轻松</font></font><code>ctrl+shift+b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开当前</font></font><code>html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font><code>chrome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ctrl + F1将打开默认浏览器。</font><font style="vertical-align: inherit;">或者，您可以按Ctrl + shift + P打开命令窗口，然后选择“在浏览器中查看”。</font><font style="vertical-align: inherit;">html代码必须保存在文件中（编辑器上未保存的代码-无扩展名，不起作用）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的跑步者脚本看起来像： </font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
<font></font>
    "command": "explorer",<font></font>
<font></font>
    "windows": {<font></font>
        "command": "explorer.exe"<font></font>
    },<font></font>
<font></font>
    "args": ["{$file}"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在index.html文件中按ctrl shift b时，它只是打开我的资源管理器</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是如何在Windows的多个浏览器中运行它的方法 </font></font></p>

<pre><code>{<font></font>
 "version": "0.1.0",<font></font>
 "command": "cmd",<font></font>
 "args": ["/C"],<font></font>
 "isShellCommand": true,<font></font>
 "showOutput": "always",<font></font>
 "suppressTaskName": true,<font></font>
 "tasks": [<font></font>
     {   <font></font>
         "taskName": "Chrome",<font></font>
         "args": ["start chrome -incognito \"${file}\""]<font></font>
     },<font></font>
     {   <font></font>
         "taskName": "Firefox",<font></font>
         "args": ["start firefox -private-window \"${file}\""]<font></font>
     },<font></font>
     {   <font></font>
         "taskName": "Edge",<font></font>
         "args": ["${file}"]<font></font>
     }   <font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意，我没有在args中为edge输入任何内容，因为Edge是我的默认浏览器，只是为其指定了文件名。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：而且您不需要-incognito或-private-window ...这只是我，我想在一个私人窗口中查看它</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，在</font><a href="http://www.lynda.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;">www.lynda.com</font></a><font style="vertical-align: inherit;">上的Visual Studio代码教程之一中遇到了此功能。</font></font><a href="http://www.lynda.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按Ctrl + K，然后按M，它将打开“选择语言模式”（或单击在笑脸之前显示HTML的右下角），键入markdown并按Enter</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，按Ctrl + K，再按V，它将在“附近”选项卡中打开您的html。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tadaaa !!!</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在emmet命令在我的html文件中无法在此模式下工作，所以我回到了原始状态（请注意-html标签tellisense运行良好）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要恢复到原始状态-按Ctrl + K，然后按M，选择自动检测。</font><font style="vertical-align: inherit;">emmet命令开始起作用。</font><font style="vertical-align: inherit;">如果您对仅使用html的查看器感到满意，则无需回到原始状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想知道为什么vscode能够以降价模式显示html文件时，默认情况下为什么没有HTML查看器选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总之很酷。</font><font style="vertical-align: inherit;">开心的vscoding :)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy樱</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><code>CTRL+SHIFT+P</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将调出命令面板。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
当然，这取决于您的运行情况。</font><font style="vertical-align: inherit;">您可以在ASP.net应用程序中输入以下示例：</font></font><br>
<code>&gt;kestrel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后打开Web浏览器并输入</font></font><code>localhost:(your port here)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果输入，</font></font><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将显示</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示并运行命令</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者对于您的HTML，</font></font><code>F5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在打开命令面板后</font><font style="vertical-align: inherit;">，我</font><font style="vertical-align: inherit;">应该打开调试器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://youtu.be/lEI9mxYpcS8" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Opera浏览器中打开文件（在Windows 64位上）。</font><font style="vertical-align: inherit;">只需添加以下行：</font></font></p>

<pre><code>{<font></font>
"version": "0.1.0",<font></font>
"command": "opera",<font></font>
"windows": {<font></font>
    "command": "///Program Files (x86)/Opera/launcher.exe"<font></font>
},<font></font>
"args": ["${file}"] }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“命令”：</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行</font><font style="vertical-align: inherit;">上的路径格式</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不要使用“ C：\ path_to_exe \ runme.exe”格式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要运行此任务，请打开要查看的html文件，按F1，键入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Task Opera</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后按Enter。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Mac-在Chrome中打开-在VS Code v 1.9.0上测试</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><kbd>Command</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>p</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开命令面板。</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/UZKLc.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/UZKLc.png" alt="在此处输入图片说明"></a></p>

<ol start="2">
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入“配置任务运行程序”，这是您首次执行此操作时，如果VS Code选择了“其他”，则会显示向下滚动菜单。</font><font style="vertical-align: inherit;">如果您以前这样做过，VS Code只会将您直接发送到task.json。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入task.json文件。</font><font style="vertical-align: inherit;">删除显示的脚本并将其替换为以下内容：</font></font></p></li>
</ol>

<blockquote>
<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "Chrome",<font></font>
    "osx": {<font></font>
        "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"<font></font>
    },<font></font>
    "args": ["${file}"]<font></font>
}<font></font>
</code></pre>
</blockquote>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换回您的html文件，然后按</font></font><kbd>Command</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>b</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome中查看您的页面。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无猿村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一键式解决方案只需安装</font><font style="vertical-align: inherit;">Visual Studio市场</font></font><a href="https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的浏览器内</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是在Mac上，请使用以下</font></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "open",<font></font>
    "args": ["${file}"],<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...就是在Safari中打开当前文件所需要的，假设其扩展名为“ .html”。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所述</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">并使用</font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font><font style="vertical-align: inherit;">调用它</font></font><kbd>b</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在Chrome中打开它，请执行以下操作：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "open",<font></font>
    "args": ["-a", "Chrome.app", "${file}"],<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将执行您想要的操作，例如，如果该应用程序已经打开，则在新标签页中打开。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1步：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开Visual Studio代码，然后转到扩展。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索“在浏览器中打开”。
</font></font><a href="https://i.stack.imgur.com/MxEga.png" rel="noreferrer"><img src="https://i.stack.imgur.com/MxEga.png" alt="在此处输入图片说明"></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.安装。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.右键单击您的html文件，您将找到“在浏览器中打开”选项。
</font></font><a href="https://i.stack.imgur.com/jhNBM.png" rel="noreferrer"><img src="https://i.stack.imgur.com/jhNBM.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就这样................................................ ......</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p>I am just re-posting the steps I used from <code>msdn</code> blog. It may help the community.</p>

<p>This will help you to 
setup a local web server known as <a href="https://github.com/johnpapa/lite-server" rel="noreferrer">lite-server</a> with <code>VS Code</code>, and also guides you to host your static <code>html</code> files in <code>localhost</code> and <code>debug</code> your <code>Javascript</code> code.</p>

<p><strong>1. Install Node.js</strong></p>

<p>If not already installed, get it <a href="https://docs.npmjs.com/getting-started/installing-node" rel="noreferrer">here</a></p>

<p>It comes with npm (the package manager for acquiring and managing your development libraries)</p>

<p><strong>2. Create a new folder for your project</strong></p>

<p>Somewhere in your drive, create a new folder for your web app.</p>

<p><strong>3. Add a package.json file to the project folder</strong></p>

<p>Then copy/paste the following text:</p>

<pre><code>{<font></font>
   "name": "Demo",<font></font>
   "version": "1.0.0",<font></font>
   "description": "demo project.",<font></font>
   "scripts": {<font></font>
     "lite": "lite-server --port 10001",<font></font>
     "start": "npm run lite"<font></font>
   },<font></font>
   "author": "",<font></font>
   "license": "ISC",<font></font>
   "devDependencies": {<font></font>
     "lite-server": "^1.3.1"<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><strong>4. Install the web server</strong></p>

<p>In a terminal window (command prompt in Windows) opened on your project folder, run this command:</p>

<pre><code>npm install
</code></pre>

<p>This will install lite-server (defined in package.json), a static server that loads index.html in your default browser and auto refreshes it when application files change.</p>

<p><strong>5. Start the local web server!</strong></p>

<p>(Assuming you have an index.html file in your project folder).</p>

<p>In the same terminal window (command prompt in Windows) run this command:</p>

<pre><code>npm start
</code></pre>

<p>Wait a second and index.html is loaded and displayed in your default browser served by your local web server!</p>

<p>lite-server is watching your files and refreshes the page as soon as you make changes to any html, js or css files.</p>

<p>And if you have VS Code configured to auto save (menu File / Auto Save), you see changes in the browser as you type!</p>

<p><strong>Notes:</strong></p>

<ul>
<li>Do not close the command line prompt until you’re done coding in your
app for the day</li>
<li>It opens on <a href="http://localhost:10001" rel="noreferrer">http://localhost:10001</a> but you can change the port by
editing the package.json file.</li>
</ul>

<p>That’s it. Now before any coding session just type npm start and you are good to go!</p>

<p><em>Originally posted <a href="https://blogs.msdn.microsoft.com/cdndevs/2016/01/24/visual-studio-code-and-local-web-server/" rel="noreferrer">here</a> in <code>msdn</code> blog.
Credits goes to Author : <code>@Laurent Duveau</code></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是带键盘快捷键的Chrome当前文档的2.0.0版本：</font></font></p>

<p><code>tasks.json</code></p>

<pre><code>{<font></font>
    "version": "2.0.0",<font></font>
    "tasks": [<font></font>
        {<font></font>
            "label": "Chrome",<font></font>
            "type": "process",<font></font>
            "command": "chrome.exe",<font></font>
            "windows": {<font></font>
                "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"<font></font>
            },<font></font>
            "args": [<font></font>
                "${file}"<font></font>
            ],<font></font>
            "problemMatcher": []<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><code>keybindings.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：</font></font></p>

<pre><code>{<font></font>
    "key": "ctrl+g",<font></font>
    "command": "workbench.action.tasks.runTask",<font></font>
    "args": "Chrome"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在网络服务器上运行：</font></font></p>

<p><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在linux中，您可以使用以下</font></font><a href="https://askubuntu.com/questions/15354/how-to-open-file-with-default-application-from-command-line#15356"><code>xdg-open</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令通过默认浏览器打开文件：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "linux": {<font></font>
        "command": "xdg-open"<font></font>
    },<font></font>
    "isShellCommand": true,<font></font>
    "showOutput": "never",<font></font>
    "args": ["${file}"]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS Code具有</font></font><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Live Server Extension</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它支持从状态栏一键启动。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些功能：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一键启动状态栏</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实时重载</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持Chrome调试附件</font></font></li>
</ul>

<p><a href="https://i.stack.imgur.com/pOMJG.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/pOMJG.gif" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以安装扩展</font></font><a href="https://marketplace.visualstudio.com/items?itemName=qinjia.view-in-browser" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中查看</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在带有镀铬的Windows上进行了测试，并且可以正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vscode版本：1.10.2</font></font></p>

<p><a href="https://i.stack.imgur.com/2gTaO.png" rel="noreferrer"><img src="https://i.stack.imgur.com/2gTaO.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows-打开默认浏览器-在VS Code v 1.1.0上测试</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开特定文件（名称是硬编码）或打开其他任何文件的答案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚步：</font></font></strong></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>p</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><kbd>F1</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）打开命令面板。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font><code>Tasks: Configure Task</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版本或在旧版本上输入</font></font><code>Configure Task Runner</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">选择它将会打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">task.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">删除显示的脚本并将其替换为以下内容：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "explorer",    <font></font>
    "windows": {<font></font>
        "command": "explorer.exe"<font></font>
    },<font></font>
    "args": ["test.html"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，将task.json文件的“ args”部分更改为文件名。</font><font style="vertical-align: inherit;">当您按F5键时，这将始终打开该特定文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将此设置为使用</font></font><code>["${file}"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ args”的值</font><font style="vertical-align: inherit;">来打开您当时打开的任何文件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不在之外</font></font><code>{...}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此</font></font><code>["{$file}"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不正确的。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存文件。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换回html文件（在本示例中为“ text.html”），然后按</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>b</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Web浏览器中查看页面。</font></font></p></li>
</ol>

<p><img src="https://i.stack.imgur.com/ahjua.png" alt="在此处输入图片说明"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@InvisibleDev-要在Mac上尝试使用此功能，请执行以下操作：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "Chrome",<font></font>
    "osx": {<font></font>
        "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"<font></font>
    },<font></font>
    "args": [<font></font>
        "${file}"<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经打开chrome，它将在新标签页中启动html文件。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
