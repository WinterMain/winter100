---
layout: question
title:  设置JavaScript函数的默认参数值
date:   2020-03-09T09:58:08.000Z
description: 我希望JavaScript函数具有我设置了默认值的可选参数，如果未定义值，则使用该参数（如果传递值，则将其忽略）。在Ruby中，您可以这样操作：def...
img: 
author: Itachi凯
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望JavaScript函数具有我设置了默认值的可选参数，如果未定义值，则使用该参数（如果传递值，则将其忽略）。</font><font style="vertical-align: inherit;">在Ruby中，您可以这样操作：</font></font></p>

<pre><code>def read_file(file, delete_after = false)<font></font>
  # code<font></font>
end<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在JavaScript中有效吗？</font></font></p>

<pre><code>function read_file(file, delete_after = false) {<font></font>
  // Code<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Yes, This will work in Javascript. You can also do that:</p>

<pre><code>function func(a=10,b=20)<font></font>
{<font></font>
    alert (a+' and '+b);<font></font>
}<font></font>
<font></font>
func(); // Result: 10 and 20<font></font>
<font></font>
func(12); // Result: 12 and 20<font></font>
<font></font>
func(22,25); // Result: 22 and 25<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are using <code>ES6+</code> you can set default parameters in the following manner:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function test (foo = 1, bar = 2) {<font></font>
  console.log(foo, bar);<font></font>
}<font></font>
<font></font>
test(5); // foo gets overwritten, bar remains default parameter</code></pre>
</div>
</div>
<p></p>

<p>If you need <code>ES5</code> syntax you can do it in the following manner:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function test(foo, bar) {<font></font>
  foo = foo || 2;<font></font>
  bar = bar || 0;<font></font>
  <font></font>
  console.log(foo, bar);<font></font>
}<font></font>
<font></font>
test(5); // foo gets overwritten, bar remains default parameter</code></pre>
</div>
</div>
<p></p>

<p>In the above syntax the <code>OR</code> operator is used. The <code>OR</code> operator always returns the first value if this can be converted to <code>true</code> if not it returns the righthandside value. When the function is called with no corresponding argument the parameter variable (<code>bar</code> in  our example) is set to <code>undefined</code> by the JS engine. <code>undefined</code> Is then converted to false and thus does the <code>OR</code> operator return the value 0.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用最新</font></font><strong><code>ECMA6</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，</font><font style="vertical-align: inherit;">请使用此命令</font><font style="vertical-align: inherit;">：                      </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function myFunction(someValue = "This is DEFAULT!") {<font></font>
  console.log("someValue --&gt; ", someValue);<font></font>
}<font></font>
<font></font>
myFunction("Not A default value") // calling the function without default value<font></font>
myFunction()  // calling the function with default value</code></pre>
</div>
</div>
                                    <p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它被称为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters" rel="nofollow noreferrer"><code>default function parameters</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果未传递值或未定义，则允许使用默认值初始化形式参数。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：它不适用于Internet Explorer或更旧的浏览器。               </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了获得最大的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容性，请</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令：                       </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function myFunction(someValue) {<font></font>
  someValue = (someValue === undefined) ? "This is DEFAULT!" : someValue;<font></font>
  console.log("someValue --&gt; ", someValue);<font></font>
}<font></font>
<font></font>
myFunction("Not A default value") // calling the function without default value<font></font>
myFunction()  // calling the function with default value</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个函数的行为完全相同，因为每个示例都依赖于这样一个事实，即</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在调用该函数时如果未传递任何参数值</font><font style="vertical-align: inherit;">，则参数变量将为</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照语法 </font></font></p>

<pre><code>function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {<font></font>
   statements<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以定义形式参数的默认值。</font><font style="vertical-align: inherit;">并使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">typeof</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">检查未定义的值</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Tony泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为更新...使用ECMAScript 6，您可以</font><font style="vertical-align: inherit;">像下面这样在函数参数声明中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置默认值：</font></font></p>

<pre><code>function f (x, y = 7, z = 42) {<font></font>
  return x + y + z<font></font>
}<font></font>
<font></font>
f(1) === 50<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如参考</font></font><a href="http://es6-features.org/#DefaultParameterValues" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-http://es6-features.org/#DefaultParameterValues</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Default Parameter Values</strong></p>

<p>With ES6, you can do perhaps one of the most common idioms in <code>JavaScript</code> relates to setting a default  value for a function parameter. The way we’ve done this for years should look quite  familiar:</p>

<pre><code>function foo(x,y) {<font></font>
 x = x || 11;<font></font>
 y = y || 31;<font></font>
 console.log( x + y );<font></font>
}<font></font>
foo(); // 42<font></font>
foo( 5, 6 ); // 11<font></font>
foo( 5 ); // 36<font></font>
foo( null, 6 ); // 17<font></font>
</code></pre>

<p>This pattern is most used, but is dangerous when we pass values like </p>

<pre><code>foo(0, 42)<font></font>
foo( 0, 42 ); // 53 &lt;-- Oops, not 42<font></font>
</code></pre>

<p>Why? Because the <code>0 is falsy</code>, and so the <code>x || 11 results in 11</code>, not the directly passed  in 0. To fix this gotcha, some people will instead write the check more verbosely like this:</p>

<pre><code>function foo(x,y) {<font></font>
 x = (x !== undefined) ? x : 11;<font></font>
 y = (y !== undefined) ? y : 31;<font></font>
 console.log( x + y );<font></font>
}<font></font>
foo( 0, 42 ); // 42<font></font>
foo( undefined, 6 ); // 17<font></font>
</code></pre>

<p>we can now examine a nice helpful syntax added as of <code>ES6</code> to  streamline the assignment of default values to missing arguments:</p>

<pre><code>function foo(x = 11, y = 31) {<font></font>
 console.log( x + y );<font></font>
}<font></font>
<font></font>
foo(); // 42<font></font>
foo( 5, 6 ); // 11<font></font>
foo( 0, 42 ); // 42<font></font>
foo( 5 ); // 36<font></font>
foo( 5, undefined ); // 36 &lt;-- `undefined` is missing<font></font>
foo( 5, null ); // 5 &lt;-- null coerces to `0`<font></font>
foo( undefined, 6 ); // 17 &lt;-- `undefined` is missing<font></font>
foo( null, 6 ); // 6 &lt;-- null coerces to `0`<font></font>
</code></pre>

<p><code>x = 11</code> in a function declaration is more like <code>x !== undefined ? x : 11</code> than the  much more common idiom <code>x || 11</code></p>

<p><strong>Default Value Expressions</strong></p>

<p><code>Function</code> default values can be more than just simple values like 31; they can be any  valid expression, even a <code>function call</code>:</p>

<pre><code>function bar(val) {<font></font>
 console.log( "bar called!" );<font></font>
 return y + val;<font></font>
}<font></font>
function foo(x = y + 3, z = bar( x )) {<font></font>
 console.log( x, z );<font></font>
}<font></font>
var y = 5;<font></font>
foo(); // "bar called"<font></font>
 // 8 13<font></font>
foo( 10 ); // "bar called"<font></font>
 // 10 15<font></font>
y = 6;<font></font>
foo( undefined, 10 ); // 9 10<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，默认值表达式是延迟计算的，这意味着它们仅在需要时以及在需要时才运行，也就是说，当参数的自变量被省略或未定义时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认值表达式甚至可以是内联函数表达式调用-通常称为立即调用函数表达式</font></font><code>(IIFE)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function foo( x =<font></font>
 (function(v){ return v + 11; })( 31 )<font></font>
) {<font></font>
 console.log( x );<font></font>
}<font></font>
foo(); // 42<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用未定义的显式比较即可。</font></font></p>

<pre><code>function read_file(file, delete_after)<font></font>
{<font></font>
    if(delete_after === undefined) { delete_after = false; }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案适用于js：</font></font></p>

<pre><code>function read_file(file, delete_after) {<font></font>
    delete_after = delete_after || false;<font></font>
    // Code<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 6中，您实际上将能够准确地写出您拥有的东西：</font></font></p>

<pre><code>function read_file(file, delete_after = false) {<font></font>
  // Code<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在或，</font><font style="vertical-align: inherit;">它将设置</font></font><code>delete_after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您现在可以将诸如</font><a href="http://babeljs.io/" rel="noreferrer"><font style="vertical-align: inherit;">Babel</font></a><font style="vertical-align: inherit;">这样的编译器与ES6功能一起使用</font><font style="vertical-align: inherit;">。</font></font><code>false</code><font style="vertical-align: inherit;"></font><code>undefined</code><font style="vertical-align: inherit;"></font><a href="http://babeljs.io/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参见MDN文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function read_file(file, delete_after) {<font></font>
    delete_after = delete_after || "my default here";<font></font>
    //rest of code<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就赋予</font></font><code>delete_after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的价值</font></font><code>delete_after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果它不是一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">falsey</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，否则将字符串</font></font><code>"my default here"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关更多详细信息，请查看</font></font><a href="http://crockford.com/javascript/survey.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Doug Crockford对语言的调查，并查看关于“运算符”的部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你想在一个通过这种方法行不通</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">falsey</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值即</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您需要</font><font style="vertical-align: inherit;">传递</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，则需要使用</font></font><a href="https://stackoverflow.com/questions/894860/how-do-i-make-a-default-value-for-a-parameter-to-a-javascript-function/894877#894877"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tom Ritter的answer中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当处理一个函数的许多参数时，让使用者在一个对象中传递参数参数，然后</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些值与一个包含该函数默认值的对象</font><em><font style="vertical-align: inherit;">合并</font></em><font style="vertical-align: inherit;">通常是有用</font><font style="vertical-align: inherit;">的</font></font></p>

<pre><code>function read_file(values) {<font></font>
    values = merge({ <font></font>
        delete_after : "my default here"<font></font>
    }, values || {});<font></font>
<font></font>
    // rest of code<font></font>
}<font></font>
<font></font>
// simple implementation based on $.extend() from jQuery<font></font>
function merge() {<font></font>
    var obj, name, copy,<font></font>
        target = arguments[0] || {},<font></font>
        i = 1,<font></font>
        length = arguments.length;<font></font>
<font></font>
    for (; i &lt; length; i++) {<font></font>
        if ((obj = arguments[i]) != null) {<font></font>
            for (name in obj) {<font></font>
                copy = obj[name];<font></font>
<font></font>
                if (target === copy) {<font></font>
                    continue;<font></font>
                }<font></font>
                else if (copy !== undefined) {<font></font>
                    target[name] = copy;<font></font>
                }<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return target;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font></p>

<pre><code>// will use the default delete_after value<font></font>
read_file({ file: "my file" }); <font></font>
<font></font>
// will override default delete_after value<font></font>
read_file({ file: "my file", delete_after: "my value" }); <font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
