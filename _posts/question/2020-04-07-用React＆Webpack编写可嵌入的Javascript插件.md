---
layout: question
title:  用React＆Webpack编写可嵌入的Javascript插件
date:   2020-04-07T03:45:42.000Z
description: 我希望能够将React应用程序与Webpack捆绑在一起，以便可以使用与客户端相关的一堆配置来获取，调用和初始化放在CDN上的分布式副本。阅读完这个和...
img: 
author: Gil伽罗小宇宙
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够将React应用程序与Webpack捆绑在一起，以便可以使用与客户端相关的一堆配置来获取，调用和初始化放在CDN上的分布式副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读完</font></font><a href="https://scotch.io/tutorials/building-your-own-javascript-modal-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/questions/25454029/embeddable-javascript-widget-with-react"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个之后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我将如下设置我的webpack入口文件：</font></font></p>

<pre><code>// ... React requires etc.<font></font>
<font></font>
(() =&gt; {<font></font>
  this.MyApp = (config) =&gt; {<font></font>
    // some constructor code here<font></font>
  }<font></font>
<font></font>
  MyApp.prototype.init = () =&gt; {<font></font>
    ReactDOM.render(&lt;MyReactApp config={MyApp.config} /&gt;, someSelector);<font></font>
  }<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想法是，在我的客户中，我可以执行以下操作：</font></font></p>

<pre><code>&lt;script src="./bundle.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
  MyApp.init({<font></font>
    some: "config"<font></font>
  });<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>MyApp#init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数会将我的React应用呈现在客户端的某个容器中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在以正确的方式思考吗？</font><font style="vertical-align: inherit;">有没有更简单或更有效的方法来解决此问题？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的错误是</font></font><code>Uncaught TypeError: Cannot set property 'MyApp' of undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE内部是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我真的很想了解为什么会这样以及如何解决它的建议。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
