---
layout: question
title:  JWT（JSON Web令牌）自动延长有效期
date:   2020-03-16T14:19:16.000Z
description: 我想对我们的新REST API实施基于JWT的身份验证。但是，由于在令牌中设置了有效期，是否可以自动延长有效期？我不希望用户在此期间正在使用该应用程序的情...
img: 
author: 西门西门
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想对我们的新REST API实施基于JWT的身份验证。</font><font style="vertical-align: inherit;">但是，由于在令牌中设置了有效期，是否可以自动延长有效期？</font><font style="vertical-align: inherit;">我不希望用户在此期间正在使用该应用程序的情况下，每隔X分钟登录一次。</font><font style="vertical-align: inherit;">那将是巨大的用户体验失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，延长有效期将创建一个新令牌（旧令牌在过期之前仍然有效）。</font><font style="vertical-align: inherit;">在每个请求之后生成一个新令牌对我来说听起来很愚蠢。</font><font style="vertical-align: inherit;">当多个令牌同时有效时，听起来像一个安全问题。</font><font style="vertical-align: inherit;">当然，我可以使用黑名单来使旧的使用过的无效，但我需要存储令牌。</font><font style="vertical-align: inherit;">JWT的好处之一是无需存储。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现Auth0如何解决它。</font><font style="vertical-align: inherit;">它们不仅使用JWT令牌，而且还使用刷新令牌：</font><a href="https://docs.auth0.com/refresh-token"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://docs.auth0.com/refresh-token"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.auth0.com/refresh-token</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是同样，要实现此功能（不使用Auth0），我需要存储刷新令牌并保持其过期。</font><font style="vertical-align: inherit;">那么，真正的好处是什么？</font><font style="vertical-align: inherit;">为什么不只有一个令牌（而不是JWT）并在服务器上保留到期时间？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他选择吗？</font><font style="vertical-align: inherit;">使用JWT是否不适合这种情况？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1842篇《JWT（JSON Web令牌）自动延长有效期》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯ANear</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过在令牌数据中添加变量来解决此问题：</font></font></p>

<pre><code>softexp - I set this to 5 mins (300 seconds)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将</font></font><code>expiresIn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为所需的时间，然后用户将被迫再次登录。</font><font style="vertical-align: inherit;">我的设定为30分钟。</font><font style="vertical-align: inherit;">该值必须大于的值</font></font><code>softexp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我的客户端应用向服务器API发送请求时（需要令牌，例如，客户列表页面），服务器会根据其原始到期（</font></font><code>expiresIn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）值</font><font style="vertical-align: inherit;">检查提交的令牌是否仍然有效</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果无效，服务器将以特定于此错误的状态响应，例如。</font></font><code>INVALID_TOKEN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果令牌基于</font></font><code>expiredIn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">仍然有效</font><font style="vertical-align: inherit;">，但已超过该</font></font><code>softexp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，则服务器将针对此错误以单独的状态响应，例如。</font></font><code>EXPIRED_TOKEN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>(Math.floor(Date.now() / 1000) &gt; decoded.softexp)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在客户端，如果收到</font></font><code>EXPIRED_TOKEN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应，它应该通过向服务器发送续订请求来自动续订令牌。</font><font style="vertical-align: inherit;">这对用户是透明的，并会自动处理客户端应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器中的续订方法必须检查令牌是否仍然有效：</font></font></p>

<pre><code>jwt.verify(token, secret, (err, decoded) =&gt; {})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果上述方法失败，服务器将拒绝续订令牌。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEvaDavaid</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是撤销JWT访问令牌的步骤：  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）登录后，发送2个令牌（访问令牌，刷新令牌）作为对client的响应。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2）访问令牌的有效期将更少，而刷新将具有较长的到期时间。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
3）客户端（前端）将在其本地存储中存储刷新令牌，并在cookie中访问令牌。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
4）客户端将使用访问令牌来调用api。</font><font style="vertical-align: inherit;">但是，当它过期时，请从本地存储中选择刷新令牌，然后调用auth服务器api以获取新令牌。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
5）您的身份验证服务器将公开一个api，它将接受刷新令牌并检查其有效性并返回新的访问令牌。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
6）一旦刷新令牌过期，用户将被注销。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要更多详细信息，请让我知道，我也可以共享代码（Java + Spring引导）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，很多人选择做与JWTs会话管理没有意识到他们正在放弃了的缘故</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感觉</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单。</font><font style="vertical-align: inherit;">我的回答详细说明了问题的第二部分：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，真正的好处是什么？</font><font style="vertical-align: inherit;">为什么不只有一个令牌（而不是JWT）并在服务器上保留到期时间？</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他选择吗？</font><font style="vertical-align: inherit;">使用JWT是否不适合这种情况？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JWT能够支持基本的会话管理，但有一些限制。</font><font style="vertical-align: inherit;">作为自描述令牌，它们在服务器端不需要任何状态。</font><font style="vertical-align: inherit;">这使它们具有吸引力。</font><font style="vertical-align: inherit;">例如，如果服务没有持久层，则不需要仅将其引入会话管理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，无国籍也是其缺点的主要原因。</font><font style="vertical-align: inherit;">由于它们仅以固定的内容和到期时间发布一次，因此您无法使用典型的会话管理设置来完成您想要的事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即，您不能按需使它们失效。</font><font style="vertical-align: inherit;">这意味着您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法实施安全登出，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为没有办法使已经发出的令牌过期。</font><font style="vertical-align: inherit;">同样，您也</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法实现空闲超时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一种解决方案是保留黑名单，但这会引入状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一篇</font></font><a href="https://www.securitydrops.com/session-management/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，详细</font><a href="https://www.securitydrops.com/session-management/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">解释了这些缺点</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">明确地说，您可以通过增加更多的复杂性（滑动会话，刷新令牌等）来解决这些问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于其他选项，如果您的客户仅通过浏览器与您的服务进行交互，我强烈建议您使用基于cookie的会话管理解决方案。</font><font style="vertical-align: inherit;">我还</font></font><a href="https://www.securitydrops.com/the-web-api-authentication-guide/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">汇编了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前在网络上广泛使用</font><a href="https://www.securitydrops.com/the-web-api-authentication-guide/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">的列表身份验证方法</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法怎么样：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于每个客户端请求，服务器都会将令牌的到期时间与（currentTime-lastAccessTime）进行比较</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">expirationTime &lt;（currentTime-lastAccessedTime）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将最后一个lastAccessedTime更改为currentTime。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果浏览器上的闲置时间超过expirationTime或关闭了浏览器窗口并且</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">expirationTime&gt;（currentTime-lastAccessedTime）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则服务器可以使令牌到期并要求用户再次登录。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，我们不需要其他端点来刷新令牌。</font><font style="vertical-align: inherit;">将不胜感激。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的问题-问题本身就有大量的信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章“ </font></font><a href="https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新令牌：何时使用它们以及它们如何与JWT交互”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为这种情况提供了一个很好的主意。</font><font style="vertical-align: inherit;">一些要点是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新令牌携带获取新访问令牌所需的信息。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新令牌也可以过期，但寿命很长。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新令牌通常要遵守严格的存储要求，以确保它们不会泄漏。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">授权服务器也可以将它们列入黑名单。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还看看</font></font><a href="https://github.com/auth0/angular-jwt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">auth0 / angular-jwt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> angularjs</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Web API。</font><a href="http://bitoftech.net/2014/07/16/enable-oauth-refresh-tokens-angularjs-app-using-asp-net-web-api-2-owin/" rel="noreferrer"><font style="vertical-align: inherit;">使用ASP .NET Web API 2和Owin</font></a><font style="vertical-align: inherit;">阅读</font></font><a href="http://bitoftech.net/2014/07/16/enable-oauth-refresh-tokens-angularjs-app-using-asp-net-web-api-2-owin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在AngularJS App中启用OAuth刷新令牌</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在后端使用RESTful API将我们的应用程序迁移到HTML5时，我在做些修改。</font><font style="vertical-align: inherit;">我想到的解决方案是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功登录后，将向客户端颁发令牌，令牌的会话时间为30分钟（或任何通常的服务器端会话时间）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建了一个客户端计时器，以调用服务以在令牌到期之前对其进行续订。</font><font style="vertical-align: inherit;">新令牌将替换将来调用中的现有令牌。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，这减少了频繁刷新令牌请求。</font><font style="vertical-align: inherit;">如果用户在触发续订令牌调用之前关闭浏览器/应用程序，则前一个令牌将及时过期，用户将必须重新登录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以实施更复杂的策略来满足用户的不活动（例如忽略打开的浏览器选项卡）。</font><font style="vertical-align: inherit;">在这种情况下，续签令牌调用应包括预期的到期时间，该时间不应超过定义的会话时间。</font><font style="vertical-align: inherit;">应用程序将必须相应地跟踪上一次用户交互。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不喜欢设置长时间有效的想法，因此这种方法可能不适用于需要较少身份验证的本机应用程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您自己处理身份验证（即，不使用Auth0这样的提供程序），则可以使用以下方法：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发行JWT令牌的有效期相对较短，例如15分钟。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序在任何需要令牌的交易之前检查令牌的到期日期（令牌包含到期日期）。</font><font style="vertical-align: inherit;">如果令牌已过期，则它首先要求API“刷新”令牌（对UX透明地完成）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API获取令牌刷新请求，但首先检查用户数据库以查看是否已针对该用户配置文件设置了“ reauth”标志（令牌可以包含用户ID）。</font><font style="vertical-align: inherit;">如果存在该标志，则令牌刷新被拒绝，否则发出新令牌。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，当用户重置密码时，将在数据库后端设置“ reauth”标志。</font><font style="vertical-align: inherit;">当用户下次登录时，该标志将被删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，假设您有一项政策，即用户必须每72小时至少登录一次。</font><font style="vertical-align: inherit;">在这种情况下，您的API令牌刷新逻辑还将从用户数据库检查用户的上次登录日期，并在此基础上拒绝/允许令牌刷新。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Auth0工作，并参与了刷新令牌功能的设计。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这完全取决于应用程序的类型，这是我们推荐的方法。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络应用</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个好的模式是在令牌过期之前刷新它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将令牌到期时间设置为一周，并在用户每次打开Web应用程序时以及每小时一小时刷新令牌。</font><font style="vertical-align: inherit;">如果用户超过一个星期没有打开应用程序，则他们将不得不再次登录，这是可以接受的Web应用程序UX。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要刷新令牌，您的API需要一个新的终结点，该终结点将接收有效的，未到期的JWT，并返回带有新到期字段的相同签名的JWT。</font><font style="vertical-align: inherit;">然后，Web应用程序会将令牌存储在某处。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动/本机应用</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数本机应用程序仅登录一次。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法是，刷新令牌永远不会过期，并且可以始终将其交换为有效的JWT。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永不过期的令牌的问题在于，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着永不。</font><font style="vertical-align: inherit;">如果手机丢了怎么办？</font><font style="vertical-align: inherit;">因此，它需要以某种方式由用户识别，并且应用程序需要提供一种撤消访问的方法。</font><font style="vertical-align: inherit;">我们决定使用设备的名称，例如“ maryo的iPad”。</font><font style="vertical-align: inherit;">然后，用户可以转到该应用程序并撤消对“ maryo的iPad”的访问权限。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是在特定事件上撤销刷新令牌。</font><font style="vertical-align: inherit;">一个有趣的事件是更改密码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们认为JWT在这些用例中没有用，因此我们使用随机生成的字符串并将其存储在自己的一边。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使JWT无效且在后端没有任何其他安全存储的替代解决方案是</font></font><code>jwt_version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在users表上</font><font style="vertical-align: inherit;">实现新的</font><font style="vertical-align: inherit;">整数列。</font><font style="vertical-align: inherit;">如果用户希望注销或使现有令牌过期，则只需增加该</font></font><code>jwt_version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成新的JWT时，请将编码</font></font><code>jwt_version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为JWT有效负载，如果新的JWT应该替换所有其他JWT，则可以选择预先增加该值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证JWT时，该</font></font><code>jwt_version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段会与和进行比较，</font></font><code>user_id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且仅当匹配时才授予授权。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小宇宙十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上是使用Guzzle客户端在PHP中实现此操作的，以为api创建客户端库，但该概念应适用于其他平台。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我发行两个令牌，一个短（5分钟），一个长令牌，该令牌在一周后到期。</font><font style="vertical-align: inherit;">如果客户端库收到对某个请求的401响应，则使用中间件尝试对短令牌进行一次刷新。</font><font style="vertical-align: inherit;">然后，它将再次尝试原始请求，如果能够刷新，则对用户透明地获得正确的响应。</font><font style="vertical-align: inherit;">如果失败，它将仅将401发送给用户。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果短令牌已过期，但仍然是真实的，而长令牌是有效且可靠的，它将使用长令牌认证的服务上的特殊端点刷新短令牌（这是唯一的用途）。</font><font style="vertical-align: inherit;">然后它将使用短令牌获得新的长令牌，从而在每次刷新短令牌时将其延长一周。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法还允许我们在最多5分钟内撤消访问权限，这对于我们的使用是可以接受的，而不必存储令牌的黑名单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后期编辑：在重新读了几个月之后，我需要重新阅读，我应该指出，您可以在刷新短令牌时撤消访问权限，因为它提供了进行更昂贵调用的机会（例如，调用数据库以查看用户是否已被禁止），而无需在每次致电您的服务时付费。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
