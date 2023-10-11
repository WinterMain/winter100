---
layout: question
title:  tslint说不允许调用console.log-如何允许它？
date:   2020-03-12T12:12:10.000Z
description: 我刚开始使用带有typescript的create-react-app create-react-app my-app --scripts-versi...
img: 
author: 
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚开始使用带有typescript的create-react-app </font></font></p>

<pre><code>create-react-app my-app --scripts-version=react-scripts-ts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且默认的tslint.json配置不允许console.log（）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何（暂时）启用console.log？</font></font></strong>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此文档位于   </font></font><a href="https://palantir.github.io/tslint/rules/no-console/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://palantir.github.io/tslint/rules/no-console/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是他们没有说要把这行放在哪里：</font></font></p>

<pre><code>    "no-console": [true, "log", "error"]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我搜索并找到了</font></font><a href="https://palantir.github.io/tslint/usage/configuration/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tslint.json配置文件语法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此我尝试了以下操作：</font></font></p>

<pre><code>"rules": {<font></font>
    "no-console": [true, "warning"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试图获取只是警告的日志消息。</font><font style="vertical-align: inherit;">但这没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经注释掉了我拥有的少量console.log（）行，但希望将来能够做到这一点。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1299篇《tslint说不允许调用console.log-如何允许它？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖前端逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>  {<font></font>
    "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],<font></font>
    "linterOptions": {<font></font>
        "exclude": [<font></font>
            "config/**/*.js",<font></font>
            "node_modules/**/*.ts",<font></font>
            "coverage/lcov-report/*.js"<font></font>
        ]<font></font>
    },<font></font>
    "rules": {<font></font>
        "no-console": false<font></font>
    },<font></font>
    "jsRules": {<font></font>
        "no-console": false<font></font>
    }<font></font>
 }<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/ltn8M.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ltn8M.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>// tslint:disable-next-line:no-console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用，请尝试</font></font><code>// eslint:disable-next-line:no-console</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在typeScript版本3中，根据如下所示的关键规则更新tslint.json：</font></font></p>

<pre><code>"no-console": [<font></font>
    true,<font></font>
    "debug",<font></font>
    "time",<font></font>
    "timeEnd",<font></font>
    "trace"<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您只需指定不使用的debug，time，timeEnd，trace，如果在默认tslint中，“ info”在列表中，则将其删除。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档：</font><a href="https://eslint.org/docs/user-guide/getting-started#configuration" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://eslint.org/docs/user-guide/getting-started#configuration" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//eslint.org/docs/user-guide/getting-started#configuration</font></font></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“关闭”或0-关闭规则 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“警告”或1-将规则作为警告打开（不影响退出代码） </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“错误”或2-将规则作为错误打开（退出代码将为1）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，正确的设置是</font></font></p>

<pre><code>{<font></font>
  "rules": {<font></font>
    "no-console": false<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是定义无控制台规则（或与此相关的任何其他规则）的正确语法，但仅带有警告而非错误（显然将选项更改为所需的任何内容）</font></font></p>

<pre><code>"no-console": {<font></font>
    "severity": "warning",<font></font>
    "options": [<font></font>
        "log",<font></font>
        "error",<font></font>
        "debug",<font></font>
        "info",<font></font>
        "time",<font></font>
        "timeEnd",<font></font>
        "trace"<font></font>
    ]<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下内容添加到您的 </font></font><code>tslint.json</code></p>

<pre><code>{<font></font>
   "rules": {<font></font>
      "no-console": {<font></font>
         "severity": "warning",<font></font>
      } <font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>// tslint:disable-next-line:no-console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在通话前</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">一行，</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防止错误消息仅出现一次。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想完全禁用该规则，请将以下内容添加到您的文件中</font></font><code>tslint.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（最有可能在您的根文件夹中）：</font></font></p>

<pre><code>{<font></font>
    "rules": {<font></font>
        "no-console": false<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
