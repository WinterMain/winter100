---
layout: question
title:  检查键是否存在于JavaScript对象中？
date:   2020-03-09T05:24:45.000Z
description: 如何检查JavaScript对象或数组中是否存在特定键？如果密钥不存在，而我尝试访问它，它将返回false吗？还是抛出错误？...
img: 
author: Near神奇
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查JavaScript对象或数组中是否存在特定键？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果密钥不存在，而我尝试访问它，它将返回false吗？</font><font style="vertical-align: inherit;">还是抛出错误？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第165篇《检查键是否存在于JavaScript对象中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>New awesome solution with <strong>JavaScript Destructuring</strong>:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"key1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"key2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"key3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pun">,</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln">key1</span><span class="pun">,</span><span class="pln"> key2</span><span class="pun">,</span><span class="pln"> key3</span><span class="pun">,</span><span class="pln"> key4</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">;</span><span class="pln">

</span><span class="com">// key1 = "value1"</span><span class="pln">
</span><span class="com">// key2 = "value2"</span><span class="pln">
</span><span class="com">// key3 = "value3"</span><span class="pln">
</span><span class="com">// key4 = undefined</span><span class="pln">

</span><span class="com">// Can easily use `if` here on key4</span><span class="pln">
</span><span class="kwd">if</span><span class="pun">(!</span><span class="pln">key4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"key not present"</span><span class="pun">);</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="com">// Key not present</span></code></pre>

<p>Do check <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="nofollow noreferrer" data-bitapp="processed">other use of JavaScript Destructuring</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要检查对象上任何深度的任何键并考虑虚假值，请考虑将以下行用于实用程序功能：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> keyExistsOn </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">o</span><span class="pun">,</span><span class="pln"> k</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> k</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">"."</span><span class="pun">).</span><span class="pln">reduce</span><span class="pun">((</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> a</span><span class="pun">[</span><span class="pln">c</span><span class="pun">]</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> o</span><span class="pun">))</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    test</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
    locals</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        test</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
        test2</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
        test3</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">NaN</span><span class="pun">,</span><span class="pln">
        test4</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln">
        test5</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">,</span><span class="pln">
        auth</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            user</span><span class="pun">:</span><span class="pln"> </span><span class="str">"hw"</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">""</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.test"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.test2"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.test3"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.test4"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.test5"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"sdsdf"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"sdsdf.rtsd"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"sdsdf.234d"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"2134.sdsdf.234d"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals."</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.autht"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth."</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth.user"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">true</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth.userr"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth.user."</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">false</span><span class="pln">
keyExistsOn</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="str">"locals.auth.user"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅以下NPM软件包：</font><a href="https://www.npmjs.com/package/has-deep-value" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.npmjs.com/package/has-deep-value" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.npmjs.com/package/has-deep-value</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的检查方法是 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"key"</span><span class="pln"> in object</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  a</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln">
  b</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="str">"a"</span><span class="pln"> in obj </span><span class="com">// true</span><span class="pln">
</span><span class="str">"c"</span><span class="pln"> in obj </span><span class="com">// false</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回值为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示键存在于对象中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德西门Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">香草js</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">yourObjName</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">key</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要检查对象在es2015中是否至少具有一个属性</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">yourObjName</span><span class="pun">).</span><span class="pln">length </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">false</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><a href="http://underscorejs.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，则对象/数组操作将变得简单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，可以使用_.has方法。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">yourArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">age</span><span class="pun">:</span><span class="pln"> </span><span class="str">"10"</span><span class="pun">}</span><span class="pln">

_</span><span class="pun">.</span><span class="pln">has</span><span class="pun">(</span><span class="pln">yourArray</span><span class="pun">,</span><span class="pln"> </span><span class="str">"age"</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">has</span><span class="pun">(</span><span class="pln">yourArray</span><span class="pun">,</span><span class="pln"> </span><span class="str">"invalidKey"</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"key"</span><span class="pln"> in obj</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能只测试与数组键有很大不同的对象属性值</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://stackoverflow.com/a/1098955/1619432" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是指</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当心</font><font style="vertical-align: inherit;">在</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">数组</font></a><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in" rel="noreferrer" data-bitapp="processed"><code>in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找数据而不是键：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="str">"true"</span><span class="pln"> in </span><span class="pun">[</span><span class="str">"true"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"false"</span><span class="pun">])</span><span class="pln">
</span><span class="com">// -&gt; false (Because the keys of the above Array are actually 0 and 1)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要测试数组中的现有元素：</font></font><a href="https://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找项目是否在JavaScript数组中的最佳方法？</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
