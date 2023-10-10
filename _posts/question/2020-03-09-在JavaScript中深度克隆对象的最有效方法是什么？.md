---
layout: question
title:  在JavaScript中深度克隆对象的最有效方法是什么？
date:   2020-03-09T04:28:24.000Z
description:                                                                          ...
img: 
author: 老丝阿飞
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="https://stackoverflow.com/help/privileges/edit-community-wiki" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克隆JavaScript对象的最有效方法是什么？</font><font style="vertical-align: inherit;">我见过</font></font><code>obj = eval(uneval(o));</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它，但这</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是非标准的，仅受Firefox支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了类似的事情，</font></font><code>obj = JSON.parse(JSON.stringify(o));</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但对效率提出了质疑。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还看到了具有各种缺陷的递归复制功能。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我很惊讶没有规范的解决方案存在。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第140篇《在JavaScript中深度克隆对象的最有效方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam番长逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Shallow copy one-liner (<a href="https://en.wikipedia.org/wiki/ECMAScript#5th_Edition" rel="noreferrer" data-bitapp="processed">ECMAScript 5th edition</a>):</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> origin </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> foo </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">origin</span><span class="pun">).</span><span class="pln">reduce</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">c</span><span class="pun">,</span><span class="pln">k</span><span class="pun">){</span><span class="pln">c</span><span class="pun">[</span><span class="pln">k</span><span class="pun">]=</span><span class="pln">origin</span><span class="pun">[</span><span class="pln">k</span><span class="pun">];</span><span class="kwd">return</span><span class="pln"> c</span><span class="pun">;},{});</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin</span><span class="pun">,</span><span class="pln"> copy</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin </span><span class="pun">==</span><span class="pln"> copy</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin</span><span class="pun">.</span><span class="pln">foo </span><span class="pun">==</span><span class="pln"> copy</span><span class="pun">.</span><span class="pln">foo</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p>And shallow copy one-liner (<a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" rel="noreferrer" data-bitapp="processed">ECMAScript 6th edition</a>, 2015):</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> origin </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> foo </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> origin</span><span class="pun">);</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin</span><span class="pun">,</span><span class="pln"> copy</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin </span><span class="pun">==</span><span class="pln"> copy</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">origin</span><span class="pun">.</span><span class="pln">foo </span><span class="pun">==</span><span class="pln"> copy</span><span class="pun">.</span><span class="pln">foo</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> clone</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln">
 </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">var</span><span class="pln"> clone </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
   clone</span><span class="pun">.</span><span class="pln">prototype </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">;</span><span class="pln">
   </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">property in obj</span><span class="pun">)</span><span class="pln"> clone</span><span class="pun">[</span><span class="pln">property</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">property</span><span class="pun">];</span><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> clone</span><span class="pun">;</span><span class="pln">
 </span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>Cloning</code> an Object was always a concern in JS, but it was all about before ES6, I list different ways of copying an object in JavaScript below, imagine you have the Object below and would like to have a deep copy of that:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> d</span><span class="pun">:</span><span class="lit">4</span><span class="pun">};</span></code></pre>

<p>There are few ways to copy this object, without changing the origin:</p>

<p>1) ES5+, Using a simple function to do the copy for you:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> deepCopyObj</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">null</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> obj </span><span class="pun">||</span><span class="pln"> </span><span class="str">"object"</span><span class="pln"> </span><span class="pun">!=</span><span class="pln"> </span><span class="kwd">typeof</span><span class="pln"> obj</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> obj</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">();</span><span class="pln">
        copy</span><span class="pun">.</span><span class="pln">setTime</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">getTime</span><span class="pun">());</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> len </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            copy</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> cloneSO</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> copy </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> attr in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">attr</span><span class="pun">))</span><span class="pln"> copy</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> cloneSO</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">attr</span><span class="pun">]);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> copy</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">throw</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Error</span><span class="pun">(</span><span class="str">"Unable to copy obj this object."</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p>2) ES5+, using JSON.parse and JSON.stringify.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln">  deepCopyObj </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">));</span></code></pre>

<p>3) AngularJs: </p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln">  deepCopyObj </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="pln">copy</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">);</span></code></pre>

<p>4) jQuery: </p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> deepCopyObj </span><span class="pun">=</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{},</span><span class="pln"> obj</span><span class="pun">);</span></code></pre>

<p>5) UnderscoreJs &amp; Loadash: </p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> deepCopyObj </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">cloneDeep</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">);</span><span class="pln"> </span><span class="com">//latest version UndescoreJs makes shallow copy</span></code></pre>

<p>Hope these help... </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GIZO-俊宏</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> clone </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> newObj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pln"> </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">)</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="pun">[]</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i in </span><span class="kwd">this</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">typeof</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"object"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            newObj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">clone</span><span class="pun">();</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">else</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
            newObj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> newObj</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span><span class="pln"> 

</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">defineProperty</span><span class="pun">(</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">,</span><span class="pln"> </span><span class="str">"clone"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">value</span><span class="pun">:</span><span class="pln"> clone</span><span class="pun">,</span><span class="pln"> enumerable</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">});</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里宝儿Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我正在使用的：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> cloneObject</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> clone </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">typeof</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">])==</span><span class="str">"object"</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">!=</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">)</span><span class="pln">
            clone</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> cloneObject</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
        </span><span class="kwd">else</span><span class="pln">
            clone</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> clone</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">gia</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看此基准测试：</font><a href="http://jsben.ch/#/bWfk9" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsben.ch/#/bWfk9" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsben.ch/#/bWfk9</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以前的测试中，速度是最主要的问题，我发现 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">))</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是深度克隆对象的最慢方法（它比</font></font><a href="https://api.jquery.com/jQuery.extend/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery.extend</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>deep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志设置为true </font><font style="vertical-align: inherit;">慢</font><font style="vertical-align: inherit;">10-20％）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>deep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志设置为</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（shallow clone）</font><font style="vertical-align: inherit;">时，jQuery.extend非常快</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个很好的选择，因为它包括一些用于类型验证的额外逻辑，并且不会复制未定义的属性等，但这也会使您慢一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道要克隆的对象的结构，或者可以避免使用深层嵌套的数组，则可以</font></font><code>for (var i in obj)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在检查hasOwnProperty时</font><font style="vertical-align: inherit;">编写一个简单的</font><font style="vertical-align: inherit;">循环来克隆对象，这将比jQuery快得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，如果您尝试在热循环中克隆已知的对象结构，则只需内联克隆过程并手动构建对象，即可获得更多的性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript跟踪引擎在优化</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环方面</font><font style="vertical-align: inherit;">很烂，</font><font style="vertical-align: inherit;">而检查hasOwnProperty也会降低您的速度。</font><font style="vertical-align: inherit;">绝对必要时，请手动克隆。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> clonedObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  knownProp</span><span class="pun">:</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">knownProp</span><span class="pun">,</span><span class="pln">
  </span><span class="pun">..</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当心</font></font><code>JSON.parse(JSON.stringify(obj))</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">- </font></font><code>JSON.stringify(new Date())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以ISO格式返回日期的字符串表示形式，该格式</font></font><code>JSON.parse()</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换回</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font></font><a href="https://stackoverflow.com/questions/11491938/issues-with-date-when-using-json-stringify-and-json-parse/11491993#11491993" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请参见此答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，请注意，至少在Chrome 65中，本机克隆不是可行的方法。</font><font style="vertical-align: inherit;">根据JSPerf的说法，通过创建新函数执行本机克隆</font><font style="vertical-align: inherit;">比使用JSON.stringify的速度要快</font><font style="vertical-align: inherit;">近</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">800倍，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而JSON.stringify的整个过程都非常快。</font></font></p>

<p><strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6更新</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Javascript ES6，请尝试使用本机方法进行克隆或浅拷贝。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> obj</span><span class="pun">);</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您的对象中只有变量，而没有任何函数，则可以使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> newObject </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">oldObject</span><span class="pun">));</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
