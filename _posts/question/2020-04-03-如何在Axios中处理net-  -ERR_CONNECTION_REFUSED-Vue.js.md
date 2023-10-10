---
layout: question
title:  如何在Axios中处理net    ERR_CONNECTION_REFUSED-Vue.js
date:   2020-04-03T03:46:12.000Z
description: 以下是我的连接请求代码：doLogin(this.login).then(response => {        var token = resp...
img: 
author: 宝儿
category: question
answer: 3
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我的连接请求代码：</font></font></p>

<pre><code>doLogin(this.login).then(response =&gt; {<font></font>
        var token = response.data.token;<font></font>
        localStorage.setItem('AUTH_TOKEN', JSON.stringify(token));<font></font>
        this.$router.push({name: 'Devices'});<font></font>
        });<font></font>
      }).catch(error =&gt; {<font></font>
        console.log(error.response.data.message);<font></font>
      });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>catch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分工作正常的HTTP错误（例如</font></font><code>400</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>404</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>403</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...等）。</font><font style="vertical-align: inherit;">但是，当我的服务器离线时，该脚本就会抛出</font></font><code>net::ERR_CONNECTION_REFUSED</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有什么方法可以处理此错误，并使前端用户知道服务器当前处于脱机状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>doLogin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）函数，以防万一，</font></font></p>

<pre><code>function doLogin(data) {<font></font>
  const url   = 'http://localhost:3000/authenticate';<font></font>
  return axios.post(url,data);<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该执行@chithra指出的相同验证，</font></font><code>.then()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为在关闭服务器的测试请求时我遇到了一个奇怪的问题，“响应”就好像成功了一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><code>.then()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>response.status</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code> response.error</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拦截器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>axios.interceptors.response.use(<font></font>
    response =&gt; {<font></font>
        return response<font></font>
    },<font></font>
    error =&gt; {<font></font>
        if (!error.response) {<font></font>
            console.log("Please check your internet connection.");<font></font>
        }<font></font>
<font></font>
        return Promise.reject(error)<font></font>
    }<font></font>
)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像</font></font><a href="https://stackoverflow.com/users/4788022/panjunjie%E6%BD%98%E4%BF%8A%E6%9D%B0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">潘俊杰</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的</font><font style="vertical-align: inherit;">那样来验证自己</font><font style="vertical-align: inherit;">，也可以使用</font></font><a href="https://github.com/sindresorhus/is-reachable" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sindresorhus / is-reachable之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的库</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">后者将是我的首选。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
