---
layout: question
title:  打破JavaScript中的嵌套循环的最佳方法是什么？
date:   2020-03-16T04:01:26.000Z
description: 打破Javascript中的嵌套循环的最佳方法是什么？//Write the links to the page.for (var x = 0; x...
img: 
author: 乐LEY
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打破Javascript中的嵌套循环的最佳方法是什么？</font></font></p>

<pre><code>//Write the links to the page.<font></font>
for (var x = 0; x &lt; Args.length; x++)<font></font>
{<font></font>
   for (var Heading in Navigation.Headings)<font></font>
   {<font></font>
      for (var Item in Navigation.Headings[Heading])<font></font>
      {<font></font>
         if (Args[x] == Navigation.Headings[Heading][Item].Name)<font></font>
         {<font></font>
            document.write("&lt;a href=\"" <font></font>
               + Navigation.Headings[Heading][Item].URL + "\"&gt;" <font></font>
               + Navigation.Headings[Heading][Item].Name + "&lt;/a&gt; : ");<font></font>
            break; // &lt;---HERE, I need to break out of two loops.<font></font>
         }<font></font>
      }<font></font>
   }<font></font>
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
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>the best way is -<br>
1) Sort the both array which are used in first and second loop. <br>
2) if item matched then break the inner loop and hold the index value.<br>
3) when start next iteration start inner loop with hold index value.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为我会展示一种功能编程方法。</font><font style="vertical-align: inherit;">您可以像我的解决方案中那样，使用嵌套的Array.prototype.some（）和/或Array.prototype.every（）函数。</font><font style="vertical-align: inherit;">这种方法的另一个好处是</font></font><code>Object.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅枚举对象自身的可枚举属性，而   </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ for-in循环也枚举原型链中的属性”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接近OP的解决方案：</font></font></p>

<pre><code>    Args.forEach(function (arg) {<font></font>
        // This guard is not necessary,<font></font>
        // since writing an empty string to document would not change it.<font></font>
        if (!getAnchorTag(arg))<font></font>
            return;<font></font>
<font></font>
        document.write(getAnchorTag(arg));<font></font>
    });<font></font>
<font></font>
    function getAnchorTag (name) {<font></font>
        var res = '';<font></font>
<font></font>
        Object.keys(Navigation.Headings).some(function (Heading) {<font></font>
            return Object.keys(Navigation.Headings[Heading]).some(function (Item) {<font></font>
                if (name == Navigation.Headings[Heading][Item].Name) {<font></font>
                    res = ("&lt;a href=\""<font></font>
                                 + Navigation.Headings[Heading][Item].URL + "\"&gt;"<font></font>
                                 + Navigation.Headings[Heading][Item].Name + "&lt;/a&gt; : ");<font></font>
                    return true;<font></font>
                }<font></font>
            });<font></font>
        });<font></font>
<font></font>
        return res;<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减少迭代标题/项目的解决方案：</font></font></p>

<pre><code>    var remainingArgs = Args.slice(0);<font></font>
<font></font>
    Object.keys(Navigation.Headings).some(function (Heading) {<font></font>
        return Object.keys(Navigation.Headings[Heading]).some(function (Item) {<font></font>
            var i = remainingArgs.indexOf(Navigation.Headings[Heading][Item].Name);<font></font>
<font></font>
            if (i === -1)<font></font>
                return;<font></font>
<font></font>
            document.write("&lt;a href=\""<font></font>
                                         + Navigation.Headings[Heading][Item].URL + "\"&gt;"<font></font>
                                         + Navigation.Headings[Heading][Item].Name + "&lt;/a&gt; : ");<font></font>
            remainingArgs.splice(i, 1);<font></font>
<font></font>
            if (remainingArgs.length === 0)<font></font>
                return true;<font></font>
            }<font></font>
        });<font></font>
    });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯，你好参加10岁的聚会吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不给您一些条件呢？</font></font></p>

<pre><code>var condition = true<font></font>
for (var i = 0 ; i &lt; Args.length &amp;&amp; condition ; i++) {<font></font>
    for (var j = 0 ; j &lt; Args[i].length &amp;&amp; condition ; j++) {<font></font>
        if (Args[i].obj[j] == "[condition]") {<font></font>
            condition = false<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样你就可以停下来</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，使用Typescript，我们可以使用some（）来遍历数组，并在满足条件时停止，因此我的代码如下所示：</font></font></p>

<pre><code>Args.some((listObj) =&gt; {<font></font>
    return listObj.some((obj) =&gt; {<font></font>
        return !(obj == "[condition]")<font></font>
    })<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，循环在满足条件后立即停止</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提醒：此代码在TypeScript中运行</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经先前提到的通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">swilliams</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但与以下（JavaScript）的一个例子：</font></font></p>

<pre><code>// Function wrapping inner for loop<font></font>
function CriteriaMatch(record, criteria) {<font></font>
  for (var k in criteria) {<font></font>
    if (!(k in record))<font></font>
      return false;<font></font>
<font></font>
    if (record[k] != criteria[k])<font></font>
      return false;<font></font>
  }<font></font>
<font></font>
  return true;<font></font>
}<font></font>
<font></font>
// Outer for loop implementing continue if inner for loop returns false<font></font>
var result = [];<font></font>
<font></font>
for (var i = 0; i &lt; _table.length; i++) {<font></font>
  var r = _table[i];<font></font>
<font></font>
  if (!CriteriaMatch(r[i], criteria))<font></font>
    continue;<font></font>
<font></font>
  result.add(r);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>XXX.Validation = function() {<font></font>
    var ok = false;<font></font>
loop:<font></font>
    do {<font></font>
        for (...) {<font></font>
            while (...) {<font></font>
                if (...) {<font></font>
                    break loop; // Exist the outermost do-while loop<font></font>
                }<font></font>
                if (...) {<font></font>
                    continue; // skips current iteration in the while loop<font></font>
                }<font></font>
            }<font></font>
        }<font></font>
        if (...) {<font></font>
            break loop;<font></font>
        }<font></font>
        if (...) {<font></font>
            break loop;<font></font>
        }<font></font>
        if (...) {<font></font>
            break loop;<font></font>
        }<font></font>
        if (...) {<font></font>
            break loop;<font></font>
        }<font></font>
        ok = true;<font></font>
        break;<font></font>
    } while(true);<font></font>
    CleanupAndCallbackBeforeReturning(ok);<font></font>
    return ok;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝梅神乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Coffeescript，则有一个方便的“ do”关键字，它使定义和立即执行匿名函数变得更加容易：</font></font></p>

<pre><code>do -&gt;<font></font>
  for a in first_loop<font></font>
    for b in second_loop<font></font>
      if condition(...)<font></font>
        return<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...因此您只需使用“返回”即可退出循环。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将循环推到极限</font></font></p>

<pre><code>    for(var a=0; a&lt;data_a.length; a++){<font></font>
       for(var b=0; b&lt;data_b.length; b++){<font></font>
           for(var c=0; c&lt;data_c.length; c++){<font></font>
              for(var d=0; d&lt;data_d.length; d++){<font></font>
                 a =  data_a.length;<font></font>
                 b =  data_b.length;<font></font>
                 c =  data_b.length;<font></font>
                 d =  data_d.length;<font></font>
            }<font></font>
         }<font></font>
       }<font></font>
     }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我参加聚会有点晚，但是下面是与语言无关的方法，它不使用GOTO /标签或函数包装：</font></font></p>

<pre><code>for (var x = Set1.length; x &gt; 0; x--)<font></font>
{<font></font>
   for (var y = Set2.length; y &gt; 0; y--)<font></font>
   {<font></font>
      for (var z = Set3.length; z &gt; 0; z--)<font></font>
      {<font></font>
          z = y = -1; // terminates second loop<font></font>
          // z = y = x = -1; // terminate first loop<font></font>
      }<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从正面看，它自然流动，这将使非GOTO人群感到满意。</font><font style="vertical-align: inherit;">不利的一面是，内部循环需要在终止之前完成当前迭代，因此在某些情况下可能不适用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全不使用中断，没有中止标志以及没有任何额外条件检查的情况如何。</font><font style="vertical-align: inherit;">此版本仅</font></font><code>Number.MAX_VALUE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在满足条件时</font><font style="vertical-align: inherit;">爆炸循环变量（使它们成为变量</font><font style="vertical-align: inherit;">），并强制所有循环优雅地终止。</font></font></p>

<pre><code>// No breaks needed<font></font>
for (var i = 0; i &lt; 10; i++) {<font></font>
  for (var j = 0; j &lt; 10; j++) {<font></font>
    if (condition) {<font></font>
      console.log("condition met");<font></font>
      i = j = Number.MAX_VALUE; // Blast the loop variables<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于递减类型的嵌套循环，有一个类似的答案，但这对递增类型的嵌套循环有效，而无需为简单循环考虑每个循环的终止值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个例子：</font></font></p>

<pre><code>// No breaks needed<font></font>
for (var i = 0; i &lt; 89; i++) {<font></font>
  for (var j = 0; j &lt; 1002; j++) {<font></font>
    for (var k = 0; k &lt; 16; k++) {<font></font>
      for (var l = 0; l &lt; 2382; l++) {<font></font>
        if (condition) {<font></font>
          console.log("condition met");<font></font>
          i = j = k = l = Number.MAX_VALUE; // Blast the loop variables<font></font>
        }<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单：</font></font></p>

<pre><code>var a = [1, 2, 3];<font></font>
var b = [4, 5, 6];<font></font>
var breakCheck1 = false;<font></font>
<font></font>
for (var i in a) {<font></font>
    for (var j in b) {<font></font>
        breakCheck1 = true;<font></font>
        break;<font></font>
    }<font></font>
    if (breakCheck1) break;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三伽罗Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这是一个非常老的话题，但是由于我的标准方法尚不成熟，因此我认为我已将其发布给未来的Google员工。</font></font></p>

<pre><code>var a, b, abort = false;<font></font>
for (a = 0; a &lt; 10 &amp;&amp; !abort; a++) {<font></font>
    for (b = 0; b &lt; 10 &amp;&amp; !abort; b++) {<font></font>
        if (condition) {<font></font>
            doSomeThing();<font></font>
            abort = true;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其包装在一个函数中，然后将其包装</font></font><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是打破JavaScript嵌套循环的五种方法：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）将父循环设置为结尾</font></font></strong></p>

<pre><code>for (i = 0; i &lt; 5; i++)<font></font>
{<font></font>
    for (j = 0; j &lt; 5; j++)<font></font>
    {<font></font>
        if (j === 2)<font></font>
        {<font></font>
            i = 5;<font></font>
            break;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）使用标签</font></font></strong></p>

<pre><code>exit_loops:<font></font>
for (i = 0; i &lt; 5; i++)<font></font>
{<font></font>
    for (j = 0; j &lt; 5; j++)<font></font>
    {<font></font>
        if (j === 2)<font></font>
            break exit_loops;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）使用变量</font></font></strong></p>

<pre><code>var exit_loops = false;<font></font>
for (i = 0; i &lt; 5; i++)<font></font>
{<font></font>
    for (j = 0; j &lt; 5; j++)<font></font>
    {<font></font>
        if (j === 2)<font></font>
        {<font></font>
            exit_loops = true;<font></font>
            break;<font></font>
        }<font></font>
    }<font></font>
    if (exit_loops)<font></font>
        break;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）使用自我执行功能</font></font></strong></p>

<pre><code>(function()<font></font>
{<font></font>
    for (i = 0; i &lt; 5; i++)<font></font>
    {<font></font>
        for (j = 0; j &lt; 5; j++)<font></font>
        {<font></font>
             if (j === 2)<font></font>
                 return;<font></font>
        }<font></font>
    }<font></font>
})();<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5）使用常规功能</font></font></strong></p>

<pre><code>function nested_loops()<font></font>
{<font></font>
    for (i = 0; i &lt; 5; i++)<font></font>
    {<font></font>
        for (j = 0; j &lt; 5; j++)<font></font>
        {<font></font>
             if (j === 2)<font></font>
                 return;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
nested_loops();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像Perl一样</font></font></p>

<pre><code>loop1:<font></font>
    for (var i in set1) {<font></font>
loop2:<font></font>
        for (var j in set2) {<font></font>
loop3:<font></font>
            for (var k in set3) {<font></font>
                break loop2;  // breaks out of loop3 and loop2<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如EMCA-262第12.12节所定义。</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/label" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[MDN文件]</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与C不同，这些标签只能用于</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/continue" rel="noreferrer"><code>continue</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/break" rel="noreferrer"><code>break</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而Javascript没有</font></font><code>goto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
