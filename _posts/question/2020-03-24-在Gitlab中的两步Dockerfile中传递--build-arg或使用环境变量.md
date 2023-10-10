---
layout: question
title:  在Gitlab中的两步Dockerfile中传递--build-arg或使用环境变量
date:   2020-03-24T09:32:58.000Z
description: 我的最低测试项目布局如下所示。├── deployment│   ├── build.sh│   └── nginx│       └── ng...
img: 
author: Tony凯
category: question
answer: 0
tags: 码头工人 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的最低测试项目布局如下所示。</font></font></p>

<pre><code>├── deployment<font></font>
│&nbsp;&nbsp; ├── build.sh<font></font>
│&nbsp;&nbsp; └── nginx<font></font>
│&nbsp;&nbsp;     └── nginx.conf<font></font>
├── Dockerfile<font></font>
├── next.config.js<font></font>
├── package.json<font></font>
├── package-lock.json<font></font>
└── pages<font></font>
    ├── _app.js<font></font>
    └── index.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dockerfile的内容：</font></font></p>

<pre><code>FROM node as build-stage<font></font>
<font></font>
ARG K8S_SECRET_PUB<font></font>
ENV K8S_SECRET_PUB ${K8S_SECRET_PUB}<font></font>
<font></font>
ARG SRV<font></font>
ENV SRV ${SRV}<font></font>
<font></font>
WORKDIR /app<font></font>
COPY package*json /app/<font></font>
RUN npm install --production<font></font>
COPY ./ /app/<font></font>
RUN npm run export<font></font>
<font></font>
<font></font>
FROM nginx:1.15-alpine<font></font>
<font></font>
RUN rm /etc/nginx/nginx.conf<font></font>
COPY --from=build-stage /app/out /www<font></font>
COPY deployment/nginx/nginx.conf /etc/nginx/<font></font>
EXPOSE 5000<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标是将环境变量K8S_SECRET_PUB和SRV传递到构建过程。</font></font><code>npm run export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行</font></font><code>next build &amp;&amp; next export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取nginx服务器应提供的静态文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.config.js的内容：</font></font></p>

<pre><code>require('dotenv').config();<font></font>
<font></font>
module.exports = {<font></font>
  serverRuntimeConfig: {<font></font>
    srv: process.env.SRV<font></font>
  },<font></font>
  publicRuntimeConfig: {<font></font>
    pub: process.env.K8S_SECRET_PUB<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面/_app.js的内容：</font></font></p>

<pre><code>import App from 'next/app';<font></font>
import getConfig from 'next/config';<font></font>
<font></font>
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();<font></font>
<font></font>
class MyApp extends App {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;h1&gt;<font></font>
          {serverRuntimeConfig.srv || 'SRV not accessible from client :p'}<font></font>
        &lt;/h1&gt;<font></font>
        &lt;h1&gt;{publicRuntimeConfig.pub || 'PUB not set'}&lt;/h1&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default MyApp;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过本地构建docker映像时</font></font><code>docker build --build-arg K8S_SECRET_PUB=puppy --build-arg SRV=serverval -t my_image .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我可以通过启动容器</font></font><code>docker run -p 5000:5000 my_image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问正在运行的容器具有预期的结果。</font><font style="vertical-align: inherit;">检查文件系统进一步表明，已拾取传递的构建参数，并相应地写入了文件。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24742/images/thumbnails/1585042251332.png" data-src="https://www.samyoc.com//uploads/users/24742/images/1585042251332.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/uqwCu.png" alt="在本地测试Docker映像"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我将此代码推送到Gitlab时，已部署的nginx如下所示：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24742/images/thumbnails/1585042251334.png" data-src="https://www.samyoc.com//uploads/users/24742/images/1585042251334.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Ig3Pa.png" alt="在Gitlab上运行"></a></p>

<p>What I would like to accomplish is to have the Environment variables that I defined via Gitlab UI under Settings -&gt; CI/CD be picked up and used in the build-stage defined in the Dockerfile. As we've been otherwise happy with the Auto Dev, we have not created and checked in a .gitlab-ci.yml file yet.</p>

<hr>

<p><strong>Update #1</strong></p>

<p>After tinkering for a little bit, I now have access to the environment variables, but I lost the convenience of Auto DevOps.</p>

<p>I added a <code>deployment/build.sh</code> with this content:</p>

<pre><code>#!/bin/sh<font></font>
docker build --build-arg K8S_SECRET_PUB="${K8S_SECRET_PUB}" --build-arg SRV="${SRV}" -t my_image .<font></font>
</code></pre>

<p>I also started on a <code>.gitlab-ci.yml</code> which contains this:</p>

<pre><code>stages:<font></font>
    - build<font></font>
    - review<font></font>
    - deploy<font></font>
    - clean<font></font>
<font></font>
image: docker:latest<font></font>
<font></font>
services:<font></font>
    - docker:dind<font></font>
<font></font>
build:<font></font>
    stage: build<font></font>
    script:<font></font>
        - sh ./deployment/build.sh<font></font>
        - mkdir image<font></font>
        - docker save my_image &gt; image/my_image.tar<font></font>
    artifacts:<font></font>
        paths:<font></font>
            - image<font></font>
</code></pre>

<p>After pushing the repository to Gitlab, the pipeline succeeds and I can download the artifact, unzip it, load it via <code>docker load -i image/my_image.tar</code> and run it. And sure enough, the page loads with the defined variables from the Gitlab CI/CD UI.
However, now I've lost all of the other steps of the deployment process (which is the main reason I didn't want to write the .gitlab-ci.yml in the first place).</p>

<hr>

<p><strong>Update #2</strong></p>

<p>Working off the Auto DevOps template, which I found at <a href="https://gitlab.com/gitlab-org/gitlab-ce/blob/master/lib/gitlab/ci/templates/Auto-DevOps.gitlab-ci.yml" rel="nofollow noreferrer">https://gitlab.com/gitlab-org/gitlab-ce/blob/master/lib/gitlab/ci/templates/Auto-DevOps.gitlab-ci.yml</a> I made these changes:</p>

<ul>
<li>commenting out the line <code>- template: Jobs/Build.gitlab-ci.yml</code></li>
<li>replace the alpine with the docker image</li>
<li>added <code>CODE_QUALITY_DISABLED: "true"</code> to the variables section, because the code quality check was taking too long</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上述我之前的尝试中添加服务并构建部分</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我处于审查阶段。</font></font></p>

<pre><code>Application should be accessible at: http://*my_image_url*<font></font>
Waiting for deployment "review-branchname-abcxyz" rollout to finish: 0 of 1 updated replicas are available...<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
