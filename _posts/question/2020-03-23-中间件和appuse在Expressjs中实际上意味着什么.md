---
layout: question
title:  中间件和app.use在Expressjs中实际上意味着什么？
date:   2020-03-23T03:31:24.000Z
description: 我看到的几乎每个Express应用程序都有app.use关于中间件的声明，但是我没有找到关于中间件实际上是什么以及该app.use声明在做什么的清晰，简洁...
img: 
author: 古一
category: question
answer: 4
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到的几乎每个Express应用程序都有</font></font><code>app.use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于中间件</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">声明，但是我没有找到关于中间件实际上是什么以及该</font></font><code>app.use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明在做</font><font style="vertical-align: inherit;">什么的清晰，简洁的解释</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即使是快速文档本身对此也含糊不清。</font><font style="vertical-align: inherit;">你能帮我解释一下这些概念吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2734篇《中间件和app.use在Expressjs中实际上意味着什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件是Express js路由层在调用用户定义的处理程序之前调用的链接函数的子集。</font><font style="vertical-align: inherit;">中间件功能具有对请求和响应对象的完全访问权限，并且可以对其进行修改。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
中间件链始终按定义时的确切顺序调用，因此对您确切地了解特定中间件的功能至关重要。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件函数完成后，它将通过调用其下一个参数作为函数来调用链中的下一个函数。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行完完整的链后，将调用用户请求处理程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化之后，Web服务器可以看作是接受请求并输出响应的功能。</font><font style="vertical-align: inherit;">因此，如果您将Web服务器视为一种功能，则可以将其组织成几部分并将其分成较小的功能，这样它们的组成将成为原始功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件是您可以与其他人组合的较小功能，显而易见的好处是您可以重用它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=====非常简单的解释=====</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件通常在Express.js框架的上下文中使用，并且是node.js的基本概念。</font><font style="vertical-align: inherit;">简而言之，它基本上是一种可以访问应用程序的请求和响应对象的功能。</font><font style="vertical-align: inherit;">我想考虑的方式是在请求由应用程序处理之前经历的一系列“检查/预屏”。</font><font style="vertical-align: inherit;">例如，中间件非常适合在请求进入应用程序之前确定请求是否已通过身份验证，如果请求未通过身份验证或用于记录每个请求，则返回登录页面。</font><font style="vertical-align: inherit;">有许多第三方中间件可供使用，这些中间件可以启用各种功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的中间件示例：</font></font></p>

<pre><code>var app = express();<font></font>
app.use(function(req,res,next)){<font></font>
    console.log("Request URL - "req.url);<font></font>
    next();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码将针对每个进入的请求执行，并记录请求的URL，next（）方法实质上允许程序继续。</font><font style="vertical-align: inherit;">如果未调用next（）函数，则该程序将不会继续进行，并且会在中间件执行时停止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几个中间件陷阱：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件在应用程序中的顺序很重要，因为请求将按顺序依次进行。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忘记在中间件函数中调用next（）方法可能会中断请求的处理。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件功能中对req和res对象的任何更改都会使更改对使用req和res的应用程序的其他部分可用</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件是在输入/源之后在中间执行的函数，然后产生一个输出，该输出可以是最终输出，也可以由下一个中间件使用，直到循环完成为止。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像产品流经装配线一样，在生产过程中它会不断进行修改，直到完成，评估或被拒绝为止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件期望某些值（即参数值）起作用，并且基于某种逻辑，中间件将调用或不调用下一个中间件或将响应发送回客户端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您仍然不能掌握中间件的概念，那么它的方式类似于Decorator或Command模式的链。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
