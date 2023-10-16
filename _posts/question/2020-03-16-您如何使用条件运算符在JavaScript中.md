---
layout: question
title:  您如何使用？：（条件）运算符在JavaScript中？
date:   2020-03-16T07:14:44.000Z
description: 有人可以简单地向我解释什么是? （有条件的“三元”）运算符，以及如何使用它？...
img: 
author: 猴子乐
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以简单地向我解释什么是</font></font><code>?:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（有条件的“三元”）运算符，以及如何使用它？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1783篇《您如何使用？：（条件）运算符在JavaScript中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅JinJin十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件（三元）运算符是唯一采用三个操作数的JavaScript运算符。</font><font style="vertical-align: inherit;">该运算符通常用作if语句的快捷方式。</font></font></p>
</blockquote>

<pre><code>condition ? expr1 : expr2 
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果条件为true，则运算符返回expr1的值；否则，返回0。</font><font style="vertical-align: inherit;">否则，返回expr2的值。</font></font></p>
</blockquote>

<pre><code>function fact(n) {<font></font>
  if (n &gt; 1) {<font></font>
    return n * fact(n-1);<font></font>
  } else {<font></font>
    return 1;<font></font>
  }<font></font>
  // we can replace the above code in a single line of code as below<font></font>
  //return (n != 1) ? n * fact(n - 1) : 1;<font></font>
}<font></font>
console.log(fact(5));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多说明，请阅读</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档链接</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AItachi</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元表达式在JS中非常有用，尤其是React。</font><font style="vertical-align: inherit;">这是对所提供的许多优质详细信息的简化答案。</font></font></p>

<pre><code>condition ? expressionIfTrue : expressionIfFalse
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想想</font></font><code>expressionIfTrue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为OG if语句呈现真实的; </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
认为是</font></font><code>expressionIfFalse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">else陈述。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var x = 1;<font></font>
(x == 1) ? y=x : y=z;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将检查x的值，如果为true，则返回第一个y =（value），如果为false，则返回第二个冒号：返回y =（value）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿神奇</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以使用Jquery以及length，如下例所示：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有一个具有值的GuarantorName文本框，并且想要获取名字和姓氏-它可能为null。</font><font style="vertical-align: inherit;">所以比</font></font></p>

<pre><code>        var gnamesplit = $("#txtGuarantorName").val().split(" ");<font></font>
        var gLastName = "";<font></font>
        var gFirstName = "";<font></font>
        if(gnamesplit.length &gt; 0 ){<font></font>
           gLastName  = gnamesplit[0];        <font></font>
        }<font></font>
        if(gnamesplit.length &gt; 1 ){<font></font>
           gFirstName = gnamesplit[1];        <font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以将以下代码与带有最少代码的Jquery一起使用
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    <font></font>
<font></font>
    var gnamesplit = $("#txtGuarantorName").val().split(" ");<font></font>
    var gLastName = gnamesplit.length &gt; 0  ? gnamesplit[0] : "";<font></font>
    var gFirstName =  gnamesplit.length &gt; 1  ? gnamesplit[1] : "";<font></font>
    $("#txtLastName").val(gLastName);<font></font>
    $("#txtFirstName").val(gFirstName);<font></font>
    <font></font>
    </code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div &gt;<font></font>
  Guarantor Name: &lt;input type="text" id="txtGuarantorName" value="ASP.NET Core"  /&gt;&lt;br/&gt;<font></font>
  &lt;br/&gt;<font></font>
  &lt;br/&gt;<font></font>
  <font></font>
  First Name: &lt;input type="text" id="txtLastName" value="ASP.NET Core"  /&gt;<font></font>
  Last Name: &lt;input type="text" id="txtFirstName" value="ASP.NET Core"  /&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy凯</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>x = 9<font></font>
y = 8<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一元</font></font></p>

<pre><code>++x<font></font>
--x<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二元</font></font></p>

<pre><code>z = x + y
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元</font></font></p>

<pre><code>2&gt;3 ? true : false;<font></font>
2&lt;3 ? true : false;<font></font>
2&lt;3 ? "2 is lesser than 3" : "2 is greater than 3";<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>if statement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一条线上</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">全部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以 </font></font></p>

<pre><code>var x=1;<font></font>
(x == 1) ? y="true" : y="false";<font></font>
alert(y);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要评估的表达式在 </font></font><code>( )</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果匹配，则在 </font></font><code>?</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果匹配为false，请在 </font></font><code>:</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一飞云</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它称为三元运算符</font></font></p>

<pre><code>tmp = (foo==1 ? true : false);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨，伙伴们还记得js通过评估true或false起作用，对吗？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们来一个三元运算符： </font></font></p>

<pre><code>questionAnswered ? "Awesome!" : "damn" ;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，js检查questionAnswered是</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果   </font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您将获得“超赞！”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则（</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您将获得“该死”；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对朋友有帮助:)  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数答案都是正确的，但我想补充一点。</font><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元运算符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是右结合的，这意味着它可以被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下列方式</font></font><code>if … else-if … else-if … else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function example() {<font></font>
    return condition1 ? value1<font></font>
         : condition2 ? value2<font></font>
         : condition3 ? value3<font></font>
         : value4;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于：</font></font></p>

<pre><code>function example() {<font></font>
    if (condition1) { return value1; }<font></font>
    else if (condition2) { return value2; }<font></font>
    else if (condition3) { return value3; }<font></font>
    else { return value4; }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多细节在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元运算符</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，我们在Javascript中有条件语句。 </font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></em></p>

<pre><code>if (true) {<font></font>
    console.log(1)<font></font>
} <font></font>
else {<font></font>
    console.log(0)<font></font>
}<font></font>
# Answer<font></font>
# 1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它包含两行或更多行，因此无法分配给变量。</font><font style="vertical-align: inherit;">Javascript为该问题</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三元运算符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了解决方案</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">三元运算符可以写在一行中并分配给一个变量。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></em></p>

<pre><code>var operator = true ? 1 : 0<font></font>
console.log(operator)<font></font>
# Answer<font></font>
# 1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此三元运算符在C编程语言中类似。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您所有的都是符号时，用Google搜索会有点困难；）要使用的术语是“ javascript条件运算符”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Javascript中看到更多有趣的符号，则应尝试首先查找Javascript的运算符：</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference#Operators" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDC的运算符列表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可能会遇到的一个例外是</font></font><a href="https://stackoverflow.com/questions/4856156/what-does-js-mean"><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了回答您的问题，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件运算符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换了简单的if语句。</font><font style="vertical-align: inherit;">最好的例子是：</font></font></p>

<pre><code>var insurancePremium = age &gt; 21 ? 100 : 200;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替：</font></font></p>

<pre><code>var insurancePremium;<font></font>
<font></font>
if (age &gt; 21) {<font></font>
    insurancePremium = 100;<font></font>
} else {<font></font>
    insurancePremium = 200;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱前端</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>z = (x == y ? 1 : 2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于</font></font></p>

<pre><code>if (x == y)<font></font>
    z = 1;<font></font>
else<font></font>
    z = 2;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，它更短。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里MandyEva</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它称为“三元”或“条件”运算符。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？：运算符可用作if ... else语句的快捷方式。</font><font style="vertical-align: inherit;">它通常用作if ... else语句比较笨拙的较大表达式的一部分。</font><font style="vertical-align: inherit;">例如：</font></font></p>
</blockquote>

<pre><code>var now = new Date();<font></font>
var greeting = "Good" + ((now.getHours() &gt; 17) ? " evening." : " day.");<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该示例创建一个包含“晚安”的字符串。</font><font style="vertical-align: inherit;">如果是下午6点之后。</font><font style="vertical-align: inherit;">使用if ... else语句的等效代码如下所示：</font></font></p>
</blockquote>

<pre><code>var now = new Date();<font></font>
var greeting = "Good";<font></font>
if (now.getHours() &gt; 17)<font></font>
   greeting += " evening.";<font></font>
else<font></font>
   greeting += " day.";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="http://msdn.microsoft.com/en-us/library/be21c7hw%28v=vs.94%29.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MSDN JS文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，这是一个简写的条件语句。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅： </font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/1788917/javascript-ternary-operator"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript三元运算符的运算符优先级</font></font></a></li>
<li><a href="http://en.wikipedia.org/wiki/?:" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维基百科</font></font></a></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
