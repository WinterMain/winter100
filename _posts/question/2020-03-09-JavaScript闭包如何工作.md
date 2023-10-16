---
layout: question
title:  JavaScript闭包如何工作？
date:   2020-03-09T03:50:35.000Z
description:                                                                          ...
img: 
author: 米亚神无
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将如何向了解其闭包概念（例如函数，变量等）的人解释JavaScript闭包，但却不了解闭包本身？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font><font style="vertical-align: inherit;">在Wikipedia上</font><font style="vertical-align: inherit;">看到</font></font><a href="http://en.wikipedia.org/wiki/Scheme_%28programming_language%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了Scheme示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是不幸的是它没有帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第132篇《JavaScript闭包如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是将它们指向</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Closures页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">是我发现的关于闭包基础知识和实际用法</font><font style="vertical-align: inherit;">的最佳，最</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁明了的解释</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">强烈建议任何学习JavaScript的人使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，我什至推荐给6岁的孩子使用-如果6岁的孩子正在学习闭包，那么可以随时理解</font><font style="vertical-align: inherit;">本文提供</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁明了</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的逻辑是合乎逻辑</font><font style="vertical-align: inherit;">的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The author of <em><a href="http://javascript.info/tutorial/closures" rel="noreferrer">Closures</a></em> has explained closures pretty well, explaining the reason why we need them and also explaining LexicalEnvironment which is necessary to understanding closures. <br>
Here is the summary:</p>

<p>What if a variable is accessed, but it isn’t local? Like here:</p>

<p><a href="https://i.stack.imgur.com/SLlVB.png" rel="noreferrer"><img src="https://i.stack.imgur.com/SLlVB.png" alt="在此处输入图片说明"></a></p>

<p>In this case, the interpreter finds the variable in the
outer <a href="http://javascript.info/tutorial/initialization" rel="noreferrer"><code>LexicalEnvironment</code></a> object.</p>

<p>The process consists of two steps:</p>

<ol>
<li>First, when a function f is created, it is not created in an empty
space. There is a current LexicalEnvironment object. In the case
above, it’s window (a is undefined at the time of function
creation).</li>
</ol>

<p><a href="https://i.stack.imgur.com/0KBin.png" rel="noreferrer"><img src="https://i.stack.imgur.com/0KBin.png" alt="在此处输入图片说明"></a></p>

<p>When a function is created, it gets a hidden property, named [[Scope]], which references the current LexicalEnvironment.</p>

<p><a href="https://i.stack.imgur.com/U3yt7.png" rel="noreferrer"><img src="https://i.stack.imgur.com/U3yt7.png" alt="在此处输入图片说明"></a></p>

<p>If a variable is read, but can not be found anywhere, an error is generated.</p>

<p><strong>Nested functions</strong></p>

<p>Functions can be nested one inside another, forming a chain of LexicalEnvironments which can also be called a scope chain.</p>

<p><a href="https://i.stack.imgur.com/2hUwr.png" rel="noreferrer"><img src="https://i.stack.imgur.com/2hUwr.png" alt="在此处输入图片说明"></a></p>

<p>So, function g has access to g, a and f.</p>

<p><strong>Closures</strong></p>

<p>A nested function may continue to live after the outer function has finished:</p>

<p><a href="https://i.stack.imgur.com/S1mlB.png" rel="noreferrer"><img src="https://i.stack.imgur.com/S1mlB.png" alt="在此处输入图片说明"></a></p>

<p>Marking up LexicalEnvironments:</p>

<p><a href="https://i.stack.imgur.com/BzUNi.png" rel="noreferrer"><img src="https://i.stack.imgur.com/BzUNi.png" alt="在此处输入图片说明"></a></p>

<p>As we see, <code>this.say</code> is a property in the user object, so it continues to live after User completed.</p>

<p>And if you remember, when <code>this.say</code> is created, it (as every function) gets an internal reference <code>this.say.[[Scope]]</code> to the current LexicalEnvironment. So, the LexicalEnvironment of the current User execution stays in memory. All variables of User also are its properties, so they are also carefully kept, not junked as usually.</p>

<p><strong>The whole point is to ensure that if the inner function wants to access an outer variable in the future, it is able to do so.</strong></p>

<p>To summarize:</p>

<ol>
<li>The inner function keeps a reference to the outer
LexicalEnvironment.</li>
<li>The inner function may access variables from it
any time even if the outer function is finished.</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器将LexicalEnvironment及其所有属性（变量）保留在内存中，直到有一个内部函数引用它为止。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这称为关闭。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">--神经Xiao--</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个六岁孩子的答案（假设他知道什么是函数，什么是变量以及什么数据）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数可以返回数据。</font><font style="vertical-align: inherit;">您可以从函数返回的一种数据是另一种函数。</font><font style="vertical-align: inherit;">返回该新函数时，创建该函数的函数中使用的所有变量和参数都不会消失。</font><font style="vertical-align: inherit;">而是，该父函数“关闭”。</font><font style="vertical-align: inherit;">换句话说，除了返回的功能外，什么都看不到它，也看不到它使用的变量。</font><font style="vertical-align: inherit;">该新函数具有特殊的功能，可以回顾创建它的函数内部并查看其中的数据。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> the_closure</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> x</span><span class="pun">;</span><span class="pln"> </span><span class="com">// Here, we look back inside the_closure for the value of x</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> myFn </span><span class="pun">=</span><span class="pln"> the_closure</span><span class="pun">();</span><span class="pln">
myFn</span><span class="pun">();</span><span class="pln"> </span><span class="com">//=&gt; 4</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释它的另一种非常简单的方法是在范围上：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当您在较大范围内创建较小范围时，较小范围将始终能够看到较大范围中的内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不明白为什么答案在这里这么复杂。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个闭包：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">42</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> b</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">您可能一天使用多次。</font></font></p>

<p><br></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有理由相信闭包是解决特定问题的复杂设计方法。</font><font style="vertical-align: inherit;">不，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从函数声明的位置（不运行）的角度来看</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，闭包只是使用来自更高范围的变量</font><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您执行的操作会更加壮观，请参阅其他答案。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dlaliberte第一点的示例：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包不仅在您返回内部函数时创建。</font><font style="vertical-align: inherit;">实际上，封闭函数根本不需要返回。</font><font style="vertical-align: inherit;">您可以改为将内部函数分配给外部作用域中的变量，或将其作为参数传递给可以立即使用的另一个函数。</font><font style="vertical-align: inherit;">因此，在调用封闭函数时，封闭函数的关闭可能已经存在，因为任何内部函数都可以在调用它后立即对其进行访问。</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">
    i </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x </span><span class="pun">+</span><span class="pln"> y </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">tmp</span><span class="pun">));</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
foo</span><span class="pun">(</span><span class="lit">2</span><span class="pun">);</span><span class="pln">
i</span><span class="pun">(</span><span class="lit">3</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道已经有很多解决方案，但是我猜想这个小而简单的脚本可以用来说明这个概念：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// makeSequencer will return a "sequencer" function</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> makeSequencer </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> _count </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> </span><span class="com">// not accessible outside this function</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> sequencer </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> _count</span><span class="pun">++;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> sequencer</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> fnext </span><span class="pun">=</span><span class="pln"> makeSequencer</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> v0 </span><span class="pun">=</span><span class="pln"> fnext</span><span class="pun">();</span><span class="pln">     </span><span class="com">// v0 = 0;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> v1 </span><span class="pun">=</span><span class="pln"> fnext</span><span class="pun">();</span><span class="pln">     </span><span class="com">// v1 = 1;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> vz </span><span class="pun">=</span><span class="pln"> fnext</span><span class="pun">.</span><span class="pln">_count </span><span class="com">// vz = undefined</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包是内部函数可以访问其外部函数中的变量的地方。</font><font style="vertical-align: inherit;">这可能是闭包最简单的单行解释。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何向六岁的孩子解释：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您知道大人如何拥有房屋，他们称之为房屋吗？</font><font style="vertical-align: inherit;">当妈妈有孩子时，孩子实际上并不拥有任何东西，对吗？</font><font style="vertical-align: inherit;">但是它的父母拥有一所房子，因此只要有人问孩子“你的房子在哪里？”，他/她就可以回答“那所房子！”，并指向其父母的房子。</font><font style="vertical-align: inherit;">“关闭”是孩子始终（即使在国外）能够说出自己有房屋的能力，即使实际上这是父母的财产。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前一段时间，我写了一篇博客文章解释了闭包。</font><font style="vertical-align: inherit;">这就是我说的关于闭包的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><strong><font style="vertical-align: inherit;">因为</font></strong><font style="vertical-align: inherit;">您想要一个</font><font style="vertical-align: inherit;">闭包</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包是一种使函数具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永久性私有变量的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，也就是说，只有一个函数才知道的变量，它可以在其中跟踪以前运行时的信息。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这种意义上讲，它们使函数的行为有点像具有私有属性的对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全文：</font></font></p>

<p><a href="http://sleeplessgeek.blogspot.com/2009/12/so-what-are-these-closure-thingys.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么这些关闭的东西是什么呢？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包很难解释，因为闭包用于使某些行为正常工作，每个人都希望它们能正常工作。</font><font style="vertical-align: inherit;">我发现解释它们的最佳方法（以及</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解它们</font><font style="vertical-align: inherit;">的方法</font><font style="vertical-align: inherit;">）是想象没有它们的情况：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">var</span><span class="pln"> bind </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">y</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> x </span><span class="pun">+</span><span class="pln"> y</span><span class="pun">;</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    </span><span class="kwd">var</span><span class="pln"> plus5 </span><span class="pun">=</span><span class="pln"> bind</span><span class="pun">(</span><span class="lit">5</span><span class="pun">);</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">plus5</span><span class="pun">(</span><span class="lit">3</span><span class="pun">));</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif14" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果JavaScript </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道闭包，</font><font style="vertical-align: inherit;">在这里会发生什么</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">只需将最后一行的调用替换为其方法主体（基本上是函数调用所做的工作），您将获得：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x </span><span class="pun">+</span><span class="pln"> </span><span class="lit">3</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，的定义在</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里？</font><font style="vertical-align: inherit;">我们没有在当前范围内对其进行定义。</font><font style="vertical-align: inherit;">唯一的解决方案是</font></font><code>plus5</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随身携带</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其范围（或更确切地说，其父级的范围）。</font><font style="vertical-align: inherit;">这种方式</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义明确，并绑定到值5。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，6岁的瓶盖粉丝。</font><font style="vertical-align: inherit;">您是否想听到最简单的闭包示例？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们想象下一个情况：驾驶员坐在汽车上。</font><font style="vertical-align: inherit;">那辆车在飞机上。</font><font style="vertical-align: inherit;">飞机在机场。</font><font style="vertical-align: inherit;">驾驶员即使在飞机离开机场后也无法进入汽车外部但在飞机内部的东西，这是封闭的。</font><font style="vertical-align: inherit;">而已。</font><font style="vertical-align: inherit;">27岁时，请查看</font></font><a href="https://stackoverflow.com/a/111200/1393791"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更详细的说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或以下示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是将飞机上的故事转换为代码的方法。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> plane </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">defaultAirport</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="kwd">var</span><span class="pln"> lastAirportLeft </span><span class="pun">=</span><span class="pln"> defaultAirport</span><span class="pun">;</span><span class="pln">

  </span><span class="kwd">var</span><span class="pln"> car </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    driver</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      startAccessPlaneInfo</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        setInterval</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Last airport was "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> lastAirportLeft</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">},</span><span class="pln"> </span><span class="lit">2000</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
  car</span><span class="pun">.</span><span class="pln">driver</span><span class="pun">.</span><span class="pln">startAccessPlaneInfo</span><span class="pun">();</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    leaveTheAirport</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">airPortName</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      lastAirportLeft </span><span class="pun">=</span><span class="pln"> airPortName</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}(</span><span class="str">"Boryspil International Airport"</span><span class="pun">);</span><span class="pln">

plane</span><span class="pun">.</span><span class="pln">leaveTheAirport</span><span class="pun">(</span><span class="str">"John F. Kennedy"</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif17" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的每个函数都维护与其外部词法环境的链接。</font><font style="vertical-align: inherit;">词汇环境是作用域中所有名称（例如变量，参数）及其值的映射。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，每当您看到</font></font><code>function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字时，该函数内部的代码都可以访问该函数外部声明的变量。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">

  </span><span class="kwd">function</span><span class="pln"> bar</span><span class="pun">(</span><span class="pln">y</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x </span><span class="pun">+</span><span class="pln"> y </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">tmp</span><span class="pun">));</span><span class="pln"> </span><span class="com">// will log 16</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  bar</span><span class="pun">(</span><span class="lit">10</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

foo</span><span class="pun">(</span><span class="lit">2</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif8" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将记录下来</font></font><code>16</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为函数</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭了参数</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和变量</font></font><code>tmp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，两者都存在于外部函数的词法环境中</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Function </font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及其与函数的词法环境的链接</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个闭包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个函数不必</font><font style="vertical-align: inherit;">为了创建一个闭包</font><font style="vertical-align: inherit;">而</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仅仅凭借其声明，每个函数都会在其封闭的词法环境中关闭，从而形成一个闭合。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x </span><span class="pun">+</span><span class="pln"> y </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">tmp</span><span class="pun">));</span><span class="pln"> </span><span class="com">// will also log 16</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> bar </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">(</span><span class="lit">2</span><span class="pun">);</span><span class="pln">
bar</span><span class="pun">(</span><span class="lit">10</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 16</span><span class="pln">
bar</span><span class="pun">(</span><span class="lit">10</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 17</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif9" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的函数也会记录16，因为里面的代码</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然可以引用参数</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和变量</font></font><code>tmp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即使它们不再直接在范围内。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于</font></font><code>tmp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍在内部</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的封闭中</font><font style="vertical-align: inherit;">徘徊</font><font style="vertical-align: inherit;">，因此可以对其进行递增。</font><font style="vertical-align: inherit;">每次调用时，它都会增加</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭的最简单示例是：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> test</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span><span class="pln"> </span><span class="com">// will output 10</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// will output 6</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">6</span><span class="pun">;</span><span class="pln">
test</span><span class="pun">();</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif10" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p>When a JavaScript function is invoked, a new execution context <code>ec</code> is created. Together with the function arguments and the target object, this execution context also receives a link to the lexical environment of the calling execution context, meaning the variables declared in the outer lexical environment (in the above example, both <code>a</code> and <code>b</code>) are available from <code>ec</code>.</p>

<p>Every function creates a closure, because every function has a link to its outer lexical environment. </p>

<p>Note that variables <em>themselves</em> are visible from within a closure, <em>not</em> copies.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
