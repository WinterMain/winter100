---
layout: question
title:  使用vuex在vue 2 JS中的Axios拦截器
date:   2020-03-12T16:37:49.000Z
description: 我将成功登录调用后的令牌存储在vuex存储中，如下所示：axios.post('/api/auth/doLogin.php', params, axi...
img: 
author: GO蛋蛋
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将成功登录调用后的令牌存储在vuex存储中，如下所示：</font></font></p>

<pre><code>axios.post('/api/auth/doLogin.php', params, axiosConfig)<font></font>
    .then(res =&gt; {<font></font>
        console.log(res.data); // token<font></font>
        this.$store.commit('login', res.data);<font></font>
    })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">axiosConfig是我仅设置baseURL的文件，</font></font><code>export default { baseURL: 'http://localhost/obiezaca/v2' }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而params只是发送到后端的数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的vuex文件看起来是：</font></font></p>

<pre><code>import Vue from 'vue';<font></font>
import Vuex from 'vuex';<font></font>
<font></font>
Vue.use(Vuex);<font></font>
<font></font>
export const store = new Vuex.Store({<font></font>
    state: {<font></font>
        logged: false,<font></font>
        token: ''<font></font>
    },<font></font>
    mutations: {<font></font>
        login: (state, response) =&gt; {<font></font>
            state.logged = true;<font></font>
            state.token = response;<font></font>
            console.log('state updated');<font></font>
            console.log('state.logged flag is: '+state.logged);<font></font>
            console.log('state.token: '+state.token);<font></font>
        },<font></font>
        logout: (state) =&gt; {<font></font>
            state.logged = false;<font></font>
            state.token = '';<font></font>
        }<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它工作正常，我可以基于</font></font><code>v-if="this.$store.state.logged"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已登录的用户</font><font style="vertical-align: inherit;">重新呈现SPA中的某些内容</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我可以</font></font><code>this.$store.state.logged</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从整个应用程序中的任何组件</font><font style="vertical-align: inherit;">进行访问</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想将令牌添加到每个调用我的其余API后端的请求中。</font><font style="vertical-align: inherit;">我创建了基本的axios http拦截器，如下所示：</font></font></p>

<pre><code>import axios from 'axios';<font></font>
<font></font>
axios.interceptors.request.use(function(config) {<font></font>
    const token = this.$store.state.token;<font></font>
    if(token) {<font></font>
        config.headers.Authorization = `Bearer ${token}`;<font></font>
    }<font></font>
    return config;<font></font>
}, function(err) {<font></font>
    return Promise.reject(err);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我对此有2个问题。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道，它是提供给使用</font></font><code>this.$store.state.logged</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>this.$store.state.token</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨越每一个部件，但我可以用它在单一的JavaScript文件一样吗？</font></font></li>
<li>Where should I execute/start my interceptor javascript file? It is independent file which lays in my app main folder but I am not calling it anywhere, in angularJS which I was working before, I had to add <code>$httpProvider.interceptors.push('authInterceptorService');</code> in config but I don't know how to do same thing in vue architecture. So where should I inject my interceptor?</li>
</ol>

<p><strong>EDIT</strong></p>

<p>I followed <em>GMaiolo</em> tips I added </p>

<pre><code>import interceptor from './helpers/httpInterceptor.js';<font></font>
interceptor();<font></font>
</code></pre>

<p>to my main.js file and I refactor my interceptor to this:</p>

<pre><code>import axios from 'axios';<font></font>
import store from '../store/store';<font></font>
<font></font>
export default function execute() {<font></font>
    axios.interceptors.request.use(function(config) {<font></font>
        const token = this.$store.state.token;<font></font>
        if(token) {<font></font>
            config.headers.Authorization = `Bearer ${token}`;<font></font>
        }<font></font>
        return config;<font></font>
    }, function(err) {<font></font>
        return Promise.reject(err);<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p>Result of this changes is that every already existing backend calls ( GET ) which don't need token to work stopped working but it is logical because I didn't clarified to which request it should add token so it is trying to add it everywhere and in my interceptor something is still wrong and that is why every already exisitng request stopped working.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试在浏览器控制台中进行后端POST调用时，仍然出现此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeError：无法读取未定义的属性“ $ store”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我将存储导入到我的拦截器文件中。</font><font style="vertical-align: inherit;">有任何想法吗？</font><font style="vertical-align: inherit;">如果需要，我可以提供更多信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还添加了此主要，存储和拦截器树结构的屏幕截图，因此您可以看到我正在导入fron正确的路径：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/14077/images/thumbnails/1584030941887.png" data-src="https://www.samyoc.com//uploads/users/14077/images/1584030941887.png" rel="noreferrer"><img src="https://i.stack.imgur.com/QuTEB.png" alt="路径"></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
