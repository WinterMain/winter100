---
layout: question
title:  在Docker中运行nuxt js应用程序
date:   2020-03-26T08:11:31.000Z
description: 我正在尝试在docker容器中运行nuxt应用程序。为了做到这一点，我创建了以下Dockerfile：FROM node 6.10.2RUN mk...
img: 
author: 神乐小哥Near
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在docker容器中运行nuxt应用程序。</font><font style="vertical-align: inherit;">为了做到这一点，我创建了以下Dockerfile：</font></font></p>

<pre><code>FROM node:6.10.2<font></font>
<font></font>
RUN mkdir -p /app<font></font>
<font></font>
EXPOSE 3000<font></font>
<font></font>
COPY . /app<font></font>
WORKDIR /app<font></font>
RUN npm install<font></font>
RUN npm run build<font></font>
<font></font>
CMD [ "npm", "start" ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我构建图像并运行容器（</font></font><code>docker run -p 3000:3000 &lt;image-id&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）时，</font></font><code>localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">单击</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">什么也没得到</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可能是什么原因？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，Docker容器中的应用程序接受上的网络流量</font></font><code>http://127.0.0.1:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该接口不接受外部流量，因此也就不起作用了。</font><font style="vertical-align: inherit;">为了使其工作，我们需要将nuxt应用程序的HOST环境变量设置为</font></font><code>0.0.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（所有ip地址）。</font><font style="vertical-align: inherit;">我们可以在Dockerfile中执行以下操作：</font></font></p>

<pre><code>FROM node:6.10.2<font></font>
<font></font>
ENV HOST 0.0.0.0<font></font>
<font></font>
# rest of the file<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在脚本的“开始”命令中的package.json中： </font></font></p>

<p><code>"scripts": { "start": "HOST=0.0.0.0 nuxt start" ...}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何其他使nuxt应用程序仅在容器内部的localhost上进行侦听的方法。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
