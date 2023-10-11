---
layout: question
title:  Node.js / Express.js-app.router如何工作？
date:   2020-03-19T01:32:07.000Z
description: 在提出app.router疑问之前，我至少应该解释一下使用中间件时发生的事情。要使用中间件，要使用的功能是app.use()。当执行中间件时，它将使用ne...
img: 
author: TomJinJin
category: question
answer: 0
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在提出</font></font><code>app.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">疑问</font><font style="vertical-align: inherit;">之前，我</font><font style="vertical-align: inherit;">至少应该解释一下使用中间件时发生的事情。</font><font style="vertical-align: inherit;">要使用中间件，要使用的功能是</font></font><code>app.use()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当执行中间件时，它将使用</font></font><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使其</font><font style="vertical-align: inherit;">调用下一个中间件，</font><font style="vertical-align: inherit;">从而不再调用任何中间件。</font><font style="vertical-align: inherit;">这意味着我放置中间件调用的顺序很重要，因为某些中间件依赖于其他中间件，而接近末尾的某些中间件甚至可能不会被调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我正在开发应用程序，并在后台运行服务器。</font><font style="vertical-align: inherit;">我想进行一些更改并刷新页面，然后立即查看更改。</font><font style="vertical-align: inherit;">具体来说，我正在更改布局。</font><font style="vertical-align: inherit;">我无法使它正常工作，所以我在Stack Overflow中搜索了答案，并找到了</font></font><a href="https://stackoverflow.com/questions/5612777/stylus-and-express-stylesheets-are-not-re-compiled-when-modified"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它说要确保它</font></font><code>express.static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面</font></font><code>require('stylus')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，当我查看该OP的代码时，我发现他</font></font><code>app.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中间件调用的最后就接到了他的电话，我试图弄清楚为什么会这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我制作Express.js应用程序（版本3.0.0rc4）时，我使用了命令，</font></font><code>express app --sessions --css stylus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且在app.js文件中，</font></font><code>app.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>express.static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>require('stylus')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">上方都</font><font style="vertical-align: inherit;">设置了代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如此看来，如果它已经以这种方式设置，那么它应该保持这种方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新排列代码以便可以看到手写笔更改后，它看起来像这样：</font></font></p>

<pre><code>app.configure(function(){<font></font>
  //app.set() calls<font></font>
  //app.use() calls<font></font>
  //...<font></font>
  app.use(app.router);<font></font>
  app.use(require('stylus').middleware(__dirname + '/public'));<font></font>
  app.use(express.static(__dirname + '/public', {maxAge: 31557600000}));<font></font>
});<font></font>
<font></font>
app.get('/', routes.index);<font></font>
<font></font>
app.get('/test', function(req, res){<font></font>
  res.send('Test');<font></font>
});<font></font>
</code></pre>

<p>So I decided that the first step would be to find out why it is important to even have <code>app.router</code> in my code. So I commented it out, started my app and navigated to <code>/</code>. It displayed my index page just fine. Hmm, maybe it worked because I was exporting the routing from my routes file (routes.index). So next I navigated to <code>/test</code> and it displayed Test on the screen. Haha, OK, I have no idea what <code>app.router</code> does. Whether it is included in my code or not, my routing is fine. So I am definitely missing something.</p>

<p><strong>So Here Is My Question:</strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以解释一下</font></font><code>app.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的作用，重要性以及在中间件调用中的位置吗？</font><font style="vertical-align: inherit;">如果得到有关的简短说明，那也很好</font></font><code>express.static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">据我所知，</font></font><code>express.static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我的信息的缓存，如果应用程序找不到请求的页面，它将检查缓存以查看其是否存在。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2211篇《Node.js / Express.js-app.router如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
