---
layout: question
title:  使用异步/等待与webpack-简单配置抛出错误：未定义RegeneratorRuntime
date:   2020-03-12T16:34:07.000Z
description: 我正在使用具有以下配置的webpack-simple模板：package.json{  "name"  "vue-wp-simple",  "...
img: 
author: 卡卡西乐逆天
category: question
answer: 2
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用具有以下配置的webpack-simple模板：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "vue-wp-simple",<font></font>
  "description": "A Vue.js project",<font></font>
  "version": "1.0.0",<font></font>
  "author": "v",<font></font>
  "private": true,<font></font>
  "scripts": {<font></font>
    "dev": "webpack-dev-server --inline --hot",<font></font>
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "vue": "^2.3.3",<font></font>
    "vue-router": "^2.7.0",<font></font>
<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "babel-core": "^6.0.0",<font></font>
    "babel-loader": "^6.0.0",<font></font>
    "babel-preset-env": "^1.5.1",<font></font>
    "babel-preset-es2015": "^6.24.1",<font></font>
    "babel-preset-stage-2": "^6.24.1",<font></font>
    "cross-env": "^3.0.0",<font></font>
    "css-loader": "^0.25.0",<font></font>
    "file-loader": "^0.9.0",<font></font>
    "style-loader": "^0.18.2",<font></font>
    "stylus": "^0.54.5",<font></font>
    "stylus-loader": "^3.0.1",<font></font>
    "vue-loader": "^12.1.0",<font></font>
    "vue-template-compiler": "^2.3.3",<font></font>
    "webpack": "^2.6.1",<font></font>
    "webpack-dev-server": "^2.4.5"<font></font>
  }<font></font>
} <font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    ["env", { "modules": false }],<font></font>
  ]<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我在组件中使用async / await的方法</font></font></p>

<pre><code>async mounted(){<font></font>
            //this.$store.dispatch('loadImg', this.details.imgUrl).then((img) =&gt; {<font></font>
                //this.drawImage(img);    <font></font>
            //});<font></font>
<font></font>
            var result = await this.loadImg();<font></font>
            console.log(result);<font></font>
        },<font></font>
        methods:{<font></font>
            async loadImg(){<font></font>
                return new Promise((resolve, reject) =&gt; {<font></font>
                    setTimeout(() =&gt; {<font></font>
                        resolve('yeah async await works!');<font></font>
                    }, 2000);<font></font>
                });<font></font>
            }, <font></font>
         }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我运行该应用程序时，出现错误：
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReferenceError：regeneratorRuntime未定义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
，甚至该组件也未显示</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1359篇《使用异步/等待与webpack-简单配置抛出错误：未定义RegeneratorRuntime》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神奇梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">await / async，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要安装几个Babel依赖项。</font><font style="vertical-align: inherit;">这适用于Vuejs项目-</font></font></p>

<pre><code>npm install --save-dev babel-polyfill<font></font>
npm install --save-dev babel-plugin-transform-regenerator<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，您需要修改</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件以使用插件，如下所示-</font></font></p>

<pre><code>{<font></font>
    "plugins": ["transform-regenerator"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件以如下方式使用再生器-</font></font></p>

<pre><code>require("babel-polyfill");<font></font>
<font></font>
module.exports = {<font></font>
  entry: ["babel-polyfill", "./app.js"]<font></font>
};<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的项目结构和文件名等进行必要的更改。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">entaseven</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用异步并等待，您应该在babel配置中添加2个插件：</font></font><a href="https://babeljs.io/docs/plugins/transform-async-to-generator/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
 </font><a href="https://babeljs.io/docs/plugins/transform-async-to-generator/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//babeljs.io/docs/plugins/transform-async-to-generator/</font></a><font style="vertical-align: inherit;">和</font></font><a href="https://babeljs.io/docs/plugins/syntax-async-functions/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/plugins/syntax -异步功能/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
