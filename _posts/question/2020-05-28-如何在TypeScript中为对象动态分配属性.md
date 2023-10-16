---
layout: question
title:  如何在TypeScript中为对象动态分配属性？
date:   2020-05-28T06:54:55.000Z
description: 如果我想以编程方式将属性分配给Javascript中的对象，则可以这样做：var obj = {};obj.prop = "value";但是在...
img: 
author: 村村番长
category: question
answer: 9
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想以编程方式将属性分配给Javascript中的对象，则可以这样做：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">prop </span><span class="pun">=</span><span class="pln"> </span><span class="str">"value"</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在TypeScript中，这会产生一个错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型“ {}”的值不存在属性“ prop”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何在TypeScript中为对象分配任何新属性？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4204篇《如何在TypeScript中为对象动态分配属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳做法是使用安全键入，我建议您：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> customObject extends </span><span class="typ">MyObject</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   newProp</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">
   newProp2</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是的特殊版本</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可在每次属性更改时自动调整变量类型。</font><font style="vertical-align: inherit;">不需要其他变量，类型断言，显式类型或对象副本：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> assign</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">,</span><span class="pln"> U</span><span class="pun">&gt;(</span><span class="pln">target</span><span class="pun">:</span><span class="pln"> T</span><span class="pun">,</span><span class="pln"> source</span><span class="pun">:</span><span class="pln"> U</span><span class="pun">):</span><span class="pln"> asserts target is T </span><span class="pun">&amp;</span><span class="pln"> U </span><span class="pun">{</span><span class="pln">
    </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">(</span><span class="pln">target</span><span class="pun">,</span><span class="pln"> source</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
assign</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> prop1</span><span class="pun">:</span><span class="pln"> </span><span class="str">"foo"</span><span class="pln"> </span><span class="pun">})</span><span class="pln">
</span><span class="com">//  const obj now has type { prop1: string; }</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">prop1 </span><span class="com">// string</span><span class="pln">
assign</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> prop2</span><span class="pun">:</span><span class="pln"> </span><span class="lit">42</span><span class="pln"> </span><span class="pun">})</span><span class="pln">
</span><span class="com">//  const obj now has type { prop1: string; prop2: number; }</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">prop2 </span><span class="com">// number</span><span class="pln">

</span><span class="com">//  const obj: { prop1: "foo", prop2: 42 }</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：该</font></font><a href="https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAQwM6pgczAHgCoA0iAqgHwAUUyATpgKZQBcihiqcI1EdzxAlMzSo61KKkRVaDRDHF5EAMhKIA3gFgAUIm2IA8gCMAVnWgA6IVjCUa9KEXadufTQF9NmiAlRREcI4gBeVRcAbk0LbHI-QyIVRAAHajh4gEZmACJgODh0xBdnDQB6Qu1PMG9ffzA4AHdEAAs0CQBPeLpVBKTU5m9qGDBMELzNaNNE5JTEYrYoPoHw9Esoo1jO5IAmZgAWdbyC6cQyiujEarrG8ShW9rjx7pm5wbzFDrvN05AAW30RIbcNUZvKYlMBfH7UdwaI5wAA2dFMMLgmGWhgKkKAA" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用TS 3.7 </font></font><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断言函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">的返回类型</font></font><code>assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不像</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以添加此声明以使警告静音。</font></font></p>

<p><code>declare var obj: any;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了保留您以前的类型，请将您的对象临时转换为任何类型</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">  </span><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{}</span><span class="pln">
  </span><span class="pun">(&lt;</span><span class="pln">any</span><span class="pun">&gt;</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">prop </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有在使用强制转换时，新的动态属性才可用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">  </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">.</span><span class="pln">prop</span><span class="pun">;</span><span class="pln"> </span><span class="pun">==&gt;</span><span class="pln"> </span><span class="typ">Will</span><span class="pln"> generate a compiler error
  </span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(&lt;</span><span class="pln">any</span><span class="pun">&gt;</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">prop</span><span class="pun">;</span><span class="pln"> </span><span class="pun">==&gt;</span><span class="pln"> </span><span class="typ">Will</span><span class="pln"> assign </span><span class="lit">5</span><span class="pln"> to b </span><span class="kwd">with</span><span class="pln"> no error</span><span class="pun">;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Cathy</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用此：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">model </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">model</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> newProp</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">});</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伊芙妮</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶没有答案引用Object.assign，因为当我想到JavaScript中的“组合”时，这就是我使用的技术。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以在TypeScript中按预期工作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">IExisting</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    userName</span><span class="pun">:</span><span class="pln"> string
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">INewStuff</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    email</span><span class="pun">:</span><span class="pln"> string
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> existingObject</span><span class="pun">:</span><span class="pln"> </span><span class="typ">IExisting</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    userName</span><span class="pun">:</span><span class="pln"> </span><span class="str">"jsmith"</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> objectWithAllProps</span><span class="pun">:</span><span class="pln"> </span><span class="typ">IExisting</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln"> </span><span class="typ">INewStuff</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">({},</span><span class="pln"> existingObject</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    email</span><span class="pun">:</span><span class="pln"> </span><span class="str">"jsmith@someplace.com"</span><span class="pln">
</span><span class="pun">})</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">objectWithAllProps</span><span class="pun">.</span><span class="pln">email</span><span class="pun">);</span><span class="pln"> </span><span class="com">// jsmith@someplace.com</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终确保输入的安全性，因为您根本不需要使用该</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用TypeScript的聚合类型（</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在声明的类型时</font><font style="vertical-align: inherit;">用表示</font></font><code>objectWithAllProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），这清楚地表明我们正在动态（即动态）编写新类型</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的事情</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.assign具有自己的独特之处（大多数有经验的JS开发人员众所周知），在编写TypeScript时应予以考虑。 

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以以可变方式使用，也可以以不可变的方式使用（我在上面演示了不可变的方式，这意味着</font></font><code>existingObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保持不变，因此没有</font></font><code>email</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。对于大多数函数式程序员来说，这是一件好事，因为结果是唯一的新变化）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用扁平对象时，Object.assign效果最佳。</font><font style="vertical-align: inherit;">如果要合并两个包含可为空的属性的嵌套对象，最终可能会用undefined覆盖真实值。</font><font style="vertical-align: inherit;">如果您注意Object.assign参数的顺序，那应该没问题。</font></font></li>
</ul></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过以下方式将成员添加到现有对象</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展类型（阅读：扩展/专业化接口）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将原始对象转换为扩展类型</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将成员添加到对象</font></font></li>
</ol>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">IEnhancedPromise</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> extends </span><span class="typ">Promise</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    sayHello</span><span class="pun">():</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Promise</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"Peter"</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> enhancedPromise </span><span class="pun">=</span><span class="pln"> p as </span><span class="typ">IEnhancedPromise</span><span class="pun">&lt;</span><span class="pln">string</span><span class="pun">&gt;;</span><span class="pln">

enhancedPromise</span><span class="pun">.</span><span class="pln">sayHello </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> enhancedPromise</span><span class="pun">.</span><span class="pln">then</span><span class="pun">(</span><span class="pln">value </span><span class="pun">=&gt;</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">info</span><span class="pun">(</span><span class="str">"Hello "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> value</span><span class="pun">));</span><span class="pln">

</span><span class="com">// eventually prints "Hello Peter"</span><span class="pln">
enhancedPromise</span><span class="pun">.</span><span class="pln">sayHello</span><span class="pun">();</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的将是 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">any</span><span class="pun">&gt;{};</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">prop1 </span><span class="pun">=</span><span class="pln"> </span><span class="str">"value"</span><span class="pun">;</span><span class="pln">
obj</span><span class="pun">.</span><span class="pln">prop2 </span><span class="pun">=</span><span class="pln"> </span><span class="str">"another value"</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或一劳永逸：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">  </span><span class="kwd">var</span><span class="pln"> obj</span><span class="pun">:</span><span class="pln">any </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{}</span><span class="pln">
  obj</span><span class="pun">.</span><span class="pln">prop </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
