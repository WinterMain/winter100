---
layout: question
title:  如何将现有的回调API转换为Promise？
date:   2020-03-11T06:30:18.000Z
description: 我想使用Promise，但是我有一个类似以下格式的回调API：1. DOM加载或其他一次事件：window.onload; // set to c...
img: 
author: 凯斯丁
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用Promise，但是我有一个类似以下格式的回调API：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1. DOM加载或其他一次事件：</font></font></h3>

<pre><code>window.onload; // set to callback<font></font>
...<font></font>
window.onload = function() {<font></font>
<font></font>
};<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.普通回调：</font></font></h3>

<pre><code>function request(onChangeHandler) {<font></font>
    ...<font></font>
}<font></font>
request(function() {<font></font>
    // change happened<font></font>
    ...<font></font>
});<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.节点样式回调（“ nodeback”）：</font></font></h3>

<pre><code>function getStuff(dat, callback) {<font></font>
    ...<font></font>
}<font></font>
getStuff("dataParam", function(err, data) {<font></font>
    ...<font></font>
})<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.带有节点样式回调的整个库：</font></font></h3>

<pre><code>API;<font></font>
API.one(function(err, data) {<font></font>
    API.two(function(err, data2) {<font></font>
        API.three(function(err, data3) {<font></font>
            ...<font></font>
        });<font></font>
    });<font></font>
});<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Promise中使用API​​，如何“承诺”呢？</font></font></h3></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第684篇《如何将现有的回调API转换为Promise？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大概晚了5年，但我想在这里发布我的promesify版本，该版本采用回调API的功能并将其转化为承诺</font></font></p>

<pre><code>const promesify = fn =&gt; {<font></font>
  return (...params) =&gt; ({<font></font>
    then: cbThen =&gt; ({<font></font>
      catch: cbCatch =&gt; {<font></font>
        fn(...params, cbThen, cbCatch);<font></font>
      }<font></font>
    })<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里看看这个非常简单的版本：</font><a href="https://gist.github.com/jdtorregrosas/aeee96dd07558a5d18db1ff02f31e21a" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://gist.github.com/jdtorregrosas/aeee96dd07558a5d18db1ff02f31e21a" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/jdtorregrosas/aeee96dd07558a5d18db1ff02f31e21a</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tony小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在ES6中</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地Promise</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如处理setTimeout：</font></font></p>

<pre><code>enqueue(data) {<font></font>
<font></font>
    const queue = this;<font></font>
    // returns the Promise<font></font>
    return new Promise(function (resolve, reject) {<font></font>
        setTimeout(()=&gt; {<font></font>
                queue.source.push(data);<font></font>
                resolve(queue); //call native resolve when finish<font></font>
            }<font></font>
            , 10); // resolve() will be called in 10 ms<font></font>
    });<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这个例子中，承诺没有失败的理由，因此</font></font><code>reject()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永远不会被称为。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以做这样的事情</font></font></p>

<pre><code>// @flow<font></font>
<font></font>
const toPromise = (f: (any) =&gt; void) =&gt; {<font></font>
  return new Promise&lt;any&gt;((resolve, reject) =&gt; {<font></font>
    try {<font></font>
      f((result) =&gt; {<font></font>
        resolve(result)<font></font>
      })<font></font>
    } catch (e) {<font></font>
      reject(e)<font></font>
    }<font></font>
  })<font></font>
}<font></font>
<font></font>
export default toPromise<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后用</font></font></p>

<pre><code>async loadData() {<font></font>
  const friends = await toPromise(FriendsManager.loadFriends)<font></font>
<font></font>
  console.log(friends)<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AStafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">kriskowal的Q库包含应答回调函数。</font><font style="vertical-align: inherit;">这样的方法：</font></font></p>

<pre><code>obj.prototype.dosomething(params, cb) {<font></font>
  ...blah blah...<font></font>
  cb(error, results);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以用Q.ninvoke转换</font></font></p>

<pre><code>Q.ninvoke(obj,"dosomething",params).<font></font>
then(function(results) {<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我可以用</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一个普通的JavaScript方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个简单的基本示例</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（采用</font></font><strong><a href="https://en.wikipedia.org/wiki/KISS_principle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">KISS</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式）：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Javascript异步API代码：</font></font></p>

<pre><code>function divisionAPI (number, divider, successCallback, errorCallback) {<font></font>
<font></font>
    if (divider == 0) {<font></font>
        return errorCallback( new Error("Division by zero") )<font></font>
    }<font></font>
<font></font>
    successCallback( number / divider )<font></font>
<font></font>
}<font></font>
</code></pre>

<p><strong><code>Promise</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Javascript异步API代码：</font></font></p>

<pre><code>function divisionAPI (number, divider) {<font></font>
<font></font>
    return new Promise(function (fulfilled, rejected) {<font></font>
<font></font>
        if (divider == 0) {<font></font>
            return rejected( new Error("Division by zero") )<font></font>
        }<font></font>
<font></font>
        fulfilled( number / divider )<font></font>
<font></font>
     })<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我建议访问</font></font><a href="http://exploringjs.com/es6/ch_promises.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个美丽的资源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以一起使用</font></font><code>async\await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>ES7</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以使程序流程等待一个</font></font><code>fullfiled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像下面这样的结果：</font></font></p>

<pre><code>function getName () {<font></font>
<font></font>
    return new Promise(function (fulfilled, rejected) {<font></font>
<font></font>
        var name = "John Doe";<font></font>
<font></font>
        // wait 3000 milliseconds before calling fulfilled() method<font></font>
        setTimeout ( <font></font>
            function() {<font></font>
                fulfilled( name )<font></font>
            }, <font></font>
            3000<font></font>
        )<font></font>
<font></font>
    })<font></font>
<font></font>
}<font></font>
<font></font>
<font></font>
async function foo () {<font></font>
<font></font>
    var name = await getName(); // awaits for a fulfilled result!<font></font>
<font></font>
    console.log(name); // the console writes "John Doe" after 3000 milliseconds<font></font>
<font></font>
}<font></font>
<font></font>
<font></font>
foo() // calling the foo() method to run the code<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>.then()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">使用相同代码的另一种用法</font></font></p>

<pre><code>function getName () {<font></font>
<font></font>
    return new Promise(function (fulfilled, rejected) {<font></font>
<font></font>
        var name = "John Doe";<font></font>
<font></font>
        // wait 3000 milliseconds before calling fulfilled() method<font></font>
        setTimeout ( <font></font>
            function() {<font></font>
                fulfilled( name )<font></font>
            }, <font></font>
            3000<font></font>
        )<font></font>
<font></font>
    })<font></font>
<font></font>
}<font></font>
<font></font>
<font></font>
// the console writes "John Doe" after 3000 milliseconds<font></font>
getName().then(function(name){ console.log(name) })<font></font>
</code></pre>

<p><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以在基于Node.js的任何平台上使用，例如</font></font><code>react-native</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖励</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（假设回调方法具有两个参数，分别是错误和结果）</font></font></p>

<pre><code>function divisionAPI (number, divider, callback) {<font></font>
<font></font>
    return new Promise(function (fulfilled, rejected) {<font></font>
<font></font>
        if (divider == 0) {<font></font>
            let error = new Error("Division by zero")<font></font>
            callback &amp;&amp; callback( error )<font></font>
            return rejected( error )<font></font>
        }<font></font>
<font></font>
        let result = number / divider<font></font>
        callback &amp;&amp; callback( null, result )<font></font>
        fulfilled( result )<font></font>
<font></font>
     })<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的方法可以响应老式回调和Promise用法的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙JinJinHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Benjamin </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">建议不会一直有效，因为它无法检测到加载后是否被调用。</font><font style="vertical-align: inherit;">我被很多次咬伤了。</font><font style="vertical-align: inherit;">这是一个应该始终有效的版本：</font></font></p>

<pre><code>function promiseDOMready() {<font></font>
    return new Promise(function(resolve) {<font></font>
        if (document.readyState === "complete") return resolve();<font></font>
        document.addEventListener("DOMContentLoaded", resolve);<font></font>
    });<font></font>
}<font></font>
promiseDOMready().then(initOnLoad);<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
