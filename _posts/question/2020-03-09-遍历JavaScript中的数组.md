---
layout: question
title:  遍历JavaScript中的数组
date:   2020-03-09T05:12:44.000Z
description: 在Java中，您可以使用for循环遍历数组中的对象，如下所示：String\[\] myStringArray = {"Hello", "World"};...
img: 
author: 达蒙武藏
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Java中，您可以使用</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环遍历数组中的对象，如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">String</span><span class="pun">[]</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"Hello"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"World"</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="typ">String</span><span class="pln"> s </span><span class="pun">:</span><span class="pln"> myStringArray</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在JavaScript中做同样的事情吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第157篇《遍历JavaScript中的数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>Array.prototype.forEach(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"apple"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"banana"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"cherry"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"mango"</span><span class="pun">];</span><span class="pln">
arr</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)=&gt;{</span><span class="pln">
   </span><span class="com">//Some code...</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>Array.prototype.map(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"apple"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"banana"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"cherry"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"mango"</span><span class="pun">];</span><span class="pln">
arr</span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)=&gt;{</span><span class="pln">
   </span><span class="com">//Some code...</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或前面提到的jquery或for循环方式。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短的回答：是的。</font><font style="vertical-align: inherit;">您可以这样做：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"element1"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"element2"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"element3"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"element4"</span><span class="pun">];</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> myArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">myArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器控制台中，您可以看到类似“ element1”，“ element2”等的内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> x</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> x</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> x</span><span class="pun">[++</span><span class="pln">i</span><span class="pun">])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">i</span><span class="pun">,</span><span class="pln">j</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干净很多...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用jQuery，它在其文档中有一个很好的示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> $</span><span class="pun">.</span><span class="pln">each</span><span class="pun">([</span><span class="pln"> </span><span class="lit">52</span><span class="pun">,</span><span class="pln"> </span><span class="lit">97</span><span class="pln"> </span><span class="pun">],</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> value </span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      alert</span><span class="pun">(</span><span class="pln"> index </span><span class="pun">+</span><span class="pln"> </span><span class="str">": "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> value </span><span class="pun">);</span><span class="pln">
 </span><span class="pun">});</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优化的方法是缓存数组的长度，并使用单个var模式通过单个var关键字初始化所有变量。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> max</span><span class="pun">,</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"Hello"</span><span class="pun">,</span><span class="str">"World"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> max </span><span class="pun">=</span><span class="pln"> myStringArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> max</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="pln">myStringArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
   </span><span class="com">//Do something</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果迭代的顺序与您应该尝试反向循环无关紧要，则它是最快的，因为它减少了开销条件测试，并且减量在一条语句中：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> i</span><span class="pun">,</span><span class="pln">myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"item1"</span><span class="pun">,</span><span class="str">"item2"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln">  myStringArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">--)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="pln">myStringArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更佳，更清洁的while循环使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"item1"</span><span class="pun">,</span><span class="str">"item2"</span><span class="pun">],</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> myStringArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">while</span><span class="pun">(</span><span class="pln">i</span><span class="pun">--)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="com">// do something with fruits[i]</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最好的方法是使用Array.forEach函数。</font><font style="vertical-align: inherit;">如果您不能使用它，我建议您从MDN获取polyfill。</font><font style="vertical-align: inherit;">要使其可用，这肯定是在JavaScript中遍历数组的最安全方法。</font></font></p>

<p><em><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.prototype.forEach（）</font></font></a></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，正如其他人所建议的那样，这几乎总是您想要的：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> numbers </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">11</span><span class="pun">,</span><span class="lit">22</span><span class="pun">,</span><span class="lit">33</span><span class="pun">,</span><span class="lit">44</span><span class="pun">,</span><span class="lit">55</span><span class="pun">,</span><span class="lit">66</span><span class="pun">,</span><span class="lit">77</span><span class="pun">,</span><span class="lit">88</span><span class="pun">,</span><span class="lit">99</span><span class="pun">,</span><span class="lit">111</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> sum </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
numbers</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">n</span><span class="pun">){</span><span class="pln">
  sum </span><span class="pun">+=</span><span class="pln"> n</span><span class="pun">;</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以确保在处理数组的范围内所需的任何内容都在该范围内，并且仅在处理数组的值，而不在处理对象属性和其他成员，这是</font></font><code>for ..</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在做的</font><font style="vertical-align: inherit;">事情</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用常规C风格 </font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，</font><font style="vertical-align: inherit;">循环即可。</font><font style="vertical-align: inherit;">重要的是要记住，循环中的所有内容都与程序的其余部分共享其作用域，{}不会创建新的作用域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> sum </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> numbers </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">11</span><span class="pun">,</span><span class="lit">22</span><span class="pun">,</span><span class="lit">33</span><span class="pun">,</span><span class="lit">44</span><span class="pun">,</span><span class="lit">55</span><span class="pun">,</span><span class="lit">66</span><span class="pun">,</span><span class="lit">77</span><span class="pun">,</span><span class="lit">88</span><span class="pun">,</span><span class="lit">99</span><span class="pun">,</span><span class="lit">111</span><span class="pun">];</span><span class="pln">

</span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">numbers</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> </span><span class="pun">++</span><span class="pln">i</span><span class="pun">){</span><span class="pln">
  sum </span><span class="pun">+=</span><span class="pln"> numbers</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

alert</span><span class="pun">(</span><span class="pln">i</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出“ 11”-可能不是您想要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个有效的jsFiddle示例：</font><a href="https://jsfiddle.net/workingClassHacker/pxpv2dh5/7/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://jsfiddle.net/workingClassHacker/pxpv2dh5/7/
</font></font><a href="https://jsfiddle.net/workingClassHacker/pxpv2dh5/7/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最优雅，最快捷的方式</font></font></h2>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1023</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1024</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> value</span><span class="pun">;</span><span class="pln"> value </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">();)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    value </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><a href="http://jsperf.com/native-loop-performance/8" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/native-loop-performance/8</font></font></a></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（因为我错了）</font></font></h2>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较用于遍历100000个项目的数组的方法，并每次使用新值进行最少的操作。</font></font></p>

<ul>
<li><a href="http://jsben.ch/#/BQhED" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsben.ch/#/BQhED</font></font></a></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">制备：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">script src</span><span class="pun">=</span><span class="str">"//code.jquery.com/jquery-2.1.0.min.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">script src</span><span class="pun">=</span><span class="str">"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="typ">Benchmark</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">setup </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// Fake function with minimal action on the value</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> process </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            tmp </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln"> </span><span class="com">// Hold a reference to the variable (prevent engine optimisation?)</span><span class="pln">
        </span><span class="pun">};</span><span class="pln">

        </span><span class="com">// Declare the test Array</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">100000</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln">
            arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"http://jsperf.com/native-loop-performance/16"</span><span class="pln"> 
   title</span><span class="pun">=</span><span class="str">"http://jsperf.com/native-loop-performance/16"</span><span class="pln">
</span><span class="pun">&gt;&lt;</span><span class="pln">img src</span><span class="pun">=</span><span class="str">"http://i.imgur.com/YTrO68E.png"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Hosted by imgur.com"</span><span class="pln"> </span><span class="pun">/&gt;&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中有两种方法可以做到这一点。</font><font style="vertical-align: inherit;">前两个示例是JavaScript示例。</font><font style="vertical-align: inherit;">第三个使用JavaScript库，即jQuery使用该</font></font><code>.each()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"hello"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"World"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i in myStringArray</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln">myStringArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif7" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"hello"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"World"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> myStringArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln">myStringArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif8" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myStringArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"hello"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"World"</span><span class="pun">];</span><span class="pln">
$</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">myStringArray</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">){</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln">value</span><span class="pun">);</span><span class="pln">
</span><span class="pun">})</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif9" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种方法可以仅对自己的对象属性进行迭代，而不包括原型的属性：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i in array</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">array</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">i</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something with array[i]</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它仍然会遍历自定义属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，可以将任何自定义属性分配给任何对象，包括数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果想遍历数组疏林，</font></font><code>for (var i = 0; i &lt; array.length; i++) if (i in array)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>array.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>es5shim</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery库，请考虑使用 
 </font></font><a href="http://api.jquery.com/jQuery.each/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery.each/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文档中：</font></font></p>

<blockquote>
  <p><strong><code>jQuery.each( collection, callback(indexInArray, valueOfElement) )</code></strong> </p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回：</font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></em></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：</font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用迭代器函数，可用于无缝迭代对象和数组。</font><font style="vertical-align: inherit;">具有长度属性的数组和类似数组的对象（例如函数的arguments对象）通过从0到length-1的数字索引进行迭代。</font><font style="vertical-align: inherit;">其他对象通过其命名属性进行迭代。</font></font></em></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>$.each()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数与</font></font><code>$(selector).each()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，专门用于在jQuery对象上进行迭代的函数不同。</font><font style="vertical-align: inherit;">该</font></font><code>$.each()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  函数可用于遍历任何集合，无论它是映射（JavaScript对象）还是数组。</font><font style="vertical-align: inherit;">对于数组，每次回调都会传递一个数组索引和一个对应的数组值。</font><font style="vertical-align: inherit;">（也可以通过</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">访问该值</font><font style="vertical-align: inherit;">，但是</font><font style="vertical-align: inherit;">即使它是简单的字符串或数字值</font><font style="vertical-align: inherit;">，Javascript也会始终将其包装</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为一个</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整数。）该方法返回其第一个参数，即被迭代的对象。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会彻底建议您使用</font></font><a href="http://documentcloud.github.com/underscore" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库。</font><font style="vertical-align: inherit;">它为您提供了各种功能，可用于遍历数组/集合。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">each</span><span class="pun">([</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">],</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">num</span><span class="pun">){</span><span class="pln"> alert</span><span class="pun">(</span><span class="pln">num</span><span class="pun">);</span><span class="pln"> </span><span class="pun">});</span><span class="pln">
</span><span class="pun">=&gt;</span><span class="pln"> alerts each number in turn</span><span class="pun">...</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组循环：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> things</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++){</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> thing </span><span class="pun">=</span><span class="pln"> things</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">thing</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象循环：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> prop in obj</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> propValue </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">];</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">propValue</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有多种方法可以遍历JavaScript中的数组。  </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用循环：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> substr</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> </span><span class="pun">++</span><span class="pln">i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something with `substr[i]`</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5的forEach：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">substr</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something with `item`</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery.each：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">jQuery</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">substr</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something with `item` (or `this` is also `item` if you like)</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请查看</font></font><a href="https://stackoverflow.com/questions/3943494/how-to-loop-through-array-in-jquery" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取详细信息，或者您也可以检查</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以遍历JavaScript中的数组，并使用jQuery检查</font></font><a href="http://api.jquery.com/jquery.each/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个的jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想用一种简洁的方式编写一个快速循环</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以反向进行迭代：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="pln">myArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">i</span><span class="pun">--;){</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> item</span><span class="pun">=</span><span class="pln">myArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这具有缓存的长度（类似于的利益</font></font><code>for (var i=0, len=myArray.length; i&lt;len; ++i)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不像</font></font><code>for (var i=0; i&lt;myArray.length; ++i)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），同时更少的字符键入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时甚至需要反向迭代，例如在</font></font><a href="https://developer.mozilla.org/En/DOM/NodeList#A_.22live.22_collection" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动的NodeList</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">迭代时</font><font style="vertical-align: inherit;">，您计划在迭代过程中从DOM中删除项目。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">不知</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，不建议使用for-in循环遍历数组，但最好使用如下</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> len</span><span class="pun">=</span><span class="pln">myArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++){}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还进行了优化（“缓存”阵列长度）。</font><font style="vertical-align: inherit;">如果您想了解更多信息，请</font></font><a href="http://blog.sebarmeli.com/2010/12/06/best-way-to-loop-through-an-array-in-javascript/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读我关于该主题的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一种功能编程技术，在其他语言（例如</font></font><a href="http://en.wikipedia.org/wiki/Python_%28programming_language%29" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Python</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Haskell_%28programming_language%29" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Haskell）中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以使用</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">].</span><span class="pln">map</span><span class="pun">(</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
     alert</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span><span class="pln">
</span><span class="pun">})</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用语法为：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">array</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">func</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常</font></font><code>func</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会采用一个参数，它是数组的一项。</font><font style="vertical-align: inherit;">但是对于JavaScript，它可以采用第二个参数（即项目的索引）和第三个参数（即数组本身）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回值</font></font><code>array.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是另一个数组，因此您可以像这样使用它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">].</span><span class="pln">map</span><span class="pun">(</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> item </span><span class="pun">*</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在x是</font></font><code>[10,20,30,40]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不必内联编写函数。</font><font style="vertical-align: inherit;">它可以是一个单独的功能。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> item_processor </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="com">// Do something complicated to an item</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

new_list </span><span class="pun">=</span><span class="pln"> my_list</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">item_processor</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这相当于：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">item in my_list</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">item_processor</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非你不明白</font></font><code>new_list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
