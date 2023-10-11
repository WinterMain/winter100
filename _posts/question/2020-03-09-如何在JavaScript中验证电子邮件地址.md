---
layout: question
title:  如何在JavaScript中验证电子邮件地址
date:   2020-03-09T04:38:20.000Z
description: 是否有正则表达式来验证JavaScript中的电子邮件地址？...
img: 
author: 卡卡西Harry
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有正则表达式来验证JavaScript中的电子邮件地址？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第146篇《如何在JavaScript中验证电子邮件地址》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">form name</span><span class="pun">=</span><span class="str">"validation"</span><span class="pln"> onSubmit</span><span class="pun">=</span><span class="str">"return checkbae()"</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="typ">Please</span><span class="pln"> input a valid email address</span><span class="pun">:&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span><span class="pln">

    </span><span class="pun">&lt;</span><span class="pln">input type</span><span class="pun">=</span><span class="str">"text"</span><span class="pln"> size</span><span class="pun">=</span><span class="lit">18</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"emailcheck"</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">input type</span><span class="pun">=</span><span class="str">"submit"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"Submit"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">form</span><span class="pun">&gt;</span><span class="pln">

</span><span class="pun">&lt;</span><span class="pln">script language</span><span class="pun">=</span><span class="str">"JavaScript1.2"</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> testresults
    </span><span class="kwd">function</span><span class="pln"> checkemail</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> str </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">validation</span><span class="pun">.</span><span class="pln">emailcheck</span><span class="pun">.</span><span class="pln">value
        </span><span class="kwd">var</span><span class="pln"> filter </span><span class="pun">=</span><span class="pln"> </span><span class="str">/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/</span><span class="pln">i
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">filter</span><span class="pun">.</span><span class="pln">test</span><span class="pun">(</span><span class="pln">str</span><span class="pun">))</span><span class="pln">
            testresults </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
        </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            alert</span><span class="pun">(</span><span class="str">"Please input a valid email address!"</span><span class="pun">)</span><span class="pln">
            testresults </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">testresults</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">

</span><span class="pun">&lt;</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="kwd">function</span><span class="pln"> checkbae</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">layers </span><span class="pun">||</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById </span><span class="pun">||</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">all</span><span class="pun">)</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> checkemail</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">else</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Microsoft在</font></font><a href="http://en.wikipedia.org/wiki/ASP.NET_MVC_Framework" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASP.NET MVC中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供的正则表达式</font><font style="vertical-align: inherit;">为</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果存在缺陷，我会在此处发布-尽管它始终非常适合我的需求。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，就是这样：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">/^([\w\!\#$\%\&amp;\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&amp;\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/</span><span class="pln">i</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取自</font><font style="vertical-align: inherit;">10年10月1日</font></font><a href="http://fightingforalostcause.net/misc/2006/compare-email-regex.php" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://fightingforalostcause.net/misc/2006/compare-email-regex.php</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当然，这忽略了国际化。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是有关使用正则表达式验证电子邮件地址的很好的讨论。</font><font style="vertical-align: inherit;">“ </font></font><a href="http://fightingforalostcause.net/misc/2006/compare-email-regex.php" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较验证正则表达式的电子邮件地址</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是当前与JavaScript兼容的顶级表达式，仅供参考：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">/^[-a-z0-9~!$%^&amp;*_=+}{\'?]+(\.[-a-z0-9~!$%^&amp;*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/</span><span class="pln">i</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO路易西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不检查TLD是否存在的解决方案是不完整的。</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此问题的几乎所有答案都建议使用Regex来验证电子邮件地址。</font><font style="vertical-align: inherit;">我认为Regex仅适用于基本验证。</font><font style="vertical-align: inherit;">看来，电子邮件地址的检查验证实际上是两个独立的问题：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-电子邮件格式的验证：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保电子邮件是否符合RFC 5322中电子邮件的格式和模式，以及TLD是否实际存在。</font><font style="vertical-align: inherit;">您可以在</font></font><a href="http://data.iana.org/TLD/tlds-alpha-by-domain.txt" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到所有有效TLD的列表</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，尽管该地址</font></font><code>example@example.ccc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将通过正则表达式，但它不是有效的电子邮件，因为</font></font><code>ccc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是IANA的顶级域。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-确保电子邮件确实存在：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的选择</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="https://davidcel.is/posts/stop-validating-email-addresses-with-regex/#just-send-them-an-email-already" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向用户发送电子邮件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很难使电子邮件验证程序100％正确。</font><font style="vertical-align: inherit;">使其正确的唯一真实方法是向该帐户发送测试电子邮件。</font><font style="vertical-align: inherit;">也就是说，有一些基本的检查可以帮助确保您得到的东西合理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些需要改进的地方：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替new </font></font><code>RegExp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需尝试</font></font><code>regexp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">写出</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">reg</span><span class="pun">.</span><span class="pln">test</span><span class="pun">(</span><span class="str">/@/</span><span class="pun">))</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，检查以确保在</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font><font style="vertical-align: inherit;">后有一个句</font><font style="vertical-align: inherit;">点，并确保在</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s和句点</font><font style="vertical-align: inherit;">之间有字符</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Harry十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在验证函数中使用以下代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> emailID </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">forms</span><span class="pun">[</span><span class="str">"formName"</span><span class="pun">][</span><span class="str">"form element id"</span><span class="pun">].</span><span class="pln">value</span><span class="pun">;</span><span class="pln">
atpos </span><span class="pun">=</span><span class="pln"> emailID</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="str">"@"</span><span class="pun">);</span><span class="pln">
dotpos </span><span class="pun">=</span><span class="pln"> emailID</span><span class="pun">.</span><span class="pln">lastIndexOf</span><span class="pun">(</span><span class="str">"."</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">atpos </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> dotpos </span><span class="pun">-</span><span class="pln"> atpos </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">))</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"Please enter correct email ID"</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您可以使用</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">内部规则定义：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">eMailId</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    required</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
    email</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://github.com/chriso/validator.js" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点验证器的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作方式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">/^(?:[\w\!\#\$\%\&amp;\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&amp;\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一凯Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用HTML来检查输入的电子邮件地址是否有效。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">input type</span><span class="pun">=</span><span class="str">"email"</span><span class="pun">/&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需编写任何函数进行验证。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有电子邮件地址都包含一个“ @”符号。</font><font style="vertical-align: inherit;">测试必要条件：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">email</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="str">"@"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要为更复杂的事情而烦恼。</font><font style="vertical-align: inherit;">即使您可以完美地确定电子邮件在RFC语法上是否有效，也不会告诉您电子邮件是否属于提供电子邮件的人。</font><font style="vertical-align: inherit;">那才是真正重要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要进行测试，请发送验证消息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小胖米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哇，这里有很多复杂性。</font><font style="vertical-align: inherit;">如果您只想捕捉最明显的语法错误，我将执行以下操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">^</span><span class="pln">\S</span><span class="pun">+@</span><span class="pln">\S</span><span class="pun">+</span><span class="pln">$</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它通常会捕获用户所犯的最明显的错误，并确保表单最正确，这就是JavaScript验证的全部内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于需要真正简单验证的人，我对Jaymon的答案做了一些修改：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">anystring@anystring</span><span class="pun">.</span><span class="pln">anystring</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">/\S+@\S+\.\S+/</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript函数示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> validateEmail</span><span class="pun">(</span><span class="pln">email</span><span class="pun">)</span><span class="pln"> 
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> re </span><span class="pun">=</span><span class="pln"> </span><span class="str">/\S+@\S+\.\S+/</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> re</span><span class="pun">.</span><span class="pln">test</span><span class="pun">(</span><span class="pln">email</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在决定使用正则表达式验证电子邮件时，您需要了解一些内容：</font></font><a href="http://ex-parrot.com/~pdw/Mail-RFC822-Address.html" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是一个好主意</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一旦您对此有所了解，就有许多实现可以使您半途而废，</font></font><a href="http://www.regular-expressions.info/email.html" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文对它们进行了很好的总结。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，唯一可以绝对肯定地确定用户输入的实际上是电子邮件的唯一方法是实际发送电子邮件并查看会发生什么。</font><font style="vertical-align: inherit;">除此之外，所有这些只是猜测。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
