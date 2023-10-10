---
layout: question
title:  测试是否存在嵌套的JavaScript对象键
date:   2020-03-11T07:29:49.000Z
description: 如果我有一个对象的引用：var test = {};that will potentially (but not immediately) ha...
img: 
author: 泡芙小宇宙十三
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我有一个对象的引用：</font></font></p>

<pre><code>var test = {};
</code></pre>

<p>that will potentially (but not immediately) have nested objects, something like:</p>

<pre><code>{level1: {level2: {level3: "level3"}}};
</code></pre>

<p>What is the best way to check for the existence of property in deeply nested objects?</p>

<p><code>alert(test.level1);</code> yields <code>undefined</code>, but <code>alert(test.level1.level2.level3);</code> fails.</p>

<p>I’m currently doing something like this:</p>

<pre><code>if(test.level1 &amp;&amp; test.level1.level2 &amp;&amp; test.level1.level2.level3) {<font></font>
    alert(test.level1.level2.level3);<font></font>
}<font></font>
</code></pre>

<p>but I was wondering if there’s a better way.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我编写了自己的函数，该函数采用了所需的路径，并且具有好坏的回调函数。 </font></font></p>

<pre><code>function checkForPathInObject(object, path, callbackGood, callbackBad){<font></font>
    var pathParts = path.split(".");<font></font>
    var currentObjectPath = object;<font></font>
<font></font>
    // Test every step to see if it exists in object<font></font>
    for(var i=0; i&lt;(pathParts.length); i++){<font></font>
        var currentPathPart = pathParts[i];<font></font>
        if(!currentObjectPath.hasOwnProperty(pathParts[i])){<font></font>
            if(callbackBad){<font></font>
                callbackBad();<font></font>
            }<font></font>
            return false;<font></font>
        } else {<font></font>
            currentObjectPath = currentObjectPath[pathParts[i]];<font></font>
        }<font></font>
    }<font></font>
<font></font>
    // call full path in callback<font></font>
    callbackGood();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>var testObject = {<font></font>
    level1:{<font></font>
        level2:{<font></font>
            level3:{<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
};<font></font>
<font></font>
<font></font>
checkForPathInObject(testObject, "level1.level2.level3", function(){alert("good!")}, function(){alert("bad!")}); // good<font></font>
<font></font>
checkForPathInObject(testObject, "level1.level2.level3.levelNotThere", function(){alert("good!")}, function(){alert("bad!")}); //bad<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过使用递归函数来做到这一点。</font><font style="vertical-align: inherit;">即使您不知道所有嵌套对象键的名称，此方法也将起作用。</font></font></p>

<pre><code>function FetchKeys(obj) {<font></font>
    let objKeys = [];<font></font>
    let keyValues = Object.entries(obj);<font></font>
    for (let i in keyValues) {<font></font>
        objKeys.push(keyValues[i][0]);<font></font>
        if (typeof keyValues[i][1] == "object") {<font></font>
            var keys = FetchKeys(keyValues[i][1])<font></font>
            objKeys = objKeys.concat(keys);<font></font>
        }<font></font>
    }<font></font>
    return objKeys;<font></font>
}<font></font>
<font></font>
let test = { level1: { level2: { level3: "level3" } } };<font></font>
let keyToCheck = "level2";<font></font>
let keys = FetchKeys(test); //Will return an array of Keys<font></font>
<font></font>
if (keys.indexOf(keyToCheck) != -1) {<font></font>
    //Key Exists logic;<font></font>
}<font></font>
else {<font></font>
    //Key Not Found logic;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一个小改进（成为1线）：</font></font></p>

<pre><code>   alert( test.level1 &amp;&amp; test.level1.level2 &amp;&amp; test.level1.level2.level3 )
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以起作用，是因为&amp;&amp;运算符返回它求值的最终操作数（并使其短路）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题很旧，但是我想通过将其添加到所有对象中来提供扩展。</font><font style="vertical-align: inherit;">我知道人们倾向于使用对象原型来扩展对象功能，但是我发现没有比这更容易的事情了。</font><font style="vertical-align: inherit;">另外，现在允许使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.defineProperty</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<pre><code>Object.defineProperty( Object.prototype, "has", { value: function( needle ) {<font></font>
    var obj = this;<font></font>
    var needles = needle.split( "." );<font></font>
    for( var i = 0; i&lt;needles.length; i++ ) {<font></font>
        if( !obj.hasOwnProperty(needles[i])) {<font></font>
            return false;<font></font>
        }<font></font>
        obj = obj[needles[i]];<font></font>
    }<font></font>
    return true;<font></font>
}});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，为了测试任何对象中的任何属性，您可以简单地执行以下操作：</font></font></p>

<pre><code>if( obj.has("some.deep.nested.object.somewhere") )
</code></pre>

<p><a href="http://jsfiddle.net/4302m6e1/4/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行测试，特别是它包含一些jQuery，如果您直接修改Object.prototype会由于该属性变得可枚举而中断。</font><font style="vertical-align: inherit;">这应该与第三方库一起正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CMS给出的答案也可以很好地与以下对null检查的修改一起使用</font></font></p>

<pre><code>function checkNested(obj /*, level1, level2, ... levelN*/) <font></font>
      {<font></font>
             var args = Array.prototype.slice.call(arguments),<font></font>
             obj = args.shift();<font></font>
<font></font>
            for (var i = 0; i &lt; args.length; i++) <font></font>
            {<font></font>
                if (obj == null || !obj.hasOwnProperty(args[i]) ) <font></font>
                {<font></font>
                    return false;<font></font>
                }<font></font>
                obj = obj[args[i]];<font></font>
            }<font></font>
            return true;<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/4034468/1636522"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始阐述了以下选择</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">两者的同一个树：</font></font></p>

<pre><code>var o = { a: { b: { c: 1 } } };
</code></pre>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义时停止搜索</font></font></h2>

<pre><code>var u = undefined;<font></font>
o.a ? o.a.b ? o.a.b.c : u : u // 1<font></font>
o.x ? o.x.y ? o.x.y.z : u : u // undefined<font></font>
(o = o.a) ? (o = o.b) ? o.c : u : u // 1<font></font>
</code></pre>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保每个级别一个接一个</font></font></h2>

<pre><code>var $ = function (empty) {<font></font>
    return function (node) {<font></font>
        return node || empty;<font></font>
    };<font></font>
}({});<font></font>
<font></font>
$($(o.a).b).c // 1<font></font>
$($(o.x).y).z // undefined<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个</font></font><code>function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整体并在整个项目中使用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function isExist(arg){<font></font>
   try{<font></font>
      return arg();<font></font>
   }catch(e){<font></font>
      return false;<font></font>
   }<font></font>
}<font></font>
<font></font>
let obj={a:5,b:{c:5}};<font></font>
<font></font>
console.log(isExist(()=&gt;obj.b.c))<font></font>
console.log(isExist(()=&gt;obj.b.foo))<font></font>
console.log(isExist(()=&gt;obj.test.foo))</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果条件</font></font></strong></p>

<pre><code>if(isExist(()=&gt;obj.test.foo)){<font></font>
   ....<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font></font><a href="https://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key#answer-4034468"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我想出了一个通用的函数来</font></font><code>ES2015</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决这个问题。</font></font></p>

<pre><code>function validChain( object, ...keys ) {<font></font>
    return keys.reduce( ( a, b ) =&gt; ( a || { } )[ b ], object ) !== undefined;<font></font>
}<font></font>
<font></font>
var test = {<font></font>
  first: {<font></font>
    second: {<font></font>
        third: "This is not the key your are looking for"<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
if ( validChain( test, "first", "second", "third" ) ) {<font></font>
    console.log( test.first.second.third );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单的方法是这样的：</font></font></p>

<pre><code>try {<font></font>
    alert(test.level1.level2.level3);<font></font>
} catch(e) {<font></font>
    alert("undefined");    // this is optional to put any output here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>try/catch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当未定义任何更高级别的对象（例如test，test.level1，test.level1.level2）时，</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">捕获情况。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以将tc39可选链接建议与babel 7一起使用</font></font><a href="https://blog.benestudio.co/optional-chaining-operator-in-javascript-342082de2db" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-tc39-proposal-optional-chaining</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码如下所示：</font></font></p>

<pre><code>  const test = test?.level1?.level2?.level3;<font></font>
  if (test) alert(test);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我</font></font><a href="http://web.archive.org/web/20161108071447/http://blog.osteele.com/posts/2007/12/cheap-monads/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Oliver Steele挑选的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种模式</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var level3 = (((test || {}).level1 || {}).level2 || {}).level3;<font></font>
alert( level3 );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，整篇文章都是关于如何在javascript中执行此操作的讨论。</font><font style="vertical-align: inherit;">他决定使用上面的语法（一旦习惯了，就不难阅读）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么样</font></font></p>

<pre><code>try {<font></font>
   alert(test.level1.level2.level3)<font></font>
} catch(e) {<font></font>
 ...whatever<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
