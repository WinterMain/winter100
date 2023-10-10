---
layout: question
title:  使用端口80（Ubuntu / Linode）运行Node.js的最佳实践
date:   2020-03-20T02:43:44.000Z
description:                                                                          ...
img: 
author: 达蒙逆天JinJin
category: question
answer: 2
tags: linux Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/16573668/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2016-06-22 23：43：06Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在上设置了我的第一台</font></font><code>Node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器，</font></font><code>cloud Linux node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而我对的细节还很陌生</font></font><code>Linux admin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（顺便说一句，我不想​​同时使用Apache。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切都已正确安装，但我发现除非使用，否则</font></font><code>root login</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法监听</font></font><code>port 80</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node。</font><font style="vertical-align: inherit;">但是出于安全原因，我宁愿不以超级用户身份运行它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳做法是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为节点设置良好的权限/用户，使其安全/沙盒化？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许在这些限制内使用端口80。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动节点并自动运行它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理发送到控制台的日志信息。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何其他常规维护和安全问题。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该将端口80流量转发到其他监听端口吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2454篇《使用端口80（Ubuntu / Linode）运行Node.js的最佳实践》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">授予安全用户使用端口80的权限</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，我们不希望以root用户身份运行您的应用程序，但是有一个麻烦：您的安全用户没有使用默认HTTP端口（80）的权限。</font><font style="vertical-align: inherit;">您的目标是通过导航到易于使用的网址（例如，</font></font><code>http://ip:port/</code></p>

<p>Unfortunately, unless you sign on as root, you’ll normally have to use a URL like <code>http://ip:port</code> - where port number &gt; 1024.</p>

<p>A lot of people get stuck here, but the solution is easy. There a few options but this is the one I like. Type the following commands:</p>

<pre><code>sudo apt-get install libcap2-bin<font></font>
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``<font></font>
</code></pre>

<p>Now, when you tell a Node application that you want it to run on port 80, it will not complain.</p>

<p>Check this <a href="https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps#give-safe-user-permission-to-use-port-80" rel="noreferrer">reference link</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">港口80</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在云实例上执行的操作是使用以下命令将端口80重定向到端口3000：</font></font></p>

<pre><code>sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我在端口3000上启动Node.js。对端口80的请求将映射到端口3000。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还应该编辑</font></font><code>/etc/rc.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并添加减去的那一行</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将在计算机启动时添加重定向。</font><font style="vertical-align: inherit;">您不需要</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>/etc/rc.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为其中的命令是</font></font><code>root</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在系统引导时</font><font style="vertical-align: inherit;">运行的</font><font style="vertical-align: inherit;">。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日志</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://npmjs.org/package/forever"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">forever</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块启动您的Node.js。</font><font style="vertical-align: inherit;">如果崩溃，它将确保重新启动，并将控制台日志重定向到文件。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开机启动</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的Node.js启动脚本添加到您为端口重定向编辑的文件中</font></font><code>/etc/rc.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">系统启动时，它将运行您的Node.js启动脚本。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Digital Ocean和其他VPS</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不仅适用于Linode，而且适用于Digital Ocean，AWS EC2和其他VPS提供商。</font><font style="vertical-align: inherit;">但是，基于RedHat的系统</font></font><code>/etc/rc.local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>/ect/rc.d/local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
