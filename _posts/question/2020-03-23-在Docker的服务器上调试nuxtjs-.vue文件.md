---
layout: question
title:  在Docker的服务器上调试nuxtjs .vue文件
date:   2020-03-23T04:06:12.000Z
description: 我目前有一个nuxt应用程序设置为一个通用应用程序，在其中使用Docker托管。我已经完成了几乎所有的工作，调试器附加并找到了遍历中间件和api调用的局部...
img: 
author: 猴子
category: question
answer: 0
tags: Node.js的 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前有一个nuxt应用程序设置为一个通用应用程序，在其中使用Docker托管。</font><font style="vertical-align: inherit;">我已经完成了几乎所有的工作，调试器附加并找到了遍历中间件和api调用的局部变量，但是在调试</font><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">的</font></font><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法时，</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看不到任何局部变量，并且断点不断移至该</font></font><code>.catch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24180/images/thumbnails/1584936245625.png" data-src="https://www.samyoc.com//uploads/users/24180/images/1584936245625.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/vCoi9.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在当前上下文中，我还得到了一堆其他随机的东西，在这种情况下为“模块”？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也将此行添加到了我的</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，以确保它使用了正确的源映射：</font></font></p>

<pre><code>     /*<font></font>
  ** Build configuration<font></font>
  */<font></font>
  build: {<font></font>
    /*<font></font>
    ** You can extend webpack config here<font></font>
    */<font></font>
    extend(config, ctx) {<font></font>
      console.log(`IsClient: ${ctx.isClient}`);<font></font>
      console.log(`isDev: ${ctx.isDev}`);<font></font>
      if (ctx.isDev) { <font></font>
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也是我的</font></font><code>.vscode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置：</font></font></p>

<pre><code>{<font></font>
    // Use IntelliSense to learn about possible attributes.<font></font>
    // Hover to view descriptions of existing attributes.<font></font>
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387<font></font>
    "version": "0.2.0",<font></font>
    "configurations": [<font></font>
        {<font></font>
            "name": "Docker: Attach to Node",<font></font>
            "type": "node",<font></font>
            "request": "attach",<font></font>
            "remoteRoot": "/usr/share/nginx/app",<font></font>
            "port": 9229,<font></font>
            "address": "localhost",<font></font>
            "localRoot": "${workspaceFolder}/app",<font></font>
            "protocol": "inspector",<font></font>
            "restart": true,<font></font>
            "sourceMaps": true<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，这是我用来启动容器的命令：</font></font></p>

<pre><code> node --inspect=0.0.0.0:9229 \<font></font>
            ./node_modules/.bin/nuxt \<font></font>
            &amp; nginx -g "daemon off;" \<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从编译以来，我尝试了许多不同的方法，包括使用babel-register并从babel-node启动它，但是这些方法都无效。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里想念什么吗？</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建通用应用程序时，</font><font style="vertical-align: inherit;">我们可以不调试</font><font style="vertical-align: inherit;">服务器上的文件吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我改用Webstorm，无论出于何种原因，调试都可以正常进行。</font><font style="vertical-align: inherit;">我想那是使用IDE和文本编辑器之间的区别。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2791篇《在Docker的服务器上调试nuxtjs .vue文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
