---
layout: question
title:  如何遍历以对象为成员的纯JavaScript对象？
date:   2020-03-09T12:33:39.000Z
description: 如何遍历JavaScript对象中的所有成员，包括对象值。例如，如何循环浏览（分别访问“ your_name”和“ your_message”）？...
img: 
author: 乐泡芙
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何遍历JavaScript对象中的所有成员，包括对象值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如何循环浏览（分别访问“ your_name”和“ your_message”）？</font></font></p>

<pre><code>var validation_messages = {<font></font>
    "key_1": {<font></font>
        "your_name": "jimmy",<font></font>
        "your_msg": "hello world"<font></font>
    },<font></font>
    "key_2": {<font></font>
        "your_name": "billy",<font></font>
        "your_msg": "foo equals bar"<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第248篇《如何遍历以对象为成员的纯JavaScript对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The solution that work for me is the following</p>

<pre><code>_private.convertParams=function(params){<font></font>
    var params= [];<font></font>
    Object.keys(values).forEach(function(key) {<font></font>
        params.push({"id":key,"option":"Igual","value":params[key].id})<font></font>
    });<font></font>
    return params;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var obj={<font></font>
name:"SanD",<font></font>
age:"27"<font></font>
}<font></font>
Object.keys(obj).forEach((key)=&gt;console.log(key,obj[key]));</code></pre>
</div>
</div>
<p></p>

<p>To loop through JavaScript Object we can use forEach and to optimize code we can use arrow function </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Another option:</p>

<pre><code>var testObj = {test: true, test1: false};<font></font>
for(let x of Object.keys(testObj)){<font></font>
    console.log(x);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>ECMAScript-2017, just finalized a month ago, introduces Object.values(). So now you can do this:</p>

<pre><code>let v;<font></font>
for (v of Object.values(validation_messages))<font></font>
   console.log(v.your_name);   // jimmy billy<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In ES7 you can do:</p>

<pre><code>for (const [key, value] of Object.entries(obj)) {<font></font>
  //<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>for(var k in validation_messages) {<font></font>
    var o = validation_messages[k];<font></font>
    do_something_with(o.your_name);<font></font>
    do_something_else_with(o.your_msg);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Using <a href="http://underscorejs.org/#each">Underscore.js’s <code>_.each</code></a>:</p>

<pre><code>_.each(validation_messages, function(value, key){<font></font>
    _.each(value, function(value, key){<font></font>
        console.log(value);<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 5下，您可以将</font></font><code>Object.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">结合使用</font></font><code>Array.prototype.forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var obj = {<font></font>
  first: "John",<font></font>
  last: "Doe"<font></font>
};<font></font>
<font></font>
//<font></font>
//	Visit non-inherited enumerable keys<font></font>
//<font></font>
Object.keys(obj).forEach(function(key) {<font></font>
<font></font>
  console.log(key, obj[key]);<font></font>
<font></font>
});</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In <strong>ES6/2015</strong> you can loop through an object like this: (using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noreferrer">arrow function</a>)</p>

<pre><code>Object.keys(myObj).forEach(key =&gt; {<font></font>
  console.log(key);        // the name of the current key.<font></font>
  console.log(myObj[key]); // the value of the current key.<font></font>
});<font></font>
</code></pre>

<p><a href="https://jsbin.com/feribofaqa/edit?html,js,console,output" rel="noreferrer">jsbin</a></p>

<p>In <strong>ES7/2016</strong> you can use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" rel="noreferrer"><code>Object.entries</code></a> instead of <code>Object.keys</code> and loop through an object like this:</p>

<pre><code>Object.entries(myObj).forEach(([key, val]) =&gt; {<font></font>
  console.log(key); // the name of the current key.<font></font>
  console.log(val); // the value of the current key.<font></font>
});<font></font>
</code></pre>

<p>The above would also work as a <strong>one-liner</strong>:</p>

<pre><code>Object.entries(myObj).forEach(([key, val]) =&gt; console.log(key, val));
</code></pre>

<p><a href="https://jsbin.com/tokotusuze/1/edit?html,js,console,output" rel="noreferrer">jsbin</a></p>

<p>In case you want to loop through nested objects as well, you can use a <strong>recursive</strong> function (ES6):</p>

<pre><code>const loopNestedObj = obj =&gt; {<font></font>
  Object.keys(obj).forEach(key =&gt; {<font></font>
    if (obj[key] &amp;&amp; typeof obj[key] === "object") loopNestedObj(obj[key]); // recurse.<font></font>
    else console.log(key, obj[key]); // or do something with key and val.<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><a href="https://jsbin.com/ruravuhelu/edit?html,js,console,output" rel="noreferrer">jsbin</a></p>

<p>Same as function above, but with <strong>ES7</strong> <code>Object.entries()</code> instead of <code>Object.keys()</code>:</p>

<pre><code>const loopNestedObj = obj =&gt; {<font></font>
  Object.entries(obj).forEach(([key, val]) =&gt; {<font></font>
    if (val &amp;&amp; typeof val === "object") loopNestedObj(val); // recurse.<font></font>
    else console.log(key, val); // or do something with key and val.<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p>Here we loop through nested objects change values and return a new object in one go using <code>Object.entries()</code> combined with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries" rel="noreferrer"><code>Object.fromEntries()</code></a> (<strong>ES10/2019</strong>):</p>

<pre><code>const loopNestedObj = obj =&gt;<font></font>
  Object.fromEntries(<font></font>
    Object.entries(obj).map(([key, val]) =&gt; {<font></font>
      if (val &amp;&amp; typeof val === "object") [key, loopNestedObj(val)]; // recurse<font></font>
      else [key, updateMyVal(val)]; // or do something with key and val.<font></font>
    })<font></font>
  );<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>for (var key in validation_messages) {<font></font>
    // skip loop if the property is from prototype<font></font>
    if (!validation_messages.hasOwnProperty(key)) continue;<font></font>
<font></font>
    var obj = validation_messages[key];<font></font>
    for (var prop in obj) {<font></font>
        // skip loop if the property is from prototype<font></font>
        if (!obj.hasOwnProperty(prop)) continue;<font></font>
<font></font>
        // your code<font></font>
        alert(prop + " = " + obj[prop]);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
