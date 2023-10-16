---
layout: question
title:  如何正确克隆JavaScript对象？
date:   2020-03-09T05:15:40.000Z
description: 我有一个物体x。我想将其复制为对象y，这样更改y就不会修改x。我意识到，复制从内置JavaScript对象派生的对象将导致额外的不需要的属性。这不是问题，...
img: 
author: Stafan小哥
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个物体</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想将其复制为对象</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这样更改</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就不会修改</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我意识到，复制从内置JavaScript对象派生的对象将导致额外的不需要的属性。</font><font style="vertical-align: inherit;">这不是问题，因为我正在复制自己的文字构造对象之一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何正确克隆JavaScript对象？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第159篇《如何正确克隆JavaScript对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> clone</span><span class="pun">(</span><span class="pln">src</span><span class="pun">,</span><span class="pln"> deep</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

    </span><span class="kwd">var</span><span class="pln"> toString </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(!</span><span class="pln">src </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">typeof</span><span class="pln"> src </span><span class="pun">!=</span><span class="pln"> </span><span class="str">"object"</span><span class="pun">){</span><span class="pln">
        </span><span class="com">//any non-object ( Boolean, String, Number ), null, undefined, NaN</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> src</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="com">//Honor native/custom clone methods</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">src</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">&amp;&amp;</span><span class="pln"> toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">.</span><span class="pln">clone</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object Function]"</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> src</span><span class="pun">.</span><span class="pln">clone</span><span class="pun">(</span><span class="pln">deep</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="com">//DOM Elements</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">src</span><span class="pun">.</span><span class="pln">nodeType </span><span class="pun">&amp;&amp;</span><span class="pln"> toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">.</span><span class="pln">cloneNode</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object Function]"</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> src</span><span class="pun">.</span><span class="pln">cloneNode</span><span class="pun">(</span><span class="pln">deep</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="com">//Date</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object Date]"</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">(</span><span class="pln">src</span><span class="pun">.</span><span class="pln">getTime</span><span class="pun">());</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="com">//RegExp</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object RegExp]"</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">RegExp</span><span class="pun">(</span><span class="pln">src</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="com">//Function</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object Function]"</span><span class="pun">){</span><span class="pln">
        </span><span class="com">//Wrap in another method to make sure == is not true;</span><span class="pln">
        </span><span class="com">//Note: Huge performance issue due to closures, comment this :)</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">
            src</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> arguments</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">

    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">var</span><span class="pln"> ret</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">;</span><span class="pln">
    </span><span class="com">//Array</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">toString</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">src</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"[object Array]"</span><span class="pun">){</span><span class="pln">
        </span><span class="com">//[].slice(0) would soft clone</span><span class="pln">
        ret </span><span class="pun">=</span><span class="pln"> src</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">();</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">deep</span><span class="pun">){</span><span class="pln">
            index </span><span class="pun">=</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">
            </span><span class="kwd">while</span><span class="pun">(</span><span class="pln">index</span><span class="pun">--){</span><span class="pln">
                ret</span><span class="pun">[</span><span class="pln">index</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> clone</span><span class="pun">(</span><span class="pln">ret</span><span class="pun">[</span><span class="pln">index</span><span class="pun">],</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span><span class="pln">
            </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="com">//Object</span><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        ret </span><span class="pun">=</span><span class="pln"> src</span><span class="pun">.</span><span class="kwd">constructor</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> src</span><span class="pun">.</span><span class="kwd">constructor</span><span class="pun">()</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> prop in src</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            ret</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> deep
                </span><span class="pun">?</span><span class="pln"> clone</span><span class="pun">(</span><span class="pln">src</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">],</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">)</span><span class="pln">
                </span><span class="pun">:</span><span class="pln"> src</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">];</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> ret</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><a href="https://stackoverflow.com/users/49695/mindeavor" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mindeavor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出要克隆的对象是“文字构造的”对象，因此一种解决方案可能是简单地</font><font style="vertical-align: inherit;">多次</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该对象，而不是克隆该对象的实例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> createMyObject</span><span class="pun">()</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> myObject</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> myObjectInstance1 </span><span class="pun">=</span><span class="pln"> createMyObject</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> myObjectInstance2 </span><span class="pun">=</span><span class="pln"> createMyObject</span><span class="pun">();</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想添加到本文中的所有</font></font><code>Object.create</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案中，以至于nodejs无法以所需的方式工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox中，结果</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"test"</span><span class="pun">:</span><span class="str">"test"</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">create</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">b</span><span class="pun">);´</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是 </font></font></p>

<p><code>{test:"test"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nodejs中 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于深层复制和克隆，先JSON.stringify然后再JSON.parse该对象：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> a</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> c</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">}};</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> deepClone </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">));</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">b</span><span class="pun">.</span><span class="pln">c </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">deepClone</span><span class="pun">));</span><span class="pln"> </span><span class="com">// { a: 0, b: { c: 0}}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对克隆简单对象感兴趣：</font></font></p>

<p><code>JSON.parse(JSON.stringify(json_original));</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源：</font></font><a href="https://stackoverflow.com/questions/18359093/how-to-copy-javascript-object-to-new-variable-not-by-reference?answertab=votes#tab-top" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何不通过引用将JavaScript对象复制到新变量？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧问题的新答案！</font><font style="vertical-align: inherit;">如果您高兴地将ECMAScript 2016（ES6）与</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Spread Syntax一起使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这很容易。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">keepMeTheSame </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">first</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Me!"</span><span class="pun">,</span><span class="pln"> second</span><span class="pun">:</span><span class="pln"> </span><span class="str">"You!"</span><span class="pun">};</span><span class="pln">
cloned </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{...</span><span class="pln">keepMeTheSame</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为对象的浅表副本提供了一种干净的方法。</font><font style="vertical-align: inherit;">进行深层复制（意味着要递归地嵌套每个对象中的每个值的新副本）需要上述较重的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript不断发展。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为有一个简单而可行的答案。</font><font style="vertical-align: inherit;">在深度复制中，有两个问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使属性彼此独立。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使方法在克隆对象上保持活动状态。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我认为一个简单的解决方案是首先进行序列化和反序列化，然后对其进行赋值以复制函数。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> deepCloned </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">source</span><span class="pun">));</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> merged </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> source</span><span class="pun">);</span><span class="pln">
</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">(</span><span class="pln">merged</span><span class="pun">,</span><span class="pln"> deepCloned</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管这个问题有很多答案，但我希望这个问题也能有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> clone </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">(</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">create</span><span class="pun">(</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">getPrototypeOf</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)),</span><span class="pln"> obj</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6解决方案，如果您想（浅）克隆一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类实例</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不仅仅是一个属性对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Lodash： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">clone</span><span class="pun">(</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 2018中</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> objClone </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">...</span><span class="pln">obj </span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍将被复制</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为参考。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">菏以飘落</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答：Levy的答案几乎是完整的，这是我的一点贡献：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种方法可以处理递归引用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请参见此行</font></font></p>

<p><code>if(this[attr]==this) copy[attr] = copy;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对象是XML DOM元素，我们必须使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cloneNode</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p>

<p><code>if(this.cloneNode) return this.cloneNode(true);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受A.Levy详尽研究和Calvin原型设计方法的启发，我提供了以下解决方案：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">cloneNode</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">cloneNode</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">);</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pln"> </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">Array</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="pun">[]</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
  </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> attr in </span><span class="kwd">this</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">typeof</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"function"</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]==</span><span class="kwd">null</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">!</span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">].</span><span class="pln">clone</span><span class="pun">)</span><span class="pln">
      copy</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">];</span><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]==</span><span class="kwd">this</span><span class="pun">)</span><span class="pln"> copy</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> copy</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">].</span><span class="pln">clone</span><span class="pun">();</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">Date</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">();</span><span class="pln">
  copy</span><span class="pun">.</span><span class="pln">setTime</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getTime</span><span class="pun">());</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">Number</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">=</span><span class="pln"> 
</span><span class="typ">Boolean</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">=</span><span class="pln">
</span><span class="typ">String</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">clone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅答案中的Andy Burke的注释。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种特别优雅的解决方案是使用JSON编码来制作没有成员方法的对象的深层副本。</font><font style="vertical-align: inherit;">方法是对目标对象进行JSON编码，然后通过对其进行解码，获得所需的副本。</font><font style="vertical-align: inherit;">您可以根据需要解码任意数量的副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，函数不属于JSON，因此仅适用于没有成员方法的对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法非常适合我的用例，因为我将JSON Blob存储在键值存储中，并且当它们在JavaScript API中作为对象公开时，每个对象实际上都包含该对象原始状态的副本，因此我们可以在调用者更改了暴露对象后计算增量。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> object1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">key</span><span class="pun">:</span><span class="str">"value"</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> object2 </span><span class="pun">=</span><span class="pln"> object1</span><span class="pun">;</span><span class="pln">

object2 </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">object1</span><span class="pun">);</span><span class="pln">
object2 </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">object2</span><span class="pun">);</span><span class="pln">

object2</span><span class="pun">.</span><span class="pln">key </span><span class="pun">=</span><span class="pln"> </span><span class="str">"a change"</span><span class="pun">;</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">object1</span><span class="pun">);</span><span class="com">// returns value</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用AngularJS的用户，此库中还有直接方法来克隆或扩展对象。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> destination </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="pln">copy</span><span class="pun">(</span><span class="pln">source</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">angular</span><span class="pun">.</span><span class="pln">copy</span><span class="pun">(</span><span class="pln">source</span><span class="pun">,</span><span class="pln"> destination</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多angular.copy </font></font><a href="https://docs.angularjs.org/api/ng/function/angular.copy" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您在下面有这个对象并且想要克隆它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">};</span><span class="pln"> </span><span class="com">//ES6</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">};</span><span class="pln"> </span><span class="com">//ES5</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案主要取决于</font><font style="vertical-align: inherit;">您使用</font><font style="vertical-align: inherit;">哪种</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAscript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在</font></font><code>ES6+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中您可以简单地使用它</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来进行克隆：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> cloned </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> obj</span><span class="pun">);</span><span class="pln"> </span><span class="com">//new {a:1, b:2, c:3};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或像这样使用传播运算符：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> cloned </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{...</span><span class="pln">obj</span><span class="pun">};</span><span class="pln"> </span><span class="com">//new {a:1, b:2, c:3};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您使用</font></font><code>ES5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用几种方法，但是</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请确保不要使用要复制的大量数据，但是在许多情况下，这可能是一种方便的方式，例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> cloned </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">));</span><span class="pln"> 
</span><span class="com">//new {a:1, b:2, c:3};, can be handy, but avoid using on big chunk of data over and over</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以使用浅表副本，那么underscore.js库提供了一个</font></font><a href="http://underscorejs.org/#clone" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">clone</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">y </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">clone</span><span class="pun">(</span><span class="pln">x</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者你可以像扩展它</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">copiedObject </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">({},</span><span class="pln">originalObject</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery，您可以</font><font style="vertical-align: inherit;">使用</font><a href="http://api.jquery.com/jQuery.extend" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">extend</font></a><font style="vertical-align: inherit;">进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浅表复制</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="http://api.jquery.com/jQuery.extend" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> copiedObject </span><span class="pun">=</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">({},</span><span class="pln"> originalObject</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对的后续更改</font></font><code>copiedObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会影响</font></font><code>originalObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，反之亦然。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深复制</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> copiedObject </span><span class="pun">=</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{},</span><span class="pln"> originalObject</span><span class="pun">)</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要浅拷贝，请使用 </font></font><code>Object.assign({}, a)</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“深层”副本，请使用 </font></font><code>JSON.parse(JSON.stringify(a))</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要外部库，但您需要首先检查</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Browser_compatibility" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器的兼容性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 6中，存在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.assign</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，该方法将所有可枚举的自身属性的值从一个对象复制到另一个对象。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">myProp</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value"</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> x</span><span class="pun">);</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，嵌套对象仍会复制为引用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多答案，但是没有一个提到</font><font style="vertical-align: inherit;">ECMAScript 5 </font><font style="vertical-align: inherit;">中的</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.create</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它当然不能提供确切的副本，但是会将源设置为新对象的原型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这不是对该问题的确切答案，而是单线解决方案，因此很优雅。</font><font style="vertical-align: inherit;">它最适合2种情况：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此类继承有用的地方（du！）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会修改源对象的地方，因此这两个对象之间的关系就不成问题了。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> a </span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> bar </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">create</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">);</span><span class="pln">
foo</span><span class="pun">.</span><span class="pln">a</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 1</span><span class="pln">
bar</span><span class="pun">.</span><span class="pln">a</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 1</span><span class="pln">
foo</span><span class="pun">.</span><span class="pln">a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span><span class="pun">;</span><span class="pln">
bar</span><span class="pun">.</span><span class="pln">a</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 2 - prototype changed</span><span class="pln">
bar</span><span class="pun">.</span><span class="pln">a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">
foo</span><span class="pun">.</span><span class="pln">a</span><span class="pun">;</span><span class="pln"> </span><span class="com">// Still 2, since setting bar.a makes it an "own" property</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我认为此解决方案更好？</font><font style="vertical-align: inherit;">它是本机的，因此没有循环，没有递归。</font><font style="vertical-align: inherit;">但是，较旧的浏览器将需要使用polyfill。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
