---
layout: question
title:  TypeScript：接口与类型
date:   2020-05-28T07:38:04.000Z
description: 这些语句（接口与类型）之间有什么区别？interface X {    a  number    b  string}type X = {...
img: 
author: 十三西门
category: question
answer: 6
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些语句（接口与类型）之间有什么区别？</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> X </span><span class="pun">{</span><font></font><span class="pln">
    a</span><span class="pun">:</span><span class="pln"> number</span><font></font><span class="pln">
    b</span><span class="pun">:</span><span class="pln"> string</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
</span><font></font><span class="pln">
type X </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    a</span><span class="pun">:</span><span class="pln"> number</span><font></font><span class="pln">
    b</span><span class="pun">:</span><span class="pln"> string</span><font></font><span class="pln">
</span><span class="pun">};</span><font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Cathy</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文件已经解释了 </font></font></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个区别是接口创建了一个新名称，该名称在任何地方都可以使用。</font><font style="vertical-align: inherit;">类型别名不会创建新名称-例如，错误消息不会使用别名。在较早版本的TypeScript中，不能从中扩展或实现类型别名（也不能扩展/实现其他类型）。</font><font style="vertical-align: inherit;">从2.7版开始，可以通过创建新的交集类型来扩展类型别名</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，如果您无法使用接口表达某种形状，而需要使用并集或元组类型，则通常使用类型别名。</font></font></li>
  </ul>
</blockquote>

<p><a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口与类型别名</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型示例：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//为对象创建树结构。</font><font style="vertical-align: inherit;">由于缺少交集（＆），因此无法对界面执行相同操作</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">type </span><span class="typ">Tree</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> T </span><span class="pun">&amp;</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> parent</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Tree</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//键入以限制变量只分配一些值。</font><font style="vertical-align: inherit;">接口没有联合（|）</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">type </span><span class="typ">Choise</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"A"</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="str">"B"</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="str">"C"</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//由于类型，您可以借助条件机制来声明NonNullable类型。 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">type </span><span class="typ">NonNullable</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> T extends </span><span class="kwd">null</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> never </span><span class="pun">:</span><span class="pln"> T</span><span class="pun">;</span></code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口示例：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//您可以将接口用于OOP并使用“实现”来定义对象/类框架</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">IUser</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    user</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">
    password</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">
    login</span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span><span class="pln">user</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">,</span><span class="pln"> password</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> boolean</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">User</span><span class="pln"> </span><span class="kwd">implements</span><span class="pln"> </span><span class="typ">IUser</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    user </span><span class="pun">=</span><span class="pln"> </span><span class="str">"user1"</span><span class="pln">
    password </span><span class="pun">=</span><span class="pln"> </span><span class="str">"password1"</span><span class="pln">

    login</span><span class="pun">(</span><span class="pln">user</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">,</span><span class="pln"> password</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">user </span><span class="pun">==</span><span class="pln"> user </span><span class="pun">&amp;&amp;</span><span class="pln"> password </span><span class="pun">==</span><span class="pln"> password</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//您可以使用其他接口扩展接口</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">IMyObject</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        label</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">IMyObjectWithSize</span><span class="pln"> extends </span><span class="typ">IMyObject</span><span class="pun">{</span><span class="pln">
        size</span><span class="pun">?:</span><span class="pln"> number
    </span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.typescriptlang.org/docs/handbook/advanced-types.html</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个区别是接口创建了一个新名称，该名称在任何地方都可以使用。</font><font style="vertical-align: inherit;">类型别名不会创建新名称-例如，错误消息不会使用别名。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">留姬</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从TypeScript 3.2（2018年11月）开始，以下内容适用：</font></font></p>

<p><a href="https://i.stack.imgur.com/6Tjyp.png" rel="noreferrer"><img src="https://i.stack.imgur.com/6Tjyp.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了已经提供的出色答案之外，在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型与接口方面</font><font style="vertical-align: inherit;">还存在明显差异</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我最近遇到了几种接口无法完成工作的情况：</font></font></p>

<ol>
<li><a href="https://stackoverflow.com/questions/56085306/error-message-an-interface-can-only-extend-an-object-type-or-intersection-of-o"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法使用接口扩展联合类型</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/59370163/extending-generic-typescript-interface"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法扩展通用接口</font></font></a></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3.10" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript语言规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与总是引入命名对象类型的接口声明不同，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型别名声明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以为任何类型的类型引入名称，包括基本类型，联合类型和交集类型。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该规范继续提到：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与对象类型文字的类型别名有很多相似之处，但是由于接口类型提供了更多的功能，因此它们通常比类型别名更可取。</font><font style="vertical-align: inherit;">例如，接口类型</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Point</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    x</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><font></font><span class="pln">
    y</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以写为类型别名</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">type </span><span class="typ">Point</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    x</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><font></font><span class="pln">
    y</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="pun">};</span><font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这样做意味着失去了以下功能：</font></font></p>
  
  <ul>
  <li><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在extend或Implements子句中命名接口，但是</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自TS 2.7起</font><strike><font style="vertical-align: inherit;">，对象类型文字的类型别名不能</font></strike><font style="vertical-align: inherit;">再为true。</font></font></li>
  <li>An interface can have multiple <a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html" rel="noreferrer">merged declarations</a>, but a type alias for an object type literal cannot.</li>
  </ul>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
