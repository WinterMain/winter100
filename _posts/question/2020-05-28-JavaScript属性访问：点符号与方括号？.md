---
layout: question
title:  JavaScript属性访问：点符号与方括号？
date:   2020-05-28T02:02:47.000Z
description: 除了显而易见的事实，第一种形式可以使用变量而不仅仅是字符串文字，是否有理由在另一种形式上使用一种？如果是这样，在哪种情况下？在代码中：// Giv...
img: 
author: Chloe
category: question
answer: 8
tags: JavaScript TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了显而易见的事实，第一种形式可以使用变量而不仅仅是字符串文字，是否有理由在另一种形式上使用一种？如果是这样，在哪种情况下？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码中：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// Given:</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">'bar'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'baz'</span><span class="pun">};</span><span class="pln">

</span><span class="com">// Then</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">[</span><span class="str">'bar'</span><span class="pun">];</span><span class="pln">

</span><span class="com">// vs. </span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">.</span><span class="pln">bar</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文：我已经编写了一个代码生成器来生成这些表达式，我想知道哪种更好。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4182篇《JavaScript属性访问：点符号与方括号？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我添加方括号表示法的更多用例。</font><font style="vertical-align: inherit;">如果要访问</font></font><code>x-proxy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中的属性，</font></font><code>-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将被错误地解释。</font><font style="vertical-align: inherit;">它们还有其他一些情况，例如空格，点等，在这种情况下，点操作将无济于事。</font><font style="vertical-align: inherit;">同样，如果u在变量中具有键，则访问括号中键值的唯一方法是使用方括号表示法。</font><font style="vertical-align: inherit;">希望您能获得更多背景信息。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点表示法始​​终是首选。</font><font style="vertical-align: inherit;">如果使用的是“更智能”的IDE或文本编辑器，它将显示该对象的未定义名称。</font><font style="vertical-align: inherit;">仅当您的名称带有破折号或类似无效的名称时，才使用括号表示法。</font><font style="vertical-align: inherit;">以及名称是否存储在变量中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记法是有帮助的：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的对象是动态对象，并且键（例如</font></font><code>number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何其他特殊字符）中</font><font style="vertical-align: inherit;">可能有一些随机值</font><font style="vertical-align: inherit;">，例如-</font></font></p>

<p><code>var a = { 1 : 3 };</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果您尝试像访问</font></font><code>a.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font><font style="vertical-align: inherit;">那样访问</font><font style="vertical-align: inherit;">，因为它在那儿期待一个字符串。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方括号表示法可以使用变量，因此在点表示法不起作用的两种情况下很有用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）动态确定属性名称时（直到运行时才知道确切名称）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）使用for..in循环遍历对象的所有属性时。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">和田</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果属性名称具有特殊字符，则需要使用方括号：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"Hello, world!"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
foo</span><span class="pun">[</span><span class="str">"Hello, world!"</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，我想这只是一个口味问题。</font><font style="vertical-align: inherit;">恕我直言，点表示法更短，并且使它更明显地表明它是一个属性而不是数组元素（尽管JavaScript当然没有关联数组）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号表示法允许您通过存储在变量中的名称访问属性：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="str">"abc"</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">"hello"</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="str">"abc"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">x</span><span class="pun">];</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">y</span><span class="pun">);</span><span class="pln"> </span><span class="com">//output - hello</span></code></pre>

<p><code>obj.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在这种情况下将无法正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里乐</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中访问属性的两种最常见的方法是使用点和方括号。</font><font style="vertical-align: inherit;">两者都</font></font><code>value.x and value[x]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问价值属性，但不一定是同一属性。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于x的解释方式。</font><font style="vertical-align: inherit;">使用点时，点后的部分必须是有效的变量名，并且直接命名属性。</font><font style="vertical-align: inherit;">使用方括号时，将对方括号之间的表达式求值以获取属性名称。</font><font style="vertical-align: inherit;">value.x获取名为“ x”的值的属性，而value [x]尝试计算表达式x并将结果用作属性名称。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您知道您感兴趣的属性称为“长度”，请说</font></font><code>value.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果要提取由变量中保存的值命名的属性</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请说</font></font><code>value[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">并且由于属性名称可以是任何字符串，因此，如果要访问名为</font></font><code>“2”</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">的属性</font></font><code>“John Doe”</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则必须使用方括号：</font></font><code>value[2] or value["John Doe"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即使您事先知道属性的确切名称，情况仍然如此，因为这两个都不</font></font><code>“2” nor “John Doe”</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是有效的变量名称，因此无法通过点表示法进行访问。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是数组</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中的元素存储在属性中。</font><font style="vertical-align: inherit;">因为这些属性的名称是数字，并且我们经常需要从变量中获取它们的名称，所以我们必须使用方括号语法来访问它们。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组的length属性告诉我们它包含多少个元素。</font><font style="vertical-align: inherit;">此属性名称是有效的变量名称，我们预先知道它的名称，因此通常要写一个数组来查找数组的长度，</font></font><code>array.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它比容易写</font></font><code>array["length"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（从</font></font><a href="http://www.dev-archive.net/articles/js-dot-notation/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处获取</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方括号表示法允许使用点符号不能使用的字符：</font></font></strong></p>

<blockquote>
<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> myForm</span><span class="pun">.</span><span class="pln">foo</span><span class="pun">[];</span><span class="pln"> </span><span class="com">// incorrect syntax</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> myForm</span><span class="pun">[</span><span class="str">"foo[]"</span><span class="pun">];</span><span class="pln"> </span><span class="com">// correct syntax</span></code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括非ASCII（UTF-8）字符，如</font></font><code>myForm["ダ"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://stackoverflow.com/q/30929233/287948"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中所示。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，方括号表示法在处理以可预测的方式变化的属性名称时非常有用：</font></font></strong></p>

<blockquote>
<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  someFunction</span><span class="pun">(</span><span class="pln">myForm</span><span class="pun">[</span><span class="str">"myControlNumber"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> i</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">围捕：</font></font></strong></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点符号的书写速度更快，阅读更清晰。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方括号表示法允许访问包含特殊字符的属性以及使用变量选择属性</font></font></li>
  </ul>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能与点符号一起使用的字符的另一个示例是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本身包含点的属性名称</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>For example a json response could contain a property called <code>bar.Baz</code>.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> myResponse</span><span class="pun">.</span><span class="pln">bar</span><span class="pun">.</span><span class="typ">Baz</span><span class="pun">;</span><span class="pln"> </span><span class="com">// incorrect syntax</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> myResponse</span><span class="pun">[</span><span class="str">"bar.Baz"</span><span class="pun">];</span><span class="pln"> </span><span class="com">// correct syntax</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
