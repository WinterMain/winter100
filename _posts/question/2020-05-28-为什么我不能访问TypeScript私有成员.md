---
layout: question
title:  为什么我不能访问TypeScript私有成员？
date:   2020-05-28T06:54:35.000Z
description: 我正在研究TypeScript中私有成员的实现，但我感到有些困惑。Intellisense不允许访问私有成员，但是在纯JavaScript中，仅此而已。这...
img: 
author: 神无
category: question
answer: 6
tags: JavaScript TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在研究TypeScript中私有成员的实现，但我感到有些困惑。</font><font style="vertical-align: inherit;">Intellisense不允许访问私有成员，但是在纯JavaScript中，仅此而已。</font><font style="vertical-align: inherit;">这使我认为TS无法正确实现私有成员。</font><font style="vertical-align: inherit;">有什么想法吗？</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Test</span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">private</span><span class="pln"> member</span><span class="pun">:</span><span class="pln"> any </span><span class="pun">=</span><span class="pln"> </span><span class="str">"private member"</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
alert</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Test</span><span class="pun">().</span><span class="pln">member</span><span class="pun">);</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4203篇《为什么我不能访问TypeScript私有成员？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p>I realize this is an older discussion but it might still be useful to share my solution to the problem of the supposedly private variables and methods in a TypeScript "leaking" out into the public interface of the compiled JavaScript class.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这个问题纯粹是表面上的问题，即与在DevTools中查看实例变量时的视觉混乱有关。</font><font style="vertical-align: inherit;">我的解决方法是将私有声明分组到另一个类中，然后在主类中实例化该类，然后将其分配给一个</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（但仍在JS中公开显示）名称为</font></font><code>__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（双下划线）的</font><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Privates</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    readonly DEFAULT_MULTIPLIER </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span><span class="pun">;</span><span class="pln">
    foo</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><span class="pln">
    bar</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><span class="pln">

    someMethod </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">multiplier</span><span class="pun">:</span><span class="pln"> number </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">DEFAULT_MULTIPLIER</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> multiplier </span><span class="pun">*</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">foo </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">bar</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">private</span><span class="pln"> _class</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">_class</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_class </span><span class="pun">=</span><span class="pln"> _class</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> __</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Privates</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Privates</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">

    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">foo</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span><span class="pln"> bar</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span><span class="pln"> baz</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// assign private property values...</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">__</span><span class="pun">.</span><span class="pln">foo </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">__</span><span class="pun">.</span><span class="pln">bar </span><span class="pun">=</span><span class="pln"> bar</span><span class="pun">;</span><span class="pln">

        </span><span class="com">// assign public property values...</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">baz </span><span class="pun">=</span><span class="pln"> baz</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    baz</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">;</span><span class="pln">

    print </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(`</span><span class="pln">foo</span><span class="pun">=</span><span class="pln">$</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">__</span><span class="pun">.</span><span class="pln">foo</span><span class="pun">},</span><span class="pln"> bar</span><span class="pun">=</span><span class="pln">$</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">__</span><span class="pun">.</span><span class="pln">bar</span><span class="pun">}`);</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(`</span><span class="pln">someMethod returns $</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">__</span><span class="pun">.</span><span class="pln">someMethod</span><span class="pun">()}`);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> myClass </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pun">(</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>myClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在DevTools中查看</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">实例时，您没有看到它们的所有“私有”成员与真正的公共成员混合在一起（在正确重构的真实生活代码中，它们在视觉上会非常混乱），而是看到它们被整齐地分组在折叠</font></font><code>__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性内：</font></font></p>

<p><a href="https://i.stack.imgur.com/4LqAB.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/4LqAB.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦支持</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WeakMap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是更广泛的应用存在例如＃3详述了一个有趣的技术</font></font><a href="http://www.2ality.com/2016/01/private-data-classes.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>It allows for private data AND avoids the performance costs of Jason Evans example by allowing the data to be accessible from prototype methods instead of only instance methods.</p>

<p>The linked MDN WeakMap page lists browser support at Chrome 36, Firefox 6.0, IE 11, Opera 23, and Safari 7.1.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> _counter </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">WeakMap</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> _action </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">WeakMap</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Countdown</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">counter</span><span class="pun">,</span><span class="pln"> action</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    _counter</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> counter</span><span class="pun">);</span><span class="pln">
    _action</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> action</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  decrement</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">let</span><span class="pln"> counter </span><span class="pun">=</span><span class="pln"> _counter</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">counter </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pun">;</span><span class="pln">
    counter</span><span class="pun">--;</span><span class="pln">
    _counter</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> counter</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">counter </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      _action</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript确实支持私有变量。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> myPrivateVar </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">doSomething </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> myPrivateVar</span><span class="pun">++;</span><span class="pln">        
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TypeScript中，它表示为：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">MyClass</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

    doSomething</span><span class="pun">:</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> number</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">constructor</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> myPrivateVar </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">

        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">doSomething </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> myPrivateVar</span><span class="pun">++;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅应</font><font style="vertical-align: inherit;">在绝对需要时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谨慎</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，如果您需要临时缓存密码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这种模式会降低性能（与Javascript或Typescript无关），仅在绝对必要的情况下使用。   </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢肖恩·费尔德曼（Sean Feldman）提供的关于此问题的正式讨论的链接-请参阅</font></font><a href="https://stackoverflow.com/a/12713927/3012550"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了他链接的讨论，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是关键点的摘要：</font></font></strong></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数中的私有属性

</font></font><ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法从原型函数访问</font></font></li>
</ul></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数中的私有方法

</font></font><ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与属性相同，而且您失去了在原型中为每个类创建一次函数的性能优势；</font><font style="vertical-align: inherit;">而是为每个实例创建函数的副本</font></font></li>
</ul></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加样板以抽象属性访问并增强可见性

</font></font><ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要的性能开销；</font><font style="vertical-align: inherit;">TypeScript专为大型应用程序而设计</font></font></li>
</ul></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript已经将构造函数和原型方法定义包装在一个闭包中。</font><font style="vertical-align: inherit;">将私有方法和属性放在那里

</font></font><ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将私有属性放在该闭包中的问题：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们成为静态变量；</font><font style="vertical-align: inherit;">每个实例没有一个</font></font></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将私有方法放入该闭包中的问题：</font></font></em><font style="vertical-align: inherit;"></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有某种变通办法，</font><font style="vertical-align: inherit;">它们将无法访问</font></font></li>
</ul></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动修改私有变量名称

</font></font><ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反论点：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是命名约定，不是语言构造。</font><font style="vertical-align: inherit;">自己弄乱</font></font></li>
</ul></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>@private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使注释器识别</font><font style="vertical-align: inherit;">私有</font><font style="vertical-align: inherit;">注释可以有效地缩小方法名称的注释器来

 </font><font style="vertical-align: inherit;">注释私有方法</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此没有重大反驳</font></font></li>
</ul></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在发出的代码中增加可见性支持的总体反论点：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是JavaScript本身没有可见性修饰符-这不是TypeScript的问题</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript社区中已经建立了一个模式：在私有属性和方法前加下划线，表示“后果自负”。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当TypeScript设计师说真正的私有属性和方法不是“可能的”时，他们的意思是“在我们的设计约束下是不可能的”，特别是：

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出的JS是惯用的</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样板最小</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与普通JS OOP相比，没有额外的开销</font></font></li>
</ul></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TypeScript中，私有函数只能在类内部访问。</font><font style="vertical-align: inherit;">喜欢</font></font></p>

<p><a href="https://i.stack.imgur.com/gwnjJ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/gwnjJ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您尝试访问私有成员时，它将显示错误。</font><font style="vertical-align: inherit;">这是示例：</font></font></p>

<p><a href="https://i.stack.imgur.com/yFUdU.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/yFUdU.png" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：使用javascript很好，并且两个函数都可以在外部访问。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像类型检查一样，成员的隐私仅在编译器中强制执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">私有属性实现为常规属性，并且不允许类外部的代码对其进行访问。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使某些东西真正成为类的私有对象，它不能成为该类的成员，而应是在创建对象的代码内的函数作用域内创建的局部变量。</font><font style="vertical-align: inherit;">那将意味着您不能像类的成员那样访问它，即使用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
