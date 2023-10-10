---
layout: question
title:  docker-compose：nodejs + mysql无法连接mysql
date:   2020-04-07T10:52:48.000Z
description: 我尝试对自己的节点应用程序进行dockerl化，但无法连接mysql容器。我的代码：  docker-compose.yml  version  ...
img: 
author: 乐
category: question
answer: 1
tags: mysql KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试对自己的节点应用程序进行dockerl化，但无法连接mysql容器。</font><font style="vertical-align: inherit;">我的代码：  </font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docker-compose.yml</font></font></h3>

<pre><code>  version: '3.2'<font></font>
  services:<font></font>
    node:<font></font>
      build: ./<font></font>
      ports:<font></font>
        - "8787:8787"<font></font>
      depends_on:<font></font>
        - db<font></font>
      networks:<font></font>
        - docker_xxx<font></font>
      environment:<font></font>
        - PORT=8787<font></font>
        - DATABASE_HOST=db<font></font>
        - DATABASE_PASSWORD=xxx<font></font>
        - EGG_SERVER_ENV=local<font></font>
        - NODE_ENV=development<font></font>
      # command: ["./wait-for-it.sh", "db:3306", "--", "npm run docker"]<font></font>
    db:<font></font>
      build: ./db<font></font>
      networks:<font></font>
        - docker_xxx<font></font>
      environment:<font></font>
        - MYSQL_ROOT_PASSWORD=xxx<font></font>
        - MYSQL_DATABASE=database<font></font>
        - MYSQL_USER=user<font></font>
        - MYSQL_PASSWORD=passwd<font></font>
<font></font>
  networks:<font></font>
    docker_xxx:<font></font>
      driver: bridge<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">./Dockerfile（用于nodejs）</font></font></h3>

<pre><code>  FROM node:8.9.4-alpine<font></font>
<font></font>
  RUN mkdir -p /usr/src/app<font></font>
<font></font>
  WORKDIR /usr/src/app<font></font>
<font></font>
  COPY package.json /usr/src/app/<font></font>
<font></font>
  RUN npm install --production<font></font>
<font></font>
  COPY . /usr/src/app<font></font>
  # COPY wait-for-it.sh /usr/src/app<font></font>
<font></font>
  EXPOSE 8787<font></font>
<font></font>
  CMD npm run docker<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">db / Dockerfile（对于mysql）</font></font></h3>

<pre><code>  FROM mysql:5.6<font></font>
<font></font>
  ADD honggang.sql /docker-entrypoint-initdb.d<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config / config.default.js</font></font></h3>

<pre><code> config.mysql = {<font></font>
    // mysql settings<font></font>
    client: {<font></font>
      // host<font></font>
      host: process.env.DATABASE_HOST || '127.0.0.1',<font></font>
      // port<font></font>
      port: '3306',<font></font>
      // username<font></font>
      user: 'root',<font></font>
      // password<font></font>
      password: 'xxx',<font></font>
      database: 'xxx',<font></font>
      charset: 'utf8',<font></font>
      dialectOptions: {<font></font>
        collate: 'utf8_general_ci',<font></font>
      },<font></font>
    },<font></font>
    app: true,<font></font>
    agent: false,<font></font>
  };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我跑步</font></font><code>docker-compose up -d</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只有</font></font><code>db</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑步。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行</font></font><code>docker logs hash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找错误，它显示以下信息：</font></font></p>

<pre><code>        2018-04-30 14:43:51,334 ERROR 54 nodejs.ECONNREFUSEDError: connect ECONNREFUSED 172.19.0.2:3306<font></font>
            at Object._errnoException (util.js:1022:11)<font></font>
            at _exceptionWithHostPort (util.js:1044:20)<font></font>
            at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1182:14)<font></font>
            --------------------<font></font>
            at Protocol._enqueue (/usr/src/app/node_modules/mysql/lib/protocol/Protocol.js:145:48)<font></font>
            at Protocol.handshake (/usr/src/app/node_modules/mysql/lib/protocol/Protocol.js:52:23)<font></font>
            at PoolConnection.connect (/usr/src/app/node_modules/mysql/lib/Connection.js:130:18)<font></font>
            at Pool.getConnection (/usr/src/app/node_modules/mysql/lib/Pool.js:48:16)<font></font>
            at /usr/src/app/node_modules/ali-rds/node_modules/pify/index.js:29:7<font></font>
            at new Promise (&lt;anonymous&gt;)<font></font>
            at Pool.&lt;anonymous&gt; (/usr/src/app/node_modules/ali-rds/node_modules/pify/index.js:12:10)<font></font>
            at Pool.ret [as getConnection] (/usr/src/app/node_modules/ali-rds/node_modules/pify/index.js:56:34)<font></font>
            at Pool.query (/usr/src/app/node_modules/mysql/lib/Pool.js:202:8)<font></font>
            at /usr/src/app/node_modules/ali-rds/node_modules/pify/index.js:29:7<font></font>
            sql: select now() as currentTime;<font></font>
        code: 'ECONNREFUSED'<font></font>
        errno: 'ECONNREFUSED'<font></font>
        syscall: 'connect'<font></font>
        address: '172.19.0.2'<font></font>
        port: 3306<font></font>
        fatal: true<font></font>
        name: 'ECONNREFUSEDError'<font></font>
        pid: 54<font></font>
        hostname: d9cd95667a5d<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我补充说</font></font><code>CMD ping db</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它回应了。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><code>wait-for-it.sh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（代码刚刚被注释掉），但是得到了错误信息：</font></font></p>

<pre><code>env: can't execute 'bash': No such file or directory
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村达蒙LEY</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我解决了</font></font><a href="https://github.com/ycjcl868/eggjs-mysql-docker" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ycjcl868/eggjs-mysql-docker</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几点：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
1. </font></font><code>apk add --no-cache bash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>wait-for-it.sh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等待MySQL服务器是确定</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2. </font></font><code>hostname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>0.0.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font><code>localhost</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/</font></font><code>127.0.0.1</code>  </p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
