---
layout: question
title:  如何通过next.js使用Firebase的firestore / admin sdk
date:   2020-03-27T12:14:47.000Z
description: 我正在用firebase和next.js构建应用程序我对这种设置还不陌生，对SSR还是完全陌生的，firebase文档使我感到困惑。 当前，我正在...
img: 
author: 村村
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用firebase和next.js构建应用程序</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对这种设置还不陌生，对SSR还是完全陌生的，firebase文档使我感到困惑。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，我正在使用firebase函数来运行next.js，它的工作原理很吸引人。</font><font style="vertical-align: inherit;">但是现在，我想使用Firestore。</font><font style="vertical-align: inherit;">根据文档，我看到了在我的项目中使用它的两种方法（如果我理解正确的话）。</font><font style="vertical-align: inherit;">第一个是“网络”解决方案，它对我来说不会有好处，因为我认为它不是SSR，而我的应用程序的重点仅在于此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个是'node.js'解决方案，该解决方案在firebase函数上运行，这对我来说更有意义。</font><font style="vertical-align: inherit;">我不知道的部分是与Next.js一起使用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在当前设置中，我正在将我的next.js应用程序构建</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> functions文件夹中，在function文件夹中，我可以引用使用'node.js'解决方案创建的databaseref对象，但是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建我的下一个应用程序</font><em><font style="vertical-align: inherit;">之前</font></em><font style="vertical-align: inherit;">如何引用它</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">所以当我不在功能文件夹中时？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设定：</font></font></p>

<pre><code>- src<font></font>
  - utils<font></font>
  - pages<font></font>
    - index.js<font></font>
    - signin.js<font></font>
    - // etc.<font></font>
- functions <font></font>
  - next // this is the output folder of my 'src' build<font></font>
  - index.js <font></font>
  - // etc.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在里面</font></font><code>functions/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以做：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const admin = require('firebase-admin');<font></font>
const functions = require('firebase-functions');<font></font>
<font></font>
admin.initializeApp(functions.config().firebase);<font></font>
<font></font>
let db = admin.firestore();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并用于</font></font><code>db</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">读取并添加到服务器端的Firestore中（对吗？）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我所有的代码都在</font></font><code>src/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建它之前就已经存在了，我认为我不能在那里使用它。</font><font style="vertical-align: inherit;">我应该以不同的方式组织项目吗？</font><font style="vertical-align: inherit;">或者我应该怎么做才能使用</font></font><code>db</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">或者，当然，还有另一种方法可以与我的Firestore建立服务器端连接。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3809篇《如何通过next.js使用Firebase的firestore / admin sdk》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
