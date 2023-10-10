---
layout: question
title:  如何有效地计算JavaScript中对象的键/属性数量？
date:   2020-03-09T12:48:05.000Z
description: 计算对象的键/属性数量的最快方法是什么？是否可以在不迭代对象的情况下执行此操作？即不做var count = 0;for (k in myobj) ...
img: 
author: 达蒙Tom
category: question
answer: 20
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算对象的键/属性数量的最快方法是什么？</font><font style="vertical-align: inherit;">是否可以在不迭代对象的情况下执行此操作？</font><font style="vertical-align: inherit;">即不做</font></font></p>

<pre><code>var count = 0;<font></font>
for (k in myobj) if (myobj.hasOwnProperty(k)) count++;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Firefox确实提供了一个魔术</font></font><code>__count__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，但是在版本4的某个位置将其删除。）</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第257篇《如何有效地计算JavaScript中对象的键/属性数量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ALPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是不可能的（至少在不使用某些内部组件的情况下）。</font><font style="vertical-align: inherit;">而且我认为通过优化它不会带来太大收益。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></strong></p>

<pre><code>Object.keys(objectName).length; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<pre><code>Object.values(objectName).length;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐宝儿小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图使它可用于所有这样的对象：</font></font></p>

<pre><code>Object.defineProperty(Object.prototype, "length", {<font></font>
get() {<font></font>
    if (!Object.keys) {<font></font>
        Object.keys = function (obj) {<font></font>
            var keys = [],k;<font></font>
            for (k in obj) {<font></font>
                if (Object.prototype.hasOwnProperty.call(obj, k)) {<font></font>
                    keys.push(k);<font></font>
                }<font></font>
            }<font></font>
            return keys;<font></font>
        };<font></font>
    }<font></font>
    return Object.keys(this).length;<font></font>
},});<font></font>
<font></font>
console.log({"Name":"Joe","Age":26}.length) //returns 2<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Closure为此提供了很好的功能... goog.object.getCount（obj）</font></font></p>

<p><a href="http://closure-library.googlecode.com/svn/docs/closure_goog_object_object.js.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看goog.Object文档</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是对三种方法的性能测试；</font></font></p>

<p><a href="https://jsperf.com/get-the-number-of-keys-in-an-object" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsperf.com/get-the-number-of-keys-in-an-object</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys（）。length</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每秒20,735次</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单且兼容。</font><font style="vertical-align: inherit;">运行速度快</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价格昂贵，因为它会创建一个新的键数组，然后将其丢弃。</font></font></p>

<pre><code>return Object.keys(objectToRead).length;
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历键</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每秒15734次</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font></font></p>

<pre><code>let size=0;<font></font>
for(let k in objectToRead) {<font></font>
  size++<font></font>
}<font></font>
return size;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速度稍慢，但与内存使用量相差甚远，如果您有兴趣针对移动或其他小型计算机进行优化，则可能会更好</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用地图代替对象</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每秒953,839,338次</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font></font></p>

<pre><code>return mapToRead.size;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，地图会跟踪自己的大小，因此我们只返回一个数字字段。</font><font style="vertical-align: inherit;">远比其他任何方法都快。</font><font style="vertical-align: inherit;">如果您可以控制该对象，则可以将其转换为地图。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于在其项目中具有Ext JS 4的用户，您可以执行以下操作：</font></font></p>

<pre><code>Ext.Object.getSize(myobj);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的好处是它可以在所有与Ext兼容的浏览器（包括IE6-IE8）上运行，但是，我相信运行时间并不比O（n）更好，就像其他建议的解决方案一样。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果上面的jQuery不起作用，请尝试</font></font></p>

<pre><code>$(Object.Item).length
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>Object.keys(data).length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来查找具有关键数据的JSON对象的长度</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何解决此问题的方法是建立我自己的基本列表实现，该列表记录对象中存储了多少项。</font><font style="vertical-align: inherit;">非常简单。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>function BasicList()<font></font>
{<font></font>
   var items = {};<font></font>
   this.count = 0;<font></font>
<font></font>
   this.add = function(index, item)<font></font>
   {<font></font>
      items[index] = item;<font></font>
      this.count++;<font></font>
   }<font></font>
<font></font>
   this.remove = function (index)<font></font>
   {<font></font>
      delete items[index];<font></font>
      this.count--;<font></font>
   }<font></font>
<font></font>
   this.get = function(index)<font></font>
   {<font></font>
      if (undefined === index)<font></font>
        return items;<font></font>
      else<font></font>
        return items[index];<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.defineProperty（obj，prop，描述符）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其添加到所有对象中：</font></font></p>

<pre><code>Object.defineProperty(Object.prototype, "length", {<font></font>
    enumerable: false,<font></font>
    get: function() {<font></font>
        return Object.keys(this).length;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或单个对象：</font></font></p>

<pre><code>var myObj = {};<font></font>
Object.defineProperty(myObj, "length", {<font></font>
    enumerable: false,<font></font>
    get: function() {<font></font>
        return Object.keys(this).length;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var myObj = {};<font></font>
myObj.name  = "John Doe";<font></font>
myObj.email = "leaked@example.com";<font></font>
myObj.length; //output: 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了这种方式，它将不会显示在for..in循环中：</font></font></p>

<pre><code>for(var i in myObj) {<font></font>
     console.log(i + ":" + myObj[i]);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>name:John Doe<font></font>
email:leaked@example.com<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：它在&lt;IE9浏览器中不起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些在其项目中包含Underscore.js的人，您可以执行以下操作：</font></font></p>

<pre class="lang-js prettyprint-override"><code>_({a:'', b:''}).size() // =&gt; 2
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或功能风格：</font></font></p>

<pre class="lang-js prettyprint-override"><code>_.size({a:'', b:''}) // =&gt; 2
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如以上回答： </font></font><code>Object.keys(obj).length</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是：正如我们现在</font><font style="vertical-align: inherit;">在ES6中</font><font style="vertical-align: inherit;">拥有一个真正的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Map</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类一样，我</font></font><a href="https://stackoverflow.com/questions/32600157/maps-vs-objects-in-es6-when-to-use"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它而不是使用对象的属性。</font></font></p>

<pre><code>const map = new Map();<font></font>
map.set("key", "value");<font></font>
map.size; // THE fastest way<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在Avi Flax上进行迭代，请回答Object.keys（obj）.length对于没有绑定功能的对象是正确的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>obj = {"lol": "what", owo: "pfft"};<font></font>
Object.keys(obj).length; // should be 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>arr = [];<font></font>
obj = {"lol": "what", owo: "pfft"};<font></font>
obj.omg = function(){<font></font>
    _.each(obj, function(a){<font></font>
        arr.push(a);<font></font>
    });<font></font>
};<font></font>
Object.keys(obj).length; // should be 3 because it looks like this <font></font>
/* obj === {"lol": "what", owo: "pfft", omg: function(){_.each(obj, function(a){arr.push(a);});}} */<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免这种情况的步骤：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要将函数放在要计算键数的对象中</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用一个单独的对象或专门为函数创建一个新对象（如果您想使用来计算文件中有多少个函数</font></font><code>Object.keys(obj).length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样是的，我在示例中使用了nodejs的_或下划线模块 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档可以在</font></font><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://underscorejs.org/上找到</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以及它在github上的源代码和其他各种信息</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后是lodash实现</font></font><a href="https://lodash.com/docs#size" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://lodash.com/docs#size</font></font></a></p>

<p><code>_.size(obj)</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道有什么方法可以执行此操作，但是为了将迭代次数降到最低，您可以尝试检查是否存在，</font></font><code>__count__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在（例如，Firefox），则可以遍历该对象并定义它供以后使用，例如：</font></font></p>

<pre><code>if (myobj.__count__ === undefined) {<font></font>
  myobj.__count__ = ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，任何支持浏览器的浏览器</font></font><code>__count__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都可以使用它，而仅对那些不</font><font style="vertical-align: inherit;">支持的浏览器</font><font style="vertical-align: inherit;">进行迭代。</font><font style="vertical-align: inherit;">如果计数发生变化而您不能执行此操作，则可以始终使它成为函数：</font></font></p>

<pre><code>if (myobj.__count__ === undefined) {<font></font>
  myobj.__count__ = function() { return ... }<font></font>
  myobj.__count__.toString = function() { return this(); }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过这种方式，您可以随时引用myobj。</font></font><code>__count__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该函数将触发并重新计算。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GOItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您实际上遇到性能问题，建议您使用一个函数来包装向对象添加属性或从对象中删除属性的调用，该函数还要增加/减少适当命名的（size？）属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需计算一次属性的初始数量，然后从那里继续。</font><font style="vertical-align: inherit;">如果没有实际的性能问题，请不要打扰。</font><font style="vertical-align: inherit;">只需将这段代码包装在一个函数中</font></font><code>getNumberOfProperties(object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并完成它即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如Avi Flax所说</font></font><a href="https://stackoverflow.com/a/4889658/1047014"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/4889658/1047014</font></font></a></p>

<pre><code>Object.keys(obj).length
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为您的对象上的所有可枚举属性提供技巧，但也包括非枚举属性，您可以改为使用</font></font><code>Object.getOwnPropertyNames</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">区别在于：</font></font></p>

<pre><code>var myObject = new Object();<font></font>
<font></font>
Object.defineProperty(myObject, "nonEnumerableProp", {<font></font>
  enumerable: false<font></font>
});<font></font>
Object.defineProperty(myObject, "enumerableProp", {<font></font>
  enumerable: true<font></font>
});<font></font>
<font></font>
console.log(Object.getOwnPropertyNames(myObject).length); //outputs 2<font></font>
console.log(Object.keys(myObject).length); //outputs 1<font></font>
<font></font>
console.log(myObject.hasOwnProperty("nonEnumerableProp")); //outputs true<font></font>
console.log(myObject.hasOwnProperty("enumerableProp")); //outputs true<font></font>
<font></font>
console.log("nonEnumerableProp" in myObject); //outputs true<font></font>
console.log("enumerableProp" in myObject); //outputs true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如此处所述</font></font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该浏览器与</font></font><code>Object.keys</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在大多数情况下，您可能不希望在这些类型的操作中包括无数变量，但是了解它们之间的差异总是很好的;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准的Object实现（</font></font><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5.1对象的内部属性和方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）不需要</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪其键/属性的数量，因此，在</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有显式或隐式地迭代其键</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">情况下</font><font style="vertical-align: inherit;">，应该没有确定其大小的标准方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这是最常用的替代方法：</font></font></p>



<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1. ECMAScript的Object.keys（）</font></font></h3>

<p><code>Object.keys(obj).length;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历键以计算临时数组并返回其长度来工作。</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -可读且简洁的语法。</font><font style="vertical-align: inherit;">如果没有本机支持，则不需要垫片或垫片，无需库或自定义代码</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -由于创建阵列而导致的内存开销。</font></font></li>
</ul>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.基于图书馆的解决方案</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本主题中其他地方的许多基于库的示例在它们的库上下文中都是有用的成语。</font><font style="vertical-align: inherit;">但是，从性能的角度来看，与完美的无库代码相比，没有任何收获，因为所有这些库方法实际上都封装了for循环或ES5 </font></font><code>Object.keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（本机或填充）。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.优化循环</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最慢的部分</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的的for循环一般是</font></font><code>.hasOwnProperty()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呼叫，因为该函数调用开销。</font><font style="vertical-align: inherit;">因此，当我只想要JSON对象的条目数时，</font></font><code>.hasOwnProperty()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我知道没有代码也不会扩展</font><font style="vertical-align: inherit;">，就跳过该</font><font style="vertical-align: inherit;">调用   </font></font><code>Object.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，可以通过设置</font></font><code>k</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">local（</font></font><code>var k</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和使用前缀增量运算符（</font></font><code>++count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）代替后缀来对</font><font style="vertical-align: inherit;">代码进行非常小的优化</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var count = 0;<font></font>
for (var k in myobj) if (myobj.hasOwnProperty(k)) ++count;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个想法依赖于缓存</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>var hasOwn = Object.prototype.hasOwnProperty;<font></font>
var count = 0;<font></font>
for (var k in myobj) if (hasOwn.call(myobj, k)) ++count;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在给定的环境下这是否更快，是基准测试的问题。</font><font style="vertical-align: inherit;">无论如何，可以预期性能提升非常有限。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下代码：</font></font></p>

<pre><code>if (!Object.keys) {<font></font>
    Object.keys = function (obj) {<font></font>
        var keys = [],<font></font>
            k;<font></font>
        for (k in obj) {<font></font>
            if (Object.prototype.hasOwnProperty.call(obj, k)) {<font></font>
                keys.push(k);<font></font>
            }<font></font>
        }<font></font>
        return keys;<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您也可以在较旧的浏览器中使用它：</font></font></p>

<pre><code>var len = Object.keys(obj).length;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你正在使用</font></font><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font></font><a href="http://underscorejs.org/#size" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.size</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（感谢@douwe）：</font></font><br>
<code>_.size(obj)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您也可以使用</font></font><a href="http://underscorejs.org/#keys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.keys</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于某些用户可能更清楚：</font></font><br>
<code>_.keys(obj).length</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我强烈推荐Underscore，它是一个紧凑的库，可以处理很多基本的事情。</font><font style="vertical-align: inherit;">只要有可能，它们就会与ECMA5相匹配并遵循本机实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，我支持@Avi的答案。</font><font style="vertical-align: inherit;">我对其进行了编辑，以添加指向MDC文档的链接，其中包括可以添加到非ECMA5浏览器的keys（）方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在任何与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5兼容的环境</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如</font></font><a href="http://nodejs.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Chrome，IE 9+，Firefox 4+或Safari 5+）中执行此操作：</font></font></p>

<pre class="lang-js prettyprint-override"><code>Object.keys(obj).length
</code></pre>

<ul>
<li><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性</font></font></a></li>
<li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（包括可以添加到非ES5浏览器的方法）</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
