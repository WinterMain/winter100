---
layout: question
title:  等到所有jQuery Ajax请求都完成了吗？
date:   2020-03-11T07:25:44.000Z
description: 我如何让一个函数等到所有jQuery Ajax请求都在另一个函数中完成之后？简而言之，在执行下一个请求之前，我需要等待所有Ajax请求完成。但是如何？...
img: 
author: 你的名字
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何让一个函数等到所有jQuery Ajax请求都在另一个函数中完成之后？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，在执行下一个请求之前，我需要等待所有Ajax请求完成。</font><font style="vertical-align: inherit;">但是如何？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第730篇《等到所有jQuery Ajax请求都完成了吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>$.when</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适用于我，</font></font><code>callback(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>return x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按此处所述工作：</font><a href="https://stackoverflow.com/a/13455253/10357604"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/13455253/10357604"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/13455253/10357604</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了扩展Alex的答案，我有一个带有可变参数和Promise的示例。</font><font style="vertical-align: inherit;">我想通过ajax加载图像，并在它们全部加载后在页面上显示它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我使用了以下内容：</font></font></p>

<pre><code>let urlCreator = window.URL || window.webkitURL;<font></font>
<font></font>
// Helper function for making ajax requests<font></font>
let fetch = function(url) {<font></font>
    return $.ajax({<font></font>
        type: "get",<font></font>
        xhrFields: {<font></font>
            responseType: "blob"<font></font>
        },<font></font>
        url: url,<font></font>
    });<font></font>
};<font></font>
<font></font>
// Map the array of urls to an array of ajax requests<font></font>
let urls = ["https://placekitten.com/200/250", "https://placekitten.com/300/250"];<font></font>
let files = urls.map(url =&gt; fetch(url));<font></font>
<font></font>
// Use the spread operator to wait for all requests<font></font>
$.when(...files).then(function() {<font></font>
    // If we have multiple urls, then loop through<font></font>
    if(urls.length &gt; 1) {<font></font>
        // Create image urls and tags for each result<font></font>
        Array.from(arguments).forEach(data =&gt; {<font></font>
            let imageUrl = urlCreator.createObjectURL(data[0]);<font></font>
            let img = `&lt;img src=${imageUrl}&gt;`;<font></font>
            $("#image_container").append(img);<font></font>
        });<font></font>
    }<font></font>
    else {<font></font>
        // Create image source and tag for result<font></font>
        let imageUrl = urlCreator.createObjectURL(arguments[0]);<font></font>
        let img = `&lt;img src=${imageUrl}&gt;`;<font></font>
        $("#image_container").append(img);<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新为可用于单个或多个URL：</font><a href="https://jsfiddle.net/euypj5w9/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/euypj5w9/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/euypj5w9/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用</font></font><a href="https://github.com/caolan/async#map" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">async.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为它比$ .when更好，因为您可以合并各种不支持承诺的异步调用，例如超时，SqlLite调用等，而不仅仅是ajax请求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">奔跑的小象</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery允许您指定是否要使ajax请求异步。</font><font style="vertical-align: inherit;">您可以简单地使ajax请求同步，然后其余代码直到它们返回才执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>jQuery.ajax({ <font></font>
    async: false,<font></font>
    //code<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>ajaxStop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设您</font><font style="vertical-align: inherit;">在获取100个Ajax请求时收到</font><font style="vertical-align: inherit;">了一条</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">loading ...</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息，并且希望在加载后隐藏该消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从jQuery </font></font><a href="http://api.jquery.com/ajaxStop/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$("#loading").ajaxStop(function() {<font></font>
  $(this).hide();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它将等待该页面上完成的所有ajax请求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想等到</font></font><code>ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中的</font><font style="vertical-align: inherit;">所有</font><font style="vertical-align: inherit;">请求都完成后，无论它们中有多少，都可以通过</font><font style="vertical-align: inherit;">以下方式</font><font style="vertical-align: inherit;">使用</font></font><a href="http://api.jquery.com/ajaxStop/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ .ajaxStop</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件：</font></font></p>

<pre><code>  $(document).ajaxStop(function () {<font></font>
      // 0 === $.active<font></font>
  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，无需猜测将来可能会完成的应用程序中有多少个请求。</font><font style="vertical-align: inherit;">在某些情况下，ajax请求可能是函数内部逻辑的一部分，这可能非常复杂（例如，调用其他函数），在这种情况下，您可能不会等到该函数用其整个逻辑完成后才开始，而</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不仅仅是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等待</font></font><code>ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分完成。</font></font></p>

<p><a href="http://api.jquery.com/ajaxStop/" rel="nofollow noreferrer"><code>$.ajaxStop</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里也可以绑定到</font></font><code>HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您认为可能被修改的</font><font style="vertical-align: inherit;">任何</font><font style="vertical-align: inherit;">节点</font></font><code>ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，此处理程序的目的是要知道何时没有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动</font></font></strong> <code>ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除或重置某些内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：如果您不介意使用</font></font><code>ES6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，则可以使用</font></font><code>Promise.all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已知</font></font><code>ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>Promise.all([ajax1(), ajax2()]).then(() =&gt; {<font></font>
 // all requests finished successfully<font></font>
}).catch(() =&gt; {<font></font>
 // all requests finished but one or more failed<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有趣的一点是，它可以同时处理</font></font><code>Promises</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>$.ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">展示最后一个</font><font style="vertical-align: inherit;">的</font></font><a href="http://jsfiddle.net/o3vmudhx/4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery现在</font><font style="vertical-align: inherit;">为此目的</font><font style="vertical-align: inherit;">定义了一个</font></font><a href="http://api.jquery.com/jQuery.when/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">when函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它接受任意数量的Deferred对象作为参数，并在它们全部解析后执行一个函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着，如果您要发起（例如）四个ajax请求，然后在完成后执行操作，则可以执行以下操作：</font></font></p>

<pre><code>$.when(ajax1(), ajax2(), ajax3(), ajax4()).done(function(a1, a2, a3, a4){<font></font>
    // the code here will be executed when all four ajax requests resolve.<font></font>
    // a1, a2, a3 and a4 are lists of length 3 containing the response text,<font></font>
    // status, and jqXHR object for each of the four ajax calls respectively.<font></font>
});<font></font>
<font></font>
function ajax1() {<font></font>
    // NOTE:  This function must return the value <font></font>
    //        from calling the $.ajax() method.<font></font>
    return $.ajax({<font></font>
        url: "someUrl",<font></font>
        dataType: "json",<font></font>
        data:  yourJsonData,            <font></font>
        ...<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，它使语法清晰明了，并避免涉及任何全局变量（例如ajaxStart和ajaxStop），这些全局变量在页面开发时可能会产生有害的副作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您事先不知道需要等待多少个ajax参数（即，您想使用可变数量的参数），它仍然可以完成，但是有点棘手。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://stackoverflow.com/q/5627284/1048572"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Deferreds数组传递给$ .when（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以及在</font></font><a href="https://stackoverflow.com/questions/9865586/jquery-when-troubleshooting-with-variable-number-of-arguments"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用可变数量的参数进行故障排除时，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能还有</font><a href="https://stackoverflow.com/questions/9865586/jquery-when-troubleshooting-with-variable-number-of-arguments"><font style="vertical-align: inherit;">jQuery。</font></a><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要对ajax脚本等的失败模式进行更深入的控制，则可以保存由返回的对象</font></font><code>.when()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-这是一个jQuery </font></font><a href="http://api.jquery.com/Types/#Promise" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Promise</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，其中包含所有原始ajax查询。</font><font style="vertical-align: inherit;">您可以调用</font></font><code>.then()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>.fail()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其上添加详细的成功/失败处理程序。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
