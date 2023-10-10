---
layout: question
title:  为什么Google会优先使用while（1）; 他们的JSON响应？
date:   2020-03-09T04:46:39.000Z
description: Google为什么要优先while(1);使用其（私有）JSON响应？例如，这是在Google日历中打开和关闭日历时的响应：while (1);...
img: 
author: 神奇西里泡芙
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google为什么要优先</font></font><code>while(1);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用其（私有）JSON响应？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，这是在</font></font><a href="https://calendar.google.com/calendar/about/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google日历中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开和关闭日历时的响应</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="lit">1</span><span class="pun">);</span><span class="pln">
</span><span class="pun">[</span><span class="pln">
  </span><span class="pun">[</span><span class="str">'u'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'smsSentFlag'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'false'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'hideInvitations'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'false'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'remindOnRespondedEventsOnly'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'true'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'hideInvitations_remindOnRespondedEventsOnly'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'false_true'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'Calendar ID stripped for privacy'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'false'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">[</span><span class="str">'smsVerifiedFlag'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'true'</span><span class="pun">]</span><span class="pln">
  </span><span class="pun">]]</span><span class="pln">
</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是为了防止人们</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此进行操作，但是您真正要做的就是替换</font></font><code>while</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后进行设置。</font><font style="vertical-align: inherit;">我认为评估的目的是确保人们编写安全的JSON解析代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也曾在其他几个地方使用过此功能，但在Google（邮件，日历，通讯录等）中使用了更多功能。奇怪的是，</font></font><a href="https://www.google.com/docs/about/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以开头，</font></font><code>&amp;&amp;&amp;START&amp;&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而Google Contacts似乎以开头</font></font><code>while(1); &amp;&amp;&amp;START&amp;&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里发生了什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">身份验证到位后，JSON劫持保护可以采取多种形式。</font><font style="vertical-align: inherit;">Google将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while（1）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加</font><font style="vertical-align: inherit;">到其JSON数据中，因此，如果有任何恶意脚本对其进行评估，则该恶意脚本会进入无限循环。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="https://books.google.co.nz/books?id=VmrSJ3V-s_MC&amp;lpg=PA214&amp;ots=cXaR_XGXSH&amp;dq=google%20while(1)&amp;pg=PA214#v=onepage&amp;q=google%20while(1)&amp;f=false" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web安全测试手册：快速发现问题的系统技术</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：从2019年开始，导致该问题中讨论的预防措施的许多旧漏洞不再是现代浏览器中的问题。</font><font style="vertical-align: inherit;">我将以下答案保留为历史性的好奇心，但实际上自2010年问起以来，整个主题已经发生了根本变化（!!）。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它防止将其用作简单</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的目标</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（好吧，这并不能阻止它，但是它使它不愉快。）那样，坏蛋就不能只将脚本标记放在自己的站点中，而是依靠活动会话来获取内容。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -注意评论（和其他答案）。</font><font style="vertical-align: inherit;">这个问题与颠覆的内置功能有关，特别是</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数。</font><font style="vertical-align: inherit;">可以对其进行更改，以使否则当解析时使用无害的JSON可能会触发攻击者代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使第三方很难将带有</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的JSON响应插入到HTML文档中</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请记住，该</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签不受“ </font></font><a href="http://en.wikipedia.org/wiki/Same_origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同来源政策”的约束</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以防止</font></font><a href="http://haacked.com/archive/2009/06/25/json-hijacking.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON劫持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是</font><a href="https://caniuse.com/#feat=es5" rel="noreferrer"><font style="vertical-align: inherit;">自2011年以来</font></a><font style="vertical-align: inherit;">使用ECMAScript 5 </font><font style="vertical-align: inherit;">在所有主要浏览器中</font><font style="vertical-align: inherit;">正式</font></font><a href="https://security.stackexchange.com/questions/155518/why-json-hijacking-attack-doesnt-work-in-modern-browsers-how-was-it-fixed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主要JSON安全问题</font><font style="vertical-align: inherit;">。</font></font><a href="https://caniuse.com/#feat=es5" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人为的例子：假设Google有一个类似的URL </font></font><code>mail.google.com/json?action=inbox</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它以JSON格式返回收件箱中的前50条消息。</font><font style="vertical-align: inherit;">由于同源政策，其他域上的邪恶网站无法发出AJAX请求来获取此数据，但它们可以通过</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">包含URL </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该URL访问了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">饼干，并通过</font></font><a href="http://ejohn.org/blog/re-securing-json/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖全球的数组构造或访问方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，他们可以当一个对象（数组或哈希）属性设置呼吁的方法，使他们能够读取JSON内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>while(1);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&amp;&amp;&amp;BLAH&amp;&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防止这样的：在一个AJAX请求</font></font><code>mail.google.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将具有完全访问的文本内容，并且可以去除它扔掉。</font><font style="vertical-align: inherit;">但是，</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插入标签会盲目地执行JavaScript，而不进行任何处理，从而导致无限循环或语法错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不能解决</font></font><a href="https://en.wikipedia.org/wiki/Cross-site_request_forgery" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨站点请求伪造的问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于该</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记不受Web世界中安全性必需的Same Origin Policy的限制，因此将其</font></font><code>while(1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到JSON响应后，可以防止在</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记中</font><font style="vertical-align: inherit;">滥用该</font><font style="vertical-align: inherit;">标记。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为了确保其他某些网站无法采取令人讨厌的手段来窃取您的数据。</font><font style="vertical-align: inherit;">例如，通过</font></font><a href="http://ejohn.org/blog/re-securing-json/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换数组构造函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后通过</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">包含此JSON URL </font><font style="vertical-align: inherit;">，恶意的第三方站点可能会从JSON响应中窃取数据。</font><font style="vertical-align: inherit;">通过将a </font></font><code>while(1);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在开头，脚​​本将挂起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，使用XHR和单独的JSON解析器的同一站点请求可以轻松忽略该</font></font><code>while(1);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前缀。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
