---
layout: question
title:  event.preventDefault（）与返回false
date:   2020-03-09T05:18:23.000Z
description: 当我想阻止其他事件处理程序在某个事件被触发后执行时，可以使用两种技术之一。我将在示例中使用jQuery，但这也适用于纯JS：1。 event.prev...
img: 
author: 小卤蛋Green小哥
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我想阻止其他事件处理程序在某个事件被触发后执行时，可以使用两种技术之一。</font><font style="vertical-align: inherit;">我将在示例中使用jQuery，但这也适用于纯JS：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1。 </font></font><code>event.preventDefault()</code></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">'a'</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// custom handling here</span><span class="pln">
    e</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2。 </font></font><code>return false</code></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">'a'</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// custom handling here</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两种停止事件传播的方法之间是否有显着差异？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比执行方法更简单，更短并且更容易出错。</font><font style="vertical-align: inherit;">使用该方法时，您必须记住正确的大小写，括号等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我必须在回调中定义第一个参数才能调用该方法。</font><font style="vertical-align: inherit;">也许，出于某些原因，我应该避免这样做并</font></font><code>preventDefault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改为</font><font style="vertical-align: inherit;">使用它</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">有什么更好的方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第161篇《event.preventDefault（）与返回false》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的主要区别</font></font><code>event.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是您的代码如下</font></font><code>return false</code> will not be executed and in <code>event.preventDefault()</code> case your code will execute after this statement.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您编写return false时，它将在后台为您做以下事情。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">*</span><span class="pln"> </span><span class="typ">Stops</span><span class="pln"> callback execution and returns immediately when called</span><span class="pun">.</span><span class="pln">
</span><span class="pun">*</span><span class="pln"> event</span><span class="pun">.</span><span class="pln">stopPropagation</span><span class="pun">();</span><span class="pln">
</span><span class="pun">*</span><span class="pln"> event</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，event.stopPropagation（）主要用于CSS效果或动画作品中，例如，当您同时对卡片和按钮元素都具有悬停效果时，当您在按钮上悬停时，卡片和按钮的悬停效果都会在这种情况下触发，您可以使用event.stopPropagation（）停止冒泡操作，而event.preventDefault（）用于阻止浏览器操作的默认行为。</font><font style="vertical-align: inherit;">例如，您有一个表单，但是您仅定义了Submit操作的click事件，如果用户通过按Enter提交表单，则由keypress事件触发的浏览器（而不是您的click事件）在这里应该使用event.preventDefault（）以避免不合适行为。</font><font style="vertical-align: inherit;">我不知道该死的是假。</font><font style="vertical-align: inherit;">对不起。有关更多说明，请访问此链接并在＃33行播放</font></font><a href="https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/xhr-get-request-iv" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/xhr-get-request-iv</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e.preventDefault（）;</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是停止元素的默认操作。</font></font></p>

<blockquote>
  <p>Instance Ex.:-</p>
</blockquote>

<p>prevents the hyperlink from following the URL, prevents the submit button to submit the form. When you have many event handlers and you just want to prevent default event from occuring, &amp; occuring from many times,
for that we need to  use  in the top of the function(). </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因：-</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的原因</font></font><code>e.preventDefault();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，在我们的代码中，代码中出现了问题，因此它将允许执行链接或表单以提交或允许执行或允许执行您需要执行的任何操作。</font><font style="vertical-align: inherit;">＆链接或提交按钮将被提交，并且仍允许事件的进一步传播。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="dec">&lt;!DOCTYPE html&gt;</span><span class="pln">
</span><span class="tag">&lt;html</span><span class="pln"> </span><span class="atn">lang</span><span class="pun">=</span><span class="atv">"en"</span><span class="pln"> </span><span class="atn">dir</span><span class="pun">=</span><span class="atv">"ltr"</span><span class="tag">&gt;</span><span class="pln">
   </span><span class="tag">&lt;head&gt;</span><span class="pln">
      </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span><span class="pln">
      </span><span class="tag">&lt;title&gt;&lt;/title&gt;</span><span class="pln">
   </span><span class="tag">&lt;/head&gt;</span><span class="pln">
   </span><span class="tag">&lt;body&gt;</span><span class="pln">
      </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span><span class="pln">
      </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"https://www.google.com"</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">doSomethingElse</span><span class="pun">()</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">Preventsss page from redirect</span><span class="tag">&lt;/a&gt;</span><span class="pln">
      </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="tag">&gt;</span><span class="pln">
         </span><span class="kwd">function</span><span class="pln"> doSomethingElse</span><span class="pun">(){</span><span class="pln">
           console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"This is Test..."</span><span class="pun">);</span><span class="pln">
         </span><span class="pun">}</span><span class="pln">
         $</span><span class="pun">(</span><span class="str">"a"</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">e</span><span class="pun">){</span><span class="pln">
          e</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span><span class="pln"> 
         </span><span class="pun">});</span><span class="pln">
      </span><span class="tag">&lt;/script&gt;</span><span class="pln">
   </span><span class="tag">&lt;/body&gt;</span><span class="pln">
</span><span class="tag">&lt;/html&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回False;</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是停止执行function（）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ </font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”将结束整个过程的执行。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因：-</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用return false的原因；</font><font style="vertical-align: inherit;">就是您不想再在严格模式下执行该功能。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="dec">&lt;!DOCTYPE html&gt;</span><span class="pln">
</span><span class="tag">&lt;html</span><span class="pln"> </span><span class="atn">lang</span><span class="pun">=</span><span class="atv">"en"</span><span class="pln"> </span><span class="atn">dir</span><span class="pun">=</span><span class="atv">"ltr"</span><span class="tag">&gt;</span><span class="pln">
   </span><span class="tag">&lt;head&gt;</span><span class="pln">
      </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span><span class="pln">
      </span><span class="tag">&lt;title&gt;&lt;/title&gt;</span><span class="pln">
   </span><span class="tag">&lt;/head&gt;</span><span class="pln">
   </span><span class="tag">&lt;body&gt;</span><span class="pln">
      </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">returnFalse</span><span class="pun">();</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">Blah</span><span class="tag">&lt;/a&gt;</span><span class="pln">
      </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="tag">&gt;</span><span class="pln">
         </span><span class="kwd">function</span><span class="pln"> returnFalse</span><span class="pun">(){</span><span class="pln">
         console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"returns false without location redirection...."</span><span class="pun">)</span><span class="pln">
             </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
             location</span><span class="pun">.</span><span class="pln">href </span><span class="pun">=</span><span class="pln"> </span><span class="str">"http://www.google.com/"</span><span class="pun">;</span><span class="pln">
         
         </span><span class="pun">}</span><span class="pln">
      </span><span class="tag">&lt;/script&gt;</span><span class="pln">
   </span><span class="tag">&lt;/body&gt;</span><span class="pln">
</span><span class="tag">&lt;/html&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，通过这种方式组合事物，因为jQuery是一个主要关注HTML元素的框架，基本上可以防止使用默认元素，但是与此同时，您可以停止传播以冒泡。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我们可以简单地说，返回false </font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回false是e.preventDefault和e.stopPropagation</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是也不要忘记，所有这些都在jQuery或DOM相关函数中，当您在元素上运行它时，基本上，它可以防止一切触发，包括事件的默认行为和传播。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上使用启动前</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，先了解什么</font></font><code>e.preventDefault();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>e.stopPropagation();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做什么，然后，如果你认为你既需要在同一时间，然后简单地使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以基本上这段代码如下：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">'div'</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">'div'</span><span class="pun">).</span><span class="pln">click</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  event</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">();</span><span class="pln">
  event</span><span class="pun">.</span><span class="pln">stopPropagation</span><span class="pun">();</span><span class="pln">
</span><span class="pun">});</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">hide on</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，我认为使用它总是更好 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">event</span><span class="pun">.</span><span class="pln">preventDefault</span><span class="pun">()</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是在我们需要时停止或阻止提交事件，而不是</font></font><code>return false</code>
   <code>event.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font></p>

<p><code>event.preventDefault()</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是w3c指定的取消事件的方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在W3C规范中有关</font></font><a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-cancelation" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件取消的内容中进行阅读</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，您不能在所有情况下都使用return false。</font><font style="vertical-align: inherit;">当在href属性中提供javascript函数时，如果您返回false，则该用户将被重定向到写有错误字符串的页面。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您的第一个选项（</font></font><code>preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）是要采用的</font><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">，但是您必须知道您所处的环境以及目标是什么。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加油您的编码</font></font></em><font style="vertical-align: inherit;"></font><a href="https://web.archive.org/web/20160429070956/http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font></font><code>event.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font></font><code>event.stopPropagation()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font><font style="vertical-align: inherit;">上</font></font><code>event.stopImmediatePropagation()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一篇很棒的</font><a href="https://web.archive.org/web/20160429070956/http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">文章</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaDavaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顾名思义，这不是一个“ JavaScript”问题。</font><font style="vertical-align: inherit;">这是关于jQuery设计的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的和</font></font><a href="http://www.mail-archive.com/jquery-en@googlegroups.com/msg71371.html" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前链接引用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="http://ejohn.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约翰Resig的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在</font></font><a href="https://stackoverflow.com/users/70393" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">karim79的</font></font></a> <a href="https://stackoverflow.com/questions/1357118/#1357151" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）似乎是如何事件处理程序的一般工作的源误解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实：返回false的事件处理程序将阻止该事件的默认操作。</font><font style="vertical-align: inherit;">它不会停止事件传播。</font><font style="vertical-align: inherit;">自从Netscape Navigator过去以来，事件处理程序就一直以这种方式工作。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Tutorial/More_Event_Handlers#Prevent_Default_Action" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Tutorial/More_Event_Handlers#Prevent_Default_Action" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">文档</font></a><font style="vertical-align: inherit;">说明</font></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了事件处理程序的工作方式</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery中发生的事情与事件处理程序中发生的事情不同。</font><font style="vertical-align: inherit;">DOM事件侦听器和MSIE“附加”事件完全是另一回事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多阅读，请参阅</font></font><a href="http://msdn.microsoft.com/en-us/library/ms536343%28VS.85%29.aspx" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MSDN上的attachEvent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://www.w3.org/TR/DOM-Level-2-Events/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C DOM 2事件文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery时，</font></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在调用它时会做3件事：</font></font></p>

<ol>
<li><code>event.preventDefault();</code></li>
<li><code>event.stopPropagation();</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">停止回调执行并在调用时立即返回。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多信息和示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Events：Stop（Mis）Using Return False</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件中为一个元素</font><font style="vertical-align: inherit;">挂起许多功能</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您如何确定</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个将是最后一个被解雇的人？</font></font><code>preventDefault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，肯定会仅阻止元素的默认行为。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery事件处理程序内部进行</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用实际上</font></font><code>e.preventDefault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>e.stopPropagation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在传递的</font><a href="http://api.jquery.com/category/events/event-object/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">jQuery.Event对象</font></a><font style="vertical-align: inherit;">上进行</font><font style="vertical-align: inherit;">调用相同   </font></font><a href="http://api.jquery.com/category/events/event-object/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></a></p>

<p><code>e.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将防止发生默认事件，</font></font><code>e.stopPropagation()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将防止事件冒泡，并且</font></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都会发生。</font><font style="vertical-align: inherit;">请注意，此行为不同于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（非jQuery的）事件处理程序，其中，值得注意的是，</font></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冒泡停止该事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="http://ejohn.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig</font></font></a></p>

<p><a href="http://www.mail-archive.com/jquery-en@googlegroups.com/msg71371.html" rel="noreferrer" data-bitapp="processed"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用event.preventDefault（）代替“ return false”来取消href点击有什么好处？</font></font></strong></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
