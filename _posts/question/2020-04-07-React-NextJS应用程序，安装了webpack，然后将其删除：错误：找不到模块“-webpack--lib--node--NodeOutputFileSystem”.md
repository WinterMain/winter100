---
layout: question
title:  React NextJS应用程序，安装了webpack，然后将其删除：错误：找不到模块“ webpack / lib / node / NodeOutputFileSystem”
date:   2020-04-07T03:46:48.000Z
description: 在试图弄清楚如何使用仅前端的ReactJS / NextJS应用程序创建和使用ENV机密时，我中断了安装webpack的应用程序。https //me...
img: 
author: Pro泡芙
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在试图弄清楚如何使用仅前端的ReactJS / NextJS应用程序创建和使用ENV机密时，我中断了安装webpack的应用程序。</font></font></p>

<p><a href="https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5</font></font></a></p>

<p><a href="https://github.com/zeit/next.js/issues/805" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/issues/805</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我</font></font><code>npm install webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意识到我不应该自己安装webpack之后，因为NextJS已经处理了它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我删除了我的node_modules文件夹，从package.json中删除了webpack，但是现在当我尝试使用以下方式运行我的应用程序时，</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现以下错误：</font></font></p>

<pre><code>moonholdings.io [actionsReducers●] % npm run dev<font></font>
<font></font>
&gt; moon.holdings@2.0.0 dev /Users/leongaban/projects/Futuratum/moonholdings.io<font></font>
&gt; next -p 7777<font></font>
<font></font>
{ Error: Cannot find module 'webpack/lib/node/NodeOutputFileSystem'<font></font>
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)<font></font>
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)<font></font>
    at Module.require (internal/modules/cjs/loader.js:637:17)<font></font>
    at require (internal/modules/cjs/helpers.js:20:18)<font></font>
    at Object.&lt;anonymous&gt; (/Users/leongaban/projects/Futuratum/moonholdings.io/node_modules/webpack-dev-middleware/lib/fs.js:7:30)<font></font>
    at Module._compile (internal/modules/cjs/loader.js:689:30)<font></font>
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)<font></font>
    at Module.load (internal/modules/cjs/loader.js:599:32)<font></font>
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)<font></font>
    at Function.Module._load (internal/modules/cjs/loader.js:530:3) code: 'MODULE_NOT_FOUND' }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">思考为什么会这样？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的next.config.js</font></font></strong></p>

<pre><code>const { PHASE_PRODUCTION_SERVER } =<font></font>
  process.env.NODE_ENV === 'development'<font></font>
    ? {}<font></font>
    : !process.env.NOW_REGION<font></font>
      ? require('next/constants')<font></font>
      : require('next-server/constants');<font></font>
<font></font>
module.exports = (phase, { defaultConfig }) =&gt; {<font></font>
  if (phase === PHASE_PRODUCTION_SERVER) {<font></font>
    // Config used to run in production.<font></font>
    return {};<font></font>
  }<font></font>
<font></font>
  // ✅ Put the require call here.<font></font>
  const withTypescript = require('@zeit/next-typescript');<font></font>
  const withCSS = require('@zeit/next-sass');<font></font>
<font></font>
  return withTypescript(withCSS());<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "moon.holdings",<font></font>
  "version": "2.0.0",<font></font>
  "description": "Moon Holdings, your cryptocurrency portfolio.",<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "dev": "next -p 7777",<font></font>
    "build": "next build",<font></font>
    "start": "next start -p 8000",<font></font>
    "test": "NODE_ENV=test jest --watch --no-cache",<font></font>
    "test-win": "SET NODE_ENV=test&amp;&amp; jest --watch",<font></font>
    "heroku-postbuild": "next build"<font></font>
  },<font></font>
  "author": "Futuratum",<font></font>
  "license": "ISC",<font></font>
  "dependencies": {<font></font>
    "@zeit/next-sass": "^1.0.1",<font></font>
    "@zeit/next-typescript": "^1.1.1",<font></font>
    "apollo-boost": "^0.1.16",<font></font>
    "apollo-client": "^2.4.2",<font></font>
    "axios": "^0.18.0",<font></font>
    "decko": "^1.2.0",<font></font>
    "downshift": "^2.2.3",<font></font>
    "enzyme": "^3.6.0",<font></font>
    "enzyme-adapter-react-16": "^1.5.0",<font></font>
    "graphql": "^14.0.2",<font></font>
    "graphql-tag": "^2.9.2",<font></font>
    "graphql-tools": "^4.0.0",<font></font>
    "lodash.debounce": "^4.0.8",<font></font>
    "next": "^7.0.2",<font></font>
    "next-with-apollo": "^3.1.3",<font></font>
    "node-sass": "^4.11.0",<font></font>
    "nprogress": "^0.2.0",<font></font>
    "prop-types": "^15.6.2",<font></font>
    "ramda": "^0.26.1",<font></font>
    "react": "^16.7.0",<font></font>
    "react-adopt": "^0.6.0",<font></font>
    "react-apollo": "^2.2.1",<font></font>
    "react-dom": "^16.7.0",<font></font>
    "react-redux": "^6.0.0",<font></font>
    "react-transition-group": "^2.5.0",<font></font>
    "redux-devtools-extension": "^2.13.8",<font></font>
    "redux-thunk": "^2.3.0",<font></font>
    "styled-components": "^3.4.9",<font></font>
    "tslint": "^5.12.1",<font></font>
    "tslint-react": "^3.6.0",<font></font>
    "typescript": "^3.2.4",<font></font>
    "waait": "^1.0.2"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@babel/plugin-proposal-decorators": "^7.3.0",<font></font>
    "@babel/preset-typescript": "^7.1.0",<font></font>
    "@types/enzyme": "^3.1.15",<font></font>
    "@types/jest": "^23.3.13",<font></font>
    "@types/next": "^7.0.6",<font></font>
    "@types/ramda": "^0.25.49",<font></font>
    "@types/react": "^16.7.20",<font></font>
    "@types/react-dom": "^16.0.11",<font></font>
    "@types/react-redux": "^7.0.1",<font></font>
    "@types/zeit__next-typescript": "^0.1.1",<font></font>
    "babel-core": "^7.0.0-bridge.0",<font></font>
    "babel-jest": "^23.6.0",<font></font>
    "babel-plugin-sass-vars": "^0.2.1",<font></font>
    "babel-plugin-styled-components": "^1.7.1",<font></font>
    "casual": "^1.5.19",<font></font>
    "enzyme-to-json": "^3.3.4",<font></font>
    "jest": "^23.6.0",<font></font>
    "jest-transform-graphql": "^2.1.0"<font></font>
  },<font></font>
  "jest": {<font></font>
    "setupTestFrameworkScriptFile": "&lt;rootDir&gt;/jest.setup.js",<font></font>
    "testPathIgnorePatterns": [<font></font>
      "&lt;rootDir&gt;/.next/",<font></font>
      "&lt;rootDir&gt;/node_modules/"<font></font>
    ],<font></font>
    "transform": {<font></font>
      ".*": "babel-jest",<font></font>
      "^.+\\.js?$": "babel-jest",<font></font>
      "^.+\\.ts?$": "babel-jest",<font></font>
      "^.+\\.tsx?$": "babel-jest"<font></font>
    },<font></font>
    "moduleFileExtensions": [<font></font>
      "js",<font></font>
      "json",<font></font>
      "ts",<font></font>
      "tsx"<font></font>
    ],<font></font>
    "modulePaths": [<font></font>
      "&lt;rootDir&gt;/components/",<font></font>
      "&lt;rootDir&gt;/pages/",<font></font>
      "&lt;rootDir&gt;/shared/"<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4112篇《React NextJS应用程序，安装了webpack，然后将其删除：错误：找不到模块“ webpack / lib / node / NodeOutputFileSystem”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在以下趋势中找到了答案：</font><a href="https://github.com/webpack/webpack/issues/2131#issuecomment-383017060" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/webpack/webpack/issues/2131#issuecomment-383017060" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/webpack/webpack/issues/2131#issuecomment-383017060</font></font></a></p>

<pre><code>rm node_module -R<font></font>
rm package-lock.json (this should be removed)<font></font>
npm cache verify<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我的</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作品又来了！</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
