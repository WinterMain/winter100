---
layout: post
title:  Cookies 和 iframe
date:   2021-01-22T03:28:27.000Z
description: 在嵌入三方应用并使用三方登录时经常会遇到iframe中使用cookie的场景。比如网站嵌入了第三方评论模块，评论模块登录会打个一个iframe，iframe会加...
img: 
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><blockquote><p>在嵌入三方应用并使用三方登录时经常会遇到iframe中使用cookie的场景。比如网站嵌入了第三方评论模块，评论模块登录会打个一个iframe，iframe会加载相应的登录页面，我们在iframe中登录完成后，登录态写入cookie，关闭iframe后，三方登录模块会发起请求获取登录数据，完成登录操作。在以前或许一切都会运行正常，但是在各个新版的浏览器（Chrome等）iframe不会向服务器发送cookie了。</p></blockquote><p>&nbsp;</p><p>这个问题也是困扰我挺久的，主要是不久前iframe还是能够正常读取cookie并发送给服务器。现在由于部分浏览器的安全性能升级，iframe在未做一些配置之前是不会读取并发送cookie了。</p><p>&nbsp;</p><h2>解决方案</h2><pre><code class="language-plaintext">Set-Cookie: session=your_session; SameSite=None; Secure </code></pre><p>&nbsp;</p><p>你需要修改服务器，将cookie设置为attributeSameSite = None，同时还包括属性Secure。</p><p>&nbsp;</p><h2><strong>原因</strong></h2><p>现在问题已经解决了，我们可以看下为什么会引起这个问题</p><p>&nbsp;</p><h3><strong>同源和三方Cookie</strong></h3><p>与当前站点的域匹配的cookie被称为第一方cookie。来自当前站点以外的域的cookie称为第三方cookie。</p><p>长期以来，两种cookie均一视同仁：每次您请求一个URL时，该URL的所有cookie都随请求一起发送。与此行为相关的各种问题：</p><ol><li>1. 允许跨站点请求伪造（<a href="https://owasp.org/www-community/attacks/csrf">CSRF</a>）攻击。</li></ol><ul><li>2. 给请求增加开销，发送可能不需要的东西。</li></ul><ol><li>3. 可用于跟踪多个站点上的用户活动</li><li>&nbsp;</li></ol><h2><strong>通过</strong><code><strong>SameSite</strong></code><strong>属性说明Cookie的使用情况</strong></h2><p><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00">RFC6265bis</a>为cookie定义了一个新属性：<code>SameSite</code>。此属性允许你声明你的cookie是否应限制在第一方或同一站点上下文中。可能的值：</p><ol><li><code>None</code>：Cookie也将在第三方环境中发送。</li><li><code>Strict</code>：Cookie只会在第一方上下文中发送（当浏览器的URL栏中的域与您的Cookie域匹配时）。</li><li><code>Lax</code>：Cookie将在第一方上下文中发送，并与顶级导航一起发送。使用该<code>Strict</code>策略，<a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1">导航到顶级URL时不会发送cookie</a>。<code>Lax </code>从<a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00">RFC6265bis中</a>提取的值解决方案的示例</li></ol><p>&nbsp;</p><blockquote><p><i>考虑一种情况，用户在MegaCorp</i><br><i>Inc的网络邮件提供商“ </i><a href="https://example.com/"><i>https://example.com/</i></a><i> ”上阅读电子邮件。他们可能希望</i><br><i>单击通过电子邮件发送的链接到“ </i><a href="https://projects.com/secret/"><i>https://projects.com/secret/</i></a><br><i>project”向他们显示他们有权</i><br><i>查看的秘密项目，但是如果“ projects.com”已将其会话cookie标记为</i><br><i>“ SameSite = Strict”，则此跨站点导航将不会将其</i><br><i>与请求一起发送。 .com”会显示404错误，以避免</i><br><i>泄露机密信息，并且用户会非常困惑。</i></p></blockquote><p>&nbsp;</p><h3><strong>默认值更改</strong></h3><p>如果未设置Cookie，则<code>SameSite</code>浏览器必须猜测您的意图。浏览器曾经默认<code>None</code>设置为未设置属性，但是这种行为正在改变。</p><p>&nbsp;</p><p>IETF提案“<a href="https://tools.ietf.org/html/draft-west-cookie-incrementalism-00">渐进式更好的Cookies”</a>提出了两个重要更改：</p><ul><li>1. 没有<code>SameSite</code>属性的Cookies将被视为<code>SameSite=Lax</code>。</li><li>2. Cookie<code>SameSite=None</code>也必须指定<code>Secure</code>，表示它们需要安全的上下文。</li><li>&nbsp;</li></ul><p>Chrome从84版开始实施此默认行为，其他浏览器也将在不久的将来使用。</p><p>&nbsp;</p><h3><strong>cookie安全</strong></h3><p>解决方案的第二部分：<code>Secure</code>属性。</p><p>&nbsp;</p><p>当在HTTP响应中向用户发送新cookie时，应用服务器可以设置此属性。安全标志的目的是防止由于以明文形式传输cookie而导致未经授权的各方查看cookie。</p><p>&nbsp;</p><p>当请求进入HTTPS页面时，支持安全标志的浏览器将仅发送带有安全标志的cookie。</p><p>&nbsp;</p><p>因此，除了<code> SameSite=None</code>和之外<code>Secure</code>，iframe中使用的URL必须是以https开头的安全URL。</p><p>&nbsp;</p><h2>总结</h2><p><code>SameSite</code>何时用<code>Strict</code>，<code>Lax</code>或<code>None</code>为值：</p><ul><li><code>Lax</code>：选择正确显示网站所需的Cookie。正如我们前面所看到的，当用户到达来自另一个站点的链接后的顶级URL时，应将此值用于所需的任何cookie。</li><li><code>Strict</code> ：对于与Cookie相关的用户执行的操作非常有用，并且不会影响网站的显示。</li><li><code>None</code>：在第三方上下文中何时需要Cookie可供我们所有应用程序的URL使用（无论是否为顶级）的选择。示例：Youtube的登录Cookie设置有此属性，以便在您看到与youtube本身不同的任何网站中嵌入的视频时都可以发送。</li><li>&nbsp;</li></ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4278篇《Cookies 和 iframe》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
