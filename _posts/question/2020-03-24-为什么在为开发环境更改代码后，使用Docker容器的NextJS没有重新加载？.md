---
layout: question
title:  为什么在为开发环境更改代码后，使用Docker容器的NextJS没有重新加载？
date:   2020-03-24T02:03:22.000Z
description: 我尝试使用Dockerfile在Docker容器上运行NextJS并通过docker-compose运行，在JS文件（例如index.js）中更改代码后，...
img: 
author: 泡芙小小
category: question
answer: 2
tags: 的node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用Dockerfile在Docker容器上运行NextJS并通过docker-compose运行，在JS文件（例如index.js）中更改代码后，未重新加载Next服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我尝试在不使用Docker的情况下在室外运行时（通过直接执行“ npm run dev”命令），Next服务器确实能够顺利重新加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试通过“ nodemon”命令（在容器内）运行服务器，但也没有成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dockerfile：</font></font></p>

<pre><code>FROM node:10.14.2-alpine<font></font>
COPY . /home/next_app<font></font>
WORKDIR /home/next_app<font></font>
RUN npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docker-compose.yml：</font></font></p>

<pre><code>version: "3.6"<font></font>
services:<font></font>
  self_nextjs:<font></font>
    container_name: self_nextjs<font></font>
    build:<font></font>
        context: ./app<font></font>
        dockerfile: Dockerfile<font></font>
    ports:<font></font>
        - 3000:3000<font></font>
    volumes:<font></font>
        - ./app:/home/next_app<font></font>
        - /home/next_app/node_modules<font></font>
    networks:<font></font>
        - zen_frontend<font></font>
    restart: always<font></font>
    command: npm run dev<font></font>
<font></font>
networks:<font></font>
  zen_frontend:<font></font>
      name: zen_frontend<font></font>
      driver: bridge<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何建议，将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3208篇《为什么在为开发环境更改代码后，使用Docker容器的NextJS没有重新加载？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 10上遇到了相同的问题。我遵循了该线程</font></font><a href="https://github.com/zeit/next.js/issues/6417" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/issues/6417中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些说明</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">基本上，您必须添加一个</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以轮询更改。</font><font style="vertical-align: inherit;">我不确定MacOS是否存在相同的问题。</font></font></p>

<pre><code>module.exports = {<font></font>
  webpackDevMiddleware: config =&gt; {<font></font>
    config.watchOptions = {<font></font>
      poll: 800,<font></font>
      aggregateTimeout: 300,<font></font>
    }<font></font>
    return config<font></font>
  },<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否通过公开webpack的默认热装端口进行了测试？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到您的 </font></font><code>Dockerfile</code></p>

<pre><code>...<font></font>
EXPOSE 49153<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更新您的 </font></font><code>docker-compose.yml</code></p>

<pre><code>version: "3.6"<font></font>
services:<font></font>
  self_nextjs:<font></font>
    container_name: self_nextjs<font></font>
    build:<font></font>
        context: ./app<font></font>
        dockerfile: Dockerfile<font></font>
    ports:<font></font>
        - 3000:3000<font></font>
        - 49153:49153<font></font>
    volumes:<font></font>
        - ./app:/home/next_app<font></font>
        - /home/next_app/node_modules<font></font>
    networks:<font></font>
        - zen_frontend<font></font>
    restart: always<font></font>
    command: npm run dev<font></font>
<font></font>
networks:<font></font>
  zen_frontend:<font></font>
      name: zen_frontend<font></font>
      driver: bridge<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望有帮助</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
