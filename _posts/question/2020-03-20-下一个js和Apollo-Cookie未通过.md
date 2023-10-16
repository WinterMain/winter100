---
layout: question
title:  下一个js和Apollo-Cookie未通过
date:   2020-03-20T06:15:40.000Z
description: 我正在将Next JS与Apollo一起使用，并在with-data HOC中使用以下配置对其进行了设置：import { ApolloClient ...
img: 
author: 小胖Gil
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将Next JS与Apollo一起使用，并在with-data HOC中使用以下配置对其进行了设置：</font></font></p>

<pre><code>import { ApolloClient } from 'apollo-client';<font></font>
import { InMemoryCache } from 'apollo-cache-inmemory';<font></font>
import { HttpLink } from 'apollo-link-http';<font></font>
import { onError } from 'apollo-link-error';<font></font>
import { withClientState } from 'apollo-link-state';<font></font>
import { getMainDefinition } from 'apollo-utilities';<font></font>
import { ApolloLink, Observable, split  } from 'apollo-link';<font></font>
import { WebSocketLink } from 'apollo-link-ws';<font></font>
import withApollo from 'next-with-apollo';<font></font>
import { SubscriptionClient } from 'subscriptions-transport-ws';<font></font>
<font></font>
import { endpoint, prodEndpoint, WSendpoint, WSprodEndpoint } from '../config';<font></font>
<font></font>
import defaults from '../apollo-state/graphql/default-state';<font></font>
import Mutation from '../apollo-state/resolvers/mutation-resolvers';<font></font>
<font></font>
const wsClient = process.browser ? new SubscriptionClient(process.env.NODE_ENV === 'development' ? WSendpoint : WSprodEndpoint, {<font></font>
  reconnect: true,<font></font>
}) : null;<font></font>
<font></font>
<font></font>
function createClient({ headers }) {<font></font>
  const wsLink = process.browser ? new WebSocketLink(wsClient) : null;<font></font>
  const httpLink = new HttpLink({<font></font>
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,<font></font>
    credentials: 'include',<font></font>
  })<font></font>
<font></font>
  const link = process.browser ? split(<font></font>
    // split based on operation type<font></font>
    ({ query }) =&gt; {<font></font>
      const { kind, operation } = getMainDefinition(query);<font></font>
      return kind === 'OperationDefinition' &amp;&amp; operation === 'subscription';<font></font>
    },<font></font>
    wsLink,<font></font>
    httpLink,<font></font>
  ) : httpLink;<font></font>
<font></font>
  const cache = new InMemoryCache();<font></font>
<font></font>
  const request = async operation =&gt; {<font></font>
    const contextObj = {<font></font>
      fetchOptions: {<font></font>
        credentials: 'include'<font></font>
      },<font></font>
      headers<font></font>
    };<font></font>
    operation.setContext(contextObj);<font></font>
  }; <font></font>
<font></font>
  const requestLink = new ApolloLink((operation, forward) =&gt;<font></font>
    new Observable(observer =&gt; {<font></font>
      let handle;<font></font>
      Promise.resolve(operation)<font></font>
        .then(oper =&gt; request(oper))<font></font>
        .then(() =&gt; {<font></font>
          handle = forward(operation).subscribe({<font></font>
            next: observer.next.bind(observer),<font></font>
            error: observer.error.bind(observer),<font></font>
            complete: observer.complete.bind(observer),<font></font>
          });<font></font>
        })<font></font>
        .catch(observer.error.bind(observer));<font></font>
<font></font>
      return () =&gt; {<font></font>
        if (handle) handle.unsubscribe();<font></font>
      };<font></font>
    })<font></font>
  );<font></font>
  // end custom config functions<font></font>
  const apolloClient = new ApolloClient({<font></font>
      credentials: 'include',<font></font>
      ssrMode: !process.browser,<font></font>
      link: ApolloLink.from([<font></font>
        onError(({ graphQLErrors, networkError }) =&gt; {<font></font>
          if (graphQLErrors) {<font></font>
            console.log(graphQLErrors)<font></font>
          }<font></font>
          if (networkError) {<font></font>
            console.log(networkError)<font></font>
          }<font></font>
        }),<font></font>
        requestLink,<font></font>
        withClientState({<font></font>
          defaults, // default state<font></font>
          resolvers: {<font></font>
            Mutation // mutations<font></font>
          },<font></font>
          cache<font></font>
        }),<font></font>
        link<font></font>
      ]),<font></font>
      cache<font></font>
  }); // end new apollo client<font></font>
  return apolloClient;<font></font>
}<font></font>
<font></font>
export { wsClient };<font></font>
export default withApollo(createClient);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地，一切正常。</font><font style="vertical-align: inherit;">我可以登录，当我访问该站点时它会自动登录，并且SSR没问题。</font><font style="vertical-align: inherit;">但是，当我部署到Next或Heroku时，SSR无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我调查了这个问题，似乎这是一个常见的问题，即未随请求一起发送Cookie：</font></font></p>

<p><a href="https://github.com/apollographql/apollo-client/issues/4455" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/apollographql/apollo-client/issues/4455</font></font></a></p>

<p><a href="https://github.com/apollographql/apollo-client/issues/4190" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/apollographql/apollo-client/issues/4190</font></font></a></p>

<p><a href="https://github.com/apollographql/apollo-client/issues/4193" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/apollographql/apollo-client/issues/4193</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题似乎在于Apollo配置的这一部分，其中有时未定义标头，因此未发送cookie：</font></font></p>

<pre><code>  const request = async operation =&gt; {<font></font>
    const contextObj = {<font></font>
      fetchOptions: {<font></font>
        credentials: 'include'<font></font>
      },<font></font>
      headers<font></font>
    };<font></font>
    operation.setContext(contextObj);<font></font>
  }; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们提到的一些解决方法是：如果标题存在，则手动设置cookie标题：</font></font></p>

<pre><code>  const request = async operation =&gt; {<font></font>
    const contextObj = {<font></font>
      fetchOptions: {<font></font>
        credentials: 'include'<font></font>
      },<font></font>
      headers: {<font></font>
        cookie: headers &amp;&amp; headers.cookie<font></font>
      }<font></font>
    };<font></font>
    operation.setContext(contextObj);<font></font>
  }; <font></font>
</code></pre>

<p>The above amend to the code fixes the server side rendering however when I visit the site with a logged in cookie in my browser it will then no longer log me in automatically (it logs me in automatically with my initial method but wont do SSR on production)</p>

<p>People have mentioned it can be to do with Now or Heroku using a subdomain in the generated URLs you get once you deploy the app and to use a custom domain to resolve the issue. I tried using a custom domain however I am still experiencing the issue. My domain setup is like so:</p>

<p>Frontend domain: mysite.com
backend domain: api.mysite.com</p>

<p>Has anyone here experienced the issue and been able to resolve it? </p>

<p>Please let me know if you spot something wrong with my config or how I have setup my domains.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2532篇《下一个js和Apollo-Cookie未通过》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">晚了，但是试试这个</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该按如下所示添加Cookies选项。</font><font style="vertical-align: inherit;">请确保您的浏览器中有一个cookie，即csrftoken。</font><font style="vertical-align: inherit;">它应该可用。</font><font style="vertical-align: inherit;">希望它能工作。</font></font></p>

<pre><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  const request =异步操作=&gt; {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    const contextObj = {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      fetchOptions：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        凭据：“包括”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      }，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      // ################更改此处##########</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      标头：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ...标题</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      饼干： {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ...饼干</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      // #####################################</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    };</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    operation.setContext（contextObj）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  };</font></font><font></font>
<font></font>
</pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
