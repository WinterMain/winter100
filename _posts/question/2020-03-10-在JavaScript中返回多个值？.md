---
layout: question
title:  在JavaScript中返回多个值？
date:   2020-03-10T13:36:17.000Z
description: 我试图在JavaScript中返回两个值。那可能吗？  var newCodes = function() {      var dCodes = ...
img: 
author: 西门理查德
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在JavaScript中返回两个值。</font><font style="vertical-align: inherit;">那可能吗？  </font></font></p>

<pre><code>var newCodes = function() {  <font></font>
    var dCodes = fg.codecsCodes.rs;<font></font>
    var dCodes2 = fg.codecsCodes2.rs;<font></font>
    return dCodes, dCodes2;<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第509篇《在JavaScript中返回多个值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了返回其他建议的数组或对象之外，您还可以使用收集器函数（类似于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">The Little Schemer</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><em><font style="vertical-align: inherit;">的</font></em><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>function a(collector){<font></font>
  collector(12,13);<font></font>
}<font></font>
<font></font>
var x,y;<font></font>
a(function(a,b){<font></font>
  x=a;<font></font>
  y=b;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我进行了jsperf测试，以查看三种方法中哪种更快。</font><font style="vertical-align: inherit;">阵列最快，而收集器最慢。</font></font></p>

<p><a href="http://jsperf.com/returning-multiple-values-2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/returning-multiple-values-2</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回多个值的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种非常常见的方法</font><font style="vertical-align: inherit;">是使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象常量</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此类似：</font></font></p>

<pre><code>const myFunction = () =&gt; {<font></font>
  const firstName = "Alireza", <font></font>
        familyName = "Dezfoolian",<font></font>
        age = 35;<font></font>
  return { firstName, familyName, age};<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并获得像这样的值：</font></font></p>

<pre><code>myFunction().firstName; //Alireza<font></font>
myFunction().familyName; //Dezfoolian<font></font>
myFunction().age; //age<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更短的方法：</font></font></p>

<pre><code>const {firstName, familyName, age} = myFunction();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样单独获取它们：</font></font></p>

<pre><code>firstName; //Alireza<font></font>
familyName; //Dezfoolian<font></font>
age; //35<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几天前，我有类似的要求，即从我创建的函数中获取多个返回值。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从许多返回值中，我需要它仅返回给定条件的特定值，然后返回对应于其他条件的其他返回值。</font></font></strong></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我如何做到这一点的例子：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能：</font></font></strong></p>

<pre><code>function myTodayDate(){<font></font>
    var today = new Date();<font></font>
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];<font></font>
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];<font></font>
    var myTodayObj = <font></font>
    {<font></font>
        myDate : today.getDate(),<font></font>
        myDay : day[today.getDay()],<font></font>
        myMonth : month[today.getMonth()],<font></font>
        year : today.getFullYear()<font></font>
    }<font></font>
    return myTodayObj;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从函数返回的对象中获取必需的返回值：</font></font></strong></p>

<pre><code>var todayDate = myTodayDate().myDate;<font></font>
var todayDay = myTodayDate().myDay;<font></font>
var todayMonth = myTodayDate().myMonth;<font></font>
var todayYear = myTodayDate().year;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答这个问题的重点是分享这种以良好格式获取Date的方法。</font><font style="vertical-align: inherit;">希望它对您有所帮助:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道执行此操作的两种方法：1.以数组形式返回2.以对象形式返回</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我发现的一个示例：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
// Defining function<font></font>
function divideNumbers(dividend, divisor){<font></font>
    var quotient = dividend / divisor;<font></font>
    var arr = [dividend, divisor, quotient];<font></font>
    return arr;<font></font>
}<font></font>
<font></font>
// Store returned value in a variable<font></font>
var all = divideNumbers(10, 2);<font></font>
<font></font>
// Displaying individual values<font></font>
alert(all[0]); // 0utputs: 10<font></font>
alert(all[1]); // 0utputs: 2<font></font>
alert(all[2]); // 0utputs: 5<font></font>
&lt;/script&gt;<font></font>
<font></font>
<font></font>
<font></font>
&lt;script&gt;<font></font>
// Defining function<font></font>
function divideNumbers(dividend, divisor){<font></font>
    var quotient = dividend / divisor;<font></font>
    var obj = {<font></font>
        dividend: dividend,<font></font>
        divisor: divisor,<font></font>
        quotient: quotient<font></font>
    };<font></font>
    return obj;<font></font>
}<font></font>
<font></font>
// Store returned value in a variable<font></font>
var all = divideNumbers(10, 2);<font></font>
<font></font>
// Displaying individual values<font></font>
alert(all.dividend); // 0utputs: 10<font></font>
alert(all.divisor); // 0utputs: 2<font></font>
alert(all.quotient); // 0utputs: 5<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加缺少的重要部分，使该问题成为完整的资源，因为这会出现在搜索结果中。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象分解</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对象分解中，您不必使用与变量名相同的键值，可以通过如下定义变量名来分配不同的变量名：</font></font></p>

<pre><code>const newCodes = () =&gt; {  <font></font>
    let dCodes = fg.codecsCodes.rs;<font></font>
    let dCodes2 = fg.codecsCodes2.rs;<font></font>
    return { dCodes, dCodes2 };<font></font>
};<font></font>
<font></font>
//destructuring<font></font>
let { dCodes: code1, dCodes2: code2 } = newCodes();<font></font>
<font></font>
//now it can be accessed by code1 &amp; code2<font></font>
console.log(code1, code2);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列解构</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数组解构中，可以跳过不需要的值。</font></font></p>

<pre><code>const newCodes = () =&gt; {  <font></font>
    //...<font></font>
    return [ dCodes, dCodes2, dCodes3 ];<font></font>
};<font></font>
<font></font>
let [ code1, code2 ] = newCodes(); //first two items<font></font>
let [ code1, ,code3 ] = newCodes(); //skip middle item, get first &amp; last<font></font>
let [ ,, code3 ] = newCodes(); //skip first two items, get last<font></font>
let [ code1, ...rest ] = newCodes(); //first item, and others as an array<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，</font></font><code>...rest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该始终将其结尾，因为在将其他所有内容汇总到之后，销毁任何内容都没有任何意义</font></font><code>rest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这将为这个问题增加一些价值：)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙老丝Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我们不能完全做您的尝试。</font><font style="vertical-align: inherit;">但是可以做到以下几点。</font></font></p>

<pre><code>function multiReturnValues(){<font></font>
    return {x:10,y:20};<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在调用方法时</font></font></p>

<pre><code>const {x,y} = multiReturnValues();<font></font>
<font></font>
console.log(x) ---&gt; 10<font></font>
console.log(y) ---&gt; 20<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有在这里添加新内容，而是另一种替代方式。</font></font></p>

<pre><code> var newCodes = function() {<font></font>
     var dCodes = fg.codecsCodes.rs;<font></font>
     var dCodes2 = fg.codecsCodes2.rs;<font></font>
     let [...val] = [dCodes,dCodes2];<font></font>
     return [...val];<font></font>
 };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇西里泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以这样做：</font></font></p>

<pre><code>function a(){<font></font>
  var d=2;<font></font>
  var c=3;<font></font>
  var f=4;<font></font>
  return {d:d,c:c,f:f}<font></font>
}<font></font>
<font></font>
const {d,c,f} = a()<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">entaseven</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用最新的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解构分配</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（但请</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您的环境支持它</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>var newCodes = function () {<font></font>
    var dCodes = fg.codecsCodes.rs;<font></font>
    var dCodes2 = fg.codecsCodes2.rs;<font></font>
    return {firstCodes: dCodes, secondCodes: dCodes2};<font></font>
};<font></font>
var {firstCodes, secondCodes} = newCodes()<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没错。</font></font><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从左到右进行逻辑处理并返回最后一个值。</font></font></p>

<pre><code>function foo(){<font></font>
    return 1,2,3;<font></font>
}<font></font>
<font></font>
&gt;&gt; foo()<font></font>
&gt;&gt; 3<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用“对象”   </font></font></p>

<pre><code>function newCodes(){<font></font>
    var obj= new Object();<font></font>
    obj.dCodes = fg.codecsCodes.rs;<font></font>
    obj.dCodes2 = fg.codecsCodes2.rs;<font></font>
<font></font>
    return obj;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JS中，我们可以轻松地返回带有数组或对象的元组，但是不要忘记！</font><font style="vertical-align: inherit;">=&gt; JS是一种</font></font><code>callback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面向语言，这里有一个关于“返回多个值”的秘密，现在还没有人提及，请尝试以下方法：</font></font></p>

<pre><code>var newCodes = function() {  <font></font>
    var dCodes = fg.codecsCodes.rs;<font></font>
    var dCodes2 = fg.codecsCodes2.rs;<font></font>
    return dCodes, dCodes2;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变成</font></font></p>

<pre><code>var newCodes = function(fg, cb) {  <font></font>
    var dCodes = fg.codecsCodes.rs;<font></font>
    var dCodes2 = fg.codecsCodes2.rs;<font></font>
    cb(null, dCodes, dCodes2);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">这仅仅是解决问题的另一种方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猿阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从Javascript 1.7开始使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“解构分配”进行此操作</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，这些在较旧的Javascript版本中不可用（意味着-ECMAScript 3rd和5th版本均不提供）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许您同时分配1个以上变量：</font></font></p>

<pre><code>var [x, y] = [1, 2];<font></font>
x; // 1<font></font>
y; // 2<font></font>
<font></font>
// or<font></font>
<font></font>
[x, y] = (function(){ return [3, 4]; })();<font></font>
x; // 3<font></font>
y; // 4<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font></font><a href="http://2ality.com/2014/06/es6-multiple-return-values.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="http://2ality.com/2014/06/es6-multiple-return-values.html" rel="noreferrer"><font style="vertical-align: inherit;">对象分解和属性值速记</font></a><font style="vertical-align: inherit;">来命名对象中的返回值，并选择所需的值：</font></font></p>

<pre><code>let {baz, foo} = (function(){ return {foo: 3, bar: 500, baz: 40} })();<font></font>
baz; // 40<font></font>
foo; // 3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，不要被ECMAScript允许您这样做的事实所迷惑</font></font><code>return 1, 2, ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">真正发生的事情似乎并不存在。</font><font style="vertical-align: inherit;">在return语句表达- </font></font><code>1, 2, 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-不过是一个逗号操作符适用于数字文本（</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）顺序，最终计算结果为它的最后一个表达式的值- </font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就是为什么</font></font><code>return 1, 2, 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在功能上完全相同</font></font><code>return 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>return 1, 2, 3;<font></font>
// becomes<font></font>
return 2, 3;<font></font>
// becomes<font></font>
return 3;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需返回一个对象文字 </font></font></p>

<pre><code>function newCodes(){<font></font>
    var dCodes = fg.codecsCodes.rs; // Linked ICDs  <font></font>
    var dCodes2 = fg.codecsCodes2.rs; //Linked CPTs       <font></font>
    return {<font></font>
        dCodes: dCodes, <font></font>
        dCodes2: dCodes2<font></font>
    };  <font></font>
}<font></font>
<font></font>
<font></font>
var result = newCodes();<font></font>
alert(result.dCodes);<font></font>
alert(result.dCodes2);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ES6开始，您可以执行此操作</font></font></p>

<pre><code>let newCodes = function() {  <font></font>
    const dCodes = fg.codecsCodes.rs<font></font>
    const dCodes2 = fg.codecsCodes2.rs<font></font>
    return {dCodes, dCodes2}<font></font>
};<font></font>
<font></font>
let {dCodes, dCodes2} = newCodes()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回表达式</font></font><code>{dCodes, dCodes2}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性值的简写</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且等效于this </font></font><code>{dCodes: dCodes, dCodes2: dCodes2}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一行的这种分配称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象破坏分配</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它提取对象的属性值，并将其分配给相同名称的变量。</font><font style="vertical-align: inherit;">如果您想将返回值分配给不同名称的变量，则可以这样做</font></font><code>let {dCodes: x, dCodes2: y} = newCodes()</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是</font></font></p>

<pre><code>function a(){<font></font>
     var d=2;<font></font>
     var c=3;<font></font>
     var f=4;<font></font>
     return {d:d,c:c,f:f}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用</font></font></p>

<pre><code>a().f
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回4</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，您可以使用此代码</font></font></p>

<pre><code>function a(){<font></font>
      var d=2;<font></font>
      var c=3;<font></font>
      var f=4;<font></font>
      return {d,c,f}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村西里Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否，但是您可以返回一个包含您的值的数组：</font></font></p>

<pre><code>function getValues() {<font></font>
    return [getFirstValue(), getSecondValue()];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以像这样访问它们：</font></font></p>

<pre><code>var values = getValues();<font></font>
var first = values[0];<font></font>
var second = values[1];<font></font>
</code></pre>

<p>With the latest <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noreferrer">ECMAScript 6 syntax</a>*, you can also destructure the return value more intuitively:</p>

<pre><code>const [first, second] = getValues();
</code></pre>

<p>If you want to put "labels" on each of the returned values (easier to maintain), you can return an object:</p>

<pre><code>function getValues() {<font></font>
    return {<font></font>
        first: getFirstValue(),<font></font>
        second: getSecondValue(),<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p>And to access them:</p>

<pre><code>var values = getValues();<font></font>
var first = values.first;<font></font>
var second = values.second;<font></font>
</code></pre>

<p>Or with ES6 syntax:</p>

<pre><code>const {first, second} = getValues();
</code></pre>

<p><sup>* See <a href="https://kangax.github.io/compat-table/es6/" rel="noreferrer">this table</a> for browser compatibility. Basically, all modern browsers aside from IE support this syntax, but you can compile ES6 code down to IE-compatible JavaScript at build time with tools like <a href="https://babeljs.io/" rel="noreferrer">Babel</a>.</sup></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
