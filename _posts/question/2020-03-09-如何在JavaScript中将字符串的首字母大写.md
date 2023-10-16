---
layout: question
title:  如何在JavaScript中将字符串的首字母大写？
date:   2020-03-09T04:54:38.000Z
description: 如何使字符串的第一个字母大写，但不更改其他任何字母的大小写？例如："this is a test" -> "This is a test""t...
img: 
author: Eva猿猿
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使字符串的第一个字母大写，但不更改其他任何字母的大小写？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<ul>
<li><code>"this is a test"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><code>"This is a test"</code></li>
<li><code>"the Eiffel Tower"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><code>"The Eiffel Tower"</code></li>
<li><code>"/index.html"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><code>"/index.html"</code></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第154篇《如何在JavaScript中将字符串的首字母大写？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can do it in one line like this</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">string</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">1</span><span class="pun">)</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">yourString</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/\w/</span><span class="pun">,</span><span class="pln"> c </span><span class="pun">=&gt;</span><span class="pln"> c</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">())</span></code></pre>

<p>I found this arrow function easiest. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" rel="noreferrer">Replace</a> matches the first letter character (<code>\w</code>) of your string and converts it to uppercase. Nothing fancier necessary.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The <code>ucfirst</code> function works if you do it like this.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> ucfirst</span><span class="pun">(</span><span class="pln">str</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> firstLetter </span><span class="pun">=</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> firstLetter</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p>Thanks J-P for the aclaration.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">yourString</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/^[a-z]/</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">m</span><span class="pun">){</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> m</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">});</span></code></pre>

<p>(You may encapsulate it in a function or even add it to the String prototype if you use it frequently.)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> str </span><span class="pun">=</span><span class="pln"> </span><span class="str">"test string"</span><span class="pun">;</span><font></font><span class="pln">
str </span><span class="pun">=</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="lit">1</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="pln"> </span><span class="str">/(^|\s)([a-z])/</span><span class="pln">g </span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">m</span><span class="pun">,</span><span class="pln">p1</span><span class="pun">,</span><span class="pln">p2</span><span class="pun">){</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> p1</span><span class="pun">+</span><span class="pln">p2</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">();</span><font></font><span class="pln">
    </span><span class="pun">}</span><span class="pln"> </span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">};</span><font></font>
</code></pre>

<p>Usage:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">capitalizedString </span><span class="pun">=</span><span class="pln"> someString</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">();</span></code></pre>

<p>This is a text string =&gt; This Is A Text String</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is a function called <strong>ucfirst()</strong> (short for "upper case first letter"):</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> ucfirst</span><span class="pun">(</span><span class="pln">str</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> firstLetter </span><span class="pun">=</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> firstLetter</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p>You can capitalise a string by calling <strong>ucfirst("some string")</strong> -- for example,</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ucfirst</span><span class="pun">(</span><span class="str">"this is a test"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">--&gt;</span><span class="pln"> </span><span class="str">"This is a test"</span></code></pre>

<p>It works by splitting the string into two pieces.  On the first line it pulls out <strong>firstLetter</strong> and then on the second line it capitalises <strong>firstLetter</strong> by calling <strong>firstLetter.toUpperCase()</strong> and joins it with the rest of the string, which is found by calling <strong>str.substr(1)</strong>.</p>

<p>You might think this would fail for an empty string, and indeed in a language like C you would have to cater for this. However in JavaScript, when you take a substring of an empty string, you just get an empty string back.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are wanting to reformat all-caps text, you might want to modify the other examples as such: </p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> capitalize </span><span class="pun">(</span><span class="pln">text</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> text</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> text</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">).</span><span class="pln">toLowerCase</span><span class="pun">();</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p>This will ensure that the following text is changed:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">TEST </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="typ">Test</span><font></font><span class="pln">
</span><span class="typ">This</span><span class="pln"> </span><span class="typ">Is</span><span class="pln"> A </span><span class="typ">TeST</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="typ">This</span><span class="pln"> is a test</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十万个冷笑话</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> capitalized </span><span class="pun">=</span><span class="pln"> yourstring</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> yourstring</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中似乎更容易： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">style type</span><span class="pun">=</span><span class="str">"text/css"</span><span class="pun">&gt;</span><font></font><span class="pln">
    p</span><span class="pun">.</span><span class="pln">capitalize </span><span class="pun">{</span><span class="pln">text</span><span class="pun">-</span><span class="pln">transform</span><span class="pun">:</span><span class="pln">capitalize</span><span class="pun">;}</span><font></font><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">style</span><span class="pun">&gt;</span><font></font><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">p </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"capitalize"</span><span class="pun">&gt;</span><span class="typ">This</span><span class="pln"> is some text</span><span class="pun">.&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是来自</font></font><em><a href="http://www.w3schools.com/cssref/pr_text_text-transform.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS文本转换属性</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（位于</font></font><a href="http://en.wikipedia.org/wiki/W3Schools" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3Schools</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> str </span><span class="pun">=</span><span class="pln"> </span><span class="str">"ruby java"</span><span class="pun">;</span><font></font><span class="pln">
</span><font></font><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">str</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">1</span><span class="pun">));</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将输出</font></font><code>"Ruby java"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到控制台。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">allWords</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">allWords</span><span class="pun">)</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="com">// if all words</span><font></font><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">' '</span><span class="pun">).</span><span class="pln">map</span><span class="pun">(</span><span class="pln">word </span><span class="pun">=&gt;</span><span class="pln"> word</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">()).</span><span class="pln">join</span><span class="pun">(</span><span class="str">' '</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="com">//break down phrase to words then  recursive calls until capitalizing all words</span><font></font><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><span class="pln"> </span><span class="com">// if allWords is undefined , capitalize only the first word , mean the first char of the whole string</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="str">"capitalize just the first word"</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">();</span><span class="pln"> </span><span class="pun">==&gt;</span><span class="pln"> </span><span class="str">"Capitalize just the first word"</span><font></font><span class="pln">
 </span><span class="str">"capitalize all words"</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">);</span><span class="pln"> </span><span class="pun">==&gt;</span><span class="pln"> </span><span class="str">"Capitalize All Words"</span><font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2016年11月（ES6），仅用于乐趣：</font></font></h2>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">string </span><span class="pun">=</span><span class="pln"> </span><span class="str">''</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">[...</span><span class="pln">string</span><span class="pun">].</span><span class="pln">map</span><span class="pun">(</span><span class="pln">    </span><span class="com">//convert to array with each item is a char of string by using spread operator (...)</span><font></font><span class="pln">
    </span><span class="pun">(</span><span class="kwd">char</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> index </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">char</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">char</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln">  </span><span class="com">// index true means not equal 0 , so (!index) is the first char which is capitalized by `toUpperCase()` method</span><font></font><span class="pln">
 </span><span class="pun">).</span><span class="pln">join</span><span class="pun">(</span><span class="str">''</span><span class="pun">)</span><span class="pln">                                             </span><span class="com">//return back to string</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后 </font></font><code>capitalize("hello") // Hello</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以得到第一个我最喜欢的角色</font></font><code>RegExp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来像一个可爱的笑脸：</font></font><code>/^./</code></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/^./</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">match</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> match</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">();</span><font></font><span class="pln">
  </span><span class="pun">});</span><font></font><span class="pln">
</span><span class="pun">};</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有咖啡迷：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">::</span><span class="pln">capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="pun">-&gt;</span><font></font><span class="pln">
  </span><span class="lit">@replace</span><span class="pln"> </span><span class="pun">/^./,</span><span class="pln"> </span><span class="pun">(</span><span class="pln">match</span><span class="pun">)</span><span class="pln"> </span><span class="pun">-&gt;</span><font></font><span class="pln">
    match</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...对于所有认为有更好方法的人，而无需扩展本机原型：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">input</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> input</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/^./</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">match</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> match</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">();</span><font></font><span class="pln">
  </span><span class="pun">});</span><font></font><span class="pln">
</span><span class="pun">};</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><a href="http://underscorejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://lodash.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lo-Dash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则</font></font><a href="https://github.com/epeli/underscore.string"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.string</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库提供字符串扩展名，包括大写：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.capitalize（string）将字符串的首字母转换为大写。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">(</span><span class="str">"foo bar"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"Foo bar"</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将字符串中所有单词的首字母大写： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> ucFirstAllWords</span><span class="pun">(</span><span class="pln"> str </span><span class="pun">)</span><font></font><span class="pln">
</span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> pieces </span><span class="pun">=</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> pieces</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++</span><span class="pln"> </span><span class="pun">)</span><font></font><span class="pln">
    </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> pieces</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">();</span><font></font><span class="pln">
        pieces</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> j </span><span class="pun">+</span><span class="pln"> pieces</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> pieces</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC71588217</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> capitalizeFirstLetter</span><span class="pun">(</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改了其他一些答案</font></font><code>String.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这个答案也曾经使用过），但是由于可维护性，我现在建议这样做（很难找出将函数添加到的位置</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果其他代码使用相同的名称/浏览器，则可能导致冲突将来添加具有相同名称的本机函数）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是流行答案的简化版本，它通过将字符串视为数组来获得第一个字母：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> capitalize</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)</span><font></font><span class="pln">
</span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> s</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据下面的评论，这在IE 7或更低版​​本中不起作用。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免出现</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空字符串（请参见</font></font><a href="https://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/7224605?noredirect=1#comment40995528_7224605"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的@ njzk2的注释</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您可以检查一个空字符串：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> capitalize</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)</span><font></font><span class="pln">
</span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> s </span><span class="pun">&amp;&amp;</span><span class="pln"> s</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一种情况下，我需要将其首字母大写，将其余字母小写。</font><font style="vertical-align: inherit;">以下情况使我更改了此功能：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">//es5</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> capitalize</span><span class="pun">(</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">).</span><span class="pln">toLowerCase</span><span class="pun">();</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
capitalize</span><span class="pun">(</span><span class="str">"alfredo"</span><span class="pun">)</span><span class="pln">  </span><span class="com">// =&gt; "Alfredo"</span><font></font><span class="pln">
capitalize</span><span class="pun">(</span><span class="str">"Alejandro"</span><span class="pun">)</span><span class="com">// =&gt; "Alejandro</span><font></font><span class="pln">
capitalize</span><span class="pun">(</span><span class="str">"ALBERTO"</span><span class="pun">)</span><span class="pln">  </span><span class="com">// =&gt; "Alberto"</span><font></font><span class="pln">
capitalize</span><span class="pun">(</span><span class="str">"ArMaNdO"</span><span class="pun">)</span><span class="pln">  </span><span class="com">// =&gt; "Armando"</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">// es6 using destructuring </span><font></font><span class="pln">
</span><span class="kwd">const</span><span class="pln"> capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="pun">([</span><span class="pln">first</span><span class="pun">,...</span><span class="pln">rest</span><span class="pun">])</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> first</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> rest</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="str">''</span><span class="pun">).</span><span class="pln">toLowerCase</span><span class="pun">();</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种更加面向对象的方法：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">capitalize </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像下面这样调用该函数：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"hello world"</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预期输出为：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"Hello world"</span><span class="pln"> </span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对发布的几种不同方法的性能感兴趣：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是基于</font></font><a href="http://jsperf.com/capitalize-the-first-letter-of-string-in-javascript/2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此jsperf测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的最快方法</font><font style="vertical-align: inherit;">（从最快到最慢的顺序）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，前两种方法在性能上基本上是可比的，而更改</font></font><code>String.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法迄今为止在性能上是最慢的。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// 10,889,187 operations/sec</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> capitalizeFirstLetter</span><span class="pun">(</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> string</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">// 10,875,535 operations/sec</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> capitalizeFirstLetter</span><span class="pun">(</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">// 4,632,536 operations/sec</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> capitalizeFirstLetter</span><span class="pun">(</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> string</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/^./</span><span class="pun">,</span><span class="pln"> string</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">toUpperCase</span><span class="pun">());</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">// 1,977,828 operations/sec</span><font></font><span class="pln">
</span><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">capitalizeFirstLetter </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">charAt</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/tNwKk.png" rel="noreferrer"><img src="https://i.stack.imgur.com/tNwKk.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">p</span><span class="pun">:</span><span class="pln">first</span><span class="pun">-</span><span class="pln">letter </span><span class="pun">{</span><font></font><span class="pln">
    text</span><span class="pun">-</span><span class="pln">transform</span><span class="pun">:</span><span class="pln">capitalize</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
