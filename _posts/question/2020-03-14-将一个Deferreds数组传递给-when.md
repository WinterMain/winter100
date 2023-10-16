---
layout: question
title:  将一个Deferreds数组传递给$ .when（）
date:   2020-03-14T09:51:08.000Z
description: 这是正在发生的事情的一个虚构示例：http   //jsfiddle.net/adamjford/YNGcm/20/HTML：<a href="#...
img: 
author: 神无Green前端
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是正在发生的事情的一个虚构示例：</font><a href="http://jsfiddle.net/adamjford/YNGcm/20/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/adamjford/YNGcm/20/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/adamjford/YNGcm/20/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;a href="#"&gt;Click me!&lt;/a&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></p>

<pre><code>function getSomeDeferredStuff() {<font></font>
    var deferreds = [];<font></font>
<font></font>
    var i = 1;<font></font>
    for (i = 1; i &lt;= 10; i++) {<font></font>
        var count = i;<font></font>
<font></font>
        deferreds.push(<font></font>
        $.post('/echo/html/', {<font></font>
            html: "&lt;p&gt;Task #" + count + " complete.",<font></font>
            delay: count<font></font>
        }).success(function(data) {<font></font>
            $("div").append(data);<font></font>
        }));<font></font>
    }<font></font>
<font></font>
    return deferreds;<font></font>
}<font></font>
<font></font>
$(function() {<font></font>
    $("a").click(function() {<font></font>
        var deferreds = getSomeDeferredStuff();<font></font>
<font></font>
        $.when(deferreds).done(function() {<font></font>
            $("div").append("&lt;p&gt;All done!&lt;/p&gt;");<font></font>
        });<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要“全部完成！” </font><font style="vertical-align: inherit;">在所有延迟任务完成后</font></font><code>$.when()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现</font><font style="vertical-align: inherit;">，但</font><font style="vertical-align: inherit;">似乎不知道如何处理一系列Deferred对象。</font><font style="vertical-align: inherit;">“全做完了！” </font><font style="vertical-align: inherit;">首先发生是因为数组不是Deferred对象，所以jQuery继续进行并假设它已经完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道有人可以像这样将对象传递给函数，</font></font><code>$.when(deferred1, deferred2, ..., deferredX)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是未知我要解决的实际问题中执行多少个Deferred对象。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1583篇《将一个Deferreds数组传递给$ .when（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小次郎</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是angularJS或Q Promise库的某些变体，那么您可以使用</font></font><code>.all()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决此确切问题的方法。</font></font></p>

<pre><code>var savePromises = [];<font></font>
angular.forEach(models, function(model){<font></font>
  savePromises.push(<font></font>
    model.saveToServer()<font></font>
  )<font></font>
});<font></font>
<font></font>
$q.all(savePromises).then(<font></font>
  function success(results){...},<font></font>
  function failed(results){...}<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看完整的API：</font></font></p>

<p><a href="https://github.com/kriskowal/q/wiki/API-Reference#promiseall" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kriskowal/q/wiki/API-Reference#promiseall</font></font></a></p>

<p><a href="https://docs.angularjs.org/api/ng/service/%24q" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.angularjs.org/api/ng/service/$q</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇小小</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想用$ .each提出另一个建议：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以像这样声明ajax函数：</font></font></p>

<pre><code>function ajaxFn(someData) {<font></font>
    this.someData = someData;<font></font>
    var that = this;<font></font>
    return function () {<font></font>
        var promise = $.Deferred();<font></font>
        $.ajax({<font></font>
            method: "POST",<font></font>
            url: "url",<font></font>
            data: that.someData,<font></font>
            success: function(data) {<font></font>
                promise.resolve(data);<font></font>
            },<font></font>
            error: function(data) {<font></font>
                promise.reject(data);<font></font>
            }<font></font>
        })<font></font>
        return promise;<font></font>
    }<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们使用ajax创建要发送的函数数组的一部分代码：</font></font></p>

<pre><code>var arrayOfFn = [];<font></font>
for (var i = 0; i &lt; someDataArray.length; i++) {<font></font>
    var ajaxFnForArray = new ajaxFn(someDataArray[i]);<font></font>
    arrayOfFn.push(ajaxFnForArray);<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并通过发送ajax调用函数：</font></font></p>

<pre><code>$.when(<font></font>
    $.each(arrayOfFn, function(index, value) {<font></font>
        value.call()<font></font>
    })<font></font>
).then(function() {<font></font>
        alert("Cheer!");<font></font>
    }<font></font>
)<font></font>
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在转译并可以访问ES6，则可以使用传播语法，该语法专门将对象的每个可迭代项作为离散参数应用，恰恰是</font></font><code>$.when()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要它</font><font style="vertical-align: inherit;">的方式</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$.when(...deferreds).done(() =&gt; {<font></font>
    // do stuff<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN链接-传播语法</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙小小米亚</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将</font></font><code>when</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法应用于数组：</font></font></p>

<pre><code>var arr = [ /* Deferred objects */ ];<font></font>
<font></font>
$.when.apply($, arr);<font></font>
</code></pre>

<p><a href="https://stackoverflow.com/questions/4878887/how-do-you-work-with-an-array-of-jquery-deferreds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何使用jQuery Deferreds数组？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将值数组传递给</font><font style="vertical-align: inherit;">通常希望它们是单独参数的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，请使用</font></font><code>Function.prototype.apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此在这种情况下，您需要：</font></font></p>

<pre><code>$.when.apply($, my_array).then( ___ );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="http://jsfiddle.net/YNGcm/21/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/YNGcm/21/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，可以</font><font style="vertical-align: inherit;">改为</font><font style="vertical-align: inherit;">使用</font></font><code>...</code> <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传播运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$.when(...my_array).then( ___ );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这两种情况下，由于您不太可能事先知道</font></font><code>.then</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理程序需要</font><font style="vertical-align: inherit;">多少个形式参数</font><font style="vertical-align: inherit;">，因此该处理程序将需要处理</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组以检索每个Promise的结果。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
