---
layout: question
title:  将JavaScript函数作为参数传递
date:   2020-03-11T09:40:43.000Z
description: 如何在不执行“父”函数或不使用函数的情况下将函数作为参数传递eval()？（因为我已经读到它是不安全的。）我有这个：addContact(enti...
img: 
author: Harry小宇宙
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在不执行“父”函数或不使用函数的情况下将函数作为参数传递</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">（因为我已经读到它是不安全的。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个：</font></font></p>

<pre><code>addContact(entityId, refreshContactList());
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以工作，但是问题是</font></font><code>refreshContactList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在调用函数时触发，而不是在函数中使用时触发。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我所读的内容，</font><font style="vertical-align: inherit;">我可以使用来解决它</font><font style="vertical-align: inherit;">，但这不是最佳实践。</font><font style="vertical-align: inherit;">如何在JavaScript中将函数作为参数传递？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第773篇《将JavaScript函数作为参数传递》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时候，当您需要处理事件处理程序，因此也需要将事件作为参数传递时，大多数现代库（如react，angular）可能都需要此方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在reactjs上使用一些自定义验证来覆盖OnSubmit函数（来自第三方库的函数），并且我将函数和事件都传递如下</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本来</font></font></p>

<pre><code>    &lt;button className="img-submit" type="button"  onClick=<font></font>
 {onSubmit}&gt;Upload Image&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">制作了新功能，</font></font><code>upload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并以传递</font></font><code>onSubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和事件作为参数进行调用</font></font></p>

<pre><code>&lt;button className="img-submit" type="button"  onClick={this.upload.bind(this,event,onSubmit)}&gt;Upload Image&lt;/button&gt;<font></font>
<font></font>
upload(event,fn){<font></font>
  //custom codes are done here<font></font>
  fn(event);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其实似乎有点复杂，不是。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">get方法作为参数：   </font></font></p>

<pre><code> function JS_method(_callBack) { <font></font>
<font></font>
           _callBack("called");  <font></font>
<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以给定一个参数方法：</font></font></p>

<pre><code>    JS_method(function (d) {<font></font>
           //Finally this will work.<font></font>
           alert(d)<font></font>
    });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">APro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来做同样的事情。</font></font></p>

<pre><code>//A function to call<font></font>
function needToBeCalled(p1, p2)<font></font>
{<font></font>
    alert(p1+"="+p2);<font></font>
}<font></font>
<font></font>
//A function where needToBeCalled passed as an argument with necessary params<font></font>
//Here params is comma separated string<font></font>
function callAnotherFunction(aFunction, params)<font></font>
{<font></font>
    eval(aFunction + "("+params+")");<font></font>
}<font></font>
<font></font>
//A function Call<font></font>
callAnotherFunction("needToBeCalled", "10,20");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而已。</font><font style="vertical-align: inherit;">我也在寻找此解决方案，并尝试了其他答案中提供的解决方案，但最终从上述示例中获得了解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议将参数放入数组中，然后使用</font></font><code>.apply()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">将其拆分</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，现在我们可以轻松地传递带有很多参数的函数，并以简单的方式执行它。</font></font></p>

<pre><code>function addContact(parameters, refreshCallback) {<font></font>
    refreshCallback.apply(this, parameters);<font></font>
}<font></font>
<font></font>
function refreshContactList(int, int, string) {<font></font>
    alert(int + int);<font></font>
    console.log(string);<font></font>
}<font></font>
<font></font>
addContact([1,2,"str"], refreshContactList); //parameters should be putted in an array<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript程序员中有一句话：“评估就是邪恶”，因此，请不惜一切代价避免使用它！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了史蒂夫·芬顿的答案，您还可以直接传递函数。</font></font></p>

<pre><code>function addContact(entity, refreshFn) {<font></font>
    refreshFn();<font></font>
}<font></font>
<font></font>
function callAddContact() {<font></font>
    addContact("entity", function() { DoThis(); });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将函数作为参数传递，只需删除括号！</font></font></p>

<pre><code>function ToBeCalled(){<font></font>
  alert("I was called");<font></font>
}<font></font>
<font></font>
function iNeedParameter( paramFunc) {<font></font>
   //it is a good idea to check if the parameter is actually not null<font></font>
   //and that it is a function<font></font>
   if (paramFunc &amp;&amp; (typeof paramFunc == "function")) {<font></font>
      paramFunc();   <font></font>
   }<font></font>
}<font></font>
<font></font>
//this calls iNeedParameter and sends the other function to it<font></font>
iNeedParameter(ToBeCalled); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其背后的思想是函数与变量非常相似。</font><font style="vertical-align: inherit;">而不是写</font></font></p>

<pre><code>function ToBeCalled() { /* something */ }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你最好写</font></font></p>

<pre><code>var ToBeCalledVariable = function () { /* something */ }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间有细微的差别，但是无论如何-两者都是定义函数的有效方法。</font><font style="vertical-align: inherit;">现在，如果您定义一个函数并将其显式分配给变量，则看起来很合逻辑，您可以将其作为参数传递给另一个函数，并且不需要括号：</font></font></p>

<pre><code>anotherFunction(ToBeCalledVariable);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要传递函数，只需按名称引用而不带括号即可：</font></font></p>

<pre><code>function foo(x) {<font></font>
    alert(x);<font></font>
}<font></font>
function bar(func) {<font></font>
    func("Hello World!");<font></font>
}<font></font>
<font></font>
//alerts "Hello World!"<font></font>
bar(foo);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是有时您可能想传递一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含有参数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的函数</font><font style="vertical-align: inherit;">，但直到调用回调</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">后才调用它。</font><font style="vertical-align: inherit;">为此，在调用它时，只需将其包装在一个匿名函数中，如下所示：</font></font></p>

<pre><code>function foo(x) {<font></font>
   alert(x);<font></font>
}<font></font>
function bar(func) {<font></font>
   func();<font></font>
}<font></font>
<font></font>
//alerts "Hello World!" (from within bar AFTER being passed)<font></font>
bar(function(){ foo("Hello World!") });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果愿意，还可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apply</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，并使用第三个参数，它是参数数组，例如：</font></font></p>

<pre><code>function eat(food1, food2)<font></font>
{<font></font>
    alert("I like to eat " + food1 + " and " + food2 );<font></font>
}<font></font>
function myFunc(callback, args)<font></font>
{<font></font>
    //do stuff<font></font>
    //...<font></font>
    //execute callback when finished<font></font>
    callback.apply(this, args);<font></font>
}<font></font>
<font></font>
//alerts "I like to eat pickles and peanut butter"<font></font>
myFunc(eat, ["pickles", "peanut butter"]); <font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
