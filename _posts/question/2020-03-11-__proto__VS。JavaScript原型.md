---
layout: question
title:  __proto__VS。JavaScript原型
date:   2020-03-11T02:45:08.000Z
description:   该图再次显示每个对象都有一个原型。构造函数Foo也具有其自己__proto__的Function.prototype，而Foo又通过其__proto...
img: 
author: Tony西门古一
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该图再次显示每个对象都有一个原型。</font><font style="vertical-align: inherit;">构造函数Foo也具有其自己</font></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的Function.prototype，而</font><font style="vertical-align: inherit;">Foo又</font><font style="vertical-align: inherit;">通过其</font></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性再次</font><font style="vertical-align: inherit;">引用</font><font style="vertical-align: inherit;">Object.prototype。</font><font style="vertical-align: inherit;">因此，重复一遍，Foo.prototype只是Foo的显式属性，它引用b和c对象的原型。</font></font></p>
</blockquote>

<pre><code>var b = new Foo(20);<font></font>
var c = new Foo(30);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/7505/images/thumbnails/1583894580970.png" data-src="https://www.samyoc.com//uploads/users/7505/images/1583894580970.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该图取自</font></font><a href="http://dmitrysoshnikov.com/ecmascript/javascript-the-core/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dmitrysoshnikov.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第556篇《__proto__VS。JavaScript原型》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
