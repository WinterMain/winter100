---
layout: question
title:  如何测试一个空的JavaScript对象？
date:   2020-03-09T05:20:44.000Z
description: 在AJAX请求之后，有时我的应用程序可能返回一个空对象，例如：var a = {};如何检查情况呢？...
img: 
author: Tom小小蛋蛋
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在AJAX请求之后，有时我的应用程序可能返回一个空对象，例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查情况呢？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If jQuery and the web browser is not available, there is also an isEmpty function in underscore.js.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({})</span><span class="pln"> </span><span class="com">// returns true</span></code></pre>

<p>Additionally, it does not assume the input parameter to be an object. For a list or string or undefined, it will also turn the correct answer.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery </font></font><code>isEmptyObject()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">具有特殊功能</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">jQuery</span><span class="pun">.</span><span class="pln">isEmptyObject</span><span class="pun">({})</span><span class="pln"> </span><span class="com">// true</span><span class="pln">
jQuery</span><span class="pun">.</span><span class="pln">isEmptyObject</span><span class="pun">({</span><span class="pln"> foo</span><span class="pun">:</span><span class="pln"> </span><span class="str">"bar"</span><span class="pln"> </span><span class="pun">})</span><span class="pln"> </span><span class="com">// false</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步了解</font></font><a href="http://api.jquery.com/jQuery.isEmptyObject/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery.isEmptyObject/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会去检查它是否至少有一把钥匙。</font><font style="vertical-align: inherit;">这就足以告诉我它不是空的。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">typeof</span><span class="pln"> obj </span><span class="pun">!==</span><span class="pln"> </span><span class="str">"undefined"</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="typ">Boolean</span><span class="pun">(</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">])</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">不知</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font><strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">Object.entries（）</font></a></strong><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2017</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范</font><font style="vertical-align: inherit;">，使用任何现代浏览器均可轻松进行检查-</font></font><strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></strong><font style="vertical-align: inherit;"></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">entries</span><span class="pun">({}).</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用这个。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isObjectEmpty</span><span class="pun">(</span><span class="pln">object</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> isEmpty </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">keys in object</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
     isEmpty </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
     </span><span class="kwd">break</span><span class="pun">;</span><span class="pln"> </span><span class="com">// exiting since we found that the object is not empty</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> isEmpty</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln"> </span><span class="com">// Object is empty</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> isEmpty  </span><span class="pun">=</span><span class="pln"> isObjectEmpty</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">);</span><span class="pln"> </span><span class="com">// will return true;</span><span class="pln">

</span><span class="com">// populating the object</span><span class="pln">
myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"name"</span><span class="pun">:</span><span class="str">"John Smith"</span><span class="pun">,</span><span class="str">"Address"</span><span class="pun">:</span><span class="str">"Kochi, Kerala"</span><span class="pun">};</span><span class="pln"> 

</span><span class="com">// check if the object is empty</span><span class="pln">
isEmpty  </span><span class="pun">=</span><span class="pln"> isObjectEmpty</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">);</span><span class="pln"> </span><span class="com">// will return false;</span></code></pre>

<p><a href="https://kiranvj.com/blog/blog/2012/05/01/how-to-check-if-a-javascript-object-is-empty/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用isEmptyObject的jQuery实现</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmptyObject</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> name</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">name in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧的问题，但是有问题。</font><font style="vertical-align: inherit;">如果您唯一的目的是检查对象是否为空，那么包含JQuery并不是一个好主意。</font><font style="vertical-align: inherit;">相反，只需深入</font></font><a href="http://code.jquery.com/jquery-1.9.0.js" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JQuery的代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您就会得到答案：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmptyObject</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> name</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">name in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">name</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于空对象，使用Object.keys（obj）.length（如上文ECMA 5+所建议）的速度要慢10倍！</font><font style="vertical-align: inherit;">保持旧学校（for ... in）的选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过在Node，Chrome，Firefox和IE 9下的测试，很明显对于大多数用例：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（for ... in ...）是最快的选择！</font></font></strong> </li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空对象的Object.keys（obj）.length慢10倍</font></font></strong></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON.stringify（obj）.length总是最慢的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不</font><strong><font style="vertical-align: inherit;">令人惊讶</font></strong><font style="vertical-align: inherit;">）</font></font></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些系统上，</font><strong><font style="vertical-align: inherit;">Object.getOwnPropertyNames（obj）.length花费的时间比Object.keys（obj）.length</font></strong><font style="vertical-align: inherit;">可以更长。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明智地使用底线，请使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> 
   </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> x in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> x in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">x</span><span class="pun">))</span><span class="pln">  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font><a href="https://stackoverflow.com/questions/4994201/is-object-empty/34491287#34491287" data-bitapp="processed"><font style="vertical-align: inherit;">“对象为空吗？”中的</font></a><font style="vertical-align: inherit;">详细测试结果和测试代码</font></font><a href="https://stackoverflow.com/questions/4994201/is-object-empty/34491287#34491287" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以检查对象键的数量：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">a</span><span class="pun">).</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// not empty</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是较新的浏览器，则有一种简单的方法。
</font></font><code>Object.keys(obj).length == 0</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的首选解决方案：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
</span><span class="kwd">return</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> </span><span class="com">//returns 0 if empty or an integer &gt; 0 if non-empty</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿AJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://underscorejs.org/#isEmpty" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Browser_compatibility" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA 5+</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// because Object.keys(new Date()).length === 0;</span><span class="pln">
</span><span class="com">// we have to do some additional check</span><span class="pln">
</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> obj</span><span class="pun">.</span><span class="kwd">constructor</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="typ">Object</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过请注意，这会创建不必要的数组（的返回值</font></font><code>keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA 5之前的版本：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> prop in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">prop</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">({});</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><a href="https://api.jquery.com/jQuery.isEmptyObject/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">jQuery</span><span class="pun">.</span><span class="pln">isEmptyObject</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://lodash.com/docs#isEmpty" rel="nofollow noreferrer" data-bitapp="processed">lodash</a>:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://underscorejs.org/#isEmpty" rel="nofollow noreferrer" data-bitapp="processed">Underscore</a>:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">_</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://github.com/hapijs/hoek" rel="nofollow noreferrer" data-bitapp="processed">Hoek</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Hoek</span><span class="pun">.</span><span class="pln">deepEqual</span><span class="pun">({},</span><span class="pln"> </span><span class="pun">{});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://docs.sencha.com/extjs/6.0.2/modern/Ext.Object.html#method-isEmpty" rel="nofollow noreferrer" data-bitapp="processed">ExtJS</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Ext</span><span class="pun">.</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://docs.angularjs.org/api/ng/function/angular.equals" rel="nofollow noreferrer" data-bitapp="processed">AngularJS (version 1)</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">angular</span><span class="pun">.</span><span class="pln">equals</span><span class="pun">({},</span><span class="pln"> </span><span class="pun">{});</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><a href="https://ramdajs.com/docs/#isEmpty" rel="nofollow noreferrer" data-bitapp="processed">Ramda</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">R</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">({});</span><span class="pln"> </span><span class="com">// true</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些同样的问题但使用jQuery的人，可以使用</font></font><a href="http://api.jquery.com/jQuery.isEmptyObject/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery.isEmptyObject</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天伽罗宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pun">(</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">getOwnPropertyNames</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pun">){</span><span class="pln">
  </span><span class="com">//is empty</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="http://bencollier.net/2011/04/javascript-is-an-object-empty/" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://bencollier.net/2011/04/javascript-is-an-object-empty/</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有简单的方法可以做到这一点。</font><font style="vertical-align: inherit;">您必须显式地遍历属性：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> prop in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">prop</span><span class="pun">))</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Browser_compatibility" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5支持，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则可以</font></font><code>Object.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isEmpty</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
