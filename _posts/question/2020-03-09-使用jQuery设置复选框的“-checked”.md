---
layout: question
title:  使用jQuery设置复选框的“ checked”
date:   2020-03-09T04:43:01.000Z
description: 我想做这样的事情来checkbox使用jQuery打勾：$(".myCheckBox").checked(true);要么$(".myChec...
img: 
author: 西里A
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做这样的事情来</font></font><code>checkbox</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打勾</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">).</span><span class="pln">checked</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">).</span><span class="pln">selected</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的事情存在吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第148篇《使用jQuery设置复选框的“ checked”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是最短，最简单的解决方案：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">checked </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">checked </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更短的是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">checked </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!</span><span class="lit">0</span><span class="pun">;</span><span class="pln">
$</span><span class="pun">(</span><span class="str">".myCheckBox"</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">checked </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!</span><span class="lit">1</span><span class="pun">;</span></code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也是</font></font><a href="http://jsfiddle.net/8PCx8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tom猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在Internet </font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_9" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Explorer 9</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前的</font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_9" rel="noreferrer"><font style="vertical-align: inherit;">Internet Explorer</font></a><font style="vertical-align: inherit;">中内存泄漏</font><font style="vertical-align: inherit;">，因为</font></font><a href="http://api.jquery.com/prop/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery文档指出</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在版本9之前的Internet Explorer中，使用.prop（）将DOM元素属性设置为简单基本值（数字，字符串或布尔值）以外的任何内容，如果不删除该属性（使用.removeProp（ ））从文档中删除DOM元素。</font><font style="vertical-align: inherit;">若要在DOM对象上安全地设置值而不会导致内存泄漏，请使用.data（）。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@ livefree75所说：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 1.5.x及以下</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用新方法扩展$ .fn对象：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$</span><span class="pun">)</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
   $</span><span class="pun">.</span><span class="pln">fn</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">({</span><span class="pln">
      check </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
         </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">attr</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">},</span><span class="pln">
      uncheck </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
         </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">removeAttr</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
   </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}(</span><span class="pln">jQuery</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在新版本的jQuery中，我们必须使用如下代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 1.6以上</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$</span><span class="pun">)</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
       $</span><span class="pun">.</span><span class="pln">fn</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">({</span><span class="pln">
          check </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
             </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">prop</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span><span class="pln">
          </span><span class="pun">},</span><span class="pln">
          uncheck </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
             </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">prop</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">,</span><span class="kwd">false</span><span class="pun">);</span><span class="pln">
          </span><span class="pun">}</span><span class="pln">
       </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}(</span><span class="pln">jQuery</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以执行以下操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">    $</span><span class="pun">(</span><span class="str">":checkbox"</span><span class="pun">).</span><span class="pln">check</span><span class="pun">();</span><span class="pln">
    $</span><span class="pun">(</span><span class="str">":checkbox"</span><span class="pun">).</span><span class="pln">uncheck</span><span class="pun">();</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是没有jQuery的一种方法</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> addOrAttachListener</span><span class="pun">(</span><span class="pln">el</span><span class="pun">,</span><span class="pln"> type</span><span class="pun">,</span><span class="pln"> listener</span><span class="pun">,</span><span class="pln"> useCapture</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">el</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    el</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="pln">type</span><span class="pun">,</span><span class="pln"> listener</span><span class="pun">,</span><span class="pln"> useCapture</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">el</span><span class="pun">.</span><span class="pln">attachEvent</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    el</span><span class="pun">.</span><span class="pln">attachEvent</span><span class="pun">(</span><span class="str">"on"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> type</span><span class="pun">,</span><span class="pln"> listener</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

addOrAttachListener</span><span class="pun">(</span><span class="pln">window</span><span class="pun">,</span><span class="pln"> </span><span class="str">"load"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> cbElem </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"cb"</span><span class="pun">);</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> rcbElem </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"rcb"</span><span class="pun">);</span><span class="pln">
  addOrAttachListener</span><span class="pun">(</span><span class="pln">cbElem</span><span class="pun">,</span><span class="pln"> </span><span class="str">"click"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    rcbElem</span><span class="pun">.</span><span class="pln">checked </span><span class="pun">=</span><span class="pln"> cbElem</span><span class="pun">.</span><span class="pln">checked</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">},</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">);</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">);</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;label&gt;</span><span class="pln">Click Me!
  </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"cb"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"checkbox"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
</span><span class="tag">&lt;/label&gt;</span><span class="pln">
</span><span class="tag">&lt;label&gt;</span><span class="pln">Reflection:
  </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"rcb"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"checkbox"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
</span><span class="tag">&lt;/label&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用新方法扩展$ .fn对象：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$</span><span class="pun">)</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
   $</span><span class="pun">.</span><span class="pln">fn</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">({</span><span class="pln">
      check </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
         </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">attr</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">},</span><span class="pln">
      uncheck </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
         </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="str">":radio, :checkbox"</span><span class="pun">).</span><span class="pln">removeAttr</span><span class="pun">(</span><span class="str">"checked"</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
   </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}(</span><span class="pln">jQuery</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以执行以下操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">":checkbox"</span><span class="pun">).</span><span class="pln">check</span><span class="pun">();</span><span class="pln">
$</span><span class="pun">(</span><span class="str">":checkbox"</span><span class="pun">).</span><span class="pln">uncheck</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您使用其他使用这些名称的库，则可能要给它们提供诸如mycheck（）和myuncheck（）之类的唯一名称。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
