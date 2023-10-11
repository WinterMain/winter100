---
layout: question
title:  如何使用underscore.js作为模板引擎？
date:   2020-03-20T02:23:27.000Z
description: 我正在尝试学习javascript作为服务器端语言和功能性语言的新用法。几天前，我听说了node.js和express框架。然后我看到了underscor...
img: 
author: 神无宝儿
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试学习javascript作为服务器端语言和功能性语言的新用法。</font><font style="vertical-align: inherit;">几天前，我听说了node.js和express框架。</font><font style="vertical-align: inherit;">然后我看到了underscore.js作为一组实用程序功能。</font><font style="vertical-align: inherit;">我</font></font><a href="https://stackoverflow.com/questions/1787716/is-there-a-template-engine-for-node-js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在stackoverflow上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到了</font><a href="https://stackoverflow.com/questions/1787716/is-there-a-template-engine-for-node-js"><font style="vertical-align: inherit;">这个问题
</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它说我们可以使用underscore.js作为模板引擎。</font><font style="vertical-align: inherit;">任何人都知道有关如何使用underscore.js进行模板制作的很好的教程，尤其是对于那些对高级javascript经验较少的biginner而言。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2443篇《如何使用underscore.js作为模板引擎？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想分享一个更重要的发现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用&lt;％= variable =&gt;将导致跨站点脚本漏洞。</font><font style="vertical-align: inherit;">因此，使用&lt;％-variable-&gt;代替更为安全。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们必须用&lt;％-替换&lt;％=，以防止跨站点脚本攻击。</font><font style="vertical-align: inherit;">不确定，这是否会对性能产生影响</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一西里</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我举一个非常简单的例子</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）  </font></font></p>

<pre><code>var data = {site:"mysite",name:"john",age:25};<font></font>
var template = "Welcome you are at &lt;%=site %&gt;.This has been created by &lt;%=name %&gt; whose age is &lt;%=age%&gt;";<font></font>
var parsedTemplate = _.template(template,data);<font></font>
console.log(parsedTemplate); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果将是</font></font></p>

<pre><code>Welcome you are at mysite.This has been created by john whose age is 25.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）这是一个模板</font></font></p>

<pre><code>   &lt;script type="text/template" id="template_1"&gt;<font></font>
       &lt;% _.each(items,function(item,key,arr) { %&gt;<font></font>
          &lt;li&gt;<font></font>
             &lt;span&gt;&lt;%= key %&gt;&lt;/span&gt;<font></font>
             &lt;span&gt;&lt;%= item.name %&gt;&lt;/span&gt;<font></font>
             &lt;span&gt;&lt;%= item.type %&gt;&lt;/span&gt;<font></font>
           &lt;/li&gt;<font></font>
       &lt;% }); %&gt;<font></font>
   &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是html</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  &lt;ul id="list_2"&gt;&lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是包含json对象并将模板放入html的javascript代码</font></font></p>

<p></p>

<pre><code>   var items = [<font></font>
       {<font></font>
          name:"name1",<font></font>
          type:"type1"<font></font>
       },<font></font>
       {<font></font>
          name:"name1",<font></font>
          type:"type1"<font></font>
       },<font></font>
       {<font></font>
          name:"name1",<font></font>
          type:"type1"<font></font>
       },<font></font>
       {<font></font>
          name:"name1",<font></font>
          type:"type1"<font></font>
       },<font></font>
       {<font></font>
          name:"name1",<font></font>
          type:"type1"<font></font>
       } <font></font>
   ];<font></font>
  $(document).ready(function(){<font></font>
      var template = $("#template_1").html();<font></font>
      $("#list_2").html(_.template(template,{items:items}));<font></font>
  });<font></font>
</code></pre>

<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要了解有关下划线模板的所有</font></font><a href="http://underscorejs.org/#template" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">信息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仅需记住三件事：</font></font></p>

<ol>
<li><code>&lt;%  %&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -执行一些代码</font></font></li>
<li><code>&lt;%= %&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -在模板中打印一些值</font></font></li>
<li><code>&lt;%- %&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -打印一些HTML转义的值</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的例子：</font></font></p>

<pre><code>var tpl = _.template("&lt;h1&gt;Some text: &lt;%= foo %&gt;&lt;/h1&gt;");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>tpl({foo: "blahblah"})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将呈现为字符串</font></font><code>&lt;h1&gt;Some text: blahblah&lt;/h1&gt;</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
