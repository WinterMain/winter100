---
layout: question
title:  Jest不从vue文件（nuxt）收集coverage
date:   2020-03-23T06:49:02.000Z
description: 当我运行jest --coveragejest时，它只会从JavaScript文件中收集覆盖率，而不会从我的vue文件中收集覆盖率。文件夹结构正确。jes...
img: 
author: 宝儿
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行</font></font><code>jest --coverage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jest时，它只会从JavaScript文件中收集覆盖率，而不会从我的vue文件中收集覆盖率。</font><font style="vertical-align: inherit;">文件夹结构正确。</font></font><code>jest.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">一样位于根文件夹中</font></font><code>/lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对我而言，没有逻辑上的解释为什么从JavaScript文件而不是从vue文件收集coverage。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24025/images/thumbnails/1584946142783.png" data-src="https://www.samyoc.com//uploads/users/24025/images/1584946142783.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Ab3D7.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>jest.config.js</code></p>

<pre><code>module.exports = {<font></font>
  verbose: true,<font></font>
  setupFilesAfterEnv: ['&lt;rootDir&gt;/test-framework-scripts.js'],<font></font>
  moduleFileExtensions: [<font></font>
    'js',<font></font>
    'jsx',<font></font>
    'json',<font></font>
    'vue',<font></font>
    'node',<font></font>
  ],<font></font>
  moduleNameMapper: {<font></font>
    '^@/(.*)$': '&lt;rootDir&gt;/$1',<font></font>
  },<font></font>
  moduleDirectories: [<font></font>
    'node_modules',<font></font>
    'bower_components',<font></font>
    'shared',<font></font>
    'test/tmp',<font></font>
  ],<font></font>
  transform: {<font></font>
    '^.+\\.vue$': 'vue-jest',<font></font>
    '.+\\.(css|styl|less|sass|scss|png|jpe?g|ttf|woff|woff2)$': 'jest-transform-stub',<font></font>
    '^.+\\.js$': 'babel-jest',<font></font>
    '^.+\\.svg$': '&lt;rootDir&gt;/jest-svg-transform.js',<font></font>
    '\\.(gql|graphql)$': 'jest-transform-graphql',<font></font>
  },<font></font>
  transformIgnorePatterns: [<font></font>
    '&lt;rootDir&gt;/node_modules/(!gsap)',<font></font>
  ],<font></font>
  snapshotSerializers: [<font></font>
    'jest-serializer-vue',<font></font>
  ],<font></font>
  testMatch: [<font></font>
    '&lt;rootDir&gt;/test/**/*.spec.(js|jsx|ts|tsx)',<font></font>
  ],<font></font>
  testPathIgnorePatterns: [<font></font>
    '&lt;rootDir&gt;/test/client/shared-examples/',<font></font>
  ],<font></font>
  testURL: 'http://localhost/',<font></font>
  watchPlugins: [<font></font>
    'jest-watch-typeahead/filename',<font></font>
    'jest-watch-typeahead/testname',<font></font>
  ],<font></font>
  collectCoverageFrom: [<font></font>
    'components/**/*.{js,vue}',<font></font>
    'layouts/**/*.{js,vue}',<font></font>
    'lib/**/*.{js,vue}',<font></font>
    'middleware/**/*.{js,vue}',<font></font>
    'mixins/**/*.{js,vue}',<font></font>
    'pages/**/*.{js,vue}',<font></font>
    'store/**/*.{js,vue}',<font></font>
    '!&lt;rootDir&gt;/node_modules/**',<font></font>
    '!&lt;rootDir&gt;/test/**',<font></font>
  ],<font></font>
  coverageReporters: ['text', 'html'],<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></p>

<pre><code>{<font></font>
  "name": "stockpicker",<font></font>
  "version": "1.0.0",<font></font>
  "description": "a stockpicker",<font></font>
  "author": "Nico Meyer",<font></font>
  "private": true,<font></font>
  "scripts": {<font></font>
    "dev": "nuxt",<font></font>
    "build": "nuxt build",<font></font>
    "start": "nuxt start",<font></font>
    "generate": "nuxt generate",<font></font>
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",<font></font>
    "precommit": "npm run lint",<font></font>
    "test": "jest",<font></font>
    "test.watch": "jest --watch"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "@fortawesome/fontawesome-svg-core": "^1.2.26",<font></font>
    "@fortawesome/free-solid-svg-icons": "^5.12.0",<font></font>
    "@fortawesome/vue-fontawesome": "^0.1.9",<font></font>
    "@nuxtjs/axios": "^5.3.6",<font></font>
    "axios": "^0.19.2",<font></font>
    "bootstrap-vue": "^2.3.0",<font></font>
    "chai": "^4.2.0",<font></font>
    "core-js": "^2.6.11",<font></font>
    "cross-env": "^5.2.0",<font></font>
    "firebase": "^7.8.0",<font></font>
    "js-cookie": "^2.2.1",<font></font>
    "moment": "^2.24.0",<font></font>
    "nuxt": "^2.11.0",<font></font>
    "vue": "^2.6.11",<font></font>
    "vue-async-computed": "^3.6.1",<font></font>
    "vue-clickaway2": "^2.3.1",<font></font>
    "vue2-touch-events": "^2.1.0",<font></font>
    "vuex": "^3.1.2"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@babel/core": "^7.8.4",<font></font>
    "@babel/preset-env": "^7.8.4",<font></font>
    "@nuxtjs/eslint-config": "^0.0.1",<font></font>
    "@vue/test-utils": "^1.0.0-beta.31",<font></font>
    "babel-core": "^7.0.0-bridge.0",<font></font>
    "babel-eslint": "^10.0.1",<font></font>
    "babel-jest": "^25.1.0",<font></font>
    "eslint": "^5.3.0",<font></font>
    "eslint-config-airbnb-base": "^13.1.0",<font></font>
    "eslint-config-standard": "&gt;=12.0.0",<font></font>
    "eslint-import-resolver-webpack": "^0.11.1",<font></font>
    "eslint-loader": "^2.1.2",<font></font>
    "eslint-plugin-import": "^2.17.2",<font></font>
    "eslint-plugin-jest": "&gt;=22.3.0",<font></font>
    "eslint-plugin-node": "&gt;=8.0.1",<font></font>
    "eslint-plugin-nuxt": "&gt;=0.4.2",<font></font>
    "eslint-plugin-promise": "&gt;=4.0.1",<font></font>
    "eslint-plugin-standard": "&gt;=4.0.0",<font></font>
    "eslint-plugin-vue": "^5.2.2",<font></font>
    "jest": "^25.1.0",<font></font>
    "jest-expect-message": "^1.0.2",<font></font>
    "jest-extended": "^0.11.5",<font></font>
    "jest-serializer-vue": "^2.0.2",<font></font>
    "jest-transform-graphql": "^2.1.0",<font></font>
    "jest-transform-stub": "^2.0.0",<font></font>
    "jest-watch-typeahead": "^0.4.2",<font></font>
    "jsdom": "^15.1.0",<font></font>
    "jsdom-global": "^3.0.2",<font></font>
    "node-sass": "^4.13.1",<font></font>
    "nodemon": "^1.18.9",<font></font>
    "resolve-url-loader": "^3.1.0",<font></font>
    "sass-loader": "^7.1.0",<font></font>
    "vue-jest": "^3.0.5",<font></font>
    "webpack": "^4.32.0"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你能告诉我这里怎么了吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2877篇《Jest不从vue文件（nuxt）收集coverage》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是玩笑v25中的回归。</font><font style="vertical-align: inherit;">目前无法执行任何操作。</font><font style="vertical-align: inherit;">该问题在jest repo </font><a href="https://github.com/facebook/jest/issues/9490" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://github.com/facebook/jest/issues/9490中</font></a><font style="vertical-align: inherit;">打开</font></font><a href="https://github.com/facebook/jest/issues/9490" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
