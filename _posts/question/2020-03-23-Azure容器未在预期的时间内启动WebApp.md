---
layout: question
title:  Azure：容器未在预期的时间内启动（WebApp）
date:   2020-03-23T03:55:42.000Z
description: 尝试部署Web应用程序时出现以下错误：错误-网站XXX的容器XXX_0在预期的期限内未启动。经过的时间= 1800.4463925秒我正在尝试部署...
img: 
author: 小卤蛋
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试部署Web应用程序时出现以下错误：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误-网站XXX的容器XXX_0在预期的期限内未启动。</font><font style="vertical-align: inherit;">经过的时间= 1800.4463925秒</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试部署节点应用程序。</font><font style="vertical-align: inherit;">通过.deployment文件使用自动部署。</font><font style="vertical-align: inherit;">.deployment文件如下所示：</font></font></p>

<pre><code># 1. KuduSync<font></font>
if [[ "$IN_PLACE_DEPLOYMENT" -ne "1" ]]; then<font></font>
  "$KUDU_SYNC_CMD" -v 50 -f "$DEPLOYMENT_SOURCE" -t "$DEPLOYMENT_TARGET" -n "$NEXT_MANIFEST_PATH" -p "$PREVIOUS_MANIFEST_PATH" -i ".git;.hg;<font></font>
.deployment;deploy.sh"<font></font>
  exitWithMessageOnError "Kudu Sync failed"<font></font>
fi<font></font>
<font></font>
# 2. Select node version<font></font>
selectNodeVersion<font></font>
<font></font>
# 3. Install npm packages for root directory<font></font>
if [ -e "$DEPLOYMENT_TARGET/package.json" ]; then<font></font>
  cd "$DEPLOYMENT_TARGET"<font></font>
  # echo "Running $NPM_CMD install --production for root directory"<font></font>
  # eval $NPM_CMD install --production<font></font>
  echo "Running $NPM_CMD install --production for root directory"<font></font>
  eval $NPM_CMD install<font></font>
  exitWithMessageOnError "npm failed"<font></font>
  ##################<font></font>
  echo Building App...<font></font>
  eval $NPM_CMD run build<font></font>
  ##################<font></font>
  echo Starting App...<font></font>
  # eval $NPM_CMD run start<font></font>
  # cd - &gt; /dev/null<font></font>
fi<font></font>
<font></font>
#####################################################################################<font></font>
echo "Finished successfully."<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json文件具有以下脚本：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "dev": "node server.js",<font></font>
    "build": "next build",<font></font>
    "start": "echo 'work!!' &amp;&amp; NODE_ENV=production &amp;&amp; node server.js"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而server.js如下：</font></font></p>

<pre><code>const {<font></font>
  createServer<font></font>
} = require('http')<font></font>
const next = require('next')<font></font>
const app = next({<font></font>
  dev: process.env.NODE_ENV !== 'production'<font></font>
})<font></font>
const routes = require('./routes')<font></font>
const handler = routes.getRequestHandler(app)<font></font>
console.log("HEYYYY");<font></font>
// Without express<font></font>
app.prepare()<font></font>
  .then(() =&gt; {<font></font>
    console.log("Ready on Localhost:80!!!");<font></font>
    createServer(handler)<font></font>
      .listen(80, (err) =&gt; {<font></font>
        if (err) throw err;<font></font>
        console.log("Ready on Localhost:80");<font></font>
      });<font></font>
  })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从研究中收集到的是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用启动时间不足 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口未打开/ </font><a href="https://blogs.msdn.microsoft.com/waws/2017/09/08/things-you-should-know-web-apps-and-linux/#NoPing" rel="noreferrer"><font style="vertical-align: inherit;">启动时</font></a><font style="vertical-align: inherit;">不响应</font></font><a href="https://blogs.msdn.microsoft.com/waws/2017/09/08/things-you-should-know-web-apps-and-linux/#NoPing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ping</font></font></a></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决（1）我将WEBSITES_CONTAINER_START_TIME_LIMIT设置为1800（最大值）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决（2），我将WEBSITES_PORT（在应用程序设置中）设置为“ 80”以暴露该端口。</font><font style="vertical-align: inherit;">（根据文档）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他我应该尝试的事情吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS默认docker日志文件输出以下内容：</font></font></p>

<pre><code>2018-10-15T14:32:59.946431939Z &gt; XXX@1.0.0 start /home/site/wwwroot<font></font>
2018-10-15T14:32:59.946455839Z &gt; echo 'work!!' &amp;&amp; NODE_ENV=production &amp;&amp; node server.js<font></font>
2018-10-15T14:32:59.946462839Z <font></font>
2018-10-15T14:33:00.249554126Z work!!<font></font>
2018-10-15T14:34:41.634101502Z HEYYYY<font></font>
2018-10-15T14:35:38.838555689Z  DONE  Compiled successfully in 48099ms14:35:38<font></font>
2018-10-15T14:35:38.838868291Z <font></font>
2018-10-15T14:35:39.406086808Z Ready on Localhost:80!!!<font></font>
2018-10-15T14:35:39.460029162Z Ready on Localhost:80<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2770篇《Azure：容器未在预期的时间内启动（WebApp）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，同时设置</font></font><code>-Port 80</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>-WEBSITES_PORT 80</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Azure App Service Deploy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务中，</font></font><code>App Settings</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在蔚蓝的DEVOPS节帮助。</font><font style="vertical-align: inherit;">它使docker从端口80而不是8000开始。这是</font><font style="vertical-align: inherit;">该任务的应用程序设置用法</font></font><a href="https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-rm-web-app-deployment?view=azure-devops" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
