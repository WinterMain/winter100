---
layout: question
title:  JavaScript是按引用传递还是按值传递语言？
date:   2020-03-09T13:06:20.000Z
description: 基本类型（数字，字符串等）按值传递，但对象未知，因为它们都可以按值传递（如果我们认为保存对象的变量实际上是对该对象的引用） ）和按引用传递（当我们认为对象...
img: 
author: 留姬
category: question
answer: 20
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本类型（数字，字符串等）按值传递，但对象未知，因为它们都可以按值传递（如果我们认为保存对象的变量实际上是对该对象的引用） ）和按引用传递（当我们认为对象的变量包含对象本身时）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管最后并没有什么大不了，但我想知道呈现通过惯例的参数的正确方法是什么。</font><font style="vertical-align: inherit;">是否有JavaScript规范的摘录，其中定义了与此相关的语义？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第271篇《JavaScript是按引用传递还是按值传递语言？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基元按值传递，对象按引用传递。</font><font style="vertical-align: inherit;">这与C，Visual Basic或Delphi等其他语言完全不同。</font><font style="vertical-align: inherit;">我不能说它们如何精确地处理对象和基元，但是我知道Visual Basic和Delphi可以（并且应该）指定它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从版本5开始，PHP进行了类似的操作：所有对象都通过引用传递，但是所有原语</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过引用传递（如果前面带有＆符号，则可以通过引用传递）。</font><font style="vertical-align: inherit;">否则，基元将按值传递。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在JavaScript中，如果我通过参数将对象X传递给函数，则它仍然是X。如果要更改</font><font style="vertical-align: inherit;">函数</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">数据</font><font style="vertical-align: inherit;">（或其他任何对象，但这并不重要），则在功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁蛋蛋宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基元（数字，布尔值等）按值传递。

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串是不可变的，因此对于它们而言并没有太大关系。</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象通过引用传递（引用通过值传递）。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单的确定是否“通过引用传递”的方法是是否可以编写“交换”函数。</font><font style="vertical-align: inherit;">例如，在C中，您可以执行以下操作：</font></font></p>

<pre><code>void swap(int *i, int *j)<font></font>
{<font></font>
    int t;<font></font>
    t = *i;<font></font>
    *i = *j;<font></font>
    *j = t;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您无法在JavaScript中完成等效操作，则它不是“通过引用传递”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天泡芙神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个关于使用术语的一些讨论在JavaScript中“按引用传递” </font></font><a href="https://developer.mozilla.org/en-US/docs/Talk:JavaScript/Guide/Obsolete_Pages/Defining_Functions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但要回答你的问题：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是通过引用自动传递的，无需特别声明</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（摘自上述文章。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会说这是通过副本-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑参数和变量对象是在函数调用开始时创建的执行上下文中创建的对象-传递给函数的实际值/引用仅存储在此参数+变量对象中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，对于基本类型，值在函数调用的开始被复制，对于对象类型，引用被复制。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像字符串，数字之类的原始类型变量始终按值传递。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据这两个条件，数组和对象按引用传递或按值传递。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用新的对象或数组更改该对象或数组的值，则按值传递。</font></font></p>

<p><code>object1 = {item: "car"};
  array1=[1,2,3];</code></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您将新对象或数组分配给旧对象或数组。您没有更改旧对象的属性值，因此按值传递。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要更改对象或数组的属性值，则通过引用传递它。</font></font></p>

<p><code>object1.key1= "car";
  array1[0]=9;</code></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您正在更改旧对象的属性值。您没有将新对象或数组分配给旧对象，因此它通过引用传递。</font></font></p></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码</font></font></strong></p>

<pre><code>    function passVar(object1, object2, number1) {<font></font>
<font></font>
        object1.key1= "laptop";<font></font>
        object2 = {<font></font>
            key2: "computer"<font></font>
        };<font></font>
        number1 = number1 + 1;<font></font>
    }<font></font>
<font></font>
    var object1 = {<font></font>
        key1: "car"<font></font>
    };<font></font>
    var object2 = {<font></font>
        key2: "bike"<font></font>
    };<font></font>
    var number1 = 10;<font></font>
<font></font>
    passVar(object1, object2, number1);<font></font>
    console.log(object1.key1);<font></font>
    console.log(object2.key2);<font></font>
    console.log(number1);<font></font>
<font></font>
Output: -<font></font>
    laptop<font></font>
    bike<font></font>
    10<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档对其进行了清晰的解释，而不必太冗长：  </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数调用的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是函数的</font><em><font style="vertical-align: inherit;">参数</font></em><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参数</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过值</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递给函数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果函数更改了参数的值，则此更改不会在全局或调用函数中反映出来。</font><font style="vertical-align: inherit;">但是，对象引用也是值，并且它们很特殊：如果函数更改了所引用对象的属性，则该更改在函数外部是可见的（...）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经多次阅读了这些答案，但是直到我了解</font><font style="vertical-align: inherit;">Barbara Liskov所说</font><font style="vertical-align: inherit;">的</font></font><a href="https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“共享通话”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的技术定义后，我才真正理解它。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过共享进行调用的语义与通过引用进行调用的不同之处在于，调用者看不到对函数内函数自变量的分配（不同于通过引用语义）[需要引用]，因此例如，如果传递了变量，则不可能在调用者范围内模拟对该变量的分配。</font><font style="vertical-align: inherit;">但是，由于该函数可以访问与调用方相同的对象（不进行任何复制），因此，如果对象可变，则这些对象的突变（如果该对象是可变的）对调用方可见，这似乎与按值调用有所不同语义。</font><font style="vertical-align: inherit;">调用者可以看到函数中可变对象的突变，因为该对象没有被复制或克隆，而是共享的。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，如果您访问并访问参数值本身，则参数引用是可变的。</font><font style="vertical-align: inherit;">另一方面，对参数的赋值将在评估后消失，并且函数调用者将无法访问。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的最简洁的解释是在</font></font><a href="https://github.com/airbnb/javascript#types" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AirBNB样式指南中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基元</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：访问基元类型时，可以直接使用其值</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">串</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布尔值</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空值</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var foo = 1,<font></font>
    bar = foo;<font></font>
<font></font>
bar = 9;<font></font>
<font></font>
console.log(foo, bar); // =&gt; 1, 9<font></font>
</code></pre>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复杂</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：访问复杂类型时，需要引用其值</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宾语</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var foo = [1, 2],<font></font>
    bar = foo;<font></font>
<font></font>
bar[0] = 9;<font></font>
<font></font>
console.log(foo[0], bar[0]); // =&gt; 9, 9<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，有效的原始类型是通过值传递的，而复杂类型是通过引用传递的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于编程语言律师，我阅读了ECMAScript 5.1的以下部分（比最新版本更易于阅读），并</font><font style="vertical-align: inherit;">在ECMAScript邮件列表中进行了</font></font><a href="https://esdiscuss.org/topic/are-the-values-of-objects-the-references-to-them" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">询问</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：一切都是通过值传递的，但是Objects的属性是引用，并且标准中非常缺少Object的定义。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造论证清单</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第11.2.4节“自变量列表”在生成仅包含1个自变量的自变量列表时说如下： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生产ArgumentList：AssignmentExpression的评估如下：</font></font></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令ref为评估AssignmentExpression的结果。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令arg为GetValue（ref）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回唯一项为arg的列表。</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本节还列举了参数列表包含0或&gt; 1个参数的情况。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，所有内容都通过引用传递。 </font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问对象属性</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第11.2.1节“属性访问器” </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生产的MemberExpression：MemberExpression [Expression]的计算如下：</font></font></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令baseReference为评估MemberExpression的结果。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令baseValue为GetValue（baseReference）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令propertyNameReference为计算Expression的结果。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设propertyNameValue为GetValue（propertyNameReference）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用CheckObjectCoercible（baseValue）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设propertyNameString为ToString（propertyNameValue）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要评估的语法产生包含在严格模式代码中，则使strict为真，否则使strict为假。</font></font></li>
  <li><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回类型为Reference</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><b><font style="vertical-align: inherit;">值，</font></b><font style="vertical-align: inherit;">其基值为baseValue，其引用名称为propertyNameString，其strict模式标志为strict。</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对象的属性始终可以用作参考。 </font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考上</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第8.7节“引用规范类型”中对此进行了描述，引用不是该语言中的实类型-它们仅用于描述delete，typeof和赋值运算符的行为。 </font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“对象”的定义</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在5.1版中定义“对象是属性的集合”。</font><font style="vertical-align: inherit;">因此，我们可以推断出，对象的值就是集合，但是关于什么是集合的值在规范中定义得很差，需要一些</font></font><a href="https://stackoverflow.com/questions/45388408/where-is-the-mutability-of-objects-defined-in-ecmascript/45407589#45407589"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">努力</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能理解。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在低级语言中，如果要通过引用传递变量，则必须在创建函数时使用特定的语法：</font></font></p>

<pre><code>int myAge = 14;<font></font>
increaseAgeByRef(myAge);<font></font>
function increaseAgeByRef(int &amp;age) {<font></font>
  *age = *age + 1;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&amp;age</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个参考</font></font><code>myAge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但如果你想要的值，你必须参考转换，使用</font></font><code>*age</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript是为您执行此转换的高级语言。</font><font style="vertical-align: inherit;">因此，尽管对象是通过引用传递的，但语言会将引用参数转换为值。</font><font style="vertical-align: inherit;">您不需要</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数定义上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，而在</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数体上</font><font style="vertical-align: inherit;">通过引用来传递它，也不需要</font><font style="vertical-align: inherit;">在函数体上使用，来将引用转换为值，JS会为您完成。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是为什么当您尝试通过替换函数的值（即</font></font><code>age = {value:5}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">来更改对象时</font><font style="vertical-align: inherit;">，更改不会持续存在，但是如果您更改其属性（即</font></font><code>age.value = 5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则</font><font style="vertical-align: inherit;">更改仍然存在</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://blog.penjee.com/passing-by-value-vs-by-reference-java-graphical/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学到更多</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿LEY理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中将参数传递给函数类似于在C中通过指针值传递参数：</font></font></p>

<pre><code>/*<font></font>
The following C program demonstrates how arguments<font></font>
to JavaScript functions are passed in a way analogous<font></font>
to pass-by-pointer-value in C. The original JavaScript<font></font>
test case by @Shog9 follows with the translation of<font></font>
the code into C. This should make things clear to<font></font>
those transitioning from C to JavaScript.<font></font>
<font></font>
function changeStuff(num, obj1, obj2)<font></font>
{<font></font>
    num = num * 10;<font></font>
    obj1.item = "changed";<font></font>
    obj2 = {item: "changed"};<font></font>
}<font></font>
<font></font>
var num = 10;<font></font>
var obj1 = {item: "unchanged"};<font></font>
var obj2 = {item: "unchanged"};<font></font>
changeStuff(num, obj1, obj2);<font></font>
console.log(num);<font></font>
console.log(obj1.item);    <font></font>
console.log(obj2.item);<font></font>
<font></font>
This produces the output:<font></font>
<font></font>
10<font></font>
changed<font></font>
unchanged<font></font>
*/<font></font>
<font></font>
#include &lt;stdio.h&gt;<font></font>
#include &lt;stdlib.h&gt;<font></font>
<font></font>
struct obj {<font></font>
    char *item;<font></font>
};<font></font>
<font></font>
void changeStuff(int *num, struct obj *obj1, struct obj *obj2)<font></font>
{<font></font>
    // make pointer point to a new memory location<font></font>
    // holding the new integer value<font></font>
    int *old_num = num;<font></font>
    num = malloc(sizeof(int));<font></font>
    *num = *old_num * 10;<font></font>
    // make property of structure pointed to by pointer<font></font>
    // point to the new value<font></font>
    obj1-&gt;item = "changed";<font></font>
    // make pointer point to a new memory location<font></font>
    // holding the new structure value<font></font>
    obj2 = malloc(sizeof(struct obj));<font></font>
    obj2-&gt;item = "changed";<font></font>
    free(num); // end of scope<font></font>
    free(obj2); // end of scope<font></font>
}<font></font>
<font></font>
int num = 10;<font></font>
struct obj obj1 = { "unchanged" };<font></font>
struct obj obj2 = { "unchanged" };<font></font>
<font></font>
int main()<font></font>
{<font></font>
    // pass pointers by value: the pointers<font></font>
    // will be copied into the argument list<font></font>
    // of the called function and the copied<font></font>
    // pointers will point to the same values<font></font>
    // as the original pointers<font></font>
    changeStuff(&amp;num, &amp;obj1, &amp;obj2);<font></font>
    printf("%d\n", num);<font></font>
    puts(obj1.item);<font></font>
    puts(obj2.item);<font></font>
    return 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只是有关按值传递和按引用传递（JavaScript）的更多说明。</font><font style="vertical-align: inherit;">在这个概念中，他们正在谈论通过引用传递变量和通过引用传递变量。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按值传递（原始类型）</font></font></strong></p>

<pre><code>var a = 3;<font></font>
var b = a;<font></font>
<font></font>
console.log(a); // a = 3<font></font>
console.log(b); // b = 3<font></font>
<font></font>
a=4;<font></font>
console.log(a); // a = 4<font></font>
console.log(b); // b = 3<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于JavaScript中的所有原始类型（字符串，数字，布尔值，未定义和null）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为a分配了一个内存（例如0x001），而b在内存中创建了该值的副本（例如0x002）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，更改变量的值不会影响其他变量，因为它们都位于两个不同的位置。</font></font></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过引用传递（对象）</font></font></strong></p>

<pre><code>var c = { "name" : "john" };<font></font>
var d = c;<font></font>
<font></font>
console.log(c); // { "name" : "john" }<font></font>
console.log(d); // { "name" : "john" }<font></font>
<font></font>
c.name = "doe";<font></font>
<font></font>
console.log(c); // { "name" : "doe" }<font></font>
console.log(d); // { "name" : "doe" }<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript引擎将对象分配给变量</font></font><code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且它指向一些内存，例如（0x012）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当d = c时，在此步骤中</font></font><code>d</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向相同的位置（0x012）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改任何变量的值都会更改两个变量的值。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能就是对象</font></font></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特殊情况，通过引用传递（对象）</font></font></strong></p>

<pre><code>c = {"name" : "jane"};<font></font>
console.log(c); // { "name" : "jane" }<font></font>
console.log(d); // { "name" : "doe" }<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">equal（=）运算符设置新的内存空间或地址</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分享我对JavaScript中引用的了解</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储为引用：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = {<font></font>
  a: 1,<font></font>
  b: 2,<font></font>
  c: 3<font></font>
};<font></font>
var b = a;<font></font>
<font></font>
// b.c is referencing to a.c value<font></font>
console.log(b.c) // Output: 3<font></font>
// Changing value of b.c<font></font>
b.c = 4<font></font>
// Also changes the value of a.c<font></font>
console.log(a.c) // Output: 4</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript总是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按值传递</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">一切都是价值类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是值，对象的成员函数本身就是值（请记住，函数是JavaScript中的一流对象）。</font><font style="vertical-align: inherit;">另外，关于JavaScript中的所有内容都是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的概念</font><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">这是错误的。</font><font style="vertical-align: inherit;">字符串，符号，数字，布尔值，null和undefineds是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基元</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时他们可以利用从其基本原型继承的一些成员函数和属性，但这只是为了方便。</font><font style="vertical-align: inherit;">这并不意味着它们本身就是对象。</font><font style="vertical-align: inherit;">请尝试以下操作以供参考：</font></font></p>

<pre><code>x = "test";<font></font>
alert(x.foo);<font></font>
x.foo = 12;<font></font>
alert(x.foo);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这两个警报中，您都将找到未定义的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">“ JavaScript：权威指南”</font></em><font style="vertical-align: inherit;">一书的</font></font><a href="http://docstore.mik.ua/orelly/webprog/jscript/ch11_02.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一章中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，有</font><font style="vertical-align: inherit;">关于按值复制和传递以及比较的非常详细的解释</font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在离开通过引用操作对象和数组的主题之前，我们需要弄清楚术语的点。 </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短语“通过引用”可以具有多种含义。</font><font style="vertical-align: inherit;">对某些读者而言，该短语指的是一种函数调用技术，该技术允许函数为其参数分配新值并使这些修改后的值在函数外部可见。</font><font style="vertical-align: inherit;">这不是本书中使用该术语的方式。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我们的意思是简单地将对对象或数组的引用（而不是对象本身）传递给函数。</font><font style="vertical-align: inherit;">函数可以使用引用来修改对象或数组元素的属性。</font><font style="vertical-align: inherit;">但是，如果函数用对新对象或数组的引用覆盖了引用，则该修改在函数外部不可见。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">熟悉该术语其他含义的读者可能更喜欢说对象和数组是通过值传递的，但是传递的值实际上是引用，而不是对象本身。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过引用外部对象将函数外部的对象传递到函数中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用该引用操纵其对象时，外部对象因此受到影响。</font><font style="vertical-align: inherit;">但是，如果在函数内部您决定将引用指向其他对象，那么您根本不会影响外部对象，因为您所做的只是将引用重定向到其他对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它总是按值传递，但是对于对象，变量的值是一个引用。</font><font style="vertical-align: inherit;">因此，当您传递对象并更改其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成员时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这些更改会在函数外部持久存在。</font><font style="vertical-align: inherit;">这使其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像通过引用传递。</font><font style="vertical-align: inherit;">但是，如果您实际上更改了对象变量的值，则会看到该更改不会持续存在，证明它确实是按值传递的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function changeObject(x) {<font></font>
  x = { member: "bar" };<font></font>
  console.log("in changeObject: " + x.member);<font></font>
}<font></font>
<font></font>
function changeMember(x) {<font></font>
  x.member = "bar";<font></font>
  console.log("in changeMember: " + x.member);<font></font>
}<font></font>
<font></font>
var x = { member: "foo" };<font></font>
<font></font>
console.log("before changeObject: " + x.member);<font></font>
changeObject(x);<font></font>
console.log("after changeObject: " + x.member); /* change did not persist */<font></font>
<font></font>
console.log("before changeMember: " + x.member);<font></font>
changeMember(x);<font></font>
console.log("after changeMember: " + x.member); /* change persists */</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>before changeObject: foo<font></font>
in changeObject: bar<font></font>
after changeObject: foo<font></font>
<font></font>
before changeMember: foo<font></font>
in changeMember: bar<font></font>
after changeMember: bar<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无前端Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量不会“保留”对象；</font><font style="vertical-align: inherit;">它具有参考。</font><font style="vertical-align: inherit;">您可以将该引用分配给另一个变量，现在两者都引用同一个对象。</font><font style="vertical-align: inherit;">它总是按值传递（即使该值是引用...）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法更改作为参数传递的变量所持有的值，如果JavaScript支持通过引用传递，则可以实现。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript很有趣。</font><font style="vertical-align: inherit;">考虑以下示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function changeStuff(a, b, c)<font></font>
{<font></font>
  a = a * 10;<font></font>
  b.item = "changed";<font></font>
  c = {item: "changed"};<font></font>
}<font></font>
<font></font>
var num = 10;<font></font>
var obj1 = {item: "unchanged"};<font></font>
var obj2 = {item: "unchanged"};<font></font>
<font></font>
changeStuff(num, obj1, obj2);<font></font>
<font></font>
console.log(num);<font></font>
console.log(obj1.item);<font></font>
console.log(obj2.item);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生输出：</font></font></p>

<pre><code>10<font></font>
changed<font></font>
unchanged<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根本不是参考，那么更改</font></font><code>obj1.item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对函数</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">外部</font><font style="vertical-align: inherit;">产生影响</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果论点是一个适当的参考，那么一切都会改变。</font></font><code>num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会</font></font><code>100</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>obj2.item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会阅读</font></font><code>"changed"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，情况是传入的项目是按值传递的。</font><font style="vertical-align: inherit;">但是，按值传递的项目</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本身</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是参考。</font><font style="vertical-align: inherit;">从技术上讲，这称为</font></font><a href="http://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">共享呼叫</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，这意味着如果您更改参数本身（如</font></font><code>num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和一样</font></font><code>obj2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则不会影响输入该参数的项目。</font><font style="vertical-align: inherit;">但是，如果您更改</font><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">INTERNALS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则会传播回来（与一样</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
