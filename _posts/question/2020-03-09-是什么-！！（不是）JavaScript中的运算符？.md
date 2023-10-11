---
layout: question
title:  是什么 ！！（不是）JavaScript中的运算符？
date:   2020-03-09T05:13:22.000Z
description: 我看到了一些代码，它们似乎使用了我不认识的运算符，它们以两个感叹号的形式出现，如下所示：\!\!。有人可以告诉我这个操作员做什么吗？我看到的背景是th...
img: 
author: Stafan小胖
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了一些代码，它们似乎使用了我不认识的运算符，它们以两个感叹号的形式出现，如下所示：</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有人可以告诉我这个操作员做什么吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到的背景是</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">vertical </span><span class="pun">=</span><span class="pln"> vertical </span><span class="pun">!==</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="pun">!!</span><span class="pln">vertical </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">vertical</span><span class="pun">;</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第158篇《是什么 ！！（不是）JavaScript中的运算符？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两次使用非逻辑运算符</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着！true = false </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 和!! true = true</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的某些运算符执行隐式类型转换，有时用于类型转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一元运算</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符将其操作数转换为布尔值并取反。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个事实导致您可以在源代码中看到以下惯用法：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">!!</span><span class="pln">x </span><span class="com">// Same as Boolean(x). Note double exclamation mark</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看完所有这些很棒的答案后，我想补充说明使用的另一个原因   </font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当前，我正在使用Angular 2-4（TypeScript），并且我想</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在用户未通过身份验证时</font><font style="vertical-align: inherit;">返回一个布尔值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果未通过身份验证，则令牌字符串将为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我可以通过使用下面的代码块来做到这一点：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">public</span><span class="pln"> isAuthenticated</span><span class="pun">():</span><span class="pln"> boolean </span><span class="pun">{</span><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">!!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getToken</span><span class="pun">();</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>!!x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是的简写 </font></font><code>Boolean(x)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次爆炸会迫使js引擎运行，</font></font><code>Boolean(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但也会产生反转值的副作用。</font><font style="vertical-align: inherit;">因此，第二次爆炸消除了副作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双重布尔取反。</font><font style="vertical-align: inherit;">通常用于检查值是否未定义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是一个运算符，而是两个。</font><font style="vertical-align: inherit;">它等效于以下内容，是将值强制转换为布尔值的快速方法。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">val</span><span class="pun">.</span><span class="pln">enabled </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!(!</span><span class="pln">enable</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙武藏</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怀疑这是C ++的残over剩饭，在这里人们会重写！</font><font style="vertical-align: inherit;">运算符，但不是布尔运算符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在这种情况下要获得否定（或肯定）答案，您首先需要使用！</font><font style="vertical-align: inherit;">运算符以获取布尔值，但是如果要检查肯定的情况，则可以使用!!。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斌</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造是将任何JavaScript表达式转换为其等效布尔值的简单方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font><code>!!"he shot me down" === true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>!!0 === false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">是“ boolean not”，实际上将“ enable”的值转换为与其相反的布尔值。</font><font style="vertical-align: inherit;">第二 ！</font><font style="vertical-align: inherit;">翻转此值。</font><font style="vertical-align: inherit;">因此，</font></font><code>!!enable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着“不启用”，为您</font></font><code>enable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供布尔值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><code>NOT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">两次运算，</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将值转换为a </font></font><code>boolean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其反转，这是一个简单的示例，了解其</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作原理：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您拥有的地方：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> zero </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>!0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将其转换为boolean并被评估为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为0为</font></font><code>falsy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以您获得了相反的值并转换为boolean，因此其被评估为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">!</span><span class="pln">zero</span><span class="pun">;</span><span class="pln"> </span><span class="com">//true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我们不希望</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值的布尔</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">取反</font><font style="vertical-align: inherit;">，因此我们可以再次将其取反以获得结果！</font><font style="vertical-align: inherit;">这就是为什么我们使用另一个</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，请</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保我们得到的值是布尔值，而不是虚假，真实或字符串等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，就像</font></font><code>Boolean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">function </font><font style="vertical-align: inherit;">一样</font><font style="vertical-align: inherit;">，但是将值转换为boolean的简便快捷方式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> zero </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">!!</span><span class="pln">zero</span><span class="pun">;</span><span class="pln"> </span><span class="com">//false</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符导致双重否定。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Hello World!"</span><span class="pun">;</span><span class="pln">

</span><span class="pun">!</span><span class="pln">foo </span><span class="com">// Result: false</span><span class="pln">
</span><span class="pun">!!</span><span class="pln">foo </span><span class="com">// Result: true</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它模拟了</font></font><code>Boolean()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强制转换功能</font><font style="vertical-align: inherit;">的行为</font><font style="vertical-align: inherit;">。</font></font><code>NOT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论给定什么操作数，</font><font style="vertical-align: inherit;">第一个都</font><font style="vertical-align: inherit;">返回布尔值。</font><font style="vertical-align: inherit;">第二个取反</font></font><code>NOT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Boolean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，因此给出</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">布尔值。</font><font style="vertical-align: inherit;">最终结果与</font></font><code>Boolean()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在值上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Harry十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是双重</font></font><code>not</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作。</font><font style="vertical-align: inherit;">第一个</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将值转换为布尔值，并反转其逻辑值。</font><font style="vertical-align: inherit;">第二个</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将逻辑值反向。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是逻辑非运算符，两次-用于将某些内容转换为布尔值，例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">true</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="pun">!!</span><span class="lit">10</span><span class="pln">

</span><span class="kwd">false</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="pun">!!</span><span class="lit">0</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将后缀转换为布尔值。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>!!foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将两次unary not运算符应用两次，并用于将其转换为布尔类型，类似于使用unary plus </font></font><code>+foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其转换为数字并连接一个空字符串</font></font><code>''+foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以转换为字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了这些技巧外，您还可以使用与原始类型相对应的构造函数（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来显式转换值，即</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Boolean</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">)</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="pun">!!</span><span class="pln">foo
</span><span class="typ">Number</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">)</span><span class="pln">  </span><span class="pun">===</span><span class="pln"> </span><span class="pun">+</span><span class="pln">foo
</span><span class="typ">String</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">)</span><span class="pln">  </span><span class="pun">===</span><span class="pln"> </span><span class="str">''</span><span class="pun">+</span><span class="pln">foo</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>boolean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果是falsey（例如</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等），这将是</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，否则，</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">!</span><span class="pln">oObject  </span><span class="com">// inverted boolean</span><span class="pln">
</span><span class="pun">!!</span><span class="pln">oObject </span><span class="com">// non inverted boolean so true boolean representation</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不是运算符，只是</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符的两倍。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际示例“测试IE版本”：  </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> isIE8 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!!</span><span class="pln"> navigator</span><span class="pun">.</span><span class="pln">userAgent</span><span class="pun">.</span><span class="pln">match</span><span class="pun">(</span><span class="str">/MSIE 8.0/</span><span class="pun">);</span><span class="pln">  
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">isIE8</span><span class="pun">);</span><span class="pln"> </span><span class="com">// returns true or false </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你⇒</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">navigator</span><span class="pun">.</span><span class="pln">userAgent</span><span class="pun">.</span><span class="pln">match</span><span class="pun">(</span><span class="str">/MSIE 8.0/</span><span class="pun">));</span><span class="pln">  
</span><span class="com">// returns either an Array or null  </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如果你⇒</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(!!</span><span class="pln">navigator</span><span class="pun">.</span><span class="pln">userAgent</span><span class="pun">.</span><span class="pln">match</span><span class="pun">(</span><span class="str">/MSIE 8.0/</span><span class="pun">));</span><span class="pln">  
</span><span class="com">// returns either true or false</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其右边的值转换为其等效的布尔值。</font><font style="vertical-align: inherit;">（想想穷人的“类型转换”方式）。</font><font style="vertical-align: inherit;">它的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意图</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是通常传达给读者，代码并不关心</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值是可变的，但它的</font></font><a href="http://11heavens.com/falsy-and-truthy-in-javascript" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“真”值</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>!!expr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font><font style="vertical-align: inherit;">表达式</font><font style="vertical-align: inherit;">的</font><em><font style="vertical-align: inherit;">真实性</font></em><font style="vertical-align: inherit;">返回布尔值（</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在非布尔类型上使用时更有意义。</font><font style="vertical-align: inherit;">考虑以下示例，尤其是第三个示例及以后的示例：</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">          </span><span class="pun">!!</span><span class="kwd">false</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
           </span><span class="pun">!!</span><span class="kwd">true</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">

              </span><span class="pun">!!</span><span class="lit">0</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
</span><span class="pun">!!</span><span class="pln">parseInt</span><span class="pun">(</span><span class="str">"foo"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="com">// NaN is falsy</span><span class="pln">
              </span><span class="pun">!!</span><span class="lit">1</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
             </span><span class="pun">!!-</span><span class="lit">1</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">  </span><span class="com">// -1 is truthy</span><span class="pln">

             </span><span class="pun">!!</span><span class="str">""</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="com">// empty string is falsy</span><span class="pln">
          </span><span class="pun">!!</span><span class="str">"foo"</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">  </span><span class="com">// non-empty string is truthy</span><span class="pln">
        </span><span class="pun">!!</span><span class="str">"false"</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">  </span><span class="com">// ...even if it contains a falsy value</span><span class="pln">

     </span><span class="pun">!!</span><span class="pln">window</span><span class="pun">.</span><span class="pln">foo </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="com">// undefined is falsy</span><span class="pln">
           </span><span class="pun">!!</span><span class="kwd">null</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="com">// null is falsy</span><span class="pln">

             </span><span class="pun">!!{}</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">  </span><span class="com">// an (empty) object is truthy</span><span class="pln">
             </span><span class="pun">!![]</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">  </span><span class="com">// an (empty) array is truthy; PHP programmers beware!</span></code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
