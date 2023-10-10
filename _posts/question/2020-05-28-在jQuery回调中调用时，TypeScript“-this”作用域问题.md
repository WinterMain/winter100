---
layout: question
title:  在jQuery回调中调用时，TypeScript“ this”作用域问题
date:   2020-05-28T06:53:40.000Z
description: 我不确定在TypeScript中处理“ this”作用域的最佳方法。这是我要转换为TypeScript的代码中常见模式的示例：class Demo...
img: 
author: GO
category: question
answer: 2
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定在TypeScript中处理“ this”作用域的最佳方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我要转换为TypeScript的代码中常见模式的示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">DemonstrateScopingProblems</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> status </span><span class="pun">=</span><span class="pln"> </span><span class="str">"blah"</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> run</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        alert</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">status</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> thisTest </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">DemonstrateScopingProblems</span><span class="pun">();</span><span class="pln">
</span><span class="com">// works as expected, displays "blah":</span><span class="pln">
thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">();</span><span class="pln"> 
</span><span class="com">// doesn't work; this is scoped to be the document so this.status is undefined:</span><span class="pln">
$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(</span><span class="pln">thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">);</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我可以将呼叫更改为...</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(</span><span class="pln">thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">thisTest</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...有效 </font><font style="vertical-align: inherit;">但这有点可怕。</font><font style="vertical-align: inherit;">这意味着在某些情况下，所有代码都可以编译并正常工作，但是如果我们忘记绑定范围，它将被破坏。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一种在类中执行此操作的方法，这样在使用类时，我们无需担心“ this”的作用域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议么？</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可行的方法是使用粗箭头：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">DemonstrateScopingProblems</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> status </span><span class="pun">=</span><span class="pln"> </span><span class="str">"blah"</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">public</span><span class="pln"> run </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        alert</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">status</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是有效的方法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">和田</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在这里有几个选择，每个选择都有其自身的取舍。</font><font style="vertical-align: inherit;">不幸的是，没有明显的最佳解决方案，它实际上取决于应用程序。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动类绑定</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如您的问题所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">DemonstrateScopingProblems</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> status </span><span class="pun">=</span><span class="pln"> </span><span class="str">"blah"</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">public</span><span class="pln"> run </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        alert</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">status</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好/不好：这将为您的类的每个实例的每个方法创建一个额外的闭包。</font><font style="vertical-align: inherit;">如果通常只在常规方法调用中使用此方法，那就太过分了。</font><font style="vertical-align: inherit;">但是，如果在回调位置上使用了大量的代码，则对于类实例而言，捕获</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文而不是每个调用站点在调用时创建一个新的闭包</font><font style="vertical-align: inherit;">更为有效</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">良好：外部呼叫者无法忘记处理</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">良好：TypeScript中的Typesafe</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好：如果函数具有参数，则无需额外的工作</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坏：派生类无法调用以这种方式编写的基类方法 </font></font><code>super.</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：哪些方法是“预绑定”的，哪些没有在您的类及其使用者之间创建额外的非类型安全协定的确切语义。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Function.bind</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
也如图所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(</span><span class="pln">thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">thisTest</span><span class="pun">));</span></code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好/不好：与第一种方法相比，内存/性能处于相反的平衡</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好：如果函数具有参数，则无需额外的工作</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不好：在TypeScript中，当前没有类型安全性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：仅对您有影响，仅在ECMAScript 5中可用</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不好：您必须两次输入实例名称</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗体箭头</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
在TypeScript中（出于解释原因，此处显示了一些虚拟参数）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">((</span><span class="pln">n</span><span class="pun">,</span><span class="pln"> m</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">(</span><span class="pln">n</span><span class="pun">,</span><span class="pln"> m</span><span class="pun">));</span></code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好/不好：与第一种方法相比，内存/性能处于相反的平衡</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">良好：在TypeScript中，这具有100％的类型安全性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">良好：可在ECMAScript 3中使用</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好：您只需键入一次实例名称</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坏：您必须输入两次参数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坏：不适用于可变参数</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的代码中，您是否尝试过仅按以下方式更改最后一行？ </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> thisTest</span><span class="pun">.</span><span class="pln">run</span><span class="pun">());</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
