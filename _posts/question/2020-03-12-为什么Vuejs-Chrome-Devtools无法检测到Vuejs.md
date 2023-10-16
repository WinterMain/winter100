---
layout: question
title:  为什么Vue.js Chrome Devtools无法检测到Vue.js？
date:   2020-03-12T07:22:29.000Z
description: 我有一个简单的工作Vue.js应用程序的以下代码。但是vue.js devtools没有响应。几天前它运行良好，现在不再运行，可能是哪里出了问题？当我转到...
img: 
author: 老丝Tony
category: question
answer: 8
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个简单的工作Vue.js应用程序的以下代码。</font><font style="vertical-align: inherit;">但是vue.js devtools没有响应。</font><font style="vertical-align: inherit;">几天前它运行良好，现在不再运行，可能是哪里出了问题？</font><font style="vertical-align: inherit;">当我转到</font></font><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它说它已经被添加了。</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;meta charset="UTF-8"&gt;<font></font>
  &lt;meta name="viewport"<font></font>
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"&gt;<font></font>
  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;<font></font>
<font></font>
  &lt;script src="https://unpkg.com/vue@2.1.6/dist/vue.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;title&gt;Document&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div class="container"&gt;<font></font>
  &lt;div id="application"&gt;<font></font>
    &lt;input type="text" v-model="message"&gt;<font></font>
    &lt;p&gt;The value of the input is: {{ message }}&lt;/p&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  let data = {<font></font>
    message: 'Hello World'<font></font>
  }<font></font>
<font></font>
  new Vue({<font></font>
    el: '#application',<font></font>
    data: data<font></font>
  })<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1051篇《为什么Vue.js Chrome Devtools无法检测到Vue.js？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经</font></font><code>Allow Access to file URLs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>chrome://extensions/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt;中</font><font style="vertical-align: inherit;">打开</font></font><code>Vue Devtools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仍然无法使用，请尝试重新安装Vue Devtools，可能对您有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我解决了同样的问题。</font><font style="vertical-align: inherit;">但是在我的情况下，Vue.js Chrome Devtools无法检测到Vue.js，因为html文件中</font></font><code>&lt;script src="https://unpkg.com/vue"/&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其替换为</font></font><code>&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Now Chrome Devtools正在完美检测Vue.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢上面的例子。我使用vue@2.4.4并通过以下方式打开我的html： </font></font><code>file://</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋阿飞小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在chrome浏览器的extensions文件夹中，在vue devtools扩展的details选项卡下，选中允许访问文件URL的框，这对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现了相同的问题，并通过添加解决了</font></font></p>

<pre><code>Vue.config.devtools = true;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue.js导入脚本之后，然后看看chrome devtools。</font><font style="vertical-align: inherit;">您将看到一个名为的选项卡，</font></font><code>Vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于检查您的vue实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://vuejs.org/v2/api/#devtools" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://vuejs.org/v2/api/#devtools" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vuejs.org/v2/api/#devtools</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，只需转到</font></font><code>chrome://extensions/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，向下滚动到Vue.js devtools并</font><font style="vertical-align: inherit;">通过单击其复选框</font><font style="vertical-align: inherit;">启用“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许访问文件URL</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://github.com/vuejs/vue-devtools/issues/236" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/vuejs/vue-devtools/issues/236" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuejs/vue-devtools/issues/236</font></font></a>  </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用Vue配置禁用：</font><a href="https://vuejs.org/v2/api/#devtools" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://vuejs.org/v2/api/#devtools" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vuejs.org/v2/api/#devtools</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如OP </font></font><a href="https://stackoverflow.com/a/41215913/1404279"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一种替代方法是设置本地Web服务器</font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
另一个-IMHO速度更快且骚扰更少-是让扩展程序可以访问文件URL，该URL默认情况下处于禁用状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需转到</font></font><code>chrome://extensions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并保留</font><font style="vertical-align: inherit;">Vue.js devtools </font><font style="vertical-align: inherit;">的“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许访问文件URL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”复选框。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><br>
<a href="https://github.com/vuejs/vue-devtools#common-problems-and-how-to-fix" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/vuejs/vue-devtools#common-problems-and-how-to-fix" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/vuejs/vue-devtools#common-problems-and-how-to-fix </font></a></font><br>
<a href="http://codersdeck.com/vue-js-2-setting-vue-devtools/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codersdeck.com/vue-js-2-setting-vue-devtools/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了答案，我在计算机上查看了一个纯HTML文件，这使vue.js工具无法加载。</font><font style="vertical-align: inherit;">我加载了本地xampp服务器，并再次从本地计算机服务器url运行了该应用程序，现在vue.js devtools可以运行了！</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
