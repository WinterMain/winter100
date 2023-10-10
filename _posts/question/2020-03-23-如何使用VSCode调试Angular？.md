---
layout: question
title:  如何使用VSCode调试Angular？
date:   2020-03-23T01:42:36.000Z
description: 如何配置Angular和VSCode，以便我的断点起作用？...
img: 
author: 梅
category: question
answer: 7
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何配置Angular和VSCode，以便我的断点起作用？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Asesjix答案非常彻底，但是正如某些人指出的那样，仍然需要多次交互才能启动</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后在Chrome中启动Angular应用程序。</font><font style="vertical-align: inherit;">我使用以下配置单击一下就可以使用此功能。</font><font style="vertical-align: inherit;">与@Asesjix答案的主要区别是任务类型现在</font></font><code>shell</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，命令调用</font></font><code>start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">已经</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">，</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以存在于自己的进程中，并且不会阻止调试器启动：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">task.json：</font></font></strong></p>

<pre><code>{<font></font>
    "version": "2.0.0",<font></font>
    "tasks": [<font></font>
      {<font></font>
        "label": "ng serve",<font></font>
        "type": "shell",<font></font>
        "command": "\"start ng serve\""<font></font>
      },<font></font>
      {<font></font>
        "label": "ng test",<font></font>
        "type": "shell",<font></font>
        "command": "\"start ng test\"",<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">launch.json：</font></font></strong></p>

<pre><code>{<font></font>
    "version": "0.2.0",<font></font>
    "configurations": [<font></font>
        {<font></font>
            "name": "Launch in Chrome",<font></font>
            "type": "chrome",<font></font>
            "request": "launch",<font></font>
            "url": "http://localhost:4200",<font></font>
            "webRoot": "${workspaceFolder}",<font></font>
            "preLaunchTask": "ng serve"<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Tony</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来VS Code团队现在正在存储调试配方。</font></font></p>

<p><a href="https://github.com/Microsoft/vscode-recipes/tree/master/Angular-CLI" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Microsoft/vscode-recipes/tree/master/Angular-CLI</font></font></a></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Launch Chrome with ng serve",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:4200",<font></font>
      "webRoot": "${workspaceRoot}"<font></font>
    },<font></font>
    {<font></font>
      "name": "Launch Chrome with ng test",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:9876/debug.html",<font></font>
      "webRoot": "${workspaceRoot}"<font></font>
    },<font></font>
    {<font></font>
      "name": "Launch ng e2e",<font></font>
      "type": "node",<font></font>
      "request": "launch",<font></font>
      "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",<font></font>
      "protocol": "inspector",<font></font>
      "args": ["${workspaceRoot}/protractor.conf.js"]<font></font>
    }      <font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种不同的方法。</font><font style="vertical-align: inherit;">您可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新流程或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其附加</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到现有</font><font style="vertical-align: inherit;">流程</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个过程的关键是要同时</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行webpack开发服务器和VSCode调试器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动一个过程</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>launch.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中添加以下配置：</font></font></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Angular debugging session",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:4200",<font></font>
      "webRoot": "${workspaceFolder}"<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行从Angular CLI运行Webpack开发服务器 </font></font><code>npm start</code></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到VSCode调试器并运行“ Angular调试会话”配置。</font><font style="vertical-align: inherit;">结果，将打开包含您的应用程序的新浏览器窗口。</font></font></li>
</ol>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加到现有流程</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，您需要在打开端口的调试器模式下运行Chrome（在我的情况下为</font></font><code>9222</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果电脑：</font></font></p>

<pre><code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗：</font></font></p>

<pre><code>chrome.exe --remote-debugging-port=9222
</code></pre></li>
<li><p><code>launch.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 文件将以以下方式显示：</font></font></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Chrome Attach",<font></font>
      "type": "chrome",<font></font>
      "request": "attach",<font></font>
      "port": 9222,<font></font>
      "url": "http://localhost:4200/",<font></font>
      "webRoot": "${workspaceFolder}"<font></font>
    } <font></font>
  ]<font></font>
}<font></font>
</code></pre></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行从Angular CLI运行Webpack开发服务器 </font></font><code>npm start</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择“ Chrome Attach”配置并运行它。 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，调试器将附加到现有的Chrome进程，而不是启动新窗口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了自己的文章，并在其中举例说明了这种方法。</font></font></p>

<p><a href="https://sergeome.com/blog/2018/07/01/configure-debugger-for-angular-in-vscode/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单说明如何在VSCode中为Angular配置调试器</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个更轻便的解决方案，可用于Angular 2+（我正在使用Angular 4）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您运行MEAN堆栈，还添加了Express Server的设置。</font></font></p>

<pre><code>{<font></font>
  // Use IntelliSense to learn about possible Node.js debug attributes.<font></font>
  // Hover to view descriptions of existing attributes.<font></font>
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Launch Angular Client",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:4200",<font></font>
      "runtimeArgs": [<font></font>
        "--user-data-dir",<font></font>
        "--remote-debugging-port=9222"<font></font>
        ],<font></font>
        "sourceMaps": true,<font></font>
        "trace": true,<font></font>
        "webRoot": "${workspaceRoot}/client/",<font></font>
        "userDataDir": "${workspaceRoot}/.vscode/chrome"<font></font>
    },<font></font>
    {<font></font>
      "type": "node",<font></font>
      "request": "launch",<font></font>
      "name": "Launch Express Server",<font></font>
      "program": "${workspaceRoot}/server/bin/www",<font></font>
      "outFiles": [<font></font>
        "${workspaceRoot}/out/**/*.js"<font></font>
      ]<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用此配置：</font></font></p>

<pre><code>{<font></font>
 "version": "0.2.0",<font></font>
"configurations": [<font></font>
{<font></font>
        "name": "ng serve",<font></font>
        "type": "chrome",<font></font>
        "request": "launch",<font></font>
        "preLaunchTask": "npm: start",<font></font>
        "url": "http://localhost:8080",<font></font>
        "webRoot": "${workspaceFolder}"<font></font>
      }<font></font>
]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Visual Studio Code网站上对此进行了详细说明：</font><a href="https://code.visualstudio.com/docs/nodejs/angular-tutorial" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://code.visualstudio.com/docs/nodejs/angular-tutorial" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.visualstudio.com/docs/nodejs/angular-tutorial</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过Angular 5 / CLI 1.5.5测试</font></font></h2>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome调试器扩展</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><a href="https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations" rel="noreferrer"><code>launch.json</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在.vscode文件夹中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用我的</font></font><code>launch.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（见下文）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><a href="https://code.visualstudio.com/docs/editor/tasks#_custom-tasks" rel="noreferrer"><code>tasks.json</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在.vscode文件夹中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用我的</font></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（见下文）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>SHIFT</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>B</kbd></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按 </font></font><kbd>F5</kbd></li>
</ol>

<p><code>launch.json for angular/cli &gt;= 1.3</code></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Launch Chrome",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:4200/#",<font></font>
      "webRoot": "${workspaceFolder}"<font></font>
    },<font></font>
    {<font></font>
      "name": "Attach Chrome",<font></font>
      "type": "chrome",<font></font>
      "request": "attach",<font></font>
      "url": "http://localhost:4200/#",<font></font>
      "webRoot": "${workspaceFolder}"<font></font>
    },<font></font>
    {<font></font>
      "name": "Launch Chrome (Test)",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:9876/debug.html",<font></font>
      "webRoot": "${workspaceFolder}"<font></font>
    },<font></font>
    {<font></font>
      "name": "Launch Chrome (E2E)",<font></font>
      "type": "node",<font></font>
      "request": "launch",<font></font>
      "program": "${workspaceFolder}/node_modules/protractor/bin/protractor",<font></font>
      "protocol": "inspector",<font></font>
      "args": ["${workspaceFolder}/protractor.conf.js"]<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><code>tasks.json for angular/cli &gt;= 1.3</code></p>

<pre><code>{<font></font>
    "version": "2.0.0",<font></font>
    "tasks": [<font></font>
      {<font></font>
        "identifier": "ng serve",<font></font>
        "type": "npm",<font></font>
        "script": "start",<font></font>
        "problemMatcher": [],<font></font>
        "group": {<font></font>
          "kind": "build",<font></font>
          "isDefault": true<font></font>
        }<font></font>
      },<font></font>
      {<font></font>
        "identifier": "ng test",<font></font>
        "type": "npm",<font></font>
        "script": "test",<font></font>
        "problemMatcher": [],<font></font>
        "group": {<font></font>
          "kind": "test",<font></font>
          "isDefault": true<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过Angular 2.4.8测试</font></font></h2>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome调试器扩展</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建 </font></font><a href="https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations" rel="noreferrer"><code>launch.json</code></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用我的</font></font><code>launch.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（见下文）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动NG Live开发服务器（</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按 </font></font><kbd>F5</kbd></li>
</ol>

<p><code>launch.json for angular/cli &gt;= 1.0.0-beta.32</code></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "name": "Launch Chrome",<font></font>
      "url": "http://localhost:4200",<font></font>
      "webRoot": "${workspaceFolder}",<font></font>
      "sourceMaps": true,<font></font>
      "userDataDir": "${workspaceFolder}/.vscode/chrome",<font></font>
      "runtimeArgs": [<font></font>
        "--disable-session-crashed-bubble"<font></font>
      ]<font></font>
    },<font></font>
    {<font></font>
      "name": "Attach Chrome",<font></font>
      "type": "chrome",<font></font>
      "request": "attach",<font></font>
      "url": "http://localhost:4200",<font></font>
      "port": 9222,<font></font>
      "webRoot": "${workspaceFolder}",<font></font>
      "sourceMaps": true<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><code>launch.json for angular/cli &lt; 1.0.0-beta.32</code></p>

<pre><code>{<font></font>
  "version": "0.2.0",<font></font>
  "configurations": [<font></font>
    {<font></font>
      "name": "Lunch Chrome",<font></font>
      "type": "chrome",<font></font>
      "request": "launch",<font></font>
      "url": "http://localhost:4200",<font></font>
      "webRoot": "${workspaceFolder}/src/app",<font></font>
      "sourceMaps": true,<font></font>
      "sourceMapPathOverrides": {<font></font>
        "webpack:///./~/*": "${workspaceFolder}/node_modules/*",<font></font>
        "webpack:///./src/*": "${workspaceFolder}/src/*"<font></font>
      },<font></font>
      "userDataDir": "${workspaceFolder}/.vscode/chrome",<font></font>
      "runtimeArgs": [<font></font>
        "--disable-session-crashed-bubble"<font></font>
      ]<font></font>
    },<font></font>
    {<font></font>
      "name": "Attach Chrome",<font></font>
      "type": "chrome",<font></font>
      "request": "attach",<font></font>
      "url": "http://localhost:4200",<font></font>
      "port": 9222,<font></font>
      "webRoot": "${workspaceFolder}/src/app",<font></font>
      "sourceMaps": true,<font></font>
      "sourceMapPathOverrides": {<font></font>
        "webpack:///./~/*": "${workspaceFolder}/node_modules/*",<font></font>
        "webpack:///./src/*": "${workspaceFolder}/src/*"<font></font>
      }<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
