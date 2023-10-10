---
layout: question
title:  JavaScript比较中应使用哪个等于运算符（== vs ===）？
date:   2020-03-09T04:16:32.000Z
description:                                                                          ...
img: 
author: eva
category: question
answer: 17
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="https://stackoverflow.com/help/privileges/edit-community-wiki" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://en.wikipedia.org/wiki/JSLint" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSLint</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来遍历JavaScript，并且</font><font style="vertical-align: inherit;">在执行诸如</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">内部进行</font><font style="vertical-align: inherit;">比较</font><font style="vertical-align: inherit;">之</font><font style="vertical-align: inherit;">类的操作时</font><font style="vertical-align: inherit;">，它返回许多建议以</font><font style="vertical-align: inherit;">（三个等号）</font><font style="vertical-align: inherit;">替换</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（两个等号）</font><font style="vertical-align: inherit;">。</font></font><code>===</code><font style="vertical-align: inherit;"></font><code>idSele_UNVEHtype.value.length == 0</code><font style="vertical-align: inherit;"></font><code>if</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有性能优势，以代替</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于存在许多比较运算符，因此任何性能改进都将受到欢迎。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有进行类型转换，性能会超过</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第138篇《JavaScript比较中应使用哪个等于运算符（== vs ===）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null和undefined是虚无，也就是说，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有值。</font><font style="vertical-align: inherit;">而0，false和''均为值。</font><font style="vertical-align: inherit;">所有这些之间的共同点是它们都是虚假的值，这意味着它们都</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">满足</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虚假的条件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，0，false和''共同构成一个子组。</font><font style="vertical-align: inherit;">另一方面，null和undefined构成第二个子组。</font><font style="vertical-align: inherit;">检查下图中的比较。</font><font style="vertical-align: inherit;">null和undefined相等。</font><font style="vertical-align: inherit;">其他三个将彼此相等。</font><font style="vertical-align: inherit;">但是，它们在JavaScript中都被视为虚假条件。</font></font></p>

<p><img src="https://i.stack.imgur.com/11I0i.jpg" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与任何对象（如{}，数组等）相同，非空字符串和布尔值true都是真实条件。</font><font style="vertical-align: inherit;">但是，它们都不相等。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个方便的比较表，显示所发生的转换之间的差异</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论如下：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“除非您完全了解两个相等的转换，否则请使用三个相等。”</font></font></p>
</blockquote>

<p><a href="http://dorey.github.io/JavaScript-Equality-Table/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dorey.github.io/JavaScript-Equality-Table/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>null and undefined are nothingness, that is,</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span></code></pre>

<p>Here <code>a</code> and <code>b</code> do not have values. Whereas, 0, false and '' are all values. One thing common beween all these are that they are all falsy values, which means they all <strong>satisfy</strong> falsy conditions.</p>

<p>So, the 0, false and '' together form a sub-group. And on other hand, null &amp; undefined form the second sub-group. Check the comparisons in the below image. null and undefined would equal. The other three would equal to each other. But, they all are treated as falsy conditions in JavaScript.</p>

<p><img src="https://i.stack.imgur.com/11I0i.jpg" alt="在此处输入图片说明"></p>

<p>This is same as any object (like {}, arrays, etc.), non-empty string &amp; Boolean true are all truthy conditions. But, they are all not equal.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个方便的比较表，显示所发生的转换之间的差异</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论如下：</font></font></p>

<blockquote>
  <p>"Use three equals unless you fully understand the conversions that take
  place for two-equals."</p>
</blockquote>

<p><a href="http://dorey.github.io/JavaScript-Equality-Table/" rel="noreferrer" data-bitapp="processed">http://dorey.github.io/JavaScript-Equality-Table/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Operators/Comparison_Operators" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">核心javascript参考</font></font></a></p>

<blockquote>
  <p><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果操作数严格相等（见上文），没有类型转换。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一凯Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是您可能很容易遇到麻烦，因为JavaScript具有很多隐式转换，这意味着...</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> isTrue </span><span class="pun">=</span><span class="pln"> x </span><span class="pun">==</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> isFalse </span><span class="pun">=</span><span class="pln"> x </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪一个很快成为问题。</font><font style="vertical-align: inherit;">隐式转换为什么是“邪恶的”的最佳示例可以从</font></font><a href="http://en.wikipedia.org/wiki/Microsoft_Foundation_Class_Library" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MFC</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / C ++中的</font><font style="vertical-align: inherit;">此代码中获取，该代码</font><font style="vertical-align: inherit;">实际上将由于从CString到HANDLE的隐式转换而编译，HANDLE是指针typedef类型。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">CString</span><span class="pln"> x</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">delete</span><span class="pln"> x</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，在运行时这会做</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不确定的事情...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google在C ++和</font></font><a href="http://en.wikipedia.org/wiki/Standard_Template_Library" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">STL中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行隐式转换，</font><font style="vertical-align: inherit;">以获取针对它的一些参数...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面提到的前两个答案==表示平等，===表示身份。</font><font style="vertical-align: inherit;">不幸的是，这个说法是不正确的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果==的两个操作数都是对象，则将它们进行比较以查看它们是否是同一对象。</font><font style="vertical-align: inherit;">如果两个操作数都指向同一个对象，则equal操作符将返回true。</font><font style="vertical-align: inherit;">否则，两者不相等。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">];</span><span class="pln">  
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">];</span><span class="pln">  
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">a </span><span class="pun">==</span><span class="pln"> b</span><span class="pun">)</span><span class="pln">  </span><span class="com">// false  </span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="com">// false  </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码中，==和===都为假，因为a和b不是同一对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是说：如果==的两个操作数都是对象，则==的行为与===相同，这也意味着标识。</font><font style="vertical-align: inherit;">这两个运算符的本质区别在于类型转换。</font><font style="vertical-align: inherit;">==在检查相等性之前已经进行了转换，但是===没有。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木嘢</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据经验，我通常会使用</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（和</font></font><code>!==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>!=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因在上面的答案中进行了解释，Douglas Crockford对此也很清楚（</font></font><a href="https://rads.stackoverflow.com/amzn/click/com/0596517742" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：The Good Parts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，只有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个例外</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
 </font></font><code>== null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种有效的方法来检查“是否为null或未定义”：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pun">(</span><span class="pln"> value </span><span class="pun">==</span><span class="pln"> </span><span class="kwd">null</span><span class="pln"> </span><span class="pun">){</span><span class="pln">
    </span><span class="com">// value is either null or undefined</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，jQuery 1.9.1使用此模式43次，因此</font></font><a href="http://www.jshint.com/docs/#options" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSHint语法检查器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至提供了</font></font><code>eqnull</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放宽选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://contribute.jquery.org/style-guide/js/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery样式指南</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该使用严格的相等性检查（===）来支持==。</font><font style="vertical-align: inherit;">唯一的例外是通过null检查undefined和null时。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// Check for both undefined and null values, for some important reason. </span><span class="pln">
undefOrNull </span><span class="pun">==</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span></code></pre>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jnck</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 操作员检查值以及变量类型是否相等。</font></font></p>

<p><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运算符只是检查变量的值是否相等。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是严格的检查测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一件好事，尤其是如果您要检查0到false和null之间。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您有：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$a</span><span class="pun">==</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> 
$a</span><span class="pun">==</span><span class="pln">NULL</span><span class="pun">;</span><span class="pln">
$a</span><span class="pun">==</span><span class="kwd">false</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全部返回true，您可能不希望这样。</font><font style="vertical-align: inherit;">假设您有一个可以返回数组的第0个索引或在失败时返回false的函数。</font><font style="vertical-align: inherit;">如果使用“ ==” false进行检查，则会得到令人困惑的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，与上述相同，但进行了严格的测试：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">

$a</span><span class="pun">===</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> </span><span class="com">// returns true</span><span class="pln">
$a</span><span class="pun">===</span><span class="pln">NULL</span><span class="pun">;</span><span class="pln"> </span><span class="com">// returns false</span><span class="pln">
$a</span><span class="pun">===</span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="com">// returns false</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用中的两个操作之间的性能差异不大。</font><font style="vertical-align: inherit;">由于两个参数已经是相同的类型，因此无需进行类型转换。</font><font style="vertical-align: inherit;">这两个操作都将进行类型比较，然后进行值比较。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font></font><code>===</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></strong> <code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">0</span><span class="pun">==</span><span class="kwd">false</span><span class="pln">   </span><span class="com">// true</span><span class="pln">
</span><span class="lit">0</span><span class="pun">===</span><span class="kwd">false</span><span class="pln">  </span><span class="com">// false, because they are of a different type</span><span class="pln">
</span><span class="lit">1</span><span class="pun">==</span><span class="str">"1"</span><span class="pln">     </span><span class="com">// true, auto type coercion</span><span class="pln">
</span><span class="lit">1</span><span class="pun">===</span><span class="str">"1"</span><span class="pln">    </span><span class="com">// false, because they are of a different type</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">===</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符称为严格的比较操作符，它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从不同的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">==</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取2个变数a和b。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ a == b”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评估为真，a和b必须为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ a === b”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的情况下，</font><font style="vertical-align: inherit;">a和b必须具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，才能将其评估为true。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看下面的例子</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="str">"1"</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">==</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="com">//evaluates to true as a and b are both 1</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"a == b"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="com">//evaluates to false as a is not the same type as b</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"a === b"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总而言之</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ; </font><font style="vertical-align: inherit;">在您不希望使用</font><strong><font style="vertical-align: inherit;">===</font></strong><font style="vertical-align: inherit;">运算符的</font><font style="vertical-align: inherit;">情况下，</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">==</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符可能会</font><font style="vertical-align: inherit;">得出</font><font style="vertical-align: inherit;">true，因此使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">===</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符会更安全。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在90％的使用情况下，使用哪一个无关紧要，但是当您一天有某些意外行为时，知道它们之间的区别很方便。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，它表示相同的值和类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">4</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"4"</span><span class="pln"> </span><span class="com">// will return true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">4</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="str">"4"</span><span class="pln"> </span><span class="com">// will return false </span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP和JavaScript中，它是严格的相等运算符。</font><font style="vertical-align: inherit;">这意味着它将比较类型和值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里的答案中，我什么都没有读到什么</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相等的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意思。</font><font style="vertical-align: inherit;">有人会说这</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相等并且属于同一类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这不是真的。</font><font style="vertical-align: inherit;">实际上，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font><strong><font style="vertical-align: inherit;">两个操作数都引用相同的对象</font></strong><font style="vertical-align: inherit;">，或者在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值类型的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况下</font><strong><font style="vertical-align: inherit;">，它们具有相同的value</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，让我们采用以下代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> c </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> ab_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false (even though a and b are the same type)</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> ac_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> c</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里也是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> c </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> ab_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false (even though a and b are the same type)</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> ac_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> c</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> c </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> ab_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// false (even though a and b are the same type)</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> ac_eq </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> c</span><span class="pun">);</span><span class="pln"> </span><span class="com">// true</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种现象并不总是很明显。</font><font style="vertical-align: inherit;">故事不只是平等和同类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则是：</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于值类型（数字）：</font></font></em></strong><br>
   <code>a === b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有相同的值并且属于相同的类型，则</font><font style="vertical-align: inherit;">返回true</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于引用类型：</font></font></em></strong><br>
   <code>a === b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用完全相同的对象，</font><font style="vertical-align: inherit;">则返回true</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于字符串：</font></font></em></strong><br>
   <code>a === b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">均为字符串且包含完全相同的字符</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">返回true</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串：特例...</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串不是值类型，但是在Javascript中，它们的行为类似于值类型，因此，当字符串中的字符相同且长度相同时，它们将“相等”（如第三条规则所述）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在变得有趣了：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="str">"12"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"3"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="str">"123"</span><span class="pun">;</span><span class="pln">

alert</span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// returns true, because strings behave like value types</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是呢？：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">String</span><span class="pun">(</span><span class="str">"123"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="str">"123"</span><span class="pun">;</span><span class="pln">

alert</span><span class="pun">(</span><span class="pln">a </span><span class="pun">===</span><span class="pln"> b</span><span class="pun">);</span><span class="pln"> </span><span class="com">// returns false !! (but they are equal and of the same type)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为字符串的行为类似于值类型？</font><font style="vertical-align: inherit;">好吧，这取决于您问的是谁...在这种情况下，a和b不是同一类型。</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是类型的</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是类型的</font></font><code>string</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需记住，使用</font></font><code>String</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数创建</font><font style="vertical-align: inherit;">字符串对象</font><font style="vertical-align: inherit;">会创建某种类型的东西，</font><em><font style="vertical-align: inherit;">大多数情况下</font></em></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的行为都类似于字符串</font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇米亚神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的相等比较的有趣的图形表示形式</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font><a href="http://dorey.github.io/JavaScript-Equality-Table/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://dorey.github.io/JavaScript-Equality-Table/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//dorey.github.io/JavaScript-Equality-Table/</font></font></a></strong></p>

<hr>

<h1><code>var1 === var2</code></h1>

<blockquote>
  <p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于JavaScript相等性测试时，一切保持原样。</font><font style="vertical-align: inherit;">在评估之前，没有任何转换。</font></font></em></strong></p>
</blockquote>

<p><img src="https://i.stack.imgur.com/62vxI.png" alt="JS中===的相等性评估"></p>

<hr>

<h1><code>var1 == var2</code></h1>

<blockquote>
  <p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于JavaScript相等性测试时，会进行一些时髦的转换。</font></font></em></strong></p>
</blockquote>

<p><img src="https://i.stack.imgur.com/35MpY.png" alt="JS中==的相等性评估"></p>

<blockquote>
  <p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">故事的道德启示：</font></font></em></strong> </p>
  
  <p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非你完全明白发生与转换</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></strong></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
