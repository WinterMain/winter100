---
layout: question
title:  在JavaScript中将数字转换为字符串的最佳方法是什么？
date:   2020-03-12T09:56:25.000Z
description: 将数字转换为字符串的“最佳”方法是什么（就速度优势，清晰度优势，内存优势等而言）？一些例子：String(n)n.toString()""+...
img: 
author: 路易GO
category: question
answer: 20
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将数字转换为字符串的“最佳”方法是什么（就速度优势，清晰度优势，内存优势等而言）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子：</font></font></p>

<ol>
<li><p><code>String(n)</code></p></li>
<li><p><code>n.toString()</code></p></li>
<li><p><code>""+n</code></p></li>
<li><p><code>n+""</code></p></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1245篇《在JavaScript中将数字转换为字符串的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于数字文字，用于访问属性的点必须与小数点区分开。</font><font style="vertical-align: inherit;">如果要在数字文字1​​23上调用String（），则可以使用以下选项：</font></font></p>

<pre><code>123..toString()<font></font>
123 .toString() // space before the dot 123.0.toString()<font></font>
(123).toString()<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是在JS中将Integer转换为String的方法</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些方法按性能的降序排列。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（性能测试结果由@DarckBlezzer在他的答案中给出）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var num = 1</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">num =`$ {num}`</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">num = num +''</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法3：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">num =字符串（num）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法4：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">num = num.toString（）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能直接从数字中调用tostring（）</font></font></strong> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.toString（）将抛出未捕获的SyntaxError</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：无效或意外的令牌</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有时间，我将使用更多数据重新编辑此文件，因为现在很好...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Node.js v8.11.2中进行测试：2018/06/06</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let i=0;<font></font>
    console.time("test1")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = "" + 1234;<font></font>
    }<font></font>
    console.timeEnd("test1")<font></font>
    <font></font>
    i=0;<font></font>
    console.time("test1.1")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = '' + 1234;<font></font>
    }<font></font>
    console.timeEnd("test1.1")<font></font>
    <font></font>
    i=0;<font></font>
    console.time("test1.2")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = `` + 1234;<font></font>
    }<font></font>
    console.timeEnd("test1.2")<font></font>
    <font></font>
    i=0;<font></font>
    console.time("test1.3")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = 1234 +  '';<font></font>
    }<font></font>
    console.timeEnd("test1.3")<font></font>
    <font></font>
    <font></font>
    i=0;<font></font>
    console.time("test2")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = (1234).toString();<font></font>
    }<font></font>
    console.timeEnd("test2")<font></font>
    <font></font>
    <font></font>
    i=0;<font></font>
    console.time("test3")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = String(1234);<font></font>
    }<font></font>
    console.timeEnd("test3")<font></font>
    <font></font>
    <font></font>
    i=0;<font></font>
    console.time("test4")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = `${1234}`;<font></font>
    }<font></font>
    console.timeEnd("test4")<font></font>
    <font></font>
    i=0;<font></font>
    console.time("test5")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = 1234..toString();<font></font>
    }<font></font>
    console.timeEnd("test5")<font></font>
    <font></font>
    i=0;<font></font>
    console.time("test6")<font></font>
    for(;i&lt;10000000;i=i+1){<font></font>
    	const string = 1234 .toString();<font></font>
    }<font></font>
    console.timeEnd("test6")</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font></strong> </p>

<pre><code>test1: 72.268ms<font></font>
test1.1: 61.086ms<font></font>
test1.2: 66.854ms<font></font>
test1.3: 63.698ms<font></font>
test2: 207.912ms<font></font>
test3: 81.987ms<font></font>
test4: 59.752ms<font></font>
test5: 213.136ms<font></font>
test6: 204.869ms<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>toFixed()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也会解决目的。</font></font></p>

<pre><code>var n = 8.434332;<font></font>
n.toFixed(2)  // 8.43<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们还可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数。</font><font style="vertical-align: inherit;">根据</font></font><a href="http://jsben.ch/ghQYR" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此基准</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即使比</font></font><code>
" + num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">流行的浏览器Google Chrome </font><font style="vertical-align: inherit;">慢</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">它也是在Firefox 58中将数字转换为字符串的最快方法</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚遇到这个问题，方法3和4不适合，因为如何复制字符串然后将它们放在一起。</font><font style="vertical-align: inherit;">对于小型程序而言，此问题无关紧要，但是对于任何实际的Web应用程序，我们必须处理频率字符串操作的此操作可能会影响性能和可读性。</font></font></p>

<p><a href="https://blog.codinghorror.com/the-sad-tragedy-of-micro-optimization-theater/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是读取的链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以先调用</font></font><code>Number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">object，然后调用</font></font><code>toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>Number.call(null, n).toString()</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将此技巧用于其他javascript本机对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您好奇哪个是性能最高的，请查看此处比较所有不同的Number-&gt; String转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font><code>2+''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>2+""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的。</font></font></p>

<p><a href="https://jsperf.com/int-2-string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsperf.com/int-2-string</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我不得不考虑所有因素，我建议   </font></font></p>

<pre><code>var myint = 1;<font></font>
var mystring = myint + '';<font></font>
/*or int to string*/<font></font>
myint = myint + ''<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言，它是最快的方式转换为字符串。</font><font style="vertical-align: inherit;">如果我错了，请纠正我。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Near米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.toString（）是内置的类型转换函数，我对此并不熟练，但是每当我们比较内置类型转换和显式方法时，总是首选内置解决方法。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://jsperf.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsperf.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为以下情况创建了一个测试用例：</font></font></p>

<pre><code>number + ''<font></font>
`${number}`<font></font>
String(number)<font></font>
number.toString()<font></font>
</code></pre>

<p><a href="https://jsperf.com/number-string-conversion-speed-comparison" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsperf.com/number-string-conversion-speed-comparison</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2018年7月24日，结果表明这</font></font><code>number + ''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Chrome中最快的，与模板字符串文字相关联的Firefox。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者</font></font><code>String(number)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font></font><code>number.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比最快的选项慢95％左右。</font></font></p>

<p><a href="https://i.stack.imgur.com/mPxVd.png" rel="noreferrer"><img src="https://i.stack.imgur.com/mPxVd.png" alt="性能测试，如上所述"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这取决于情况，但是无论如何您都可以使用该</font></font><code>.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，因为它很容易理解。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢前两个，因为它们更易于阅读。</font><font style="vertical-align: inherit;">我倾向于使用，</font></font><code>String(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这仅是样式问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那就是除非你有一行</font></font></p>

<pre><code>var n = 5;<font></font>
console.log ("the number is: " + n);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是很自我解释的</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>var foo = 45;<font></font>
var bar = '' + foo;<font></font>
</code></pre>

<p>Actually, even though I typically do it like this for simple convenience, over 1,000s of iterations it appears <strong>for raw speed there is an advantage for <code>.toString()</code></strong></p>

<p>See Performance tests here (not by me, but found when I went to write my own):
<a href="http://jsben.ch/#/ghQYR">http://jsben.ch/#/ghQYR</a></p>

<p>Fastest based on the JSPerf test above: <code>str = num.toString();</code></p>

<p><em>It should be noted</em> that the difference in speed is not overly significant when you consider that it can do the conversion any way <strong>1 Million times in 0.1 seconds</strong>.</p>

<p><strong>Update:</strong> The speed seems to differ greatly by browser.  In Chrome <code>num + ''</code> seems to be fastest based on this test <a href="http://jsben.ch/#/ghQYR">http://jsben.ch/#/ghQYR</a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次根据我上面的测试，应该注意到Firefox 20.0.1的执行</font></font><code>.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速度比</font></font><code>'' + num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">慢约100倍</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要</font><font style="vertical-align: inherit;">将结果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为特定</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的小数位数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如代表货币），则需要类似</font></font><code>toFixed()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法的方法。</font></font></p>

<pre><code>number.toFixed( [digits] )
</code></pre>

<p><code>digits</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是小数点后显示的位数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><code>n.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该奖项以其清晰为目的，我认为它没有任何额外的开销。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... JavaScript的解析器尝试将数字上的点符号解析为浮点文字。</font></font></p>
</blockquote>

<pre><code>2..toString(); // the second point is correctly recognized<font></font>
2 .toString(); // note the space left to the dot<font></font>
(2).toString(); // 2 is evaluated first<font></font>
</code></pre>

<p><a href="http://bonsaiden.github.io/JavaScript-Garden/#object.general" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">舌头很明显：</font></font></em></p>

<pre><code>var harshNum = 108;<font></font>
"".split.call(harshNum,"").join("");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者在ES6中，您可以简单地使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板字符串</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var harshNum = 108;<font></font>
`${harshNum}`;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于该语言的新手来说，显式转换非常明显。</font><font style="vertical-align: inherit;">正如其他人所建议的那样，如果开发人员不了解强制规则，则使用类型强制会导致歧义。</font><font style="vertical-align: inherit;">最终，开发人员的时间要比CPU时间花费更多，因此我会以后者为代价对前者进行优化。</font><font style="vertical-align: inherit;">话虽这么说，这种情况下的差异可能微不足道，但是如果不是这样的话，我敢肯定，有一些不错的JavaScript压缩器可以优化这种情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，出于上述原因，我建议使用：</font></font><code>n.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>String(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font><code>String(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是一个更好的选择，因为如果</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为null或未定义，</font><font style="vertical-align: inherit;">它不会失败</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案已经涵盖了其他选项，但我更喜欢以下选项：</font></font></p>

<pre><code>s = `${n}`
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短，简洁，已经在其他许多地方使用（如果您使用的是现代框架/ ES版本），因此可以肯定，任何程序员都可以理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是（通常）有多大关系，但</font><font style="vertical-align: inherit;">与</font><a href="https://jsperf.com/number-to-string/53" rel="noreferrer"><font style="vertical-align: inherit;">其他方法</font></a><font style="vertical-align: inherit;">相比</font><font style="vertical-align: inherit;">，它似乎是</font></font><a href="https://jsperf.com/number-to-string/76" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的</font></font></a><font style="vertical-align: inherit;"></font><a href="https://jsperf.com/number-to-string/53" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
