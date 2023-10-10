---
layout: question
title:  使用reactjs将jwt存储在localStorage中是否安全？
date:   2020-03-11T15:10:58.000Z
description: 我目前正在使用reactjs构建一个单页面应用程序。我读到许多不使用localStorage的原因是由于XSS漏洞。由于React避开了所有用户输入，现在...
img: 
author: Harry乐Gil
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在使用reactjs构建一个单页面应用程序。</font><font style="vertical-align: inherit;">我读到许多不使用localStorage的原因是由于XSS漏洞。</font><font style="vertical-align: inherit;">由于React避开了所有用户输入，现在使用localStorage是否安全？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第824篇《使用reactjs将jwt存储在localStorage中是否安全？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">localStorage或httpOnly cookie都不可接受吗？</font><font style="vertical-align: inherit;">关于受损的第三方库，我所知道的唯一可以减少/防止敏感信息被盗的解决方案是实施</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Subresource Integrity</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子资源完整性（SRI）是一项安全功能，使浏览器可以验证是否已交付获取的资源（例如，从CDN中获取）而没有意外的操作。</font><font style="vertical-align: inherit;">通过允许您提供获取的资源必须匹配的加密哈希来工作。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要受感染的第三方库在您的网站上处于活动状态，键盘记录程序就可以开始收集信息，例如用户名，密码以及您在网站中输入的任何内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">httpOnly cookie将阻止从另一台计算机进行访问，但不会阻止黑客操纵用户的计算机。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的一种方法是考虑风险或损害的程度。</font></font></strong> </p>

<p>Are you building an app with no users, POC/MVP? Are you a startup who needs to get to market and test your app quickly? If yes, I would probably just implement the simplest solution and maintain focus on finding product-market-fit. Use localStorage as its often easier to implement. </p>

<p>Are you building a v2 of an app with many daily active users or an app that people/businesses are heavily dependent on. Would getting hacked mean little or no room for recovery? If so, I would take a long hard look at your dependencies and consider storing token information in an http-only cookie. </p>

<p><strong>Using both localStorage and cookie/session storage have their own pros and cons.</strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如第一个答案所述：如果您的应用程序具有XSS漏洞，则两者都无法保护您的用户。</font><font style="vertical-align: inherit;">由于大多数现代应用程序具有十几个或更多不同的依赖关系，因此越来越难以保证应用程序的一个依赖关系不受XSS攻击。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的应用程序确实存在XSS漏洞，并且黑客能够利用它，则该黑客将能够代表您的用户执行操作。</font><font style="vertical-align: inherit;">黑客可以通过从localStorage检索令牌来执行GET / POST请求，或者如果令牌存储在仅HTTP的cookie中，则可以执行POST请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将令牌存储在本地存储中的唯一缺点是，黑客将能够读取您的令牌。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地存储被设计为可通过javascript访问，因此不提供任何XSS保护。</font><font style="vertical-align: inherit;">如其他答案中所述，有很多可能的方法可以进行XSS攻击，默认情况下，本地存储不受此方法的保护。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，Cookie具有安全标志，可以防止XSS和CSRF攻击。</font><font style="vertical-align: inherit;">HttpOnly标志可防止客户端javascript访问cookie； Secure标志仅允许浏览器通过ssl传输cookie； SameSite标志可确保将cookie仅发送到源。</font><font style="vertical-align: inherit;">尽管我刚刚检查过，并且Opera和Chrome当前仅支持SameSite，但是为了避免受到CSRF的影响，最好使用其他策略。</font><font style="vertical-align: inherit;">例如，在另一个包含某些公共用户数据的cookie中发送加密令牌。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，cookie是用于存储身份验证数据的更安全的选择。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个老问题，但是根据@ mikejones1477所说的，现代的前端库和框架转义了文本，从而为您提供了针对XSS的保护。</font><font style="vertical-align: inherit;">Cookie并非使用凭据的安全方法的原因是，当localStorage这样做时，Cookie不会阻止CSRF（还请记住，Cookie也可以通过javascript访问，因此XSS并不是这里的大问题），</font></font><a href="https://stackoverflow.com/a/35347022/8196244"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案恢复了为什么</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将认证令牌存储在本地存储中并手动将其添加到每个请求中的原因是，关键字CS会受到保护。</font><font style="vertical-align: inherit;">由于浏览器不会自动发送该身份验证令牌，因此，如果我访问evil.com并且它能够发送POST </font></font><a href="http://example.com/delete-my-account" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/delete-my-account</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将无法发送我的</font><font style="vertical-align: inherit;">身份验证</font><font style="vertical-align: inherit;">令牌，因此该请求将被忽略。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，httpOnly是圣杯，但是您仍然无法通过CSRF漏洞访问reactjs或任何js框架。</font><font style="vertical-align: inherit;">我的建议是使用本地存储，或者如果您要使用cookie，请确保</font></font><a href="http://kylebebak.github.io/post/csrf-protection#double-submit-cookie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像django一样</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现对</font><a href="http://kylebebak.github.io/post/csrf-protection#double-submit-cookie" rel="noreferrer"><font style="vertical-align: inherit;">CSRF问题的</font></a><font style="vertical-align: inherit;">解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于CDN，请确保您未使用某些怪异的CDN，例如，由google维护的CDN或Bootstrap提供的CDN由社区维护，并且不包含恶意代码，如果不确定，您可以自由查看。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
