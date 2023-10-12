---
layout: question
title:  如何遍历或枚举JavaScript对象？
date:   2020-03-09T05:28:15.000Z
description: 我有一个如下的JavaScript对象：var p = {    "p1"  "value1",    "p2"  "value2",    "...
img: 
author: 伽罗理查德
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个如下的JavaScript对象：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我想通过所有回路</font></font><code>p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素（</font></font><code>p1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...），并得到他们的键和值。</font><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以根据需要修改JavaScript对象。</font><font style="vertical-align: inherit;">我的最终目标是遍历一些键值对，如果可能的话，我想避免使用</font></font><code>eval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第168篇《如何遍历或枚举JavaScript对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最新的ES脚本中，您可以执行以下操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">(</span><span class="pln">p</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ES06开始，您可以使用</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> arrValues </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">values</span><span class="pun">(</span><span class="pln"> yourObject</span><span class="pun">)</span><span class="pln"> </span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它返回对象值的数组，并且不从原型中提取值！</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN DOCS Object.values（）</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和钥匙（在这里我已经回答了） </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> arrKeys   </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">yourObject</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到ES6，我想添加自己的糖勺，并提供另一种方法来遍历对象的属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于普通的JS对象不是</font><font style="vertical-align: inherit;">开箱即用的，</font><font style="vertical-align: inherit;">所以不能</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols" rel="nofollow" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此我们无法使用</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环来迭代其内容。</font><font style="vertical-align: inherit;">但是没有人能阻止我们</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其变得可迭代</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们有</font></font><code>book</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> book </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  title</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Amazing book"</span><span class="pun">,</span><span class="pln">
  author</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Me"</span><span class="pun">,</span><span class="pln">
  pages</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

book</span><span class="pun">[</span><span class="typ">Symbol</span><span class="pun">.</span><span class="pln">iterator</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">

  </span><span class="kwd">let</span><span class="pln"> properties </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln"> </span><span class="com">// returns an array with property names</span><span class="pln">
  </span><span class="kwd">let</span><span class="pln"> counter </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">let</span><span class="pln"> isDone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">

  </span><span class="kwd">let</span><span class="pln"> next </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">counter </span><span class="pun">&gt;=</span><span class="pln"> properties</span><span class="pun">.</span><span class="pln">length</span><span class="pun">){</span><span class="pln">
      isDone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> done</span><span class="pun">:</span><span class="pln"> isDone</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">properties</span><span class="pun">[</span><span class="pln">counter</span><span class="pun">++]]</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> next </span><span class="pun">};</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既然我们做到了，我们可以这样使用它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> pValue </span><span class="kwd">of</span><span class="pln"> book</span><span class="pun">){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">pValue</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="pun">------------------------</span><span class="pln">
</span><span class="typ">Amazing</span><span class="pln"> book
</span><span class="typ">Me</span><span class="pln">
</span><span class="lit">3</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您知道ES6 </font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function*" rel="nofollow" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成器的功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么您当然可以使上面的代码更短。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">book</span><span class="pun">[</span><span class="typ">Symbol</span><span class="pun">.</span><span class="pln">iterator</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">*(){</span><span class="pln">

  </span><span class="kwd">let</span><span class="pln"> properties </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> p </span><span class="kwd">of</span><span class="pln"> properties</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">yield</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">p</span><span class="pun">];</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">级别</font><font style="vertical-align: inherit;">可迭代的情况下</font><font style="vertical-align: inherit;">将此类行为应用于所有对象</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">[</span><span class="typ">Symbol</span><span class="pun">.</span><span class="pln">iterator</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{...}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，符合迭代协议的对象可以与新的ES2015功能</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="nofollow" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">一起使用，</font><font style="vertical-align: inherit;">因此我们可以将对象属性值读取为数组。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> pValues </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[...</span><span class="pln">book</span><span class="pun">];</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">pValues</span><span class="pun">);</span><span class="pln">
</span><span class="pun">-------------------------</span><span class="pln">
</span><span class="pun">[</span><span class="str">"Amazing book"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Me"</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您可以使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="nofollow" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> </span><span class="pun">[</span><span class="pln">title</span><span class="pun">,</span><span class="pln"> </span><span class="pun">,</span><span class="pln"> pages</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> book</span><span class="pun">;</span><span class="pln"> </span><span class="com">// notice that we can just skip unnecessary values</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">title</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">pages</span><span class="pun">);</span><span class="pln">
</span><span class="pun">------------------</span><span class="pln">
</span><span class="typ">Amazing</span><span class="pln"> book
</span><span class="lit">3</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">使用上面提供的所有代码</font><font style="vertical-align: inherit;">签出</font></font><a href="http://www.es6fiddle.net/isksh68n/" rel="nofollow" data-bitapp="processed"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人需要遍历</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有条件的arrayObjects</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arrayObjects </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[{</span><span class="str">"building"</span><span class="pun">:</span><span class="str">"A"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"status"</span><span class="pun">:</span><span class="str">"good"</span><span class="pun">},{</span><span class="str">"building"</span><span class="pun">:</span><span class="str">"B"</span><span class="pun">,</span><span class="str">"status"</span><span class="pun">:</span><span class="str">"horrible"</span><span class="pun">}];</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln"> arrayObjects</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">arrayObjects</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
  
  </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">key in arrayObjects</span><span class="pun">[</span><span class="pln">i</span><span class="pun">])</span><span class="pln"> </span><span class="pun">{</span><span class="pln">      
    
      </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">key </span><span class="pun">==</span><span class="pln"> </span><span class="str">"status"</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> arrayObjects</span><span class="pun">[</span><span class="pln">i</span><span class="pun">][</span><span class="pln">key</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"good"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        
          console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> arrayObjects</span><span class="pun">[</span><span class="pln">i</span><span class="pun">][</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
      </span><span class="pun">}</span><span class="kwd">else</span><span class="pun">{</span><span class="pln">
          console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"nothing found"</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif19" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>for-of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开</font></font><code>Object.keys()</code></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> object </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="str">"key1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pln">
   </span><span class="str">"key2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pln">
   </span><span class="str">"key3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" : "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> object</span><span class="pun">[</span><span class="pln">key</span><span class="pun">])</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，我们有众所周知的符号来公开一些以前的内部方法，您可以使用它定义该对象的迭代器如何工作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">*[</span><span class="typ">Symbol</span><span class="pun">.</span><span class="pln">iterator</span><span class="pun">]()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">yield</span><span class="pln"> </span><span class="pun">*</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="pun">[...</span><span class="pln">p</span><span class="pun">]</span><span class="pln"> </span><span class="com">//["p1", "p2", "p3"]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将产生与在es6循环中使用for ...相同的结果。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是了解使用es6现在所具有的功能很重要！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用纯JavaScript时，循环可能非常有趣。</font><font style="vertical-align: inherit;">似乎只有ECMA6（新的2015 JavaScript规范）可以控制循环。</font><font style="vertical-align: inherit;">不幸的是，在我撰写本文时，浏览器和流行的集成开发环境（IDE）仍在努力完全支持新功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">乍一看，这是ECMA6之前的JavaScript对象循环：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in object</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">key</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> value </span><span class="pun">=</span><span class="pln"> object</span><span class="pun">[</span><span class="pln">key</span><span class="pun">];</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">);</span><span class="pln"> </span><span class="com">// This is the key;</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">value</span><span class="pun">);</span><span class="pln"> </span><span class="com">// This is the value;</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我知道这个问题超出了范围，但在2011年，ECMAScript 5.1 </font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font><font style="vertical-align: inherit;">添加了</font><font style="vertical-align: inherit;">用于数组</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">方法基本上创建了一种新的改进方法来遍历数组，同时仍然使旧的冗长而混乱的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">成为不可迭代的对象</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是奇怪的是，这种新</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法不被支持</font></font><code>break</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这导致了各种各样的其他问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上在2011年，除了许多流行的库（jQuery，Underscore等）决定重新实现之外，没有真正可靠的方法可以在JavaScript中循环。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2015年，我们现在有了更好的开箱即用的方式来循环（和中断）任何对象类型（包括数组和字符串）。</font><font style="vertical-align: inherit;">当推荐成为主流时，JavaScript中的循环最终将是这样：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> </span><span class="pun">[</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">]</span><span class="pln"> </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">(</span><span class="pln">object</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">);</span><span class="pln"> </span><span class="com">// This is the key;</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">value</span><span class="pun">);</span><span class="pln"> </span><span class="com">// This is the value;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，自2016年6月18日起，大多数浏览器将不支持上述代码。即使在Chrome中，您也需要启用此特殊标志才能使其正常工作： </font></font><code>chrome://flags/#enable-javascript-harmony</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在成为新标准之前，仍然可以使用旧方法，但是流行的库中还有其他选择，甚至</font><font style="vertical-align: inherit;">对于那些不使用这些库的人来说，</font><font style="vertical-align: inherit;">甚至还有</font></font><a href="https://github.com/nbouvrette/forEach" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻量级的选择</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=[{</span><span class="str">"username"</span><span class="pun">:</span><span class="str">"ordermanageadmin"</span><span class="pun">,</span><span class="str">"user_id"</span><span class="pun">:</span><span class="str">"2"</span><span class="pun">,</span><span class="str">"resource_id"</span><span class="pun">:</span><span class="str">"Magento_Sales::actions"</span><span class="pun">},</span><span class="pln">
</span><span class="pun">{</span><span class="str">"username"</span><span class="pun">:</span><span class="str">"ordermanageadmin_1"</span><span class="pun">,</span><span class="str">"user_id"</span><span class="pun">:</span><span class="str">"3"</span><span class="pun">,</span><span class="str">"resource_id"</span><span class="pun">:</span><span class="str">"Magento_Sales::actions"</span><span class="pun">}]</span><span class="pln">
</span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> value in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">key</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" -&gt; "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif17" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅JavaScript代码没有依赖项：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pun">};</span><span class="pln">
keys </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">);</span><span class="pln">   </span><span class="com">// ["p1", "p2", "p3"]</span><span class="pln">

</span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> keys</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">keys</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"="</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">keys</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]]);</span><span class="pln">   </span><span class="com">// p1=value1, p2=value2, p3=value3</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Object.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法返回给定对象自己的可枚举属性的数组。</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">了解更多</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">).</span><span class="pln">map</span><span class="pun">((</span><span class="pln">key</span><span class="pun">)=&gt;</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-&gt;"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]))</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif16" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">key</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" = "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p&gt;</span><span class="pln">
  Output:</span><span class="tag">&lt;br&gt;</span><span class="pln">
  p1 = values1</span><span class="tag">&lt;br&gt;</span><span class="pln">
  p2 = values2</span><span class="tag">&lt;br&gt;</span><span class="pln">
  p3 = values3
</span><span class="tag">&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif14" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一种遍历对象的方法。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">   </span><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
</span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
</span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">


</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">key </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">])</span><span class="pln"> </span><span class="pun">})</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif11" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的forEach（） </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">其应该跳过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型链</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">each </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">f</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pln">
    </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">key</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> 
        f</span><span class="pun">(</span><span class="pln"> key </span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> 
    </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span><span class="pln">


</span><span class="com">//print all keys and values</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln">b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln">c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">}</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">});</span><span class="pln">
</span><span class="com">// a 1</span><span class="pln">
</span><span class="com">// b 2</span><span class="pln">
</span><span class="com">// c 3</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="pln">key in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]</span><span class="pln"> </span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您可以在数组上执行此操作，但是也将在</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他属性上</font><font style="vertical-align: inherit;">进行迭代</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样遍历它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  alert</span><span class="pun">(</span><span class="pln">p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会采用该属性的值，而只是一个索引值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer" data-bitapp="processed"><code>for-in</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人所示</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">循环。</font><font style="vertical-align: inherit;">但是，您还必须确保获得的键是对象的实际属性，而不是来自原型。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码段：</font></font></strong>
</p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">key</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" -&gt; "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用Object.keys（）替代：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="lit">0</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"b"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> key </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key </span><span class="pun">+</span><span class="pln"> </span><span class="str">" -&gt; "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">key</span><span class="pun">])</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用of </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer" data-bitapp="processed"><code>for-of</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer" data-bitapp="processed"><code>for-in</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果不使用它将在命名属性上返回未定义，并</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><code>Object.keys()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保仅使用对象自身的属性，而不使用整个原型链属性</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用新</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" rel="noreferrer" data-bitapp="processed"><code>Object.entries()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></strong></p>

<p><strong>Note:</strong> This method is not supported natively by Internet Explorer. You may consider using a Polyfill for older browsers.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"p1"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value1"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p2"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value2"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"p3"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"value3"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> </span><span class="pun">[</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">]</span><span class="pln"> </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">(</span><span class="pln">p</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(`</span><span class="pln">$</span><span class="pun">{</span><span class="pln">key</span><span class="pun">}:</span><span class="pln"> $</span><span class="pun">{</span><span class="pln">value</span><span class="pun">}`);</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 5下，您可以将</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><code>Object.keys()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">结合使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" rel="noreferrer" data-bitapp="processed"><code>Array.prototype.forEach()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> first</span><span class="pun">:</span><span class="pln"> </span><span class="str">"John"</span><span class="pun">,</span><span class="pln"> last</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Doe"</span><span class="pln"> </span><span class="pun">};</span><span class="pln">

</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">key</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6添加了</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer" data-bitapp="processed"><code>for...of</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">const</span><span class="pln"> key </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 8进行了添加</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" rel="noreferrer" data-bitapp="processed"><code>Object.entries()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从而避免了在原始对象中查找每个值的麻烦：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">([</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">])</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">)</span><span class="pln">
</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以合并</font></font><code>for...of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，销毁和</font></font><code>Object.entries</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">const</span><span class="pln"> </span><span class="pun">[</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">]</span><span class="pln"> </span><span class="kwd">of</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二者</font></font><code>Object.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>Object.entries()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相同的顺序作为迭代性质</font></font><code>for...in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但忽略原型链</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仅迭代对象自身的可枚举属性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 5中，您可以在文字的迭代字段中采用新方法- </font></font><code>Object.keys</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">MDN上</font></a><font style="vertical-align: inherit;">看到更多信息</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是我的选择，它是当前版本浏览器（Chrome30，IE10，FF25）中的一种更快的解决方案</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> keys </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">p</span><span class="pun">),</span><span class="pln">
    len </span><span class="pun">=</span><span class="pln"> keys</span><span class="pun">.</span><span class="pln">length</span><span class="pun">,</span><span class="pln">
    i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln">
    prop</span><span class="pun">,</span><span class="pln">
    value</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    prop </span><span class="pun">=</span><span class="pln"> keys</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
    value </span><span class="pun">=</span><span class="pln"> p</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">];</span><span class="pln">
    i </span><span class="pun">+=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将这种方法的性能与</font></font><a href="http://jsperf.com/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsperf.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的不同实现进行</font><a href="http://jsperf.com/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">比较</font></a><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><a href="http://jsperf.com/extendimplementations/2" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展实施</font></font></a></li>
<li><a href="http://jsperf.com/object-keys-iteration/30" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象键迭代</font></font></a></li>
<li><a href="http://jsperf.com/object-literal-iteration/5" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象文字迭代</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="http://kangax.github.io/es5-compat-table/#Object.keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">Kangax的compat表</font></a><font style="vertical-align: inherit;">上看到的浏览器支持</font></font><a href="http://kangax.github.io/es5-compat-table/#Object.keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于旧的浏览器，您可以使用</font></font><a href="http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> polyfill</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPD：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题上所有最受欢迎案例的性能比较</font></font><code>perfjs.info</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="http://perfjs.info/#!/384A61CA-DA2E-4FD2-A113-080010D4A42B" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象文字迭代</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for-in循环</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在使用这种循环时要非常小心，因为这会</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沿原型链循环所有属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在使用for-in循环时，请始终使用该</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来确定迭代中的当前属性是否确实是您要检查的对象的属性：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> prop in p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">p</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">prop</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">//The current property is not a direct property of p</span><span class="pln">
        </span><span class="kwd">continue</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="com">//Do your logic with the property here</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
