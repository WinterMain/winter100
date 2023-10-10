---
layout: question
title:  使用NextJS Link时ExpressJS中间件不起作用
date:   2020-03-24T02:07:54.000Z
description: 我在下一个示例中使用了Express路由，在下面的示例中/a，授权用户可以访问下面的示例，而它/b是公共的。... other imports......
img: 
author: 斯丁前端
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在下一个示例中使用了Express路由，在下面的示例中</font></font><code>/a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，授权用户可以访问</font><font style="vertical-align: inherit;">下面的示例</font><font style="vertical-align: inherit;">，而它</font></font><code>/b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是公共的。</font></font></p>

<pre><code>... other imports...<font></font>
const app = next({ isDev })<font></font>
const handle = app.getRequestHandler()<font></font>
<font></font>
async function isAuth(req, res, next) {<font></font>
  const token = req.header('x-Auth-Token');<font></font>
  if (!token) return res.status(401).send('Access denied. No token provided.');<font></font>
<font></font>
  req.user = 'Connected!';<font></font>
  next();<font></font>
}<font></font>
<font></font>
app.prepare().then(() =&gt; {<font></font>
  const server = express()<font></font>
<font></font>
  server.get('/a', isAuth, async (req, res) =&gt; {<font></font>
    return app.render(req, res, '/a', req.query)<font></font>
  })<font></font>
<font></font>
  server.get('/b', async (req, res) =&gt; {<font></font>
    return app.render(req, res, '/b', req.query)<font></font>
  })<font></font>
<font></font>
  server.all('*', (req, res) =&gt; {<font></font>
    return handle(req, res)<font></font>
  })<font></font>
<font></font>
  server.listen(port, err =&gt; {<font></font>
    if (err) throw err<font></font>
    console.log(`&gt; Ready on http://localhost:${port}`)<font></font>
  })<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单明了，目前</font></font><code>/a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">网页中</font><font style="vertical-align: inherit;">的</font></font><code>&lt;Link href="/a"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我</font><font style="vertical-align: inherit;">现在已正确</font><font style="vertical-align: inherit;">使用浏览器的网址栏</font><font style="vertical-align: inherit;">拒绝访问</font></font><code>/b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后页面显示隐藏的内容，而我的访问权限尚未检查...为什么？</font><font style="vertical-align: inherit;">我该如何解决这个问题？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用此</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/custom-server-express" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来复制此问题</font><font style="vertical-align: inherit;">，您只需要</font></font><code>isAuth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像在上面</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">示例中所做的那样</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">示例即可。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Eva小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Next.JS </font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作原理的一部分。</font><font style="vertical-align: inherit;">它已经预取了即将到来的站点的源，而从未针对真实的端点进行取回，因此您需要针对当前情况实施前端和后端检查。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请随时关注Next.JS Github问题：</font></font><a href="https://github.com/zeit/next.js/issues/4029" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github NextJs受限链接中的讨论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它清楚地说明了如何处理这种情况。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
