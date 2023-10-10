---
layout: question
title:  如何动态合并两个JavaScript对象的属性？
date:   2020-03-09T09:44:03.000Z
description: 我需要能够在运行时合并两个（非常简单的）JavaScript对象。例如，我想：var obj1 = { food  'pizza', car  'fo...
img: 
author: MandyTony
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要能够在运行时合并两个（非常简单的）JavaScript对象。</font><font style="vertical-align: inherit;">例如，我想：</font></font></p>

<pre><code>var obj1 = { food: 'pizza', car: 'ford' }<font></font>
var obj2 = { animal: 'dog' }<font></font>
<font></font>
obj1.merge(obj2);<font></font>
<font></font>
//obj1 now has three properties: food, car, and animal<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人为此提供脚本或知道内置的方式来执行此操作？</font><font style="vertical-align: inherit;">我不需要递归，也不需要合并函数，只需合并平面对象上的方法即可。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第185篇《如何动态合并两个JavaScript对象的属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://en.wikipedia.org/wiki/Underscore.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以合并对象数组：</font></font></p>

<pre><code>var arrayOfObjects = [ {a:1}, {b:2, c:3}, {d:4} ];<font></font>
_(arrayOfObjects).reduce(function(memo, o) { return _(memo).extend(o); });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是：</font></font></p>

<pre><code>Object {a: 1, b: 2, c: 3, d: 4}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let obj1 = {a:1, b:2};<font></font>
let obj2 = {c:3, d:4};<font></font>
let merged = {...obj1, ...obj2};<font></font>
console.log(merged);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://en.wikipedia.org/wiki/MooTools" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MooTools中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，有</font></font><a href="http://mootools.net/docs/core/Types/Object#Object:Object-merge" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.merge（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Object.merge(obj1, obj2);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://en.wikipedia.org/wiki/Ext_JS" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ext JS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 4中，可以按照以下步骤进行操作：</font></font></p>

<pre><code>var mergedObject = Ext.Object.merge(object1, object2)<font></font>
<font></font>
// Or shorter:<font></font>
var mergedObject2 = Ext.merge(object1, object2)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见</font></font><em><a href="http://docs.sencha.com/ext-js/4-0/#/api/Ext.Object-method-merge" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">merge（object）：Object</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我扩展了David Coallier的方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加了合并多个对象的可能性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持深层物体</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖参数（如果最后一个参数是布尔值则检测到）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果override为false，则不会覆盖任何属性，但会添加新属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：obj.merge（合并... [，覆盖]）;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>Object.defineProperty(Object.prototype, "merge", {<font></font>
    enumerable: false,<font></font>
    value: function () {<font></font>
        var override = true,<font></font>
            dest = this,<font></font>
            len = arguments.length,<font></font>
            props, merge, i, from;<font></font>
<font></font>
        if (typeof(arguments[arguments.length - 1]) === "boolean") {<font></font>
            override = arguments[arguments.length - 1];<font></font>
            len = arguments.length - 1;<font></font>
        }<font></font>
<font></font>
        for (i = 0; i &lt; len; i++) {<font></font>
            from = arguments[i];<font></font>
            if (from != null) {<font></font>
                Object.getOwnPropertyNames(from).forEach(function (name) {<font></font>
                    var descriptor;<font></font>
<font></font>
                    // nesting<font></font>
                    if ((typeof(dest[name]) === "object" || typeof(dest[name]) === "undefined")<font></font>
                            &amp;&amp; typeof(from[name]) === "object") {<font></font>
<font></font>
                        // ensure proper types (Array rsp Object)<font></font>
                        if (typeof(dest[name]) === "undefined") {<font></font>
                            dest[name] = Array.isArray(from[name]) ? [] : {};<font></font>
                        }<font></font>
                        if (override) {<font></font>
                            if (!Array.isArray(dest[name]) &amp;&amp; Array.isArray(from[name])) {<font></font>
                                dest[name] = [];<font></font>
                            }<font></font>
                            else if (Array.isArray(dest[name]) &amp;&amp; !Array.isArray(from[name])) {<font></font>
                                dest[name] = {};<font></font>
                            }<font></font>
                        }<font></font>
                        dest[name].merge(from[name], override);<font></font>
                    } <font></font>
<font></font>
                    // flat properties<font></font>
                    else if ((name in dest &amp;&amp; override) || !(name in dest)) {<font></font>
                        descriptor = Object.getOwnPropertyDescriptor(from, name);<font></font>
                        if (descriptor.configurable) {<font></font>
                            Object.defineProperty(dest, name, descriptor);<font></font>
                        }<font></font>
                    }<font></font>
                });<font></font>
            }<font></font>
        }<font></font>
        return this;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例和测试案例：</font></font></p>

<pre><code>function clone (obj) {<font></font>
    return JSON.parse(JSON.stringify(obj));<font></font>
}<font></font>
var obj = {<font></font>
    name : "trick",<font></font>
    value : "value"<font></font>
};<font></font>
<font></font>
var mergeObj = {<font></font>
    name : "truck",<font></font>
    value2 : "value2"<font></font>
};<font></font>
<font></font>
var mergeObj2 = {<font></font>
    name : "track",<font></font>
    value : "mergeObj2",<font></font>
    value2 : "value2-mergeObj2",<font></font>
    value3 : "value3"<font></font>
};<font></font>
<font></font>
assertTrue("Standard", clone(obj).merge(mergeObj).equals({<font></font>
    name : "truck",<font></font>
    value : "value",<font></font>
    value2 : "value2"<font></font>
}));<font></font>
<font></font>
assertTrue("Standard no Override", clone(obj).merge(mergeObj, false).equals({<font></font>
    name : "trick",<font></font>
    value : "value",<font></font>
    value2 : "value2"<font></font>
}));<font></font>
<font></font>
assertTrue("Multiple", clone(obj).merge(mergeObj, mergeObj2).equals({<font></font>
    name : "track",<font></font>
    value : "mergeObj2",<font></font>
    value2 : "value2-mergeObj2",<font></font>
    value3 : "value3"<font></font>
}));<font></font>
<font></font>
assertTrue("Multiple no Override", clone(obj).merge(mergeObj, mergeObj2, false).equals({<font></font>
    name : "trick",<font></font>
    value : "value",<font></font>
    value2 : "value2",<font></font>
    value3 : "value3"<font></font>
}));<font></font>
<font></font>
var deep = {<font></font>
    first : {<font></font>
        name : "trick",<font></font>
        val : "value"<font></font>
    },<font></font>
    second : {<font></font>
        foo : "bar"<font></font>
    }<font></font>
};<font></font>
<font></font>
var deepMerge = {<font></font>
    first : {<font></font>
        name : "track",<font></font>
        anotherVal : "wohoo"<font></font>
    },<font></font>
    second : {<font></font>
        foo : "baz",<font></font>
        bar : "bam"<font></font>
    },<font></font>
    v : "on first layer"<font></font>
};<font></font>
<font></font>
assertTrue("Deep merges", clone(deep).merge(deepMerge).equals({<font></font>
    first : {<font></font>
        name : "track",<font></font>
        val : "value",<font></font>
        anotherVal : "wohoo"<font></font>
    },<font></font>
    second : {<font></font>
        foo : "baz",<font></font>
        bar : "bam"<font></font>
    },<font></font>
    v : "on first layer"<font></font>
}));<font></font>
<font></font>
assertTrue("Deep merges no override", clone(deep).merge(deepMerge, false).equals({<font></font>
    first : {<font></font>
        name : "trick",<font></font>
        val : "value",<font></font>
        anotherVal : "wohoo"<font></font>
    },<font></font>
    second : {<font></font>
        foo : "bar",<font></font>
        bar : "bam"<font></font>
    },<font></font>
    v : "on first layer"<font></font>
}));<font></font>
<font></font>
var obj1 = {a: 1, b: "hello"};<font></font>
obj1.merge({c: 3});<font></font>
assertTrue(obj1.equals({a: 1, b: "hello", c: 3}));<font></font>
<font></font>
obj1.merge({a: 2, b: "mom", d: "new property"}, false);<font></font>
assertTrue(obj1.equals({a: 1, b: "hello", c: 3, d: "new property"}));<font></font>
<font></font>
var obj2 = {};<font></font>
obj2.merge({a: 1}, {b: 2}, {a: 3});<font></font>
assertTrue(obj2.equals({a: 3, b: 2}));<font></font>
<font></font>
var a = [];<font></font>
var b = [1, [2, 3], 4];<font></font>
a.merge(b);<font></font>
assertEquals(1, a[0]);<font></font>
assertEquals([2, 3], a[1]);<font></font>
assertEquals(4, a[2]);<font></font>
<font></font>
<font></font>
var o1 = {};<font></font>
var o2 = {a: 1, b: {c: 2}};<font></font>
var o3 = {d: 3};<font></font>
o1.merge(o2, o3);<font></font>
assertTrue(o1.equals({a: 1, b: {c: 2}, d: 3}));<font></font>
o1.b.c = 99;<font></font>
assertTrue(o2.equals({a: 1, b: {c: 2}}));<font></font>
<font></font>
// checking types with arrays and objects<font></font>
var bo;<font></font>
a = [];<font></font>
bo = [1, {0:2, 1:3}, 4];<font></font>
b = [1, [2, 3], 4];<font></font>
<font></font>
a.merge(b);<font></font>
assertTrue("Array stays Array?", Array.isArray(a[1]));<font></font>
<font></font>
a = [];<font></font>
a.merge(bo);<font></font>
assertTrue("Object stays Object?", !Array.isArray(a[1]));<font></font>
<font></font>
a = [];<font></font>
a.merge(b);<font></font>
a.merge(bo);<font></font>
assertTrue("Object overrides Array", !Array.isArray(a[1]));<font></font>
<font></font>
a = [];<font></font>
a.merge(b);<font></font>
a.merge(bo, false);<font></font>
assertTrue("Object does not override Array", Array.isArray(a[1]));<font></font>
<font></font>
a = [];<font></font>
a.merge(bo);<font></font>
a.merge(b);<font></font>
assertTrue("Array overrides Object", Array.isArray(a[1]));<font></font>
<font></font>
a = [];<font></font>
a.merge(bo);<font></font>
a.merge(b, false);<font></font>
assertTrue("Array does not override Object", !Array.isArray(a[1]));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的equals方法可以在这里找到：</font></font><a href="https://stackoverflow.com/questions/1068834/object-comparison-in-javascript/5522917#5522917"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的对象比较</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇阿良Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做到这一点的最佳方法是添加一个使用Object.defineProperty不可枚举的适当属性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您仍然可以遍历对象的属性，而不必具有使用Object.prototype.extend创建属性时将获得的新创建的“ extend”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.defineProperty（Object.prototype，“ extend”，{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    枚举：错误，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    值：功能（来自）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        var props = Object.getOwnPropertyNames（from）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        var dest = this;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        props.forEach（function（name）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            如果（名称中的名称）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                var destination = Object.getOwnPropertyDescriptor（from，name）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                Object.defineProperty（目的地，名称，目的地）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        返回这个</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
}）;</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作完成后，您可以执行以下操作：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var obj = {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    名称：“ stack”，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    完成：“溢出”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
}</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
var替换= {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    名称：“ stock”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
};</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
obj.extend（replacement）;</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在这里写了一篇博客文章：</font><a href="http://onemoredigit.com/post/1527191998/extending-objects-in-node-js" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://onemoredigit.com/post/1527191998/extending-objects-in-node-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//onemoredigit.com/post/1527191998/extending-objects-in-node-js</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://en.wikipedia.org/wiki/Prototype_JavaScript_Framework" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有：</font></font></p>

<pre><code>Object.extend = function(destination,source) {<font></font>
    for (var property in source)<font></font>
        destination[property] = source[property];<font></font>
    return destination;<font></font>
}<font></font>
</code></pre>

<p><code>obj1.extend(obj2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 会做你想要的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单地使用jQuery </font></font><strong><code>extend</code></strong></p>

<pre><code>var obj1 = { val1: false, limit: 5, name: "foo" };<font></font>
var obj2 = { val2: true, name: "bar" };<font></font>
<font></font>
jQuery.extend(obj1, obj2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含的所有值</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>obj2</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个叫库</font></font><a href="https://github.com/nrf110/deepmerge" rel="noreferrer"><code>deepmerge</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://en.wikipedia.org/wiki/GitHub" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这似乎是得到一些牵引。</font><font style="vertical-align: inherit;">它是独立的，可通过</font></font><a href="https://en.wikipedia.org/wiki/Npm_(software)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和bower软件包管理器使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我倾向于对此进行使用或改进，而不是从答案中粘贴粘贴代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出的解决方案应进行修改，以检查</font></font><code>source.hasOwnProperty(property)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配前环-否则，你最终会复制整个原型链，这是很少所需的属性...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.assign（）</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 2015（ES6）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一项新技术，是ECMAScript 2015（ES6）标准的一部分。</font><font style="vertical-align: inherit;">该技术的规范已完成，但是请检查兼容性表以了解各种浏览器的使用和实现状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.assign（）方法用于将所有可枚举的自身属性的值从一个或多个源对象复制到目标对象。</font><font style="vertical-align: inherit;">它将返回目标对象。</font></font></p>

<pre><code>var o1 = { a: 1 };<font></font>
var o2 = { b: 2 };<font></font>
var o3 = { c: 3 };<font></font>
<font></font>
var obj = Object.assign(o1, o2, o3);<font></font>
console.log(obj); // { a: 1, b: 2, c: 3 }<font></font>
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下两个可能是一个很好的起点。</font><font style="vertical-align: inherit;">lodash还具有满足这些特殊需求的定制器功能！</font></font></p>

<p><code>_.extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://underscorejs.org/#extend" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://underscorejs.org/#extend</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font><br>
<code>_.merge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://lodash.com/docs#merge" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://lodash.com/docs#merge</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天需要合并对象，这个问题（和答案）对我有很大帮助。</font><font style="vertical-align: inherit;">我尝试了一些答案，但都不满足我的需求，因此我组合了一些答案，自己添加了一些内容，并提出了新的合并功能。</font><font style="vertical-align: inherit;">这里是：</font></font></p>



<pre class="lang-js prettyprint-override"><code>var merge = function() {<font></font>
    var obj = {},<font></font>
        i = 0,<font></font>
        il = arguments.length,<font></font>
        key;<font></font>
    for (; i &lt; il; i++) {<font></font>
        for (key in arguments[i]) {<font></font>
            if (arguments[i].hasOwnProperty(key)) {<font></font>
                obj[key] = arguments[i][key];<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    return obj;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些示例用法：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var t1 = {<font></font>
    key1: 1,<font></font>
    key2: "test",<font></font>
    key3: [5, 2, 76, 21]<font></font>
};<font></font>
var t2 = {<font></font>
    key1: {<font></font>
        ik1: "hello",<font></font>
        ik2: "world",<font></font>
        ik3: 3<font></font>
    }<font></font>
};<font></font>
var t3 = {<font></font>
    key2: 3,<font></font>
    key3: {<font></font>
        t1: 1,<font></font>
        t2: 2,<font></font>
        t3: {<font></font>
            a1: 1,<font></font>
            a2: 3,<font></font>
            a4: [21, 3, 42, "asd"]<font></font>
        }<font></font>
    }<font></font>
};<font></font>
<font></font>
console.log(merge(t1, t2));<font></font>
console.log(merge(t1, t3));<font></font>
console.log(merge(t2, t3));<font></font>
console.log(merge(t1, t2, t3));<font></font>
console.log(merge({}, t1, { key1: 1 }));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用谷歌搜索代码以合并对象属性，并在这里结束。</font><font style="vertical-align: inherit;">但是，由于没有用于递归合并的任何代码，因此我自己编写了它。</font><font style="vertical-align: inherit;">（也许jQuery扩展是递归BTW吗？）无论如何，希望其他人也会发现它也有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（现在代码不使用</font></font><code>Object.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：）</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码</font></font></h2>

<pre><code>/*<font></font>
* Recursively merge properties of two objects <font></font>
*/<font></font>
function MergeRecursive(obj1, obj2) {<font></font>
<font></font>
  for (var p in obj2) {<font></font>
    try {<font></font>
      // Property in destination object set; update its value.<font></font>
      if ( obj2[p].constructor==Object ) {<font></font>
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);<font></font>
<font></font>
      } else {<font></font>
        obj1[p] = obj2[p];<font></font>
<font></font>
      }<font></font>
<font></font>
    } catch(e) {<font></font>
      // Property in destination object not set; create it and set its value.<font></font>
      obj1[p] = obj2[p];<font></font>
<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return obj1;<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个例子</font></font></h2>

<pre><code>o1 = {  a : 1,<font></font>
        b : 2,<font></font>
        c : {<font></font>
          ca : 1,<font></font>
          cb : 2,<font></font>
          cc : {<font></font>
            cca : 100,<font></font>
            ccb : 200 } } };<font></font>
<font></font>
o2 = {  a : 10,<font></font>
        c : {<font></font>
          ca : 10,<font></font>
          cb : 20, <font></font>
          cc : {<font></font>
            cca : 101,<font></font>
            ccb : 202 } } };<font></font>
<font></font>
o3 = MergeRecursive(o1, o2);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生像o3的对象</font></font></strong></p>

<pre><code>o3 = {  a : 10,<font></font>
        b : 2,<font></font>
        c : {<font></font>
          ca : 10,<font></font>
          cb : 20,<font></font>
          cc : { <font></font>
            cca : 101,<font></font>
            ccb : 202 } } };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小卤蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.assign" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和谐的ECMAScript 2015年（ES6）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><strong><code>Object.assign</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将做到这一点。</font></font></p>

<pre><code>Object.assign(obj1, obj2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前的浏览器支持</font></font><a href="http://kangax.github.io/compat-table/es6/#test-Object_static_methods_Object.assign" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">越来越好</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果您正在开发不支持的浏览器，则可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
