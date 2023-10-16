---
layout: question
title:  声明JavaScript数组时，“ Array（）”和“ \[\]”之间有什么区别？
date:   2020-03-10T04:12:44.000Z
description: 声明这样的数组之间的真正区别是什么：var myArray = new Array();和var myArray = \[\];...
img: 
author: 谷若汐
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明这样的数组之间的真正区别是什么：</font></font></p>

<pre><code>var myArray = new Array();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>var myArray = [];
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第466篇《声明JavaScript数组时，“ Array（）”和“ \[\]”之间有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖番长</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我所知道的性差异u能找到切片（或阵列的其他funcitons）像</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。而</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示ü </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和他的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码1：</font></font></strong></p>

<pre><code>[].slice; // find slice here<font></font>
var arr = new Array();<font></font>
arr.slice // find slice here<font></font>
Array.prototype.slice // find slice here<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码2：</font></font></strong></p>

<pre><code>[].__proto__ == Array.prototype; // true<font></font>
var arr = new Array();<font></font>
arr.__proto__ == Array.prototype; // true<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建了一个新的Array实例。</font></font><code>Array.prototype</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们只是Array。的不同实例，所以这解释了为什么
</font></font><code>[] != []</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Array构造函数将创建一个具有所需长度的新数组，并使用未定义的值填充每个索引，将一个数组分配给一个变量将创建您为其提供信息的索引。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了眼神之外，这还不止于此。</font><font style="vertical-align: inherit;">其他大多数答案也是正确的，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ..</font></font></p>

<h2><code>new Array(n)</code></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许引擎为</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">重新分配空间</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">针对数组</font><strong><font style="vertical-align: inherit;">创建进行了</font></strong><font style="vertical-align: inherit;">优化</font></font><strong><font style="vertical-align: inherit;"></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建的数组被标记为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稀疏</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其执行的数组性能最低，这是因为每次索引访问都必须检查边界，查看值是否存在并</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历原型链</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将数组标记为稀疏，则无法回退（至少在V8中如此），即使在1ms或2小时后填充了内容（压缩数组），它在其生命周期中也总是会变慢，这没关系</font></font></li>
</ul>

<h3><code>[1, 2, 3] || []</code></h3>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建的数组标记为已</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打包</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（除非您使用</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">使用</font></font><code>[1,,3]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优化阵列</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>for ..</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎需要随着数组的增长重新分配空间</font></font></li>
</ul>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在旧的版本的浏览器/浏览器的情况。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用[]产生了奇怪的行为。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有模型“类”，其字段已初始化为某个值。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>require([<font></font>
  "dojo/_base/declare",<font></font>
  "dijit/_WidgetBase",<font></font>
], function(declare, parser, ready, _WidgetBase){<font></font>
<font></font>
   declare("MyWidget", [_WidgetBase], {<font></font>
     field1: [],<font></font>
     field2: "",<font></font>
     function1: function(),<font></font>
     function2: function()<font></font>
   });    <font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现，使用字段初始化时</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所有Model对象都将共享它。</font><font style="vertical-align: inherit;">对一个进行更改会影响所有其他更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用初始化它们不会发生</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">与Objects的初始化相同（</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与new相同</font></font><code>Object()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TBH我不确定我们使用的框架是否有问题（</font></font><a href="https://dojotoolkit.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个是默认的对象构造函数调用。</font><font style="vertical-align: inherit;">您可以根据需要使用其参数。</font></font></p>

<pre><code>var array = new Array(5); //initialize with default length 5
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个使您能够创建非空数组：</font></font></p>

<pre><code>var array = [1, 2, 3]; // this array will contain numbers 1, 2, 3.
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙JinJinHarry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个是默认的对象构造函数调用，主要用于动态值。</font></font></p>

<pre><code>var array = new Array(length); //initialize with default length
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建静态值时使用第二个数组</font></font></p>

<pre><code>var array = [red, green, blue, yellow, white]; // this array will contain values.
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化没有任何长度的数组时没有区别。</font><font style="vertical-align: inherit;">所以</font></font><code>var a = []</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>var b = new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您使用length这样的长度初始化数组</font></font><code>var b = new Array(1);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则会将数组对象的长度设置为1。因此，它等于   </font></font><code>var b = []; b.length=1;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当您执行array_object.push时，这都会成问题，它会在最后一个元素之后添加项目并增加长度。</font></font></p>

<pre><code>var b = new Array(1);<font></font>
b.push("hello world");<font></font>
console.log(b.length); // print 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>var v = [];<font></font>
a.push("hello world");<font></font>
console.log(b.length); // print 1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的区别</font></font></p>

<pre><code>var arr = new Array(size);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>arr = [];<font></font>
arr.length = size;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如已经在这个问题上讨论得足够多了。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想补充一下速度问题- </font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的方法</font></font><code>google chrome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是第二种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，这些事情会随着更新而发生很大变化。</font><font style="vertical-align: inherit;">另外，不同浏览器的运行时间也不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我提到的第二个选项在上以200万[ops / second]的速度运行</font></font><code>chrome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果您尝试在它上</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，则将</font></font><code>mozilla dev.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得令人惊讶的2300万美元的更高速度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我建议你在一段时间检查出来，每一次，在不同的浏览器（和机器），利用网站</font></font><a href="http://jsperf.com/create-an-array-of-initial-size/2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以从基于Fredrik的好例子的示例开始，以更具体的方式进行解释。</font></font></p>

<pre><code>var test1 = [];<font></font>
test1.push("value");<font></font>
test1.push("value2");<font></font>
<font></font>
var test2 = new Array();<font></font>
test2.push("value");<font></font>
test2.push("value2");<font></font>
<font></font>
alert(test1);<font></font>
alert(test2);<font></font>
alert(test1 == test2);<font></font>
alert(test1.value == test2.value);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是向数组添加了另一个值，并发出了四个警报：第一个和第二个是给我们存储在每个数组中的值，以确保这些值。</font><font style="vertical-align: inherit;">他们将返回相同的！</font><font style="vertical-align: inherit;">现在尝试第三个，它返回false，这是因为</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视为具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组数据类型的VARIABLE</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有数组功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">OBJECT，</font></strong><font style="vertical-align: inherit;">这里几乎没有什么区别。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个区别是，当我们调用test1时，它会不加考虑地调用变量，它只是返回存储在此变量中的值，而不管其数据类型！</font><font style="vertical-align: inherit;">但是，当我们调用test2时，它将调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array（）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，然后将其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“推入”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">存储</font><font style="vertical-align: inherit;">在其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Value”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性中，并且当我们警告test2时，也会发生同样的情况，它返回</font><font style="vertical-align: inherit;">数组对象</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Value”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当我们检查test1是否等于test2时，它们将永远不会返回true，一个是函数，另一个是变量（具有数组类型），即使它们的值相同！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为确保这一点，请尝试添加了.value的第四个警报。</font><font style="vertical-align: inherit;">它将返回true。</font><font style="vertical-align: inherit;">在这种情况下，我们告诉JS“不管容器的类型是功能还是变量，请比较存储在每个容器中的值，然后告诉我们您所看到的！” </font><font style="vertical-align: inherit;">正是这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我能清楚地说出这个主意，并为我的英语不好对不起。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间没有太大的区别，它们基本上是做相同的事情，但是以不同的方式来做，但是请继续阅读W3C的以下语句：</font></font></p>

<pre><code>var cars = ["Saab", "Volvo","BMW"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>var cars = new Array("Saab", "Volvo", "BMW");
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的两个示例完全相同。</font><font style="vertical-align: inherit;">无需使用新的Array（）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了简单起见，提高可读性和执行速度，请使用第一个（数组文字方法）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是同时，使用</font></font><code>new Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">创建新数组</font><font style="vertical-align: inherit;">被认为是不好的做法：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免使用新的Array（）</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需使用JavaScript的内置数组构造函数new Array（）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  使用[]代替。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  这两个不同的语句都创建了一个新的名为点的空数组：</font></font></p>
</blockquote>

<pre><code>var points = new Array();         // Bad<font></font>
var points = [];                  // Good <font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个不同的语句都创建一个包含6个数字的新数组：</font></font></p>
</blockquote>

<pre><code>var points = new Array(40, 100, 1, 5, 25, 10); // Bad    <font></font>
var points = [40, 100, 1, 5, 25, 10];          // Good<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字唯一的代码复杂化。</font><font style="vertical-align: inherit;">它还可能会产生一些意外的结果：</font></font></p>
</blockquote>

<pre><code>var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我删除其中一个元素怎么办？</font></font></p>
</blockquote>

<pre><code>var points = new Array(40);       // Creates an array with 40 undefined elements !!!!!
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本上不认为这是最佳做法，那里也有一个细微的区别，您可以</font></font><code>new Array(length)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">传递长度</font><font style="vertical-align: inherit;">，这也不是推荐的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，</font></font><a href="http://yuiblog.com/blog/2006/11/13/javascript-we-hardly-new-ya/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述了为什么您永远不需要使用</font></font><code>new Array()</code></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需</font></font><code>new Object()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中使用。</font><font style="vertical-align: inherit;">请改用对象文字</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  。</font><font style="vertical-align: inherit;">同样，请勿使用</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而应使用数组文字</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  。</font><font style="vertical-align: inherit;">JavaScript中的数组不能像Java中的数组那样工作，使用类似Java的语法会使您感到困惑。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用</font></font><code>new Number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>new String</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或
   </font></font><code>new Boolean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这些形式产生不必要的对象包装。</font><font style="vertical-align: inherit;">只需使用简单的文字即可。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要检查注释- </font></font><code>new Array(length)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单没有任何用处（至少在当今的JavaScript实现中）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro番长</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，</font></font><code>new Array(size)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它几乎比</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome </font><font style="vertical-align: inherit;">快2倍</font><font style="vertical-align: inherit;">，而FF和IE </font><font style="vertical-align: inherit;">差不多</font><font style="vertical-align: inherit;">（通过创建和填充数组来衡量）。</font><font style="vertical-align: inherit;">仅当您知道数组的大致大小时才重要。</font><font style="vertical-align: inherit;">如果添加的项目多于给定的长度，则性能提升将丧失。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更准确地说：</font></font><code>Array(</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种不分配内存的快速恒定时间操作，而wheras </font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是设置类型和值的线性时间操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更好地理解</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&gt; []<font></font>
  []<font></font>
&gt; new Array()<font></font>
  []<font></font>
&gt; [] == []<font></font>
  false<font></font>
&gt; [] === []<font></font>
  false<font></font>
&gt; new Array() == new Array()<font></font>
  false<font></font>
&gt; new Array() === new Array()<font></font>
  false<font></font>
&gt; typeof ([])<font></font>
  "object"<font></font>
&gt; typeof (new Array())<font></font>
  "object"<font></font>
&gt; [] === new Array()<font></font>
  false<font></font>
&gt; [] == new Array()<font></font>
  false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上结果来自Windows 7上的Google Chrome控制台。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
