---
layout: question
title:  Axios / Vue-防止axios.all（）继续执行
date:   2020-03-17T07:03:50.000Z
description: 在我的应用程序中，对用户进行身份验证时，我调用fetchData函数。如果用户令牌无效，则应用程序将运行，axios.all()并且我的拦截器将返回很多错...
img: 
author: GO村村
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序中，对用户进行身份验证时，我调用fetchData函数。</font><font style="vertical-align: inherit;">如果用户令牌无效，则应用程序将运行，</font></font><code>axios.all()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我的拦截器将返回很多错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何防止</font></font><code>axios.all()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个错误后继续运行？</font><font style="vertical-align: inherit;">并仅向用户显示一个通知？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拦截器.js</font></font></p>

<pre><code>export default (http, store, router) =&gt; {<font></font>
    http.interceptors.response.use(response =&gt; response, (error) =&gt; {<font></font>
        const {response} = error;<font></font>
<font></font>
        let message = 'Ops. Algo de errado aconteceu...';<font></font>
<font></font>
        if([401].indexOf(response.status) &gt; -1){<font></font>
            localforage.removeItem('token');<font></font>
<font></font>
            router.push({<font></font>
                name: 'login'<font></font>
            });<font></font>
<font></font>
            Vue.notify({<font></font>
                group: 'panel',<font></font>
                type: 'error',<font></font>
                duration: 5000,<font></font>
                text: response.data.message ? response.data.message : message<font></font>
            });<font></font>
        }<font></font>
<font></font>
        return Promise.reject(error);<font></font>
    })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证码</font></font></p>

<pre><code>const actions = {<font></font>
    fetchData({commit, dispatch}) {<font></font>
        function getChannels() {<font></font>
            return http.get('channels')<font></font>
        }<font></font>
<font></font>
        function getContacts() {<font></font>
            return http.get('conversations')<font></font>
        }<font></font>
<font></font>
        function getEventActions() {<font></font>
            return http.get('events/actions')<font></font>
        }<font></font>
<font></font>
        // 20 more functions calls<font></font>
<font></font>
        axios.all([<font></font>
            getChannels(),<font></font>
            getContacts(),<font></font>
            getEventActions()<font></font>
        ]).then(axios.spread(function (channels, contacts, eventActions) {<font></font>
            dispatch('channels/setChannels', channels.data, {root: true})<font></font>
            dispatch('contacts/setContacts', contacts.data, {root: true})<font></font>
            dispatch('events/setActions', eventActions.data, {root: true})<font></font>
        }))<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1880篇《Axios / Vue-防止axios.all（）继续执行》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
