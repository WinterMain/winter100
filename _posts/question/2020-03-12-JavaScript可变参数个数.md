---
layout: question
title:  JavaScript可变参数个数
date:   2020-03-12T08:36:31.000Z
description: 有没有办法允许JavaScript中的函数使用“无限”的var？例：load(var1, var2, var3, var4, var5, etc....
img: 
author: 小宇宙神奇飞云
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法允许JavaScript中的函数使用“无限”的var？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>load(var1, var2, var3, var4, var5, etc...)<font></font>
load(var1)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1151篇《JavaScript可变参数个数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，按照Ken的建议传递带有命名属性的Object会增加分配和释放临时对象到每个调用的成本。</font><font style="vertical-align: inherit;">通过值或引用传递普通参数通常是最有效的。</font><font style="vertical-align: inherit;">对于许多应用程序而言，性能并不关键，但对于某些应用程序则可能至关重要。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管我通常都同意命名实参方法是有用且灵活的（除非您关心顺序，在这种情况下实参最简单），但我确实对mbeasley方法的成本（使用默认值和扩展）感到担忧。</font><font style="vertical-align: inherit;">拉取默认值要花费极高的成本。</font><font style="vertical-align: inherit;">首先，默认值是在函数内部定义的，因此每次调用都会重新填充它们。</font><font style="vertical-align: inherit;">其次，您可以轻松地读出命名值并使用||同时设置默认值。</font><font style="vertical-align: inherit;">无需创建和合并另一个新对象即可获取此信息。</font></font></p>

<pre><code>function load(context) {<font></font>
   var parameter1 = context.parameter1 || defaultValue1,<font></font>
       parameter2 = context.parameter2 || defaultValue2;<font></font>
<font></font>
   // do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这大约是相同数量的代码（可能略多），但是应该只是运行时成本的一小部分。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数内部</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">对象可以访问传入的所有参数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，就像这样： </font></font></p>

<pre><code>function load()<font></font>
{<font></font>
  var var0 = arguments[0];<font></font>
  var var1 = arguments[1];<font></font>
}<font></font>
<font></font>
load(1,2);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意Ken的回答是最有活力的，并且我想更进一步。</font><font style="vertical-align: inherit;">如果您使用不同的参数多次调用该函数-我使用Ken的设计，然后添加默认值：</font></font></p>

<pre><code>function load(context) {<font></font>
<font></font>
    var defaults = {<font></font>
        parameter1: defaultValue1,<font></font>
        parameter2: defaultValue2,<font></font>
        ...<font></font>
    };<font></font>
<font></font>
    var context = extend(defaults, context);<font></font>
<font></font>
    // do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，如果您有许多参数，但不必每次调用该函数都进行设置，则只需指定非默认值即可。</font><font style="vertical-align: inherit;">对于extend方法，您可以使用jQuery的extend方法（</font></font><code>$.extend()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），自己编写或使用以下方法：</font></font></p>

<pre><code>function extend() {<font></font>
    for (var i = 1; i &lt; arguments.length; i++)<font></font>
        for (var key in arguments[i])<font></font>
            if (arguments[i].hasOwnProperty(key))<font></font>
                arguments[0][key] = arguments[i][key];<font></font>
    return arguments[0];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会将上下文对象与默认值合并，并使用默认值填充对象中所有未定义的值。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如Ramast所指出的，最好使用rest参数语法。 </font></font></p>

<pre><code>function (a, b, ...args) {}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想添加... args参数的一些不错的属性</font></font></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一个数组，而不是类似参数的对象。</font><font style="vertical-align: inherit;">这使您可以应用地图或直接排序等功能。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不包括所有参数，而仅包括从其传递过来的参数。</font><font style="vertical-align: inherit;">例如，函数（a，b，... args）在这种情况下args包含arguments.length的参数3</font></font></li>
  </ol>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，只需使用</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象即可。</font></font></p>

<pre><code>function foo() {<font></font>
  for (var i = 0; i &lt; arguments.length; i++) {<font></font>
    console.log(arguments[i]);<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
