---
layout: question
title:  监听JavaScript中的变量更改
date:   2020-03-13T10:24:47.000Z
description: 某个变量的值更改时，是否可能在JS中触发事件？接受JQuery。...
img: 
author: 宝儿理查德
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某个变量的值更改时，是否可能在JS中触发事件？</font><font style="vertical-align: inherit;">接受JQuery。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1520篇《监听JavaScript中的变量更改》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>Utils = {<font></font>
    eventRegister_globalVariable : function(variableName,handlers){<font></font>
        eventRegister_JsonVariable(this,variableName,handlers);<font></font>
    },<font></font>
    eventRegister_jsonVariable : function(jsonObj,variableName,handlers){<font></font>
        if(jsonObj.eventRegisteredVariable === undefined) {<font></font>
            jsonObj.eventRegisteredVariable={};//this Object is used for trigger event in javascript variable value changes ku<font></font>
        }<font></font>
        Object.defineProperty(jsonObj, variableName , {<font></font>
                    get: function() { <font></font>
                        return jsonObj.eventRegisteredVariable[variableName] },<font></font>
                    set: function(value) {<font></font>
                        jsonObj.eventRegisteredVariable[variableName] = value; handlers(jsonObj.eventRegisteredVariable[variableName]);}<font></font>
                    });<font></font>
            }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/47888314/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始，我找到了最简单的方法</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>// variable holding your data<font></font>
const state = {<font></font>
  count: null,<font></font>
  update() {<font></font>
    console.log(`this gets called and your value is ${this.pageNumber}`);<font></font>
  },<font></font>
  get pageNumber() {<font></font>
    return this.count;<font></font>
  },<font></font>
  set pageNumber(pageNumber) {<font></font>
    this.count = pageNumber;<font></font>
    // here you call the code you need<font></font>
    this.update(this.count);<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着： </font></font></p>

<pre><code>state.pageNumber = 0;<font></font>
// watch the console<font></font>
<font></font>
state.pageNumber = 15;<font></font>
// watch the console<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个相当简单和简单的解决方案是仅使用函数调用来设置全局变量的值，而从不直接设置其值。</font><font style="vertical-align: inherit;">这样，您可以完全控制：</font></font></p>

<pre><code>var globalVar;<font></font>
<font></font>
function setGlobalVar(value) {<font></font>
    globalVar = value;<font></font>
    console.log("Value of globalVar set to: " + globalVar);<font></font>
    //Whatever else<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有办法强制执行此操作，它只需要编程</font></font><code>grep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规程</font><font style="vertical-align: inherit;">...尽管您可以使用</font><font style="vertical-align: inherit;">（或类似方法）检查​​代码中没有地方直接设置的值</font></font><code>globalVar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您也可以将其封装在一个对象以及用户getter和setter方法中……只是一个想法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>//ex:<font></font>
/*<font></font>
var x1 = {currentStatus:undefined};<font></font>
your need is x1.currentStatus value is change trigger event ?<font></font>
below the code is use try it.<font></font>
*/<font></font>
function statusChange(){<font></font>
    console.log("x1.currentStatus_value_is_changed"+x1.eventCurrentStatus);<font></font>
};<font></font>
<font></font>
var x1 = {<font></font>
    eventCurrentStatus:undefined,<font></font>
    get currentStatus(){<font></font>
        return this.eventCurrentStatus;<font></font>
    },<font></font>
    set currentStatus(val){<font></font>
        this.eventCurrentStatus=val;<font></font>
      //your function();<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>/*  var x1 = {<font></font>
eventCurrentStatus:undefined,<font></font>
currentStatus : {<font></font>
    get : function(){<font></font>
        return Events.eventCurrentStatus<font></font>
        },<font></font>
    set : function(status){<font></font>
        Events.eventCurrentStatus=status;<font></font>
<font></font>
    },<font></font>
}*/<font></font>
console.log("eventCurrentStatus = "+ x1.eventCurrentStatus);<font></font>
x1.currentStatus="create"<font></font>
console.log("eventCurrentStatus = "+ x1.eventCurrentStatus);<font></font>
x1.currentStatus="edit"<font></font>
console.log("eventCurrentStatus = "+ x1.eventCurrentStatus);<font></font>
console.log("currentStatus = "+ x1.currentStatus);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>/* global variable ku*/<font></font>
    var jsVarEvents={};<font></font>
    Object.defineProperty(window, "globalvar1", {//no i18n<font></font>
        get: function() { return window.jsVarEvents.globalvarTemp},<font></font>
        set: function(value) { window.window.jsVarEvents.globalvarTemp = value; }<font></font>
    });<font></font>
    console.log(globalvar1);<font></font>
    globalvar1=1;<font></font>
    console.log(globalvar1);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请大家记住最初的问题是变量，而不是对象;）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了上述所有答案之外，我还创建了一个名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">forTheWatch.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的小型库</font><font style="vertical-align: inherit;">，该库使用相同的方式来捕获和回调javascript中常规全局变量的更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与JQUERY变量兼容，无需使用OBJECTS，如果需要，您可以直接传递多个变量的ARRAY。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有帮助...：</font></font><a href="https://bitbucket.org/esabora/forthewatch" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
 </font><a href="https://bitbucket.org/esabora/forthewatch" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//bitbucket.org/esabora/forthewatch</font></a></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您只需要调用该函数：</font></font><br>
<code>watchIt("theVariableToWatch", "varChangedFunctionCallback");</code><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不相关，请提前抱歉。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Jim番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在寻找的功能可以通过使用“ defineProperty（）”方法来实现，该方法仅适用于现代浏览器：</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要更多的跨浏览器支持，我已经编写了一个具有一些类似功能的jQuery扩展：</font></font></p>

<p><a href="https://github.com/jarederaj/jQueue" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jarederaj/jQueue</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个小的jQuery扩展，用于处理对存在变量，对象或键的队列回调。</font><font style="vertical-align: inherit;">您可以将任意数量的回调分配给可能受后台运行的进程影响的任意数量的数据点。</font><font style="vertical-align: inherit;">jQueue侦听并等待您指定的这些数据存在，然后使用其参数触发正确的回调。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是直接的：您需要一对具有某种“ addListener / removeListener”接口的吸气剂/吸气剂或NPAPI插件（但这完全是另一回事了）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无StafanTom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于几年后的调优：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了适用于大多数浏览器（和IE6 +）的解决方案，该解决方案使用onpropertychange事件和更新的规范defineProperty。</font><font style="vertical-align: inherit;">轻微的缺点是您需要使变量成为dom对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细信息：</font></font></p>

<p><a href="http://johndyer.name/native-browser-get-set-properties-in-javascript/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://johndyer.name/native-browser-get-set-properties-in-javascript/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery {UI}（每个人都应该使用:-)），则可以将.change（）与隐藏的&lt;input /&gt;元素一起使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果真的那么重要，则有两种选择（第一种经过测试，第二种未经测试）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，使用setter和getter，如下所示：</font></font></p>

<pre><code>var myobj = {a : 1};<font></font>
<font></font>
function create_gets_sets(obj) { // make this a framework/global function<font></font>
    var proxy = {}<font></font>
    for ( var i in obj ) {<font></font>
        if (obj.hasOwnProperty(i)) {<font></font>
            var k = i;<font></font>
            proxy["set_"+i] = function (val) { this[k] = val; };<font></font>
            proxy["get_"+i] = function ()    { return this[k]; };<font></font>
        }<font></font>
    }<font></font>
    for (var i in proxy) {<font></font>
        if (proxy.hasOwnProperty(i)) {<font></font>
            obj[i] = proxy[i];<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
create_gets_sets(myobj);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您可以执行以下操作：</font></font></p>

<pre><code>function listen_to(obj, prop, handler) {<font></font>
    var current_setter = obj["set_" + prop];<font></font>
    var old_val = obj["get_" + prop]();<font></font>
    obj["set_" + prop] = function(val) { current_setter.apply(obj, [old_val, val]); handler(val));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将侦听器设置为：</font></font></p>

<pre><code>listen_to(myobj, "a", function(oldval, newval) {<font></font>
    alert("old : " + oldval + " new : " + newval);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，我实际上忘记了，我会在考虑的同时提交:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：哦，我记得:)您可以将手表放在值上：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定上面的myobj，上面带有“ a”：</font></font></p>

<pre><code>function watch(obj, prop, handler) { // make this a framework/global function<font></font>
    var currval = obj[prop];<font></font>
    function callback() {<font></font>
        if (obj[prop] != currval) {<font></font>
            var temp = currval;<font></font>
            currval = obj[prop];<font></font>
            handler(temp, currval);<font></font>
        }<font></font>
    }<font></font>
    return callback;<font></font>
}<font></font>
<font></font>
var myhandler = function (oldval, newval) {<font></font>
    //do something<font></font>
};<font></font>
<font></font>
var intervalH = setInterval(watch(myobj, "a", myhandler), 100);<font></font>
<font></font>
myobj.set_a(2);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小小蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，打了个旧话题，但是对于那些不了解Eli Grey的示例如何工作的人，这里有一些手册：</font></font><br></p>

<pre><code>var test = new Object();<font></font>
test.watch("elem", function(prop,oldval,newval){<font></font>
    //Your code<font></font>
    return newval;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助某人</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，现在完全有可能！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个旧线程，但是现在可以使用访问器（获取器和设置器）实现这种效果：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以定义一个这样的对象，其中</font></font><code>aInternal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表字段</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>x = {<font></font>
  aInternal: 10,<font></font>
  aListener: function(val) {},<font></font>
  set a(val) {<font></font>
    this.aInternal = val;<font></font>
    this.aListener(val);<font></font>
  },<font></font>
  get a() {<font></font>
    return this.aInternal;<font></font>
  },<font></font>
  registerListener: function(listener) {<font></font>
    this.aListener = listener;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用以下方法注册侦听器：</font></font></p>

<pre><code>x.registerListener(function(val) {<font></font>
  alert("Someone changed the value of x.a to " + val);<font></font>
});<font></font>
</code></pre>

<p>So whenever anything changes the value of <code>x.a</code>, the listener function will be fired. Running the following line will bring the alert popup:</p>

<pre><code>x.a = 42;
</code></pre>

<p>See an example here: <a href="https://jsfiddle.net/5o1wf1bn/1/">https://jsfiddle.net/5o1wf1bn/1/</a></p>

<p>You can also user an array of listeners instead of a single listener slot, but I wanted to give you the simplest possible example.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
