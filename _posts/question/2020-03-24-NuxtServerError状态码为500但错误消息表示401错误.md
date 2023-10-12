---
layout: question
title:  NuxtServerError，状态码为500，但错误消息表示401错误
date:   2020-03-24T09:37:26.000Z
description: 在我正在开发的应用中，我们经常但始终在开发服务器上收到非常难看的NuxtServerError。此NuxtServerError的状态码为500，但错...
img: 
author: Stafan神无
category: question
answer: 0
tags: node.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我正在开发的应用中，我们经常但始终在开发服务器上收到非常难看的NuxtServerError。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此NuxtServerError的状态码为500，但错误消息指出它是401错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈跟踪仅显示一个框架，这完全无济于事（请参见屏幕截图）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除本地存储，会话存储和Cookies会消除此错误，仅是在其他时间再次发生。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我不确定是什么原因导致了此问题，因此我很努力地重现此问题，更不用说找到解决此问题的方法了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经</font></font><code>onError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件中</font><font style="vertical-align: inherit;">定义了一个</font><font style="vertical-align: inherit;">回调，该回调</font><font style="vertical-align: inherit;">可以捕获401个错误，但是似乎没有在这里被捕获……可能是因为它发生在加载插件之前？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次，Nuxt确实确实无法帮助我们找出原因！</font></font></p>

<pre class="lang-js prettyprint-override"><code>export default ({ $axios, nuxtState, app }) =&gt; {<font></font>
  let logoutPage;<font></font>
  if (process.client) {<font></font>
    $axios.setBaseURL(nuxtState.env.API_URL);<font></font>
    logoutPage = `https://${nuxtState.env.AUTH0_DOMAIN}/v2/logout`;<font></font>
  }<font></font>
  $axios.onError((e) =&gt; {<font></font>
    if ([401, 403].includes(parseInt(e.response &amp;&amp; e.response.status, 10))) {<font></font>
      return app.$auth.logout().then(() =&gt; {<font></font>
        if (process.client) {<font></font>
          // Use JSON.parse(atob(feedback)) to decode on login page<font></font>
          const returnTo = `${window.location.origin}/login?feedback=${btoa(JSON.stringify({<font></font>
            error: e.response.status,<font></font>
            error_description: 'Session expired. Please log in again to acces the portal.',<font></font>
          }))}`;<font></font>
          window.location = `${logoutPage}?returnTo=${returnTo}`;<font></font>
        }<font></font>
      });<font></font>
    }<font></font>
    return Promise.reject(e);<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><a href="https://www.samyoc.com//uploads/users/26274/images/thumbnails/1585042519582.jpg" data-src="https://www.samyoc.com//uploads/users/26274/images/1585042519582.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/hFX9m.jpg" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3582篇《NuxtServerError，状态码为500，但错误消息表示401错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
