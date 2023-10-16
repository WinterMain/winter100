---
layout: question
title:  我应该为JavaScript链接使用哪个“ href”值，“＃”或“ javascript：void（0）”？
date:   2020-03-09T04:46:16.000Z
description: 以下是构建链接的两种方法，其唯一目的是运行JavaScript代码。在功能，页面加载速度，验证目的等方面哪个更好？function myJsFun...
img: 
author: Gil伽罗小宇宙
category: question
answer: 22
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是构建链接的两种方法，其唯一目的是运行JavaScript代码。</font><font style="vertical-align: inherit;">在功能，页面加载速度，验证目的等方面哪个更好？</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> myJsFunc</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"myJsFunc"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">myJsFunc</span><span class="pun">();</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">Run JavaScript Code</span><span class="tag">&lt;/a&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> myJsFunc</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"myJsFunc"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"javascript:void(0)"</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">myJsFunc</span><span class="pun">();</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">Run JavaScript Code</span><span class="tag">&lt;/a&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第150篇《我应该为JavaScript链接使用哪个“ href”值，“＃”或“ javascript：void（0）”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信您提出的是错误的二分法。</font><font style="vertical-align: inherit;">这些不是仅有的两个选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意D4V360先生的意见，他建议，即使您使用的是定位标记，也没有真正的定位标记。</font><font style="vertical-align: inherit;">您所拥有的只是文档的特殊部分，其行为应略有不同。</font><font style="vertical-align: inherit;">一个</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签是更为合适。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用开发人员工具在谷歌浏览器中尝试了两次，</font></font><code>id="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">花了0.32秒。</font><font style="vertical-align: inherit;">而该</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法仅花费了0.18秒。</font><font style="vertical-align: inherit;">因此，在谷歌浏览器中，</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果更好，更快。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您要完成的工作，您可能会忘记onclick而仅使用href：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:myJsFunc()"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pln"> </span><span class="typ">Text</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它绕过了返回false的需要。</font><font style="vertical-align: inherit;">我不喜欢该</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项，因为如上所述，它将把用户带到页面顶部。</font><font style="vertical-align: inherit;">如果您在其他地方未启用JavaScript来发送用户（这在我工作的地方很少见，但这是一个很好的主意），那么Steve提出的方法非常有用。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascriptlessDestination.html"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJSFunc(); return false;"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pln"> text</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望任何人去任何地方并且不想调用JavaScript函数，则可以使用。</font><font style="vertical-align: inherit;">如果您有想要发生鼠标悬停事件的图像，则效果很好，但是用户没有任何可单击的东西。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许没有理由使用锚标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您几乎可以在每个元素上附加事件（单击，悬停等），那么为什么不只使用a </font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于禁用了JavaScript的用户：如果没有后备广告（例如，Alternative </font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），那么他们至少应该根本无法看到该元素并与之交互，无论它是</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果碰巧正在使用</font></font><a href="http://angularjs.org/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用以下代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">""</span><span class="pun">&gt;</span><span class="typ">Do</span><span class="pln"> some fancy </span><span class="typ">JavaScript</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会做什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与（＃）一样，它不会带您到页面顶部。

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您无需</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript </font><font style="vertical-align: inherit;">显式返回</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam番长逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当您使用</font></font><code>&lt;a /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">来做一些JavaScript事情时</font><font style="vertical-align: inherit;">，如果您也放置</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">标记，则</font></font><code>href="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">在事件结束时</font><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">return false </font></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果是内联事件绑定），</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"#"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc(); return false;"</span><span class="pun">&gt;</span><span class="typ">Run</span><span class="pln"> </span><span class="typ">JavaScript</span><span class="pln"> </span><span class="typ">Code</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以</font><font style="vertical-align: inherit;">使用JavaScript </font><font style="vertical-align: inherit;">更改</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">href</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，例如：</font></font></em></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript://"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc();"</span><span class="pun">&gt;</span><span class="typ">Run</span><span class="pln"> </span><span class="typ">JavaScript</span><span class="pln"> </span><span class="typ">Code</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:void(0)"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc();"</span><span class="pun">&gt;</span><span class="typ">Run</span><span class="pln"> </span><span class="typ">JavaScript</span><span class="pln"> </span><span class="typ">Code</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是从语义上讲，以上所有实现此目的的方法都是错误的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尽管效果很好）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果未创建任何元素来导航页面并且具有与之相关联的一些JavaScript东西，则该元素不应为</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单地使用a </font></font><code>&lt;button /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替做事，也可以根据需要</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">其他任何元素，例如b，span或任何适合的元素，因为您可以在所有元素上添加事件。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个好处</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来使用</font></font><code>&lt;a href="#"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样做时，默认情况下会在该元素上获得光标指针</font></font><code>a href="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为此，我认为您可以为此使用CSS，</font></font><code>cursor:pointer;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，如果您要绑定JavaScript代码本身的事件，则可以</font></font><code>event.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的情况下</font><font style="vertical-align: inherit;">实现此目的</font><font style="vertical-align: inherit;">，但是，如果您不</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">标签，则可以得到好处，而不会不需要这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您看到了，最好不要对此类内容使用标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要仅出于运行JavaScript的目的而使用链接。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用href =“＃”会将页面滚动到顶部；</font><font style="vertical-align: inherit;">使用void（0）会在浏览器中造成导航问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是使用链接以外的其他元素：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">span onclick</span><span class="pun">=</span><span class="str">"myJsFunc()"</span><span class="pln"> </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"funcActuator"</span><span class="pun">&gt;</span><span class="pln">myJsFunc</span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用CSS设置样式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">.</span><span class="pln">funcActuator </span><span class="pun">{</span><span class="pln"> 
  cursor</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">default</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="pun">.</span><span class="pln">funcActuator</span><span class="pun">:</span><span class="pln">hover </span><span class="pun">{</span><span class="pln"> 
  color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">#</span><span class="lit">900</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好使用jQuery，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    $</span><span class="pun">(</span><span class="str">"a"</span><span class="pun">).</span><span class="pln">css</span><span class="pun">(</span><span class="str">"cursor"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"pointer"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并省略</font></font><code>href="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>href="javascript:void(0)"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">锚标记标记将类似于 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a onclick</span><span class="pun">=</span><span class="str">"hello()"</span><span class="pun">&gt;</span><span class="typ">Hello</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很简单！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Jim路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我选择use </font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为使用此方法可能会阻止右键单击以打开内容菜单。</font><font style="vertical-align: inherit;">但是</font></font><code>javascript:;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更短并且做同样的事情。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"#"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc();return false;"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使得</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的搜索引擎需要它。</font><font style="vertical-align: inherit;">如果您使用其他任何东西（例如字符串），则可能会导致</font></font><code>404 not found</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当鼠标悬停在链接上时，并不表示它是脚本。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，页面不会跳到顶部或断开</font></font><code>back</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您使用JavaScript写出链接（以便您知道已在浏览器中启用该链接），否则，理想情况下，应该为禁用了JavaScript进行浏览的用户提供正确的链接，然后阻止onclick中该链接的默认操作事件处理程序。</font><font style="vertical-align: inherit;">这样，那些启用了JavaScript的用户将运行该功能，而那些禁用JavaScript的用户将跳至相应的页面（或同一页面内的位置），而不仅仅是单击链接而没有任何反应。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对哈希（</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）更好，因为在JavaScript中，它是一个伪方案：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">污染历史 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例化引擎的新副本 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在全局范围内运行，并且不遵守事件系统。 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，带有防止默认操作的onclick处理程序的“＃”要好得多。</font><font style="vertical-align: inherit;">而且，仅在运行JavaScript时才有的链接并不是真正的“链接”，除非您在出现问题时将用户引导到页面上的某个合理锚点（只是＃会发送到顶部）。</font><font style="vertical-align: inherit;">您可以简单地模拟与样式表链接的外观，而完全不用考虑href。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，关于cowgod的建议，尤其是这样：</font></font><code>...href="javascript_required.html" onclick="...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个好方法，但是不能区分“ JavaScript禁用”和“ onclick失败”两种情况。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常去</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"yourFunction()"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pln"> description</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它比javascript：void（0）短，并且执行相同的操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三古一神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议改用</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尤其是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控件应该在数据中进行更改的情况下。</font><font style="vertical-align: inherit;">（有点像POST。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不加干扰地注入元素（一种渐进增强），那就更好了。</font><font style="vertical-align: inherit;">（请参阅</font></font><a href="https://stackoverflow.com/questions/134845/href-for-javascript-links-or-javascriptvoid0#134957"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比更好</font></font><code>javascript:anything</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但以下更好：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"/gracefully/degrading/url/with/same/functionality.ext"</span><span class="pln"> </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"some-selector"</span><span class="pun">&gt;</span><span class="typ">For</span><span class="pln"> great justice</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    $</span><span class="pun">(</span><span class="str">".some-selector"</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="pln">myJsFunc</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该始终努力使性能降级（在用户未启用JavaScript的情况下……以及在符合规格和预算的情况下）。</font><font style="vertical-align: inherit;">另外，直接在HTML中使用JavaScript属性和协议也被认为是不好的形式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你也不要问我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的“链接”的唯一目的是运行一些JavaScript代码，则该链接不符合链接的条件；</font><font style="vertical-align: inherit;">而是一段带有JavaScript函数的文本。</font><font style="vertical-align: inherit;">我建议使用带有</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的标签</font></font><code>onclick handler</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和一些基本的CSS来模仿链接。</font><font style="vertical-align: inherit;">链接用于导航，如果您的JavaScript代码不用于导航，则不应将其作为</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> callFunction</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"function called"</span><span class="pun">);</span><span class="pln"> </span><span class="pun">}</span></code></pre>
<pre class="snippet-code-css lang-css prettyprint prettyprinted" style=""><code><span class="pun">.</span><span class="pln">jsAction </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">cursor</span><span class="pun">:</span><span class="pln"> pointer</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">color</span><span class="pun">:</span><span class="pln"> </span><span class="lit">#00f</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">text-decoration</span><span class="pun">:</span><span class="pln"> underline</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p&gt;</span><span class="pln">I want to call a JavaScript function </span><span class="tag">&lt;span</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"jsAction"</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">callFunction</span><span class="pun">();</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">here</span><span class="tag">&lt;/span&gt;</span><span class="pln">.</span><span class="tag">&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif5" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用以下</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc();"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:void(0);"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc();"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用只会</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生一些有趣的动作，因此，</font></font><code>#self</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望节省的打字工作，</font><font style="vertical-align: inherit;">我建议使用</font></font><code>JavaScript bla, bla,</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，您可以这样做：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascriptlessDestination.html"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJSFunc(); return false;"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pln"> text</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，甚至更好的是，您将在HTML中具有默认的动作链接，并且会在DOM呈现后通过JavaScript将onclick事件毫不费力地添加到元素中，从而确保如果不存在/未使用JavaScript，您不会有无用的事件处理程序使您的代码混乱，并可能混淆（或至少分散您的注意力）您的实际内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三个原因。</font><font style="vertical-align: inherit;">鼓励</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一组开发人员中</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">不可避免地导致某些人使用这样的函数的返回值：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> doSomething</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">//Some code</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是后来他们忘记了</font></font><code>return doSomething()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在onclick中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，而只是使用</font></font><code>doSomething()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免的第二个原因</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果被调用的函数抛出错误</font><font style="vertical-align: inherit;">，则最终</font><font style="vertical-align: inherit;">将不会执行。</font><font style="vertical-align: inherit;">因此，开发人员还必须记住在调用的函数中适当地处理任何错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三个原因是在某些情况下，</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件属性是动态分配的。</font><font style="vertical-align: inherit;">我更喜欢能够调用一个函数或动态分配它，而不必专门为一种附加方法或另一种附加方法编写函数。</font><font style="vertical-align: inherit;">因此，我</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或任何形式）的HTML标记如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">onclick</span><span class="pun">=</span><span class="str">"someFunc.call(this)"</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">onclick</span><span class="pun">=</span><span class="str">"someFunc.apply(this, arguments)"</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以避免上述所有麻烦，而且我还没有发现任何不利方面的例子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您是一个孤独的开发人员，那么您可以明确地做出自己的选择，但是如果您是团队合作，则必须声明以下两种情况：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请使用</font></font><code>href="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，确保</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最后</font><font style="vertical-align: inherit;">包含</font><font style="vertical-align: inherit;">任何被调用的函数都不会引发错误，并且，如果您将函数动态地附加到</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，请确保它不会抛出错误也返回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>href="javascript:void(0)"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种显然更容易沟通。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙武藏</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个，理想情况下带有真实链接，以防用户禁用JavaScript。</font><font style="vertical-align: inherit;">只要确保返回false即可防止JavaScript执行时触发click事件。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"#"</span><span class="pln"> onclick</span><span class="pun">=</span><span class="str">"myJsFunc(); return false;"</span><span class="pun">&gt;</span><span class="typ">Link</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用Angular2，则这种方式有效：</font></font></p>

<p><code>&lt;a [routerLink]="" (click)="passTheSalt()"&gt;Click me&lt;/a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这里</font></font><a href="https://stackoverflow.com/a/45465728/2803344"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/45465728/2803344</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L神无Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都不行  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以使用一个有意义的实际URL，则可以将其用作HREF。</font><font style="vertical-align: inherit;">如果有人在您的链接上单击鼠标中键以打开新标签，或者禁用了JavaScript，则onclick不会触发。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不可能，那么至少应使用JavaScript和适当的click事件处理程序将锚标记注入文档中。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这并非总是可能的，但我认为在开发任何公共网站时都应努力做到这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><em><a href="http://en.wikipedia.org/wiki/Unobtrusive_JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Unobtrusive JavaScript</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><a href="http://en.wikipedia.org/wiki/Progressive_enhancement" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Progressive增强功能</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（均为Wikipedia）。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
