---
layout: question
title:  如何从JavaScript对象中删除属性？
date:   2020-03-09T04:14:51.000Z
description: 说我创建一个对象，如下所示：let myObject = {    "ircEvent"  "PRIVMSG",    "method"  "ne...
img: 
author: 乐十三
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我创建一个对象，如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除该属性</font></font><code>regex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使其最终成为new </font><font style="vertical-align: inherit;">的最佳方法是什么</font></font><code>myObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第137篇《如何从JavaScript对象中删除属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您好，您可以尝试这种简单的排序</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">

obj</span><span class="pun">.</span><span class="pln">key1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> </span><span class="str">"John"</span><span class="pun">,</span><span class="pln"> room</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1234</span><span class="pun">};</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">key2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Jim"</span><span class="pun">,</span><span class="pln"> room</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1234</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">delete</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">key1</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
        </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln">
        </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> regex</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">other </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> myObject</span><span class="pun">;</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">)</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">regex</span><span class="pun">)</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">other</span><span class="pun">)</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif10" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑创建不带</font></font><code>"regex"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的新对象，</font><font style="vertical-align: inherit;">因为原始对象始终可以被程序的其他部分引用。</font><font style="vertical-align: inherit;">因此，您应该避免对其进行操作。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> regex</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">newMyObject </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> myObject</span><span class="pun">;</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">newMyObject</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif9" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丹的断言“删除”非常缓慢，他发布的基准受到质疑。</font><font style="vertical-align: inherit;">因此，我自己在Chrome 59中进行了测试。看来“删除”的速度慢了大约30倍：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> iterationsTotal </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10000000</span><span class="pun">;</span><span class="pln">  </span><span class="com">// 10 million</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> o</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> t1 </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">(),</span><span class="pln">t2</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">iterationsTotal</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   o </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln">b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln">c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">,</span><span class="pln">d</span><span class="pun">:</span><span class="lit">4</span><span class="pun">,</span><span class="pln">e</span><span class="pun">:</span><span class="lit">5</span><span class="pun">};</span><span class="pln">
   </span><span class="kwd">delete</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">a</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">delete</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">b</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">delete</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">c</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">delete</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">d</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">delete</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">e</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log </span><span class="pun">((</span><span class="pln">t2</span><span class="pun">=</span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">())-</span><span class="pln">t1</span><span class="pun">);</span><span class="pln">  </span><span class="com">// 6135</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">iterationsTotal</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   o </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln">b</span><span class="pun">:</span><span class="lit">2</span><span class="pun">,</span><span class="pln">c</span><span class="pun">:</span><span class="lit">3</span><span class="pun">,</span><span class="pln">d</span><span class="pun">:</span><span class="lit">4</span><span class="pun">,</span><span class="pln">e</span><span class="pun">:</span><span class="lit">5</span><span class="pun">};</span><span class="pln">
   o</span><span class="pun">.</span><span class="pln">a </span><span class="pun">=</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">b </span><span class="pun">=</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">c </span><span class="pun">=</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">d </span><span class="pun">=</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">e </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log </span><span class="pun">(</span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()-</span><span class="pln">t2</span><span class="pun">);</span><span class="pln">  </span><span class="com">// 205</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我有意在一个循环中执行了多个“删除”操作，以最大程度地减少其他操作引起的影响。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用删除对象的任何属性 </font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">key1</span><span class="pun">:</span><span class="str">"val1"</span><span class="pun">,</span><span class="pln">key2</span><span class="pun">:</span><span class="str">"val2"</span><span class="pun">,</span><span class="pln">key3</span><span class="pun">:</span><span class="str">"val3"</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除任何属性，请说</font></font><code>key1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用如下</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">delete</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">key1</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您也可以使用类似数组的符号：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">delete</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">key1</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.assign（）和Object.keys（）和Array.map（）</font></font></h1>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"Filters"</span><span class="pun">:[</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
            </span><span class="str">"FilterType"</span><span class="pun">:</span><span class="str">"between"</span><span class="pun">,</span><span class="pln">
            </span><span class="str">"Field"</span><span class="pun">:</span><span class="str">"BasicInformationRow.A0"</span><span class="pun">,</span><span class="pln">
            </span><span class="str">"MaxValue"</span><span class="pun">:</span><span class="str">"2017-10-01"</span><span class="pun">,</span><span class="pln">
            </span><span class="str">"MinValue"</span><span class="pun">:</span><span class="str">"2017-09-01"</span><span class="pun">,</span><span class="pln">
            </span><span class="str">"Value"</span><span class="pun">:</span><span class="str">"Filters value"</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">]</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> new_obj1 </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> obj</span><span class="pun">.</span><span class="typ">Filters</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]);</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> new_obj2 </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> obj</span><span class="pun">.</span><span class="typ">Filters</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]);</span><span class="pln">

</span><span class="com">/*

// old version

let shaped_obj1 = Object.keys(new_obj1).map(
    (key, index) =&gt; {
        switch (key) {
            case "MaxValue":
                delete new_obj1["MaxValue"];
                break;
            case "MinValue":
                delete new_obj1["MinValue"];
                break;
        }
        return new_obj1;
    }
)[0];


let shaped_obj2 = Object.keys(new_obj2).map(
    (key, index) =&gt; {
        if(key === "Value"){
            delete new_obj2["Value"];
        }
        return new_obj2;
    }
)[0];


*/</span><span class="pln">


</span><span class="com">// new version!</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> shaped_obj1 </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">new_obj1</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">switch</span><span class="pln"> </span><span class="pun">(</span><span class="pln">key</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">case</span><span class="pln"> </span><span class="str">"MaxValue"</span><span class="pun">:</span><span class="pln">
                </span><span class="kwd">delete</span><span class="pln"> new_obj1</span><span class="pun">[</span><span class="str">"MaxValue"</span><span class="pun">];</span><span class="pln">
                </span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
            </span><span class="kwd">case</span><span class="pln"> </span><span class="str">"MinValue"</span><span class="pun">:</span><span class="pln">
                </span><span class="kwd">delete</span><span class="pln"> new_obj1</span><span class="pun">[</span><span class="str">"MinValue"</span><span class="pun">];</span><span class="pln">
                </span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
            </span><span class="kwd">default</span><span class="pun">:</span><span class="pln">
                </span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> shaped_obj2 </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">keys</span><span class="pun">(</span><span class="pln">new_obj2</span><span class="pun">).</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">(</span><span class="pln">key</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">key </span><span class="pun">===</span><span class="pln"> </span><span class="str">"Value"</span><span class="pun">){</span><span class="pln">
            </span><span class="kwd">delete</span><span class="pln"> new_obj2</span><span class="pun">[</span><span class="str">"Value"</span><span class="pun">];</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif8" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请尝试以下方法。</font><font style="vertical-align: inherit;">将</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性值</font><font style="vertical-align: inherit;">分配</font><font style="vertical-align: inherit;">给</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后</font></font><code>stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是对象和</font></font><code>parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">

myObject</span><span class="pun">.</span><span class="pln">regex </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">;</span><span class="pln">
myObject </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">));</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif7" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tony小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多很好的答案，但我只是想提醒一下，在使用delete删除JavaScript中的属性时，通常最好先检查该属性是否存在以防止错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"property"</span><span class="pun">:</span><span class="str">"value"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"property2"</span><span class="pun">:</span><span class="str">"value"</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj </span><span class="pun">&amp;&amp;</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="str">"property2"</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">delete</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">property2</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="com">//error handling</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JavaScript的动态特性，通常在某些情况下您根本不知道该属性是否存在。</font><font style="vertical-align: inherit;">检查obj在&amp;&amp;之前是否存在，还可以确保您不会由于未定义对象上调用hasOwnProperty（）函数而引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，这没有添加到您的特定用例中，但是我相信这是在管理对象及其属性时可以适应的一个很好的设计。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要删除深深嵌套在对象中的属性，则可以使用以下递归函数，并将该属性的路径作为第二个参数：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> deepObjectRemove </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> path_to_key</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">path_to_key</span><span class="pun">.</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">1</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">delete</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">path_to_key</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]];</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="kwd">else</span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">path_to_key</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]])</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> deepObjectRemove</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">path_to_key</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]],</span><span class="pln"> path_to_key</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">));</span><span class="pln">
        </span><span class="kwd">else</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    level1</span><span class="pun">:{</span><span class="pln">
        level2</span><span class="pun">:{</span><span class="pln">
            level3</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                level4</span><span class="pun">:</span><span class="pln"> </span><span class="str">"yolo"</span><span class="pln">
            </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

deepObjectRemove</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">"level1"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"level2"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"level3"</span><span class="pun">]);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span><span class="pln">

</span><span class="com">//Prints {level1: {level2: {}}}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（解构+传播运算符）</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    regex</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">,</span><span class="pln">
    b</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln">
    c</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln">
</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> regex</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">noRegex </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> myObject</span><span class="pun">;</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">noRegex</span><span class="pun">);</span><span class="pln"> </span><span class="com">// =&gt; { b: 2, c: 3 }</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是使用</font></font><a href="https://underscorejs.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><code>_.pick()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>_.omit()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都返回对象的副本，但不直接修改原始对象。</font><font style="vertical-align: inherit;">将结果分配给原始对象应该可以解决这个问题（未显示）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="http://underscorejs.org/#pick" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.pick（object，* keys）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回对象的副本，将其过滤为仅具有列入白名单的键（或有效键的数组）的值。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myJSONObject </span><span class="pun">=</span><span class="pln"> 
</span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">

_</span><span class="pun">.</span><span class="pln">pick</span><span class="pun">(</span><span class="pln">myJSONObject</span><span class="pun">,</span><span class="pln"> </span><span class="str">"ircEvent"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="http://underscorejs.org/#omit" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">link </font></font></a> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.omit（object，* keys）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回对象的副本，该对象经过过滤以省略列入黑名单的键（或键数组）。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myJSONObject </span><span class="pun">=</span><span class="pln"> 
</span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">

_</span><span class="pun">.</span><span class="pln">omit</span><span class="pun">(</span><span class="pln">myJSONObject</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于数组，</font></font><code>_.filter()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>_.reject()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以以类似的方式使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧问题，现代答案。</font><font style="vertical-align: inherit;">使用对象分解（</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能），它很简单：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> a</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">rest </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> a</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或带有问题样本：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> regex</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">newObject </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> myObject</span><span class="pun">;</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">newObject</span><span class="pun">);</span></code></pre>

<p><a href="https://babeljs.io/repl/#?babili=false&amp;evaluate=true&amp;lineWrap=true&amp;presets=es2015%2Cstage-0&amp;experimental=true&amp;loose=true&amp;spec=false&amp;code=const%20myObject%20%3D%20%7B%22ircEvent%22%3A%20%22PRIVMSG%22%2C%20%22method%22%3A%20%22newURI%22%2C%20%22regex%22%3A%20%22%5Ehttp%3A%2F%2F.*%22%7D%3B%0Aconst%20%7B%20regex%2C%20...newObject%20%7D%20%3D%20myObject%3B%0Aconsole.log(newObject)%3B" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Babel试用版编辑器中看到它的运行情况。</font></font></a></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要重新分配给同一变量，请使用</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">
</span><span class="pun">({</span><span class="pln"> regex</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">myObject </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> myObject</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">myObject</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pun">};</span><span class="pln">
    
</span><span class="kwd">delete</span><span class="pln"> myObject</span><span class="pun">.</span><span class="pln">regex</span><span class="pun">;</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log </span><span class="pun">(</span><span class="pln"> myObject</span><span class="pun">.</span><span class="pln">regex</span><span class="pun">);</span><span class="pln"> </span><span class="com">// logs: undefined</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于Firefox和Internet Explorer，我认为它适用于所有其他产品。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
