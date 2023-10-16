---
layout: question
title:  如何将JSON对象转换为Typescript类
date:   2020-05-25T06:17:01.000Z
description: 我从远程REST服务器读取了JSON对象。此JSON对象具有Typescript类的所有属性（通过设计）。如何将收到的JSON对象转换为var类型？我...
img: 
author: 木嘢
category: question
answer: 5
tags: json TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从远程REST服务器读取了JSON对象。</font><font style="vertical-align: inherit;">此JSON对象具有Typescript类的所有属性（通过设计）。</font><font style="vertical-align: inherit;">如何将收到的JSON对象转换为var类型？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想填充一个TypeScript变量（即有一个采用此JSON对象的构造函数）。</font><font style="vertical-align: inherit;">它很大，因此要在子对象之间按子对象复制所有内容，并按属性复制所有内容将花费大量时间。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可以</font></font><a href="https://stackoverflow.com/questions/13320568/can-i-create-a-typescript-type-and-use-that-when-ajax-returns-json-data/13320802#13320802"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其转换为TypeScript界面！</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4172篇《如何将JSON对象转换为Typescript类》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TypeScript中，您可以</font><font style="vertical-align: inherit;">使用接口和泛型来进行</font></font><a href="https://basarat.gitbook.io/typescript/type-system/type-assertion" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型断言</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> json </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Utilities</span><span class="pun">.</span><span class="typ">JSONLoader</span><span class="pun">.</span><span class="pln">loadFromFile</span><span class="pun">(</span><span class="str">"../docs/location_map.json"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> locations</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">&lt;</span><span class="typ">ILocationMap</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">json</span><span class="pun">).</span><span class="pln">location</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ILocationMap在哪里描述数据的形状。</font><font style="vertical-align: inherit;">此方法的优点是您的JSON可以包含更多属性，但形状可以满足接口的条件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了一篇关于将JSON通用转换为Typescript类的非常有趣的文章：</font></font></p>

<p><a href="http://cloudmark.github.io/Json-Mapping/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://cloudmark.github.io/Json-Mapping/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您最终得到以下代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> example </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Mark"</span><span class="pun">,</span><span class="pln"> 
                </span><span class="str">"surname"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Galea"</span><span class="pun">,</span><span class="pln"> 
                </span><span class="str">"age"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> 
                </span><span class="str">"address"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  </span><span class="str">"first-line"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Some where"</span><span class="pun">,</span><span class="pln"> 
                  </span><span class="str">"second-line"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"Over Here"</span><span class="pun">,</span><span class="pln">
                  </span><span class="str">"city"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"In This City"</span><span class="pln">
                </span><span class="pun">}</span><span class="pln">
              </span><span class="pun">};</span><span class="pln">

</span><span class="typ">MapUtils</span><span class="pun">.</span><span class="pln">deserialize</span><span class="pun">(</span><span class="typ">Person</span><span class="pun">,</span><span class="pln"> example</span><span class="pun">);</span><span class="pln">  </span><span class="com">// custom class</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ES6，请尝试以下操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Client</span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> string

  displayName</span><span class="pun">(){</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">name</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

service</span><span class="pun">.</span><span class="pln">getClientFromAPI</span><span class="pun">().</span><span class="pln">then</span><span class="pun">(</span><span class="pln">clientData </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="com">// Here the client data from API only have the "name" field</span><span class="pln">
  </span><span class="com">// If we want to use the Client class methods on this data object we need to:</span><span class="pln">
  </span><span class="kwd">let</span><span class="pln"> clientWithType </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">.</span><span class="pln">assign</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Client</span><span class="pun">(),</span><span class="pln"> clientData</span><span class="pun">)</span><span class="pln">

  clientWithType</span><span class="pun">.</span><span class="pln">displayName</span><span class="pun">()</span><span class="pln">
</span><span class="pun">})</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font><font style="vertical-align: inherit;">，遗憾的是，</font><font style="vertical-align: inherit;">这种方式</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对嵌套对象无效</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，并且找到了一个可以完成此工作的库：</font></font><a href="https://github.com/pleerock/class-transformer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/pleerock/class-transformer" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/pleerock/class-transformer</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是这样的： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> jsonObject </span><span class="pun">=</span><span class="pln"> response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">()</span><span class="pln"> as </span><span class="typ">Object</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> fooInstance </span><span class="pun">=</span><span class="pln"> plainToClass</span><span class="pun">(</span><span class="typ">Models</span><span class="pun">.</span><span class="typ">Foo</span><span class="pun">,</span><span class="pln"> jsonObject</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">return</span><span class="pln"> fooInstance</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它支持嵌套的子级，但是您必须装饰类的成员。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能简单地将Ajax请求中的原始JavaScript结果转换为原型JavaScript / TypeScript类实例。</font><font style="vertical-align: inherit;">有许多技术可以做到这一点，并且通常涉及复制数据。</font><font style="vertical-align: inherit;">除非您创建该类的实例，否则它将没有任何方法或属性。</font><font style="vertical-align: inherit;">它将仍然是一个简单的JavaScript对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅处理数据，则可以强制转换为接口（因为它纯粹是编译时结构），但这将要求您使用TypeScript类，该类使用数据实例并对该数据执行操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制数据的一些示例：</font></font></p>

<ol>
<li><a href="https://stackoverflow.com/questions/16373422/copying-ajax-json-object-into-existing-object"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将AJAX JSON对象复制到现有对象</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JSON字符串解析为JavaScript中的特定对象原型</font></font></a></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，您只是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> d </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">MyRichObject</span><span class="pun">();</span><span class="pln">
d</span><span class="pun">.</span><span class="pln">copyInto</span><span class="pun">(</span><span class="pln">jsonResult</span><span class="pun">);</span></code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
