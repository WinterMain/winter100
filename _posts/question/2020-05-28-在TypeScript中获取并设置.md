---
layout: question
title:  在TypeScript中获取并设置
date:   2020-05-28T07:38:37.000Z
description: 我正在尝试为属性创建get和set方法：private _name  string;Name() {    get     {       ...
img: 
author: 十三
category: question
answer: 4
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试为属性创建get和set方法：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">private</span><span class="pln"> _name</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">

</span><span class="typ">Name</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">get</span><span class="pun">:</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_name</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">set</span><span class="pun">:</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_name </span><span class="pun">=</span><span class="pln"> </span><span class="pun">???;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置值的关键字是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小次郎</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以写这个</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Human</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> firstName </span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> lastName </span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">constructor</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
        </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">FirstName</span><span class="pun">?:</span><span class="pln">string</span><span class="pun">,</span><span class="pln"> 
        </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">LastName</span><span class="pun">?:</span><span class="pln">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">get</span><span class="pln"> </span><span class="typ">FirstName</span><span class="pun">()</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> string </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Get FirstName : "</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">firstName</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">firstName</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">set</span><span class="pln"> </span><span class="typ">FirstName</span><span class="pun">(</span><span class="pln">value </span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Set FirstName : "</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">firstName </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln"> 

    </span><span class="kwd">get</span><span class="pln"> </span><span class="typ">LastName</span><span class="pun">()</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> string </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Get LastName : "</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastName</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastName</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">set</span><span class="pln"> </span><span class="typ">LastName</span><span class="pun">(</span><span class="pln">value </span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Set LastName : "</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastName </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln"> 

</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用TypeScript模块并尝试添加导出的getter，则可以执行以下操作：</font></font></p>



<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// dataStore.ts</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">const</span><span class="pln"> myData</span><span class="pun">:</span><span class="pln"> string </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">;</span><span class="pln">  </span><span class="com">// just for typing support</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> _myData</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">  </span><span class="com">// for memoizing the getter results</span><span class="pln">

</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">defineProperty</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> </span><span class="str">"myData"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">get</span><span class="pun">:</span><span class="pln"> </span><span class="pun">():</span><span class="pln"> string </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">_myData </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            _myData </span><span class="pun">=</span><span class="pln"> </span><span class="str">"my data"</span><span class="pun">;</span><span class="pln">  </span><span class="com">// pretend this took a long time</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">

        </span><span class="kwd">return</span><span class="pln"> _myData</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在另一个文件中，您将拥有：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> as dataStore </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"./dataStore"</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">dataStore</span><span class="pun">.</span><span class="pln">myData</span><span class="pun">);</span><span class="pln"> </span><span class="com">// "my data"</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript使用类似于ActionScript3的getter / setter语法。  </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> foo </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> _bar</span><span class="pun">:</span><span class="pln"> boolean </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">get</span><span class="pln"> bar</span><span class="pun">():</span><span class="pln"> boolean </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_bar</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">set</span><span class="pln"> bar</span><span class="pun">(</span><span class="pln">value</span><span class="pun">:</span><span class="pln"> boolean</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_bar </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使用ECMAScript 5 </font></font><code>Object.defineProperty()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">生成此JavaScript </font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_bar </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">defineProperty</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">,</span><span class="pln"> </span><span class="str">"bar"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">get</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_bar</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        </span><span class="kwd">set</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_bar </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        enumerable</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
        configurable</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
    </span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> foo</span><span class="pun">;</span><span class="pln">
</span><span class="pun">})();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以要使用它</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myFoo </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> foo</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">if</span><span class="pun">(</span><span class="pln">myFoo</span><span class="pun">.</span><span class="pln">bar</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">         </span><span class="com">// calls the getter</span><span class="pln">
    myFoo</span><span class="pun">.</span><span class="pln">bar </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">  </span><span class="com">// calls the setter and passes false</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，要完全使用它，必须确保TypeScript编译器以ECMAScript5为目标。</font><font style="vertical-align: inherit;">如果您正在运行命令行编译器，则使用如下</font></font><code>--target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">tsc </span><span class="pun">--</span><span class="pln">target ES5</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是Visual Studio，则必须编辑项目文件以将标志添加到TypeScriptCompile构建工具的配置中。</font><font style="vertical-align: inherit;">您可以</font></font><a href="https://stackoverflow.com/a/17261732/1733315"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像@DanFromGermany在下面建议的那样，如果您只是在读写本地属性（例如）</font></font><code>foo.bar = true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么拥有一对setter和getter对就太过分了。</font><font style="vertical-align: inherit;">如果需要在读取或写入属性时执行某些操作（例如日志记录），则以后可以随时添加它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个工作示例，应该为您指明正确的方向：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Foo</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    _name</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">get</span><span class="pln"> </span><span class="typ">Name</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_name</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">set</span><span class="pln"> </span><span class="typ">Name</span><span class="pun">(</span><span class="pln">val</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_name </span><span class="pun">=</span><span class="pln"> val</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的getter和setter只是正常功能。</font><font style="vertical-align: inherit;">设置器是一个函数，它接受一个参数，其值就是要设置的值。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
