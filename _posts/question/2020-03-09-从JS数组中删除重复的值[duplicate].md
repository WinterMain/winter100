---
layout: question
title:  从JS数组中删除重复的值\[duplicate\]
date:   2020-03-09T13:44:52.000Z
description:                                                                          ...
img: 
author: 神乐小哥Near
category: question
answer: 22
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
                            <a href="/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取JavaScript数组中的所有唯一值（删除重复项）</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （89个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-11-15 10：30：28Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个非常简单的JavaScript数组，其中可能包含重复项，也可能不包含重复项。</font></font></p>

<pre><code>var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要删除重复项并将唯一值放入新数组中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以指出我尝试过的所有代码，但是我认为这没用，因为它们不起作用。</font><font style="vertical-align: inherit;">我也接受jQuery解决方案。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的问题：</font></font></h3>

<ul>
<li><a href="https://stackoverflow.com/questions/840781"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取数组中的所有非唯一值（即：重复/多次出现）</font></font></a></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://jsfiddle.net/2w0k5tz8/" rel="nofollow">https://jsfiddle.net/2w0k5tz8/</a></p>

<pre><code>function remove_duplicates(array_){<font></font>
    var ret_array = new Array();<font></font>
    for (var a = array_.length - 1; a &gt;= 0; a--) {<font></font>
        for (var b = array_.length - 1; b &gt;= 0; b--) {<font></font>
            if(array_[a] == array_[b] &amp;&amp; a != b){<font></font>
                delete array_[b];<font></font>
            }<font></font>
        };<font></font>
        if(array_[a] != undefined)<font></font>
            ret_array.push(array_[a]);<font></font>
    };<font></font>
    return ret_array;<font></font>
}<font></font>
<font></font>
console.log(remove_duplicates(Array(1,1,1,2,2,2,3,3,3)));<font></font>
</code></pre>

<p>Loop through, remove duplicates, and create a clone array place holder because the array index will not be updated.</p>

<p>Loop backward for better performance ( your loop wont need to keep checking the length of your array) </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If by any chance you were using</p>

<blockquote>
  <p>D3.js</p>
</blockquote>

<p>You could do</p>

<pre><code>d3.set(["foo", "bar", "foo", "baz"]).values() ==&gt; ["foo", "bar", "baz"]
</code></pre>

<p><a href="https://github.com/mbostock/d3/wiki/Arrays#set_values" rel="nofollow">https://github.com/mbostock/d3/wiki/Arrays#set_values</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>$(document).ready(function() {<font></font>
<font></font>
    var arr1=["dog","dog","fish","cat","cat","fish","apple","orange"]<font></font>
<font></font>
    var arr2=["cat","fish","mango","apple"]<font></font>
<font></font>
    var uniquevalue=[];<font></font>
    var seconduniquevalue=[];<font></font>
    var finalarray=[];<font></font>
<font></font>
    $.each(arr1,function(key,value){<font></font>
<font></font>
       if($.inArray (value,uniquevalue) === -1)<font></font>
       {<font></font>
           uniquevalue.push(value)<font></font>
<font></font>
       }<font></font>
<font></font>
    });<font></font>
<font></font>
     $.each(arr2,function(key,value){<font></font>
<font></font>
       if($.inArray (value,seconduniquevalue) === -1)<font></font>
       {<font></font>
           seconduniquevalue.push(value)<font></font>
<font></font>
       }<font></font>
<font></font>
    });<font></font>
<font></font>
    $.each(uniquevalue,function(ikey,ivalue){<font></font>
<font></font>
        $.each(seconduniquevalue,function(ukey,uvalue){<font></font>
<font></font>
            if( ivalue == uvalue)<font></font>
<font></font>
            {<font></font>
                finalarray.push(ivalue);<font></font>
            }   <font></font>
<font></font>
        });<font></font>
<font></font>
    });<font></font>
    alert(finalarray);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用功能方法</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是ES2015的通用且严格起作用的方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// small, reusable auxiliary functions<font></font>
<font></font>
const apply = f =&gt; a =&gt; f(a);<font></font>
<font></font>
const flip = f =&gt; b =&gt; a =&gt; f(a) (b);<font></font>
<font></font>
const uncurry = f =&gt; (a, b) =&gt; f(a) (b);<font></font>
<font></font>
const push = x =&gt; xs =&gt; (xs.push(x), xs);<font></font>
<font></font>
const foldl = f =&gt; acc =&gt; xs =&gt; xs.reduce(uncurry(f), acc);<font></font>
<font></font>
const some = f =&gt; xs =&gt; xs.some(apply(f));<font></font>
<font></font>
<font></font>
// the actual de-duplicate function<font></font>
<font></font>
const uniqueBy = f =&gt; foldl(<font></font>
   acc =&gt; x =&gt; some(f(x)) (acc)<font></font>
    ? acc<font></font>
    : push(x) (acc)<font></font>
 ) ([]);<font></font>
<font></font>
<font></font>
// comparators<font></font>
<font></font>
const eq = y =&gt; x =&gt; x === y;<font></font>
<font></font>
// string equality case insensitive :D<font></font>
const seqCI = y =&gt; x =&gt; x.toLowerCase() === y.toLowerCase();<font></font>
<font></font>
<font></font>
// mock data<font></font>
<font></font>
const xs = [1,2,3,1,2,3,4];<font></font>
<font></font>
const ys = ["a", "b", "c", "A", "B", "C", "D"];<font></font>
<font></font>
<font></font>
console.log( uniqueBy(eq) (xs) );<font></font>
<font></font>
console.log( uniqueBy(seqCI) (ys) );</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以轻松地</font></font><code>unique</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">s </font><font style="vertical-align: inherit;">派生</font></font><code>unqiueBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用更快的实现</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const unqiue = uniqueBy(eq);<font></font>
<font></font>
// const unique = xs =&gt; Array.from(new Set(xs));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法的好处：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用单独的比较器功能的通用解决方案</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明式和简洁的实现</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重用其他小的通用功能</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能考量</font></font></h2>

<p><code>uniqueBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 虽然没有像使用循环这样的命令式实现那样快，但是由于其通用性，它的表达方式更加丰富。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确定</font></font><code>uniqueBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是造成应用程序具体性能下降的原因，请用优化的代码代替。</font><font style="vertical-align: inherit;">也就是说，首先以功能性的声明方式编写代码。</font><font style="vertical-align: inherit;">此后，如果遇到性能问题，请尝试在引起问题的位置优化代码。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内存消耗和垃圾回收</font></font></h2>

<p><code>uniqueBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利用</font></font><code>push(x) (acc)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏在其体内的</font><font style="vertical-align: inherit;">突变（</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">它重复使用累加器，而不是在每次迭代后将其丢弃。</font><font style="vertical-align: inherit;">这样可以减少内存消耗和GC压力。</font><font style="vertical-align: inherit;">由于此副作用包含在函数内部，因此外部的所有内容都保持纯净。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了是比当前答案更简单，更简洁的解决方案（减去具有前瞻性的ES6解决方案）之外，我进行了性能测试，并且速度也更快： </font></font></p>

<pre><code>var uniqueArray = dupeArray.filter(function(item, i, self){<font></font>
  return self.lastIndexOf(item) == i;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个警告：在IE9中添加了Array.lastIndexOf（），因此，如果您需要降低此值，则需要查找其他地方。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>for (i=0; i&lt;originalArray.length; i++) {  <font></font>
    if (!newArray.includes(originalArray[i])) {<font></font>
        newArray.push(originalArray[i]); <font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于在任何地方（甚至在PhotoshopScript中）代码都可以理解和工作非常简单。</font><font style="vertical-align: inherit;">核实！</font></font></p>

<pre><code>var peoplenames = new Array("Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl");<font></font>
<font></font>
peoplenames = unique(peoplenames);<font></font>
alert(peoplenames);<font></font>
<font></font>
function unique(array){<font></font>
    var len = array.length;<font></font>
    for(var i = 0; i &lt; len; i++) for(var j = i + 1; j &lt; len; j++) <font></font>
        if(array[j] == array[i]){<font></font>
            array.splice(j,1);<font></font>
            j--;<font></font>
            len--;<font></font>
        }<font></font>
    return array;<font></font>
}<font></font>
<font></font>
//*result* peoplenames == ["Mike","Matt","Nancy","Adam","Jenny","Carl"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，选项为：</font></font></p>

<pre><code>let a = [11,22,11,22];<font></font>
let b = []<font></font>
<font></font>
<font></font>
b = [ ...new Set(a) ];     <font></font>
// b = [11, 22]<font></font>
<font></font>
b = Array.from( new Set(a))   <font></font>
// b = [11, 22]<font></font>
<font></font>
b = a.filter((val,i)=&gt;{<font></font>
  return a.indexOf(val)==i<font></font>
})                        <font></font>
// b = [11, 22]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是简单的方法，没有任何特殊的库是特殊的功能，</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>name_list = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];<font></font>
get_uniq = name_list.filter(function(val,ind) { return name_list.indexOf(val) == ind; })<font></font>
<font></font>
console.log("Original name list:"+name_list.length, name_list)<font></font>
console.log("\n Unique name list:"+get_uniq.length, get_uniq)</code></pre>
</div>
</div>
<p></p>

<p><a href="https://i.stack.imgur.com/PbJoQ.png" rel="noreferrer"><img src="https://i.stack.imgur.com/PbJoQ.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下内容比列出的jQuery方法快80％以上（请参见下面的测试）。</font><font style="vertical-align: inherit;">这是几年前类似问题的答案。</font><font style="vertical-align: inherit;">如果我遇到最初提出该建议的人，我会记分。</font><font style="vertical-align: inherit;">纯JS。</font></font></p>

<pre><code>var temp = {};<font></font>
for (var i = 0; i &lt; array.length; i++)<font></font>
  temp[array[i]] = true;<font></font>
var r = [];<font></font>
for (var k in temp)<font></font>
  r.push(k);<font></font>
return r;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的测试案例比较：</font><a href="http://jsperf.com/remove-duplicate-array-tests" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://jsperf.com/remove-duplicate-array-tests" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsperf.com/remove-duplicate-array-tests</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 6（又名ECMAScript 2015）中，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于过滤出重复项。</font><font style="vertical-align: inherit;">然后可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">散布运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其转换回数组</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"],<font></font>
    unique = [...new Set(names)];<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对该问题的简单答案。</font></font></p>

<pre><code>var names = ["Alex","Tony","James","Suzane", "Marie", "Laurence", "Alex", "Suzane", "Marie", "Marie", "James", "Tony", "Alex"];<font></font>
var uniqueNames = [];<font></font>
<font></font>
    for(var i in names){<font></font>
        if(uniqueNames.indexOf(names[i]) === -1){<font></font>
            uniqueNames.push(names[i]);<font></font>
        }<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅JinJin十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案1</font></font></strong></p>

<pre><code>Array.prototype.unique = function() {<font></font>
    var a = [];<font></font>
    for (i = 0; i &lt; this.length; i++) {<font></font>
        var current = this[i];<font></font>
        if (a.indexOf(current) &lt; 0) a.push(current);<font></font>
    }<font></font>
    return a;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2（使用设置）</font></font></strong></p>

<pre><code>Array.prototype.unique = function() {<font></font>
    return Array.from(new Set(this));<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></strong></p>

<pre><code>var x=[1,2,3,3,2,1];<font></font>
x.unique() //[1,2,3]<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我测试两种实现方式（带和不带Set）的chrome性能时，我发现带Set的实现要快得多！</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>Array.prototype.unique1 = function() {<font></font>
    var a = [];<font></font>
    for (i = 0; i &lt; this.length; i++) {<font></font>
        var current = this[i];<font></font>
        if (a.indexOf(current) &lt; 0) a.push(current);<font></font>
    }<font></font>
    return a;<font></font>
}<font></font>
<font></font>
<font></font>
Array.prototype.unique2 = function() {<font></font>
    return Array.from(new Set(this));<font></font>
}<font></font>
<font></font>
var x=[];<font></font>
for(var i=0;i&lt;10000;i++){<font></font>
	x.push("x"+i);x.push("x"+(i+1));<font></font>
}<font></font>
<font></font>
console.time("unique1");<font></font>
console.log(x.unique1());<font></font>
console.timeEnd("unique1");<font></font>
<font></font>
<font></font>
<font></font>
console.time("unique2");<font></font>
console.log(x.unique2());<font></font>
console.timeEnd("unique2");</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我遇到的最简单的一个。</font><font style="vertical-align: inherit;">在es6中。</font></font></p>

<pre><code> var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl", "Mike", "Nancy"]<font></font>
<font></font>
 var noDupe = Array.from(new Set(names))<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去这个：</font></font></p>

<pre><code>var uniqueArray = duplicateArray.filter(function(elem, pos) {<font></font>
    return duplicateArray.indexOf(elem) == pos;<font></font>
}); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在uniqueArray不包含重复项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最高答案的复杂度为</font></font><code>O(n²)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这可以</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将对象用作哈希来完成：</font></font></p>

<pre><code>function getDistinctArray(arr) {<font></font>
    var dups = {};<font></font>
    return arr.filter(function(el) {<font></font>
        var hash = el.valueOf();<font></font>
        var isDup = dups[hash];<font></font>
        dups[hash] = true;<font></font>
        return !isDup;<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将适用于字符串，数字和日期。</font><font style="vertical-align: inherit;">如果您的数组包含对象，则上述解决方案将不起作用，因为当被强制转换为字符串时，它们都将具有</font></font><code>"[object Object]"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或类似</font><font style="vertical-align: inherit;">值）的值，</font><font style="vertical-align: inherit;">并且不适合作为查找值。</font><font style="vertical-align: inherit;">您可以</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在对象本身上设置标志来获得对象的实现：</font></font></p>

<pre><code>function getDistinctObjArray(arr) {<font></font>
    var distinctArr = arr.filter(function(el) {<font></font>
        var isDup = el.inArray;<font></font>
        el.inArray = true;<font></font>
        return !isDup;<font></font>
    });<font></font>
    distinctArr.forEach(function(el) {<font></font>
        delete el.inArray;<font></font>
    });<font></font>
    return distinctArr;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2019编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代版本的JavaScript使这个问题更容易解决。</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论您的数组包含对象，字符串，数字还是任何其他类型，都可以</font><font style="vertical-align: inherit;">使用using </font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function getDistinctArray(arr) {<font></font>
    return [...new Set(arr)];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现是如此简单，不再需要定义功能。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用原生javascript函数从数组中删除重复项的最简洁方法是使用如下序列：</font></font></p>

<pre><code>vals.sort().reduce(function(a, b){ if (b != a[0]) a.unshift(b); return a }, [])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像我在其他示例中看到的那样，</font><font style="vertical-align: inherit;">没有必要</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也没有</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reduce函数！</font><font style="vertical-align: inherit;">不过，将其与过滤器函数一起使用是有意义的：</font></font></p>

<pre><code>vals.filter(function(v, i, a){ return i == a.indexOf(v) })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6（2015）的另一种已在少数浏览器上运行的方式是： </font></font></p>

<pre><code>Array.from(new Set(vals))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价差运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>[...new Set(vals)]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://underscorejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一个包含用于操纵数组的函数的库。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是与jQuery的晚礼服和Backbone.js的吊带一起使用的纽带。</font></font></p>
</blockquote>

<p><strong><a href="http://underscorejs.org/#uniq"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.uniq</font></font></a></strong></p>

<blockquote>
  <p><code>_.uniq(array, [isSorted], [iterator])</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">别名：</font></font></em> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">unique</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  产生</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的无重复版本</font><font style="vertical-align: inherit;">，使用===测试对象的相等性。</font><font style="vertical-align: inherit;">如果您事先知道该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已排序，</font><font style="vertical-align: inherit;">则为</font><strong><font style="vertical-align: inherit;">isSorted</font></strong><font style="vertical-align: inherit;">传递
   </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将运行更快的算法。</font><font style="vertical-align: inherit;">如果要基于转换计算唯一项，请传递</font><strong><font style="vertical-align: inherit;">迭代器</font></strong><font style="vertical-align: inherit;"> 
  函数。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>
</blockquote>

<p><strong><a href="http://jsfiddle.net/ZNLUP/1/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></a></strong></p>

<pre><code>var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];<font></font>
<font></font>
alert(_.uniq(names, false));<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><a href="http://lodash.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lo-Dash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://underscorejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">竞争对手）还提供了类似的</font></font><a href="http://lodash.com/docs#uniq"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.uniq</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用数组过滤器和indexOf函数的单行版本：</font></font></p>

<pre><code>arr = arr.filter (function (value, index, array) { <font></font>
    return array.indexOf (value) == index;<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在JavaScript中简单地借助方法的第二个-index-参数来实现</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var a = [2,3,4,5,5,4];<font></font>
a.filter(function(value, index){ return a.indexOf(value) == index });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简而言之</font></font></p>

<pre><code>a.filter((v,i) =&gt; a.indexOf(v) == i)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vanilla JS：使用类似Set的对象删除重复项</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您始终可以尝试将其放入对象，然后遍历其键：</font></font></p>

<pre><code>function remove_duplicates(arr) {<font></font>
    var obj = {};<font></font>
    var ret_arr = [];<font></font>
    for (var i = 0; i &lt; arr.length; i++) {<font></font>
        obj[arr[i]] = true;<font></font>
    }<font></font>
    for (var key in obj) {<font></font>
        ret_arr.push(key);<font></font>
    }<font></font>
    return ret_arr;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vanilla JS：通过跟踪已经看到的值来删除重复项（顺序安全）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，对于顺序安全的版本，使用对象存储所有以前看到的值，并在添加到数组之前对照该值检查值。</font></font></p>

<pre><code>function remove_duplicates_safe(arr) {<font></font>
    var seen = {};<font></font>
    var ret_arr = [];<font></font>
    for (var i = 0; i &lt; arr.length; i++) {<font></font>
        if (!(arr[i] in seen)) {<font></font>
            ret_arr.push(arr[i]);<font></font>
            seen[arr[i]] = true;<font></font>
        }<font></font>
    }<font></font>
    return ret_arr;<font></font>
<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6：使用新的Set数据结构（顺序安全）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6添加了新的</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据结构，可让您存储任何类型的值。  </font></font><code>Set.values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按插入顺序返回元素。</font></font></p>

<pre><code>function remove_duplicates_es6(arr) {<font></font>
    let s = new Set(arr);<font></font>
    let it = s.values();<font></font>
    return Array.from(it);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例：</font></font></strong></p>

<pre><code>a = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];<font></font>
<font></font>
b = remove_duplicates(a);<font></font>
// b:<font></font>
// ["Adam", "Carl", "Jenny", "Matt", "Mike", "Nancy"]<font></font>
<font></font>
c = remove_duplicates_safe(a);<font></font>
// c:<font></font>
// ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Carl"]<font></font>
<font></font>
d = remove_duplicates_es6(a);<font></font>
// d:<font></font>
// ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Carl"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西门Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速而肮脏的使用jQuery：</font></font></p>

<pre><code>var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];<font></font>
var uniqueNames = [];<font></font>
$.each(names, function(i, el){<font></font>
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
