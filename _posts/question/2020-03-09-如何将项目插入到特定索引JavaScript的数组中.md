---
layout: question
title:  如何将项目插入到特定索引（JavaScript）的数组中？
date:   2020-03-09T05:25:16.000Z
description: 我正在寻找一种JavaScript数组插入方法，其样式为：arr.insert(index, item)最好是在jQuery中，但此时任何Java...
img: 
author: 凯斯丁
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找一种JavaScript数组插入方法，其样式为：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">arr</span><span class="pun">.</span><span class="pln">insert</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好是在jQuery中，但此时任何JavaScript实现都可以。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第166篇《如何将项目插入到特定索引（JavaScript）的数组中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采取减少收益的方法如下：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> insert</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> val</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> index </span><span class="pun">&gt;=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">length 
        </span><span class="pun">?</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">concat</span><span class="pun">(</span><span class="pln">val</span><span class="pun">)</span><span class="pln">
        </span><span class="pun">:</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">reduce</span><span class="pun">((</span><span class="pln">prev</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> prev</span><span class="pun">.</span><span class="pln">concat</span><span class="pun">(</span><span class="pln">i </span><span class="pun">===</span><span class="pln"> index </span><span class="pun">?</span><span class="pln"> </span><span class="pun">[</span><span class="pln">val</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">]</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> x</span><span class="pun">),</span><span class="pln"> </span><span class="pun">[]);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，通过这种方式，我们可以返回在索引处插入元素的新数组（这是一种很酷的功能方式-比使用push或splice更好），并且如果索引大于数组的长度，则将其插入在末尾。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">线程有点旧，但是我必须同意上面的Redu，因为拼接肯定有一些令人困惑的接口。</font><font style="vertical-align: inherit;">cdbajorin给出的响应是：“仅当第二个参数为0时，它才返回一个空数组。如果它大于0，则它返回从数组中删除的项目”，这是正确的。</font><font style="vertical-align: inherit;">该函数的目的是进行拼接，或者如Jakob Keller先前所述，“进行连接或连接，也进行更改。您现在要更改的已建立数组将涉及添加或删除元素。...”返回的元素的值（如果有的话）充其量是尴尬的。</font><font style="vertical-align: inherit;">我100％同意，如果此方法返回了看起来很自然的结果，那么它可能会更适合于链接，这是一个添加了拼接元素的新数组。</font><font style="vertical-align: inherit;">然后，您可以对返回的数组执行[[19“，” 17“]。splice（1,0，” 18“）。join（” ...“）之类的操作。</font><font style="vertical-align: inherit;">它返回已删除内容的事实只是个废话恕我直言。</font><font style="vertical-align: inherit;">如果该方法的目的是“切出一组元素”，那仅仅是目的。</font><font style="vertical-align: inherit;">似乎，如果我不知道要切出的内容，可能没有什么理由要切掉那些元素，不是吗？</font><font style="vertical-align: inherit;">如果它的行为像concat，map，reduce，slice等，那将是更好的选择，其中从现有数组中创建一个新数组，而不是对现有数组进行突变。</font><font style="vertical-align: inherit;">这些都是可链接的，这是一个重要的问题。</font><font style="vertical-align: inherit;">链数组操作相当普遍。</font><font style="vertical-align: inherit;">似乎该语言需要朝着另一个方向发展，并尽可能地坚持下去。</font><font style="vertical-align: inherit;">Javascript具有功能性且声明性较差，这似乎是对规范的奇怪偏离。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了，它工作正常！</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> initialArr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"India"</span><span class="pun">,</span><span class="str">"China"</span><span class="pun">,</span><span class="str">"Japan"</span><span class="pun">,</span><span class="str">"USA"</span><span class="pun">];</span><span class="pln">
initialArr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引是您要插入或删除元素的位置。</font><font style="vertical-align: inherit;">0，即第二个参数定义要删除的索引中元素的数量。item是要在数组中创建的新条目。</font><font style="vertical-align: inherit;">可以是一个或多个。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">initialArr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Nigeria"</span><span class="pun">);</span><span class="pln">
initialArr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Australia"</span><span class="pun">,</span><span class="str">"UK"</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何仍然对此有疑问并尝试过上述所有选项却从未获得过它的人。</font><font style="vertical-align: inherit;">我正在分享我的解决方案，这是要考虑到您不想显式地声明对象与数组的属性。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> isIdentical</span><span class="pun">(</span><span class="pln">left</span><span class="pun">,</span><span class="pln"> right</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">left</span><span class="pun">)</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">right</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> contains</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">let</span><span class="pln"> count </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
    array</span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">cur</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">isIdentical</span><span class="pun">(</span><span class="pln">cur</span><span class="pun">,</span><span class="pln"> obj</span><span class="pun">))</span><span class="pln"> count</span><span class="pun">++;</span><span class="pln">
    </span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> count </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对引用数组进行迭代并将其与要检查的对象进行比较的组合，将它们都转换为字符串，然后在匹配时进行迭代。</font><font style="vertical-align: inherit;">然后，您可以数数。</font><font style="vertical-align: inherit;">可以改进，但这是我解决的地方。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议</font><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">使用纯</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><strong><font style="vertical-align: inherit;">JavaScript</font></strong><font style="vertical-align: inherit;">中也没有insert方法，但是我们有一个   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置的Array</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，它可以为您完成工作，它称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splice</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看看什么是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splice（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splice（）方法通过删除现有元素和/或添加新元素来更改数组的内容。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，假设我们下面有这个数组：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">];</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以这样删除</font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">arr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="lit">3</span><span class="pun">),</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将返回3，但是如果现在检查arr，我们将：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，一切都很好，但是如何使用拼接将新元素添加到数组中呢？</font><font style="vertical-align: inherit;">让我们把3放回去...</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">arr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看看我们做了什么...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们</font><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">使用了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splice</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是这次我们为第二个参数传递了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着我们不希望删除任何项目，但是与此同时，我们添加了第三个参数3，它将在第二个索引处添加...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该知道，我们可以同时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如现在我们可以：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">arr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将删除</font><font style="vertical-align: inherit;">索引2处的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2个项目</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font><font style="vertical-align: inherit;">在索引2处</font><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，结果将是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">];</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这显示了拼接中的每个项目如何工作：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">array.splice（start，deleteCount，item1，item2，item3 ...）</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅A飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可能的解决方案，使用</font></font><code>Array#reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"apple"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"orange"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"raspberry"</span><span class="pun">],</span><span class="pln">
    arr2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">];</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> insert</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    arr </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">reduce</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">s</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      i </span><span class="pun">==</span><span class="pln"> index </span><span class="pun">?</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> s</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">[]);</span><span class="pln">   
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

insert</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> </span><span class="str">"banana"</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">
insert</span><span class="pun">(</span><span class="pln">arr2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif6" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您想要的是</font></font><strong><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice" rel="noreferrer" data-bitapp="processed"><code>splice</code></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机数组对象上的函数。</font></font></p>

<p><code>arr.splice(index, 0, item);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将插入</font></font><code>item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>arr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定的索引处（</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">项目，也就是插入）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例中，我们将创建一个数组并将一个元素添加到索引2中：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
arr</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Jani"</span><span class="pun">;</span><span class="pln">
arr</span><span class="pun">[</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Hege"</span><span class="pun">;</span><span class="pln">
arr</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Stale"</span><span class="pun">;</span><span class="pln">
arr</span><span class="pun">[</span><span class="lit">3</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Kai Jim"</span><span class="pun">;</span><span class="pln">
arr</span><span class="pun">[</span><span class="lit">4</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Borge"</span><span class="pun">;</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">join</span><span class="pun">());</span><span class="pln">
arr</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Lene"</span><span class="pun">);</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">join</span><span class="pun">());</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了拼接以外，您可以使用这种方法，该方法不会突变原始数组，但是会使用添加的项创建一个新数组。</font><font style="vertical-align: inherit;">通常应尽可能避免突变。</font><font style="vertical-align: inherit;">我在这里使用ES6传播算子。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> items </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> insert </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> newItem</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
  </span><span class="com">// part of the array before the specified index</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">),</span><span class="pln">
  </span><span class="com">// inserted item</span><span class="pln">
  newItem</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// part of the array after the specified index</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="pln">index</span><span class="pun">)</span><span class="pln">
</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> result </span><span class="pun">=</span><span class="pln"> insert</span><span class="pun">(</span><span class="pln">items</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">)</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">result</span><span class="pun">)</span><span class="pln">
</span><span class="com">// [1, 10, 2, 3, 4, 5]</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过稍微调整函数以将rest运算符用于新项目，可以将其添加到多个项目中，并将其也分散到返回的结果中</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> items </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> insert </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">newItems</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
  </span><span class="com">// part of the array before the specified index</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">),</span><span class="pln">
  </span><span class="com">// inserted items</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">newItems</span><span class="pun">,</span><span class="pln">
  </span><span class="com">// part of the array after the specified index</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="pln">index</span><span class="pun">)</span><span class="pln">
</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> result </span><span class="pun">=</span><span class="pln"> insert</span><span class="pun">(</span><span class="pln">items</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">)</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">result</span><span class="pun">)</span><span class="pln">
</span><span class="com">// [1, 10, 20, 2, 3, 4, 5]</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif3" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想一次将多个元素插入到数组中，请查看此Stack Overflow答案：</font></font><a href="https://stackoverflow.com/questions/1348178/a-better-way-to-splice-an-arrray-into-an-array-in-javascript" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中将数组拼接为数组的更好方法</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，这里有一些函数来说明这两个示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> insertAt</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> arrayToInsert </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="pln">arguments</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="lit">2</span><span class="pun">]);</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> insertArrayAt</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> arrayToInsert</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> insertArrayAt</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> arrayToInsert</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">].</span><span class="pln">concat</span><span class="pun">(</span><span class="pln">arrayToInsert</span><span class="pun">));</span><font></font><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> array</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后是一个jsFiddle，因此您可以自己查看：</font><a href="http://jsfiddle.net/luisperezphd/Wc8aS/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/luisperezphd/Wc8aS/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/luisperezphd/Wc8aS/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是您使用这些功能的方式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// if you want to insert specific values whether constants or variables:</span><font></font><span class="pln">
insertAt</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="str">"x"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"y"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"z"</span><span class="pun">);</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">// OR if you have an array:</span><font></font><span class="pln">
</span><span class="kwd">var</span><span class="pln"> arrToInsert </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"x"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"y"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"z"</span><span class="pun">];</span><font></font><span class="pln">
insertArrayAt</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> arrToInsert</span><span class="pun">);</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义数组</font></font><code>insert</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></h1>

<h3><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.具有多个参数和链接支持</font></font></em></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">/* Syntax:
   array.insert(index, value1, value2, ..., valueN) */</span><span class="pln">

</span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">insert </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">].</span><span class="pln">concat</span><span class="pun">(</span><span class="pln">
        </span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">arguments</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)));</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以插入多个元素（如本机</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice" rel="noreferrer" data-bitapp="processed"><code>splice</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样）并支持链接：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="str">"a"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"b"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"c"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"d"</span><span class="pun">].</span><span class="pln">insert</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="str">"X"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Y"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Z"</span><span class="pun">).</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">);</span><span class="pln">
</span><span class="com">// ["b", "X", "Y", "Z", "c"]</span></code></pre>

<hr>

<h3><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.具有数组类型参数合并和链接支持</font></font></em></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">/* Syntax:
   array.insert(index, value1, value2, ..., valueN) */</span><span class="pln">

</span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">insert </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    index </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">min</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">length</span><span class="pun">);</span><span class="pln">
    arguments</span><span class="pun">.</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
        </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">].</span><span class="pln">concat</span><span class="pun">([].</span><span class="pln">pop</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">arguments</span><span class="pun">)))</span><span class="pln">
        </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">insert</span><span class="pun">.</span><span class="pln">apply</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="pln"> arguments</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以将参数中的数组与给定数组合并，还支持链接：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="str">"a"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"b"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"c"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"d"</span><span class="pun">].</span><span class="pln">insert</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="str">"V"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">"W"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"X"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Y"</span><span class="pun">],</span><span class="pln"> </span><span class="str">"Z"</span><span class="pun">).</span><span class="pln">join</span><span class="pun">(</span><span class="str">"-"</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="com">// "a-b-V-W-X-Y-Z-c-d"</span><font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font></font></strong> <font style="vertical-align: inherit;"><a href="http://jsfiddle.net/UPphH/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">http </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="http://jsfiddle.net/UPphH/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/UPphH/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
