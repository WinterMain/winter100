---
layout: question
title:  Gitlab CI部署失败：gitlab-ci.yml运行期间“ bash：pm2：命令未找到”
date:   2020-04-07T03:48:27.000Z
description: 我正在从GitLab部署Next.JS应用程序直接到我的远程服务器。我已经配置了一个变量，该变量包含我的私有SSH密钥，以便连接到远程服务器，并且我正在使...
img: 
author: 西里神奇
category: question
answer: 1
tags: 连续集成 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在从GitLab部署Next.JS应用程序直接到我的远程服务器。</font><font style="vertical-align: inherit;">我已经配置了一个变量，该变量包含我的私有SSH密钥，以便连接到远程服务器，并且我正在使用rsync从docker运行程序复制到我的远程服务器。</font><font style="vertical-align: inherit;">当我在SSH上使用PM2重新启动服务时，一切工作到最后一行。</font></font></p>

<pre><code>image: node:latest<font></font>
<font></font>
stages:<font></font>
  - build<font></font>
  - test<font></font>
  - deploy<font></font>
<font></font>
cache:<font></font>
  paths:<font></font>
    - node_modules/<font></font>
    - .next/<font></font>
<font></font>
install_dependencies:<font></font>
  stage: build<font></font>
  script:<font></font>
    - npm install<font></font>
    - npm run build<font></font>
  artifacts:<font></font>
    paths:<font></font>
      - node_modules/<font></font>
      - .next/<font></font>
<font></font>
test-build:<font></font>
  stage: test<font></font>
  script:<font></font>
    - npm run test<font></font>
<font></font>
deploy_production:<font></font>
  stage: deploy<font></font>
  only:<font></font>
    - master<font></font>
  before_script:<font></font>
    - "which ssh-agent || ( apt-get update -y &amp;&amp; apt-get install openssh-client -y )"<font></font>
    - mkdir -p ~/.ssh<font></font>
    - eval $(ssh-agent -s)<font></font>
    - '[[ -f /.dockerenv ]] &amp;&amp; echo -e "Host *\n\tStrictHostKeyChecking no\n\n" &gt; ~/.ssh/config'<font></font>
    - ssh-add &lt;(echo "$SSH_PRIVATE_KEY")<font></font>
    - apt-get update -y<font></font>
    - apt-get -y install rsync<font></font>
  script:<font></font>
    - ssh -p22 dev@example.com "mkdir -p /var/www/example.com/index_tmp"<font></font>
    - rsync -rav -e ssh --exclude='.git/' --exclude='.gitlab-ci.yml' --delete-excluded ./ dev@example.com:/var/www/example.com/index_tmp<font></font>
    - ssh -p22 dev@example.com "mv /var/www/example.com/index /var/www/example.com/index_old &amp;&amp; mv /var/www/example.com/index_tmp /var/www/example.com/index"<font></font>
    - ssh -p22 dev@example.com "rm -rf /var/www/example.com/index_old"<font></font>
    - ssh -p22 dev@example.com "pm2 restart landing-page"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是任务运行器日志中的最后8行左右：</font></font></p>

<pre><code>[... rsync output ...]<font></font>
sent 193,022,347 bytes  received 550,996 bytes  9,003,411.30 bytes/sec<font></font>
total size is 191,108,661  speedup is 0.99<font></font>
$ ssh -p22 dev@example.com "mv /var/www/example.com/index /var/www/example.com/index_old &amp;&amp; mv /var/www/example.com/index_tmp /var/www/example.com/index"<font></font>
$ ssh -p22 dev@example.com "rm -rf /var/www/example.com/index_old"<font></font>
$ ssh -p22 dev@example.com "pm2 restart landing-page"<font></font>
bash: pm2: command not found<font></font>
ERROR: Job failed: exit code 1<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，如果我直接连接到远程服务器并运行，</font></font><code>pm2 restart landing-page</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将得到以下结果：</font></font></p>

<pre><code>dev@example.com:~$ pm2 restart landing-page<font></font>
Use --update-env to update environment variables<font></font>
[PM2] Applying action restartProcessId on app [landing-page](ids: 0)<font></font>
[PM2] [landing-page](0) ✓<font></font>
┌──────────────┬────┬─────────┬──────┬───────┬────────┬─────────┬────────┬─────┬──────────┬──────┬──────────┐<font></font>
│ App name     │ id │ version │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem      │ user │ watching │<font></font>
├──────────────┼────┼─────────┼──────┼───────┼────────┼─────────┼────────┼─────┼──────────┼──────┼──────────┤<font></font>
│ landing-page │ 0  │ 0.33.11 │ fork │ 18174 │ online │ 2       │ 0s     │ 0%  │ 7.6 MB   │ dev  │ disabled │<font></font>
└──────────────┴────┴─────────┴──────┴───────┴────────┴─────────┴────────┴─────┴──────────┴──────┴──────────┘<font></font>
 Use `pm2 show &lt;id|name&gt;` to get more details about an app<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，最后，如果一切正常，为什么最后一个命令不起作用，我完全迷失了</font></font><code>rsync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为我确实检查了一下，并在远程服务器中更改了文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你们对如何解决这个问题有想法吗？</font><font style="vertical-align: inherit;">我将不胜感激！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的阅读，也感谢您的宝贵时间。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4116篇《Gitlab CI部署失败：gitlab-ci.yml运行期间“ bash：pm2：命令未找到”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是因为您的SSH呼叫是直接内联的。</font><font style="vertical-align: inherit;">没有源的.bash_aliases或.bash_rc文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使pm2正常工作，应使用完整路径进行调用。</font><font style="vertical-align: inherit;">为此，请使用以下命令直接在远程服务器上检查您的pm2位置：</font></font></p>

<pre><code>whereis pm2<font></font>
# Output something like /usr/bin/pm2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用先前给出的完整路径进行SSH调用：</font></font></p>

<pre><code> script:<font></font>
    - ...<font></font>
    - ssh -p22 dev@example.com "/usr/bin/pm2 restart landing-page"<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
