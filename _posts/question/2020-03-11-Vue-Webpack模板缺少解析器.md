---
layout: question
title:  Vue Webpack模板缺少解析器
date:   2020-03-11T07:07:13.000Z
description: 我只是使用如下所示的webpack模板设置了一个vue项目：http  //vuejs-templates.github.io/webpack/但是，...
img: 
author: 逆天飞云
category: question
answer: 7
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是使用如下所示的webpack模板设置了一个vue项目：</font><a href="http://vuejs-templates.github.io/webpack/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://vuejs-templates.github.io/webpack/</font></font><a href="http://vuejs-templates.github.io/webpack/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在运行npm run dev只是为了测试模板是否正常工作后，我收到此错误：</font></font></p>

<pre><code>Failed to compile with 2 errors                                                                                                                                                                                                                                                           21:49:02<font></font>
 error  in ./src/App.vue<font></font>
<font></font>
Module build failed: Error: No parser and no file path given, couldn't infer a parser.<font></font>
    at normalize (path\node_modules\prettier\index.js:7051:13)<font></font>
    at formatWithCursor (path\node_modules\prettier\index.js:10370:12)<font></font>
    at path\node_modules\prettier\index.js:31115:15<font></font>
    at Object.format (path\node_modules\prettier\index.js:31134:12)<font></font>
    at Object.module.exports (path\node_modules\vue-loader\lib\template-compiler\index.js:80:23)<font></font>
<font></font>
 @ ./src/App.vue 11:0-354<font></font>
 @ ./src/main.js<font></font>
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js<font></font>
<font></font>
 error  in ./src/components/HelloWorld.vue<font></font>
<font></font>
Module build failed: Error: No parser and no file path given, couldn't infer a parser.<font></font>
    at normalize (path\node_modules\prettier\index.js:7051:13)<font></font>
    at formatWithCursor (path\node_modules\prettier\index.js:10370:12)<font></font>
    at path\node_modules\prettier\index.js:31115:15<font></font>
    at Object.format (path\node_modules\prettier\index.js:31134:12)<font></font>
    at Object.module.exports (path\node_modules\vue-loader\lib\template-compiler\index.js:80:23)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木禾</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Docker上使用Nuxt / Vue。</font><font style="vertical-align: inherit;">我在docker build上遇到了同样的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的命令后它不起作用</font></font></p>

<pre><code>rm -rf node_modules <font></font>
npm install --save-dev prettier@1.12.0<font></font>
npm run dev<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我像这样编辑了Dockerfile并成功了。</font></font></p>

<pre><code>FROM node:8.11<font></font>
<font></font>
RUN mkdir -p /app<font></font>
COPY . /app<font></font>
WORKDIR /app<font></font>
<font></font>
RUN npm install &amp;&amp; npm cache verify<font></font>
RUN npm install --save-dev prettier@1.12.0<font></font>
RUN npm run build<font></font>
<font></font>
EXPOSE 3000<font></font>
<font></font>
CMD ["npm", "run", "express"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了与纱线相同的错误，但尝试过</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是和它的工作。</font></font></p>

<p><code>yarn v v1.5.1</code>
<code>npm -v 5.6.0</code>
<code>node -v v10.0.0</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它已在vue-loader@13.7.2和vue-loader@14.2.3中修复。</font><font style="vertical-align: inherit;">因此，只需升级即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处使用了更漂亮的API接口并对其进行了硬编码，因此在project中添加了更漂亮的依赖项</font></font><code>@vue/component-compiler-utils</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试</font></font><code>npm i prettier@~1.12.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处强制使用更漂亮的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句有人</font></font><a href="https://github.com/vuejs/component-compiler-utils/pull/15" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了修复</font><a href="https://github.com/vuejs/component-compiler-utils/pull/15" rel="nofollow noreferrer"><font style="vertical-align: inherit;">请求</font></a></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用，</font></font><code>laravel-mix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么这对我来说已经解决了：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除。\ node_modules，删除。\ yarn.lock，然后将以下内容添加到。\ package.json</font></font></p>

<pre><code>"dependencies": {<font></font>
    ...<font></font>
    "prettier": "1.12.1",<font></font>
    "vue-loader": "13.7.0"<font></font>
    ...<font></font>
},<font></font>
"resolutions": {<font></font>
    "laravel-mix/vue-loader": "13.7.0",<font></font>
    "vue-loader/prettier": "1.12.1"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行纱线，一切都应该正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Yarn，请将其添加到您的文件夹中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以强制</font></font><code>@vue/component-compiler-utils</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用正确的版本：</font></font></p>

<pre class="lang-json prettyprint-override"><code>"resolutions": {<font></font>
  "@vue/component-compiler-utils/prettier": "1.12.1"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重新安装。</font></font></p>

<p><a href="https://yarnpkg.com/lang/en/docs/selective-version-resolutions/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="https://www.npmjs.com/package/prettier" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮的东西</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>1.13.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天发生</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">更新中</font><font style="vertical-align: inherit;">引起了这种回归</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">降级到以前的版本以解决此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev prettier@1.12.0</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm run dev</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该够了吧。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
