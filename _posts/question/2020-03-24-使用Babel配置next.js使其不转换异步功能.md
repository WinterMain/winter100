---
layout: question
title:  使用Babel配置next.js使其不转换异步功能
date:   2020-03-24T07:51:29.000Z
description: 使用默认配置，下一步将指示Babel在客户端上将生成器用于我的异步函数。这使调试似乎看起来应该更具挑战性。如何禁用此行为？我使用的是Electron应...
img: 
author: EvaPro
category: question
answer: 0
tags: 异步等待 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用默认配置，下一步将指示Babel在客户端上将生成器用于我的异步函数。</font><font style="vertical-align: inherit;">这使调试似乎看起来应该更具挑战性。</font><font style="vertical-align: inherit;">如何禁用此行为？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是Electron应用程序，因此我确实希望进行最少的转换以匹配Chromium运行时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前的</font></font><code>"babel"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要内容</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  "babel": {<font></font>
    "presets": [<font></font>
      [<font></font>
        "next/babel",<font></font>
        {<font></font>
          "preset-env": {<font></font>
            "targets": {<font></font>
              "chromium": 73,<font></font>
              "node": 11<font></font>
            }<font></font>
          },<font></font>
          "transform-runtime": {<font></font>
            "regenerator": false<font></font>
          }<font></font>
        }<font></font>
      ]<font></font>
    ]<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是不包含再生器，但是它在Webpack生成的代码中崩溃。</font><font style="vertical-align: inherit;">如果取消对的禁用</font><font style="vertical-align: inherit;">，无论如何</font></font><code>regenerator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我可以看到资产仍在将</font></font><code>async</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数转换为生成器。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24676/images/thumbnails/1585036162616.png" data-src="https://www.samyoc.com//uploads/users/24676/images/1585036162616.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/RYsPk.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
