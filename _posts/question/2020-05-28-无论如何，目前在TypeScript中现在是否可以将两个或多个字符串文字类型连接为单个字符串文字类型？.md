---
layout: question
title:  无论如何，目前在TypeScript中现在是否可以将两个或多个字符串文字类型连接为单个字符串文字类型？
date:   2020-05-28T06:54:00.000Z
description: 首先，让我说清楚，我要查找的不是联合类型，而是直接的串联，即"Hel" + "lo" = "Hello"字符串文字类型本质上，我有一个函数，它接受两个...
img: 
author: 伽罗番长
category: question
answer: 2
tags: JavaScript TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，让我说清楚，我要查找的不是联合类型，而是直接的串联，即</font></font><code>"Hel" + "lo" = "Hello"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串文字类型</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，我有一个函数，它接受两个字符串文字，a </font></font><code>namespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和a </font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并在输出时将它们与/组合在一起，但是我想不出一种使输出文字字符串而不是通用字符串的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将其作为字符串文字，因为输出将用作对象的键。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过类型的交集（</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.concat()</code></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> makeKey</span><span class="pun">&lt;</span><span class="pln">NS extends string</span><span class="pun">,</span><span class="pln"> N extends string</span><span class="pun">&gt;(</span><span class="pln">namespace</span><span class="pun">:</span><span class="pln"> NS</span><span class="pun">,</span><span class="pln"> name</span><span class="pun">:</span><span class="pln"> N</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> namespace </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/'</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> name</span><span class="pun">;</span><span class="pln"> </span><span class="com">// &lt;- want this to be `NS + / + N` = `NS/N`</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="com">// I want this to return a string literal rather than a generic string</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> objKey </span><span class="pun">=</span><span class="pln"> makeKey</span><span class="pun">(</span><span class="str">'admin'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'home'</span><span class="pun">)</span><span class="pln">
</span><span class="com">// I want typeof objKey to be a string literal: `"admin/home"`, not a generic `string`</span><span class="pln">
</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">typeof </font></font><code>objKey</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个泛型，</font></font><code>string</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我希望它是一个</font></font><code>string literal</code> <code>"admin/home"</code></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4201篇《无论如何，目前在TypeScript中现在是否可以将两个或多个字符串文字类型连接为单个字符串文字类型？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，答案是</font></font><a href="https://github.com/Microsoft/TypeScript/issues/12940" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否定的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">GitHub上提出了一些功能建议，如果实施了这些建议，可能会为您提供这种功能（</font></font><a href="https://github.com/Microsoft/TypeScript/issues/12754" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/Microsoft/TypeScript/issues/6579" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但是我认为它们并未得到积极的研究。</font><font style="vertical-align: inherit;">无论如何，</font><font style="vertical-align: inherit;">我在</font></font><a href="https://github.com/Microsoft/TypeScript/wiki/Roadmap" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线图</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中看不到任何东西</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您真的想看到这种情况发生，那么您可能想转到其中一个GitHub问题，给他们一个👍或描述它的用例（如果它特别引人注目）。</font><font style="vertical-align: inherit;">但是我不会屏住呼吸。</font><font style="vertical-align: inherit;">抱歉!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它对我来说是有效的，使用 TypeScript3.7.2，使用模板文字进行连接，并使用</font></font><code>as</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字指定函数的输出类型。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> addSuffixToMyStringLiteral </span><span class="pun">=</span><span class="pln">
    </span><span class="pun">(</span><span class="pln">m</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyStringLiteral</span><span class="pun">,</span><span class="pln"> suffix</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">`</span><span class="pln">$</span><span class="pun">{</span><span class="pln">m</span><span class="pun">}</span><span class="pln">$</span><span class="pun">{</span><span class="pln">suffix</span><span class="pun">}`</span><span class="pln"> as </span><span class="typ">MyStringLiteral</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道它是否是 TypeScript的新功能。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
