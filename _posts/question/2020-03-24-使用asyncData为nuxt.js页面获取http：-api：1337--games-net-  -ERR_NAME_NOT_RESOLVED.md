---
layout: question
title:  使用asyncData为nuxt.js页面获取http：// api：1337 / games net    ERR_NAME_NOT_RESOLVED
date:   2020-03-24T06:36:43.000Z
description: 我使用docker进行了一些复杂的设置。一切都按预期工作，除了我有这个奇怪的问题。访问索引页面或/ pages / _id页面我没有错误。但是，当我尝试打...
img: 
author: Mandy
category: question
answer: 0
tags: docker Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用docker进行了一些复杂的设置。</font><font style="vertical-align: inherit;">一切都按预期工作，除了我有这个奇怪的问题。</font><font style="vertical-align: inherit;">访问</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ pages / _id</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面我没有错误。</font><font style="vertical-align: inherit;">但是，当我尝试打开</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ other-page时，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它崩溃了。</font><font style="vertical-align: inherit;">所有人都使用相同的API网址。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ other-page</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时在控制台中发现错误</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GET </font></font><a href="http://api:1337/games" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// api：1337 / games</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> net :: ERR_NAME_NOT_RESOLVED</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道该怎么办，有什么建议吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></p>

<pre><code>  axios: {<font></font>
    baseURL: 'http://api:1337'<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docker-compose.yml</font></font></p>

<pre><code>version: '3'<font></font>
<font></font>
services:<font></font>
  api:<font></font>
    build: .<font></font>
    image: strapi/strapi<font></font>
    environment:<font></font>
      - APP_NAME=strapi-app<font></font>
      - DATABASE_CLIENT=mongo<font></font>
      - DATABASE_HOST=db<font></font>
      - DATABASE_PORT=27017<font></font>
      - DATABASE_NAME=strapi<font></font>
      - DATABASE_USERNAME=<font></font>
      - DATABASE_PASSWORD=<font></font>
      - DATABASE_SSL=false<font></font>
      - DATABASE_AUTHENTICATION_DATABASE=strapi<font></font>
      - HOST=api<font></font>
      - NODE_ENV=production<font></font>
    ports:<font></font>
      - 1337:1337<font></font>
    volumes:<font></font>
      - ./strapi-app:/usr/src/api/strapi-app<font></font>
      #- /usr/src/api/strapi-app/node_modules<font></font>
    depends_on:<font></font>
      - db<font></font>
    restart: always<font></font>
    links:<font></font>
      - db<font></font>
<font></font>
  nuxt:<font></font>
    # build: ./app/<font></font>
    image: "registry.gitlab.com/username/package:latest"<font></font>
    container_name: nuxt<font></font>
    restart: always<font></font>
    ports:<font></font>
      - "3000:3000"<font></font>
    links:<font></font>
      - api:api<font></font>
    command:<font></font>
      "npm run start"<font></font>
<font></font>
<font></font>
  nginx:<font></font>
    image: nginx:1.14.2<font></font>
    expose:<font></font>
      - 80<font></font>
    container_name: nginx<font></font>
    restart: always<font></font>
    ports:<font></font>
      - "80:80"<font></font>
    volumes:<font></font>
      - ./nginx:/etc/nginx/conf.d<font></font>
    depends_on:<font></font>
      - nuxt<font></font>
    links:<font></font>
      - nuxt<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引值</font></font></p>

<pre><code>...<font></font>
  async asyncData({ store, $axios }) {<font></font>
    const games = await $axios.$get('/games')<font></font>
    store.commit('games/emptyList')<font></font>
    games.forEach(game =&gt; {<font></font>
      store.commit('games/add', {<font></font>
        id: game.id || game._id,<font></font>
        ...game<font></font>
      })<font></font>
    })<font></font>
    return { games }<font></font>
  },<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">page.vue</font></font></p>

<pre><code>...<font></font>
  async asyncData({ store, $axios }) {<font></font>
    const games = await $axios.$get('/games')<font></font>
    store.commit('games/emptyList')<font></font>
    games.forEach(game =&gt; {<font></font>
      store.commit('games/add', {<font></font>
        id: game.id || game._id,<font></font>
        ...game<font></font>
      })<font></font>
    })<font></font>
    return { games }<font></font>
  },<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nginx配置</font></font></p>

<pre><code>upstream webserver {<font></font>
  ip_hash;<font></font>
  server nuxt:3000;<font></font>
}<font></font>
<font></font>
server {<font></font>
  listen 80;<font></font>
  access_log off;<font></font>
  connection_pool_size 512k;<font></font>
  large_client_header_buffers 4 512k;<font></font>
<font></font>
  location / {<font></font>
    proxy_pass http://webserver;<font></font>
    proxy_http_version 1.1;<font></font>
    proxy_set_header Upgrade $http_upgrade;<font></font>
    proxy_set_header Connection "upgrade";<font></font>
    proxy_set_header Host $host;<font></font>
    proxy_set_header X-Real-IP $remote_addr;<font></font>
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<font></font>
    proxy_set_header X-Forwarded-Proto $scheme;<font></font>
    proxy_max_temp_file_size 0;<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试了Thomasleveil的建议。</font><font style="vertical-align: inherit;">现在，我收到以下错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt | </font><font style="vertical-align: inherit;">[2:09:35 PM]错误：连接ECONNREFUSED 127.0.0.1:80</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，似乎现在/ api已转发到127.0.0.1:80。</font><font style="vertical-align: inherit;">不知道为什么^^</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></p>

<pre><code>  axios: {<font></font>
    baseURL: '/api'<font></font>
  },<font></font>
  server: {<font></font>
    proxyTable: {<font></font>
      '/api': {<font></font>
         target: 'http://localhost:1337',<font></font>
         changeOrigin: true,<font></font>
         pathRewrite: {<font></font>
           "^/api": ""<font></font>
         }<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docker-compose.yml</font></font></p>

<pre><code>version: '3'<font></font>
<font></font>
services:<font></font>
  reverse-proxy:<font></font>
    image: traefik # The official Traefik docker image<font></font>
    command: --api --docker # Enables the web UI and tells Traefik to listen to docker<font></font>
    ports:<font></font>
      - "80:80"     # The HTTP port<font></font>
      - "8080:8080" # The Web UI (enabled by --api)<font></font>
    volumes:<font></font>
      - /var/run/docker.sock:/var/run/docker.sock # listen to the Docker events<font></font>
    networks:<font></font>
      - mynet<font></font>
<font></font>
  api:<font></font>
    build: .<font></font>
    image: strapi/strapi<font></font>
    container_name: api<font></font>
    environment:<font></font>
      - APP_NAME=strapi-app<font></font>
      - DATABASE_CLIENT=mongo<font></font>
      - DATABASE_HOST=db<font></font>
      - DATABASE_PORT=27017<font></font>
      - DATABASE_NAME=strapi<font></font>
      - DATABASE_USERNAME=<font></font>
      - DATABASE_PASSWORD=<font></font>
      - DATABASE_SSL=false<font></font>
      - DATABASE_AUTHENTICATION_DATABASE=strapi<font></font>
      - HOST=api<font></font>
      - NODE_ENV=development<font></font>
    ports:<font></font>
      - 1337:1337<font></font>
    volumes:<font></font>
      - ./strapi-app:/usr/src/api/strapi-app<font></font>
      #- /usr/src/api/strapi-app/node_modules<font></font>
    depends_on:<font></font>
      - db<font></font>
    restart: always<font></font>
    networks:<font></font>
      - mynet<font></font>
    labels:<font></font>
      - "traefik.backend=api"<font></font>
      - "traefik.docker.network=mynet"<font></font>
      - "traefik.frontend.rule=Host:example.com;PathPrefixStrip:/api"<font></font>
      - "traefik.port=1337"<font></font>
<font></font>
  db:<font></font>
    image: mongo<font></font>
    environment:<font></font>
      - MONGO_INITDB_DATABASE=strapi<font></font>
    ports:<font></font>
      - 27017:27017<font></font>
    volumes:<font></font>
      - ./db:/data/db<font></font>
    restart: always<font></font>
    networks:<font></font>
      - mynet<font></font>
<font></font>
  nuxt:<font></font>
    # build: ./app/<font></font>
    image: "registry.gitlab.com/username/package:latest"<font></font>
    container_name: nuxt<font></font>
    restart: always<font></font>
    ports:<font></font>
      - "3000:3000"<font></font>
    command:<font></font>
      "npm run start"<font></font>
    networks:<font></font>
      - mynet<font></font>
    labels:<font></font>
      - "traefik.backend=nuxt"<font></font>
      - "traefik.frontend.rule=Host:example.com;PathPrefixStrip:/"<font></font>
      - "traefik.docker.network=web"<font></font>
      - "traefik.port=3000"<font></font>
<font></font>
networks:<font></font>
  mynet:<font></font>
    external: true<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
