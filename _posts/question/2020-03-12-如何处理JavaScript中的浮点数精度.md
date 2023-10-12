---
layout: question
title:  如何处理JavaScript中的浮点数精度？
date:   2020-03-12T03:13:47.000Z
description: 我有以下虚拟测试脚本：function test() {  var x = 0.1 \* 0.2;  document.write(x);}...
img: 
author: 老丝Tom
category: question
answer: 22
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下虚拟测试脚本：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function test() {<font></font>
  var x = 0.1 * 0.2;<font></font>
  document.write(x);<font></font>
}<font></font>
test();</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将打印结果，</font></font><code>0.020000000000000004</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而仅打印结果</font></font><code>0.02</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果使用计算器）。</font><font style="vertical-align: inherit;">据我了解，这是由于浮点乘法精度的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人有一个好的解决方案，这样在这种情况下我可以获得正确的结果</font></font><code>0.02</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我知道还有类似的函数，</font></font><code>toFixed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者四舍五入是另一种可能性，但是我真的想在不进行任何四舍五入的情况下打印出完整的数字。</font><font style="vertical-align: inherit;">只想知道你们中的一个人是否有一些不错的，优雅的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，否则我将四舍五入到大约10位数字。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第933篇《如何处理JavaScript中的浮点数精度？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时添加两个浮点值时，它永远不会给出精确的值，因此我们需要将此值固定为一定的数字，这将有助于我们进行比较。</font></font></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">


console.log（（parseFloat（0.1）+ parseFloat（0.2））。toFixed（1）== parseFloat（0.3）.toFixed（1））;

    </font></font></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>function round_up( value, precision ) { <font></font>
    var pow = Math.pow ( 10, precision ); <font></font>
    return ( Math.ceil ( pow * value ) + Math.ceil ( pow * value - Math.ceil ( pow * value ) ) ) / pow; <font></font>
}<font></font>
<font></font>
round_up(341.536, 2); // 341.54<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font></p>

<pre><code>var x = 0.1*0.2;<font></font>
 x =Math.round(x*Math.pow(10,2))/Math.pow(10,2);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不太优雅，但能胜任工作（删除结尾的零）</font></font></p>

<pre><code>var num = 0.1*0.2;<font></font>
alert(parseFloat(num.toFixed(10))); // shows 0.02<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用编号（1.234443）.toFixed（2）; </font><font style="vertical-align: inherit;">它将打印1.23</font></font></p>

<pre><code>function test(){<font></font>
    var x = 0.1 * 0.2;<font></font>
    document.write(Number(x).toFixed(2));<font></font>
}<font></font>
test();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗西门小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在mod 3上遇到了一个令人讨厌的舍入错误问题。有时，当我得到0时，我会得到.000 ... 01。</font><font style="vertical-align: inherit;">这很容易处理，只需测试&lt;= .01。</font><font style="vertical-align: inherit;">但是有时候我会得到2.99999999999998。</font><font style="vertical-align: inherit;">哎哟！</font></font></p>

<p><a href="https://github.com/MikeMcl/bignumber.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BigNumbers</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了该问题，但引入了另一个具有讽刺意味的问题。</font><font style="vertical-align: inherit;">尝试将8.5加载到BigNumbers中时，我得知它实际上是8.4999…，并且有15个以上的有效数字。</font><font style="vertical-align: inherit;">这意味着BigNumbers无法接受它（我相信我提到这个问题有点讽刺意味）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决讽刺问题的简单方法：</font></font></p>

<pre><code>x = Math.round(x*100);<font></font>
// I only need 2 decimal places, if i needed 3 I would use 1,000, etc.<font></font>
x = x / 100;<font></font>
xB = new BigNumber(x);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能完全使用二进制浮点类型（这是ECMAScript用来表示浮点值）来精确表示大多数小数部分。</font><font style="vertical-align: inherit;">因此，除非您使用任意精度的算术类型或基于十进制的浮点类型，否则没有一个好的解决方案。</font><font style="vertical-align: inherit;">例如，</font></font><a href="http://blogs.msdn.com/b/oldnewthing/archive/2004/05/25/141253.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows附带的Calculator应用程序现在使用任意精度算法来解决此问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><img src="https://i.stack.imgur.com/gWE8D.png" alt="在此处输入图片说明">    </p>



<pre class="lang-html prettyprint-override"><code>    You can use library https://github.com/MikeMcl/decimal.js/. <font></font>
    it will   help  lot to give proper solution. <font></font>
    javascript console output 95 *722228.630 /100 = 686117.1984999999<font></font>
    decimal library implementation <font></font>
    var firstNumber = new Decimal(95);<font></font>
    var secondNumber = new Decimal(722228.630);<font></font>
    var thirdNumber = new Decimal(100);<font></font>
    var partialOutput = firstNumber.times(secondNumber);<font></font>
    console.log(partialOutput);<font></font>
    var output = new Decimal(partialOutput).div(thirdNumber);<font></font>
    alert(output.valueOf());<font></font>
    console.log(output.valueOf())== 686117.1985<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试一下我的Chiliadic算术库，您可以</font></font><a href="http://www.daniweb.com/forums/thread222006.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您想要更高的版本，我可以帮助您。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下</font></font><a href="http://en.wikipedia.org/wiki/Fixed-point_arithmetic" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定点算法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您要操作的数字范围较小（例如，货币），则可能会解决您的问题。</font><font style="vertical-align: inherit;">我会将其四舍五入为几个十进制值，这是最简单的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没错，原因是浮点数的精度有限。</font><font style="vertical-align: inherit;">将有理数存储为两个整数的除法，在大多数情况下，您将能够存储数字而不会造成任何精度损失。</font><font style="vertical-align: inherit;">在打印时，您可能希望将结果显示为分数。</font><font style="vertical-align: inherit;">通过我提出的代表性，它变得微不足道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，这对于无理数不会有太大帮助。</font><font style="vertical-align: inherit;">但是，您可能希望以它们引起最少问题的方式优化计算（例如，检测诸如的情况）</font></font><code>sqrt(3)^2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免这种情况，您应该使用整数值而不是浮点数。</font><font style="vertical-align: inherit;">因此，当您要使用2个位置精度* 100时，请为3个位置使用1000。在显示时，请使用格式化程序放置分隔符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多系统都忽略了以这种方式使用小数的方法。</font><font style="vertical-align: inherit;">这就是为什么许多系统使用美分（作为整数）而不是美元/欧元（作为浮点数）的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>parseFloat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>toFixed()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要绕过此问题进行较小的操作：</font></font></p>

<pre><code>a = 0.1;<font></font>
b = 0.2;<font></font>
<font></font>
a + b = 0.30000000000000004;<font></font>
<font></font>
c = parseFloat((a+b).toFixed(2));<font></font>
<font></font>
c = 0.3;<font></font>
<font></font>
a = 0.3;<font></font>
b = 0.2;<font></font>
<font></font>
a - b = 0.09999999999999998;<font></font>
<font></font>
c = parseFloat((a-b).toFixed(2));<font></font>
<font></font>
c = 0.1;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不同语言，处理器和操作系统的浮点实现中，您获得的结果是正确且相当一致的-唯一改变的是浮点实际上是双精度（或更高）时的不准确性级别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0.1的二进制浮点数就像1/3的十进制数（即永远为0.3333333333333 ...），没有精确的处理方法。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要处理浮点数，则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总是会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望出现较小的舍入误差，因此，您还必须始终将显示的结果舍入到合理的值。</font><font style="vertical-align: inherit;">作为回报，您将获得非常非常快速且强大的算法，因为所有计算都在处理器的本机二进制文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数情况下，解决方案不是切换到定点算法，主要是因为它要慢得多，而且99％的时间中您根本不需要精度。</font><font style="vertical-align: inherit;">如果您要处理的是确实需要这种准确性的东西（例如金融交易），那么Javascript可能不是最佳的使用工具（因为您要强制使用定点类型，因此使用静态语言可能会更好） ）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在寻找一种优雅的解决方案，然后恐怕就是这样：浮点数很快，但是舍入误差很小-在显示结果时总是舍入到合理的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0.6 * 3太棒了！））对我来说，这很好用：</font></font></p>

<pre><code>function dec( num )<font></font>
{<font></font>
    var p = 100;<font></font>
    return Math.round( num * p ) / p;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常非常简单））</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">phpjs.org上的round（）函数很好地工作：</font><a href="http://phpjs.org/functions/round"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://phpjs.org/functions/round</font></font><a href="http://phpjs.org/functions/round"><font style="vertical-align: inherit;"></font></a> </p>

<pre><code>num = .01 + .06;  // yields 0.0699999999999<font></font>
rnum = round(num,12); // yields 0.07<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意，对于一般用途，此行为可能是可以接受的。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
比较那些浮点值以确定适当的操作时会出现问题。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
   随着ES6的到来，</font></font><code>Number.EPSILON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">了一个新的常量</font><font style="vertical-align: inherit;">来确定可接受的误差范围：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，而不是像这样执行比较</font></font></p>

<pre><code>0.1 + 0.2 === 0.3 // which returns false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以定义一个自定义比较功能，如下所示：</font></font></p>

<pre><code>function epsEqu(x, y) {<font></font>
    return Math.abs(x - y) &lt; Number.EPSILON;<font></font>
}<font></font>
console.log(epsEqu(0.1+0.2, 0.3)); // true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font><a href="http://2ality.com/2015/04/numbers-math-es6.html#numberepsilon" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://2ality.com/2015/04/numbers-math-es6.html#numberepsilon" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//2ality.com/2015/04/numbers-math-es6.html#numberepsilon</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要确定自己实际需要多少个小数位-不能再吃蛋糕了:-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次执行进一步的操作时，都会累积数值误差，如果您不尽早将其切断，它将不断增加。</font><font style="vertical-align: inherit;">数字库显示的结果看起来很干净，每一步都将最后两位数字截断，数字协处理器出于相同的原因也具有“正常”和“完全”长度。</font><font style="vertical-align: inherit;">Cuf-off对处理器而言很便宜，但对您而言在脚本中非常昂贵（乘法，除法和使用pov（...））。</font><font style="vertical-align: inherit;">好的数学库会提供floor（x，n）为您做截止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，至少您应该使用pov（10，n）来使全局变量/常量成为常量-这意味着您决定了所需的精度:-)然后执行：</font></font></p>

<pre><code>Math.floor(x*PREC_LIM)/PREC_LIM  // floor - you are cutting off, not rounding
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以继续进行数学运算，并且仅在最后进行截止-假设您仅显示结果而不对if-s进行运算。</font><font style="vertical-align: inherit;">如果可以这样做，那么.toFixed（...）可能会更有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要进行if-s /比较，并且不希望减少，则还需要一个小的常数，通常称为eps，该常数比最大期望误差高一个小数位。</font><font style="vertical-align: inherit;">假设您的截止数是最后两位小数-那么您的eps在最后一位的第三位（最低有效位第三），您可以使用它来比较结果是否在预期的eps范围内（0.02 -eps &lt;0.1 * 0.2 &lt;0.02 + eps）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var times = function (a, b) {<font></font>
    return Math.round((a * b) * 100)/100;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- -要么 - -</font></font></p>

<pre><code>var fpFix = function (n) {<font></font>
    return Math.round(n * 100)/100;<font></font>
};<font></font>
<font></font>
fpFix(0.1*0.2); // -&gt; 0.02<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- -也 - -</font></font></p>

<pre><code>var fpArithmetic = function (op, x, y) {<font></font>
    var n = {<font></font>
            '*': x * y,<font></font>
            '-': x - y,<font></font>
            '+': x + y,<font></font>
            '/': x / y<font></font>
        }[op];        <font></font>
<font></font>
    return Math.round(n * 100)/100;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">---如-</font></font></p>

<pre><code>fpArithmetic('*', 0.1, 0.2);<font></font>
// 0.02<font></font>
<font></font>
fpArithmetic('+', 0.1, 0.2);<font></font>
// 0.3<font></font>
<font></font>
fpArithmetic('-', 0.1, 0.2);<font></font>
// -0.1<font></font>
<font></font>
fpArithmetic('/', 0.2, 0.1);<font></font>
// 2<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在寻找</font></font><code>sprintf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">实现，以便您可以以期望的格式写出带有小错误的浮点数（因为它们以二进制格式存储）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="http://www.diveintojavascript.com/projects/javascript-sprintf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript-sprintf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将这样称呼它：</font></font></p>

<pre><code>var yourString = sprintf("%.2f", yourNumber);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以小数点后两位小数的形式打印您的数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  如果您不想仅出于浮点舍入到给定精度的目的而添加更多文件，</font><font style="vertical-align: inherit;">也可以将   </font></font><a href="http://www.w3schools.com/jsref/jsref_tofixed.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Number.toFixed（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于显示目的。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢Pedro Ladaria的解决方案，并使用类似的方法。</font></font></p>

<pre><code>function strip(number) {<font></font>
    return (parseFloat(number).toPrecision(12));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Pedros解决方案不同，此函数将舍入为0.999 ...重复，并且精确到最低有效数字的正负一一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：处理32或64位浮点数时，应使用toPrecision（7）和toPrecision（15）以获得最佳结果。</font><font style="vertical-align: inherit;">有关</font></font><a href="https://stackoverflow.com/questions/28045787/how-many-decimal-places-does-the-primitive-float-and-double-support"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的信息，</font><font style="vertical-align: inherit;">请参</font><a href="https://stackoverflow.com/questions/28045787/how-many-decimal-places-does-the-primitive-float-and-double-support"><font style="vertical-align: inherit;">见此问题</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC64419478</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只执行乘法吗？</font><font style="vertical-align: inherit;">如果是这样，那么您可以利用有关十进制算术的巧妙秘密。</font><font style="vertical-align: inherit;">就是那个</font></font><code>NumberOfDecimals(X) + NumberOfDecimals(Y) = ExpectedNumberOfDecimals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就是说，如果有的</font></font><code>0.123 * 0.12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话，我们知道会有5个小数位，因为</font></font><code>0.123</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有3个小数位和</font></font><code>0.12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2 </font><font style="vertical-align: inherit;">个小数位</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，如果JavaScript为我们提供了一个数字，例如</font></font><code>0.014760000002</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以安全地舍入到小数点后第五位，而不必担心失去精度。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
