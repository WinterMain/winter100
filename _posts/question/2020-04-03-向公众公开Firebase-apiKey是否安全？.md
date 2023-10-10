---
layout: question
title:  向公众公开Firebase apiKey是否安全？
date:   2020-04-03T03:18:37.000Z
description: 在火力web应用指南规定我应该把给定的apiKey在我的HTML火力点初始化：// TODO  Replace with your project's...
img: 
author: 猴子
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://firebase.google.com/docs/web/setup#add_firebase_to_your_app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">火力web应用指南</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规定我应该把给定的apiKey在我的HTML火力点初始化：</font></font></p>

<pre><code>// TODO: Replace with your project's customized code snippet<font></font>
&lt;script src="https://www.gstatic.com/firebasejs/3.0.2/firebase.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
  // Initialize Firebase<font></font>
  var config = {<font></font>
    apiKey: '&lt;your-api-key&gt;',<font></font>
    authDomain: '&lt;your-auth-domain&gt;',<font></font>
    databaseURL: '&lt;your-database-url&gt;',<font></font>
    storageBucket: '&lt;your-storage-bucket&gt;'<font></font>
  };<font></font>
  firebase.initializeApp(config);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，apiKey便暴露给每个访问者。</font><font style="vertical-align: inherit;">该密钥的目的是什么，真的意味着要公开吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3959篇《向公众公开Firebase apiKey是否安全？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不相信将安全性/配置密钥公开给客户端。</font><font style="vertical-align: inherit;">我不会说它是安全的，不是因为有人可以从第一天起就窃取所有私人信息，因为有人会提出过多请求，耗尽您的配额，并使您欠Google很多钱。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要考虑许多概念，包括限制人们不要访问不应在的地方，DOS攻击等。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更希望客户端首先连接到您的Web服务器，在那里您将第一手防火墙，验证码，cloudflare，自定义安全性放在客户端和服务器之间，或者服务器和firebase之间，您就可以使用了。</font><font style="vertical-align: inherit;">至少您可以先停止可疑活动，直到其到达火力基地。</font><font style="vertical-align: inherit;">您将拥有更大的灵活性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只看到一种很好的使用场景，可以将基于客户端的配置用于内部使用。</font><font style="vertical-align: inherit;">例如，您具有内部域，并且您可以肯定外部人员无法访问该域，因此可以设置浏览器-&gt; firebase类型之类的环境。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apiKey实际上只是在Google服务器上标识您的Firebase项目。</font><font style="vertical-align: inherit;">知道它不是安全风险。</font><font style="vertical-align: inherit;">实际上，他们有必要知道它，以便他们与Firebase项目进行交互。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这个意义上讲，它与Firebase过去用于标识后端的数据库URL非常相似：</font></font><code>https://&lt;app-id&gt;.firebaseio.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关为何这不构成安全风险的问题，请参见以下问题：</font></font><a href="https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何限制Firebase数据修改？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，包括使用Firebase的服务器端安全规则，以确保只有授权用户才能访问后端服务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想了解如何保护对Firebase后端服务的所有数据访问均得到授权，请阅读有关</font></font><a href="https://firebase.google.com/docs/rules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebase安全规则</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文档</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
