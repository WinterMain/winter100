---
layout: question
title:  在Chrome和vscode中调试nextjs应用
date:   2020-03-23T07:49:41.000Z
description: 我已将此片段插入launch.json文件中。它总是打开chrome，并停留在about：blank，然后v​​scode给出超时错误。我按照此处的步骤构...
img: 
author: 宝儿A梅
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已将此片段插入launch.json文件中。</font><font style="vertical-align: inherit;">它总是打开chrome，并停留在about：blank，然后v​​scode给出超时错误。</font><font style="vertical-align: inherit;">我按照此处的步骤构建了launch.json文件。 
</font></font><a href="https://github.com/Microsoft/vscode-recipes/tree/master/Next-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Microsoft/vscode-recipes/tree/master/Next-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并对其进行了修改，以针对chrome canary运行。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>{<font></font>
    "version": "0.2.0",<font></font>
    "configurations": [<font></font>
        {<font></font>
            "name": "Chrome Canary",<font></font>
            "type": "chrome",<font></font>
            "request": "launch",<font></font>
            "url": "http://localhost:3000/",<font></font>
            "runtimeExecutable": "C:/Users/myusername/AppData/Local/Google/Chrome SxS/Application/chrome.exe",<font></font>
            "webRoot": "${workspaceFolder}"<font></font>
        },<font></font>
        {<font></font>
            "type": "node",<font></font>
            "request": "launch",<font></font>
            "name": "Next: Node",<font></font>
            "runtimeExecutable": "next",<font></font>
            "runtimeArgs": [<font></font>
                "--inspect"<font></font>
            ],<font></font>
            "port": 9229,<font></font>
            "console": "integratedTerminal"<font></font>
        }<font></font>
    ],<font></font>
    "compounds": [<font></font>
        {<font></font>
            "name": "Next: Full",<font></font>
            "configurations": [<font></font>
                "Next: Node",<font></font>
                "Chrome Canary"<font></font>
            ]<font></font>
        }<font></font>
    ]<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2943篇《在Chrome和vscode中调试nextjs应用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>Debug Nextjs program without custom server, use the configuration: </p>

<pre><code>{<font></font>
  "type": "node",<font></font>
  "request": "launch",<font></font>
  "name": "Launch via NPM",<font></font>
  "runtimeExecutable": "${workspaceFolder}\\node_modules\\.bin\\next",<font></font>
  "port": 9229,<font></font>
  "env": {<font></font>
    "NODE_OPTIONS": "--inspect"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>Debug Nextjs program with custom server, use the configuration：</p>

<pre><code>{<font></font>
  "type": "node",<font></font>
  "request": "launch",<font></font>
  "name": "Next: Node",<font></font>
  "program": "${workspaceFolder}/server.js",<font></font>
  "runtimeArgs": [<font></font>
      "--inspect"<font></font>
  ],<font></font>
  "port": 9229,<font></font>
  "console": "integratedTerminal"<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
