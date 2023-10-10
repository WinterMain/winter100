---
layout: question
title:  AngularJS：使用异步数据初始化服务
date:   2020-03-12T12:40:46.000Z
description: 我有一个AngularJS服务，我想使用一些异步数据进行初始化。像这样：myModule.service('MyService', function(...
img: 
author: 伽罗Mandy
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个AngularJS服务，我想使用一些异步数据进行初始化。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>myModule.service('MyService', function($http) {<font></font>
    var myData = null;<font></font>
<font></font>
    $http.get('data.json').success(function (data) {<font></font>
        myData = data;<font></font>
    });<font></font>
<font></font>
    return {<font></font>
        setData: function (data) {<font></font>
            myData = data;<font></font>
        },<font></font>
        doStuff: function () {<font></font>
            return myData.getSomeData();<font></font>
        }<font></font>
    };<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，这是行不通的，因为如果</font></font><code>doStuff()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>myData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">尝试调用某些方法，</font><font style="vertical-align: inherit;">则会得到一个空指针异常。</font><font style="vertical-align: inherit;">据我从阅读</font></font><a href="https://stackoverflow.com/questions/12657389/angularjs-load-service-then-call-controller-and-render"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/questions/15164013/json-to-initialize-data-in-service"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出的其他一些问题中所知道的，</font><font style="vertical-align: inherit;">我有一些选择，但是它们似乎都不是很干净（也许我错过了一些东西）：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装服务“运行”</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置我的应用时，请执行以下操作：</font></font></p>

<pre><code>myApp.run(function ($http, MyService) {<font></font>
    $http.get('data.json').success(function (data) {<font></font>
        MyService.setData(data);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我的服务将如下所示：</font></font></p>

<pre><code>myModule.service('MyService', function() {<font></font>
    var myData = null;<font></font>
    return {<font></font>
        setData: function (data) {<font></font>
            myData = data;<font></font>
        },<font></font>
        doStuff: function () {<font></font>
            return myData.getSomeData();<font></font>
        }<font></font>
    };<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有时会起作用，但是如果异步数据恰好比初始化所有东西花费的时间更长，则在我调用时会得到一个空指针异常 </font></font><code>doStuff()</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用承诺对象</font></font></strong></p>

<p>This would probably work. The only downside it everywhere I call MyService I will have to know that doStuff() returns a promise and all the code will have to us <code>then</code> to interact with the promise. I would rather just wait until myData is back before loading the my application.</p>

<p><strong>Manual Bootstrap</strong> </p>

<pre><code>angular.element(document).ready(function() {<font></font>
    $.getJSON("data.json", function (data) {<font></font>
       // can't initialize the data here because the service doesn't exist yet<font></font>
       angular.bootstrap(document);<font></font>
       // too late to initialize here because something may have already<font></font>
       // tried to call doStuff() and would have got a null pointer exception<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><strong>Global Javascript Var</strong>
I could send my JSON directly to a global Javascript variable:</p>

<p>HTML:</p>

<pre><code>&lt;script type="text/javascript" src="data.js"&gt;&lt;/script&gt;
</code></pre>

<p>data.js:</p>

<pre><code>var dataForMyService = { <font></font>
// myData here<font></font>
};<font></font>
</code></pre>

<p>Then it would be available when initializing <code>MyService</code>:</p>

<pre><code>myModule.service('MyService', function() {<font></font>
    var myData = dataForMyService;<font></font>
    return {<font></font>
        doStuff: function () {<font></font>
            return myData.getSomeData();<font></font>
        }<font></font>
    };<font></font>
});<font></font>
</code></pre>

<p>This would work too, but then I have a global javascript variable which smells bad.</p>

<p>Are these my only options? Are one of these options better than the others? I know this is a pretty long question, but I wanted to show that I have tried to explore all my options. Any guidance would greatly be appreciated. </p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1332篇《AngularJS：使用异步数据初始化服务》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在执行实际的控制器之前，您可以使用以下技术在全球范围内配置服务：</font></font><a href="https://stackoverflow.com/a/27050497/1056679"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://stackoverflow.com/a/27050497/1056679"><font style="vertical-align: inherit;">//stackoverflow.com/a/27050497/1056679</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需全局解析您的数据，然后将其</font></font><code>run</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font><font style="vertical-align: inherit;">以</font><font style="vertical-align: inherit;">块形式</font><font style="vertical-align: inherit;">传递给您的服务</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
