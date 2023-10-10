---
layout: question
title:  JavaScript中的对象比较\[重复\]
date:   2020-03-09T16:53:47.000Z
description:                                                                          ...
img: 
author: 米亚神无
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/201183/how-to-determine-equality-for-two-javascript-objects" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何确定两个JavaScript对象的相等性？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （60个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-05-10 19：43：36Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中比较对象的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var user1 = {name : "nerd", org: "dev"};<font></font>
var user2 = {name : "nerd", org: "dev"};<font></font>
var eq = user1 == user2;<font></font>
alert(eq); // gives false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个对象引用的是完全相同的对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><strong><font style="vertical-align: inherit;">则它们相等</font></strong><font style="vertical-align: inherit;">，但是有没有办法检查它们是否具有相同的属性值？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方法对我有用，但这是唯一的可能性吗？</font></font></p>

<pre><code>var eq = Object.toJSON(user1) == Object.toJSON(user2);<font></font>
alert(eq); // gives true<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要显式检查方法，则可以使用method.toSource（）或method.toString（）方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小胖蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了这段代码用于对象比较，它似乎可以工作。</font><font style="vertical-align: inherit;">检查断言：</font></font></p>

<pre><code><font></font>
function countProps(obj) {<font></font>
    var count = 0;<font></font>
    for (k in obj) {<font></font>
        if (obj.hasOwnProperty(k)) {<font></font>
            count++;<font></font>
        }<font></font>
    }<font></font>
    return count;<font></font>
};<font></font>
<font></font>
function objectEquals(v1, v2) {<font></font>
<font></font>
    if (typeof(v1) !== typeof(v2)) {<font></font>
        return false;<font></font>
    }<font></font>
<font></font>
    if (typeof(v1) === "function") {<font></font>
        return v1.toString() === v2.toString();<font></font>
    }<font></font>
<font></font>
    if (v1 instanceof Object &amp;&amp; v2 instanceof Object) {<font></font>
        if (countProps(v1) !== countProps(v2)) {<font></font>
            return false;<font></font>
        }<font></font>
        var r = true;<font></font>
        for (k in v1) {<font></font>
            r = objectEquals(v1[k], v2[k]);<font></font>
            if (!r) {<font></font>
                return false;<font></font>
            }<font></font>
        }<font></font>
        return true;<font></font>
    } else {<font></font>
        return v1 === v2;<font></font>
    }<font></font>
}<font></font>
<font></font>
assert.isTrue(objectEquals(null,null));<font></font>
assert.isFalse(objectEquals(null,undefined));<font></font>
<font></font>
assert.isTrue(objectEquals("hi","hi"));<font></font>
assert.isTrue(objectEquals(5,5));<font></font>
assert.isFalse(objectEquals(5,10));<font></font>
<font></font>
assert.isTrue(objectEquals([],[]));<font></font>
assert.isTrue(objectEquals([1,2],[1,2]));<font></font>
assert.isFalse(objectEquals([1,2],[2,1]));<font></font>
assert.isFalse(objectEquals([1,2],[1,2,3]));<font></font>
<font></font>
assert.isTrue(objectEquals({},{}));<font></font>
assert.isTrue(objectEquals({a:1,b:2},{a:1,b:2}));<font></font>
assert.isTrue(objectEquals({a:1,b:2},{b:2,a:1}));<font></font>
assert.isFalse(objectEquals({a:1,b:2},{a:1,b:3}));<font></font>
<font></font>
assert.isTrue(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:26}}));<font></font>
assert.isFalse(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:27}}));<font></font>
<font></font>
assert.isTrue(objectEquals(function(x){return x;},function(x){return x;}));<font></font>
assert.isFalse(objectEquals(function(x){return x;},function(y){return y+2;}));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下算法将处理自引用数据结构，数字，字符串，日期，当然还有简单嵌套的javascript对象：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下情况下，对象被视为等效</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们完全相等</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（首先解开String和Number以确保</font></font><code>42</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于</font></font><code>Number(42)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者它们都是日期并且具有相同的日期 </font></font><code>valueOf()</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者它们都是相同的类型，而不是null和...
</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们不是对象，并且每个对象相等</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（捕获数字/字符串/布尔值）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，忽略具有</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值的</font><font style="vertical-align: inherit;">属性，</font><font style="vertical-align: inherit;">它们具有相同的属性，所有这些属性都被递归等效。</font></font></li>
</ul></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本不认为功能相同。</font><font style="vertical-align: inherit;">该测试不足，因为函数可能具有不同的闭包。</font><font style="vertical-align: inherit;">只有这样</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说，</font><font style="vertical-align: inherit;">函数才被认为是相等的</font><font style="vertical-align: inherit;">（但是</font><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">您选择这样做，则可以轻松扩展该等效关系）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免了可能由循环数据结构引起的</font><strong><font style="vertical-align: inherit;">无限循环</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当</font></font><code>areEquivalent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试图证明相等性并递归到对象的属性中时，它会跟踪需要进行子比较的对象。</font><font style="vertical-align: inherit;">如果可以证明相等性，则对象之间的某些可到达属性路径会有所不同，然后必须存在最短的此类可到达路径，并且最短可到达路径不能包含两个路径中都存在的循环。</font><font style="vertical-align: inherit;">即，递归比较对象时可以假定相等。</font><font style="vertical-align: inherit;">假设存储在属性中</font></font><code>areEquivalent_Eq_91_2_34</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用后将其删除，但是如果对象图已经包含此类属性，则行为未定义。</font><font style="vertical-align: inherit;">必须使用这种marker属性，因为javascript不支持使用任意对象作为键的字典。</font></font></p>

<pre><code>function unwrapStringOrNumber(obj) {<font></font>
    return (obj instanceof Number || obj instanceof String <font></font>
            ? obj.valueOf() <font></font>
            : obj);<font></font>
}<font></font>
function areEquivalent(a, b) {<font></font>
    a = unwrapStringOrNumber(a);<font></font>
    b = unwrapStringOrNumber(b);<font></font>
    if (a === b) return true; //e.g. a and b both null<font></font>
    if (a === null || b === null || typeof (a) !== typeof (b)) return false;<font></font>
    if (a instanceof Date) <font></font>
        return b instanceof Date &amp;&amp; a.valueOf() === b.valueOf();<font></font>
    if (typeof (a) !== "object") <font></font>
        return a == b; //for boolean, number, string, xml<font></font>
<font></font>
    var newA = (a.areEquivalent_Eq_91_2_34 === undefined),<font></font>
        newB = (b.areEquivalent_Eq_91_2_34 === undefined);<font></font>
    try {<font></font>
        if (newA) a.areEquivalent_Eq_91_2_34 = [];<font></font>
        else if (a.areEquivalent_Eq_91_2_34.some(<font></font>
            function (other) { return other === b; })) return true;<font></font>
        if (newB) b.areEquivalent_Eq_91_2_34 = [];<font></font>
        else if (b.areEquivalent_Eq_91_2_34.some(<font></font>
            function (other) { return other === a; })) return true;<font></font>
        a.areEquivalent_Eq_91_2_34.push(b);<font></font>
        b.areEquivalent_Eq_91_2_34.push(a);<font></font>
<font></font>
        var tmp = {};<font></font>
        for (var prop in a) <font></font>
            if(prop != "areEquivalent_Eq_91_2_34") <font></font>
                tmp[prop] = null;<font></font>
        for (var prop in b) <font></font>
            if (prop != "areEquivalent_Eq_91_2_34") <font></font>
                tmp[prop] = null;<font></font>
<font></font>
        for (var prop in tmp) <font></font>
            if (!areEquivalent(a[prop], b[prop]))<font></font>
                return false;<font></font>
        return true;<font></font>
    } finally {<font></font>
        if (newA) delete a.areEquivalent_Eq_91_2_34;<font></font>
        if (newB) delete b.areEquivalent_Eq_91_2_34;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>  Utils.compareObjects = function(o1, o2){<font></font>
    for(var p in o1){<font></font>
        if(o1.hasOwnProperty(p)){<font></font>
            if(o1[p] !== o2[p]){<font></font>
                return false;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    for(var p in o2){<font></font>
        if(o2.hasOwnProperty(p)){<font></font>
            if(o1[p] !== o2[p]){<font></font>
                return false;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    return true;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较仅一个级别的对象的简单方法。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
