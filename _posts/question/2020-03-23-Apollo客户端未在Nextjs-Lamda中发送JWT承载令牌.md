---
layout: question
title:  Apollo客户端未在Nextjs Lamda中发送JWT承载令牌
date:   2020-03-23T13:03:47.000Z
description: TLDR标头authorization未随阿波罗发送。这导致You do not have the appropriate capabilities ...
img: 
author: 梅
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TLDR</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头</font></font><code>authorization</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未随阿波罗发送。</font><font style="vertical-align: inherit;">这导致</font></font><code>You do not have the appropriate capabilities to perform this action</code></p>

<pre><code>const apolloClient = ({ cookies: { token = null }, headers }) =&gt; {<font></font>
  const authLink = setContext(_ =&gt; {<font></font>
    console.info(token) //correct tokens<font></font>
    return {<font></font>
      headers: {<font></font>
        ...headers,<font></font>
        authorization: `Bearer ${token}`,<font></font>
      },<font></font>
    }<font></font>
  })<font></font>
<font></font>
  return new ApolloClient({<font></font>
    link: ApolloLink.from([<font></font>
      onError(({ graphQLErrors, networkError }) =&gt; {<font></font>
          console.error(graphQLErrors, networkError)<font></font>
      }),<font></font>
      authLink.concat(<font></font>
        createHttpLink({<font></font>
          uri: graphQL,<font></font>
          credentials: 'same-origin',<font></font>
          fetch: fetch,<font></font>
        })<font></font>
      ),<font></font>
    ]),<font></font>
    cache: new InMemoryCache(),<font></font>
  })<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长版</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在我的一个</font></font><code>nextjs lamba</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">进行身份验证，该</font><font style="vertical-align: inherit;">文件现在位于其中</font></font><code>/pages/api/*</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前有一个</font></font><code>apollo.serverless.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，该文件被导入到</font></font><code>pages/api/users/update/role/[userId].js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我进行数据库交互的位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说有点混乱。</font><font style="vertical-align: inherit;">我不确定这是唯一的方法，但这是我的大脑带给我的。</font><font style="vertical-align: inherit;">我正在传递</font></font><code>req 
into</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apollo.serverless.js`，以便可以访问cookie内的不记名令牌。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能很简单，就像我的apollo.client设置不正确一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在直接测试链接，</font></font><code>http://localhost:3000/api/users/update/role/dXNlcjoxMTg=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为条纹webhook将使用查询参数直接访问此URL。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pages / api / users / update / role / [userId] .js</font></font></h1>

<pre class="lang-js prettyprint-override"><code>import { useQuery, useMutation } from '../../../../../lib/apollo/apollo.serverless'<font></font>
import { updateMemberRole, allUsers } from '../../../queries/users'<font></font>
<font></font>
export default async (req, res) =&gt; {<font></font>
  let data<font></font>
  try {<font></font>
    const mutationInfo = await useMutation(<font></font>
      {<font></font>
        mutation: updateMemberRole,<font></font>
        variables: {<font></font>
          userId: req.query.userId,<font></font>
        },<font></font>
      },<font></font>
      req<font></font>
    )<font></font>
    data = mutationInfo.data<font></font>
  } catch (err) {<font></font>
    data = err<font></font>
  }<font></font>
  res.status(200).json({ data })<font></font>
}<font></font>
<font></font>
<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头以[userId]发送</font></font></h1>

<pre><code>Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9<font></font>
Accept-Encoding: gzip, deflate, br<font></font>
Accept-Language: en-US,en;q=0.9,en-GB;q=0.8,fr;q=0.7<font></font>
Cache-Control: no-cache<font></font>
Connection: keep-alive<font></font>
Cookie: analyticsCookieAccepted=1; analyticsCookieNoticeClosed=1; _ga=GA1.1.2044509544.1574855120; wordpress_test_cookie=WP+Cookie+check; OPTOUTMULTI=0:0%7Cc4:0%7Cc3:0%7Cc2:0; wp-settings-45=editor%3Dhtml%26libraryContent%3Dbrowse%26imgsize%3Dfull; wp-settings-time-45=1575018303; theme=light; wp-settings-time-1=1575496501; utag_main=v_id:016eacdb7ad1001fa3af49cf1fec01069001606100fb8$_sn:18$_se:1$_ss:1$_st:1575891251585$ses_id:1575889451585%3Bexp-session$_pn:1%3Bexp-session; wordpress_logged_in_86a9106ae65537651a8e456835b316ab=glasshousegames%7C1578351721%7CtL4KMHIW7tTAUuCzUOJd8r6Mu5buST9mheH2tn9WFQs%7C593e133b11f6c0745f577e32d66db0cf1ccfa012504f9015fc64c515d2df77d2; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJpYXQiOjE1NzgwNTgyOTIsIm5iZiI6MTU3ODA1ODI5MiwiZXhwIjoxNTc4NjYzMDkyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxMTgifX19.iMSh4KjuON3otpOqO3TXpYAh2bQYu48sqm9pzsgeBis<font></font>
Host: localhost:3002<font></font>
Pragma: no-cache<font></font>
Sec-Fetch-Mode: navigate<font></font>
Sec-Fetch-Site: none<font></font>
Sec-Fetch-User: ?1<font></font>
Upgrade-Insecure-Requests: 1<font></font>
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apollo.serverless.js</font></font></h1>

<pre class="lang-js prettyprint-override"><code>import dotenv from 'dotenv'<font></font>
import { fetch } from 'cross-fetch/polyfill'<font></font>
import { createHttpLink } from 'apollo-link-http'<font></font>
import { ApolloClient } from 'apollo-client'<font></font>
import { InMemoryCache } from 'apollo-cache-inmemory'<font></font>
import { setContext } from 'apollo-link-context'<font></font>
import { onError } from 'apollo-link-error'<font></font>
import { ApolloLink } from 'apollo-link'<font></font>
import { graphQL } from 'app.config'<font></font>
import ApolloClass, { sortParams } from '~/lib/apollo/apollo.class'<font></font>
<font></font>
dotenv.config()<font></font>
<font></font>
const apolloClient = ({ cookies: { token = null }, headers }) =&gt; {<font></font>
  const authLink = setContext(_ =&gt; {<font></font>
    return {<font></font>
      headers: {<font></font>
        ...headers,<font></font>
        authorization: `Bearer ${token}`,<font></font>
      },<font></font>
    }<font></font>
  })<font></font>
<font></font>
  return new ApolloClient({<font></font>
    link: ApolloLink.from([<font></font>
      onError(({ graphQLErrors, networkError }) =&gt; {<font></font>
        if (graphQLErrors)<font></font>
          graphQLErrors.forEach(({ message, locations, path }) =&gt; console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))<font></font>
        if (networkError) console.log(`[Network error]: ${networkError}`)<font></font>
      }),<font></font>
      authLink.concat(<font></font>
        createHttpLink({<font></font>
          uri: graphQL,<font></font>
          credentials: 'same-origin',<font></font>
          fetch: fetch,<font></font>
        })<font></font>
      ),<font></font>
    ]),<font></font>
    cache: new InMemoryCache(),<font></font>
  })<font></font>
}<font></font>
<font></font>
export const useQuery = async function(query) {<font></font>
  const { options = {} } = sortParams([...arguments])<font></font>
  const { loading, data: queryData, error, ...props } = await apolloClient.query({<font></font>
    query,<font></font>
    ...options,<font></font>
  })<font></font>
  let transformData = {}<font></font>
<font></font>
  if (queryData) transformData = new ApolloClass(queryData).start()<font></font>
  return {<font></font>
    queryData,<font></font>
    error,<font></font>
    loading,<font></font>
    data: transformData,<font></font>
  }<font></font>
}<font></font>
<font></font>
export const useMutation = async function(mutation, req) {<font></font>
  const { data } = await apolloClient(req).mutate(mutation)<font></font>
  return { data }<font></font>
}<font></font>
<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font></h1>

<pre><code>// 20200106132714<font></font>
// http://localhost:3002/api/users/update/role/dXNlcjoxMTg=<font></font>
<font></font>
{<font></font>
  "data": {<font></font>
    "graphQLErrors": [<font></font>
      {<font></font>
        "message": "You do not have the appropriate capabilities to perform this action",<font></font>
        "category": "user",<font></font>
        "locations": [<font></font>
          {<font></font>
            "line": 2,<font></font>
            "column": 3<font></font>
          }<font></font>
        ],<font></font>
        "path": [<font></font>
          "updateUser"<font></font>
        ]<font></font>
      }<font></font>
    ],<font></font>
    "networkError": null,<font></font>
    "message": "GraphQL error: You do not have the appropriate capabilities to perform this action"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>So I believe the problem is that my headers are not being sent, as I cannot see them in the headers detailed here , I can not see them in my headers when looking <code>http://localhost:3000/api/users/update/role/cm9sZTpzdGFuZGFyZA==</code></p>

<p>It is worth mentioning I am using GraphQL and <a href="https://github.com/wp-graphql/wp-graphql" rel="nofollow noreferrer">wp-GraphQL</a> with JWT as my auth token. And handling the JWT tokens with<a href="https://en-gb.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" rel="nofollow noreferrer">JWT Authentication for WP REST API</a>. The reason I am not drawing more attention to this is that I cannot see any <code>Bearer SomeToken</code> in my headers, so I am sure once the token is sent over everything work. JWT is correctly working in all my interactions from the cookie.</p>

<h1>.htaccess</h1>

<pre><code>RewriteCond %{HTTP:Authorization} ^(.)<font></font>
RewriteRule ^(.) - [E=HTTP_AUTHORIZATION:%1]<font></font>
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1<font></font>
<font></font>
&lt;ifmodule mod_headers.c=""&gt;<font></font>
    # SetEnvIf Origin "^(.*\.domain\.com)$" ORIGIN_SUB_DOMAIN=$1<font></font>
    SetEnvIf Origin "http(s)?://(www\.)?(localhost|now.sh|dev.domain1.games)$" ORIGIN_SUB_DOMAIN=$1<font></font>
    Header set Access-Control-Allow-Origin "%{ORIGIN_SUB_DOMAIN}e" env=ORIGIN_SUB_DOMAIN<font></font>
    Header set Access-Control-Allow-Methods: "*"<font></font>
    Header set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition"<font></font>
&lt;/ifmodule&gt;<font></font>
<font></font>
&lt;IfModule mod_expires.c&gt;<font></font>
    ExpiresActive On<font></font>
    ExpiresByType image/jpg "access 1 year"<font></font>
    ExpiresByType image/jpeg "access 1 year"<font></font>
    ExpiresByType image/gif "access 1 year"<font></font>
    ExpiresByType image/png "access 1 year"<font></font>
    ExpiresByType text/css "access 1 month"<font></font>
    ExpiresByType text/html "access 1 month"<font></font>
    ExpiresByType application/pdf "access 1 month"<font></font>
    ExpiresByType text/x-javascript "access 1 month"<font></font>
    ExpiresByType application/x-shockwave-flash "access 1 month"<font></font>
    ExpiresByType image/x-icon "access 1 year"<font></font>
&lt;/IfModule&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我正在研究</font></font><a href="https://github.com/apollographql/apollo-link/blob/480df382cf7db486ae76c56ac2522134d77e36fa/packages/apollo-link-http/README.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并注意到他们的中间件使用了不同的措辞，也许只是更明确的表达，但是...我将对此进行探讨...</font></font></p>

<pre><code>const authLink = new ApolloLink((operation, forward) =&gt; {<font></font>
  operation.setContext({<font></font>
     headers: {<font></font>
       ...headers,<font></font>
       authorization: `Bearer ${token}`,<font></font>
     }});<font></font>
  return forward(operation);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到您的.htaccess文件</font></font></p>

<pre><code>SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
