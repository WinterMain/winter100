---
layout: question
title:  Twilio TaskRouter JS SDK不起作用
date:   2020-03-19T03:50:37.000Z
description: 根据Twilio Docs的说法，我正在尝试开发一个呼叫中心应用程序，但TaskRouter JS   v1.13 / taskrouter.min...
img: 
author: 梅Tom猿
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Twilio Docs的说法，我正在尝试开发一个呼叫中心应用程序，但TaskRouter JS </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v1.13 / taskrouter.min.js不支持twilio，</font><a href="https://www.twilio.com/docs/taskrouter/js-sdk/worker#reservation-created" rel="noreferrer"><font style="vertical-align: inherit;">请</font></a><font style="vertical-align: inherit;">参见文档</font></font><a href="https://www.twilio.com/docs/taskrouter/js-sdk/worker#reservation-created" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.twilio.com/docs/taskrouter/js-sdk/worker#reservation-created</font></font></a></p>
</blockquote>

<pre><code>worker.on("reservation.created", function(reservation) {<font></font>
    console.log(reservation.task.attributes)      // NOT FOUND<font></font>
    console.log(reservation.task.priority)        // NOT FOUND<font></font>
    console.log(reservation.task.age)             // NOT FOUND<font></font>
    console.log(reservation.task.sid)             // NOT FOUND<font></font>
    console.log(reservation.sid)                  // RETURNS task sid<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reservation.sid</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务SID</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆如果我删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。任务</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则返回各自的输出相关的任务，但在这里，我希望保留相关的输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我的应用程序中当前使用的twilio客户端SDK。</font></font></p>

<ol>
<li><a href="https://media.twiliocdn.com/sdk/js/sync/releases/0.5.10/twilio-sync.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://media.twiliocdn.com/sdk/js/sync/releases/0.5.10/twilio-sync.js</font></font></a></li>
<li><a href="https://media.twiliocdn.com/sdk/js/client/releases/1.4.31/twilio.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://media.twiliocdn.com/sdk/js/client/releases/1.4.31/twilio.min.js</font></font></a></li>
<li><a href="https://media.twiliocdn.com/taskrouter/js/v1.13/taskrouter.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://media.twiliocdn.com/taskrouter/js/v1.13/taskrouter.min.js</font></font></a></li>
<li><a href="https://media.twiliocdn.com/taskrouter/js/v1.0/taskrouter.worker.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://media.twiliocdn.com/taskrouter/js/v1.0/taskrouter.worker.min.js</font></font></a></li>
</ol></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2332篇《Twilio TaskRouter JS SDK不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tom猿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两个不同的问题，但彼此相关。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先我删除</font></font></p>
  
  <blockquote>
    <ol start="4">
    <li><a href="https://media.twiliocdn.com/taskrouter/js/v1.0/taskrouter.worker.min.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://media.twiliocdn.com/taskrouter/js/v1.0/taskrouter.worker.min.js</font></font></a></li>
    </ol>
    
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它固定</font></font></p>
  </blockquote>

<pre><code>worker.on("reservation.created", function(reservation) {<font></font>
         console.log(reservation.task.attributes)      // FOUND<font></font>
         console.log(reservation.task.priority)        // FOUND<font></font>
         console.log(reservation.task.age)             // FOUND<font></font>
         console.log(reservation.task.sid)             // FOUND<font></font>
         console.log(reservation.sid)                  // RETURNS reservation sid <font></font>
});<font></font>
</code></pre>
</blockquote>

<p><strong><code>BUT After I remove  taskrouter.worker.min.js , I faced another issue (i.e worker event stopped working)</code></strong></p>

<blockquote>
<pre><code>worker.on("ready", function(worker) {<font></font>
});<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为两个版本都使用不同的键来获取事件值</font></font></p>
  
  <ol>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/v1.13/taskrouter.min.js，例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">worker.activityName</font></font></strong></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/v1.0/taskrouter.worker.min.js，例如   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">worker.activity_name</font></font></strong></p></li>
  </ol>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，我需要根据客户端Js中的/v1.13/taskrouter.min.js更新所有密钥</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  。例如，</font><font style="vertical-align: inherit;">根据
   </font><strong><font style="vertical-align: inherit;">v1.13</font></strong><font style="vertical-align: inherit;">用更新的密钥</font><strong><em><font style="vertical-align: inherit;">worker.activityName</font></em></strong><font style="vertical-align: inherit;">替换</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">worker.activity_name</font></font></em></strong><font style="vertical-align: inherit;"></font><strong><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我所有的问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
