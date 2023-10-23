---
layout: question
title:  在JavaScript中创建GUID / UUID？
date:   2020-03-09T04:45:25.000Z
description: 我正在尝试在JavaScript中创建全局唯一标识符。我不确定所有浏览器上都提供哪些例程，内置随机数生成器的“随机性”和种子的播种方式等等。GUID ...
img: 
author: 小胖Gil
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在JavaScript中创建全局唯一标识符。</font><font style="vertical-align: inherit;">我不确定所有浏览器上都提供哪些例程，内置随机数生成器的“随机性”和种子的播种方式等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GUID / UUID至少应包含32个字符，并且应保持在ASCII范围内，以免在传递它们时遇到麻烦。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第149篇《在JavaScript中创建GUID / UUID？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>ES6 sample</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> guid</span><span class="pun">=()=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">const</span><span class="pln"> s4</span><span class="pun">=()=&gt;</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">((</span><span class="lit">1</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">())</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">0x10000</span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">).</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><span class="pln">     
  </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">`</span><span class="pln">$</span><span class="pun">{</span><span class="pln">s4</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s4</span><span class="pun">()}-</span><span class="pln">$</span><span class="pun">{</span><span class="pln">s4</span><span class="pun">()}-</span><span class="pln">$</span><span class="pun">{</span><span class="pln">s4</span><span class="pun">()}-</span><span class="pln">$</span><span class="pun">{</span><span class="pln">s4</span><span class="pun">()}-</span><span class="pln">$</span><span class="pun">{</span><span class="pln">s4</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s4</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s4</span><span class="pun">()}`;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些希望与rfc4122版本4兼容的解决方案并考虑速度的人（对Math.random（）的调用很少）：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> rand </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> UUID</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> nbr</span><span class="pun">,</span><span class="pln"> randStr </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">do</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        randStr </span><span class="pun">+=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">nbr </span><span class="pun">=</span><span class="pln"> rand</span><span class="pun">()).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">).</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">randStr</span><span class="pun">.</span><span class="pln">length </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">30</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
        randStr</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">8</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        randStr</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">8</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-4"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        randStr</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">12</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        </span><span class="pun">((</span><span class="pln">nbr</span><span class="pun">*</span><span class="lit">4</span><span class="pun">|</span><span class="lit">0</span><span class="pun">)+</span><span class="lit">8</span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="com">// [89ab]</span><span class="pln">
        randStr</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">15</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"-"</span><span class="pln"> </span><span class="pun">+</span><span class="pln">
        randStr</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">18</span><span class="pun">,</span><span class="pln"> </span><span class="lit">12</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln"> UUID</span><span class="pun">()</span><span class="pln"> </span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif13" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上功能应在速度和随机性之间取得适当的平衡。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上的JavaScript项目-https: </font></font><a href="https://github.com/LiosK/UUID.js" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/LiosK/UUID.js</font></font></a></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UUID.js JavaScript的RFC兼容UUID生成器。</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见RFC 4122 </font></font><a href="http://www.ietf.org/rfc/rfc4122.txt" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.ietf.org/rfc/rfc4122.txt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能生成符合RFC 4122的UUID。</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供版本4 UUID（来自随机数的UUID）和版本1 UUID（基于时间的UUID）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UUID对象允许对UUID的各种访问，包括对UUID字段的访问。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的低时间戳分辨率可以通过随机数来补偿。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调整了我自己的UUID / GUID生成器，并</font></font><a href="http://frugalcoder.us/post/2012/01/13/javascript-guid-uuid-generator.aspx" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处添加</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一些其他功能</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://baagoe.com/en/RandomMusings/javascript/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下Kybos</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随机数生成器，使其在密码学上更加合理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是我的脚本，其中排除了baagoe.com的Mash和Kybos方法。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">//UUID/Guid Generator</span><span class="pln">
</span><span class="com">// use: UUID.create() or UUID.createSequential()</span><span class="pln">
</span><span class="com">// convenience:  UUID.empty, UUID.tryParse(string)</span><span class="pln">
</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">w</span><span class="pun">){</span><span class="pln">
  </span><span class="com">// From http://baagoe.com/en/RandomMusings/javascript/</span><span class="pln">
  </span><span class="com">// Johannes BaagÃ¸e &lt;baagoe@baagoe.com&gt;, 2010</span><span class="pln">
  </span><span class="com">//function Mash() {...};</span><span class="pln">

  </span><span class="com">// From http://baagoe.com/en/RandomMusings/javascript/</span><span class="pln">
  </span><span class="com">//function Kybos() {...};</span><span class="pln">

  </span><span class="kwd">var</span><span class="pln"> rnd </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Kybos</span><span class="pun">();</span><span class="pln">

  </span><span class="com">//UUID/GUID Implementation from http://frugalcoder.us/post/2012/01/13/javascript-guid-uuid-generator.aspx</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> UUID </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"empty"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"00000000-0000-0000-0000-000000000000"</span><span class="pln">
    </span><span class="pun">,</span><span class="str">"parse"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">input</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">var</span><span class="pln"> ret </span><span class="pun">=</span><span class="pln"> input</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">().</span><span class="pln">trim</span><span class="pun">().</span><span class="pln">toLowerCase</span><span class="pun">().</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/^[\s\r\n]+|[\{\}]|[\s\r\n]+$/</span><span class="pln">g</span><span class="pun">,</span><span class="pln"> </span><span class="str">""</span><span class="pun">);</span><span class="pln">
      </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">((</span><span class="str">/[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}/</span><span class="pun">).</span><span class="pln">test</span><span class="pun">(</span><span class="pln">ret</span><span class="pun">))</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> ret</span><span class="pun">;</span><span class="pln">
      </span><span class="kwd">else</span><span class="pln">
        </span><span class="kwd">throw</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Error</span><span class="pun">(</span><span class="str">"Unable to parse UUID"</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">,</span><span class="str">"createSequential"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">var</span><span class="pln"> ret </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">valueOf</span><span class="pun">().</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">).</span><span class="pln">replace</span><span class="pun">(</span><span class="str">"-"</span><span class="pun">,</span><span class="str">""</span><span class="pun">)</span><span class="pln">
      </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(;</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">length </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">12</span><span class="pun">;</span><span class="pln"> ret </span><span class="pun">=</span><span class="pln"> </span><span class="str">"0"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> ret</span><span class="pun">);</span><span class="pln">
      ret </span><span class="pun">=</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">length</span><span class="pun">-</span><span class="lit">12</span><span class="pun">,</span><span class="lit">12</span><span class="pun">);</span><span class="pln"> </span><span class="com">//only least significant part</span><span class="pln">
      </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(;</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">length </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">32</span><span class="pun">;</span><span class="pln">ret </span><span class="pun">+=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="pln">rnd</span><span class="pun">()</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">0xffffffff</span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">));</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">[</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="lit">8</span><span class="pun">),</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">8</span><span class="pun">,</span><span class="lit">4</span><span class="pun">),</span><span class="pln"> </span><span class="str">"4"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">12</span><span class="pun">,</span><span class="lit">3</span><span class="pun">),</span><span class="pln"> </span><span class="str">"89AB"</span><span class="pun">[</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()*</span><span class="lit">4</span><span class="pun">)]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">16</span><span class="pun">,</span><span class="lit">3</span><span class="pun">),</span><span class="pln">  ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">20</span><span class="pun">,</span><span class="lit">12</span><span class="pun">)].</span><span class="pln">join</span><span class="pun">(</span><span class="str">"-"</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">,</span><span class="str">"create"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">var</span><span class="pln"> ret </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln">
      </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(;</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">length </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">32</span><span class="pun">;</span><span class="pln">ret </span><span class="pun">+=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="pln">rnd</span><span class="pun">()</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">0xffffffff</span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">));</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">[</span><span class="pln">ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="lit">8</span><span class="pun">),</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">8</span><span class="pun">,</span><span class="lit">4</span><span class="pun">),</span><span class="pln"> </span><span class="str">"4"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">12</span><span class="pun">,</span><span class="lit">3</span><span class="pun">),</span><span class="pln"> </span><span class="str">"89AB"</span><span class="pun">[</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()*</span><span class="lit">4</span><span class="pun">)]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">16</span><span class="pun">,</span><span class="lit">3</span><span class="pun">),</span><span class="pln">  ret</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="lit">20</span><span class="pun">,</span><span class="lit">12</span><span class="pun">)].</span><span class="pln">join</span><span class="pun">(</span><span class="str">"-"</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">,</span><span class="str">"random"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> rnd</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">,</span><span class="str">"tryParse"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">input</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">try</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> UUID</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">input</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">catch</span><span class="pun">(</span><span class="pln">ex</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> UUID</span><span class="pun">.</span><span class="pln">empty</span><span class="pun">;</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
  UUID</span><span class="pun">[</span><span class="str">"new"</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> UUID</span><span class="pun">.</span><span class="pln">create</span><span class="pun">;</span><span class="pln">

  w</span><span class="pun">.</span><span class="pln">UUID </span><span class="pun">=</span><span class="pln"> w</span><span class="pun">.</span><span class="typ">Guid</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> UUID</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}(</span><span class="pln">window </span><span class="pun">||</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">));</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web服务将很有用。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速的Google发现：</font><a href="http://www.hoskinson.net/GuidGenerator/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.hoskinson.net/GuidGenerator/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.hoskinson.net/GuidGenerator/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法保证该实现，但是SOMEONE必须发布真实的GUID生成器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这种Web服务，您可以开发一个REST Web界面，该界面使用GUID Web服务，并通过AJAX将其提供给浏览器中的javascript。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是日期为2011年10月9日的解决方案，来自用户</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jed</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://gist.github.com/982883" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/982883</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的评论</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">UUIDv4</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> b</span><span class="pun">(</span><span class="pln">a</span><span class="pun">){</span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">?(</span><span class="pln">a</span><span class="pun">^</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()*</span><span class="lit">16</span><span class="pun">&gt;&gt;</span><span class="pln">a</span><span class="pun">/</span><span class="lit">4</span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">):([</span><span class="lit">1e7</span><span class="pun">]+-</span><span class="lit">1e3</span><span class="pun">+-</span><span class="lit">4e3</span><span class="pun">+-</span><span class="lit">8e3</span><span class="pun">+-</span><span class="lit">1e11</span><span class="pun">).</span><span class="pln">replace</span><span class="pun">(</span><span class="str">/[018]/</span><span class="pln">g</span><span class="pun">,</span><span class="pln">b</span><span class="pun">)}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以实现与</font></font><a href="https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前最高评分答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的目标</font><font style="vertical-align: inherit;">，但是通过利用强制，递归和指数表示法，可以减少50个字节以内。</font><font style="vertical-align: inherit;">对于那些好奇它如何工作的人，下面是该函数较旧版本的带注释形式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">UUIDv4</span><span class="pln"> </span><span class="pun">=</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> b</span><span class="pun">(</span><span class="pln">
  a </span><span class="com">// placeholder</span><span class="pln">
</span><span class="pun">){</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> a </span><span class="com">// if the placeholder was passed, return</span><span class="pln">
    </span><span class="pun">?</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="com">// a random number from 0 to 15</span><span class="pln">
      a </span><span class="pun">^</span><span class="pln"> </span><span class="com">// unless b is 8,</span><span class="pln">
      </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()</span><span class="pln"> </span><span class="com">// in which case</span><span class="pln">
      </span><span class="pun">*</span><span class="pln"> </span><span class="lit">16</span><span class="pln"> </span><span class="com">// a random number from</span><span class="pln">
      </span><span class="pun">&gt;&gt;</span><span class="pln"> a</span><span class="pun">/</span><span class="lit">4</span><span class="pln"> </span><span class="com">// 8 to 11</span><span class="pln">
      </span><span class="pun">).</span><span class="pln">toString</span><span class="pun">(</span><span class="lit">16</span><span class="pun">)</span><span class="pln"> </span><span class="com">// in hexadecimal</span><span class="pln">
    </span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="com">// or otherwise a concatenated string:</span><span class="pln">
      </span><span class="pun">[</span><span class="lit">1e7</span><span class="pun">]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="com">// 10000000 +</span><span class="pln">
      </span><span class="pun">-</span><span class="lit">1e3</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="com">// -1000 +</span><span class="pln">
      </span><span class="pun">-</span><span class="lit">4e3</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="com">// -4000 +</span><span class="pln">
      </span><span class="pun">-</span><span class="lit">8e3</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="com">// -80000000 +</span><span class="pln">
      </span><span class="pun">-</span><span class="lit">1e11</span><span class="pln"> </span><span class="com">// -100000000000,</span><span class="pln">
      </span><span class="pun">).</span><span class="pln">replace</span><span class="pun">(</span><span class="pln"> </span><span class="com">// replacing</span><span class="pln">
        </span><span class="pun">/[</span><span class="lit">018</span><span class="pun">]/</span><span class="pln">g</span><span class="pun">,</span><span class="pln"> </span><span class="com">// zeroes, ones, and eights with</span><span class="pln">
        b </span><span class="com">// random hex digits</span><span class="pln">
      </span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些基于</font></font><a href="http://www.ietf.org/rfc/rfc4122.txt" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 4122</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第4.4节（从真正随机数或伪随机数创建UUID的算法）的代码。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> createUUID</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// http://www.ietf.org/rfc/rfc4122.txt</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> s </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> hexDigits </span><span class="pun">=</span><span class="pln"> </span><span class="str">"0123456789abcdef"</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">36</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        s</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> hexDigits</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">0x10</span><span class="pun">),</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    s</span><span class="pun">[</span><span class="lit">14</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"4"</span><span class="pun">;</span><span class="pln">  </span><span class="com">// bits 12-15 of the time_hi_and_version field to 0010</span><span class="pln">
    s</span><span class="pun">[</span><span class="lit">19</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> hexDigits</span><span class="pun">.</span><span class="pln">substr</span><span class="pun">((</span><span class="pln">s</span><span class="pun">[</span><span class="lit">19</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln"> </span><span class="lit">0x3</span><span class="pun">)</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="lit">0x8</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">  </span><span class="com">// bits 6-7 of the clock_seq_hi_and_reserved to 01</span><span class="pln">
    s</span><span class="pun">[</span><span class="lit">8</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> s</span><span class="pun">[</span><span class="lit">13</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> s</span><span class="pun">[</span><span class="lit">18</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> s</span><span class="pun">[</span><span class="lit">23</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"-"</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">var</span><span class="pln"> uuid </span><span class="pun">=</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> uuid</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimNear</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://www.ietf.org/rfc/rfc4122.txt" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 4122</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">UUID（通用唯一IDentifier）也称为GUID（全局唯一IDentifier）</font><font style="vertical-align: inherit;">是具有一定唯一性保证的标识符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成它们的最好方法是遵循上述RFC中的实现说明，使用许多社区审核的开源实现之一。</font></font></p>

<p><font style="vertical-align: inherit;"><a href="https://github.com/kelektiv/node-uuid" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">node-uuid</font></a><font style="vertical-align: inherit;">是一种流行的用于在JavaScript中使用UUID的开源工具。</font></font><a href="https://github.com/kelektiv/node-uuid" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，仅随机生成标识符（逐字节或逐字符）将不会为您提供与一致实现相同的保证。</font><font style="vertical-align: inherit;">同样，非常重要的是，使用兼容的UUID的系统可能会选择不接受随机生成的UUID，并且许多开源验证程序实际上会检查有效的结构。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UUID必须具有以下格式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">xxxxxxxx</span><span class="pun">-</span><span class="pln">xxxx</span><span class="pun">-</span><span class="typ">Mxxx</span><span class="pun">-</span><span class="typ">Nxxx</span><span class="pun">-</span><span class="pln">xxxxxxxxxxxx</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">M</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位置可能只有某些值。</font><font style="vertical-align: inherit;">此时，M的唯一有效值为1、2、3、4和5，因此随机生成该位置将使大多数结果不可接受。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
