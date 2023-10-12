---
layout: question
title:  jQuery $（document）.ready和UpdatePanels？
date:   2020-03-12T12:43:56.000Z
description: 我正在使用jQuery在UpdatePanel中的元素上附加一些鼠标悬停效果。事件绑定在中$(document).ready。例如：$(functio...
img: 
author: 乐小胖
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery在UpdatePanel中的元素上附加一些鼠标悬停效果。</font><font style="vertical-align: inherit;">事件绑定在中</font></font><code>$(document).ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>$(function() {    <font></font>
    $('div._Foo').bind("mouseover", function(e) {<font></font>
        // Do something exciting<font></font>
    });    <font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，这在第一次加载页面时效果很好，但是当UpdatePanel执行部分页面更新时，它不会运行，并且鼠标悬停效果在UpdatePanel内部不再起作用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不仅在首页加载时，而且在每次UpdatePanel触发部分页面更新时，建议在jQuery中进行接线的推荐方法是什么？</font><font style="vertical-align: inherit;">我应该使用ASP.NET ajax生命周期来代替</font></font><code>$(document).ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1335篇《jQuery $（document）.ready和UpdatePanels？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小卤蛋凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下脚本，并相应地更改脚本的主体。</font></font></p>

<pre><code>       &lt;script&gt;<font></font>
        //Re-Create for on page postbacks<font></font>
        var prm = Sys.WebForms.PageRequestManager.getInstance();<font></font>
        prm.add_endRequest(function () {<font></font>
           //your codes here!<font></font>
        });<font></font>
    &lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三JinJin乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>Sys.Application.add_load(LoadHandler); //This load handler solved update panel did not bind control after partial postback<font></font>
function LoadHandler() {<font></font>
        $(document).ready(function () {<font></font>
        //rebind any events here for controls under update panel<font></font>
        });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次加载后，“更新面板”始终用其内置的Scriptmanager脚本替换您的Jquery。</font><font style="vertical-align: inherit;">如果使用像这样的pageRequestManager的实例方法，效果会更好。</font></font></p>

<pre><code>Sys.WebForms.PageRequestManager.getInstance().add_endRequest(onEndRequest)<font></font>
    function onEndRequest(sender, args) {<font></font>
       // your jquery code here<font></font>
      });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将工作正常... </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阳光乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的答案基于上面的所有专家评论，但下面的代码是任何人都可以用来确保在每次回发和每次异步回发中仍将执行JavaScript代码的以下代码。</font></font></p>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我在页面内有一个用户控件。</font><font style="vertical-align: inherit;">只需将以下代码粘贴到您的用户控件中。</font></font></b></p>

<pre><code>&lt;script type="text/javascript"&gt; <font></font>
        var prm = Sys.WebForms.PageRequestManager.getInstance();<font></font>
    prm.add_endRequest(EndRequestHandler);<font></font>
    function EndRequestHandler(sender, args) {<font></font>
        if (args.get_error() == undefined) {<font></font>
            UPDATEPANELFUNCTION();<font></font>
        }                   <font></font>
    }<font></font>
<font></font>
    function UPDATEPANELFUNCTION() {<font></font>
        jQuery(document).ready(function ($) {<font></font>
            /* Insert all your jQuery events and function calls */<font></font>
        });<font></font>
    }<font></font>
<font></font>
    UPDATEPANELFUNCTION(); <font></font>
<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很棒的插件，可用于更新面板：</font></font></p>

<p><a href="http://updatepanelplugin.codeplex.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://updatepanelplugin.codeplex.com/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>$(document).ready(function (){...})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面回发后不起作用时，请按如下方式在Asp.page中使用JavaScript函数pageLoad：</font></font></p>

<pre><code>&lt;script type="text/javascript" language="javascript"&gt;<font></font>
function pageLoad() {<font></font>
// Initialization code here, meant to run once. <font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FWIW，我在使用mootools时遇到了类似的问题。</font><font style="vertical-align: inherit;">重新添加事件是正确的举动，但需要在请求结束时完成。例如</font></font></p>

<pre><code>var prm = Sys.WebForms.PageRequestManager.getInstance();<font></font>
prm.add_endRequest(function() {... <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果beginRequest使您获得空引用JS异常，则要记住一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱飞云泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>$(document).ready(function() {<font></font>
<font></font>
    // Do something exciting<font></font>
<font></font>
    var prm = Sys.WebForms.PageRequestManager.getInstance();<font></font>
<font></font>
    prm.add_endRequest(function() {<font></font>
        // re-bind your jQuery events here<font></font>
    });<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下使用pageLoad（）函数非常危险。</font><font style="vertical-align: inherit;">您可能使事件多次关联。</font><font style="vertical-align: inherit;">我还应该远离.live（），因为它附加到document元素上，并且必须遍历整个页面（缓慢而cr脚）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我所看到的最好的解决方案是在更新面板外部的包装器上使用jQuery .delegate（）函数并利用冒泡。</font><font style="vertical-align: inherit;">除此之外，您总是可以使用设计用于UpdatePanels的Microsoft Ajax库连接处理程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanGO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，发现最有效的方法是依靠事件冒泡和事件委托来处理它。</font><font style="vertical-align: inherit;">关于事件委托的一件好事是，一旦设置，您就不必在AJAX更新后重新绑定事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在代码中所做的是在更新面板的父元素上设置一个委托。</font><font style="vertical-align: inherit;">更新时不会替换此父元素，因此事件绑定不受影响。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多不错的文章和插件都可以处理jQuery中的事件委托，并且该功能很可能会集成到1.3版本中。</font><font style="vertical-align: inherit;">我参考的文章/插件是：</font></font></p>

<p><a href="http://www.danwebb.net/2008/2/8/event-delegation-made-easy-in-jquery" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.danwebb.net/2008/2/8/event-delegation-made-easy-in-jquery</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦您了解了发生的事情，我想您会发现这是一个更加优雅的解决方案，比记住每次更新后重新绑定事件更可靠。</font><font style="vertical-align: inherit;">这还具有一个额外的好处，即在卸载页面时为您提供一个取消绑定的事件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用以下方法之一：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将事件绑定封装在函数中，并在每次更新页面时运行它。</font><font style="vertical-align: inherit;">您始终可以将事件绑定包含到特定元素，以免将事件多次绑定到相同元素。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://docs.jquery.com/Plugins/livequery" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">livequery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件，该插件基本上可以自动为您执行方法一。</font><font style="vertical-align: inherit;">您的首选项可能会有所不同，具体取决于您希望对事件绑定进行控制的程度。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script type="text/javascript"&gt;<font></font>
<font></font>
        function BindEvents() {<font></font>
            $(document).ready(function() {<font></font>
                $(".tr-base").mouseover(function() {<font></font>
                    $(this).toggleClass("trHover");<font></font>
                }).mouseout(function() {<font></font>
                    $(this).removeClass("trHover");<font></font>
                });<font></font>
         }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将要更新的区域。</font></font></p>

<pre><code>&lt;asp:UpdatePanel...<font></font>
&lt;ContentTemplate<font></font>
     &lt;script type="text/javascript"&gt;<font></font>
                    Sys.Application.add_load(BindEvents);<font></font>
     &lt;/script&gt;<font></font>
 *// Staff*<font></font>
&lt;/ContentTemplate&gt;<font></font>
    &lt;/asp:UpdatePanel&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UpdatePanel完全替换更新中更新面板的内容。</font><font style="vertical-align: inherit;">这意味着您订阅的那些事件不再被订阅，因为该更新面板中有新的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的方法是，在每次更新后重新订阅我需要的事件。</font><font style="vertical-align: inherit;">我使用</font></font><code>$(document).ready()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始负载，然后使用Microsoft的PageRequestManager（如果页面上有更新面板，则可用）重新订阅每个更新。  </font></font></p>

<pre><code>$(document).ready(function() {<font></font>
    // bind your jQuery events here initially<font></font>
});<font></font>
<font></font>
var prm = Sys.WebForms.PageRequestManager.getInstance();<font></font>
<font></font>
prm.add_endRequest(function() {<font></font>
    // re-bind your jQuery events here<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>PageRequestManager</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个JavaScript对象，它是自动可用如果更新面板是在页面上。</font><font style="vertical-align: inherit;">只要页面上有UpdatePanel，就不需要使用上面的代码做任何事情即可使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要更详细的控制，则此事件传递的参数类似于.NET事件传递参数的方式，</font></font><code>(sender, eventArgs)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此您可以查看引发该事件的原因，并仅在需要时重新绑定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是来自Microsoft的文档的最新版本：</font></font><a href="http://msdn.microsoft.com/en-us/library/bb383810.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">msdn.microsoft.com/.../bb383810.aspx</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的需求，您可能有一个更好的选择是使用jQuery </font></font><a href="http://api.jquery.com/on/" rel="noreferrer"><code>.on()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这些方法比每次更新都重新订阅DOM元素更为有效。</font><font style="vertical-align: inherit;">但是，在使用此方法之前，请先阅读所有文档，因为它可能会满足您的需求，也可能无法满足您的需求。</font><font style="vertical-align: inherit;">有很多jQuery插件无法重构为使用</font></font><code>.delegate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>.on()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此在这种情况下，最好重新订阅。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry猴子A</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的答案？ </font></font></p>

<pre><code>function pageLoad() {<font></font>
<font></font>
  $(document).ready(function(){<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像魅力一样运作，许多其他解决方案惨遭失败。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
