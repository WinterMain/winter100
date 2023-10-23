---
layout: question
title:  NuxtJS $ axios发送带有请求的Cookie
date:   2020-03-24T09:37:54.000Z
description: 我正在使用NuxtJS的$axios模块，并且正在与后端API进行交互，该API在登录后设置了身份验证cookie，以用于进一步的身份验证请求。我已经研究...
img: 
author: Tony凯
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用NuxtJS的</font></font><code>$axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块，并且正在与后端API进行交互，该API在登录后设置了身份验证cookie，以用于进一步的身份验证请求。我已经研究了</font></font><code>withCredentials: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仍无法正常合作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要设置特定的标头值还是我的axios配置有问题？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想保留并使用成功登录后收到的cookie，并在下一个请求中使用它来进行经过身份验证的请求。</font></font></p>

<pre><code>// nuxt.config.js<font></font>
axios : {<font></font>
    ...<font></font>
    credentials: true,<font></font>
    withCredentials : true,<font></font>
    requestInterceptor: (config, {store}) =&gt; {<font></font>
        config.headers.common['Content-Type'] = 'application/json';<font></font>
        config.headers.common['API-Key'] = 'my_api_key';<font></font>
        return config<font></font>
    },<font></font>
    ...<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我提出axios请求的地方</font></font></p>

<pre><code><font></font>
async asyncData({ $axios}) {<font></font>
    try {<font></font>
        // this response sends back an authentication cookie<font></font>
        const login_response = await $axios.$post("my_login_route",{<font></font>
            password : this.password,<font></font>
            username : this.email,<font></font>
        });<font></font>
<font></font>
        if(login_response.success){<font></font>
            // how i send my cookie to this route to prove im authenticated?<font></font>
            const authenticated = await $axios.$get("my_url");<font></font>
            console.log(authenticated); // always false; doesn't send cookie recieved in login $post request<font></font>
        }else{<font></font>
            console.log("Invalid username or password");<font></font>
        }<font></font>
    } catch(error) {<font></font>
        console.log(error);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过发出一个简单的请求来检查用户是否已通过身份验证，从而形成了一个测试页。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来，此处的axios设置</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未应用。</font></font></strong> </p>

<p>I need the axios configuration to apply to not just the base URL, but to my API routes. Here is a test method that activates when I press a test button:</p>

<pre><code>check_auth : async function(){<font></font>
    try {<font></font>
        const response = await this.$axios.$get("https://&lt;my_url&gt;/Utility/IsAuthenticated/");<font></font>
        console.log("IS AUTH:");<font></font>
        console.log(response.isAuthenticated);<font></font>
    }catch(error){<font></font>
        console.log("something went wrong.");<font></font>
    }<font></font>
},<font></font>
</code></pre>

<p><strong>HTTP REQUEST HEADERS FOR AXIOS REQUEST MADE RIGHT ABOVE</strong>
As you can see, there are no cookies or <code>API-Key</code> headers that I specified in the axios config.</p>

<pre><code>Host: &lt;my_url&gt;<font></font>
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:67.0) Gecko/20100101 Firefox/67.0<font></font>
Accept: application/json, text/plain<font></font>
Accept-Language: en-US,en;q=0.5<font></font>
Accept-Encoding: gzip, deflate, br<font></font>
Referer: http://localhost:1337/send/account<font></font>
Origin: http://localhost:1337<font></font>
DNT: 1<font></font>
Connection: keep-alive<font></font>
</code></pre>

<p>What do I need to change in my axios <code>nuxt.config.js</code> section to allow the axios configuration to apply to my api route? Do i need to use the <code>proxy:{}</code> section? </p>

<p>Please help!!</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3583篇《NuxtJS $ axios发送带有请求的Cookie》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，问题</font><font style="vertical-align: inherit;">毕竟</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> axios。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我连接的API不允许外部来源使用它的cookie，这是一些跨源的东西。</font><font style="vertical-align: inherit;">问题是axios在尝试使用之前不会发出有关跨域问题的任何警告</font></font><code>fetch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是我在控制台中看到有关服务器不允许跨域cookie或类似内容的警告，然后开始进行研究的地方。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关：</font></font></p>

<p><a href="https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在node.js的express.js框架中启用跨域资源共享（CORS）</font></font></a></p>

<p><a href="https://github.com/axios/axios/issues/853" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/axios/axios/issues/853</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢到目前为止在评论中提供的帮助，但从外观上看，axios库对此几乎没有任何修复，因为它是一种广泛内置的浏览器安全性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人对</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">浏览器</font></strong><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CLIENT</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端</font><font style="vertical-align: inherit;">上运行有其他建议或答案</font><font style="vertical-align: inherit;">，请与我们分享。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
