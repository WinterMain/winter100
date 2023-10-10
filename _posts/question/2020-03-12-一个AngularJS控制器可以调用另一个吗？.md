---
layout: question
title:  一个AngularJS控制器可以调用另一个吗？
date:   2020-03-12T03:19:28.000Z
description: 一个控制器可以使用另一个控制器吗？例如：该HTML文档仅MessageCtrl在messageCtrl.js文件中打印由控制器传递的消息。<h...
img: 
author: 猿神奇梅
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个控制器可以使用另一个控制器吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该HTML文档仅</font></font><code>MessageCtrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>messageCtrl.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">打印由</font><font style="vertical-align: inherit;">控制器</font><font style="vertical-align: inherit;">传递的消息</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;html xmlns:ng="http://angularjs.org/"&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="utf-8" /&gt;<font></font>
    &lt;title&gt;Inter Controller Communication&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div ng:controller="MessageCtrl"&gt;<font></font>
        &lt;p&gt;{{message}}&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;!-- Angular Scripts --&gt;<font></font>
    &lt;script src="http://code.angularjs.org/angular-0.9.19.js" ng:autobind&gt;&lt;/script&gt;<font></font>
    &lt;script src="js/messageCtrl.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器文件包含以下代码：</font></font></p>

<pre><code>function MessageCtrl()<font></font>
{<font></font>
    this.message = function() { <font></font>
        return "The current date is: " + new Date().toString(); <font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是打印当前日期；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我要添加另一个控制器，</font></font><code>DateCtrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将特定格式的日期返回给</font></font><code>MessageCtrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么该怎么做呢？</font><font style="vertical-align: inherit;">DI框架似乎与</font></font><code>XmlHttpRequests</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务有关。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第937篇《一个AngularJS控制器可以调用另一个吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅卡卡西Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，使用发射和广播效率不高，因为事件在作用域层次结构中上下起泡，对于复杂的应用程序而言，它很容易降级为性能瓶颈。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用服务。</font><font style="vertical-align: inherit;">这是我最近在我的一个项目</font></font><a href="https://gist.github.com/3384419" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-https:</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> //gist.github.com/3384419中实现它的方式</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本思想-将pub-sub / event总线注册为服务。</font><font style="vertical-align: inherit;">然后将事件总线注入您需要订阅或发布事件/主题的地方。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外两个小提琴：（非服务方法）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）对于</font></font><code>$scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父子控制器</font><font style="vertical-align: inherit;">-使用</font><font style="vertical-align: inherit;">父控制器发出/广播事件。
     </font></font><a href="http://jsfiddle.net/laan_sachin/jnj6y/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/laan_sachin/jnj6y/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）</font></font><code>$rootScope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不相关的控制器上使用。
     </font></font><a href="http://jsfiddle.net/VxafF/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/VxafF/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
