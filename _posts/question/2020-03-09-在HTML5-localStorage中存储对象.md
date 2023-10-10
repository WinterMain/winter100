---
layout: question
title:  在HTML5 localStorage中存储对象
date:   2020-03-09T09:25:10.000Z
description: 我想在HTML5中存储一个JavaScript对象localStorage，但是我的对象显然正在转换为字符串。我可以使用来存储和检索原始JavaScr...
img: 
author: 小哥Stafan
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在HTML5中存储一个JavaScript对象</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我的对象显然正在转换为字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用来存储和检索原始JavaScript类型和数组</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是对象似乎无法正常工作。</font><font style="vertical-align: inherit;">应该吗</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>var testObject = { 'one': 1, 'two': 2, 'three': 3 };<font></font>
console.log('typeof testObject: ' + typeof testObject);<font></font>
console.log('testObject properties:');<font></font>
for (var prop in testObject) {<font></font>
    console.log('  ' + prop + ': ' + testObject[prop]);<font></font>
}<font></font>
<font></font>
// Put the object into storage<font></font>
localStorage.setItem('testObject', testObject);<font></font>
<font></font>
// Retrieve the object from storage<font></font>
var retrievedObject = localStorage.getItem('testObject');<font></font>
<font></font>
console.log('typeof retrievedObject: ' + typeof retrievedObject);<font></font>
console.log('Value of retrievedObject: ' + retrievedObject);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台输出为</font></font></p>

<pre class="lang-none prettyprint-override"><code>typeof testObject: object<font></font>
testObject properties:<font></font>
  one: 1<font></font>
  two: 2<font></font>
  three: 3<font></font>
typeof retrievedObject: string<font></font>
Value of retrievedObject: [object Object]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，该</font></font><code>setItem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是在存储输入之前将输入转换为字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Safari，Chrome和Firefox中看到了这种行为，因此我认为这是我对</font></font><a href="http://www.w3.org/TR/webstorage/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 Web存储</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范的</font><font style="vertical-align: inherit;">误解</font><font style="vertical-align: inherit;">，而不是浏览器特定的错误或限制。</font></font></p>

<p>I've tried to make sense of the <em>structured clone</em> algorithm described in <a href="http://www.w3.org/TR/html5/infrastructure.html" rel="noreferrer">http://www.w3.org/TR/html5/infrastructure.html</a>.  I don't fully understand what it's saying, but maybe my problem has to do with my object's properties not being enumerable (???)  </p>

<p>Is there an easy workaround?</p>

<hr>

<p>Update: The W3C eventually changed their minds about the structured-clone specification, and decided to change the spec to match the implementations.  See <a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=12111" rel="noreferrer">https://www.w3.org/Bugs/Public/show_bug.cgi?id=12111</a>. So this question is no longer 100% valid, but the answers still may be of interest.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第182篇《在HTML5 localStorage中存储对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要存储对象，您可以写一个字母，用它来将对象从字符串传送到对象（可能没有意义）。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>var obj = {a: "lol", b: "A", c: "hello world"};<font></font>
function saveObj (key){<font></font>
    var j = "";<font></font>
    for(var i in obj){<font></font>
        j += (i+"|"+obj[i]+"~");<font></font>
    }<font></font>
    localStorage.setItem(key, j);<font></font>
} // Saving Method<font></font>
function getObj (key){<font></font>
    var j = {};<font></font>
    var k = localStorage.getItem(key).split("~");<font></font>
    for(var l in k){<font></font>
        var m = k[l].split("|");<font></font>
        j[m[0]] = m[1];<font></font>
    }<font></font>
    return j;<font></font>
}<font></font>
saveObj("obj"); // undefined<font></font>
getObj("obj"); // {a: "lol", b: "A", c: "hello world"}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用用于拆分对象的字母，此技术将引起一些故障，这也是非常实验性的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于愿意设置和获取键入属性的Typescript用户：</font></font></p>

<pre><code>/**<font></font>
 * Silly wrapper to be able to type the storage keys<font></font>
 */<font></font>
export class TypedStorage&lt;T&gt; {<font></font>
<font></font>
    public removeItem(key: keyof T): void {<font></font>
        localStorage.removeItem(key);<font></font>
    }<font></font>
<font></font>
    public getItem&lt;K extends keyof T&gt;(key: K): T[K] | null {<font></font>
        const data: string | null =  localStorage.getItem(key);<font></font>
        return JSON.parse(data);<font></font>
    }<font></font>
<font></font>
    public setItem&lt;K extends keyof T&gt;(key: K, value: T[K]): void {<font></font>
        const data: string = JSON.stringify(value);<font></font>
        localStorage.setItem(key, data);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://www.typescriptlang.org/play/#src=%2F**%0D%0A%20*%20Silly%20wrapper%20to%20be%20able%20to%20type%20the%20storage%20keys%0D%0A%20*%2F%0D%0Aexport%20class%20TypedStorage%3CT%3E%20%7B%0D%0A%0D%0A%20%20%20%20public%20removeItem(key%3A%20keyof%20T)%3A%20void%20%7B%0D%0A%20%20%20%20%20%20%20%20localStorage.removeItem(key)%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20getItem%3CK%20extends%20keyof%20T%3E(key%3A%20K)%3A%20T%5BK%5D%20%7C%20null%20%7B%0D%0A%20%20%20%20%20%20%20%20const%20data%3A%20string%20%7C%20null%20%3D%20%20localStorage.getItem(key)%3B%0D%0A%20%20%20%20%20%20%20%20return%20JSON.parse(data)%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20setItem%3CK%20extends%20keyof%20T%3E(key%3A%20K%2C%20value%3A%20T%5BK%5D)%3A%20void%20%7B%0D%0A%20%20%20%20%20%20%20%20const%20data%3A%20string%20%3D%20JSON.stringify(value)%3B%0D%0A%20%20%20%20%20%20%20%20localStorage.setItem(key%2C%20data)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0A%2F%2F%20write%20an%20interface%20for%20the%20storage%0D%0Ainterface%20MyStore%20%7B%0D%0A%20%20%20age%3A%20number%2C%0D%0A%20%20%20name%3A%20string%2C%0D%0A%20%20%20address%3A%20%7Bcity%3Astring%7D%0D%0A%7D%0D%0A%0D%0Aconst%20storage%3A%20TypedStorage%3CMyStore%3E%20%3D%20new%20TypedStorage%3CMyStore%3E()%3B%0D%0A%0D%0Astorage.setItem(%22wrong%20key%22%2C%20%22%22)%3B%20%2F%2F%20error%20unknown%20key%0D%0Astorage.setItem(%22age%22%2C%20%22hello%22)%3B%20%2F%2F%20error%2C%20age%20should%20be%20number%0D%0Astorage.setItem(%22address%22%2C%20%7Bcity%3A%22Here%22%7D)%3B%20%2F%2F%20ok%0D%0A%0D%0Aconst%20address%3A%20%7Bcity%3Astring%7D%20%3D%20storage.getItem(%22address%22)%3B" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// write an interface for the storage<font></font>
interface MyStore {<font></font>
   age: number,<font></font>
   name: string,<font></font>
   address: {city:string}<font></font>
}<font></font>
<font></font>
const storage: TypedStorage&lt;MyStore&gt; = new TypedStorage&lt;MyStore&gt;();<font></font>
<font></font>
storage.setItem("wrong key", ""); // error unknown key<font></font>
storage.setItem("age", "hello"); // error, age should be number<font></font>
storage.setItem("address", {city:"Here"}); // ok<font></font>
<font></font>
const address: {city:string} = storage.getItem("address");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://docs.meteor.com/api/ejson.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ejson</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将对象存储为字符串。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EJSON是JSON的扩展，以支持更多类型。</font><font style="vertical-align: inherit;">它支持所有JSON安全类型，以及：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日期（JavaScript </font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二进制（JavaScript </font></font><code>Uint8Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://docs.meteor.com/api/ejson.html#ejson_new_binary" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EJSON.newBinary</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的结果</font><font style="vertical-align: inherit;">）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户定义的类型（请参阅</font></font><a href="https://docs.meteor.com/api/ejson.html#ejson_add_type" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EJSON.addType</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。例如，</font></font><a href="https://docs.meteor.com/api/ejson.html#mongo_object_id" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mongo.ObjectID</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以这种方式实现。）</font></font></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有EJSON序列化也是有效的JSON。</font><font style="vertical-align: inherit;">例如，带有日期和二进制缓冲区的对象将在EJSON中序列化为：</font></font></p>

<pre><code>{<font></font>
  "d": {"$date": 1358205756553},<font></font>
  "b": {"$binary": "c3VyZS4="}<font></font>
}<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用ejson的localStorage包装器</font></font></p>

<p><a href="https://github.com/UziTech/storage.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/UziTech/storage.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在包装器中添加了一些类型，包括正则表达式和函数</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猿猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议使用抽象库来实现此处讨论的许多功能以及更好的兼容性。</font><font style="vertical-align: inherit;">很多选择：</font></font></p>

<ul>
<li><a href="https://github.com/andris9/jStorage"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jStorage</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/andris9/simpleStorage"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">simpleStorage</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &lt;&lt;我的偏爱</font></font></li>
<li><a href="https://github.com/mozilla/localForage"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地饲料</font></font></a></li>
<li><a href="https://github.com/alekseykulikov/storage"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alekseykulikov /存储</font></font></a></li>
<li><a href="https://github.com/brianleroux/lawnchair"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">草坪椅</font></font></a></li>
<li><a href="https://github.com/marcuswestin/store.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Store.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &lt;&lt;另一个不错的选择</font></font></li>
<li><a href="https://github.com/aaronagray/omg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的天啊</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木嘢</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是使用现有插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font><a href="https://github.com/mar10/persisto" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">persisto</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个开源项目，它提供了一个到localStorage / sessionStorage的简单接口，并自动保持表单字段（输入，单选按钮和复选框）的持久性。</font></font></p>

<p><a href="https://i.stack.imgur.com/cU5V0.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/cU5V0.png" alt="持久功能"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（免责声明：我是作者。）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个很棒的库，其中包含许多解决方案，因此它甚至支持称为</font><a href="https://github.com/andris9/jStorage" rel="nofollow noreferrer"><font style="vertical-align: inherit;">jStorage的</font></a><font style="vertical-align: inherit;">旧版浏览器。</font></font><a href="https://github.com/andris9/jStorage" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置一个对象</font></font></p>

<pre><code>$.jStorage.set(key, value)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并轻松检索</font></font></p>

<pre><code>value = $.jStorage.get(key)<font></font>
value = $.jStorage.get(key, "default value")<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展存储对象是一个了不起的解决方案。</font><font style="vertical-align: inherit;">对于我的API，我为localStorage创建了一个Facade，然后在设置和获取时检查它是否为对象。</font></font></p>

<pre><code>var data = {<font></font>
  set: function(key, value) {<font></font>
    if (!key || !value) {return;}<font></font>
<font></font>
    if (typeof value === "object") {<font></font>
      value = JSON.stringify(value);<font></font>
    }<font></font>
    localStorage.setItem(key, value);<font></font>
  },<font></font>
  get: function(key) {<font></font>
    var value = localStorage.getItem(key);<font></font>
<font></font>
    if (!value) {return;}<font></font>
<font></font>
    // assume it is an object that has been stringified<font></font>
    if (value[0] === "{") {<font></font>
      value = JSON.parse(value);<font></font>
    }<font></font>
<font></font>
    return value;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font></font><a href="https://stackoverflow.com/a/2010994/59087"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变体的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小改进</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Storage.prototype.setObject = function(key, value) {<font></font>
    this.setItem(key, JSON.stringify(value));<font></font>
}<font></font>
<font></font>
Storage.prototype.getObject = function(key) {<font></font>
    var value = this.getItem(key);<font></font>
    return value &amp;&amp; JSON.parse(value);<font></font>
}<font></font>
</code></pre>

<p>Because of <a href="http://en.wikipedia.org/wiki/Short-circuit_evaluation" rel="noreferrer">short-circuit evaluation</a>, <code>getObject()</code> will <em>immediately</em> return <code>null</code> if <code>key</code> is not in Storage. It also will not throw a <code>SyntaxError</code> exception if <code>value</code> is <code>""</code> (the empty string; <code>JSON.parse()</code> cannot handle that).</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYAItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会发现使用以下方便的方法扩展Storage对象很有用：</font></font></p>

<pre><code>Storage.prototype.setObject = function(key, value) {<font></font>
    this.setItem(key, JSON.stringify(value));<font></font>
}<font></font>
<font></font>
Storage.prototype.getObject = function(key) {<font></font>
    return JSON.parse(this.getItem(key));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，即使在API下仅支持字符串，您也可以获得真正想要的功能。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
