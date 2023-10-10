---
layout: question
title:  运行create-react-app构建脚本时如何设置build .env变量？
date:   2020-03-23T14:01:32.000Z
description: 我在我的create-react-app中使用以下环境变量：console.log(process.env.REACT_APP_API_URL) //...
img: 
author: Itachi猿
category: question
answer: 2
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在我的create-react-app中使用以下环境变量：</font></font></p>

<pre><code>console.log(process.env.REACT_APP_API_URL) // http://localhost:5555
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过读取</font></font><code>.env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">运行时它起作用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>REACT_APP_API_URL=http://localhost:5555
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何像</font></font><code>http://localhost:1234</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行a </font><font style="vertical-align: inherit;">一样设置其他值</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>{<font></font>
  "name": "webapp",<font></font>
  "version": "0.1.0",<font></font>
  "private": true,<font></font>
  "devDependencies": {<font></font>
    "react-scripts": "0.9.0"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "react": "^15.4.2",<font></font>
    "react-dom": "^15.4.2"<font></font>
  },<font></font>
  "scripts": {<font></font>
    "start": "react-scripts start",<font></font>
    "build": "react-scripts build",<font></font>
    "test": "react-scripts test --env=jsdom",<font></font>
    "eject": "react-scripts eject"<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想您现在可以正常工作了，但是对于其他发现此问题的人，您可以在</font></font><code>.env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ create-react-app”项目根目录下</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">设置默认环境变量</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要分离使用时使用的变量</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以再创建两个环境文件- </font></font><code>.env.development</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.env.production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将设置</font></font><code>REACT_APP_NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>development</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此它将自动使用该</font></font><code>.env.development</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，并</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>REACT_APP_NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此它将自动使用</font></font><code>.env.production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这些中设置的值将覆盖您的中的值</font></font><code>.env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你与其他人一起工作，并有特定的值到你的机器而已，你可以在覆盖原有的数值</font></font><code>.env.development</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.env.production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-通过将这些值到一个新的文件</font></font><code>.env.development.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>.env.production.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别。  </font></font></p>

<p><strong>EDIT:</strong> I should point out that the environment variables you have set must start with "REACT_APP_", eg. "REACT_APP_MY_ENV_VALUE".</p>

<p><strong>EDIT 2:</strong> if you need more than just development, and production, use <a href="https://github.com/toddbluhm/env-cmd" rel="noreferrer">env-cmd</a>, as specified by <a href="https://github.com/facebook/create-react-app/issues/3903#issuecomment-365096630" rel="noreferrer">this comment</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想使用单独的dotenv文件来构建和/或部署到单独的环境（阶段，产品），则可以使用</font></font><a href="https://github.com/toddbluhm/env-cmd" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">env-cmd，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm install --save-dev env-cmd<font></font>
./node_modules/.bin/env-cmd -f ./stage.env npm build<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只需相应地更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "start": "react-scripts start",<font></font>
    "build": "react-scripts build",<font></font>
    "test": "react-scripts test",<font></font>
    "eject": "react-scripts eject",<font></font>
    "build:stage": "env-cmd -f ./.stage.env npm run-script build"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后要构建，只需运行以下shell命令：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm run build:stage
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
