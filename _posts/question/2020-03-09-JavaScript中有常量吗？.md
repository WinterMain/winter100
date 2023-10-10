---
layout: question
title:  JavaScript中有常量吗？
date:   2020-03-09T15:07:18.000Z
description: 有没有办法在JavaScript中使用常量？如果没有，指定用作常量的变量的常见做法是什么？...
img: 
author: JinJin猪猪
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法在JavaScript中使用常量？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，指定用作常量的变量的常见做法是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字“ const”是较早提出的，现在已正式包含在ES6中。</font><font style="vertical-align: inherit;">通过使用const关键字，您可以传递将用作不可变字符串的值/字符串。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript中已经存在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常量</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以这样定义一个常量：</font></font></p>

<pre><code>const name1 = value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不能通过重新分配而改变。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>Rhino.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工具</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了什么如上所述。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种替代方法是：</font></font></p>

<pre><code>var constants = {<font></font>
      MY_CONSTANT : "myconstant",<font></font>
      SOMETHING_ELSE : 123<font></font>
    }<font></font>
  , constantMap = new function ConstantMap() {};<font></font>
<font></font>
for(var c in constants) {<font></font>
  !function(cKey) {<font></font>
    Object.defineProperty(constantMap, cKey, {<font></font>
      enumerable : true,<font></font>
      get : function(name) { return constants[cKey]; }<font></font>
    })<font></font>
  }(c);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后简单地： </font></font><code>var foo = constantMap.MY_CONSTANT</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您这样做，</font></font><code>constantMap.MY_CONSTANT = "bar"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那将是无效的，因为我们正在尝试将赋值运算符与getter一起使用，因此</font></font><code>constantMap.MY_CONSTANT === "myconstant"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将保持不变。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Harry十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中引入常量充其量只是一种技巧。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中实现持久和可全局访问的值的一种好方法是声明一个带有一些“只读”属性的对象文字，如下所示：</font></font></p>

<pre><code>            my={get constant1(){return "constant 1"},<font></font>
                get constant2(){return "constant 2"},<font></font>
                get constant3(){return "constant 3"},<font></font>
                get constantN(){return "constant N"}<font></font>
                }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会将所有常量归为一个“我的”附件对象，您可以在其中查找存储的值或为此而决定放入其中的任何其他值。</font><font style="vertical-align: inherit;">现在让我们测试一下是否可行：</font></font></p>

<pre><code>           my.constant1; &gt;&gt; "constant 1" <font></font>
           my.constant1 = "new constant 1";<font></font>
           my.constant1; &gt;&gt; "constant 1" <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如我们所见，“ my.constant1”属性保留了其原始值。</font><font style="vertical-align: inherit;">您已经为自己设置了一些不错的“绿色”临时常量...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当然，这只能防止您通过直接访问意外地修改，更改，无效或清空属性常量值，如给定示例所示。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则我仍然认为常量是假的。</font><font style="vertical-align: inherit;">我仍然认为，将自己的巨大自由换成一小部分欺骗性安全保障是最糟糕的交易。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript ES6（重新）引入了</font><a href="http://caniuse.com/#feat=const" rel="nofollow"><font style="vertical-align: inherit;">所有主流浏览器</font></a><font style="vertical-align: inherit;">都支持</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const" rel="nofollow"><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://caniuse.com/#feat=const" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过声明的变量</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法重新声明或重新分配。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，其</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为类似于</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let" rel="nofollow"><code>let</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于原始数据类型（布尔，空，未定义，数字，字符串，符号），它的行为符合预期：</font></font></p>

<pre><code>const x = 1;<font></font>
x = 2;<font></font>
console.log(x); // 1 ...as expected, re-assigning fails<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意有关对象的陷阱：</font></font></p>

<pre><code>const o = {x: 1};<font></font>
o = {x: 2};<font></font>
console.log(o); // {x: 1} ...as expected, re-assigning fails<font></font>
<font></font>
o.x = 2;<font></font>
console.log(o); // {x: 2} !!! const does not make objects immutable!<font></font>
<font></font>
const a = [];<font></font>
a = [1];<font></font>
console.log(a); // 1 ...as expected, re-assigning fails<font></font>
<font></font>
a.push(1);<font></font>
console.log(a); // [1] !!! const does not make objects immutable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实需要一个不变且绝对恒定的对象：只需使用</font></font><code>const ALL_CAPS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可使您的意图清楚。</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何</font><font style="vertical-align: inherit;">都要遵循所有</font><font style="vertical-align: inherit;">声明</font><font style="vertical-align: inherit;">是一个好习惯</font><font style="vertical-align: inherit;">，因此请仅依赖它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Jim路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，我的实践是尽可能避免使用常量，而改用字符串。</font><font style="vertical-align: inherit;">当您想将常量公开给外界时，会出现常量问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，可以实现以下Date API：</font></font></p>

<pre><code>date.add(5, MyModule.Date.DAY).add(12, MyModule.Date.HOUR)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是简单地写起来要短得多，更自然：</font></font></p>

<pre><code>date.add(5, "days").add(12, "hours")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，“天”和“小时”实际上就像常量，因为您无法从外部更改“小时”表示多少秒。</font><font style="vertical-align: inherit;">但是很容易覆盖</font></font><code>MyModule.Date.HOUR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法也将有助于调试。</font><font style="vertical-align: inherit;">如果Firebug告诉您</font></font><code>action === 18</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，很难理解其含义，但是当您看到时，</font></font><code>action === "save"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">便会立即清楚。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在Greasemonkey脚本中</font><font style="vertical-align: inherit;">使用</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是，因为它们只能在Firefox上运行... </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
名称约定也确实是可行的方式（我俩都做！）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的意见（仅适用于对象）。</font></font></p>

<pre><code>var constants = (function(){<font></font>
  var a = 9;<font></font>
<font></font>
  //GLOBAL CONSTANT (through "return")<font></font>
  window.__defineGetter__("GCONST", function(){<font></font>
    return a;<font></font>
  });<font></font>
<font></font>
  //LOCAL CONSTANT<font></font>
  return {<font></font>
    get CONST(){<font></font>
      return a;<font></font>
    }<font></font>
  }<font></font>
})();<font></font>
<font></font>
constants.CONST = 8; //9<font></font>
alert(constants.CONST); //9<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试！</font><font style="vertical-align: inherit;">但是请理解-这是对象，而不是简单的变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以尝试：</font></font></p>

<pre><code>const a = 9;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忘记IE并使用</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不介意使用函数：</font></font></p>

<pre><code>var constant = function(val) {<font></font>
   return function() {<font></font>
        return val;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法为您提供函数而不是常规变量，但可以保证</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置值后，任何人都无法更改。</font></font></p>

<pre><code>a = constant(10);<font></font>
<font></font>
a(); // 10<font></font>
<font></font>
b = constant(20);<font></font>
<font></font>
b(); // 20<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人觉得这很令人愉快，特别是在从可观察的观测器适应了这种模式之后。</font></font></p>

<p><sup><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*除非有人</font></font><code>constant</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您调用它之前</font><font style="vertical-align: inherit;">重新定义了该函数</font></font></sub></sup></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，不是一般。</font><font style="vertical-align: inherit;">Firefox实现了，</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我知道IE没有。</font></font></p>

<hr>

<p><a href="https://stackoverflow.com/questions/130396#130399"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@John</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出了一种在其他语言上已经使用了多年的const的通用命名惯例，我认为没有理由不能使用它。</font><font style="vertical-align: inherit;">当然，这并不意味着某人无论如何也不会覆盖变量的值。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，我的首选是使用函数返回常量值。  </font></font></p>

<pre><code>function MY_CONSTANT() {<font></font>
   return "some-value";<font></font>
}<font></font>
<font></font>
<font></font>
alert(MY_CONSTANT());<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://www.ecma-international.org/ecma-262/6.0/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，JavaScript的概念是</font></font><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations" rel="noreferrer"><code>const</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const MY_CONSTANT = "some-value";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><a href="https://caniuse.com/#search=const" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在</font><a href="https://caniuse.com/#search=const" rel="noreferrer"><font style="vertical-align: inherit;">除IE 8、9和10之外的所有浏览器中使用</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有些可能还需要</font><font style="vertical-align: inherit;">启用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与ALL_CAPS之类的约定一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，以表明如果您需要支持旧版浏览器或正在使用旧版代码，则不应修改某些值：</font></font></p>

<pre><code>var MY_CONSTANT = "some-value";
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Harry十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字是</font></font><a href="http://wiki.ecmascript.org/doku.php?id=harmony:const" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript的第6条草案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但迄今只享受的浏览器支持一知半解：</font></font><a href="http://kangax.github.io/compat-table/es6/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://kangax.github.io/compat-table/es6/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">语法为：</font></font></p>

<pre><code>const CONSTANT_NAME = 0;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
