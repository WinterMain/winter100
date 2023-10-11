---
layout: question
title:  请求以开发模式localhost从Next.js应用程序在不同端口上运行的Graphql API
date:   2020-03-24T07:54:56.000Z
description: 我目前正在将现有应用程序从create-react-app切换到next.js，除了我的api端点在端口4000上的另一个节点应用程序上运行之外，其他一切...
img: 
author: 村村番长
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在将现有应用程序从create-react-app切换到next.js，除了我的api端点在端口4000上的另一个节点应用程序上运行之外，其他一切似乎都能正常运行，而我无法从next.js应用程序访问。</font><font style="vertical-align: inherit;">我遵循了仓库中的示例，但是我无法使其正常工作。在生产中，我毫无疑问地使用nginx作为反向代理，但是我处于开发模式。</font><font style="vertical-align: inherit;">要使用Redux设置Apollo，请遵循以下示例：</font></font><a href="https://github.com/zeit/next.js/tree/master/examples/with-apollo-and-redux" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with-apollo-and-redux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于代理，我将本示例</font><a href="https://github.com/zeit/next.js/tree/master/examples/with-custom-reverse-proxy" rel="nofollow noreferrer"><font style="vertical-align: inherit;">与</font></a><a href="https://github.com/zeit/next.js/tree/master/examples/with-apollo-and-redux" rel="nofollow noreferrer"><font style="vertical-align: inherit;">-custom </font></a></font><a href="https://github.com/zeit/next.js/tree/master/examples/with-custom-reverse-proxy" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-reverse-proxy一起使用</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道，我正在做错事，但现在无法解决</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在initApollo.js中</font></font></p>

<pre><code>...    <font></font>
function create() {<font></font>
      return new ApolloClient({<font></font>
        ssrMode: !process.browser,<font></font>
        networkInterface: createNetworkInterface({<font></font>
          uri: "/api" <font></font>
        })<font></font>
      });<font></font>
    }<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在server.js中</font></font></p>

<pre><code>...    <font></font>
const devProxy = {<font></font>
      "/api/": {<font></font>
        target: "http://localhost:4000/api/",<font></font>
        changeOrigin: true<font></font>
      }<font></font>
    };<font></font>
<font></font>
    app<font></font>
      .prepare()<font></font>
      .then(() =&gt; {<font></font>
        const server = express();<font></font>
<font></font>
        if (dev &amp;&amp; devProxy) {<font></font>
          const proxyMiddleware = require('http-proxy-middleware')<font></font>
          Object.keys(devProxy).forEach(function (context) {<font></font>
            server.use(proxyMiddleware(context, devProxy[context]))<font></font>
          })<font></font>
        }<font></font>
<font></font>
        server.all("*", (req, res) =&gt; handle(req, res));<font></font>
<font></font>
        server.listen(3000, err =&gt; {<font></font>
          if (err) throw err;<font></font>
          console.log("&gt; Ready on http://localhost:3000");<font></font>
        });<font></font>
      })<font></font>
      .catch(ex =&gt; {<font></font>
        console.error(ex.stack);<font></font>
        process.exit(1);<font></font>
      });<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3481篇《请求以开发模式localhost从Next.js应用程序在不同端口上运行的Graphql API》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我终于发现了，被这个问题</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">涉及Next.js或阿波罗的客户端。</font><font style="vertical-align: inherit;">但是，这全都与我的服务器在端口4000上运行（我的graphql服务器）有关。</font><font style="vertical-align: inherit;">我必须处理CORS和</font></font><code>express-graphql</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为默认情况下不支持</font><font style="vertical-align: inherit;">的快速中间件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我将以下内容添加到运行graphql的服务器中</font></font></p>

<pre><code>app.use("/api", function(req, res, next) {<font></font>
  res.header("Access-Control-Allow-Origin", "*");<font></font>
  res.header(<font></font>
    "Access-Control-Allow-Headers",<font></font>
    "Content-Type, Authorization, Content-Length, X-Requested-With"<font></font>
  );<font></font>
  if (req.method === "OPTIONS") {<font></font>
    res.sendStatus(200);<font></font>
  } else {<font></font>
    next();<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且在apollo客户端中，我不得不将绝对路径放置到我的api服务器上</font></font></p>

<pre><code>networkInterface: createNetworkInterface({<font></font>
      uri: "http://localhost:4000/api/"<font></font>
    })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而已 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
