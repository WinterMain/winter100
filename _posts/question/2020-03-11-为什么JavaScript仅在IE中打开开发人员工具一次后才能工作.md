---
layout: question
title:  为什么JavaScript仅在IE中打开开发人员工具一次后才能工作？
date:   2020-03-11T12:22:41.000Z
description: IE9错误-JavaScript仅在打开开发人员工具一次后才能工作。我们的网站为用户提供免费的pdf下载，并且具有简单的“输入密码下载”功能。但是，它...
img: 
author: Mandy猴子阿飞
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE9错误-JavaScript仅在打开开发人员工具一次后才能工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的网站为用户提供免费的pdf下载，并且具有简单的“输入密码下载”功能。</font><font style="vertical-align: inherit;">但是，它根本无法在Internet Explorer中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此</font></font><a href="http://www.makeuseof.com/pages/how-to-use-virtual-box"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例中，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以自己看到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载通行证为“ makeuseof”。</font><font style="vertical-align: inherit;">在任何其他浏览器中，它都可以正常工作。</font><font style="vertical-align: inherit;">在IE中，两个按钮都不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的最奇怪的事情是，如果使用F12打开和关闭开发人员工具栏，则所有这些突然开始工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经尝试了兼容模式，因此没有任何区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Internet Explorer中进行这项工作？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第807篇《为什么JavaScript仅在IE中打开开发人员工具一次后才能工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我提出解决方案并解决了我的问题。</font><font style="vertical-align: inherit;">我放入JavaScript的AJAX请求似乎没有处理，因为我的页面存在缓存问题。</font><font style="vertical-align: inherit;">如果您的网站或页面存在缓存问题，则在Developers / F12模式下不会看到该问题。</font><font style="vertical-align: inherit;">我的缓存JavaScript AJAX请求它​​可能无法按预期运行，并导致执行中断，F12完全没有问题。</font><font style="vertical-align: inherit;">因此，只需添加新参数即可使缓存为假。</font></font></p>

<pre><code>$.ajax({<font></font>
  cache: false,<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来IE特别需要将此设置为false，以便AJAX和javascript活动运行良好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们在Windows 7和Windows 10的IE 11上遇到了这个问题。我们通过打开IE的调试功能（IE&gt; Internet选项&gt;高级选项卡&gt;浏览&gt;取消选中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用脚本调试（Internet Explorer）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）发现了问题所在。</font><font style="vertical-align: inherit;">域管理员通常在我们的环境中选中此功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是因为我们</font></font><code>console.debug(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript代码</font><font style="vertical-align: inherit;">中使用了该</font><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">开发人员（我）所做的假设是，如果客户端开发人员工具控制台未显式打开，我不希望编写任何内容。</font><font style="vertical-align: inherit;">尽管Chrome和Firefox似乎同意这一策略，但IE 11一点也不喜欢它。</font><font style="vertical-align: inherit;">通过将所有</font></font><code>console.debug(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><code>console.log(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句，我们可以继续在客户端控制台中记录其他信息，并在打开时查看该信息，否则可以将其隐藏给普通用户。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaLEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><a href="https://stackoverflow.com/a/12307201/1845976"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">runeks</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/a/10247139/1845976"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">todotresde</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供的解决方案，我还有另一种选择，</font><font style="vertical-align: inherit;">它也避免了对</font></font><a href="https://stackoverflow.com/a/7742862/1845976"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Spudley</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案</font><font style="vertical-align: inherit;">的评论中讨论的陷阱</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>        try {<font></font>
            console.log(message);<font></font>
        } catch (e) {<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它有点sc，但是另一方面，它简洁明了，涵盖了</font></font><a href="https://stackoverflow.com/a/12307201/1845976"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">runeks</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案中</font><font style="vertical-align: inherit;">涵盖的所有日志记录方法</font><font style="vertical-align: inherit;">，它具有巨大的优势，您可以随时打开IE的控制台窗口，并且日志会流入。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ASamJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我进行了较小的更改后，这解决了我的问题。</font><font style="vertical-align: inherit;">我在html页面中添加了以下内容，以解决IE9问题：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    // IE9 fix<font></font>
    if(!window.console) {<font></font>
        var console = {<font></font>
            log : function(){},<font></font>
            warn : function(){},<font></font>
            error : function(){},<font></font>
            time : function(){},<font></font>
            timeEnd : function(){}<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐伽罗古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想这可能会有所帮助，将其添加到任何javascript标签之前：</font></font></p>

<pre><code>try{<font></font>
  console<font></font>
}catch(e){<font></font>
   console={}; console.log = function(){};<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来您的javascript中可能有一些调试代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您所描述的经验是包含</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何其他</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能的</font><font style="vertical-align: inherit;">典型代码</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在打开“开发工具栏”时激活</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">在此之前，调用控制台对象将导致其报告为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">打开工具栏后，控制台将存在（即使随后关闭了工具栏），因此您的控制台调用也将起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最明显的方法是检查代码中对的引用</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">无论如何，您都不应该在生产代码中留下类似的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要保留控制台引用，则可以将它们包装在一条</font></font><code>if()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句中</font><font style="vertical-align: inherit;">，也可以将其包装在</font><font style="vertical-align: inherit;">其他条件中，以在尝试调用控制台对象之前检查控制台对象是否存在。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font><font style="vertical-align: inherit;">外，这还有另一个可能的原因</font><font style="vertical-align: inherit;">（至少在IE11中）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未打开控制台，则IE会进行积极的缓存，因此请确保将任何</font></font><code>$.ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用或</font></font><code>XMLHttpRequest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用的缓存设置为false。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>$.ajax({cache: false, ...})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发人员控制台后，缓存的积极性就会降低。</font><font style="vertical-align: inherit;">似乎是一个错误（或者是一个功能？）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了已</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案和其他提到</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">“使用问题</font><font style="vertical-align: inherit;">”外</font><font style="vertical-align: inherit;">，至少还有另一个原因为什么有时Internet Explorer中的页面只能在激活的开发人员工具下工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用开发人员工具后，IE不会像在正常模式下那样真正使用其HTTP缓存（至少在IE 11中是默认设置）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着，如果您的站点或页面存在缓存问题（例如，如果它缓存的缓存超过了应有的数量，例如我的情况），则在F12模式下您将不会看到该问题。</font><font style="vertical-align: inherit;">因此，如果javascript执行某些缓存的AJAX请求，则它们可能无法在正常模式下按预期工作，并且在F12模式下可以正常工作。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
