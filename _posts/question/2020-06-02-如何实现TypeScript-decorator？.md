---
layout: question
title:  如何实现TypeScript decorator？
date:   2020-06-02T01:47:34.000Z
description: TypeScript 1.5现在具有 decorator。有人可以提供一个简单的示例，演示实现 decorator的正确方法并描述可能的有效 decorator签名中的参数的含义吗？dec...
img: 
author: 飞羽
category: question
answer: 1
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><a href="http://blogs.msdn.com/b/typescript/archive/2015/03/27/announcing-typescript-1-5-alpha.aspx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript 1.5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在具有</font></font><a href="https://github.com/wycats/javascript-decorators"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> decorator</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以提供一个简单的示例，演示实现 decorator的正确方法并描述可能的有效 decorator签名中的参数的含义吗？</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare type </span><span class="typ">ClassDecorator</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">TFunction</span><span class="pln"> extends </span><span class="typ">Function</span><span class="pun">&gt;(</span><span class="pln">target</span><span class="pun">:</span><span class="pln"> </span><span class="typ">TFunction</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="typ">TFunction</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><font></font><span class="pln">
declare type </span><span class="typ">PropertyDecorator</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">target</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">,</span><span class="pln"> propertyKey</span><span class="pun">:</span><span class="pln"> string </span><span class="pun">|</span><span class="pln"> symbol</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><font></font><span class="pln">
declare type </span><span class="typ">MethodDecorator</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;(</span><span class="pln">target</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">,</span><span class="pln"> propertyKey</span><span class="pun">:</span><span class="pln"> string </span><span class="pun">|</span><span class="pln"> symbol</span><span class="pun">,</span><span class="pln"> descriptor</span><span class="pun">:</span><span class="pln"> </span><span class="typ">TypedPropertyDescriptor</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="typ">TypedPropertyDescriptor</span><span class="pun">&lt;</span><span class="pln">T</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><font></font><span class="pln">
declare type </span><span class="typ">ParameterDecorator</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">target</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Function</span><span class="pun">,</span><span class="pln"> propertyKey</span><span class="pun">:</span><span class="pln"> string </span><span class="pun">|</span><span class="pln"> symbol</span><span class="pun">,</span><span class="pln"> parameterIndex</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，在实现 decorator时是否应牢记最佳实践考虑因素？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其他答案中我没有看到的一件重要事情：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">装饰厂</font></font></h3>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要定制将 decorator应用于声明的方式，则可以编写一个 decorator工厂。</font><font style="vertical-align: inherit;"> decorator工厂只是一个返回表达式的函数， decorator将在运行时调用该表达式。</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// This is a factory, returns one of ClassDecorator,</span><span class="pln">
</span><span class="com">// PropertyDecorator, MethodDecorator, ParameterDecorator</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> </span><span class="typ">Entity</span><span class="pun">(</span><span class="pln">discriminator</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">):</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">target</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// this is the decorator, in this case ClassDecorator.</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="lit">@Entity</span><span class="pun">(</span><span class="str">"cust"</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">MyCustomer</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">...</span><span class="pln"> </span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看TypeScript手册</font></font><a href="https://www.typescriptlang.org/docs/handbook/decorators.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Decorators一章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
