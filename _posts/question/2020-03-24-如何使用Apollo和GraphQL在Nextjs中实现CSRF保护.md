---
layout: question
title:  如何使用Apollo和GraphQL在Nextjs中实现CSRF保护
date:   2020-03-24T03:15:00.000Z
description: 在Nextjs存储库中的此示例之后，我想实现CSRF保护（也许使用csurf程序包），因为我正在使用带有Express-Session的会话ID Cook...
img: 
author: 古一Green
category: question
answer: 2
tags: graphql React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nextjs存储库中的</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-apollo-auth" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font><font style="vertical-align: inherit;">，我想实现CSRF保护（也许使用</font></font><a href="https://github.com/expressjs/csurf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">csurf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序包），因为我正在使用带有Express-Session的会话ID Cookie。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试在自定义服务器中设置csurf并将生成的令牌保存在res.locals.csrfToken中，该页面在第一次加载时就可以通过示例中/lib/withApollo.js中的静态方法“ getInitialProps”获取链接。</font><font style="vertical-align: inherit;">一旦我尝试更改页面（带有链接）或尝试使用apollo（例如登录）发出发布请求，服务器便更改了csrf令牌，因此Apollo使用的令牌不再有用，因此我得到了“ csrf无效”错误。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有csurf配置的自定义服务器</font></font></strong></p>

<pre><code>const csrf = require('csurf');<font></font>
const csrfProtection = csrf();<font></font>
////express-session configuration code////<font></font>
app.use(csrfProtection);<font></font>
app.use((req, res, next) =&gt; {<font></font>
    res.locals.csrfToken = req.csrfToken();<font></font>
next();<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/lib/initApollo.js</font></font></strong></p>

<pre><code>function create(initialState, { getToken, cookies, csrfToken }) {<font></font>
  const httpLink = createHttpLink({<font></font>
    uri: "http://localhost:3000/graphql",<font></font>
    credentials: "include"<font></font>
  });<font></font>
<font></font>
    const authLink = setContext((_, { headers }) =&gt; {<font></font>
    const token = getToken();<font></font>
    return {<font></font>
      headers: {<font></font>
        ...headers,<font></font>
        authorization: token ? `Bearer ${token}` : "",<font></font>
        Cookie: cookies ? cookies : "",<font></font>
        "x-xsrf-token": csrfToken ? csrfToken : ""<font></font>
      }<font></font>
    };<font></font>
  });<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/lib/withApollo.js</font></font></strong></p>

<pre><code>static async getInitialProps(ctx) {<font></font>
  const {<font></font>
    Component,<font></font>
    router,<font></font>
    ctx: { req, res }<font></font>
  } = ctx;<font></font>
  const apollo = initApollo(<font></font>
    {},<font></font>
    {<font></font>
      getToken: () =&gt; parseCookies(req).token,<font></font>
      cookies: req ? req.headers.cookie : "",<font></font>
      csrfToken: res ? res.locals.csrfToken : document.cookie<font></font>
    }<font></font>
  );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此配置，可以保护每条路由免受csrf的侵害，但是服务器上创建的令牌通常会更改，并且Apollo无法在需要时立即检索更新的令牌，因此第一次加载成功，但是随后的页面更改（链接）或任何发布请求失败，因为令牌已更改。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3293篇《如何使用Apollo和GraphQL在Nextjs中实现CSRF保护》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LStafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过如此多的浏览，我终于能够发送csrf cookie。</font><font style="vertical-align: inherit;">我认为问题在于单词</font></font><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。当您使用return时，它会排除cookie。</font><font style="vertical-align: inherit;">这是我通过编辑所做的</font></font><code>/lib/initApollo.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
函数create（initialState，{getToken，Cookies，csrfToken}）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  const httpLink = createHttpLink（{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    uri：“ http：// localhost：3000 / graphql”，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    凭据：“包括”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  }）;</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    const authLink = setContext（（_，{headers}）=&gt; {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    const token = getToken（）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    返回{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      标头：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ...标题</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        授权：令牌？</font><font style="vertical-align: inherit;">`Bearer $ {token}`：“”，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        “ x-xsrf-token”：csrfToken？</font><font style="vertical-align: inherit;">csrfToken：“”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      饼干： {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ...饼干</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    };</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  }）;</font></font><font></font>
<font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e！</font><font style="vertical-align: inherit;">但是，SSR没有cookie。</font><font style="vertical-align: inherit;">我认为我们应该有两个来自客户端的端点，另一个应该是SSR。</font><font style="vertical-align: inherit;">SSR网址可以被csrf豁免。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是您要寻找的答案。</font><font style="vertical-align: inherit;">我在</font></font><a href="https://stackoverflow.com/questions/21357182/csrf-token-necessary-when-using-stateless-sessionless-authentication"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">读到</font><font style="vertical-align: inherit;">，如果您使用的是JWT，则不需要CSRFToken。</font><font style="vertical-align: inherit;">尚不确定，但目前唯一可行的方法。</font></font></p>

<p><a href="https://stackoverflow.com/users/1321564/benjamin-m"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本杰明M</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了一些关于CSRF +不使用cookie进行身份验证的信息：</font></font></p>

<p><a href="https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
“由于您不依赖Cookie，因此无需防御跨站点请求”</font></font></p>

<p><a href="http://angular-tips.com/blog/2014/05/json-web-tokens-introduction/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://angular-tips.com/blog/2014/05/json-web-tokens-introduction/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
“如果我们采用cookie方式，则确实需要执行CSRF以避免跨站点请求。这是我们可以做到的事情就会忘记使用JWT的时间。” </font><font style="vertical-align: inherit;">（JWT = Json Web令牌，这是针对无状态应用程序的基于令牌的身份验证）</font></font></p>

<p><a href="http://www.jamesward.com/2013/05/13/securing-single-page-apps-and-rest-services" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jamesward.com/2013/05/13/securing-single-page-apps-and-rest-services</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
“在不冒CSRF漏洞风险的情况下进行身份验证的最简单方法是避免使用Cookie来识别用户”</font></font></p>

<p><a href="http://sitr.us/2011/08/26/cookies-are-bad-for-you.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sitr.us/2011/08/26/cookies-are-bad-for-you.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
“ CSRF的最大问题是cookie绝对无法抵御此类攻击。如果您使用cookie身份验证，您还必须采取其他措施来防止CSRF。您可以采取的最基本的预防措施是，确保您的应用程序永远不会响应GET请求而产生任何副作用。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有很多页面，如果您不使用Cookie进行身份验证，则表明您不需要任何CSRF保护。</font><font style="vertical-align: inherit;">当然，您仍然可以将Cookie用于其他所有内容，但要避免在其中存储诸如session_id之类的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全文在这里：</font></font><a href="https://stackoverflow.com/questions/21357182/csrf-token-necessary-when-using-stateless-sessionless-authentication"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Stateless（= Sessionless）身份验证时需要CSRF令牌吗？</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
