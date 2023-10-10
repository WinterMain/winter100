---
layout: question
title:  JavaScript call（）和apply（）与bind（）？
date:   2020-03-11T02:32:49.000Z
description: 我已经知道了，apply并且call是类似的函数集this（函数的上下文）。区别在于我们发送参数的方式（手动vs数组）题：但是什么时候应该使用...
img: 
author: 阿飞前端
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经知道了，</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是类似的函数集</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（函数的上下文）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于我们发送参数的方式（手动vs数组）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是什么时候应该使用该   </font></font><code>bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法？</font></font></p>

<pre><code>var obj = {<font></font>
  x: 81,<font></font>
  getX: function() {<font></font>
    return this.x;<font></font>
  }<font></font>
};<font></font>
<font></font>
alert(obj.getX.bind(obj)());<font></font>
alert(obj.getX.call(obj));<font></font>
alert(obj.getX.apply(obj));<font></font>
</code></pre>

<p><a href="http://jsbin.com/awewof/1/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsbin</font></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I think the same places of them are: all of them can change the this value of a function.The differences of them are: the bind function will return a new function as a result; the call and apply methods will execute the function immediately, but apply can accept a array as params,and it will parse the array separated.And also, the bind function can be Currying.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">call（）：-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   这里我们单独传递函数参数，而不是以数组格式传递</font></font></p>

<pre><code>var obj = {name: "Raushan"};<font></font>
<font></font>
var greeting = function(a,b,c) {<font></font>
    return "Welcome "+ this.name + " to "+ a + " " + b + " in " + c;<font></font>
};<font></font>
<font></font>
console.log(greeting.call(obj, "USA", "INDIA", "ASIA"));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apply（）：-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   这里我们以数组格式传递函数参数</font></font></p>

<pre><code>var obj = {name: "Raushan"};<font></font>
<font></font>
var cal = function(a,b,c) {<font></font>
    return this.name +" you got " + a+b+c;<font></font>
};<font></font>
<font></font>
var arr =[1,2,3];  // array format for function arguments<font></font>
console.log(cal.apply(obj, arr)); <font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bind（）：-</font></font></strong>   </p>

<pre><code>       var obj = {name: "Raushan"};<font></font>
<font></font>
       var cal = function(a,b,c) {<font></font>
            return this.name +" you got " + a+b+c;<font></font>
       };<font></font>
<font></font>
       var calc = cal.bind(obj);<font></font>
       console.log(calc(2,3,4));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想象一下，绑定不可用。</font><font style="vertical-align: inherit;">您可以轻松地将其构造如下：</font></font></p>

<pre><code>var someFunction=...<font></font>
var objToBind=....<font></font>
<font></font>
var bindHelper =  function (someFunction, objToBind) {<font></font>
    return function() {<font></font>
        someFunction.apply( objToBind, arguments );<font></font>
    };  <font></font>
}<font></font>
<font></font>
bindHelper(arguments);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：它将功能与提供的值和上下文绑定，但不执行该功能。</font><font style="vertical-align: inherit;">要执行功能，您需要调用该功能。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">call</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用提供的上下文和参数执行函数。</font></font></p>

<p><strong>apply</strong>: It executes the function with provided context and 
<strong>parameter as array</strong>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用/应用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即执行功能：</font></font></p>

<pre><code>func.call(context, arguments);<font></font>
func.apply(context, [argument1,argument2,..]);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会立即执行功能，但会返回包装的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能（以供以后执行）：</font></font></p>

<pre><code>function bind(func, context) {<font></font>
    return function() {<font></font>
        return func.apply(context, arguments);<font></font>
    };<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is one <a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" rel="noreferrer">good article</a> to illustrate the difference among <code>bind()</code>, <code>apply()</code> and <code>call()</code>, summarize it as below.</p>

<ul>
<li><p><code>bind()</code> allows us to easily set which specific object will be bound to <em>this</em> when a function or method is invoked.</p>

<pre><code>// This data variable is a global variable​<font></font>
var data = [<font></font>
    {name:"Samantha", age:12},<font></font>
    {name:"Alexis", age:14}<font></font>
]<font></font>
var user = {<font></font>
    // local data variable​<font></font>
    data    :[<font></font>
        {name:"T. Woods", age:37},<font></font>
        {name:"P. Mickelson", age:43}<font></font>
    ],<font></font>
    showData:function (event) {<font></font>
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​<font></font>
        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);<font></font>
    }<font></font>
}<font></font>
<font></font>
// Assign the showData method of the user object to a variable​<font></font>
var showDataVar = user.showData;<font></font>
showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​<font></font>
/*<font></font>
This happens because showDataVar () is executed as a global function and use of this inside <font></font>
showDataVar () is bound to the global scope, which is the window object in browsers.<font></font>
*/<font></font>
<font></font>
// Bind the showData method to the user object​<font></font>
var showDataVar = user.showData.bind (user);<font></font>
// Now the we get the value from the user object because the this keyword is bound to the user object​<font></font>
showDataVar (); // P. Mickelson 43​<font></font>
</code></pre></li>
<li><p><code>bind()</code> allow us to borrow methods</p>

<pre><code>// Here we have a cars object that does not have a method to print its data to the console​<font></font>
var cars = {<font></font>
    data:[<font></font>
       {name:"Honda Accord", age:14},<font></font>
       {name:"Tesla Model S", age:2}<font></font>
   ]<font></font>
}<font></font>
<font></font>
// We can borrow the showData () method from the user object we defined in the last example.​<font></font>
// Here we bind the user.showData method to the cars object we just created.​<font></font>
cars.showData = user.showData.bind (cars);<font></font>
cars.showData (); // Honda Accord 14​<font></font>
</code></pre>

<p>One problem with this example is that we are adding a new method <code>showData</code> on the <code>cars</code> object and 
we might not want to do that just to borrow a method because the cars object might already have a property or method name <code>showData</code>.
We don’t want to overwrite it accidentally. As we will see in our discussion of <code>Apply</code> and <code>Call</code> below, 
it is best to borrow a method using either the <code>Apply</code> or <code>Call</code> method.</p></li>
<li><p><code>bind()</code> allow us to curry a function</p>

<p><a href="https://en.wikipedia.org/wiki/Currying" rel="noreferrer"><strong>Function Currying</strong></a>, also known as <em>partial function application</em>, is the use of a
function (that accept one or more arguments) that returns a new function with some of the arguments already set. </p>

<pre><code>function greet (gender, age, name) {<font></font>
    // if a male, use Mr., else use Ms.​<font></font>
    var salutation = gender === "male" ? "Mr. " : "Ms. ";<font></font>
    if (age &gt; 25) {<font></font>
        return "Hello, " + salutation + name + ".";<font></font>
    }else {<font></font>
        return "Hey, " + name + ".";<font></font>
    }<font></font>
 }<font></font>
</code></pre>

<p>We can use <code>bind()</code> to curry this <code>greet</code> function</p>

<pre><code>// So we are passing null because we are not using the "this" keyword in our greet function.<font></font>
var greetAnAdultMale = greet.bind (null, "male", 45);<font></font>
<font></font>
greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."<font></font>
<font></font>
var greetAYoungster = greet.bind (null, "", 16);<font></font>
greetAYoungster ("Alex"); // "Hey, Alex."​<font></font>
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."<font></font>
</code></pre></li>
<li><p><code>apply()</code> or <code>call()</code> to set <em>this</em> value</p>

<p>The <code>apply</code>, <code>call</code>, and <code>bind</code> methods are all used to set the this value when invoking a method, and they do it in slightly
different ways to allow use direct control and versatility in our JavaScript code. </p>

<p>The <code>apply</code> and <code>call</code> methods are almost identical when setting the this value except that you pass the function parameters to <code>apply ()</code> as <em>an array</em>, while you have to <em>list the parameters individually</em> to pass them to the <code>call ()</code> method. </p>

<p>Here is one example to use <code>call</code> or <code>apply</code> to set <em>this</em> in the callback function.</p>

<pre><code>// Define an object with some properties and a method​<font></font>
// We will later pass the method as a callback function to another function​<font></font>
var clientData = {<font></font>
    id: 094545,<font></font>
    fullName: "Not Set",<font></font>
    // setUserName is a method on the clientData object​<font></font>
    setUserName: function (firstName, lastName)  {<font></font>
        // this refers to the fullName property in this object​<font></font>
        this.fullName = firstName + " " + lastName;<font></font>
    }<font></font>
};<font></font>
<font></font>
function getUserInput (firstName, lastName, callback, callbackObj) {<font></font>
     // The use of the Apply method below will set the "this" value to callbackObj​<font></font>
     callback.apply (callbackObj, [firstName, lastName]);<font></font>
}<font></font>
<font></font>
// The clientData object will be used by the Apply method to set the "this" value​<font></font>
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);<font></font>
// the fullName property on the clientData was correctly set​<font></font>
console.log (clientData.fullName); // Barack Obama<font></font>
</code></pre></li>
<li><p>Borrow functions with <code>apply</code> or <code>call</code></p>

<ul>
<li><p>Borrow Array methods</p>

<p>Let’s create an <code>array-like</code> object and borrow some array methods to operate on the our array-like object.</p>

<pre><code>// An array-like object: note the non-negative integers used as keys​<font></font>
var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };<font></font>
<font></font>
 // Make a quick copy and save the results in a real array:<font></font>
 // First parameter sets the "this" value​<font></font>
 var newArray = Array.prototype.slice.call (anArrayLikeObj, 0);<font></font>
 console.log (newArray); // ["Martin", 78, 67, Array[3]]​<font></font>
<font></font>
 // Search for "Martin" in the array-like object​<font></font>
 console.log (Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true​<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个常见情况是</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下</font><font style="vertical-align: inherit;">转换</font><font style="vertical-align: inherit;">为数组</font></font></p>

<pre><code>  // We do not define the function with any parameters, yet we can get all the arguments passed to it​<font></font>
 function doSomething () {<font></font>
    var args = Array.prototype.slice.call (arguments);<font></font>
    console.log (args);<font></font>
 }<font></font>
<font></font>
 doSomething ("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">借用其他方法</font></font></p>

<pre><code>var gameController = {<font></font>
     scores  :[20, 34, 55, 46, 77],<font></font>
     avgScore:null,<font></font>
     players :[<font></font>
          {name:"Tommy", playerID:987, age:23},<font></font>
          {name:"Pau", playerID:87, age:33}<font></font>
     ]<font></font>
 }<font></font>
 var appController = {<font></font>
     scores  :[900, 845, 809, 950],<font></font>
     avgScore:null,<font></font>
     avg     :function () {<font></font>
             var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {<font></font>
                  return prev + cur;<font></font>
         });<font></font>
         this.avgScore = sumOfScores / this.scores.length;<font></font>
     }<font></font>
   }<font></font>
   // Note that we are using the apply () method, so the 2nd argument has to be an array​<font></font>
   appController.avg.apply (gameController);<font></font>
   console.log (gameController.avgScore); // 46.4​<font></font>
   // appController.avgScore is still null; it was not updated, only gameController.avgScore was updated​<font></font>
   console.log (appController.avgScore); // null​<font></font>
</code></pre></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>apply()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变元数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" rel="noreferrer"><code>Math.max</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可变对数函数的一个示例，</font></font></p>

<pre><code>// We can pass any number of arguments to the Math.max () method​<font></font>
console.log (Math.max (23, 11, 34, 56)); // 56<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我们要传递一组数字</font></font><code>Math.max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么办？</font><font style="vertical-align: inherit;">我们不能这样做：</font></font></p>

<pre><code>var allNumbers = [23, 11, 34, 56];<font></font>
// We cannot pass an array of numbers to the the Math.max method like this​<font></font>
console.log (Math.max (allNumbers)); // NaN<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是该</font></font><code>apply ()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法帮助我们执行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变函数的地方</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">代替上面的方法，我们必须使用</font></font><code>apply (</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">传递数字数组</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var allNumbers = [23, 11, 34, 56];<font></font>
// Using the apply () method, we can pass the array of numbers:<font></font>
console.log (Math.max.apply (null, allNumbers)); // 56<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许设置值，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而与调用函数的方式无关。</font><font style="vertical-align: inherit;">这在使用回调时非常有用：</font></font></p>

<pre><code>  function sayHello(){<font></font>
    alert(this.message);<font></font>
  }<font></font>
<font></font>
  var obj = {<font></font>
     message : "hello"<font></font>
  };<font></font>
  setTimeout(sayHello.bind(obj), 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获得相同的结果，</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将如下所示：</font></font></p>

<pre><code>  function sayHello(){<font></font>
    alert(this.message);<font></font>
  }<font></font>
<font></font>
  var obj = {<font></font>
     message : "hello"<font></font>
  };<font></font>
  setTimeout(function(){sayHello.call(obj)}, 1000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有</font></font><code>multiplication</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></p>

<pre><code>function multiplication(a,b){<font></font>
console.log(a*b);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们使用创建一些标准函数 </font></font><code>bind</code></p>

<p><code>var multiby2 = multiplication.bind(this,2);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在multiby2（b）等于乘法（2，b）;</font></font></p>

<pre><code>multiby2(3); //6<font></font>
multiby2(4); //8<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我在绑定中传递了两个参数怎么办</font></font></p>

<pre><code>var getSixAlways = multiplication.bind(this,3,2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在getSixAlways（）等于乘法（3,2）;</font></font></p>

<pre><code>getSixAlways();//6
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至传递参数返回6；
   </font></font><code>getSixAlways(12); //6</code> </p>

<pre><code>var magicMultiplication = multiplication.bind(this);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将创建一个新的乘法函数，并将其分配给magicMultiplication。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，不，我们将乘法功能隐藏在magicMultiplication中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用
 </font></font><code>magicMultiplication</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回空白</font></font><code>function b()</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行时效果很好
</font></font><code>magicMultiplication(6,5); //30</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打电话和申请怎么样？</font></font></p>

<p><code>magicMultiplication.call(this,3,2); //6</code></p>

<p><code>magicMultiplication.apply(this,[5,2]); //10</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建函数</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行函数，而</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望数组中的参数</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们都重视</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为功能（或对象）不同的是在函数调用（见下文）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呼叫</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重视</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为功能和立即执行的功能：</font></font></p>

<pre><code>var person = {  <font></font>
  name: "James Smith",<font></font>
  hello: function(thing) {<font></font>
    console.log(this.name + " says hello " + thing);<font></font>
  }<font></font>
}<font></font>
<font></font>
person.hello("world");  // output: "James Smith says hello world"<font></font>
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入功能和它需要被这样分开调用：</font></font></p>

<pre><code>var person = {  <font></font>
  name: "James Smith",<font></font>
  hello: function(thing) {<font></font>
    console.log(this.name + " says hello " + thing);<font></font>
  }<font></font>
}<font></font>
<font></font>
person.hello("world");  // output: "James Smith says hello world"<font></font>
var helloFunc = person.hello.bind({ name: "Jim Smith" });<font></font>
helloFunc("world");  // output: Jim Smith says hello world"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或像这样：</font></font></p>

<pre><code>...    <font></font>
var helloFunc = person.hello.bind({ name: "Jim Smith" }, "world");<font></font>
helloFunc();  // output: Jim Smith says hello world"<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apply</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">call，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同之处在于</font><strong><font style="vertical-align: inherit;">apply</font></strong><font style="vertical-align: inherit;">接受一个类似数组的对象，而不是一次列出一个参数：</font></font></p>

<pre><code>function personContainer() {<font></font>
  var person = {  <font></font>
     name: "James Smith",<font></font>
     hello: function() {<font></font>
       console.log(this.name + " says hello " + arguments[1]);<font></font>
     }<font></font>
  }<font></font>
  person.hello.apply(person, arguments);<font></font>
}<font></font>
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"                                     <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在函数对象，函数调用</font></font><code>call/apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前一阵子</font><font style="vertical-align: inherit;">之间创建了这种比较</font><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/WHlX0.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/WHlX0.jpg" alt="在此处输入图片说明"></a></p>

<p><code>.bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许您设置的</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时允许执行的功能</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在未来</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它返回一个新的函数对象。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
