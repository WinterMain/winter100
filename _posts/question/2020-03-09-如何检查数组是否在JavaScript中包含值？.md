---
layout: question
title:  如何检查数组是否在JavaScript中包含值？
date:   2020-03-09T04:50:03.000Z
description: 找出JavaScript数组是否包含值的最简洁，最有效的方法是什么？这是我知道的唯一方法：function contains(a, obj) {...
img: 
author: ASamJim
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找出JavaScript数组是否包含值的最简洁，最有效的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我知道的唯一方法：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> contains</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更好，更简洁的方法来实现这一目标？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与Stack Overflow问题密切相关。</font></font><em><a href="https://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript数组中查找项目的最佳方法？</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决使用数组查找对象的问题</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，您只需</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优化</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码即可获得结果！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以做到这一点越来越好，但是我只想获取您的模式并将其应用于</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需在您的情况下简单地执行以下操作即可：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> contains</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">a</span><span class="pun">[</span><span class="pln">i</span><span class="pun">])</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然这</font></font><code>array.indexOf(x)!=-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是最简洁的方法（并且十多年来一直受非Internet Explorer浏览器的支持...），但这不是O（1），而是O（N），这很糟糕。</font><font style="vertical-align: inherit;">如果您的数组不会改变，则可以将其转换为哈希表，然后执行</font></font><code>table[x]!==undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下操作</font></font><code>===undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">toTable </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> t </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">x</span><span class="pun">){</span><span class="pln">t</span><span class="pun">[</span><span class="pln">x</span><span class="pun">]=</span><span class="kwd">true</span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> t</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> toRemove </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">2</span><span class="pun">,</span><span class="lit">4</span><span class="pun">].</span><span class="pln">toTable</span><span class="pun">();</span><span class="pln">
</span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">,</span><span class="lit">5</span><span class="pun">].</span><span class="pln">filter</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">x</span><span class="pun">){</span><span class="kwd">return</span><span class="pln"> toRemove</span><span class="pun">[</span><span class="pln">x</span><span class="pun">]===</span><span class="kwd">undefined</span><span class="pun">})</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不幸的是，尽管您可以创建一个Array.prototype.contains来“冻结”一个数组并将哈希表存储在两行中的this._cache中，但是如果您以后选择编辑数组，则会产生错误的结果。JavaScript的钩子不足让您保持这种状态，例如与Python不同。）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您反复检查数组中是否存在某个对象，则应考虑一下</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">在数组中</font><font style="vertical-align: inherit;">进行</font></font><a href="http://en.wikipedia.org/wiki/Insertion_sort" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插入排序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">始终</font><font style="vertical-align: inherit;">将新对象放在正确的位置）来</font><font style="vertical-align: inherit;">始终保持数组的排序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使更新对象成为remove + sorted插入操作，并且</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中使用</font></font><a href="http://en.wikipedia.org/wiki/Binary_search_algorithm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二进制搜索</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找</font></font><code>contains(a, obj)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Chloe</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> inArray</span><span class="pun">(</span><span class="pln">elem</span><span class="pun">,</span><span class="pln">array</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> len </span><span class="pun">=</span><span class="pln"> array</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++)</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">array</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> elem</span><span class="pun">){</span><span class="kwd">return</span><span class="pln"> i</span><span class="pun">;}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果找到，则返回数组索引；如果找不到，则返回-1</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是JavaScript 1.6或更高版本（Firefox 1.5或更高版本），则可以使用</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/indexOf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.indexOf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">否则，我认为您最终将得到与原始代码相似的东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> contains</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">some</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">element</span><span class="pun">){</span><span class="kwd">return</span><span class="pln"> element </span><span class="pun">==</span><span class="pln"> obj</span><span class="pun">;})</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.prototype.some（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已在第5版中添加到ECMA-262标准中</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单线：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> contains</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">elem</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> elem </span><span class="pun">==</span><span class="pln"> x </span><span class="pun">}).</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展JavaScript </font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是一个非常糟糕的主意，因为您将新属性（您的自定义方法）引入了</font></font><code>for-in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能破坏现有脚本的循环中。</font><font style="vertical-align: inherit;">几年前，</font></font><a href="http://en.wikipedia.org/wiki/Prototype_JavaScript_Framework" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font><font style="vertical-align: inherit;">的作者</font><font style="vertical-align: inherit;">不得不重新设计其库实现，以删除此类内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不必担心与页面上运行的其他JavaScript的兼容性，请坚持下去，否则，我建议您使用更笨拙但更安全的独立功能解决方案。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Near小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isInArray</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> search</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> array</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="pln">search</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Usage</span><span class="pln">
</span><span class="kwd">if</span><span class="pun">(</span><span class="pln">isInArray</span><span class="pun">(</span><span class="pln">my_array</span><span class="pun">,</span><span class="pln"> </span><span class="str">"my_value"</span><span class="pun">))</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="com">//...</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/indexOf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript 1.6兼容的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现</font></font><code>Array.indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="typ">Array</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="typ">Array</span><span class="pun">.</span><span class="pln">indexOf </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[].</span><span class="pln">indexOf </span><span class="pun">?</span><span class="pln">
        </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln"> </span><span class="pun">:</span><span class="pln">
        </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">// (for IE6)</span><span class="pln">
            </span><span class="kwd">var</span><span class="pln"> l </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">length</span><span class="pun">,</span><span class="pln">
                i </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> parseInt</span><span class="pun">((</span><span class="lit">1</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">from</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> l </span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">),</span><span class="pln"> </span><span class="lit">10</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
            i </span><span class="pun">=</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
            </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> l</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i in arr </span><span class="pun">&amp;&amp;</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    </span><span class="kwd">return</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
                </span><span class="pun">}</span><span class="pln">
            </span><span class="pun">}</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">};</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小胖米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开箱即用地思考一下，如果您多次进行此调用，则使用</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关联数组</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Map来使用哈希函数进行查找</font><font style="vertical-align: inherit;">要高效得多</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf" rel="noreferrer"><code>indexOf</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 也许，但这是“ ECMA-262标准的JavaScript扩展；因此，该标准的其他实现中可能不存在此扩展”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">indexOf</span><span class="pun">(</span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pln">
</span><span class="pun">[</span><span class="str">"foo"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"bar"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"baz"</span><span class="pun">].</span><span class="pln">indexOf</span><span class="pun">(</span><span class="str">"bar"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
</span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">indexOf</span><span class="pun">(</span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AFAICS </font></font><a href="http://msdn.microsoft.com/en-us/library/k4h76zbx%5C%28VS.85%5C%29.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">微软并</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供某种替代的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一点，但你可以在Internet Explorer阵列（和不支持其他浏览器加入类似的功能</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果你希望），作为一个</font></font><a href="http://google.com/search?q=indexof%20internet%20explorer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速谷歌搜索发现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如，</font></font><a href="http://soledadpenades.com/2007/05/17/arrayindexof-in-internet-explorer/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 7引入了</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="noreferrer"><code>Array.prototype.includes</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以这样使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">includes</span><span class="pun">(</span><span class="lit">2</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span><span class="pln">
</span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">includes</span><span class="pun">(</span><span class="lit">4</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还接受一个可选的第二个参数</font></font><code>fromIndex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">includes</span><span class="pun">(</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false</span><span class="pln">
</span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">].</span><span class="pln">includes</span><span class="pun">(</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不像</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它采用</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-strict-equality-comparison" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格相等比较</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>includes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较了使用</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SameValueZero</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平等算法。</font><font style="vertical-align: inherit;">这意味着您可以检测数组是否包含</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">NaN</span><span class="pun">].</span><span class="pln">includes</span><span class="pun">(</span><span class="kwd">NaN</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不同于</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>includes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会跳过缺少的索引：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">(</span><span class="lit">5</span><span class="pun">).</span><span class="pln">includes</span><span class="pun">(</span><span class="kwd">undefined</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，它仍然是草稿，但可以对其进行多</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使其在所有浏览器上均可使用。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
