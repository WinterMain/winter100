---
layout: question
title:  验证JavaScript中的十进制数字-IsNumeric（）
date:   2020-03-09T09:52:13.000Z
description: 在JavaScript中验证十进制数字的最干净，最有效的方法是什么？奖励积分：明晰。解决方案应该干净简单。跨平台。测试用例：01. ...
img: 
author: 小胖Gil
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中验证十进制数字的最干净，最有效的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖励积分：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明晰。</font><font style="vertical-align: inherit;">解决方案应该干净简单。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨平台。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试用例：</font></font></p>

<pre><code>01. IsNumeric('-1')      =&gt; true<font></font>
02. IsNumeric('-1.5')    =&gt; true<font></font>
03. IsNumeric('0')       =&gt; true<font></font>
04. IsNumeric('0.42')    =&gt; true<font></font>
05. IsNumeric('.42')     =&gt; true<font></font>
06. IsNumeric('99,999')  =&gt; false<font></font>
07. IsNumeric('0x89f')   =&gt; false<font></font>
08. IsNumeric('#abcdef') =&gt; false<font></font>
09. IsNumeric('1.2.3')   =&gt; false<font></font>
10. IsNumeric('')        =&gt; false<font></font>
11. IsNumeric('blah')    =&gt; false<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>isNumeric=(el)=&gt;{return Boolean(parseFloat(el)) &amp;&amp; isFinite(el)}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没什么不同，但是我们可以使用布尔构造函数</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function inNumeric(n){<font></font>
   return Number(n).toString() === n;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果n为数字，</font></font><code>Number(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将返回数字值并将</font></font><code>toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其返回为字符串。</font><font style="vertical-align: inherit;">但是，如果n不为数字，</font></font><code>Number(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将返回，</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此它将与原始值不匹配</font></font><code>n</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有答案返回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空字符串，对此的解决方法是...</font></font></p>

<pre><code>function is_numeric(n)<font></font>
{<font></font>
 return (n != '' &amp;&amp; !isNaN(parseFloat(n)) &amp;&amp; isFinite(n));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案</font></font></p>

<pre><code>function isNumeric(input) {<font></font>
    var number = /^\-{0,1}(?:[0-9]+){0,1}(?:\.[0-9]+){0,1}$/i;<font></font>
    var regex = RegExp(number);<font></font>
    return regex.test(input) &amp;&amp; input.length&gt;0;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎适用于所有情况，但我可能是错的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用更简单的解决方案：</font></font></p>

<pre><code>function isNumber(num) {<font></font>
    return parseFloat(num).toString() == num<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的一点点改进版本（可能是最快的方式），而不是确切的jQuery变体，我真的不知道他们为什么不使用这个版本：</font></font></p>

<pre><code>function isNumeric(val) {<font></font>
    return !isNaN(+val) &amp;&amp; isFinite(val);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery版本的缺点是，如果您传递带有前导数字和后缀字母的字符串（如）</font></font><code>"123abc"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>parseFloat | parseInt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则会提取出数字分数并返回123，但是，第二个保护措施</font></font><code>isFinite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何都会使它失败。</font><font style="vertical-align: inherit;">使用一元运算</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符时，它将在第一个后卫上死亡，因为+会给此类混合动力抛出NaN :)一点点的性能，但我认为这是可靠的语义收益。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为parseFloat函数可以在这里完成所有工作。</font><font style="vertical-align: inherit;">以下功能通过了此页面上的所有测试，包括</font></font><code>isNumeric(Infinity) == true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function isNumeric(n) {<font></font>
<font></font>
    return parseFloat(n) == n;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我没有记错的话，那么它应该匹配任何有效的JavaScript数字值，但不包括常量（</font></font><code>Infinity</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和符号运算符</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为就我而言，它们实际上并不是数字的一部分，因此它们是单独的运算符）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要用它作为令牌生成器，在其中不能将数字发送给JavaScript进行评估...绝对不是最短的正则表达式，但是我相信它可以捕获JavaScript数字语法的所有细微差别。</font></font></p>

<pre><code>/^(?:(?:(?:[1-9]\d*|\d)\.\d*|(?:[1-9]\d*|\d)?\.\d+|(?:[1-9]\d*|\d)) <font></font>
(?:[e]\d+)?|0[0-7]+|0x[0-9a-f]+)$/i<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效数字包括：</font></font></strong></p>

<pre><code> - 0<font></font>
 - 00<font></font>
 - 01<font></font>
 - 10<font></font>
 - 0e1<font></font>
 - 0e01<font></font>
 - .0<font></font>
 - 0.<font></font>
 - .0e1<font></font>
 - 0.e1<font></font>
 - 0.e00<font></font>
 - 0xf<font></font>
 - 0Xf<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的数字将是</font></font></strong></p>

<pre><code> - 00e1<font></font>
 - 01e1<font></font>
 - 00.0<font></font>
 - 00x0<font></font>
 - .<font></font>
 - .e0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>return (input - 0) == input &amp;&amp; input.length &gt; 0;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有为我工作。</font><font style="vertical-align: inherit;">当我发出警报并进行测试时，</font></font><code>input.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我认为没有属性可以检查整数长度。</font><font style="vertical-align: inherit;">所以我所做的是</font></font></p>

<pre><code>var temp = '' + input;<font></font>
return (input - 0) == input &amp;&amp; temp.length &gt; 0;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到原始问题没有提到jQuery，但是如果您使用jQuery，则可以执行以下操作：</font></font></p>

<pre><code>$.isNumeric(val)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单。</font></font></p>

<p><a href="https://api.jquery.com/jQuery.isNumeric/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://api.jquery.com/jQuery.isNumeric/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（自jQuery 1.7起）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需RegExp即可完成，因为 </font></font></p>

<pre><code>function IsNumeric(data){<font></font>
    return parseFloat(data)==data;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用功能</font></font><code>isNaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我相信，如果您</font></font><code>!isNaN(yourstringhere)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此进行</font><font style="vertical-align: inherit;">测试，</font><font style="vertical-align: inherit;">则可以在任何情况下正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">啊！</font><font style="vertical-align: inherit;">不要听正则表达式的答案。</font><font style="vertical-align: inherit;">正则表达式对此很讨厌，我不只是在谈论性能。</font><font style="vertical-align: inherit;">使用正则表达式使微妙，不可能发现错误非常容易。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不能使用</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这应该会更好：</font></font></p>

<pre><code>function IsNumeric(input)<font></font>
{<font></font>
    return (input - 0) == input &amp;&amp; (''+input).trim().length &gt; 0;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运作方式如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>(input - 0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式会强制JavaScript在输入值上进行强制转换。</font><font style="vertical-align: inherit;">首先必须将其解释为减法运算的数字。</font><font style="vertical-align: inherit;">如果该转换为数字失败，则表达式将为</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后</font><font style="vertical-align: inherit;">将此</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数字</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果与您传入的原始值进行比较。由于左侧现在是数字，因此再次使用强制类型。</font><font style="vertical-align: inherit;">现在，将双方的输入都从相同的原始值强制转换为相同的类型，您将认为它们应该始终相同（始终为true）。</font><font style="vertical-align: inherit;">但是，有一条特殊的规则说</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永远不等于</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不能转换为数字的值（只有不能转换为数字的值）将导致错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长度检查是针对涉及空字符串的特殊情况。</font><font style="vertical-align: inherit;">还要注意，它取决于您的0x89f测试，但这是因为在许多环境中，这是定义数字文字的一种好方法。</font><font style="vertical-align: inherit;">如果要赶上特定情况，可以添加其他检查。</font><font style="vertical-align: inherit;">更好的是，如果这是您不使用的原因，</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么只需包装您自己的函数</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以执行其他检查。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总之，</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想知道一个值是否可以转换为数字，请实际尝试将其转换为数字。</font></font></em></strong></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我回过头来进行了一些研究，</font><font style="vertical-align: inherit;">以</font><font style="vertical-align: inherit;">研究</font><font style="vertical-align: inherit;">空白字符串</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为何</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有预期的输出的原因，我想我现在就明白了：一个空字符串被强制为</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需在长度检查之前修剪字符串即可解决这种情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">针对新代码运行单元测试，它只会在无穷和布尔文字上失败，并且唯一应该出现问题的时间是您是否正在生成代码（真的，谁会输入文字并检查它是否为数字？您应该</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），这将生成一些奇怪的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，再次</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此方法的唯一原因是，由于某种原因必须避免使用isNaN（）。</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function IsNumeric(num) {<font></font>
     return (num &gt;=0 || num &lt; 0);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也适用于0x23类型编号。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
