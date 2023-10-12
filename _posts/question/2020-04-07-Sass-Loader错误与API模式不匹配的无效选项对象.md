---
layout: question
title:  Sass Loader错误：与API模式不匹配的无效选项对象
date:   2020-04-07T03:42:47.000Z
description: 我正在将VueJS与VuetifyJS（v2.0.19）框架一起使用。运行npm run serve后出现此错误：  Sass Loader已使用与...
img: 
author: 番长猴子
category: question
answer: 2
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将VueJS与</font></font><a href="https://vuetifyjs.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VuetifyJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（v2.0.19）</font><font style="vertical-align: inherit;">框架</font><a href="https://vuetifyjs.com" rel="noreferrer"><font style="vertical-align: inherit;">一起</font></a><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm run serve</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后出现此错误</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass Loader已使用与API模式不匹配的选项对象进行了初始化。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的操作：我已经删除了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹，并将所有npm软件包和node.js重新安装/更新为最新的稳定版本。   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的错误消息：</font></font></p>

<pre><code> error  in ./node_modules/vuetify/src/components/VRangeSlider/VRangeSlider.sass<font></font>
<font></font>
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):<font></font>
ValidationError: Invalid options object. Sass Loader has been initialised using an options object that does not match the API schema.<font></font>
 - options has an unknown property 'indentedSyntax'. These properties are valid:<font></font>
   object { implementation?, sassOptions?, prependData?, sourceMap?, webpackImporter? }<font></font>
    at validate (/home/do/Desktop/A/Projects/Ral/AppCLI3/node_modules/sass-loader/node_modules/schema-utils/dist/validate.js:50:11)<font></font>
    at Object.loader (/home/do/Desktop/A/Projects/Ral/AppCLI3/node_modules/sass-loader/dist/index.js:36:28)<font></font>
<font></font>
 @ ./node_modules/vuetify/src/components/VRangeSlider/VRangeSlider.sass 4:14-208 14:3-18:5 15:22-216<font></font>
 @ ./node_modules/vuetify/lib/components/VRangeSlider/VRangeSlider.js<font></font>
 @ ./node_modules/vuetify/lib/components/VRangeSlider/index.js<font></font>
 @ ./node_modules/vuetify/lib/components/index.js<font></font>
 @ ./node_modules/vuetify/lib/index.js<font></font>
 @ ./src/main.js<font></font>
 @ multi (webpack)-dev-server/client?http://192.168.2.115:8080/sockjs-node (webpack)/hot/dev-server.js ./src/main.js<font></font>
<font></font>
 error  in ./node_modules/vuetify/src/styles/main.sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的package.json：</font></font></p>

<pre><code>  {<font></font>
  "name": "app",<font></font>
  "version": "0.1.0",<font></font>
  "private": false,<font></font>
  "scripts": {<font></font>
    "serve": "vue-cli-service serve",<font></font>
    "build": "vue-cli-service build",<font></font>
    "lint": "vue-cli-service lint"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "core-js": "^3.2.1",<font></font>
    "fibers": "^4.0.1",<font></font>
    "firebase": "^7.0.0",<font></font>
    "material-icons": "^0.3.1",<font></font>
    "register-service-worker": "^1.6.2",<font></font>
    "vue": "^2.6.10",<font></font>
    "vue-flickity": "^1.2.1",<font></font>
    "vue-router": "^3.1.3",<font></font>
    "vuetify": "^2.0.19",<font></font>
    "vuex": "^3.1.1"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@mdi/font": "^4.4.95",<font></font>
    "@vue/cli-plugin-babel": "^3.11.0",<font></font>
    "@vue/cli-plugin-eslint": "^3.11.0",<font></font>
    "@vue/cli-plugin-pwa": "^3.11.0",<font></font>
    "@vue/cli-service": "^3.11.0",<font></font>
    "@vue/eslint-config-prettier": "^5.0.0",<font></font>
    "babel-eslint": "^10.0.3",<font></font>
    "eslint": "^6.5.1",<font></font>
    "eslint-plugin-prettier": "^3.1.1",<font></font>
    "eslint-plugin-vue": "^5.2.3",<font></font>
    "material-design-icons-iconfont": "^5.0.1",<font></font>
    "node-sass": "^4.12.0",<font></font>
    "prettier": "1.18.2",<font></font>
    "sass-loader": "^8.0.0",<font></font>
    "stylus": "^0.54.7",<font></font>
    "stylus-loader": "^3.0.2",<font></font>
    "uglifyjs-webpack-plugin": "^2.2.0",<font></font>
    "vue-cli-plugin-vuetify": "^0.6.3",<font></font>
    "vue-loader": "^15.7.1",<font></font>
    "vue-template-compiler": "^2.6.10",<font></font>
    "vuetify-loader": "^1.3.0",<font></font>
    "webpack": "^4.41.0",<font></font>
    "webpack-cli": "^3.3.9"<font></font>
  },<font></font>
  "eslintConfig": {<font></font>
    "root": true,<font></font>
    "env": {<font></font>
      "node": true<font></font>
    },<font></font>
    "extends": [<font></font>
      "plugin:vue/essential",<font></font>
      "@vue/prettier"<font></font>
    ],<font></font>
    "rules": {<font></font>
      "no-console": "off"<font></font>
    },<font></font>
    "parserOptions": {<font></font>
      "parser": "babel-eslint"<font></font>
    }<font></font>
  },<font></font>
  "postcss": {<font></font>
    "plugins": {<font></font>
      "autoprefixer": {}<font></font>
    }<font></font>
  },<font></font>
  "browserslist": [<font></font>
    "&gt; 1%",<font></font>
    "last 2 versions"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4100篇《Sass Loader错误：与API模式不匹配的无效选项对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGil</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎像这里一样的问题：</font><a href="https://github.com/JeffreyWay/laravel-mix/issues/2206" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/JeffreyWay/laravel-mix/issues/2206" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/JeffreyWay/laravel-mix/issues/2206</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法是 </font></font></p>

<pre><code>npm uninstall --save-dev sass-loader<font></font>
npm install --save-dev sass-loader@7.1.0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猴子古一</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，我不得不降低sass-loader的性能，此后，我在运行时在终端上出现了真正的错误</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>vue-cli-service</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，我认为这是v8的sass-loader的问题，将进一步探讨</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时，这可能会有所帮助：在package.json中，编辑sass-loader以读取 </font></font><code>"sass-loader": "7.0.1",
</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
